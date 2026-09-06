/* =========================================================
   GenVideo: Master Tool — product, iOS and policy pages.

   English only for now. The machinery for more is here: adding a
   language means adding its dictionary to `i18n` and its entry to
   `LANGS`, and the picker appears by itself.

   Theme is shared with the rest of the site through the same 'theme'
   key; the language choice is stored separately so it does not fight
   with the picker on the landing page.
   ========================================================= */

const i18n = {
    en: {
        /* ---------- shared chrome ---------- */
        skip_link: "Skip to content",
        nav_home: "Home",
        nav_overview: "Overview",
        nav_how: "How it works",
        nav_desktop: "Desktop",
        nav_pricing: "Pricing",
        nav_policy: "Privacy",
        cta_get: "Get it",
        aria_lang: "Change language",
        aria_theme: "Toggle theme",
        aria_menu: "Menu",
        footer_tag: "Software built in Vietnam, for people who publish.",
        footer_gv: "GenVideo",
        footer_droid: "Android build",
        footer_ios: "iOS build",
        footer_prod: "Other products",
        footer_comp: "Company",
        footer_about: "About",
        footer_services: "Services",
        footer_contact: "Contact",
        footer_rights: "All rights reserved.",

        /* ---------- product page ---------- */
        page_title: "GenVideo: Master Tool — Turn a topic into a finished video | AIBachKhoa",
        meta_desc: "Type a topic, get a narrated video with generated artwork, subtitles and music. Runs on Windows, macOS, Linux and Android. One dollar a video, two free to try.",

        hero_eyebrow: "AI video generator",
        hero_title: "Type a topic. Get a finished video.",
        hero_sub: "GenVideo writes the narration, draws every scene, reads it aloud and lays it over a template — then hands you an MP4. You bring the idea; it does the eight steps in between. Runs on Windows, macOS, Linux and Android.",
        cta_how: "See how it works",
        hero_note: "Two free videos to try, no account and no card. After that it is one dollar a video, in monthly plans.",
        badge_ver: "Version 1.0.0",
        badge_langs: "9 languages",
        badge_tpl: "31 frame templates",
        alt_hero: "The GenVideo generator on Windows: the form on the left, a live build sheet on the right",

        how_eyebrow: "The pipeline",
        how_title: "Eight steps you do not have to do.",
        how_sub: "Every render walks the same road. You see it happen in the queue, and the app tells you what it is doing rather than showing a bar that means nothing.",
        step1_t: "Read the brief",
        step1_d: "A topic in a sentence, or your own script with one paragraph per scene. Both are first-class — a fixed script is used verbatim.",
        step2_t: "Write the narration",
        step2_d: "A language model turns the topic into scene-by-scene lines, inside the word range you set.",
        step3_t: "Draft image prompts",
        step3_d: "Each scene gets a prompt written for it, with your style prefix in front so the whole video looks like one piece.",
        step4_t: "Generate the artwork",
        step4_d: "One image per scene. Either a hosted model or your own ComfyUI — the choice is a setting, not a rebuild.",
        step5_t: "Speak the lines",
        step5_d: "Text to speech reads the narration in the voice you pick, including Vietnamese voices.",
        step6_t: "Lay out the frame",
        step6_d: "The template decides the layout and the output size: vertical for shorts, square, or landscape.",
        step7_t: "Add the music",
        step7_d: "A background track from the library or one you upload, mixed under the narration at the level you set.",
        step8_t: "Stitch the video",
        step8_d: "Scenes become segments, segments become one MP4, and it lands in the queue ready to play or save.",

        feat_eyebrow: "What is in it",
        feat_title: "Made for people who publish, not people who tinker.",
        f_tpl_t: "31 frame templates",
        f_tpl_d: "Vertical, square and landscape, from plain text cards to illustrated layouts. The template also sets the output size, so picking one is picking the format.",
        f_editor_t: "A real script editor",
        f_editor_d: "Split a scene at the cursor, merge it with the next, find and replace, auto-split anything too long for one frame. It counts scenes, words and rough runtime as you type.",
        f_player_t: "Plays inside the app",
        f_player_d: "Finished renders open in a built-in player with a scrub bar — no bouncing out to a browser to see what you just made.",
        f_save_t: "Saves where you look for it",
        f_save_d: "On a phone the video lands in the gallery; on a desktop it lands in Downloads. Not in an app folder you have to go hunting for.",
        f_studio_t: "AI Studio bench",
        f_studio_d: "Try one capability at a time — narration, titles, image prompts, a single image, a voice line — before spending a whole render on a setting you were not sure about.",
        f_queue_t: "A queue that tells the truth",
        f_queue_d: "Elapsed time, output size, duration, and the exact request that produced it. When something fails it says why, in the engine's own words.",
        f_lang_t: "Nine languages",
        f_lang_d: "English, Vietnamese, Chinese, Spanish, French, German, Portuguese, Japanese and Korean — the whole interface, not just the menus.",
        f_music_t: "Your own music",
        f_music_d: "Upload a track and it joins the library for every future render, mixed under the narration at whatever level you choose.",

        desk_eyebrow: "Windows · macOS · Linux",
        desk_title: "The desktop build has room to work.",
        desk_sub: "On a wide screen the build sheet sits beside the form, so you see the whole request — mode, scenes, template, size, frame rate, voice, music — while you are still editing it. Nothing is hidden behind a tab.",
        desk_badge_win: "Windows 10 64-bit or later",
        desk_badge_mac: "macOS 11 or later",
        desk_badge_linux: "Linux with GTK 3",
        desk_badge_pay: "Pays through PayPal",
        desk_1_t: "Everything about the render, on one screen",
        desk_1_d: "Five numbered blocks walk from source text to a queued job. The build sheet on the right keeps a running summary and refuses to launch until the request actually validates — so a render never fails for a reason the form already knew about.",
        desk_1_l1: "Generate from a topic, or paste a fixed script used verbatim",
        desk_1_l2: "Full-screen script editor with split, merge and find-and-replace",
        desk_1_l3: "Template browser with search, orientation and media-type filters",
        desk_1_l4: "Per-template parameters — accent colour, author, brand line",
        desk_2_t: "The queue keeps the receipts",
        desk_2_d: "Every job that has ever run, with what it produced and what it was asked to produce. A running job shows elapsed time and an indeterminate bar — the engine reports completion, not percentages, and inventing a number would be a lie told smoothly.",
        desk_2_l1: "Filter by active, completed, failed or cancelled",
        desk_2_l2: "Play in the app, or download the MP4",
        desk_2_l3: "Expand any row to read the exact request payload",
        desk_2_l4: "Cancel a running job without leaving the screen",
        alt_desk_forge: "The generator form beside a live build sheet",
        alt_desk_queue: "The render queue on Windows, listing finished videos with size and duration",

        droid_eyebrow: "Android build",
        droid_title: "The same app, shaped for a phone.",
        droid_sub: "Not a viewer and not a cut-down companion: the phone build generates, queues, plays and saves exactly like the desktop one. The layout folds to a single column and the build sheet moves below the form.",
        droid_badge_ver: "Android 8.0 or later",
        droid_badge_pay: "Pays through Google Play",
        droid_badge_gallery: "Saves to your gallery",
        alt_droid_forge: "The generator on a phone, with the scene count and the trial limit",
        alt_droid_queue: "The render queue on a phone",
        alt_droid_player: "A finished video playing inside the app",
        alt_droid_plans: "The plans screen on a phone, buying through Google Play",
        cap_droid_forge: "Write the brief, pick a template, launch. The trial cap is shown before you spend it, not after.",
        cap_droid_queue: "Every render with its size, duration and how long it took.",
        cap_droid_player: "Plays in the app, with a scrub bar. Download puts it in your gallery.",
        cap_droid_plans: "Plans are bought through Google Play, as Google requires for in-app digital goods.",

        price_eyebrow: "Pricing",
        price_title: "One dollar a video. That is the whole rule.",
        price_sub: "Every plan is priced at one dollar times the number of videos in it. No credits to convert, no tokens to reason about, and the free trial needs neither an account nor a card.",
        plan_free: "Free trial",
        plan_free_price: "Free",
        plan_free_unit: "2 videos",
        plan_free_1: "Up to 20 seconds each",
        plan_free_2: "Standard quality, up to 2 scenes",
        plan_free_3: "No account, no card",
        plan_starter: "Starter",
        plan_starter_unit: "10 videos · $1.00 each",
        plan_starter_1: "No watermark",
        plan_starter_2: "Every template and music track",
        plan_starter_3: "Up to 8 scenes a video",
        plan_creator: "Creator",
        plan_creator_unit: "30 videos · $1.00 each",
        plan_creator_1: "Enough to post every weekday",
        plan_creator_2: "Priority in the render queue",
        plan_creator_3: "Upload your own music and templates",
        plan_studio: "Studio",
        plan_studio_unit: "80 videos · $1.00 each",
        plan_studio_1: "For teams and agencies",
        plan_studio_2: "API key for your own systems",
        plan_studio_3: "Direct support by email",
        plan_byok: "Bring your own key",
        plan_byok_unit: "500 videos · fair use",
        plan_byok_1: "You pay the model, we run everything else",
        plan_byok_2: "Uses your own OpenAI API key",
        plan_byok_3: "Works with self-hosted ComfyUI",
        per_month: "/month",
        price_note: "A plan belongs to the machine it was bought on, and there is no account to create — buying should not cost you a password. The trade-off is honest and worth knowing: a second machine is a second plan. The Plans screen shows a licence code you can copy across by hand if you replace a machine. Subscriptions renew monthly and can be cancelled at any time, from PayPal or from Google Play; the cancel link is on the Plans screen, not buried in an email.",

        dl_title: "Two videos, on the house.",
        dl_sub: "Install it, type a topic, and watch the thing build itself. No account, no card, nothing to cancel if you decide it is not for you.",
        dl_desktop: "Desktop build",
        dl_ios: "iOS build",
        dl_note: "Android and iOS arrive through their stores. The desktop builds for Windows, macOS and Linux are direct downloads — write in and we will send the current one.",

        faq_eyebrow: "Questions",
        faq_title: "The things people actually ask.",
        faq_1_q: "Do I need an account?",
        faq_1_a: "No. A licence belongs to the machine, keyed by a random code the app generates on first run and keeps in the operating system's keychain. There is nothing to sign up for and no password to lose, and the server never learns your name or your email.",
        faq_2_q: "How long does one video take?",
        faq_2_a: "Roughly two to three minutes for a short two-scene video, and around five to ten for a longer one. Most of that is drawing the artwork — one image per scene — so a video with more scenes takes proportionally longer.",
        faq_3_q: "Can I use my own script instead of letting the AI write one?",
        faq_3_a: "Yes. Switch the mode to Fixed script and your text is used word for word, one scene per paragraph. Nothing is rewritten, and the word limits stop applying because they only govern what the model writes.",
        faq_4_q: "What happens when I cancel?",
        faq_4_a: "You keep the plan until the end of the period you already paid for. Cancelling does not cut you off mid-month — you paid for those days and they are yours. Cancel from PayPal or Google Play; the link is on the Plans screen.",
        faq_5_q: "Can I run it against my own image model?",
        faq_5_a: "Yes, on the Bring your own key plan. The app talks to a self-hosted ComfyUI or to your own OpenAI key, and picking which is a setting rather than a different build. It is also much cheaper per video, which is why that plan carries a far larger quota.",
        faq_6_q: "Does the video have a watermark?",
        faq_6_a: "Only on the free trial. Every paid plan renders clean.",
        faq_7_q: "What happens to the videos I make?",
        faq_7_a: "They are rendered on the server and stay there so the app can fetch them; download puts a copy on your device. The privacy page sets out exactly what is sent, what is kept and for how long.",

        /* ---------- iOS page ---------- */
        ios_page_title: "GenVideo: Master Tool for iPhone and iPad | AIBachKhoa",
        ios_meta_desc: "Type a topic and GenVideo writes the narration, draws every scene, reads it aloud and hands you a finished video — on iPhone and iPad.",
        ios_nav_feat: "Features",
        ios_nav_support: "Support",
        ios_eyebrow: "For iPhone and iPad",
        ios_title: "A video studio that fits in a pocket.",
        ios_sub: "Type a topic. GenVideo writes the narration scene by scene, draws artwork for each one, reads it aloud in the voice you choose, lays it over a template and hands you a finished video — ready to save to Photos or post straight away.",
        ios_badge_soon: "Coming to the App Store",
        ios_badge_req: "iOS 13 or later · iPhone and iPad",
        ios_note: "The iPhone and iPad build is in preparation and is not on the App Store yet. Write in and we will tell you the day it lands, and nothing else.",
        ios_cta_notify: "Tell me when it is out",
        ios_alt_hero: "The GenVideo generator on a phone",
        ios_shot_note: "Shown on the phone build. The iPhone layout follows the same design.",
        ios_feat_eyebrow: "What it does",
        ios_feat_title: "One idea in, one finished video out.",
        ios_feat_sub: "Eight steps run between your sentence and the file: the script, the prompts, the artwork, the voice, the layout, the music and the stitching. You watch them happen instead of doing them.",
        ios_f1_t: "Write it, or let it write",
        ios_f1_d: "Give it a topic and the narration is written for you, scene by scene. Or paste your own script and it is used word for word, one scene per paragraph.",
        ios_f2_t: "31 templates",
        ios_f2_d: "Vertical for shorts and reels, square for feeds, landscape for everything else. The template sets the layout and the output size in one choice.",
        ios_f3_t: "Voices, including Vietnamese",
        ios_f3_d: "The narration is read aloud in the voice you pick, and the whole interface speaks nine languages — not just the menus.",
        ios_f4_t: "Watch it without leaving",
        ios_f4_d: "Finished videos play inside the app with a scrub bar, and save straight to Photos when you want to keep one.",
        ios_f5_t: "A queue you can trust",
        ios_f5_d: "Every render with how long it took, how big it is and how long it runs. When one fails it says why, in plain words.",
        ios_f6_t: "Your own music",
        ios_f6_d: "Add a track and it sits under the narration at the level you choose, on this video and every one after it.",
        ios_price_title: "One dollar a video.",
        ios_price_sub: "Two videos free to try, with no account to create. After that, every plan is one dollar times the number of videos in it — nothing to convert and nothing to work out.",
        ios_price_note: "On iPhone and iPad, plans are sold through the App Store and billed to your Apple Account. A subscription renews each month until you cancel, and you cancel it in Settings on your device — not by writing to us. Cancelling leaves the period you already paid for intact.",
        ios_support_eyebrow: "Support",
        ios_support_title: "A person answers.",
        ios_support_sub: "Write in and you reach the developer, not a form. Include the licence code from the Plans screen — the app has no account and no email address on file, so that code is the only way to find your purchase.",
        ios_faq1_q: "Do I need an account?",
        ios_faq1_a: "No. Nothing to sign up for and no password to forget. A licence belongs to the device, identified by a random code the app makes on first run — it says nothing about you and is not built from your hardware.",
        ios_faq2_q: "How do I cancel?",
        ios_faq2_a: "Open Settings on your device, tap your name, then Subscriptions, and cancel there. It takes effect at the end of the period you have already paid for.",
        ios_faq3_q: "I changed phone. Do I lose my plan?",
        ios_faq3_a: "Use Restore purchases on the Plans screen and the App Store hands the subscription back to the app. Keeping a copy of your licence code is still worth doing.",
        ios_faq4_q: "Where do finished videos go?",
        ios_faq4_a: "They play in the app, and Download saves a copy to Photos. What is sent to make them, and how long it is kept, is set out on the privacy page.",
        ios_faq5_q: "How long does one video take?",
        ios_faq5_a: "Two to three minutes for a short one, five to ten for a longer one. Drawing the artwork is most of it — one image per scene — so more scenes means more time.",
        ios_cta_support: "Email support",

        /* ---------- policy page ---------- */
        pol_page_title: "Privacy policy — GenVideo: Master Tool | AIBachKhoa",
        pol_meta_desc: "What GenVideo sends to its server, what it keeps, for how long, and why there is no account to create in the first place.",
        pol_back: "Back to the product",
        pol_eyebrow: "Legal",
        pol_title: "Privacy policy",
        pol_product: "GenVideo: Master Tool — for Windows, macOS, Linux, Android and iOS",
        pol_updated: "Last updated: 6 September 2026",
        pol_lead: "GenVideo makes videos on a server, so unlike a purely local tool it genuinely does send your material somewhere. This page says exactly what leaves your device, what is kept, for how long, and who else sees it. Where the answer is \"nothing\", it says so plainly; where something is sent, it is listed rather than summarised away.",
        pol_toc: "On this page",
        pol_h_summary: "Summary",
        pol_h_noaccount: "Why there is no account",
        pol_h_sent: "What the app sends",
        pol_h_notsent: "What it never sends",
        pol_h_device: "What stays on your device",
        pol_h_processors: "Who else processes it",
        pol_h_payment: "Payment",
        pol_h_retention: "How long things are kept",
        pol_h_perm: "Permissions the app asks for",
        pol_h_children: "Children",
        pol_h_rights: "Your rights",
        pol_h_security: "Security",
        pol_h_changes: "Changes",
        pol_h_contact: "Contact",
        pol_sum_1: "GenVideo: Master Tool is published by AIBachKhoa (Trần Đức Sơn), Vietnam. It turns a topic or a script into a narrated video, and the generation runs on our server rather than on your machine.",
        pol_sum_2: "<strong>There are no user accounts.</strong> We do not ask for your name, your email or a password, and we do not have them. What identifies a paid licence is a random 64-character code your device generates on first run — it is not derived from your hardware and it says nothing about you.",
        pol_sum_3: "<strong>The text you type is sent, because that is the job.</strong> A video cannot be written from a topic that stays on your machine. What is sent, and what happens to it afterwards, is set out below.",
        pol_noacc_1: "Asking someone to create an account before they can buy is asking them to hand over an email address that the product does not need. So a licence belongs to the machine instead: the app generates a random code, keeps it in the operating system's keychain — Keychain on Apple platforms, the encrypted keystore on Android, the credential store on Windows — and that code is the only thing the server knows about the buyer.",
        pol_noacc_2: "This has a real cost, and hiding it would be dishonest: a licence lives on one machine. Buying on a laptop does not unlock a phone. The Plans screen shows the code so you can copy it to another machine yourself, and clearing the app's data or reinstalling can lose it — which is why the app tells you to keep it, and why support cannot find a payment without it.",
        pol_sent_1: "Only these things leave your device, and only when the action that needs them happens:",
        pol_sent_th_what: "What",
        pol_sent_th_when: "When, and why",
        pol_sent_r1_a: "Your topic or script, and the render settings",
        pol_sent_r1_b: "When you launch a render. This is the material the video is made from — the narration is written from it, the image prompts are drawn from it, and the voice reads it.",
        pol_sent_r2_a: "Your licence code",
        pol_sent_r2_b: "With every request that checks or spends your quota, and when you buy a plan. It is how the server knows which licence is being used.",
        pol_sent_r3_a: "A music file you upload",
        pol_sent_r3_b: "Only if you upload one. It joins the library on the server so later renders can use it.",
        pol_sent_r4_a: "A reference audio path or URL",
        pol_sent_r4_b: "Only if you fill that field in, and only for voice-cloning workflows that support it.",
        pol_sent_r5_a: "Your own API key, on Bring your own key",
        pol_sent_r5_b: "Only on that plan, and only so the render can be billed to your account with the model provider instead of ours.",
        pol_notsent_1: "No name, email address, phone number or postal address — the app has no field to type them into",
        pol_notsent_2: "No advertising identifier, and no advertising or analytics SDK is embedded at all",
        pol_notsent_3: "No contacts, calendar, location or photo library",
        pol_notsent_4: "No hardware identifier: the licence code is random, not derived from your device",
        pol_notsent_5: "No crash or usage telemetry, and no behavioural tracking of any kind",
        pol_dev_1: "Kept locally, and never uploaded:",
        pol_dev_l1: "Your licence code, in the operating system's keychain",
        pol_dev_l2: "The draft you were last working on, so it survives closing the app",
        pol_dev_l3: "Interface preferences: language, light or dark theme",
        pol_dev_l4: "How many free trial videos this device has used",
        pol_dev_l5: "Any video you chose to download",
        pol_dev_2: "Uninstalling the app, or clearing its data, removes all of it — including the licence code, which is why it is worth copying somewhere first.",
        pol_proc_1: "Making a video means handing parts of the work to other services. These are the only ones, and each sees only what its step needs:",
        pol_proc_th_who: "Service",
        pol_proc_th_what: "What it receives",
        pol_proc_r1_a: "OpenAI",
        pol_proc_r1_b: "Your topic or script, to write the narration and the image prompts, and to generate the artwork. On Bring your own key this runs on your account, not ours.",
        pol_proc_r2_a: "Microsoft Edge text-to-speech",
        pol_proc_r2_b: "The narration lines, to read them aloud.",
        pol_proc_r3_a: "Supabase",
        pol_proc_r3_b: "Your licence code, plan, expiry and quota counter. No content and nothing personal.",
        pol_proc_r4_a: "PayPal · Google Play",
        pol_proc_r4_b: "The purchase itself. We never see your card or bank details; they are handled entirely by the store you buy through.",
        pol_proc_2: "Nothing is sold, rented or handed to advertisers or data brokers. Disclosure to anyone else happens only where the law requires it.",
        pol_pay_1: "Desktop builds are paid through PayPal; the Android build is paid through Google Play, because Google requires it for digital goods used inside an app. In both cases your payment details go to them and never to us — we receive a confirmation that a payment happened, attached to your licence code.",
        pol_pay_2: "Subscriptions renew monthly until cancelled, and can be cancelled at any time from PayPal or from Google Play. The link is on the Plans screen inside the app. Cancelling stops the next renewal and leaves the current period intact — you keep what you already paid for.",
        pol_ret_1: "<strong>Rendered videos and their source text:</strong> kept on the server so the app can fetch them, and removed on request. Write in with your licence code and they go.",
        pol_ret_2: "<strong>Licence records:</strong> kept while the licence exists, and afterwards only as long as tax and accounting rules require.",
        pol_ret_3: "<strong>Payment event log:</strong> kept so a \"I paid and it did not unlock\" can be answered — without it there is no way to check.",
        pol_ret_4: "<strong>Music you uploaded:</strong> kept until you delete it from the Music screen.",
        pol_perm_th_what: "Permission",
        pol_perm_th_why: "Why",
        pol_perm_r1: "To reach the render server. Without it the app cannot make anything.",
        pol_perm_r2: "Only on Android 9 and older, and only to save a finished video to your gallery. On Android 10 and later no permission is needed for that at all.",
        pol_perm_note: "There is no camera, microphone, location or contacts permission, because there is nothing in the app that would use one.",
        pol_child_1: "GenVideo is not aimed at children under 13 and collects nothing that identifies a person, so it holds no children's data. It is a production tool for people who publish video.",
        pol_rights_1: "Because there is no account, most of what you would normally have to ask for you can simply do:",
        pol_rights_l1: "<strong>Erase local data:</strong> uninstall the app, or clear its data",
        pol_rights_l2: "<strong>Delete your videos and their source text:</strong> write in with your licence code",
        pol_rights_l3: "<strong>Ask what is held against a licence code:</strong> write in and we will tell you",
        pol_rights_l4: "<strong>Stop paying:</strong> cancel from PayPal or Google Play, no request to us needed",
        pol_rights_2: "One consequence worth stating: since we hold no name or email, a request has to come with the licence code. It is the only thing that connects a person to a record, and without it we genuinely cannot tell which record is yours.",
        pol_sec_1: "Traffic runs over HTTPS. The licence table denies every read and write from the app's own key — only the server-side functions can touch it, so the key shipped inside every copy of the app can read nothing, not even its own row.",
        pol_sec_2: "Payment confirmations are verified against PayPal's signature or Google's servers before a licence is granted. The app's claim that a payment happened is never enough on its own; if it were, anyone could send that claim.",
        pol_chg_1: "If this policy changes, the date at the top changes with it. A change that affects what is collected or who receives it will be announced in the app before it takes effect, not slipped in quietly.",
        pol_contact_1: "AIBachKhoa (Trần Đức Sơn), Vietnam.",
        pol_contact_2: "Please include your licence code — you will find it on the Plans screen, and the \"Contact support\" button there puts it in the email for you."
    }
};

