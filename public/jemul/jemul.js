/* =========================================================
   JeMul — product page + privacy policy.
   English and Vietnamese, same runtime as the other product
   pages on the site.
   ========================================================= */
const SHOT_DIR = '/assets/apps/jemulwap/';

const i18n = {
    en: {
        page_title: "JeMul — J2ME emulator for Android and browser | AIBachKhoa",
        meta_desc: "JeMul runs the old Java ME games from feature phones. Install the Android app to play your own .jar files, or play a whole library in your browser.",
        pol_page_title: "JeMul — privacy policy | AIBachKhoa",
        pol_meta_desc: "JeMul has no accounts on Android and keeps everything on the device. The browser edition signs in with Google only to control who can play.",

        aria_lang: "Change language",
        aria_theme: "Toggle theme",
        aria_menu: "Open menu",
        skip_link: "Skip to content",

        nav_home: "Home",
        nav_overview: "Overview",
        nav_android: "Android app",
        nav_web: "Play in browser",
        nav_shots: "Screenshots",
        nav_policy: "Privacy",
        nav_back: "Back to JeMul",

        hero_kicker: "Android app · browser edition · J2ME",
        hero_title: "The games from your first phone, <em>running again</em>.",
        hero_sub: "JeMul is a Java ME emulator. Install the Android app and point it at your own .jar files, or open the browser edition and a library of over a thousand titles is already there — nothing to install, nothing to configure.",
        hero_meta: "Application id <code>com.tdson.jemul</code> · Android phones and tablets · free",
        btn_play: "Get it on Google Play",
        btn_web: "Play in your browser",
        btn_web_open: "Open the browser edition",

        ov_eyebrow: "What it is",
        ov_title: "An emulator, not a download site.",
        ov_lede: "JeMul runs MIDP applications — the .jar files that feature phones ran between roughly 2001 and 2012. It ships with no game content of its own: on Android you bring your own files, and the browser edition reads a library the operator has already put on the server.",
        c1_h: "Real controls",
        c1_p: "A full phone keypad: D-pad, both soft keys, 0–9, star and hash, clear. On a computer every one of them is a keyboard key you can rebind; on a phone they are buttons under your thumbs.",
        c2_h: "Made for old screens",
        c2_p: "These games were drawn for 128×128 up to 480×800. JeMul scales them with the pixels kept crisp, keeps the original aspect ratio, and can rotate the display for the builds that expect a landscape handset.",
        c3_h: "Your progress stays",
        c3_p: "High scores and saved games are kept the way the original game expects and preserved between sessions, so quitting and coming back tomorrow picks up where you left off.",

        an_eyebrow: "Android app",
        an_title: "JeMul on your phone.",
        an_lede: "Add a .jar or .jad file, and it appears in your library with its icon and size. Everything runs on the device — no account, no server, no network needed after the file is on the phone.",
        an_l1: "Import .jar and .jad files straight from storage",
        an_l2: "Library with search, recently played, and per-game details",
        an_l3: "On-screen keypad in Nokia, Samsung or Sony Ericsson layouts",
        an_l4: "Fullscreen, aspect-ratio lock, size and frame-rate settings",
        an_l5: "Game sound and haptic feedback on every key press",

        web_eyebrow: "Browser edition",
        web_title: "Nothing to install.",
        web_lede: "The browser edition does the heavy lifting for you, so the games run at the speed of a desktop rather than of a phone from 2006. Sign in with Google and press play.",
        web_l1: "A library of more than a thousand titles, searchable and filterable",
        web_l2: "60 frames per second, with the frame rate shown while you play",
        web_l3: "Keyboard, mouse for touch games, and an on-screen keypad",
        web_l4: "A glass interface you can retune: colours, blur, scale, scanlines",
        web_l5: "Works on a phone too: controls and screen on one screen, no scrolling",

        gal_eyebrow: "Screenshots",
        gal_title: "A look around.",
        g1_t: "Library", g1_h: "The library",
        g1_p: "Cover art where the collection has it, the icon out of the .jar where it does not. Filter by genre, screen size or year, or just search.",
        g2_t: "Game details", g2_h: "One title, many builds",
        g2_p: "A single game was often shipped in dozens of builds, one per handset. Pick the screen size you want and the right file is the one that runs.",
        g3_t: "Playing", g3_h: "Playing",
        g3_p: "The screen, a keypad, and every control listed on the right with the key that triggers it. Pause, fast-forward, restart and screenshots are one key away.",
        g4_t: "Settings", g4_h: "Settings that do something",
        g4_p: "Glass opacity, blur, accent colour, scaling, scanlines — and the emulator's own options: handset model, rotation, frame cap, sound.",
        g5_t: "Keyboard", g5_h: "The keyboard guide",
        g5_p: "Every phone key next to the keyboard key bound to it. Click a row and press a new key to rebind it, even while a game is running.",
        g6_t: "On a phone", g6_h: "On a phone",
        g6_p: "In landscape the D-pad and action keys sit either side of the screen; in portrait they sit underneath. Nothing scrolls, and focus mode hides everything but the game.",

        facts_eyebrow: "The details",
        facts_title: "In short.",
        f1_t: "Platforms", f1_v: "Android · any modern browser",
        f2_t: "Runs", f2_v: "J2ME / MIDP 2.0 .jar files",
        f3_t: "Price", f3_v: "Free",
        f4_t: "Application id",

        cta_title: "Pick where you want to play.",

        footer_desc: "Building practical AI tools for developers and businesses.",
        footer_app: "The app",
        footer_prod: "Other products",
        footer_comp: "Company",
        footer_about: "About",
        footer_services: "Services",
        footer_contact: "Contact",
        footer_rights: "All rights reserved.",

        pol_title: "Privacy policy",
        pol_updated: "Last updated: 7 September 2026",
        pol_s1_h: "The short version",
        pol_s1_p: "The Android app has no accounts and sends nothing anywhere: your games, saves and settings stay on the device. The browser edition asks you to sign in with Google before starting a game, so the operator knows who is using the server — that is the only personal data involved.",
        pol_s2_h: "What the Android app stores",
        pol_s2_l1: "The .jar and .jad files you import, in the app's own storage.",
        pol_s2_l2: "Saved games and high scores written by the games themselves.",
        pol_s2_l3: "Your display, keypad and sound settings.",
        pol_s2_p: "All of it is on your device. Uninstalling the app removes it. Nothing is uploaded, and there is no analytics or advertising SDK reading it.",
        pol_s3_h: "What the browser edition stores",
        pol_s3_l1: "Your Google account's name, email address and profile picture, taken from the sign-in and used to identify you to the operator.",
        pol_s3_l2: "A record of visits and of which games were started, when, and for how long — used to see how the server is being used.",
        pol_s3_l3: "Your interface settings and in-game saves, kept on the server so they are there next time.",
        pol_s3_p: "Sign-in is handled by Google Firebase Authentication; JeMul never sees your password. Firebase Analytics is used for basic page and event counts. You can stop all of it by signing out and not playing.",
        pol_s4_h: "Game content",
        pol_s4_p: "JeMul supplies no games. On Android you provide the files yourself. In the browser edition the library belongs to whoever runs that installation; the authors of JeMul did not create it, do not own it and do not distribute it. Rights holders who want a title removed from an installation should contact its operator, and it will be taken down.",
        pol_s5_h: "Children",
        pol_s5_p: "JeMul is not directed at children under 13 and no personal data is knowingly collected from them.",
        pol_s6_h: "Your choices",
        pol_s6_l1: "Android: clear the app's data or uninstall it to remove everything.",
        pol_s6_l2: "Browser: sign out at any time; ask the operator to delete your activity record and saves.",
        pol_s6_l3: "Write to the address below and your data will be removed within 30 days.",
        pol_s7_h: "Contact",
        pol_s7_p: "Questions about this policy, or a request to remove data or content:",
    },
};

