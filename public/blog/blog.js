/* =========================================================
   Blog — the post list (/blog) and every post page.
   The list is translated like the rest of the site: English here,
   other languages in blog/i18n/<lang>.js, pre-rendered to /<lang>/blog
   by tools/build-i18n-pages.js. A post is written in one language
   (its <html lang>), so post pages carry no language picker.
   ========================================================= */
const i18n = {
    en: {
        page_title: "Blog — technology, reviews and security alerts | AIBachKhoa",
        meta_desc: "Technology write-ups, honest reviews and security alerts from the team behind AIBachKhoa — written plainly, with sources.",

        skip_link: "Skip to content",
        aria_lang: "Change language",
        aria_theme: "Toggle theme",
        aria_menu: "Open menu",
        nav_home: "Home",
        nav_products: "Products",
        nav_blog: "Blog",
        nav_contact: "Contact",

        hero_eyebrow: "The AIBachKhoa blog",
        hero_title: "Technology, <em>explained plainly</em>.",
        hero_sub: "Write-ups on the tools we build and use, honest reviews, and security alerts you can act on — each one with its sources.",

        filter_label: "Filter posts by topic",
        filter_all: "All posts",
        cat_tech: "Technology",
        cat_review: "Review",
        cat_security: "Security alert",
        cat_news: "News",
        cat_tech_plural: "Technology",
        cat_review_plural: "Reviews",
        cat_security_plural: "Security alerts",
        cat_news_plural: "News",

        read_post: "Read the post",
        min_read: "{n} min read",
        updated: "Updated",
        empty_filter: "Nothing in this category yet — the first one is on its way.",
        empty_all: "The first posts are on their way.",
        rss_follow: "Follow along with RSS",
        rss: "RSS feed",

        crumbs: "Breadcrumb",
        back_all: "All posts",
        tip_prompt: "Spotted a mistake, or have a tip for us?",
        more_eyebrow: "Keep reading",

        footer_desc: "Building practical AI tools for developers and businesses.",
        footer_blog: "Blog",
        footer_prod: "Products",
        footer_all_products: "All products",
        footer_comp: "Company",
        nav_about: "About",
        nav_services: "Services",
        footer_rights: "All rights reserved."
    }
};

const LANGS = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'zh', label: '中文' },
    { code: 'hi', label: 'हिन्दी' },
    { code: 'ar', label: 'العربية' },
    { code: 'pt', label: 'Português' },
    { code: 'fr', label: 'Français' },
    { code: 'de', label: 'Deutsch' },
    { code: 'ja', label: '日本語' },
    { code: 'ko', label: '한국어' },
    { code: 'ru', label: 'Русский' }
];
const DEFAULT_LANG = 'en';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;

    // ---------- Theme ----------
    const themeToggles = [document.getElementById('theme-toggle'), document.getElementById('mobile-theme-toggle')].filter(Boolean);
    let currentTheme = localStorage.getItem('theme') || 'light';
    root.setAttribute('data-theme', currentTheme);
    themeToggles.forEach(btn => btn.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        root.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
    }));

    // ---------- Language ----------
    const langSelects = [document.getElementById('lang-select'), document.getElementById('mobile-lang-select')].filter(Boolean);
    const singleLang = document.body.dataset.singleLang === 'true';
    const supported = LANGS.map(l => l.code);

    // A post stays in the language it was written in; only the list page
    // exists in every language, so only it follows the visitor's choice.
    const currentLang = singleLang
        ? (root.lang || DEFAULT_LANG)
        : (window.LangUrl ? window.LangUrl.detect(supported, DEFAULT_LANG) : DEFAULT_LANG);

    langSelects.forEach(sel => {
        sel.hidden = singleLang;
        const short = sel.dataset.display === 'code';
        sel.innerHTML = LANGS.map(l => `<option value="${l.code}">${short ? l.code.toUpperCase() : l.label}</option>`).join('');
        sel.value = currentLang;
        sel.addEventListener('change', () => {
            const lang = sel.value;
            localStorage.setItem('lang', lang);
            if (window.LangUrl) window.location.href = window.LangUrl.hrefFor(lang, DEFAULT_LANG, supported);
        });
    });

    const dict = i18n[currentLang] || {};
    const t = (key) => dict[key] || i18n[DEFAULT_LANG][key] || '';

    if (i18n[currentLang] && !singleLang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const value = t(el.dataset.i18n);
            if (value) el.innerHTML = value;
        });
        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            const value = t(el.dataset.i18nAria);
            if (value) el.setAttribute('aria-label', value);
        });
        const titleKey = document.body.dataset.titleKey;
        if (titleKey && t(titleKey)) document.title = t(titleKey);
    }

    // Dates and reading times read naturally in the page's language.
    const locale = currentLang === 'zh' ? 'zh-CN' : currentLang;
    let dateFmt = null;
    try { dateFmt = new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }); } catch (e) { /* old browser */ }
    if (dateFmt) {
        document.querySelectorAll('time[datetime]').forEach(el => {
            const d = new Date(el.getAttribute('datetime') + 'T00:00:00Z');
            if (!isNaN(d)) el.textContent = dateFmt.format(d);
        });
    }
    document.querySelectorAll('.post-read[data-minutes]').forEach(el => {
        el.textContent = t('min_read').replace('{n}', el.dataset.minutes);
    });

    // ---------- Topic filter (list page) ----------
    const chips = Array.from(document.querySelectorAll('.blog-chip'));
    const cards = Array.from(document.querySelectorAll('#post-list .post-card'));
    const empty = document.getElementById('post-empty');

    const applyFilter = (filter) => {
        if (!chips.some(c => c.dataset.filter === filter)) filter = 'all';
        chips.forEach(c => {
            const on = c.dataset.filter === filter;
            c.classList.toggle('is-active', on);
            c.setAttribute('aria-pressed', String(on));
        });
        let shown = 0;
        cards.forEach(card => {
            const show = filter === 'all' || card.dataset.category === filter;
            card.hidden = !show;
            if (show) shown++;
        });
        if (empty) empty.hidden = shown > 0;
    };

    if (chips.length) {
        chips.forEach(chip => chip.addEventListener('click', () => {
            const filter = chip.dataset.filter;
            history.replaceState(null, '', filter === 'all' ? window.location.pathname : '#' + filter);
            applyFilter(filter);
        }));
        applyFilter(window.location.hash.slice(1) || 'all');
        window.addEventListener('hashchange', () => applyFilter(window.location.hash.slice(1) || 'all'));
    }

    // ---------- Mobile menu ----------
    const mobileBtn = document.getElementById('mobile-btn');
    const navLinks = document.getElementById('nav-links');
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            const open = navLinks.classList.toggle('open');
            mobileBtn.setAttribute('aria-expanded', String(open));
        });
        navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
            navLinks.classList.remove('open');
            mobileBtn.setAttribute('aria-expanded', 'false');
        }));
    }

    // ---------- Navbar border on scroll ----------
    const navbar = document.getElementById('navbar');
    if (navbar) {
        const sentinel = document.createElement('div');
        sentinel.style.cssText = 'position:absolute;top:0;height:1px;width:1px;';
        document.body.prepend(sentinel);
        new IntersectionObserver(([e]) => {
            navbar.classList.toggle('scrolled', !e.isIntersecting);
        }, { threshold: 0 }).observe(sentinel);
    }
});