const LANGS = [
    { code: 'en', label: 'English' }
];
const DEFAULT_LANG = 'en';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;

    // ---------- Theme (shared with the main site) ----------
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
    // page. Anything no longer offered falls through to the default.
    const detectLang = () => {
        const saved = localStorage.getItem('genvideo-lang');
        if (saved && supported.includes(saved)) return saved;
        const site = localStorage.getItem('lang');
        if (site && supported.includes(site)) return site;
        return DEFAULT_LANG;
    };

    langSelects.forEach(sel => {
        // Nothing to choose between while only one language is offered.
        sel.hidden = LANGS.length < 2;
        sel.innerHTML = '';
        LANGS.forEach(l => {
            const opt = document.createElement('option');
            opt.value = l.code;
            opt.textContent = sel.dataset.display === 'code' ? l.code.toUpperCase() : l.label;
            sel.appendChild(opt);
        });
    });

    let currentLang = detectLang();

    const updateLanguage = (lang) => {
        const dict = i18n[lang] || i18n[DEFAULT_LANG];
        root.setAttribute('lang', lang);

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const val = dict[el.dataset.i18n];
            if (val !== undefined) el.innerHTML = val;
        });
        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            const val = dict[el.dataset.i18nAria];
            if (val !== undefined) el.setAttribute('aria-label', val);
        });
        // Alt text is content too — a screen reader gets nothing from an
        // untranslated one.
        document.querySelectorAll('[data-i18n-alt]').forEach(el => {
            const val = dict[el.dataset.i18nAlt];
            if (val !== undefined) el.setAttribute('alt', val);
        });

        // Each page names the title/description pair it wants, rather than the
        // script guessing from the address.
        const titleKey = document.body.dataset.titleKey || 'page_title';
        const descKey = document.body.dataset.descKey || 'meta_desc';
        if (dict[titleKey]) document.title = dict[titleKey];
        const meta = document.querySelector('meta[name="description"]');
        if (meta && dict[descKey]) meta.setAttribute('content', dict[descKey]);

        langSelects.forEach(sel => { sel.value = lang; });
    };

    langSelects.forEach(sel => sel.addEventListener('change', () => {
        currentLang = sel.value;
        localStorage.setItem('genvideo-lang', currentLang);
        updateLanguage(currentLang);
    }));

    updateLanguage(currentLang);

    // ---------- Mobile menu ----------
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const open = navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active', open);
            menuToggle.setAttribute('aria-expanded', String(open));
        });
        navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
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
