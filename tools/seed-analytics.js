#!/usr/bin/env node
/* Fills an analytics directory with plausible made-up traffic, so the
 * dashboard can be looked at and judged before the first real visitor
 * arrives.
 *
 * It refuses to write into a directory that already holds events, because
 * invented numbers mixed into real ones are worse than no numbers at all.
 * Point it somewhere of its own and start the server against the same place:
 *
 *     ANALYTICS_DIR=./data-demo node tools/seed-analytics.js 45
 *     ANALYTICS_DIR=./data-demo ADMIN_PASSWORD=demo npm start
 */
const fs = require('fs');
const path = require('path');

const DIR = process.env.ANALYTICS_DIR || path.join(__dirname, '..', 'data-demo');
const DAYS = Math.max(1, Math.min(Number(process.argv[2]) || 45, 90));
const EVENTS_DIR = path.join(DIR, 'events');

if (fs.existsSync(EVENTS_DIR) && fs.readdirSync(EVENTS_DIR).some(name => name.endsWith('.jsonl'))) {
    console.error('Refusing to seed: ' + EVENTS_DIR + ' already holds events.');
    console.error('Delete it first, or point ANALYTICS_DIR at an empty directory.');
    process.exit(1);
}
fs.mkdirSync(EVENTS_DIR, { recursive: true });

const PRODUCTS = ['bksafe', 'locallex', 'novaryn', 'genvideo', 'chefeasy', 'castle-of-ancients', 'dungeon-blade', 'iron-line', 'jemul', 'mini-castle', 'chilly-novels'];
const COUNTRIES = [['VN', 26], ['US', 18], ['IN', 9], ['DE', 7], ['JP', 6], ['BR', 5], ['GB', 5], ['FR', 4], ['KR', 4], ['ES', 3], ['RU', 3], ['PH', 3], ['ID', 3], ['CA', 2], ['AU', 2]];
const LANGS = [['en', 55], ['es', 8], ['zh', 7], ['ja', 6], ['de', 5], ['fr', 5], ['pt', 4], ['ko', 4], ['ru', 3], ['hi', 2], ['ar', 1]];
const SOURCES = [['direct', 30], ['search', 34], ['ads', 14], ['social', 12], ['referral', 10]];
const DEVICES = [['Mobile', 56], ['Desktop', 38], ['Tablet', 6]];
const BROWSERS = [['Chrome', 52], ['Safari', 24], ['Edge', 10], ['Firefox', 8], ['Samsung', 6]];
const REFERRERS = ['google.com', 'bing.com', 'reddit.com', 'news.ycombinator.com', 'facebook.com', 'x.com', 'duckduckgo.com'];
const FILES = [
    ['BKSafe-1.3.2.dmg', 'macOS', 'bksafe'],
    ['BKSafe-1.3.0-win-x64-portable.zip', 'Windows', 'bksafe'],
    ['BKSafe-1.3.1-linux-amd64.deb', 'Linux', 'bksafe'],
    ['LocalLex-1.1.0-linux-amd64.deb', 'Linux', 'locallex'],
    ['LocalLex-1.1.0-linux-x64.tar.gz', 'Linux', 'locallex']
];

const rand = (n) => Math.floor(Math.random() * n);
const pick = (list) => list[rand(list.length)];
function weighted(pairs) {
    const total = pairs.reduce((sum, [, weight]) => sum + weight, 0);
    let roll = Math.random() * total;
    for (const [value, weight] of pairs) { roll -= weight; if (roll <= 0) return value; }
    return pairs[0][0];
}

const osFor = (device, browser) => {
    if (device === 'Mobile') return browser === 'Safari' ? 'iOS' : 'Android';
    if (device === 'Tablet') return browser === 'Safari' ? 'iOS' : 'Android';
    if (browser === 'Safari') return 'macOS';
    return weighted([['Windows', 6], ['macOS', 3], ['Linux', 1]]);
};

const dayKey = (ts) => new Date(ts).toISOString().slice(0, 10);
const randomId = () => 'seed-' + Math.random().toString(36).slice(2, 10);

// A pool of visitors that outlives a single day, so the returning-visitor
// signal and the multi-day scoring have something to find.
const pool = [];
for (let i = 0; i < 900; i++) pool.push(randomId());

let written = 0;

