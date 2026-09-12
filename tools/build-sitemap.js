#!/usr/bin/env node
/* Regenerates public/sitemap.xml from the pages in public/.
 *
 * The URL of a page is its own <link rel="canonical">, so the sitemap can
 * never disagree with the canonical tags — a page without one is reported
 * and skipped rather than guessed at. Run it after adding a page:
 *
 *     npm run sitemap
 */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const PUBLIC = path.join(__dirname, '..', 'public');

// Pages with no place in search results.
const SKIP = new Set(['404.html']);

function findPages(dir, out = []) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            if (entry.name === 'assets' || entry.name === 'downloads') continue;
            findPages(full, out);
        } else if (entry.name.endsWith('.html') && !SKIP.has(path.relative(PUBLIC, full))) {
            out.push(full);
        }
    }
    return out;
}

// Last commit that touched the file, so lastmod reflects real edits rather
// than a checkout date. Falls back to the file's mtime outside a git tree.
function lastModified(file) {
    try {
        const out = execFileSync('git', ['log', '-1', '--format=%cs', '--', file], {
            cwd: path.join(__dirname, '..'), encoding: 'utf8'
        }).trim();
        if (out) return out;
    } catch (_) { /* not a git checkout */ }
    return fs.statSync(file).mtime.toISOString().slice(0, 10);
}

// A product page outranks its own privacy policy, and the home page outranks
// everything. Depth is a good enough proxy for that.
function priorityFor(url) {
    const p = new URL(url).pathname.replace(/\/$/, '');
    if (p === '') return '1.0';
    if (p.endsWith('/policy')) return '0.3';
    if (p.split('/').length > 2) return '0.7';
    return '0.8';
}

const rows = [];
const missing = [];

for (const file of findPages(PUBLIC).sort()) {
    const html = fs.readFileSync(file, 'utf8');
    const m = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i);
    if (!m) { missing.push(path.relative(PUBLIC, file)); continue; }
    rows.push({ loc: m[1], lastmod: lastModified(file), priority: priorityFor(m[1]) });
}

rows.sort((a, b) => (b.priority - a.priority) || a.loc.localeCompare(b.loc));

const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...rows.map(r => [
        '    <url>',
        `        <loc>${r.loc}</loc>`,
        `        <lastmod>${r.lastmod}</lastmod>`,
        `        <priority>${r.priority}</priority>`,
        '    </url>'
    ].join('\n')),
    '</urlset>',
    ''
].join('\n');

fs.writeFileSync(path.join(PUBLIC, 'sitemap.xml'), xml);
console.log(`sitemap.xml: ${rows.length} URLs`);
if (missing.length) {
    console.warn(`no canonical, skipped: ${missing.join(', ')}`);
    process.exitCode = 1;
}
