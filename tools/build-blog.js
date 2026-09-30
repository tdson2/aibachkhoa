#!/usr/bin/env node
/* Builds the blog from Markdown.
 *
 *     npm run blog
 *
 * Posts live in content/blog/<slug>.md, one file per post; the file name is
 * the URL (/blog/<slug>). Each starts with a front-matter block:
 *
 *     ---
 *     title: Welcome to the AIBachKhoa blog
 *     description: One or two sentences for search results and the post list.
 *     date: 2026-09-30
 *     category: news            # tech | review | security | news
 *     author: AIBachKhoa        # optional
 *     cover: /assets/blog/welcome.webp    # optional, 1200x630 works best
 *     cover_alt: What the image shows     # optional
 *     lang: en                  # optional, the language the post is written in
 *     updated: 2026-10-02       # optional, shown when a post was revised
 *     draft: true               # optional, skipped by the build
 *     ---
 *
 * What this writes, all from scratch on every run:
 *   public/blog/index.html          the list of posts (translated by npm run i18n)
 *   public/blog/<slug>/index.html   one page per post
 *   public/blog/feed.xml            RSS for readers who follow along
 *   public/index.html               the "From the blog" cards between the
 *                                   <!-- blog:latest --> markers
 *
 * The Markdown dialect is deliberately small: headings, paragraphs, **bold**,
 * *italic*, `code`, fenced code blocks, links, images, lists, blockquotes,
 * horizontal rules, and GitHub-style callouts (> [!WARNING] …) for security
 * notices. A line that starts with an HTML tag is passed through untouched,
 * so anything the dialect lacks can be written as HTML.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'content', 'blog');
const PUB = path.join(ROOT, 'public');
const OUT = path.join(PUB, 'blog');
const SITE = 'https://aibachkhoa.com';

const CATEGORIES = {
    tech: 'Technology',
    review: 'Review',
    security: 'Security alert',
    news: 'News'
};
const HOME_CARDS = 3;

// ----------------------------------------------------------------- parsing

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function frontMatter(text, file) {
    const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(text);
    if (!m) throw new Error(`${file}: missing front matter (--- … ---)`);
    const meta = {};
    for (const line of m[1].split(/\r?\n/)) {
        const kv = /^([a-z_]+):\s*(.*?)\s*(?:#.*)?$/.exec(line);
        if (!kv) continue;
        let v = kv[2];
        if (/^(["']).*\1$/.test(v)) v = v.slice(1, -1);
        meta[kv[1]] = v;
    }
    return { meta, body: text.slice(m[0].length) };
}

function slugify(s) {
    return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
        .replace(/đ/g, 'd').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

/** Inline Markdown: code first, so nothing inside backticks is touched. */
function inline(text) {
    const codes = [];
    let s = text.replace(/`([^`]+)`/g, (_, c) => `\u0000${codes.push(esc(c)) - 1}\u0000`);
    // Inline HTML the author wrote on purpose (<kbd>, <br>, <sup>…) survives.
    const tags = [];
    s = s.replace(/<\/?[a-zA-Z][^>]*>/g, (t) => `\u0001${tags.push(t) - 1}\u0001`);
    s = esc(s);
    s = s.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+&quot;([^&]*)&quot;)?\)/g,
        (_, alt, src, title) => `<img src="${src}" alt="${alt}" loading="lazy"${title ? ` title="${title}"` : ''}>`);
    s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, label, href) => {
        const external = /^https?:/.test(href) && !href.startsWith(SITE);
        return `<a href="${href}"${external ? ' target="_blank" rel="noopener"' : ''}>${label}</a>`;
    });
    s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    s = s.replace(/(^|[^*\w])\*([^*\s][^*]*?)\*(?!\w)/g, '$1<em>$2</em>');
    s = s.replace(/(^|[^_\w])_([^_\s][^_]*?)_(?!\w)/g, '$1<em>$2</em>');
    s = s.replace(/\u0001(\d+)\u0001/g, (_, i) => tags[i]);
    return s.replace(/\u0000(\d+)\u0000/g, (_, i) => `<code>${codes[i]}</code>`);
}

const CALLOUTS = { NOTE: 'Note', TIP: 'Tip', IMPORTANT: 'Important', WARNING: 'Warning', CAUTION: 'Caution' };

function markdown(src) {
    const lines = src.replace(/\r\n/g, '\n').split('\n');
    const out = [];
    const ids = new Set();
    let i = 0;

    const isBlockStart = (l) => /^(#{1,6}\s|```|>|\s*[-*+]\s|\s*\d+[.)]\s|<|(-{3,}|\*{3,})\s*$)/.test(l);

    while (i < lines.length) {
        const line = lines[i];

        if (!line.trim()) { i++; continue; }

        // fenced code
        let m = /^```\s*([\w-]*)\s*$/.exec(line);
        if (m) {
            const buf = [];
            i++;
            while (i < lines.length && !/^```\s*$/.test(lines[i])) buf.push(lines[i++]);
            i++;
            out.push(`<pre><code${m[1] ? ` class="language-${m[1]}"` : ''}>${esc(buf.join('\n'))}</code></pre>`);
            continue;
        }

        // heading; # is reserved for the post title, so it renders as <h2>
        m = /^(#{1,6})\s+(.*?)\s*#*\s*$/.exec(line);
        if (m) {
            const level = Math.min(Math.max(m[1].length, 2), 4);
            let id = slugify(m[2].replace(/<[^>]+>/g, '')) || 'section';
            for (let n = 2; ids.has(id); n++) id = id.replace(/-\d+$/, '') + '-' + n;
            ids.add(id);
            out.push(`<h${level} id="${id}">${inline(m[2])}</h${level}>`);
            i++;
            continue;
        }

        if (/^(-{3,}|\*{3,})\s*$/.test(line)) { out.push('<hr>'); i++; continue; }

        // blockquote, or a callout when it opens with [!TYPE]
        if (/^>/.test(line)) {
            const buf = [];
            while (i < lines.length && /^>/.test(lines[i])) buf.push(lines[i++].replace(/^>\s?/, ''));
            const c = /^\[!(\w+)\]\s*(.*)$/.exec(buf[0] || '');
            if (c && CALLOUTS[c[1].toUpperCase()]) {
                const type = c[1].toUpperCase();
                const title = c[2] || CALLOUTS[type];
                out.push(`<aside class="callout callout--${type.toLowerCase()}" role="note"><p class="callout-title">${inline(title)}</p>${markdown(buf.slice(1).join('\n'))}</aside>`);
            } else {
                out.push(`<blockquote>${markdown(buf.join('\n'))}</blockquote>`);
            }
            continue;
        }

        // lists (one level; indent a line to continue the previous item)
        m = /^\s*([-*+]|\d+[.)])\s+/.exec(line);
        if (m) {
            const ordered = /\d/.test(m[1]);
            const items = [];
            while (i < lines.length) {
                const item = /^\s*([-*+]|\d+[.)])\s+(.*)$/.exec(lines[i]);
                if (item && /\d/.test(item[1]) === ordered) { items.push(item[2]); i++; continue; }
                if (items.length && /^\s{2,}\S/.test(lines[i])) { items[items.length - 1] += ' ' + lines[i].trim(); i++; continue; }
                break;
            }
            const tag = ordered ? 'ol' : 'ul';
            out.push(`<${tag}>${items.map(t => `<li>${inline(t)}</li>`).join('')}</${tag}>`);
            continue;
        }

        // raw HTML block: runs until the next blank line
        if (/^</.test(line)) {
            const buf = [];
            while (i < lines.length && lines[i].trim()) buf.push(lines[i++]);
            out.push(buf.join('\n'));
            continue;
        }

        // paragraph; a lone image becomes a figure with its alt as caption
        const buf = [];
        while (i < lines.length && lines[i].trim() && !(buf.length && isBlockStart(lines[i]))) buf.push(lines[i++].trim());
        const para = buf.join(' ');
        const img = /^!\[([^\]]*)\]\(([^)\s]+)\)$/.exec(para);
        if (img) {
            out.push(`<figure>${inline(para)}${img[1] ? `<figcaption>${inline(img[1])}</figcaption>` : ''}</figure>`);
        } else {
            out.push(`<p>${inline(para)}</p>`);
        }
    }
    return out.join('\n');
}

