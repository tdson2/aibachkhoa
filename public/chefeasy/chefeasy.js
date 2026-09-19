/* =========================================================
   ChefEasy — Android page, iOS page and privacy policy.
   One dictionary serves all three: keys with no prefix are shared,
   `ios_` keys belong to the App Store page and `pol_` keys to the
   policy. Each page says which title/description pair it wants
   through data-title-key / data-desc-key on <body>, and which
   screenshot folder its gallery reads through data-shot-dir.
   Theme rides on the site-wide 'theme' key; the language choice is
   stored separately so it does not fight the landing page picker.
   ========================================================= */

const i18n = {
};

/* The page's only language. It used to be the translation of a Vietnamese
   source; the Vietnamese copy went when /vi/ did, and this became the base. */
i18n.en = {
    page_title: "ChefEasy — cook a recipe one step at a time | AIBachKhoa",
    meta_desc: "A cooking app for Android: 44 Vietnamese, Chinese, Japanese and Korean dishes, guided step-by-step mode with timers, voice search, works offline.",
    aria_lang: "Change language",
    aria_theme: "Toggle theme",
    aria_menu: "Open menu",
    skip_link: "Skip to content",

    nav_home: "Home",
    nav_overview: "Overview",
    nav_cook: "Cooking mode",
    nav_voice: "Voice",
    nav_pro: "ChefEasy Pro",
    nav_shots: "Screenshots",
    nav_policy: "Privacy",
    nav_ios: "iPhone & iPad version",
    nav_android: "Android version",

    switch_label: "Platform:",
    switch_android: "Android",
    switch_ios: "iPhone & iPad",

    hero_kicker: "Android · home cooking",
    hero_title: "One step at a time, <em>not one wall of text</em>.",
    hero_sub: "The hard part of a recipe is not the ingredient list. It is the moment your hands are covered in flour and you need to know what comes next. ChefEasy walks you through one task at a time, each with its own timer, and keeps the screen awake while it does.",
    btn_play: "Get it on Google Play",
    btn_appstore: "View on the App Store",
    btn_shots: "See the app",
    btn_policy: "Read the privacy policy",
    btn_contact: "Contact us",
    hero_meta: "Application id <code>com.tdson.cooky</code> · portrait · Android 7.0 and up · free, with ads and an optional subscription.",

    stat_recipes: "Recipes, all readable offline",
    stat_langs: "Languages, interface and recipes alike",
    stat_cuisine: "Cuisines: Vietnamese, Chinese, Japanese, Korean",
    stat_offline: "Times you need a connection to open a recipe",
    stat_account: "Accounts to create before you can cook",

    cook_eyebrow: "Cooking mode",
    cook_title: "One step per screen, <em>and a clock for it</em>.",
    cook_sub: "A printed recipe makes you find your place again every time you look down. Cooking mode does the opposite: it shows only the task in front of you, counts down that task alone, and moves on when you say so.",

    c_step_t: "Exactly one thing on screen",
    c_step_d: "The current step fills the view; the rest collapse into a progress list underneath. No hunting for the line you were on in a dense block of text.",
    c_timer_t: "Timers on tasks, not on the dish",
    c_timer_d: "\"Soak the mung beans 6–8 hours\" and \"chop the spring onion\" are not the same kind of time. Each task carries its own clock, starts when its turn comes, and has a done-early button for when your stove is faster than the recipe.",
    c_screen_t: "The screen stays awake",
    c_screen_d: "While cooking mode is open the app keeps the display on. You never have to touch the phone with oily hands just to read step three.",
    c_check_t: "Ingredients you can tick off",
    c_check_d: "The ingredient list has checkboxes and a counter in the corner. Tick them at the market or as you prep — what is left is always obvious.",

    voice_eyebrow: "Voice",
    voice_title: "When your hands are busy, <em>say it</em>.",
    voice_sub: "A floating microphone button sits on the home screen, the recipe page and inside cooking mode. Say a dish to find it, or move between steps without touching the device.",
    v_1: "<strong>Search by speaking.</strong> Say a dish name and the app filters all 44 recipes, matching both the original name and its translation.",
    v_2: "<strong>Command while cooking.</strong> Next step, back, start or stop a timer — by voice, with both hands full.",
    v_3: "<strong>Only on when you press it.</strong> The microphone does not listen in the background. It opens after you tap the button and closes when you stop speaking.",
    v_note: "<strong>Worth stating plainly:</strong> turning speech into text is done by the operating system's own recognition service, so that audio goes to Google's servers on Android or Apple's on iPhone and iPad. ChefEasy never receives the recording, never stores it, and has no server to store it on. If you would rather not, simply never press the microphone button — nothing else in the app needs it.",

    lang_eyebrow: "Languages",
    lang_title: "Five languages, <em>recipes included</em>.",
    lang_sub: "Not just buttons and menu labels. Dish names, ingredients and every cooking step carry their own translation — and anything not yet translated falls back to English rather than showing blank.",
    lang_vi: "Tiếng Việt",
    lang_en: "English",
    lang_ja: "日本語",
    lang_ko: "한국어",
    lang_zh: "中文",
    lang_note: "The numbers — cooking time, servings, calories — stay put when you switch language, because they describe the dish rather than the translation.",

    offline_eyebrow: "Offline",
    offline_title: "The recipes live <em>on your device</em>.",
    offline_sub: "All 44 recipes and their photographs ship inside the app and unpack on first launch. From the second launch onward it opens straight away — including in the corner of the kitchen where the signal dies.",
    o_1: "<strong>Recipes read with no connection.</strong> Turn off Wi-Fi and mobile data and the cooking side of the app is unchanged.",
    o_2: "<strong>No account.</strong> No sign-up, no login, no user profile. Open the app and use it.",
    o_3: "<strong>Favourites stay on the device.</strong> Your favourites and viewing history live in the app's own storage and are not sent anywhere.",
    o_4: "<strong>The network is used for two things.</strong> Loading ads on the free tier, and handling payment when you subscribe to Pro.",

    pro_eyebrow: "ChefEasy Pro",
    pro_title: "Optional, and <em>spelled out</em>.",
    pro_sub: "The free tier gives you every Vietnamese dish in full — no open limit, no locked steps. Pro is a subscription that removes the ads and unlocks the other cuisines.",
    th_q: "The question",
    th_a: "The answer",
    pro_q1: "What Pro unlocks",
    pro_a1: "Removes every ad, unlocks the Chinese, Japanese and Korean dishes, and adds new recipes each week.",
    pro_q2: "What you lose without it",
    pro_a2: "Nothing on the Vietnamese side. Every Vietnamese dish, the guided cooking mode, the timers, voice search and offline use are all free.",
    pro_q3: "What it costs",
    pro_a3: "A monthly or a yearly plan, auto-renewing, billed by Google Play. The price appears in your own currency inside the app.",
    pro_q4: "How to cancel",
    pro_a4: "In Google Play → Payments & subscriptions, any time. There is no retention flow in the app to argue with you, and we never see your card.",
    pro_q5: "If you cancel",
    pro_a5: "Ads return and the Chinese, Japanese and Korean dishes lock again at the end of the period you paid for. The Vietnamese dishes stay.",

    gal_eyebrow: "Screenshots",
    gal_title: "Straight captures, <em>no mock-ups</em>.",
    gal_sub: "Every frame below comes off a real device, exactly as the app draws it.",

    s1_title: "Home",
    s1_cap: "Favourites and recently viewed sit at the top; below them the full list, each row carrying cooking time, calories, servings and difficulty — enough to choose a dish before opening it.",
    s2_title: "Recipe page",
    s2_cap: "Photograph, tags, a short description, then the six numbers that describe the dish. The two buttons at the bottom are parallel ways in: read it all on one page, or let the app walk you through.",
    s3_title: "Ingredients",
    s3_cap: "One row per ingredient with its prep note and a checkbox. The counter in the corner says how much is still to do.",
    s4_title: "The full recipe",
    s4_cap: "A single-page read for people who want the whole shape before starting, with a button at the end that drops straight into guided cooking.",
    s5_title: "Cooking",
    s5_cap: "The current step fills the screen, the clock for the task in hand runs in the middle, and the remaining tasks sit right below it.",

    a4_title: "Cooking",
    a4_cap: "The current step fills the screen, the clock for the task in hand runs in the middle, and the remaining tasks sit right below it.",
    a5_title: "ChefEasy Pro",
    a5_cap: "The upgrade sheet states the three things Pro unlocks, and carries a Later button — the free tier still gives you every Vietnamese dish in full.",

    faq_eyebrow: "Questions",
    faq1_q: "Which Android versions does it run on?",
    faq1_a: "Android 7.0 and up, in portrait. The app is free, carries ads, and offers an optional subscription.",
    faq2_q: "Are there ads?",
    faq2_a: "The free tier shows an ad when the app opens. Nothing interrupts you mid-recipe. A Pro subscription removes them entirely.",
    faq3_q: "Does it need an internet connection?",
    faq3_a: "Not to read or cook a recipe. A connection is used for ads, for payment, and for voice search.",
    faq4_q: "Does the app collect my data?",
    faq4_a: "We run no servers and receive no data about you. Favourites, history and settings live in the app's own storage on your device. The only third party is Google — for ads, payment and speech recognition.",
    faq5_q: "What is the microphone for?",
    faq5_a: "Only for finding a dish and for commands while cooking, and only after you press the microphone button. The app does not listen in the background, does not record, and keeps no audio.",
    faq6_q: "Is it suitable for children?",
    faq6_a: "The content is cooking recipes, with nothing sensitive in it. But the app carries ads and in-app purchases, so a shared device is worth a store purchase PIN.",

    cta_title: "Open it, pick a dish, and let it walk you through.",

    footer_desc: "Building practical AI tools for developers and businesses.",
    footer_app: "The app",
    footer_prod: "Other products",
    footer_comp: "Company",
    footer_about: "About",
    footer_services: "Services",
    footer_contact: "Contact",
    footer_rights: "All rights reserved.",

    ios_page_title: "ChefEasy for iPhone & iPad — cook step by step | AIBachKhoa",
    ios_meta_desc: "A cooking app for iPhone and iPad: 44 Asian dishes, guided step-by-step mode with timers, voice search, works offline. Requires iOS 15.0 or later.",
    ios_kicker: "iPhone & iPad · home cooking",
    ios_meta: "Bundle id <code>com.tdson.cooky</code> · portrait · iPhone and iPad, iOS 15.0 or later · free, with ads and an optional subscription.",
    ios_faq1_q: "Which iPhones and iPads does it run on?",
    ios_faq1_a: "iOS 15.0 or later, on both iPhone and iPad.",
    ios_faq3_a: "Not to read or cook a recipe. A connection is used for ads, for App Store payment, and for voice search.",
    ios_faq4_a: "We run no servers and receive no data about you. Favourites, history and settings live in the app's own storage on your device. The third parties are Google, for ads, and Apple, for payment and speech recognition.",
    ios_perm_eyebrow: "Permissions",
    ios_perm_title: "Two permissions, <em>and only when you press</em>.",
    ios_perm_sub: "iOS asks you before granting either, and both are requested at the moment you tap the microphone — not when the app opens.",
    ios_perm_mic: "<strong>Microphone.</strong> To hear what you say when searching for a dish or giving a command while cooking.",
    ios_perm_speech: "<strong>Speech recognition.</strong> To turn that into text. Apple's service does this work, so the audio goes to Apple's servers.",
    ios_perm_none: "<strong>Nothing beyond those two.</strong> No location, no contacts, no camera, no photo library, no push notifications.",
    ios_pro_a3: "A monthly or a yearly plan, auto-renewing, billed by the App Store. The price appears in your own currency inside the app.",
    ios_pro_a4: "In Settings → your name → Subscriptions, any time. There is no retention flow in the app to argue with you, and we never see your card.",
    ios_pro_a5: "Ads return and the Chinese, Japanese and Korean dishes lock again at the end of the period you paid for. The Vietnamese dishes stay.",

    pol_page_title: "Privacy Policy — ChefEasy | AIBachKhoa",
    pol_meta_desc: "How ChefEasy handles information: what stays on your device, where a voice search goes, and what the ad network and app stores receive.",
    pol_eyebrow: "Legal",
    pol_title: "Privacy Policy",
    pol_app: "ChefEasy",
    pol_updated: "Last updated: 6 September 2026",
    pol_back: "Back to the app",
    pol_toc: "On this page",
    pol_lead: "This Privacy Policy explains how ChefEasy (\"we\", \"our\", or \"us\") collects, uses, and protects your information when you use our mobile application ChefEasy (the \"App\"). We are committed to protecting your privacy and complying with applicable data protection laws, including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA), where applicable.",

    pol_h_intro: "Introduction",
    pol_intro: "ChefEasy is a cooking app for Android, iPhone and iPad: 44 Vietnamese, Chinese, Japanese and Korean dishes, with a guided cooking mode that puts a timer on every task. The recipes ship inside the app and run on your own device. There are no accounts, no user profiles, and no comments or chat.",

    pol_h_short: "The short version",
    pol_short_1: "<strong>We run no servers and we receive no data about you.</strong> Your favourites, viewing history, language and other settings are written to the App's own storage on your device and never leave it.",
    pol_short_2: "<strong>The free tier carries ads</strong> served by Google AdMob. AdMob may read your device's advertising identifier in order to select and measure those ads. A ChefEasy Pro subscription switches them off entirely.",
    pol_short_3: "<strong>Voice search sends audio away.</strong> Turning speech into text is done by the operating system's recognition service — Google's on Android, Apple's on iPhone and iPad. It happens only after you tap the microphone button. We never receive, hear or keep that audio.",
    pol_short_4: "<strong>There is no analytics or crash-reporting SDK in the build.</strong> Nothing is measuring what you do in the app.",
    pol_short_5: "<strong>The App asks only for the microphone and speech recognition</strong>, and only when you deliberately press the microphone button. No location, no contacts, no camera, no access to your files.",

    pol_h_defs: "Interpretation and Definitions",
    pol_h_interp: "Interpretation",
    pol_interp: "The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.",
    pol_h_defs2: "Definitions",
    pol_defs_lead: "For the purposes of this Privacy Policy:",
    pol_d_app: "<strong>Application</strong> (or the <strong>App</strong>) refers to ChefEasy, the software program provided by the Company.",
    pol_d_company: "<strong>Company</strong> (referred to as either \"the Company\", \"We\", \"Us\" or \"Our\") refers to tdson, the developer of the Application.",
    pol_d_country: "<strong>Country</strong> refers to: Vietnam.",
    pol_d_device: "<strong>Device</strong> means any device that can access the Service, such as a phone or a tablet.",
    pol_d_personal: "<strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.",
    pol_d_provider: "<strong>Service Provider</strong> means any party that processes data on behalf of the Company. For this App those are Google — AdMob advertising, Google Play billing, and speech recognition on Android — and Apple, for App Store billing and speech recognition on iOS.",
    pol_d_purchase: "<strong>In-App Purchase</strong> means the ChefEasy Pro subscription, monthly or yearly, transacted through Google Play or the App Store depending on where the App was installed from.",
    pol_d_you: "<strong>You</strong> means the individual accessing or using the Service.",

    pol_h_collect: "What the App Stores",
    pol_collect_lead: "The App keeps the following, all of it in its own storage on your device and none of it sent to us:",
    pol_c_1: "Your list of favourite dishes and the recipes you viewed recently.",
    pol_c_2: "Your chosen language, light or dark theme, and whether the screen should stay awake while cooking.",
    pol_c_3: "Your Pro subscription state, so the App knows whether to show ads.",
    pol_c_4: "The recipe data bundle, unpacked on first launch.",
    pol_collect_none: "The App never asks for your name, email address, phone number or any other identifying information, because it has nowhere to send them.",

    pol_h_voice: "Microphone and Speech Recognition",
    pol_voice_1: "The App has a microphone button for finding a dish and for commands while cooking. The microphone turns on only after you tap that button, and turns off as soon as you stop speaking. The App does not listen in the background and does not record.",
    pol_voice_2: "Turning speech into text does not happen on your device: the audio is passed to the operating system's speech recognition service — Google's on Android, Apple's on iPhone and iPad — and only the resulting text comes back to the App. How Google and Apple handle that audio is governed by their own privacy policies.",
    pol_voice_3: "We never receive the audio, cannot hear its contents, and do not keep the returned text once the search is done. If you would rather not use it, simply never press the microphone button — no other feature of the App depends on it.",

    pol_h_ads: "Advertising",
    pol_ads_1: "The free tier shows advertising supplied by Google AdMob, as a full-screen ad when the App opens. Nothing interrupts you while you are cooking.",
    pol_ads_2: "To select and measure those ads, AdMob may read your device's advertising identifier along with basic technical information such as device model and operating system version. We supply AdMob with no information about you, because we hold none.",
    pol_ads_3: "You can reset or delete the advertising identifier in your operating system's settings. A ChefEasy Pro subscription removes advertising entirely, and the App then does not load the ad SDK at all.",

    pol_h_purchases: "Purchases and Subscriptions",
    pol_pur_1: "ChefEasy Pro is an auto-renewing subscription, monthly or yearly, that removes advertising and unlocks the Chinese, Japanese and Korean dishes.",
    pol_pur_2: "The transaction is handled entirely by Google Play or the App Store, depending on where the App was installed from. We never see, receive or store your card or payment details. The App learns only the final outcome: whether a subscription is active.",
    pol_pur_3: "Cancel in Google Play → Payments & subscriptions, or in Settings → your name → Subscriptions on iPhone and iPad.",

    pol_h_perm: "Permissions and Network Access",
    pol_perm_1: "On Android the App declares the record-audio permission, for the microphone button, together with internet and network-state access. On iPhone and iPad the App requests microphone and speech recognition permission, and requests them only when you first tap the microphone button.",
    pol_perm_2: "The App requests no location, contacts, calendar, camera, photo library or file access permission.",
    pol_perm_3: "The network connection is used for exactly three things: loading ads on the free tier, processing payment when you subscribe to Pro, and sending audio to the speech recognition service when you use the microphone button. Reading and cooking a recipe works normally with no connection at all.",

    pol_h_storage: "Data Storage and Deletion",
    pol_storage_1: "Everything the App stores lives in its own private area on your device. We hold no copy anywhere else, because we operate no servers.",
    pol_storage_2: "Uninstalling the App deletes all of it. You can also clear the App's data from your operating system's settings without uninstalling.",

    pol_h_children: "Children's Privacy",
    pol_children: "The App is not directed at children under 13 and does not knowingly collect personal data from children. It does contain advertising and in-app purchases, so on a shared device we recommend enabling a purchase PIN on Google Play, or Screen Time restrictions on an Apple device.",

    pol_h_rights: "Your Rights",
    pol_rights: "The GDPR and the CCPA give you rights to access, correct, delete and port the personal data an organisation holds about you. For this App there is almost nothing to exercise them against: we hold no personal data about you. The only data that exists is on your device, and you can delete it at any time by uninstalling the App. For data processed by Google or Apple — advertising, payment, speech recognition — please exercise your rights with them directly.",

    pol_h_security: "Security",
    pol_security: "Because the App transmits no personal data, there is no transfer to intercept and no database of ours to breach. The recipe bundle shipped with the App is encrypted and is decrypted only on your device. That said, no method of electronic storage is completely secure.",

    pol_h_changes: "Changes to this Privacy Policy",
    pol_changes: "When this policy changes, the new version is posted on this page with a new date at the top. If an update to the App changes how data is handled, we will update this page before that update ships.",

    pol_h_contact: "Contact Us",
    pol_contact: "If you have any question about this Privacy Policy, please get in touch:",
    pol_back_app: "Back to ChefEasy"
};

