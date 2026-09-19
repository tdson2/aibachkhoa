/* Aggregation and the visitor model.
 *
 * A day of raw events is folded once into a rollup — counters plus one small
 * digest per visitor — and the dashboard then merges rollups. That is what
 * keeps a ninety-day view affordable in a 256 MB container: the raw file for
 * a finished day is read exactly once, ever, and the merge holds one day at
 * a time rather than the whole range.
 *
 * The visitor digest is the reason a rollup is not just counters. Whether
 * somebody is a lead cannot be decided from a day in isolation — coming back
 * a week later is itself the signal — so each day carries forward enough
 * about each visitor for the merge to score them across the whole range.
 */
const store = require('./store');
const enrich = require('./enrich');

/* What a visitor did, as bits, so a merge is an OR. */
const FLAG = {
    CONTACT: 1,      // clicked an email or contact link — asked to talk
    DOWNLOAD: 2,     // started an installer download
    STORE: 4,        // clicked through to an app store listing
    DEEP_SCROLL: 8,  // read at least three quarters of a page
    LONG_DWELL: 16,  // stayed a minute or more
    POLICY: 32,      // opened a privacy policy — reading before installing
    RETURNING: 64    // seen on more than one day in the range
};

/* Points are deliberately coarse. The exact number is not the product; the
 * ordering is — the dashboard uses it to sort the people worth a follow-up
 * above the people who bounced off the home page. */
const POINTS = {
    pageview: 1,
    pageviewCapPerDay: 10,
    productPage: 2,
    deepScroll: 3,
    longDwell: 4,
    policy: 3,
    storeClick: 8,
    storeClickCap: 16,
    download: 20,
    contact: 30,
    returning: 10
};

const POTENTIAL_SCORE = 25;      // at or above this, without contact, is a prospect
const LONG_DWELL_MS = 60000;
const DEEP_SCROLL_PCT = 75;
const MAX_DIGESTS_PER_DAY = 20000;
const MAX_MERGED_VISITORS = 200000;

/* Counted and shown, but kept out of the interest headline: leaving the site
 * and changing the language say something, but not that somebody is close to
 * becoming a customer, and they are frequent enough to swamp the signals
 * that do. */
const WEAK_SIGNALS = new Set(['outbound_click', 'language_switch', 'theme_switch']);

const bump = (map, key, by) => {
    if (key == null || key === '') return;
    map[key] = (map[key] || 0) + (by === undefined ? 1 : by);
};

// ---------------------------------------------------------------------------
// Building one day
// ---------------------------------------------------------------------------

function emptyRollup(day) {
    return {
        day,
        events: 0,
        pageviews: 0,
        actions: 0,
        downloads: 0,
        sessions: 0,
        bounced: 0,
        dwellSum: 0,
        hours: new Array(24).fill(0),
        pages: {},        // canonical path -> { views, dwellSum, depthSum, depthN }
        kinds: {},
        products: {},     // slug -> { views, downloads, interest }
        countries: {},
        devices: {},
        browsers: {},
        os: {},
        langs: {},
        sources: {},
        referrers: {},
        files: {},
        platforms: {},
        interest: {},     // signal name -> count
        visitors: {},     // vid -> digest
        truncated: false
    };
}

function digestFor(rollup, vid) {
    let digest = rollup.visitors[vid];
    if (!digest) {
        digest = rollup.visitors[vid] = {
            sc: 0, f: 0, c: 'ZZ', d: '', v: 0, dp: 0, dw: 0,
            s: {}, p: {}, first: 0, last: 0, nv: 0,
            _pv: 0, _store: 0
        };
    }
    return digest;
}

function productBucket(rollup, slug) {
    return rollup.products[slug] || (rollup.products[slug] = { views: 0, downloads: 0, interest: 0 });
}

function signal(rollup, event, name) {
    bump(rollup.interest, name);
    if (event.product) productBucket(rollup, event.product).interest++;
}