function readPosts() {
    if (!fs.existsSync(SRC)) return [];
    const posts = [];
    for (const f of fs.readdirSync(SRC).filter(f => f.endsWith('.md') && !f.startsWith('_')).sort()) {
        const file = path.join('content', 'blog', f);
        const { meta, body } = frontMatter(fs.readFileSync(path.join(SRC, f), 'utf8'), file);
        if (/^(true|yes)$/i.test(meta.draft || '')) continue;

        for (const k of ['title', 'description', 'date', 'category']) {
            if (!meta[k]) throw new Error(`${file}: front matter needs "${k}"`);
        }
        if (!/^\d{4}-\d{2}-\d{2}$/.test(meta.date)) throw new Error(`${file}: date must be YYYY-MM-DD`);
        if (meta.updated && !/^\d{4}-\d{2}-\d{2}$/.test(meta.updated)) throw new Error(`${file}: updated must be YYYY-MM-DD`);
        if (!CATEGORIES[meta.category]) {
            throw new Error(`${file}: category must be one of ${Object.keys(CATEGORIES).join(', ')}`);
        }
        const slug = f.replace(/\.md$/, '');
        if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
            throw new Error(`${file}: file name must be lowercase-with-dashes (it becomes the URL)`);
        }
        const words = body.replace(/```[\s\S]*?```/g, '').replace(/<[^>]+>/g, ' ')
            .split(/\s+/).filter(Boolean).length;
        posts.push({
            ...meta,
            slug,
            url: `/blog/${slug}`,
            lang: meta.lang || 'en',
            author: meta.author || 'AIBachKhoa',
            minutes: Math.max(1, Math.round(words / 220)),
            html: markdown(body)
        });
    }
    // Newest first; the slug breaks ties so the order never depends on the disk.
    return posts.sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
}

