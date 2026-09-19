#!/usr/bin/env node
/* Puts the analytics beacon on every page in public/.
 *
 * The alternative — injecting the tag as each page is served — would put a
 * string rewrite in front of every request for the sake of one line that
 * never changes. This writes the line into the files once instead, the same
 * way the other builders in this folder work.
 *
 * It is safe to run repeatedly: a page that already carries the tag is left
 * alone. Run it after adding a page, and after `npm run i18n`, which
 * generates the translated pages from the English ones:
 *
 *     npm run track
 */
const fs = require('fs');
const path = require('path');

const PUBLIC = path.join(__dirname, '..', 'public');
const TAG = '<script defer src="/analytics.js"></script>';

function findPages(dir, out = []) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            if (entry.name === 'assets' || entry.name === 'downloads') continue;
            findPages(full, out);
        } else if (entry.name.endsWith('.html')) {
            out.push(full);
        }
    }
    return out;
}

let added = 0, already = 0;
const missing = [];

for (const file of findPages(PUBLIC).sort()) {
    const html = fs.readFileSync(file, 'utf8');
    if (html.includes('/analytics.js')) { already++; continue; }

    const index = html.lastIndexOf('</body>');
    if (index < 0) { missing.push(path.relative(PUBLIC, file)); continue; }

    // Borrows the indentation of the last line that has anything on it, so
    // the tag lines up with the scripts it joins and the diff for a page is
    // one added line and nothing else.
    const before = html.slice(0, index);
    const lastLine = (before.match(/([^\n]*)\n[ \t]*$/) || [, ''])[1];
    const indent = (lastLine.match(/^[ \t]*/) || [''])[0] || '    ';
    const tail = (before.match(/\n([ \t]*)$/) || [, ''])[1];

    fs.writeFileSync(file, before + indent + TAG + '\n' + tail + html.slice(index));
    added++;
}

console.log(`analytics tag: ${added} page(s) updated, ${already} already had it`);
if (missing.length) {
    console.log('No </body> in: ' + missing.join(', '));
    process.exitCode = 1;
}