/* Folds one day of raw events into the shape above. */
function buildRollup(day, events) {
    const rollup = emptyRollup(day);
    // Per session, the four things the bounce test asks about.
    const sessions = new Map();       // sid -> { views, clicks, depth, dwell }
    const sessionOf = (sid) => {
        let info = sessions.get(sid);
        if (!info) sessions.set(sid, info = { views: 0, clicks: 0, depth: 0, dwell: 0 });
        return info;
    };

    for (const event of events) {
        rollup.events++;
        const meta = event.meta || {};
        const digest = event.vid ? digestFor(rollup, event.vid) : null;

        if (digest) {
            if (event.country) digest.c = event.country;
            if (event.device) digest.d = event.device;
            digest.s[event.sid] = 1;
            digest.first = digest.first ? Math.min(digest.first, event.ts) : event.ts;
            digest.last = Math.max(digest.last, event.ts);
            if (event.nv) digest.nv = 1;
        }

        bump(rollup.countries, event.country);
        bump(rollup.devices, event.device);
        bump(rollup.browsers, event.browser);
        bump(rollup.os, event.os);
        bump(rollup.langs, event.lang);

        if (event.type === 'view') {
            rollup.pageviews++;
            rollup.hours[new Date(event.ts).getUTCHours()]++;
            bump(rollup.kinds, event.kind);
            bump(rollup.sources, event.src);
            if (event.ref) bump(rollup.referrers, event.ref);

            const page = rollup.pages[event.canon] || (rollup.pages[event.canon] = {
                views: 0, dwellSum: 0, depthSum: 0, depthN: 0,
                kind: event.kind, product: event.product
            });
            page.views++;

            if (event.product) productBucket(rollup, event.product).views++;
            if (event.sid) sessionOf(event.sid).views++;

            if (digest) {
                digest.v++;
                if (digest._pv < POINTS.pageviewCapPerDay) {
                    digest._pv += POINTS.pageview;
                    digest.sc += POINTS.pageview;
                }
                if (event.product && !digest.p[event.product]) {
                    digest.p[event.product] = 1;
                    digest.sc += POINTS.productPage;
                }
                if (event.kind === 'policy' && !(digest.f & FLAG.POLICY)) {
                    digest.f |= FLAG.POLICY;
                    digest.sc += POINTS.policy;
                    signal(rollup, event, 'policy_view');
                }
            }
            continue;
        }

        if (event.type === 'scroll') {
            const depth = meta.depth || 0;
            const page = rollup.pages[event.canon];
            if (page) { page.depthSum += depth; page.depthN++; }
            if (event.sid) {
                const info = sessionOf(event.sid);
                info.depth = Math.max(info.depth, depth);
            }
            if (digest) {
                digest.dp = Math.max(digest.dp, depth);
                if (depth >= DEEP_SCROLL_PCT && !(digest.f & FLAG.DEEP_SCROLL)) {
                    digest.f |= FLAG.DEEP_SCROLL;
                    digest.sc += POINTS.deepScroll;
                    signal(rollup, event, 'deep_scroll');
                }
            }
            continue;
        }

        if (event.type === 'engage') {
            // A reader who tabs away and comes back produces several of
            // these, each carrying the foreground time since the last one,
            // so time is summed and later averaged over pageviews rather
            // than over the number of times a tab happened to lose focus.
            const dwell = meta.dwell || 0;
            if (dwell <= 0) continue;
            const page = rollup.pages[event.canon];
            if (page) page.dwellSum += dwell;
            rollup.dwellSum += dwell;
            if (event.sid) sessionOf(event.sid).dwell += dwell;
            if (digest) {
                digest.dw += dwell;
                if (digest.dw >= LONG_DWELL_MS && !(digest.f & FLAG.LONG_DWELL)) {
                    digest.f |= FLAG.LONG_DWELL;
                    digest.sc += POINTS.longDwell;
                    signal(rollup, event, 'long_dwell');
                }
            }
            continue;
        }

        if (event.type === 'click') {
            // Clicks and preference changes are the deliberate actions; a
            // scroll mark and a dwell report are measurements the page takes
            // by itself and would drown the count they were added to.
            rollup.actions++;
            const kind = meta.kind || 'outbound';
            if (event.sid) sessionOf(event.sid).clicks++;
            if (kind === 'download') {
                signal(rollup, event, 'download_click');
                if (digest && !(digest.f & FLAG.DOWNLOAD)) { digest.f |= FLAG.DOWNLOAD; digest.sc += POINTS.download; }
            } else if (kind === 'play' || kind === 'appstore') {
                signal(rollup, event, 'store_click');
                if (digest && digest._store < POINTS.storeClickCap) {
                    digest._store += POINTS.storeClick;
                    digest.sc += POINTS.storeClick;
                    digest.f |= FLAG.STORE;
                }
            } else if (kind === 'mailto' || kind === 'form') {
                signal(rollup, event, 'contact_click');
                if (digest && !(digest.f & FLAG.CONTACT)) { digest.f |= FLAG.CONTACT; digest.sc += POINTS.contact; }
            } else if (kind === 'cta') {
                signal(rollup, event, 'cta_click');
            } else if (kind === 'outbound') {
                bump(rollup.interest, 'outbound_click');
            }
            continue;
        }

        if (event.type === 'pref') {
            rollup.actions++;
            if (event.sid) sessionOf(event.sid).clicks++;
            bump(rollup.interest, meta.what === 'lang' ? 'language_switch' : 'theme_switch');
            continue;
        }

        if (event.type === 'download') {
            // The authoritative count: one confirmed request for an installer.
            rollup.downloads++;
            bump(rollup.files, meta.file);
            bump(rollup.platforms, meta.platform);
            if (event.product) productBucket(rollup, event.product).downloads++;
            continue;
        }
    }

    /* A bounce is a visit that gave the site nothing: one page, no click, no
     * real reading. Scroll and dwell have to be part of the test — every page
     * reports them automatically, so a rule of "one page and no events" would
     * report a bounce rate of zero forever. */
    rollup.sessions = sessions.size;
    for (const info of sessions.values()) {
        const engaged = info.views > 1 || info.clicks > 0 || info.depth >= 50 || info.dwell >= 30000;
        if (!engaged) rollup.bounced++;
    }

    for (const digest of Object.values(rollup.visitors)) {
        digest.s = Object.keys(digest.s).length;
        digest.p = Object.keys(digest.p);
        delete digest._pv;
        delete digest._store;
    }

    // A day with an implausible number of distinct visitors is either a very
    // good day or a bot farm; either way the file must not grow without
    // bound, so only the highest-scoring digests are carried forward.
    const ids = Object.keys(rollup.visitors);
    if (ids.length > MAX_DIGESTS_PER_DAY) {
        const kept = ids.sort((a, b) => rollup.visitors[b].sc - rollup.visitors[a].sc).slice(0, MAX_DIGESTS_PER_DAY);
        const trimmed = {};
        for (const id of kept) trimmed[id] = rollup.visitors[id];
        rollup.visitors = trimmed;
        rollup.truncated = true;
    }

    return rollup;
}