// ---------------------------------------------------------------- template

const fmtDate = (iso) => new Date(iso + 'T00:00:00Z').toLocaleDateString('en-US',
    { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });

const THEME_ICONS = `<svg class="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4"/></svg>
                    <svg class="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.5 13.4A8 8 0 0 1 10.6 3.5 8 8 0 1 0 20.5 13.4z"/></svg>`;

function head({ lang, title, desc, canonical, image, imageAlt, type, extra = '' }) {
    return `<!DOCTYPE html>
<html lang="${lang}" data-theme="light">
<head>
    <!-- Generated by tools/build-blog.js from content/blog/ — edit the Markdown, not this file. -->
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18444819482"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'AW-18444819482');
    </script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(desc)}">
    <link rel="canonical" href="${canonical}">
    <meta property="og:type" content="${type}">
    <meta property="og:site_name" content="AIBachKhoa">
    <meta property="og:title" content="${esc(title.split(' | ')[0])}">
    <meta property="og:description" content="${esc(desc)}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:image" content="${SITE}${image}">
    <meta property="og:image:alt" content="${esc(imageAlt)}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${esc(title.split(' | ')[0])}">
    <meta name="twitter:description" content="${esc(desc)}">
    <meta name="twitter:image" content="${SITE}${image}">
    <link rel="alternate" type="application/rss+xml" title="AIBachKhoa Blog" href="${SITE}/blog/feed.xml">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
    <link rel="icon" type="image/png" href="/assets/logo.png">
    <link rel="apple-touch-icon" href="/assets/logo.png">
    <link rel="stylesheet" href="/style.css">
    <link rel="stylesheet" href="/blog/blog.css">${extra}
</head>`;
}

