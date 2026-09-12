#!/usr/bin/env node
/* Pre-renders each translated page to its own URL and cross-links them
 * with hreflang.
 *
 *     npm run i18n
 *
 * Why this exists: the translations were applied in the browser, from a
 * dictionary in the page's JS, with no change of URL. Search engines index
 * URLs, so eleven finished translations of the home page all collapsed onto
 * the one English result and earned nothing. This writes each language out
 * as real markup under /<lang>/… and declares the set with hreflang, so
 * each one can rank on its own.
 *
 * The generated directories are rewritten from scratch on every run; edit
 * the source page under public/ and re-run, never the copies.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PUB = path.join(ROOT, 'public');
const SITE = 'https://aibachkhoa.com';
const RTL = new Set(['ar']);

// Elements that cannot hold children; data-i18n on one would be a no-op.
const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img',
    'input', 'link', 'meta', 'source', 'track', 'wbr']);

// source page -> the JS file holding its dictionary
const GROUPS = [
    { js: 'script.js', pages: ['index.html'] },
    { js: 'bksafe/bksafe.js', pages: ['bksafe/index.html', 'bksafe/policy/index.html'] },
    { js: 'genvideo/genvideo.js', pages: ['genvideo/index.html', 'genvideo/ios/index.html', 'genvideo/policy/index.html'] },
    { js: 'chefeasy/chefeasy.js', pages: ['chefeasy/index.html', 'chefeasy/ios/index.html', 'chefeasy/policy/index.html'] },
    { js: 'jemul/jemul.js', pages: ['jemul/index.html', 'jemul/policy/index.html'] },
    { js: 'chilly-novels/chilly-novels.js', pages: ['chilly-novels/index.html', 'chilly-novels/policy/index.html'] },
    { js: 'castle-of-ancients/castle-of-ancients.js', pages: ['castle-of-ancients/index.html', 'castle-of-ancients/policy/index.html'] },
    { js: 'iron-line/iron-line.js', pages: ['iron-line/index.html', 'iron-line/policy/index.html'] },
    { js: 'mini-castle/mini-castle.js', pages: ['mini-castle/index.html', 'mini-castle/policy/index.html'] },
    { js: 'novaryn/novaryn.js', pages: ['novaryn/index.html', 'novaryn/ios/index.html', 'novaryn/policy/index.html'] },
    { js: 'dungeon-blade/dungeon-blade.js', pages: ['dungeon-blade/index.html', 'dungeon-blade/policy/index.html'] }
];

// ------------------------------------------------------- reading the source

/** Index of the brace closing the one at `open`, ignoring braces in strings. */
function matchBrace(src, open) {
    let depth = 0, i = open, quote = null;
    while (i < src.length) {
        const c = src[i];
        if (quote) {
            if (c === '\\') i++;
            else if (c === quote) quote = null;
        } else if (c === '"' || c === "'" || c === '`') {
            quote = c;
        } else if (c === '{') depth++;
        else if (c === '}') {
            depth--;
            if (depth === 0) return i;
        }
        i++;
    }
    throw new Error('unbalanced braces');
}