/* A finished day is rolled up once and kept; today is rebuilt on demand,
 * because more of it arrives every minute. */
function rollupFor(day) {
    const today = store.dayKey(Date.now());
    if (day !== today) {
        const cached = store.readRollup(day);
        if (cached) return cached;
    }
    const rollup = buildRollup(day, store.readDay(day));
    if (day !== today && rollup.events > 0) store.writeRollup(day, rollup);
    return rollup;
}

function daysBack(count, offset) {
    const out = [];
    const now = Date.now();
    for (let i = count - 1; i >= 0; i--) out.push(store.dayKey(now - (i + (offset || 0)) * 86400000));
    return out;
}

// ---------------------------------------------------------------------------
// Merging a range
// ---------------------------------------------------------------------------

const mergeCounts = (into, from) => { for (const key of Object.keys(from || {})) into[key] = (into[key] || 0) + from[key]; };

const topOf = (counts, limit, nameKey) => Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([key, value]) => ({ [nameKey || 'name']: key, value }));

/* The three groups the dashboard is built around.
 *
 * A lead asked to be contacted; that is not a matter of degree, so it is a
 * flag and not a threshold. A prospect either took the product away with
 * them or spent enough attention to be worth a follow-up. Everybody else
 * walked past the window. */
function segmentOf(visitor) {
    if (visitor.f & FLAG.CONTACT) return 'lead';
    if (visitor.f & (FLAG.DOWNLOAD | FLAG.STORE)) return 'potential';
    if (visitor.sc >= POTENTIAL_SCORE) return 'potential';
    return 'casual';
}

/* Folds a list of days into one set of numbers. Rollups are loaded one at a
 * time and dropped again, so peak memory is a single day plus the merged
 * visitor table — not the whole range. */