function nav() {
    return `    <nav class="navbar" id="navbar">
        <div class="container nav-container">
            <a href="/" class="logo" aria-label="AIBachKhoa">
                <img src="/assets/logo.png" alt="" class="logo-img" width="30" height="30"><span class="logo-word">AIBachKhoa</span>
            </a>

            <div class="nav-links" id="nav-links">
                <a href="/" class="nav-link" data-i18n="nav_home">Home</a>
                <a href="/#products" class="nav-link" data-i18n="nav_products">Products</a>
                <a href="/blog" class="nav-link is-current" aria-current="page" data-i18n="nav_blog">Blog</a>
                <a href="/#contact" class="nav-link" data-i18n="nav_contact">Contact</a>
                <span class="nav-divider" aria-hidden="true"></span>
                <select id="lang-select" class="lang-select" data-i18n-aria="aria_lang" aria-label="Change language"></select>
                <button id="theme-toggle" class="icon-btn" data-i18n-aria="aria_theme" aria-label="Toggle theme">
                    ${THEME_ICONS}
                </button>
            </div>

            <div class="mobile-controls">
                <select id="mobile-lang-select" class="lang-select lang-select--compact" data-display="code" data-i18n-aria="aria_lang" aria-label="Change language"></select>
                <button id="mobile-theme-toggle" class="icon-btn" data-i18n-aria="aria_theme" aria-label="Toggle theme">
                    ${THEME_ICONS}
                </button>
                <button class="icon-btn mobile-menu-btn" data-i18n-aria="aria_menu" aria-label="Open menu" id="mobile-btn" aria-expanded="false">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
                </button>
            </div>
        </div>
    </nav>`;
}

function footer() {
    return `    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <a href="/" class="logo"><img src="/assets/logo.png" alt="" class="logo-img" width="30" height="30" loading="lazy" decoding="async"><span class="logo-word">AIBachKhoa</span></a>
                    <p data-i18n="footer_desc">Building practical AI tools for developers and businesses.</p>
                    <div class="footer-contact">
                        <p class="footer-contact-name">Son Tran</p>
                        <a href="mailto:contact@aibachkhoa.com">contact@aibachkhoa.com</a>
                    </div>
                </div>

                <nav class="footer-col" data-i18n-aria="footer_blog" aria-label="Blog">
                    <h4 data-i18n="footer_blog">Blog</h4>
                    <a href="/blog" data-i18n="filter_all">All posts</a>
${Object.keys(CATEGORIES).map(c => `                    <a href="/blog#${c}" data-i18n="cat_${c}_plural">${pluralOf(c)}</a>`).join('\n')}
                    <a href="/blog/feed.xml" data-i18n="rss">RSS feed</a>
                </nav>

                <nav class="footer-col" data-i18n-aria="footer_prod" aria-label="Products">
                    <h4 data-i18n="footer_prod">Products</h4>
                    <a href="/genvideo">GenVideo</a>
                    <a href="/bksafe">BKSafe</a>
                    <a href="/orimessenger">OriMessenger</a>
                    <a href="/locallex">LocalLex</a>
                    <a href="/#index" data-i18n="footer_all_products">All products</a>
                </nav>

                <nav class="footer-col" data-i18n-aria="footer_comp" aria-label="Company">
                    <h4 data-i18n="footer_comp">Company</h4>
                    <a href="/#about" data-i18n="nav_about">About</a>
                    <a href="/#services" data-i18n="nav_services">Services</a>
                    <a href="/#contact" data-i18n="nav_contact">Contact</a>
                </nav>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2026 AIBachKhoa</p>
                <p data-i18n="footer_rights">All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="/lang-url.js"></script>
    <script src="/blog/blog.js"></script>
    <script defer src="/analytics.js"></script>
</body>
</html>
`;
}

