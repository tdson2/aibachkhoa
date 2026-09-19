/* Ingest: the beacon endpoint and the server-side download counter.
 *
 * Two things are measured in two different places on purpose.
 *
 * Pages and interactions arrive from the browser, because only the browser
 * knows how far someone scrolled or how long they stayed. Downloads are
 * counted here, on the request for the file itself, because a direct link
 * pasted into a chat window never runs our JavaScript — the click the page
 * reports is used to attribute a download to a visitor, and the request
 * below is what the download total is actually made of.
 */
const crypto = require('crypto');
const store = require('./store');
const enrich = require('./enrich');

const MAX_BODY = 8 * 1024;          // a beacon that big is not one of ours
const MAX_EVENTS_PER_BEACON = 20;
const RATE_LIMIT = 240;             // events per address per minute
const RATE_WINDOW = 60000;

const TYPES = new Set(['view', 'scroll', 'engage', 'click', 'pref']);
const CLICK_KINDS = new Set(['download', 'play', 'appstore', 'mailto', 'outbound', 'cta', 'nav', 'policy', 'form']);

// The salt lives only in memory and is replaced every day, so the hashes that
// rate limiting and download de-duplication work with cannot be walked back
// to an address, and nothing derived from an address is ever written down.
let salt = crypto.randomBytes(32);
setInterval(() => { salt = crypto.randomBytes(32); }, 86400000).unref();

function clientIp(req) {
    const forwarded = req.headers['cf-connecting-ip'] || req.headers['x-real-ip']
        || String(req.headers['x-forwarded-for'] || '').split(',')[0].trim();
    return forwarded || req.socket.remoteAddress || '';
}

function idOf(req) {
    return crypto.createHash('sha256').update(salt).update(clientIp(req)).digest('base64').slice(0, 16);
}

const hits = new Map();
setInterval(() => {
    const cutoff = Date.now() - RATE_WINDOW;
    for (const [key, list] of hits) {
        const kept = list.filter(t => t > cutoff);
        if (kept.length) hits.set(key, kept); else hits.delete(key);
    }
}, RATE_WINDOW).unref();

function overLimit(id, count) {
    const now = Date.now();
    const list = (hits.get(id) || []).filter(t => t > now - RATE_WINDOW);
    if (list.length + count > RATE_LIMIT) { hits.set(id, list); return true; }
    for (let i = 0; i < count; i++) list.push(now);
    hits.set(id, list);
    return false;
}

const str = (value, max) => String(value == null ? '' : value).slice(0, max);
const num = (value, max) => {
    const n = Number(value);
    return Number.isFinite(n) && n >= 0 ? Math.min(Math.round(n), max) : 0;
};

function readBody(req) {
    return new Promise((resolve, reject) => {
        let size = 0;
        const chunks = [];
        req.on('data', chunk => {
            size += chunk.length;
            if (size > MAX_BODY) { reject(new Error('too large')); req.destroy(); return; }
            chunks.push(chunk);
        });
        req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
        req.on('error', reject);
    });
}

function metaFor(type, raw) {
    const meta = raw && typeof raw.d === 'object' && raw.d ? raw.d : {};
    if (type === 'scroll') return { depth: num(meta.depth, 100) };
    if (type === 'engage') return { dwell: num(meta.dwell, 3600000), depth: num(meta.depth, 100) };
    if (type === 'click') {
        const kind = str(meta.kind, 12);
        return {
            kind: CLICK_KINDS.has(kind) ? kind : 'outbound',
            href: str(meta.href, 200),
            label: str(meta.label, 60)
        };
    }
    if (type === 'pref') return { what: str(meta.what, 8), value: str(meta.value, 12) };
    if (type === 'view') return { vw: num(meta.vw, 10000), theme: str(meta.theme, 8) };
    return {};
}

/* One beacon carries a batch of events for one page, so the visitor, the
 * user-agent and the country are resolved once and stamped onto each. */
