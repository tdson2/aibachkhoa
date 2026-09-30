#!/usr/bin/env node
/* Checks every translation against its English dictionary.
 *
 *     npm run i18n:check            # every page script
 *     node tools/check-i18n.js bksafe/bksafe.js
 *
 * For each language it reports keys the translation is missing (those fall
 * back to English on the page), keys English no longer has, and values whose
 * HTML tags differ from the English — a dropped </em> or <br> breaks the
 * layout of a translated page while looking fine in English.
 *
 * Every page script under public/ with a `const i18n = {` literal is picked
 * up, along with the `i18n.<lang> = { … }` files in its i18n/ directory.
 */
const fs = require('fs');
const path = require('path');

const PUB = path.join(__dirname, '..', 'public');
const LANG_DIRS = new Set(['ar', 'de', 'es', 'fr', 'hi', 'ja', 'ko', 'pt', 'ru', 'zh']);

function matchBrace(src, open) {
    let depth = 0, i = open, quote = null;
    while (i < src.length) {
        const c = src[i];
        if (quote) {
            if (c === '\\') i++;
            else if (c === quote) quote = null;
        } else if (c === '"' || c === "'" || c === '`') quote = c;
        else if (c === '{') depth++;
        else if (c === '}' && --depth === 0) return i;
        i++;
    }
    throw new Error('unbalanced braces');
}

function load(jsRel) {
    const src = fs.readFileSync(path.join(PUB, jsRel), 'utf8');
    const start = src.indexOf('const i18n = {');
    const open = src.indexOf('{', start);
    const dict = eval('(' + src.slice(open, matchBrace(src, open) + 1) + ')');
    const attach = (text, where) => {
        for (const m of text.matchAll(/^i18n\.([a-z]{2}) = \{/gm)) {
            const o = text.indexOf('{', m.index);
            try {
                dict[m[1]] = eval('(' + text.slice(o, matchBrace(text, o) + 1) + ')');
            } catch (e) {
                throw new Error(`${where}: ${e.message}`);
            }
        }
    };
    attach(src, jsRel);
    const dir = path.join(PUB, path.dirname(jsRel), 'i18n');
    if (path.dirname(jsRel) !== '.' && fs.existsSync(dir)) {
        for (const f of fs.readdirSync(dir).filter(f => /^[a-z]{2}\.js$/.test(f))) {
            attach(fs.readFileSync(path.join(dir, f), 'utf8'), path.join(path.dirname(jsRel), 'i18n', f));
        }
    }
    return dict;
}

const tags = (s) => (String(s).match(/<\/?[a-zA-Z][^>]*>/g) || [])
    .map(t => t.replace(/\s.*?(\/?)>$/, '$1>').toLowerCase()).sort().join(' ');

function scripts() {
    const out = [];
    const walk = (dir) => {
        for (const e of fs.readdirSync(path.join(PUB, dir), { withFileTypes: true })) {
            const rel = path.join(dir, e.name);
            if (e.isDirectory()) {
                if (['assets', 'downloads', 'i18n'].includes(e.name) || LANG_DIRS.has(rel)) continue;
                walk(rel);
            } else if (e.name.endsWith('.js')) {
                const src = fs.readFileSync(path.join(PUB, rel), 'utf8');
                if (src.includes('const i18n = {')) out.push(rel);
            }
        }
    };
    walk('');
    return out.sort();
}

let problems = 0;
for (const jsRel of (process.argv.length > 2 ? process.argv.slice(2) : scripts())) {
    let dict;
    try { dict = load(jsRel); } catch (e) { console.log(`✗ ${jsRel}: ${e.message}`); problems++; continue; }
    const en = dict.en || {};
    const langs = Object.keys(dict).filter(l => l !== 'en').sort();
    const lines = [];
    for (const l of langs) {
        const d = dict[l];
        const missing = Object.keys(en).filter(k => !(k in d));
        const extra = Object.keys(d).filter(k => !(k in en));
        const badTags = Object.keys(en).filter(k => k in d && tags(en[k]) !== tags(d[k]));
        if (missing.length) lines.push(`  ${l}: ${missing.length} missing — ${missing.slice(0, 8).join(', ')}${missing.length > 8 ? ', …' : ''}`);
        if (extra.length) lines.push(`  ${l}: ${extra.length} not in English — ${extra.slice(0, 8).join(', ')}${extra.length > 8 ? ', …' : ''}`);
        if (badTags.length) lines.push(`  ${l}: HTML tags differ from English — ${badTags.slice(0, 8).join(', ')}${badTags.length > 8 ? ', …' : ''}`);
    }
    problems += lines.length;
    console.log(`${lines.length ? '✗' : '✓'} ${jsRel}  (${Object.keys(en).length} keys; ${langs.join(' ') || 'English only'})`);
    lines.forEach(l => console.log(l));
}
process.exitCode = problems ? 1 : 0;