function pluralOf(c) {
    return { tech: 'Technology', review: 'Reviews', security: 'Security alerts', news: 'News' }[c];
}

/** The meta line under a title: category · date · reading time. */
function metaLine(p, { withCategory = true } = {}) {
    return `${withCategory ? `<span class="post-cat post-cat--${p.category}" data-i18n="cat_${p.category}">${CATEGORIES[p.category]}</span>` : ''}
                            <time datetime="${p.date}">${fmtDate(p.date)}</time>
                            <span class="post-read" data-minutes="${p.minutes}">${p.minutes} min read</span>`;
}

/** A post as a card, used on the list page and on the home page. */
function card(p, { featured = false, headingTag = 'h3' } = {}) {
    const media = p.cover
        ? `<img src="${p.cover}" alt="" width="1200" height="630" loading="lazy">`
        : `<span class="post-card-mark" aria-hidden="true">${esc(CATEGORIES[p.category].charAt(0))}</span>`;
    return `<a class="card post-card${featured ? ' post-card--featured' : ''}" href="${p.url}" data-category="${p.category}" lang="${p.lang}">
                        <div class="card-media post-card-media post-card-media--${p.category}">${media}</div>
                        <div class="card-body">
                            <p class="card-tag post-meta">
                            ${metaLine(p)}
                            </p>
                            <${headingTag} class="card-title">${esc(p.title)}</${headingTag}>
                            <p class="card-desc">${esc(p.description)}</p>
                            <span class="card-more"><span data-i18n="read_post">Read the post</span> <span aria-hidden="true">→</span></span>
                        </div>
                    </a>`;
}

// ------------------------------------------------------------------- pages

function listPage(posts) {
    const [first, ...rest] = posts;
    const body = posts.length
        ? `                <div class="post-list" id="post-list">
                    ${card(first, { featured: true, headingTag: 'h2' })}
${rest.map(p => '                    ' + card(p)).join('\n')}
                </div>
                <p class="post-empty" id="post-empty" hidden data-i18n="empty_filter">Nothing in this category yet — the first one is on its way.</p>`
        : `                <p class="post-empty" data-i18n="empty_all">The first posts are on their way.</p>`;

    const graph = {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        '@id': `${SITE}/blog#blog`,
        name: 'AIBachKhoa Blog',
        url: `${SITE}/blog`,
        description: 'Technology write-ups, honest reviews and security alerts from the team behind AIBachKhoa.',
        publisher: { '@id': `${SITE}/#organization` },
        blogPost: posts.map(p => ({
            '@type': 'BlogPosting',
            headline: p.title,
            url: `${SITE}${p.url}`,
            datePublished: p.date,
            inLanguage: p.lang
        }))
    };

    return `${head({
        lang: 'en',
        title: 'Blog — technology, reviews and security alerts | AIBachKhoa',
        desc: 'Technology write-ups, honest reviews and security alerts from the team behind AIBachKhoa — written plainly, with sources.',
        canonical: `${SITE}/blog`,
        image: '/assets/og/home.png',
        imageAlt: 'AIBachKhoa Blog',
        type: 'website',
        extra: `
    <script type="application/ld+json">
${JSON.stringify(graph, null, 4).split('\n').map(l => '    ' + l).join('\n')}
    </script>`
    })}
<body class="page-blog" data-title-key="page_title" data-desc-key="meta_desc">
    <a href="#main" class="skip-link" data-i18n="skip_link">Skip to content</a>

${nav()}

    <main id="main">
        <header class="blog-hero">
            <div class="container">
                <p class="eyebrow" data-i18n="hero_eyebrow">The AIBachKhoa blog</p>
                <h1 class="display display--xl" data-i18n="hero_title">Technology, <em>explained plainly</em>.</h1>
                <p class="section-sub" data-i18n="hero_sub">Write-ups on the tools we build and use, honest reviews, and security alerts you can act on — each one with its sources.</p>

                <div class="blog-filters" role="group" data-i18n-aria="filter_label" aria-label="Filter posts by topic">
                    <button type="button" class="blog-chip is-active" data-filter="all" aria-pressed="true" data-i18n="filter_all">All posts</button>
${Object.keys(CATEGORIES).map(c => `                    <button type="button" class="blog-chip" data-filter="${c}" aria-pressed="false" data-i18n="cat_${c}_plural">${pluralOf(c)}</button>`).join('\n')}
                </div>
            </div>
        </header>

        <section class="panel panel--white blog-posts">
            <div class="container">
${body}
                <p class="blog-rss"><a href="/blog/feed.xml"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM3 10a11 11 0 0 1 11 11h-3a8 8 0 0 0-8-8v-3zm0-7a18 18 0 0 1 18 18h-3A15 15 0 0 0 3 6V3z"/></svg><span data-i18n="rss_follow">Follow along with RSS</span></a></p>
            </div>
        </section>
    </main>

${footer()}`;
}