function aggregate(dayKeys) {
    const totals = { events: 0, pageviews: 0, actions: 0, downloads: 0, sessions: 0, bounced: 0, dwellSum: 0 };
    const dims = {
        pages: {}, kinds: {}, products: {}, countries: {}, devices: {}, browsers: {},
        os: {}, langs: {}, sources: {}, referrers: {}, files: {}, platforms: {}, interest: {}
    };
    const hours = new Array(24).fill(0);
    const series = [];
    const visitors = new Map();
    let truncated = false;
    let visitorsCapped = false;

    for (const day of dayKeys) {
        const rollup = rollupFor(day);
        for (const key of Object.keys(totals)) totals[key] += rollup[key] || 0;
        truncated = truncated || !!rollup.truncated;
        (rollup.hours || []).forEach((value, hour) => { hours[hour] += value; });

        for (const [path, page] of Object.entries(rollup.pages || {})) {
            const into = dims.pages[path] || (dims.pages[path] = {
                views: 0, dwellSum: 0, depthSum: 0, depthN: 0, kind: page.kind, product: page.product
            });
            into.views += page.views;
            into.dwellSum += page.dwellSum || 0;
            into.depthSum += page.depthSum || 0;
            into.depthN += page.depthN || 0;
        }
        for (const [slug, product] of Object.entries(rollup.products || {})) {
            const into = dims.products[slug] || (dims.products[slug] = { views: 0, downloads: 0, interest: 0 });
            into.views += product.views;
            into.downloads += product.downloads;
            into.interest += product.interest;
        }
        for (const name of ['kinds', 'countries', 'devices', 'browsers', 'os', 'langs', 'sources', 'referrers', 'files', 'platforms', 'interest']) {
            mergeCounts(dims[name], rollup[name]);
        }

        for (const [vid, digest] of Object.entries(rollup.visitors || {})) {
            let all = visitors.get(vid);
            if (!all) {
                if (visitors.size >= MAX_MERGED_VISITORS) { visitorsCapped = true; continue; }
                all = { vid, sc: 0, f: 0, c: 'ZZ', d: '', v: 0, dp: 0, dw: 0, s: 0, p: new Set(), days: 0, first: digest.first, last: digest.last, nv: 0 };
                visitors.set(vid, all);
            }
            all.sc += digest.sc || 0;
            all.f |= digest.f || 0;
            if (digest.c && digest.c !== 'ZZ') all.c = digest.c;
            if (digest.d) all.d = digest.d;
            all.v += digest.v || 0;
            all.s += digest.s || 0;
            all.dw += digest.dw || 0;
            all.dp = Math.max(all.dp, digest.dp || 0);
            all.nv = all.nv || digest.nv || 0;
            for (const slug of digest.p || []) all.p.add(slug);
            all.days++;
            all.first = Math.min(all.first || digest.first, digest.first);
            all.last = Math.max(all.last, digest.last);
        }

        series.push({
            day,
            visits: rollup.sessions,
            visitors: Object.keys(rollup.visitors || {}).length,
            pageviews: rollup.pageviews,
            actions: rollup.actions,
            downloads: rollup.downloads
        });
    }

    const segments = { lead: 0, potential: 0, casual: 0 };
    const visitorsByCountry = {};
    for (const visitor of visitors.values()) {
        if (visitor.days > 1 || visitor.s > 1) { visitor.f |= FLAG.RETURNING; visitor.sc += POINTS.returning; }
        visitor.p = [...visitor.p];
        visitor.segment = segmentOf(visitor);
        segments[visitor.segment]++;
        bump(visitorsByCountry, visitor.c);
    }

    const interestTotal = Object.entries(dims.interest)
        .filter(([name]) => !WEAK_SIGNALS.has(name))
        .reduce((sum, [, value]) => sum + value, 0);

    return {
        totals, dims, hours, series, visitors, segments, visitorsByCountry,
        interestTotal, truncated, visitorsCapped,
        kpi: {
            visits: totals.sessions,
            visitors: visitors.size,
            pageviews: totals.pageviews,
            actions: totals.actions,
            downloads: totals.downloads,
            interest: interestTotal,
            leads: segments.lead,
            potential: segments.potential,
            casual: segments.casual,
            bounceRate: totals.sessions ? totals.bounced / totals.sessions : 0,
            avgDwell: totals.pageviews ? totals.dwellSum / totals.pageviews : 0,
            pagesPerVisit: totals.sessions ? totals.pageviews / totals.sessions : 0
        }
    };
}