function handleCollect(req, res) {
    res.setHeader('Cache-Control', 'no-store');

    const ua = req.headers['user-agent'] || '';
    // A crawler that executes JavaScript still has no business in the numbers
    // a person reads to decide where to spend money.
    if (enrich.isBot(ua)) return res.status(204).end();

    readBody(req).then(body => {
        let payload;
        try { payload = JSON.parse(body); } catch (_) { return res.status(400).end(); }
        if (!payload || !Array.isArray(payload.events) || !payload.events.length) return res.status(400).end();

        const batch = payload.events.slice(0, MAX_EVENTS_PER_BEACON);
        if (overLimit(idOf(req), batch.length)) return res.status(429).end();

        const vid = str(payload.vid, 36);
        const sid = str(payload.sid, 36);
        if (!vid || !sid) return res.status(400).end();

        const agent = enrich.parseUA(ua);
        const country = enrich.country(req);
        const now = Date.now();

        for (const item of batch) {
            const type = str(item && item.t, 12);
            if (!TYPES.has(type)) continue;

            const where = enrich.classifyPath(item.p);
            const referrer = str(item.r, 300);
            store.write({
                ts: now,
                type,
                vid,
                sid,
                nv: payload.nv ? 1 : 0,          // first session this browser has had
                path: where.path,
                canon: where.canonical,
                kind: where.kind,
                product: where.product,
                lang: where.lang,
                ref: enrich.referrerHost(referrer),
                src: enrich.source(referrer, str(item.q, 300), req.headers.host),
                country,
                device: agent.device,
                browser: agent.browser,
                os: agent.os,
                meta: metaFor(type, item)
            });
        }
        res.status(204).end();
    }).catch(() => { if (!res.headersSent) res.status(400).end(); });
}

/* Download counting.
 *
 * The same person clicking twice, a browser re-requesting after a dropped
 * connection and a resumed transfer all reach this handler again; none of
 * them is a second download. A hash of the address plus the file name, held
 * for half an hour, is enough to collapse them. */
const INSTALLER = /\.(dmg|zip|deb|tar\.gz|exe|msi|pkg|apk|appimage)$/i;
const DEDUPE_MS = 1800000;
const recent = new Map();
setInterval(() => {
    const cutoff = Date.now() - DEDUPE_MS;
    for (const [key, ts] of recent) if (ts < cutoff) recent.delete(key);
}, 600000).unref();

const PLATFORM = [
    [/\.(dmg|pkg)$/i, 'macOS'],
    [/\.(zip|exe|msi)$/i, 'Windows'],
    [/\.(deb|tar\.gz|appimage)$/i, 'Linux'],
    [/\.apk$/i, 'Android']
];

function downloadTracker(req, res, next) {
    if (req.method !== 'GET' || !req.path.startsWith('/downloads/')) return next();

    let file;
    try { file = decodeURIComponent(req.path.slice('/downloads/'.length)); } catch (_) { return next(); }
    // The checksum files sit beside the installers and are not a download in
    // the sense anyone means when they ask how many downloads there were.
    if (!INSTALLER.test(file)) return next();

    // A range request that does not start at byte zero is the rest of a
    // transfer that has already been counted.
    const range = req.headers.range || '';
    if (range && !/^bytes=0-/.test(range)) return next();

    const ua = req.headers['user-agent'] || '';
    if (enrich.isBot(ua)) return next();

    const key = idOf(req) + '|' + file;
    const now = Date.now();
    if (recent.has(key) && now - recent.get(key) < DEDUPE_MS) return next();
    recent.set(key, now);

    const referrer = req.headers.referer || '';
    let fromPath = '/';
    try { fromPath = new URL(referrer).pathname; } catch (_) { /* typed or pasted link */ }
    const from = enrich.classifyPath(fromPath);
    const agent = enrich.parseUA(ua);
    const platform = (PLATFORM.find(([re]) => re.test(file)) || [null, 'Other'])[1];

    store.write({
        ts: now,
        type: 'download',
        vid: '',
        sid: '',
        nv: 0,
        path: req.path,
        canon: req.path,
        kind: 'download',
        product: from.product,
        lang: from.lang,
        ref: enrich.referrerHost(referrer),
        src: enrich.source(referrer, '', req.headers.host),
        country: enrich.country(req),
        device: agent.device,
        browser: agent.browser,
        os: agent.os,
        meta: { file, platform }
    });
    next();
}

module.exports = { handleCollect, downloadTracker };