function readDicts(jsRel) {
    const src = fs.readFileSync(path.join(PUB, jsRel), 'utf8');

    const start = src.indexOf('const i18n = {');
    if (start < 0) throw new Error(`no i18n in ${jsRel}`);
    const open = src.indexOf('{', start);
    const dict = eval('(' + src.slice(open, matchBrace(src, open) + 1) + ')');

    // chefeasy attaches its second language after the literal.
    for (const m of src.matchAll(/^i18n\.([a-z]{2}) = \{/gm)) {
        const o = src.indexOf('{', m.index);
        dict[m[1]] = eval('(' + src.slice(o, matchBrace(src, o) + 1) + ')');
    }

    const langsStart = src.indexOf('const LANGS = [');
    const langs = eval(src.slice(src.indexOf('[', langsStart),
        src.indexOf('];', langsStart) + 1)).map(l => l.code);
    const def = /const DEFAULT_LANG = '([a-z]{2})'/.exec(src)[1];
    return { dict, langs, def };
}

// ------------------------------------------------------------- transforming

/** Replace the inner HTML of every [data-i18n] element from `dict`. */
function applyI18n(html, dict) {
    const re = /<([a-zA-Z0-9]+)((?:"[^"]*"|'[^']*'|[^>"'])*?)\sdata-i18n="([^"]+)"((?:"[^"]*"|'[^']*'|[^>"'])*?)>/g;
    let out = '', last = 0, m;
    while ((m = re.exec(html)) !== null) {
        const [full, tag, , key] = m;
        const value = dict[key];
        out += html.slice(last, m.index) + full;
        last = m.index + full.length;
        if (value === undefined || VOID.has(tag.toLowerCase())) continue;

        // Walk to the matching close tag, allowing the same tag to nest.
        const openRe = new RegExp(`<${tag}[\\s/>]`, 'gi');
        const closeRe = new RegExp(`</${tag}\\s*>`, 'gi');
        let depth = 1, i = last, end = -1;
        while (depth > 0) {
            closeRe.lastIndex = i; openRe.lastIndex = i;
            const close = closeRe.exec(html);
            if (!close) break;
            const open = openRe.exec(html);
            if (open && open.index < close.index) { depth++; i = open.index + 1; continue; }
            depth--; i = close.index + close[0].length;
            if (depth === 0) end = close.index;
        }
        if (end < 0) continue;
        out += value;
        last = end;
        re.lastIndex = end;
    }
    return out + html.slice(last);
}

function applyAria(html, dict) {
    return html.replace(
        /<([a-zA-Z0-9]+)((?:"[^"]*"|[^>"])*?)\sdata-i18n-aria="([^"]+)"((?:"[^"]*"|[^>"])*?)>/g,
        (full, tag, pre, key, post) => {
            const value = dict[key];
            if (value === undefined) return full;
            const body = (pre + post).includes('aria-label="')
                ? (pre + post).replace(/\saria-label="[^"]*"/, ` aria-label="${esc(value)}"`)
                : `${pre}${post} aria-label="${esc(value)}"`;
            return `<${tag}${body} data-i18n-aria="${key}">`;
        });
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;')
    .replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Keep a crawler inside one language when it follows an internal link.
 *
 * Only where that language actually has the page. Not every product is
 * translated into every language, and ChefEasy is Vietnamese by default —
 * its Vietnamese page is /chefeasy, not /vi/chefeasy. Prefixing blindly
 * pointed the Vietnamese home page at three URLs that do not exist. */
function prefixLinks(html, lang, existsIn) {
    return html.replace(/<a\s([^>]*?)href="\/([^"#]*)((?:#[^"]*)?)"/g,
        (full, pre, p, hash) => {
            if (p.startsWith('assets/') || p.startsWith('downloads/')) return full;
            const clean = '/' + p.replace(/\/$/, '');
            if (!existsIn.has(clean)) return full;      // no such page in this language
            return `<a ${pre}href="/${lang}${clean === '/' ? '/' : clean}${hash}"`;
        });
}

function hreflangBlock(pathAfterHost, langs, def) {
    const url = (l) => l === def
        ? `${SITE}${pathAfterHost}`
        : `${SITE}/${l}${pathAfterHost === '/' ? '' : pathAfterHost}`;
    const lines = langs.map(l => `    <link rel="alternate" hreflang="${l}" href="${url(l)}">`);
    lines.push(`    <link rel="alternate" hreflang="x-default" href="${url(def)}">`);
    return lines.join('\n') + '\n';
}

/** Drop any previously generated alternates so the script is repeatable. */
const stripAlternates = (html) =>
    html.replace(/^[ \t]*<link rel="alternate" hreflang="[^"]*"[^>]*>[ \t]*\n/gm, '');

function setTag(html, re, replacement) {
    return re.test(html) ? html.replace(re, replacement) : html;
}


/** Point the page's structured data at the translated URL and text.
 *
 * The JSON-LD is copied from the English page, so left alone it would tell
 * Google that /vi/bksafe is a page whose url is /bksafe — a contradiction
 * with the canonical right above it. Every internal URL in the graph gets
 * the language prefix, and the human-readable fields get the translation. */
function localiseJsonLd(html, canonicalPath, prefix, lang, title, desc) {
    return html.replace(
        /(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/,
        (full, open, body, close) => {
            let graph;
            try { graph = JSON.parse(body); } catch { return full; }

            const localise = (u) =>
                typeof u === 'string' && u.startsWith(SITE) && !u.includes('/assets/')
                    ? SITE + prefix + (u.slice(SITE.length) === '/' ? '' : u.slice(SITE.length))
                    : u;

            const walk = (node) => {
                if (Array.isArray(node)) return node.forEach(walk);
                if (!node || typeof node !== 'object') return;
                for (const key of ['url', 'item']) {
                    if (typeof node[key] === 'string') node[key] = localise(node[key]);
                }
                Object.values(node).forEach(walk);
            };

            for (const node of graph['@graph'] || []) {
                // The Organization is one entity for the whole site; giving it
                // a per-language @id would split it into twelve companies.
                if (node['@type'] === 'Organization') continue;
                walk(node);
                node.inLanguage = lang;
                if (desc && node.description) node.description = desc;
                if (title && node['@type'] === 'WebPage') node.name = title;
            }

            const json = JSON.stringify(graph, null, 4)
                .split('\n').map(l => '    ' + l).join('\n');
            return `${open}\n${json}\n    ${close}`;
        });
}

// ------------------------------------------------------------------- output

function rmDir(p) {
    if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true });
}

let written = 0, annotated = 0;
const allLangs = new Set();

// Read every dictionary up front so the generated language directories can
// be cleared first: a language dropped from LANGS must not leave a stale
// tree behind for Google to keep crawling.
const groups = GROUPS.map(g => ({ ...g, ...readDicts(g.js) }));

// lang -> the set of page paths that will exist under /<lang>/.
const pagesByLang = new Map();
for (const g of groups) {
    for (const pageRel of g.pages) {
        const url = '/' + pageRel.replace(/index\.html$/, '').replace(/\/$/, '');
        for (const l of g.langs) {
            if (l === g.def) continue;
            if (!pagesByLang.has(l)) pagesByLang.set(l, new Set());
            pagesByLang.get(l).add(url === '' ? '/' : url);
        }
    }
}
groups.forEach(g => g.langs.forEach(l => allLangs.add(l)));
for (const lang of allLangs) rmDir(path.join(PUB, lang));

for (const group of groups) {
    const { dict, langs, def } = group;

    for (const pageRel of group.pages) {
        const file = path.join(PUB, pageRel);
        if (!fs.existsSync(file)) throw new Error(`missing page ${pageRel}`);
        const source = fs.readFileSync(file, 'utf8');

        // "/bksafe/policy/index.html" -> "/bksafe/policy"; "index.html" -> "/"
        const urlPath = '/' + pageRel.replace(/index\.html$/, '').replace(/\/$/, '');
        const canonicalPath = urlPath === '/' ? '/' : urlPath;

        const bodyAttrs = /<body([^>]*)>/.exec(source)?.[1] || '';
        const titleKey = /data-title-key="([^"]+)"/.exec(bodyAttrs)?.[1] || 'page_title';
        const descKey = /data-desc-key="([^"]+)"/.exec(bodyAttrs)?.[1] || 'meta_desc';

        // --- the source page only needs the alternates block
        let base = stripAlternates(source);
        if (langs.length > 1) {
            base = base.replace(/([ \t]*<link rel="canonical"[^>]*>\n)/,
                `$1${hreflangBlock(canonicalPath, langs, def)}`);
            annotated++;
        }
        if (base !== source) fs.writeFileSync(file, base);

        // --- one pre-rendered copy per non-default language
        for (const lang of langs) {
            if (lang === def) continue;
            const d = { ...dict[def], ...dict[lang] };   // fall back like the runtime does
            const prefix = `/${lang}`;

            let out = applyI18n(base, d);
            out = applyAria(out, d);
            out = prefixLinks(out, lang, pagesByLang.get(lang) || new Set());

            const canon = `${SITE}${prefix}${canonicalPath === '/' ? '' : canonicalPath}`;
            out = out.replace(/<html lang="[^"]*"/,
                `<html lang="${lang}"${RTL.has(lang) ? ' dir="rtl"' : ''}`);
            if (d[titleKey]) {
                out = setTag(out, /<title>[^<]*<\/title>/, `<title>${d[titleKey]}</title>`);
                // The social card must speak the page's language too; the
                // suffix is the site name, which the og:site_name already says.
                const social = esc(d[titleKey].split(' | ')[0]);
                out = setTag(out, /<meta property="og:title" content="[^"]*">/,
                    `<meta property="og:title" content="${social}">`);
                out = setTag(out, /<meta name="twitter:title" content="[^"]*">/,
                    `<meta name="twitter:title" content="${social}">`);
                out = setTag(out, /<meta property="og:image:alt" content="[^"]*">/,
                    `<meta property="og:image:alt" content="${social}">`);
            }
            if (d[descKey]) {
                out = setTag(out, /<meta name="description" content="[^"]*">/,
                    `<meta name="description" content="${esc(d[descKey])}">`);
                out = setTag(out, /<meta property="og:description" content="[^"]*">/,
                    `<meta property="og:description" content="${esc(d[descKey])}">`);
                out = setTag(out, /<meta name="twitter:description" content="[^"]*">/,
                    `<meta name="twitter:description" content="${esc(d[descKey])}">`);
            }
            out = setTag(out, /<link rel="canonical" href="[^"]*">/,
                `<link rel="canonical" href="${canon}">`);
            out = setTag(out, /<meta property="og:url" content="[^"]*">/,
                `<meta property="og:url" content="${canon}">`);
            out = out.replace(/<meta property="og:site_name"/,
                `<meta property="og:locale" content="${lang}">\n    <meta property="og:site_name"`);

            out = localiseJsonLd(out, canonicalPath, prefix, lang, d[titleKey], d[descKey]);

            const dest = path.join(PUB, lang, canonicalPath === '/' ? '' : canonicalPath, 'index.html');
            fs.mkdirSync(path.dirname(dest), { recursive: true });
            fs.writeFileSync(dest, out);
            written++;
        }
    }
}

console.log(`${written} translated pages written, ${annotated} source pages given hreflang`);
console.log(`languages: ${[...allLangs].sort().join(' ')}`);
