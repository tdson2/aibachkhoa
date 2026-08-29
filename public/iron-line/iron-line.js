/* =========================================================
   Iron Line product + policy pages.
   Same shape as the other product pages on the site: one i18n
   table, a language picker that hides itself while only one
   language is on offer, and a theme shared site-wide through
   the 'theme' key. The language choice is stored under its own
   key so it does not fight with the picker on the landing page.
   ========================================================= */

const i18n = {
    en: {
        /* ---------------------------------------------------- shell ---- */
        page_title: "Iron Line — hold the line across 12 battlefields | AIBachKhoa",
        meta_desc: "An offline tower defense for Android: 12 battlefields, four towers with four tiers each, fifteen enemy types on the ground and in the air. No ads, no purchases, no internet permission.",
        aria_lang: "Change language",
        aria_theme: "Toggle theme",
        aria_menu: "Open menu",
        skip_link: "Skip to content",

        nav_home: "Home",
        nav_overview: "Overview",
        nav_towers: "Towers",
        nav_enemies: "Enemies",
        nav_shots: "Screenshots",
        nav_policy: "Privacy",

        footer_desc: "Building practical AI tools for developers and businesses.",
        footer_game: "The game",
        footer_prod: "Other products",
        footer_comp: "Company",
        footer_about: "About",
        footer_services: "Services",
        footer_contact: "Contact",
        footer_rights: "All rights reserved.",

        /* ----------------------------------------------------- hero ---- */
        hero_kicker: "Android · tower defense",
        hero_title: "One road. <em>Hold the line</em>.",
        hero_sub: "An armoured column is rolling toward your defence core. You have one road, a handful of empty plots, and not nearly enough credits. Build the line, upgrade it under fire, and keep the core untouched through twelve battlefields.",
        btn_shots: "See how it plays",
        btn_policy: "Privacy policy",
        btn_contact: "Ask about a build",
        hero_meta: "Application id <code>com.tdson.ironline</code> · landscape · arm64-v8a, armeabi-v7a and x86_64 · English and Tiếng Việt · plays entirely offline.",

        stat_missions: "Battlefields across five terrains",
        stat_towers: "Towers, four tiers each",
        stat_enemies: "Enemy types, ground and air",
        stat_langs: "Languages",
        stat_zero: "Ads, purchases, trackers",

        /* --------------------------------------------------- towers ---- */
        towers_eyebrow: "Towers",
        towers_title: "Four emplacements, <em>four tiers each</em>.",
        towers_sub: "Every tower upgrades four times, retargets on demand, and sells back for credits when the shape of the battle changes. There is no single build that answers every map.",

        t_gatling_t: "Gatling",
        t_gatling_d: "Fast and cheap, useful from the first wave to the last. The tower you open with and the one still earning its plot at the end.",
        t_gatling_tier: "Mk1 – Mk4 · ground and air",
        t_laser_t: "Laser",
        t_laser_d: "A continuous beam that ignores armour outright. Expensive per plot, but the answer to anything that shrugs off bullets.",
        t_laser_tier: "Mk1 – Mk4 · ground and air",
        t_rocket_t: "Rocket",
        t_rocket_d: "Heavy splash damage that clears a packed road in one salvo — but it cannot elevate, so it never touches an aircraft.",
        t_rocket_tier: "Mk1 – Mk4 · ground only",
        t_tesla_t: "Tesla",
        t_tesla_d: "Chains lightning between targets and slows everything it touches. Weak alone, quietly decisive next to anything else.",
        t_tesla_tier: "Mk1 – Mk4 · ground and air",

        /* -------------------------------------------------- enemies ---- */
        air_eyebrow: "Ground and air",
        air_title: "Fifteen ways in, <em>and only one road</em>.",
        air_sub: "Scouts, armoured hulls, shielded carriers and swarms follow the route you fortified. Drones, biplanes, jets and heavy bombers ignore it completely and fly straight at the core.",
        air_1: "<strong>The road is only half the map.</strong> Five of the fifteen enemy types never touch it — they take the straight line to your core instead.",
        air_2: "<strong>Rockets cannot elevate.</strong> An all-Rocket wall holds the road perfectly and loses the sky, so the line has to stay balanced.",
        air_3: "<strong>They shoot back.</strong> Armoured hulls, serpents and bosses return fire on your emplacements, and bombers drop ordnance directly on top of them.",
        air_4: "<strong>Towers have hull integrity.</strong> They patch themselves up between engagements and salvage part of their cost if they are destroyed — where you place one matters as much as which one you place.",

        /* -------------------------------------------------- battles ---- */
        pace_eyebrow: "Your pace",
        pace_title: "Call the wave, <em>or take the minute</em>.",
        pace_sub: "Nothing runs on a timer you do not control. Call a wave early for bonus credits when the line is ready, or run the battle at 1x, 2x or 3x once it is set. Pause at any point.",
        pace_1: "<strong>Early-call bonus.</strong> Every wave you summon ahead of schedule pays extra credits into the same budget you are building with.",
        pace_2: "<strong>Three speeds.</strong> Once the line holds itself, run it at double or triple time rather than watching it work.",
        pace_3: "<strong>Ranked out of three.</strong> Keep the core untouched to earn all three marks. Progress saves on the device, with no account and no sync.",

        /* -------------------------------------------------- gallery ---- */
        gal_eyebrow: "Screenshots",
        gal_title: "The real thing, <em>at native resolution</em>.",
        gal_sub: "Captured from the game as it runs, with no device frames and no added marketing copy.",

        g_menu_title: "Main menu",
        g_menu_cap: "Twelve missions behind one button, with the terrain from the campaign running underneath.",
        g_missions_title: "Mission select",
        g_missions_cap: "Five terrains — north woods, golden fields, dunes, frostline and marshland. Clear one to unlock the next, then come back for a perfect run.",
        g_line_title: "The line",
        g_line_cap: "Sand Belt, mission five. Eight plots filled, every tower on Mk3, and the first wave still forming at the road head.",
        g_build_title: "Build menu",
        g_build_cap: "A radial menu on any empty plot: four towers, live costs, and what the plot can reach from where it sits.",
        g_combat_title: "Under fire",
        g_combat_cap: "A column caught at the first bend. Splash damage, credits ticking up per kill, and the wave counter still on one of ten.",
        g_tower_title: "Tower card",
        g_tower_cap: "Range ring, damage, fire rate and hull integrity — plus the upgrade and sell-back price at the current tier.",
        g_victory_title: "Victory",
        g_victory_cap: "Three marks for a core that never took a hit, with the run's score, kills and waves held.",

        /* -------------------------------------------------- privacy ---- */
        priv_eyebrow: "Privacy",
        priv_title: "It cannot phone home. <em>There is no network code</em>.",
        priv_sub: "Iron Line is not built to collect anything, and it is not able to. The app ships without the internet permission, so there is no connection for data to leave through even if something tried.",
        priv_1: "<strong>No data collected.</strong> No account, no sign-in, no analytics, no advertising id, no crash reporting.",
        priv_2: "<strong>No third-party SDKs.</strong> Nothing from an ad network, an analytics vendor or a games service is linked into the build.",
        priv_3: "<strong>No internet permission.</strong> <code>INTERNET</code> is not declared in the manifest. The only permissions are <code>VIBRATE</code> and <code>WAKE_LOCK</code>.",
        priv_4: "<strong>Your save stays yours.</strong> Progress is written to the app's private storage on the device and is removed with the app.",
        priv_link: "Read the full privacy policy",

        /* ------------------------------------------------------ cta ---- */
        cta_title: "Twelve battlefields. <em>Nothing else asked of you</em>.",
        cta_sub: "No ads, no in-app purchases, no connection required, nothing collected. Buy nothing, sign in to nothing, and play the whole campaign on a plane.",
        cta_soon: "Coming to Google Play",

        /* --------------------------------------------------- policy ---- */
        pol_page_title: "Privacy Policy — Iron Line | AIBachKhoa",
        pol_meta_desc: "The Iron Line privacy policy: the app collects no data, declares no internet permission, contains no third-party SDKs, and stores progress only on your own device.",
        pol_back: "Back to the game",
        pol_eyebrow: "Legal",
        pol_title: "Privacy Policy",
        pol_game: "Iron Line — Tower Defense",
        pol_updated: "Last updated: 29 August 2026",
        pol_lead: "This policy explains how Iron Line (\"the App\") handles information. The short version is that it does not handle any: the App collects nothing, sends nothing, and has no network permission with which it could. The rest of this page sets that out precisely, because \"we collect nothing\" is a claim worth being able to check.",
        pol_toc: "On this page",

        pol_h_summary: "Summary",
        pol_summary: "Iron Line is a single-player, offline tower defense game for Android, published by AIBachKhoa (Trần Đức Sơn), Vietnam. It contains no advertising, no in-app purchases, no analytics and no third-party SDKs of any kind. It does not request the <code>INTERNET</code> permission, so it cannot open a network connection. The only information it writes is your own game progress, stored in the app's private directory on your device.",

        pol_h_collect: "Information we collect",
        pol_collect_1: "<strong>None.</strong> The App does not collect, transmit, sell or share any personal data. Specifically, it does not collect any of the following:",
        pol_collect_l1: "Name, email address, phone number or any other contact detail",
        pol_collect_l2: "Account or sign-in information — there is no account and no sign-in",
        pol_collect_l3: "Location, whether precise or approximate",
        pol_collect_l4: "Device identifiers, advertising id, IMEI or Android ID",
        pol_collect_l5: "Photos, videos, files, contacts, calendar, microphone or camera data",
        pol_collect_l6: "Usage analytics, session length, in-game telemetry or crash reports",
        pol_collect_2: "Because nothing is collected, there is nothing for us to store on a server, nothing to share with a third party, and nothing that could be exposed in a breach of ours.",

        pol_h_local: "Data stored on your device",
        pol_local_1: "The App saves your progress so you can continue where you stopped. That file records which missions you have cleared, the ranking you earned on each, your total kill count, and your audio and language settings.",
        pol_local_2: "It is written to the App's private storage directory, which on Android is readable only by the App itself. It is never uploaded, never backed up to us, and never transmitted anywhere. Uninstalling the App deletes it.",

        pol_h_perm: "Permissions",
        pol_perm_1: "The App declares two permissions, both of which are normal permissions that Android grants without prompting you, and neither of which gives access to personal information:",
        pol_perm_th_p: "Permission",
        pol_perm_th_w: "Why it is there",
        pol_perm_vibrate_w: "Haptic feedback when a tower fires, a hull is destroyed or the core is hit. Can be turned off in the settings.",
        pol_perm_wake_w: "Keeps the screen awake during a battle, so the display does not sleep while a long wave plays out.",
        pol_perm_2: "<strong>The <code>INTERNET</code> permission is deliberately not declared.</strong> Android enforces this at the system level: without it, the App is structurally incapable of opening a network connection, regardless of what its code attempts. You can verify this yourself by inspecting the manifest of the installed package.",

        pol_h_third: "Third-party services",
        pol_third_1: "There are none. The App contains no advertising network, no analytics or attribution SDK, no crash reporting service, no social login, and no games service such as Google Play Games. Nothing in the App shares data with anyone, because nothing in the App talks to anyone.",
        pol_third_2: "If you obtained the App through Google Play, Google's own handling of your download and any Play Store data is governed by Google's privacy policy, not this one. That relationship is between you and Google and exists independently of the App.",

        pol_h_children: "Children's privacy",
        pol_children: "The App is suitable for general audiences and contains only mild, cartoon-style violence against mechanised vehicles — there are no human characters, no blood and no gore. Because the App collects no data whatsoever, it collects no data from children either, and so cannot come into conflict with COPPA, the GDPR's provisions on children, or similar laws. There is no advertising and no interest-based profiling of any user, of any age.",

        pol_h_rights: "Your rights",
        pol_rights_1: "Privacy laws such as the GDPR and the CCPA give you rights to access, correct, export or delete the personal data a company holds about you, and to know whether it is sold or shared.",
        pol_rights_2: "We hold no personal data about you, so there is nothing to access, correct, export or delete, and nothing has ever been sold or shared. The single piece of data the App produces — your local save file — is already entirely under your control: you can delete it at any time by clearing the App's storage in Android Settings, or by uninstalling the App.",

        pol_h_security: "Security",
        pol_security: "The strongest security property of the App is that it holds nothing worth attacking and cannot transmit. There is no server, no database and no account tied to your use of it. Your save file is protected by Android's per-application sandbox, which prevents other apps from reading it on an uncompromised device.",

        pol_h_changes: "Changes to this policy",
        pol_changes: "If a future version of the App ever changes what it does with information — for example by adding an optional online leaderboard — this page will be updated before that version is released, and the date at the top will change with it. Any such change would be described here plainly rather than folded into a longer document. The policy that applies to the version you have installed is the one published at the time of its release.",

        pol_h_contact: "Contact",
        pol_contact_1: "If anything on this page is unclear, or you want to raise a privacy question about the App, get in touch:",
        pol_contact_dev: "Developer",
        pol_contact_dev_v: "Trần Đức Sơn (AIBachKhoa)",
        pol_contact_email: "Email",
        pol_contact_app: "Application id",
        pol_contact_country: "Country",
        pol_contact_country_v: "Vietnam"
    }
};

