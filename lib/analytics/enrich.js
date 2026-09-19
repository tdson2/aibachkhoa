/* Turns a raw request plus a beacon payload into the flat record the store
 * keeps. Everything here is derived from headers the browser already sends;
 * nothing identifying is kept — the IP address is used for rate limiting and
 * for the country header and is never written to disk.
 */
const fs = require('fs');
const path = require('path');

const PUBLIC = path.join(__dirname, '..', '..', 'public');

const LANGS = new Set(['en', 'es', 'zh', 'hi', 'ar', 'pt', 'fr', 'de', 'ja', 'ko', 'ru', 'vi']);

// Directories under public/ that are not a product page.
const NOT_PRODUCTS = new Set(['assets', 'downloads']);

/* The product list is read from the filesystem rather than hard-coded: the
 * translated pages are generated and new products arrive as new folders, so
 * any list written here would only ever fall behind. */
function readProducts() {
    const out = new Map();
    let entries;
    try { entries = fs.readdirSync(PUBLIC, { withFileTypes: true }); } catch (_) { return out; }
    for (const entry of entries) {
        if (!entry.isDirectory()) continue;
        if (NOT_PRODUCTS.has(entry.name) || LANGS.has(entry.name)) continue;
        if (!fs.existsSync(path.join(PUBLIC, entry.name, 'index.html'))) continue;
        out.set(entry.name, prettify(entry.name));
    }
    return out;
}

const SPECIAL_NAMES = { bksafe: 'BKSafe', locallex: 'LocalLex', genvideo: 'GenVideo' };
const MINOR_WORDS = new Set(['of', 'the', 'and', 'a', 'an', 'in', 'on']);

function prettify(slug) {
    if (SPECIAL_NAMES[slug]) return SPECIAL_NAMES[slug];
    return slug.split('-')
        .map((word, index) => (index > 0 && MINOR_WORDS.has(word))
            ? word
            : word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

let PRODUCTS = readProducts();
// Cheap enough to redo hourly, which picks up a product added by a deploy
// that did not restart the process.
setInterval(() => { PRODUCTS = readProducts(); }, 3600000).unref();

/* Splits "/es/bksafe/policy" into its language, its product and the kind of
 * page it is. The kind is what the dashboard groups by: a reader wants to
 * know how the detail pages are doing, not how each of 150 URLs is doing. */
function classifyPath(rawPath) {
    let p = String(rawPath || '/').split('?')[0].split('#')[0];
    if (!p.startsWith('/')) p = '/' + p;
    p = p.replace(/\/+$/, '') || '/';

    const parts = p.split('/').filter(Boolean);
    let lang = 'en';
    if (parts.length && LANGS.has(parts[0])) { lang = parts.shift(); }

    const slug = parts[0] || '';
    const product = PRODUCTS.has(slug) ? slug : null;

    let kind;
    if (!parts.length) kind = 'home';
    else if (parts[parts.length - 1] === 'policy') kind = 'policy';
    else if (product) kind = 'detail';
    else kind = 'other';

    // The canonical path drops the language prefix so that /bksafe and
    // /es/bksafe are one row in the page table, with language as its own
    // dimension. The language-specific path stays available in `path`.
    return { path: p, canonical: '/' + parts.join('/'), lang, product, kind };
}

const BOT = /bot|crawl|spider|slurp|headless|phantom|puppeteer|playwright|lighthouse|preview|fetcher|curl|wget|python-requests|axios|monitor|uptime|pingdom|facebookexternalhit|whatsapp|telegram|discord|slackbot|ahrefs|semrush|mj12|dotbot|bytespider|gptbot|claudebot|ccbot/i;

function isBot(ua) { return !ua || BOT.test(ua); }

/* A deliberately small user-agent reader. A full parsing library would add a
 * dependency and a monthly signature update for three fields that only ever
 * feed a bar chart; the buckets below are the ones a decision is made on. */
function parseUA(ua) {
    const s = String(ua || '');

    let os = 'Other';
    if (/Windows NT/.test(s)) os = 'Windows';
    else if (/Android/.test(s)) os = 'Android';
    else if (/(iPhone|iPad|iPod)/.test(s)) os = 'iOS';
    else if (/Mac OS X/.test(s)) os = 'macOS';
    else if (/CrOS/.test(s)) os = 'ChromeOS';
    else if (/Linux/.test(s)) os = 'Linux';

    let browser = 'Other';
    if (/Edg\//.test(s)) browser = 'Edge';
    else if (/OPR\/|Opera/.test(s)) browser = 'Opera';
    else if (/SamsungBrowser/.test(s)) browser = 'Samsung';
    else if (/Firefox\//.test(s)) browser = 'Firefox';
    else if (/Chrome\//.test(s)) browser = 'Chrome';
    else if (/Safari\//.test(s)) browser = 'Safari';

    let device = 'Desktop';
    if (/iPad|Tablet/.test(s) || (/Android/.test(s) && !/Mobile/.test(s))) device = 'Tablet';
    else if (/Mobi|iPhone|iPod|Android/.test(s)) device = 'Mobile';

    return { os, browser, device };
}

/* Country comes from the edge, not from a local IP database: the site is
 * served through a Cloudflare tunnel, which sets CF-IPCountry on every
 * request it forwards. Reached without the tunnel — straight over the
 * published port, or from the host itself — there is no header and the
 * country is unknown, which the dashboard shows honestly rather than
 * guessing at from an address. */
function country(req) {
    const value = req.headers['cf-ipcountry'] || '';
    const code = String(value).toUpperCase();
    return /^[A-Z]{2}$/.test(code) && code !== 'XX' ? code : 'ZZ';
}

const SEARCH = /google|bing|yahoo|duckduckgo|yandex|baidu|ecosia|brave|naver|seznam|qwant/i;
const SOCIAL = /facebook|instagram|twitter|^t\.co$|linkedin|reddit|youtube|tiktok|pinterest|threads|mastodon|telegram|zalo|discord/i;

/* Where the visit came from, as four buckets plus paid. `ads` wins over the
 * rest: a visit carrying a gclid is a click that was paid for even when the
 * referrer says google.com, and that is the number the ad spend is judged on. */
function source(referrer, query, selfHost) {
    const q = String(query || '');
    if (/[?&](gclid|gbraid|wbraid|msclkid)=/.test(q) || /[?&]utm_medium=(cpc|ppc|paid)/i.test(q)) return 'ads';
    if (/[?&]utm_source=/.test(q)) {
        const m = q.match(/[?&]utm_medium=([^&]+)/i);
        const medium = m ? decodeURIComponent(m[1]).toLowerCase() : '';
        if (medium === 'email') return 'email';
        if (medium === 'social') return 'social';
        return 'campaign';
    }

    let host = '';
    try { host = new URL(referrer).hostname.replace(/^www\./, ''); } catch (_) { host = ''; }
    if (!host) return 'direct';
    // The Host header carries the port in development; a referrer never
    // does, so without dropping it every internal link looks like a referral.
    const self = String(selfHost || '').replace(/^www\./, '').split(':')[0].toLowerCase();
    if (self && host.toLowerCase() === self) return 'internal';
    if (SEARCH.test(host)) return 'search';
    if (SOCIAL.test(host)) return 'social';
    return 'referral';
}

function referrerHost(referrer) {
    try { return new URL(referrer).hostname.replace(/^www\./, '').slice(0, 80); } catch (_) { return ''; }
}

module.exports = {
    classifyPath, isBot, parseUA, country, source, referrerHost,
    productName: (slug) => PRODUCTS.get(slug) || slug,
    products: () => new Map(PRODUCTS)
};