for (let back = DAYS - 1; back >= 0; back--) {
    const base = Date.now() - back * 86400000;
    const day = dayKey(base);
    // A gentle upward trend with a weekend dip, so the chart has a shape
    // worth reading rather than noise.
    const weekday = new Date(base).getUTCDay();
    const weekend = weekday === 0 || weekday === 6 ? 0.72 : 1;
    const growth = 0.7 + (DAYS - back) / DAYS * 0.6;
    const sessions = Math.round((28 + rand(22)) * weekend * growth);

    const lines = [];
    for (let s = 0; s < sessions; s++) {
        const returning = Math.random() < 0.35;
        const vid = returning ? pick(pool) : randomId();
        const sid = randomId();
        const country = weighted(COUNTRIES);
        const lang = weighted(LANGS);
        const device = weighted(DEVICES);
        const browser = weighted(BROWSERS);
        const os = osFor(device, browser);
        const src = weighted(SOURCES);
        const ref = src === 'search' || src === 'referral' || src === 'social' ? pick(REFERRERS) : '';
        // Business hours in Asia, with a long tail across the rest of the day.
        const hour = weighted([[2, 3], [3, 4], [4, 5], [5, 5], [6, 6], [7, 7], [8, 8], [9, 8], [10, 7], [12, 6], [14, 6], [16, 5], [18, 4], [20, 3], [22, 2]]);
        let ts = new Date(base).setUTCHours(hour, rand(60), rand(60), 0);

        const shared = { vid, sid, nv: returning ? 0 : 1, lang, ref, src, country, device, browser, os };
        const push = (extra) => { lines.push(JSON.stringify(Object.assign({ ts }, shared, extra))); written++; };

        const depth = weighted([[18, 30], [45, 25], [78, 28], [100, 17]]);
        const dwell = depth >= 75 ? 45000 + rand(180000) : 4000 + rand(30000);

        // Most visits land on the home page; ad clicks land on the product.
        const landsOnProduct = src === 'ads' || Math.random() < 0.38;
        const product = pick(PRODUCTS);
        const langPrefix = lang === 'en' ? '' : '/' + lang;

        // The pages this visit went through, in order. Each one gets its own
        // view, its own scroll marks and its own time, so the per-page table
        // is not full of pages that were somehow never read.
        const journey = [];
        if (!landsOnProduct) journey.push({ canon: '/', kind: 'home', product: null });
        if (landsOnProduct || Math.random() < 0.55) journey.push({ canon: '/' + product, kind: 'detail', product });
        if (depth >= 75 && Math.random() < 0.3) journey.push({ canon: '/' + product + '/policy', kind: 'policy', product });

        journey.forEach((stop, index) => {
            const at = { path: langPrefix + (stop.canon === '/' ? '' : stop.canon) || '/', canon: stop.canon, kind: stop.kind, product: stop.product };
            if (index) ts += 8000 + rand(45000);
            push(Object.assign({ type: 'view', meta: { vw: device === 'Mobile' ? 390 : 1440, theme: 'light' } }, at));

            // Later pages in a visit are read a little less thoroughly.
            const stopDepth = index ? Math.max(25, depth - rand(30)) : depth;
            for (const mark of [25, 50, 75, 100]) {
                if (stopDepth >= mark) push(Object.assign({ type: 'scroll', meta: { depth: mark } }, at));
            }
            push(Object.assign({ type: 'engage', meta: { dwell: Math.round(dwell / journey.length), depth: stopDepth } }, at));
        });

        const click = (kind, href, label) => push({ type: 'click', path: langPrefix + '/' + product, canon: '/' + product, kind: 'detail', product, meta: { kind, href, label } });

        if (Math.random() < 0.22) click('cta', '#products', 'Explore products');
        if (depth >= 50 && Math.random() < 0.14) click('play', 'https://play.google.com/store/apps/details?id=x', 'Get it on Google Play');

        const downloaded = depth >= 50 && Math.random() < 0.12;
        if (downloaded) {
            const [file, platform, owner] = pick(FILES);
            click('download', '/downloads/' + file, 'Download');
            ts += 1500;
            push({ type: 'download', vid: '', sid: '', nv: 0, path: '/downloads/' + file, canon: '/downloads/' + file, kind: 'download', product: owner, meta: { file, platform } });
        }

        if (Math.random() < 0.035) click('mailto', 'mailto:contact@aibachkhoa.com', 'contact@aibachkhoa.com');
    }

    fs.writeFileSync(path.join(EVENTS_DIR, day + '.jsonl'), lines.join('\n') + '\n');
}

console.log('Seeded ' + DAYS + ' days, ' + written + ' events into ' + EVENTS_DIR);
console.log('Start the server against it with:');
console.log('  ANALYTICS_DIR=' + DIR + ' ADMIN_PASSWORD=demo npm start');