function postPage(p, posts) {
    const others = posts.filter(o => o !== p);
    const related = [...others.filter(o => o.category === p.category), ...others.filter(o => o.category !== p.category)].slice(0, 2);

    const graph = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'BlogPosting',
                '@id': `${SITE}${p.url}#post`,
                headline: p.title,
                description: p.description,
                url: `${SITE}${p.url}`,
                mainEntityOfPage: `${SITE}${p.url}`,
                datePublished: p.date,
                dateModified: p.updated || p.date,
                inLanguage: p.lang,
                articleSection: CATEGORIES[p.category],
                image: `${SITE}${p.cover || '/assets/og/home.png'}`,
                author: { '@type': p.author === 'AIBachKhoa' ? 'Organization' : 'Person', name: p.author },
                publisher: { '@id': `${SITE}/#organization` },
                isPartOf: { '@id': `${SITE}/blog#blog` }
            },
            {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
                    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
                    { '@type': 'ListItem', position: 3, name: p.title, item: `${SITE}${p.url}` }
                ]
            }
        ]
    };

    return `${head({
        lang: p.lang,
        title: `${p.title} | AIBachKhoa Blog`,
        desc: p.description,
        canonical: `${SITE}${p.url}`,
        image: p.cover || '/assets/og/home.png',
        imageAlt: p.cover_alt || p.title,
        type: 'article',
        extra: `
    <meta property="article:published_time" content="${p.date}">${p.updated ? `
    <meta property="article:modified_time" content="${p.updated}">` : ''}
    <meta property="article:section" content="${CATEGORIES[p.category]}">
    <script type="application/ld+json">
${JSON.stringify(graph, null, 4).split('\n').map(l => '    ' + l).join('\n')}
    </script>`
    })}
<body class="page-blog page-post" data-single-lang="true">
    <a href="#main" class="skip-link" data-i18n="skip_link">Skip to content</a>

${nav()}

    <main id="main">
        <article class="post">
            <header class="post-head">
                <div class="container post-shell">
                    <nav class="post-crumbs" data-i18n-aria="crumbs" aria-label="Breadcrumb">
                        <a href="/blog" data-i18n="nav_blog">Blog</a>
                        <span aria-hidden="true">/</span>
                        <a href="/blog#${p.category}" data-i18n="cat_${p.category}_plural">${pluralOf(p.category)}</a>
                    </nav>
                    <h1 class="display display--md post-title">${esc(p.title)}</h1>
                    <p class="post-lede">${esc(p.description)}</p>
                    <p class="post-meta post-meta--head">
                            ${metaLine(p)}
                            <span class="post-author">${esc(p.author)}</span>
                    </p>${p.updated ? `
                    <p class="post-updated"><span data-i18n="updated">Updated</span> <time datetime="${p.updated}">${fmtDate(p.updated)}</time></p>` : ''}
                </div>
            </header>
${p.cover ? `
            <figure class="container post-cover">
                <img src="${p.cover}" alt="${esc(p.cover_alt || '')}" width="1200" height="630" fetchpriority="high">
            </figure>