const FLAG_LABELS = [
    [FLAG.CONTACT, 'contact'],
    [FLAG.DOWNLOAD, 'download'],
    [FLAG.STORE, 'store'],
    [FLAG.POLICY, 'policy'],
    [FLAG.DEEP_SCROLL, 'deep scroll'],
    [FLAG.LONG_DWELL, 'long dwell'],
    [FLAG.RETURNING, 'returning']
];

function report(days) {
    const span = Math.max(1, Math.min(Number(days) || 30, store.RETENTION_DAYS));
    const keys = daysBack(span);
    const current = aggregate(keys);

    // The same length of time immediately before the range, so every headline
    // number can be read as a direction rather than as a bare count. Comparing
    // a window against a shorter leftover would be worse than not comparing.
    const previousKeys = daysBack(span, span);
    const previous = aggregate(previousKeys);

    const dims = current.dims;

    return {
        range: { from: keys[0], to: keys[keys.length - 1], days: span },
        compareRange: { from: previousKeys[0], to: previousKeys[previousKeys.length - 1] },
        generated: Date.now(),
        kpi: current.kpi,
        previous: previous.kpi,
        series: current.series,
        hours: current.hours,
        kinds: dims.kinds,
        pages: Object.entries(dims.pages)
            .sort((a, b) => b[1].views - a[1].views)
            .slice(0, 40)
            .map(([path, page]) => ({
                path,
                kind: page.kind,
                product: page.product ? enrich.productName(page.product) : null,
                views: page.views,
                avgDwell: page.views ? page.dwellSum / page.views : 0,
                avgDepth: page.depthN ? page.depthSum / page.depthN : 0
            })),
        products: Object.entries(dims.products)
            .sort((a, b) => b[1].views - a[1].views)
            .map(([slug, product]) => ({
                slug,
                name: enrich.productName(slug),
                views: product.views,
                downloads: product.downloads,
                interest: product.interest
            })),
        geo: Object.entries(dims.countries)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 25)
            .map(([code, events]) => ({ country: code, events, visitors: current.visitorsByCountry[code] || 0 })),
        devices: topOf(dims.devices, 6),
        browsers: topOf(dims.browsers, 8),
        os: topOf(dims.os, 8),
        langs: topOf(dims.langs, 12),
        sources: topOf(dims.sources, 8),
        referrers: topOf(dims.referrers, 12),
        downloads: {
            total: current.totals.downloads,
            files: topOf(dims.files, 15),
            platforms: topOf(dims.platforms, 6)
        },
        interest: {
            total: current.interestTotal,
            signals: Object.entries(dims.interest)
                .filter(([, value]) => value > 0)
                .sort((a, b) => b[1] - a[1])
                .map(([name, value]) => ({ name, value, weak: WEAK_SIGNALS.has(name) }))
        },
        segments: current.segments,
        people: [...current.visitors.values()]
            .sort((a, b) => b.sc - a.sc || b.last - a.last)
            .slice(0, 100)
            .map(visitor => ({
                id: visitor.vid.slice(0, 8),
                segment: visitor.segment,
                score: visitor.sc,
                country: visitor.c,
                device: visitor.d,
                pageviews: visitor.v,
                visits: visitor.s,
                days: visitor.days,
                dwell: visitor.dw,
                products: visitor.p.map(enrich.productName),
                signals: FLAG_LABELS.filter(([bit]) => visitor.f & bit).map(([, label]) => label),
                first: visitor.first,
                last: visitor.last
            })),
        // The dashboard explains the scoring to whoever reads it, and it
        // reads the rules from here rather than restating them, so the
        // explanation cannot drift away from what the code does.
        model: {
            points: POINTS,
            potentialScore: POTENTIAL_SCORE,
            longDwellMs: LONG_DWELL_MS,
            deepScrollPct: DEEP_SCROLL_PCT
        },
        notes: { truncated: current.truncated, visitorsCapped: current.visitorsCapped },
        storage: store.status()
    };
}

/* The dashboard polls, and clicking between ranges should not make the
 * container re-read the current day every single time. */
const cache = new Map();
const CACHE_MS = 20000;

function cachedReport(days) {
    const key = String(days);
    const hit = cache.get(key);
    if (hit && Date.now() - hit.at < CACHE_MS) return hit.value;
    const value = report(days);
    cache.set(key, { at: Date.now(), value });
    return value;
}

module.exports = { report: cachedReport, buildRollup, rollupFor, aggregate, FLAG, POINTS, POTENTIAL_SCORE };