/* Languages offered in the picker, in order.
   Matches the rest of the site: add { code: 'vi', label: 'Tiếng Việt' }
   here once the Vietnamese copy is translated to show the picker again. */
const LANGS = [
    { code: 'en', label: 'English' }
];
const DEFAULT_LANG = 'en';
const SHOT_DIR = '/assets/games/iron-line/';
const SHOT_EXT = '.jpg';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;

    // ---------- Theme (shared with the rest of the site) ----------
    const themeToggles = [document.getElementById('theme-toggle'), document.getElementById('mobile-theme-toggle')];
    let currentTheme = localStorage.getItem('theme') || 'light';
    root.setAttribute('data-theme', currentTheme);

    themeToggles.forEach(t => t && t.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
    }));

    // ---------- Language ----------
    const langSelects = [document.getElementById('lang-select'), document.getElementById('mobile-lang-select')].filter(Boolean);
    const supported = LANGS.map(l => l.code);

    // A stored choice wins, then whatever the visitor picked on the landing
    // page. Anything no longer offered falls back to English rather than
    // painting a blank page.
    const detectLang = () => {
        const own = localStorage.getItem('ironline-lang');
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
        sel.innerHTML = LANGS.map(l =>
            `<option value="${l.code}">${short ? l.code.toUpperCase() : l.label}</option>`
        ).join('');
        // one language on offer is not a choice — hide the picker entirely
        sel.hidden = LANGS.length < 2;
    });

    const t = (lang, key) => (i18n[lang] && i18n[lang][key]) || i18n[DEFAULT_LANG][key] || '';

    const metaDesc = document.querySelector('meta[name="description"]');
    // The policy page carries its own title/description keys, so each page
    // says which pair it wants rather than the script guessing from the URL.
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
        currentLang = sel.value;
        localStorage.setItem('ironline-lang', currentLang);
        updateLanguage(currentLang);
    }));

    // ---------- Screenshot gallery ----------
    const tabs = Array.from(document.querySelectorAll('.il-gal-tab'));
    const galImg = document.getElementById('gal-img');
    const galTitle = document.getElementById('gal-title');
    const galCap = document.getElementById('gal-cap');

    // Keep the caption in step with both the selected shot and the current
    // language, so switching either one is enough.
    function paintGallery() {
        const active = tabs.find(tab => tab.classList.contains('is-active'));
        if (!active || !galImg) return;
        const dict = i18n[currentLang] || i18n[DEFAULT_LANG];
        const key = active.dataset.key;
        galImg.src = SHOT_DIR + active.dataset.shot + SHOT_EXT;
        galImg.alt = 'Iron Line — ' + (dict[key + '_title'] || '');
        if (galTitle) galTitle.textContent = dict[key + '_title'] || '';
        if (galCap) galCap.textContent = dict[key + '_cap'] || '';
    }

    tabs.forEach(tab => tab.addEventListener('click', () => {
        tabs.forEach(other => {
            const on = other === tab;
            other.classList.toggle('is-active', on);
            other.setAttribute('aria-selected', String(on));
        });
        paintGallery();
    }));

    // Warm the neighbouring shots so the first few clicks feel instant.
    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
            tabs.slice(1).forEach(tab => { new Image().src = SHOT_DIR + tab.dataset.shot + SHOT_EXT; });
        });
    }

    updateLanguage(currentLang);

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