const LANGS = [
    { code: 'en', label: 'English' }
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
    const supported = LANGS.map(l => l.code);

    const detectLang = () => {
        // The URL wins: /es/… is the Spanish page whatever the browser
        // or a previous visit would have preferred.
        const fromUrl = window.LangUrl && window.LangUrl.fromPath(supported);
        if (fromUrl) return fromUrl;
        const own = localStorage.getItem('jemul-lang');
        if (own && supported.includes(own)) return own;
        const site = localStorage.getItem('lang');
        if (site && supported.includes(site)) return site;
        const prefs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ''];
        for (const pref of prefs) {
            const base = String(pref).toLowerCase().split('-')[0];
            if (supported.includes(base)) return base;
        }
        return DEFAULT_LANG;
    };

    langSelects.forEach(sel => {
        const short = sel.dataset.display === 'code';
        sel.innerHTML = LANGS.map(l => `<option value="${l.code}">${short ? l.code.toUpperCase() : l.label}</option>`).join('');
        sel.hidden = LANGS.length < 2;
    });

    const t = (lang, key) => (i18n[lang] && i18n[lang][key]) || i18n[DEFAULT_LANG][key] || '';

    const metaDesc = document.querySelector('meta[name="description"]');
    const titleKey = document.body.dataset.titleKey || 'page_title';
    const descKey = document.body.dataset.descKey || 'meta_desc';

    let currentLang = detectLang();

    const updateLanguage = (lang) => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const value = t(lang, el.getAttribute('data-i18n'));
            if (value) el.innerHTML = value;
        });
        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            const value = t(lang, el.getAttribute('data-i18n-aria'));
            if (value) el.setAttribute('aria-label', value);
        });
        document.title = t(lang, titleKey);
        if (metaDesc) metaDesc.setAttribute('content', t(lang, descKey));
        root.lang = lang;
        langSelects.forEach(sel => { sel.value = lang; });
        paintGallery();
    };

    langSelects.forEach(sel => sel.addEventListener('change', () => {
        const lang = sel.value;
        localStorage.setItem('jemul-lang', lang);
        // Each language is its own page now, so go there rather
        // than rewriting this one and leaving the URL lying.
        if (window.LangUrl) {
            window.location.href = window.LangUrl.hrefFor(lang, DEFAULT_LANG, supported);
            return;
        }
        currentLang = lang;
        updateLanguage(currentLang);
    }));

    // ---------- Screenshot gallery ----------
    const tabs = Array.from(document.querySelectorAll('.jm-gal-tab'));
    const galImg = document.getElementById('gal-img');
    const galTitle = document.getElementById('gal-title');
    const galCap = document.getElementById('gal-cap');

    function paintGallery() {
        const active = tabs.find(tab => tab.classList.contains('is-active'));
        if (!active || !galImg) return;
        const dict = i18n[currentLang] || i18n[DEFAULT_LANG];
        const key = active.dataset.key;
        galImg.src = SHOT_DIR + active.dataset.shot + '.webp';
        galImg.alt = 'JeMul — ' + (dict[key + '_h'] || '');
        if (galTitle) galTitle.textContent = dict[key + '_h'] || '';
        if (galCap) galCap.textContent = dict[key + '_p'] || '';
    }

    tabs.forEach(tab => tab.addEventListener('click', () => {
        tabs.forEach(other => {
            const on = other === tab;
            other.classList.toggle('is-active', on);
            other.setAttribute('aria-selected', String(on));
        });
        paintGallery();
    }));

    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
            tabs.slice(1).forEach(tab => { new Image().src = SHOT_DIR + tab.dataset.shot + '.webp'; });
        });
    }

    updateLanguage(currentLang);

    // ---------- Mobile nav ----------
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

    // ---------- Reveal on view ----------
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const reveals = document.querySelectorAll('.reveal');
    if (reduce) {
        reveals.forEach(el => el.classList.add('in-view'));
    } else {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
        reveals.forEach(el => io.observe(el));
    }
});