` : ''}
            <div class="container post-shell">
                <div class="prose">
${p.html.split('\n').map(l => '                    ' + l).join('\n')}
                </div>

                <footer class="post-foot">
                    <a class="btn btn-ghost" href="/blog"><span aria-hidden="true">←</span> <span data-i18n="back_all">All posts</span></a>
                    <p class="post-foot-note"><span data-i18n="tip_prompt">Spotted a mistake, or have a tip for us?</span> <a href="mailto:contact@aibachkhoa.com">contact@aibachkhoa.com</a></p>
                </footer>
            </div>
        </article>
${related.length ? `
        <section class="panel panel--cream post-more">
            <div class="container">
                <p class="eyebrow" data-i18n="more_eyebrow">Keep reading</p>
                <div class="cards">
${related.map(o => '                    ' + card(o)).join('\n')}
                </div>
            </div>
        </section>
` : ''}    </main>

${footer()}`;
}

function feed(posts) {
    const x = (s) => esc(s).replace(/&#39;/g, "'");
    const items = posts.slice(0, 30).map(p => `    <item>
      <title>${x(p.title)}</title>
      <link>${SITE}${p.url}</link>
      <guid isPermaLink="true">${SITE}${p.url}</guid>
      <pubDate>${new Date(p.date + 'T08:00:00Z').toUTCString()}</pubDate>
      <category>${CATEGORIES[p.category]}</category>
      <description>${x(p.description)}</description>
    </item>`).join('\n');
    return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>AIBachKhoa Blog</title>
    <link>${SITE}/blog</link>
    <atom:link href="${SITE}/blog/feed.xml" rel="self" type="application/rss+xml"/>
    <description>Technology write-ups, honest reviews and security alerts from the team behind AIBachKhoa.</description>
    <language>en</language>
${posts.length ? `    <lastBuildDate>${new Date((posts[0].updated || posts[0].date) + 'T08:00:00Z').toUTCString()}</lastBuildDate>\n` : ''}${items}
  </channel>
</rss>
`;
}

/** The home page's "From the blog" cards, between the two markers. */
function updateHome(posts) {
    const file = path.join(PUB, 'index.html');
    const html = fs.readFileSync(file, 'utf8');
    const re = /(<!-- blog:latest -->)[\s\S]*?\n([ \t]*<!-- \/blog:latest -->)/;
    if (!re.test(html)) throw new Error('public/index.html: no <!-- blog:latest --> … <!-- /blog:latest --> markers');
    const cards = posts.slice(0, HOME_CARDS).map(p => '                    ' + card(p)).join('\n');
    fs.writeFileSync(file, html.replace(re, (_, a, b) => `${a}\n${cards ? cards + '\n' : ''}${b}`));
}

// ------------------------------------------------------------------- build

const posts = readPosts();

// Clear generated post folders so a renamed or deleted post leaves no orphan.
for (const e of fs.readdirSync(OUT, { withFileTypes: true })) {
    if (e.isDirectory() && e.name !== 'i18n') fs.rmSync(path.join(OUT, e.name), { recursive: true, force: true });
}

for (const p of posts) {
    const dir = path.join(OUT, p.slug);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), postPage(p, posts));
}
fs.writeFileSync(path.join(OUT, 'index.html'), listPage(posts));
fs.writeFileSync(path.join(OUT, 'feed.xml'), feed(posts));
updateHome(posts);

console.log(`blog: ${posts.length} post(s) — ${posts.map(p => p.slug).join(', ') || 'none'}`);