const LANGS = [
    { code: 'en', label: 'English' }
];
const DEFAULT_LANG = 'en';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;

    // Each page names its own screenshot folder, so the Android page and the
    // iOS page can share this file and still show their own captures.
    const SHOT_DIR = document.body.dataset.shotDir || '/assets/apps/chefeasy/android/';

    // ---------- Theme (shared with the rest of the site) ----------
    const themeToggles = [document.getElementById('theme-toggle'), document.getElementById('mobile-theme-toggle')];
    let currentTheme = localStorage.getItem('theme') || 'light';
    root.setAttribute('data-theme', currentTheme);
    themeToggles.filter(Boolean).forEach(btn => btn.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        root.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
    }));

    // ---------- Language ----------
    const langSelects = [document.getElementById('lang-select'), document.getElementById('mobile-lang-select')].filter(Boolean);
    const supported = LANGS.map(l => l.code);

    // A choice made on these pages wins, then whatever the visitor picked on
    // the landing page, then the browser's own preference.
    const detectLang = () => {
        // The URL wins: /es/… is the Spanish page whatever the browser
        // or a previous visit would have preferred.
        const fromUrl = window.LangUrl && window.LangUrl.fromPath(supported);
        if (fromUrl) return fromUrl;
        const own = localStorage.getItem('chefeasy-lang');
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
        sel.hidden = LANGS.length < 2;
    });

    const t = (lang, key) => (i18n[lang] && i18n[lang][key]) || i18n[DEFAULT_LANG][key] || '';

    const metaDesc = document.querySelector('meta[name="description"]');
    // The iOS page and the policy carry their own title/description keys, so
    // each page says which pair it wants rather than the script guessing.
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
        localStorage.setItem('chefeasy-lang', lang);
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
    const tabs = Array.from(document.querySelectorAll('.ce-gal-tab'));
    const galImg = document.getElementById('gal-img');
    const galTitle = document.getElementById('gal-title');
    const galCap = document.getElementById('gal-cap');

    // Keep the caption in step with both the selected shot and the current
    // language, so switching either one is enough.
    function paintGallery() {
        const active = tabs.find(tab => tab.classList.contains('is-active'));
        if (!active || !galImg) return;
        const dict = i18n[currentLang] || i18n[DEFAULT_LANG];
        const fallback = i18n[DEFAULT_LANG];
        const key = active.dataset.key;
        galImg.src = SHOT_DIR + active.dataset.shot + '.webp';
        galImg.alt = 'ChefEasy — ' + (dict[key + '_title'] || fallback[key + '_title'] || '');
        if (galTitle) galTitle.textContent = dict[key + '_title'] || fallback[key + '_title'] || '';
        if (galCap) galCap.textContent = dict[key + '_cap'] || fallback[key + '_cap'] || '';
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
            tabs.slice(1).forEach(tab => { new Image().src = SHOT_DIR + tab.dataset.shot + '.webp'; });
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
