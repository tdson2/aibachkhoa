/* =========================================================
   Novaryn product page + privacy policy.
   NOTE: this page is English-only. The Vietnamese copy was removed
   from the whole site along with every /vi/ URL, so there is no
   hidden locale left here to switch back on.
   Theme is shared with the rest of the site through the same
   'theme' key; the language choice is stored separately so it does
   not fight with the picker on the landing page.
   ========================================================= */

const i18n = {
    en: {
        page_title: "Novaryn — one thumb, endless waves | AIBachKhoa",
        meta_desc: "A vertical arcade shoot-'em-up for Android. Drag to fly, the cannon fires itself, and sooner or later a boss turns up to be learned. Plays fully offline.",
        aria_lang: "Change language",
        aria_theme: "Toggle theme",
        aria_menu: "Open menu",
        skip_link: "Skip to content",

        nav_home: "Home",
        nav_overview: "Overview",
        nav_loop: "The run",
        nav_gems: "Power-ups",
        nav_ships: "Ships",
        nav_shots: "Screenshots",
        nav_policy: "Privacy",

        hero_kicker: "Android · arcade space shooter",
        hero_title: "One thumb. <em>Endless waves</em>.",
        hero_sub: "A vertical arcade shoot-'em-up made for short sessions. Drag anywhere on the screen to fly; your cannon fires by itself. Everything else is dodging, timing, and knowing when to push your luck.",
        btn_play: "Get it on Google Play",
        btn_shots: "See how it plays",
        btn_policy: "Read the privacy policy",
        btn_contact: "Contact us",
        hero_meta: "Application id <code>com.tdson.novaryn</code> · portrait, Android 7.0 and up · rated Everyone, with in-game purchases.",


        loop_eyebrow: "The run",
        loop_title: "Drag to fly. <em>The rest is nerve</em>.",
        loop_sub: "There is no fire button, no joystick and no menu between you and the next attempt. You put a thumb down anywhere on the glass and the ship follows it — which means the only decision left in the game is where to be, and that is the decision the whole thing is built around.",
        c_touch_t: "Anywhere on the screen is the stick",
        c_touch_d: "Not a pad in a corner your thumb has to find. Put a finger down where it already is and the ship tracks it one-to-one, so nothing you own is ever covered by your own hand at the moment you need to see it.",
        c_auto_t: "The cannon is never your problem",
        c_auto_d: "It fires on its own, at its own rate, for the whole run. Nothing is lost to a missed tap, and nothing is won by mashing — a run reads entirely as a line you flew, not a button you held.",
        c_wave_t: "Waves arrive, and keep arriving",
        c_wave_d: "Formations come in denser and faster each time, and there is nothing at the end to reach. The score counter and the BEST under it are the whole scoreboard: how far you got, against how far you have ever got.",
        c_again_t: "One more try is eight seconds away",
        c_again_d: "Death drops you straight back to the menu with START under your thumb. No unlock gate, no energy bar, no countdown — the loop is short enough to fit a bus stop and honest enough that a bad run is your fault.",

        boss_eyebrow: "Bosses",
        boss_title: "Sooner or later, <em>something with a name</em>.",
        boss_sub: "Formations give way to a single ship that holds its ground, takes real punishment and attacks in shapes you have to read rather than out-shoot. Each fights like itself, and learning one is learning it for good.",
        boss_read_t: "No two of them open the same way",
        boss_read_d: "Each one has its own way of filling the screen, and its own tell before it does. Which is as much as is worth saying here — the rest is better met than read about.",

        gem_eyebrow: "Power-ups",
        gem_title: "Everything that helps you, <em>you fly into</em>.",
        gem_sub: "Power-ups drop where the fighting was, so reaching one means going back into the space you were dodging a second ago. That trade is the game.",
        gem_note: "<strong>Nothing here is bought.</strong> Every power-up in Novaryn drops from play. There is nothing sold in the shop that helps you survive, no revive offered after a death and no advantage available for money — the shop holds ship skins and nothing else.",

        ship_eyebrow: "Ships",
        ship_title: "A shop of <em>paint, and nothing else</em>.",
        ship_sub: "Skins change how your run looks and nothing about how it plays — no faster ship, no wider cannon, no extra life for money. A leaderboard where the top scores could be bought would not be worth reading.",
        ship_price_note: "<strong>Skins are one-time purchases.</strong> Google Play shows the shop in your own currency, and a skin you buy outright stays yours for good — on this device and on any other you sign in to with the same Google account.",

        pro_eyebrow: "Novaryn Pro",
        pro_title: "Optional, monthly, <em>and spelled out</em>.",
        pro_sub: "Pro is a subscription that opens the whole shop and switches advertising off while it is active. It is the only recurring charge in the game, it changes nothing about how a run plays, and here is exactly what happens if you stop paying for it.",
        th_q: "The question",
        th_a: "The answer",
        pro_q1: "What it unlocks",
        pro_a1: "The whole shop, for as long as the subscription is active — and advertising, which stops completely: with Pro the ad code is never started at all.",
        pro_q2: "What it costs",
        pro_a2: "$4.99 a month on the US list, shown in your own currency at checkout and billed by Google Play.",
        pro_q3: "What it does to a run",
        pro_a3: "Nothing. No extra ship, no stronger cannon, no revive. Pro buys paint and quiet.",
        pro_q4: "If you cancel",
        pro_a4: "Ships unlocked <em>through</em> Pro lock again when it lapses. Ships you bought outright stay yours — cancelling never takes back a purchase.",
        pro_q5: "How to cancel",
        pro_a5: "Any time, in Google Play → Payments &amp; subscriptions. We never see your card, and there is no cancellation flow inside the game to argue with you.",

        gal_eyebrow: "Screenshots",
        gal_title: "Straight captures, <em>no mock-ups</em>.",
        gal_sub: "Every frame comes straight off a phone, exactly as the game draws it — hand-made pixel art, start to finish.",
        s1_title: "The title screen",
        s1_cap: "Start, shop, settings — and the HUD already showing behind the panel, so the first thing you see is the thing you will be reading all run.",
        s2_title: "Into the first formation",
        s2_cap: "Enemy fighters drift down in a loose formation while your own fire climbs the middle of the screen on its own.",
        s3_title: "A boss arrives",
        s3_cap: "A boss holds position behind its health bar, and the screen turns into something to be read rather than out-shot.",
        s4_title: "Deeper into a run",
        s4_cap: "Later on the screen gets busy, and a volley arrives as a shape rather than a wall.",
        s5_title: "The shop",
        s5_cap: "The shop: ship skins and the Novaryn Pro subscription, and nothing in it that changes a run.",
        s6_title: "Settings, in full",
        s6_cap: "Sound, music, and nothing else that needs configuring. That is the entire options screen.",
        s7_title: "Key art",
        s7_cap: "The sky the whole game is painted against, with worlds drifting past behind the fight.",

        phone_eyebrow: "Built for a phone",
        phone_title: "Portrait, offline, <em>and small</em>.",
        phone_sub: "Novaryn is shaped around the way a phone is actually held: upright, in one hand, for a few minutes at a time, often somewhere with no signal.",
        p_portrait: "<strong>Portrait and one-handed.</strong> Playable while standing on a bus, with no rotation and no second thumb required.",
        p_offline: "<strong>Plays fully offline.</strong> The whole game runs on the device. Turn the connection off and nothing changes.",
        p_small: "<strong>Small download, old hardware.</strong> Android 7.0 and up, and it does not ask a budget phone for more than it has.",
        p_local: "<strong>Your best score is yours.</strong> It is kept on the device, in the game's own save file, and it is not sent anywhere.",

        faq1_q: "Which Android versions does it run on?",
        faq1_a: "Android 7.0 and up, rated Everyone with in-game purchases declared.",
        faq2_q: "Are there ads?",
        faq2_a: "On Android, yes — between runs, never during one, and never a video you have to sit through to carry on playing. A Novaryn Pro subscription removes them completely. The iPhone and iPad version has no ads at all.",
        faq3_q: "Does it need an internet connection?",
        faq3_a: "No. A run plays identically with the connection off. A connection is only used when you open the shop or make a purchase, because that goes through Google Play Billing.",
        faq4_q: "Can I lose a skin I paid for?",
        faq4_a: "Not one you bought outright — those are one-time purchases tied to your Google account and restore when you reinstall. Only ships unlocked <em>through</em> a Pro subscription lock again if Pro lapses.",
        faq5_q: "Is my high score sent anywhere?",
        faq5_a: "Your best score is kept on the device, in the game's own save file. Uninstalling the app removes it.",
        faq6_q: "Is it suitable for children?",
        faq6_a: "It is rated Everyone: an abstract space shooter with no blood, no story and no chat. Worth knowing that it does carry in-app purchases, so a shared device is worth a Play Store purchase PIN.",

        cta_title: "There is no end screen. Only how far you got.",

        footer_desc: "Building practical AI tools for developers and businesses.",
        footer_game: "The game",
        footer_prod: "Other products",
        footer_comp: "Company",
        footer_about: "About",
        footer_services: "Services",
        footer_contact: "Contact",
        footer_rights: "All rights reserved.",

        /* ---------- Privacy policy ---------- */
        pol_page_title: "Privacy Policy — Novaryn | AIBachKhoa",
        pol_meta_desc: "How Novaryn handles information: what stays on your device, and what the App Store and Google Play receive when you buy a ship or Pro.",
        pol_back: "Back to the game",
        pol_eyebrow: "Legal",
        pol_title: "Privacy Policy",
        pol_game: "Novaryn",
        pol_updated: "Last updated: 19 September 2026",
        pol_lead: "This Privacy Policy explains how Novaryn (\"we\", \"our\", or \"us\") collects, uses, and protects your information when you use our mobile application Novaryn (the \"App\"). We are committed to protecting your privacy and complying with applicable data protection laws, including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA), where applicable.",
        pol_toc: "On this page",

        pol_h_intro: "Introduction",
        pol_intro: "Novaryn is a vertical arcade shoot-'em-up for iPhone, iPad and Android: endless waves of enemy formations, bosses along the way, and a collection of purely cosmetic ship skins. The game runs entirely on your own device. It has no accounts, no player profiles, no chat and no analytics. The Android version shows advertising supplied by Google AdMob; the iPhone and iPad version shows none. A Novaryn Pro subscription removes advertising altogether.",

        pol_h_short: "The short version",
        pol_short_1: "<strong>We run no servers and we receive no data about you.</strong> Your settings and your best score are written to the App's own save file on your device and never leave it.",
        pol_short_2: "<strong>The Android version shows ads; the iPhone and iPad version does not.</strong> Ads on Android are served by Google AdMob, which may use your device's advertising identifier to choose them. There is still no analytics SDK and no crash-reporting SDK in either build, and a Novaryn Pro subscription switches advertising off.",
        pol_short_3: "<strong>The third parties are the app stores and, on Android, Google AdMob</strong> — Apple's App Store on iPhone and iPad, Google Play on Android, each only when you choose to buy a ship skin or subscribe to Novaryn Pro, and AdMob whenever an ad loads on Android. Apple or Google handles the transaction; we never see your payment details.",
        pol_short_4: "<strong>The App asks for no sensitive permission.</strong> No location, no contacts, no camera, no microphone, no access to your files.",

        pol_h_defs: "Interpretation and Definitions",
        pol_h_interp: "Interpretation",
        pol_interp: "The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.",
        pol_h_defs2: "Definitions",
        pol_defs_lead: "For the purposes of this Privacy Policy:",
        pol_d_app: "<strong>Application</strong> (or the <strong>App</strong>) refers to Novaryn, the software program provided by the Company.",
        pol_d_company: "<strong>Company</strong> (referred to as either \"the Company\", \"We\", \"Us\" or \"Our\" in this Agreement) refers to tdson, the developer of the Application.",
        pol_d_country: "<strong>Country</strong> refers to: Vietnam.",
        pol_d_device: "<strong>Device</strong> means any device that can access the Service, such as a phone or a tablet.",
        pol_d_personal: "<strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.",
        pol_d_service: "<strong>Service</strong> refers to the Application.",
        pol_d_provider: "<strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. For this App, the only such parties are Apple, through the App Store, and Google, through Google Play — and only when you make a purchase.",
        pol_d_purchase: "<strong>In-App Purchase</strong> means a ship skin bought outright, or the Novaryn Pro subscription, each transacted through the App Store or Google Play, depending on where the App was installed from.",
        pol_d_you: "<strong>You</strong> means the individual accessing or using the Service.",

        pol_h_collect: "Data We Collect",
        pol_collect_lead: "<em>We</em> collect no Personal Data. On Android our advertising partner does receive data of its own — see <a href='#advertising'>Advertising</a>. To be specific about what we do and do not handle:",
        pol_collect_none_t: "We do not collect",
        pol_collect_n1: "Your name, email address, phone number or any other contact detail.",
        pol_collect_n2: "Any account identifier — the App has no accounts and no sign-in.",
        pol_collect_n3: "Advertising or device identifiers — none of them ever reaches us. On Android, Google AdMob may read the device's advertising identifier for ad selection; see <a href='#advertising'>Advertising</a>.",
        pol_collect_n4: "Location, contacts, photos, files, camera or microphone input.",
        pol_collect_n5: "Analytics, usage statistics, session length, crash reports or performance metrics.",
        pol_collect_local_t: "Stored on your device only",
        pol_collect_l1: "Your best score, so the BEST figure under the score counter has something to compare against.",
        pol_collect_l2: "Your sound-effects volume setting.",
        pol_collect_l3: "Which ship skin you have equipped, and which skins you own.",
        pol_collect_note: "<strong>Note:</strong> the three items above are written to the App's own private save file on your device. They are not transmitted to us or to anyone else, and we have no way of reading them.",

        pol_h_purchases: "Purchases and Subscriptions",
        pol_purchase_1: "Novaryn offers optional in-app purchases: individual ship skins as one-time purchases, and <strong>Novaryn Pro</strong> as a monthly subscription that unlocks every ship in the shop while it is active. All purchases are cosmetic. Nothing sold in the App changes how the game plays.",
        pol_purchase_2: "Every transaction is carried out by the store the App was installed from — <strong>Apple's App Store</strong> or <strong>Google Play</strong>. Apple or Google, not us, processes your payment. We never see, receive or store your card number, billing address or any other payment detail. What the App receives back is only whether an entitlement is currently valid, so it can unlock the skin you paid for.",
        pol_purchase_3: "Apple and Google each process that transaction as an independent controller under their own privacy policy. If you want to know what they keep about a purchase, those policies are the place to look, and your Apple Account or Google account settings are where you can review your purchase history.",
        pol_purchase_4: "The Novaryn Pro subscription renews monthly until you cancel it, and you can cancel at any time — on iPhone or iPad in <strong>Settings → your name → Subscriptions</strong>, on Android in <strong>Google Play → Payments &amp; subscriptions</strong>. Ships unlocked through an active Pro subscription lock again if the subscription ends; ships you bought outright remain yours permanently and restore when you reinstall the App.",

        pol_h_sharing: "Sharing Data with Third Parties",
        pol_sharing_1: "We do not sell user data, and we hold no user data to sell. On Android the App includes one third-party SDK — Google AdMob, which serves the ads and is described under <a href='#advertising'>Advertising</a>. There is no analytics provider, no crash-reporting service and no social SDK, and the iPhone and iPad build contains no third-party SDK at all.",
        pol_sharing_2: "On iPhone and iPad the App Store is the only third-party service the App talks to, and only at the moment you open the shop or complete a purchase. On Android there are two: Google Play for the same purpose, and Google AdMob when an ad loads. Nothing else leaves the device.",

        pol_h_ads: "Advertising",
        pol_ads_1: "The Android version of Novaryn shows advertising supplied by <strong>Google AdMob</strong>. The iPhone and iPad version contains no advertising SDK and shows no ads. Ads never appear during a run — only between them.",
        pol_ads_2: "To select and measure an ad, Google may process your device's advertising identifier, coarse location inferred from your IP address, device and app information, and interaction with the ad itself. That processing is Google's, as an independent controller — the data goes to Google, not to us. We receive only anonymous, aggregated earnings figures, which identify nobody.",
        pol_ads_3: "Where the GDPR or a comparable law applies, personalised advertising may only be shown once consent has been collected through Google's consent tool. No consent message is configured for Novaryn, so in those regions the App shows <strong>no advertising at all</strong> rather than showing any without permission. If a consent message is added later, a <strong>Privacy options</strong> control appears in the game's Settings so the choice can be changed or withdrawn at any time.",
        pol_ads_4: "Android itself also lets you limit this: <strong>Settings → Privacy → Ads</strong> on your device can delete or reset the advertising ID, which stops past activity being tied to future ads.",
        pol_ads_5: "<strong>Novaryn Pro removes advertising completely.</strong> While the subscription is active the ad SDK is not started at all, so no ad request is made and no advertising identifier is read.",
        pol_ads_6: "How Google uses the data it collects from apps that use its services is set out in <a href='https://policies.google.com/technologies/partner-sites' target='_blank' rel='noopener'>Google's partner policy</a>.",

        pol_h_perm: "Permissions and Network Access",
        pol_perm_1: "On iOS the App declares no permission at all: the build carries no camera, microphone or photo-library usage description, because it touches none of them. On Android it declares <code>INTERNET</code>, which Google Play Billing requires in order to verify purchases and entitlements and which AdMob uses to fetch an ad, <code>WAKE_LOCK</code>, which keeps the screen from sleeping in the middle of a run, and <code>com.google.android.gms.permission.AD_ID</code>, which lets AdMob read the device's advertising identifier.",
        pol_perm_2: "It requests no other sensitive permission: no location, no contacts, no camera, no microphone, and no access to the photos, videos or documents on your device.",
        pol_perm_3: "The game itself does not require a connection. Every wave, every boss and every power-up works with the connection off — the only things that need the network are the shop and, on Android, loading an ad. With the connection off the game still plays in full; ads simply do not appear.",

        pol_h_storage: "Data Storage and Deletion",
        pol_storage_1: "We operate no servers of our own and store no user data. Everything the game needs in order to run is processed and stored locally on your device.",
        pol_storage_2: "You can delete all of it by uninstalling the App. That removes your best score, your settings and the record of which skin you had equipped.",
        pol_storage_3: "Your purchase history is the exception, because it is held by Apple or Google rather than by us. Uninstalling the App does not erase a purchase — that is deliberate, and it is what lets a skin you paid for come back when you reinstall, through <strong>Restore Purchases</strong> in the shop. Review or manage it through your Apple Account or your Google Play account.",

        pol_h_children: "Children's Privacy",
        pol_children_1: "Novaryn is rated for general audiences and contains no content directed at, or unsuitable for, children. We do not knowingly collect personal information from anyone, of any age, including children under 13. The App is not directed at children, and the Android build is configured so that ads served to it are not based on interest profiles where the store or the law treats the audience as a child audience.",
        pol_children_2: "The App does contain in-app purchases. If a child uses your device, we suggest requiring authentication before a purchase completes — Ask to Buy or <strong>Screen Time → Content &amp; Privacy Restrictions</strong> on iOS, and purchase authentication in the Google Play Store settings on Android.",

        pol_h_rights: "Your Rights",
        pol_rights_lead: "Under the GDPR, the CCPA and comparable laws, you have rights of access, correction, deletion, portability and objection with respect to your personal data. Because we hold no personal data about you, there is nothing on our side for those requests to reach — but the rights still apply, and you are welcome to contact us to confirm that.",
        pol_rights_1: "<strong>Access:</strong> we hold no data about you to disclose.",
        pol_rights_2: "<strong>Deletion:</strong> uninstalling the App removes everything the App has stored.",
        pol_rights_3: "<strong>Purchases:</strong> requests about payment records should go to Apple or Google, whichever processed them.",
        pol_rights_4: "<strong>Objection and consent:</strong> there is no profiling or automated decision-making in the App. On Android you can change or withdraw your advertising consent at any time, or remove ads outright with Novaryn Pro — see <a href='#advertising'>Advertising</a>.",

        pol_h_security: "Security",
        pol_security: "The App stores its data locally, so the ordinary risks of data in transit barely arise. Purchase traffic is handled by the App Store or Google Play over their own secured channels, and on Android the ad request goes to Google over theirs. Neither carries a save file or a score. That said, no method of electronic storage is completely secure, and the save file on your device is protected by your device's own security — a screen lock is worth having.",

        pol_h_changes: "Changes to this Privacy Policy",
        pol_changes_1: "We may update this Privacy Policy from time to time — for instance, if a future version of the App gains a feature that changes how data is handled. We will post the new policy on this page and update the \"Last updated\" date at the top.",
        pol_changes_2: "You are advised to review this Privacy Policy periodically. Changes take effect when they are posted on this page.",

        pol_h_contact: "Contact Us",
        pol_contact_lead: "If you have any questions about this Privacy Policy, you can contact us:",
        pol_contact_email: "By email",
        pol_contact_addr: "By address",
        pol_contact_addr_v: "Nhan My, Ly Nhan, Ha Nam 400000, Vietnam",
        pol_contact_dev: "Developer name",
        pol_contact_dev_v: "tdson",
        pol_contact_app: "Application id",
        pol_contact_app_v: "com.tdson.novaryn",

        /* ---- /novaryn/ios : the iOS build has its own page, because the
           App Store listing must not send anyone to another storefront ---- */
        ios_page_title: "Novaryn for iPhone & iPad | AIBachKhoa",
        ios_meta_desc: "A vertical arcade shoot-'em-up for iPhone and iPad. Drag to fly, the cannon fires itself, and sooner or later a boss turns up to be learned. No ads, offline.",
        ios_kicker: "iPhone &amp; iPad · arcade space shooter",
        ios_title: "One thumb. <em>Endless waves</em>.",
        ios_sub: "A vertical arcade shoot-'em-up built for short sessions. Drag anywhere on the glass to fly; the cannon fires by itself. Everything else is dodging, timing, and knowing when to push your luck.",
        ios_cta_store: "Coming to the App Store",
        ios_cta_shots: "See how it plays",
        ios_meta: "Bundle id <code>com.tdson.novaryn</code> · portrait · iPhone and iPad, iOS 15.0 or later · no ads, no tracking, plays offline.",
        ios_feat_eyebrow: "On iPhone and iPad",
        ios_feat_title: "Drag to fly. <em>The rest is nerve</em>.",
        ios_feat_sub: "There is no fire button, no joystick and no menu between you and the next attempt. A thumb anywhere on the screen and the ship follows it, which leaves exactly one decision in the game: where to be.",
        ios_f1_t: "One-handed, portrait",
        ios_f1_d: "Steer by dragging anywhere. The cannon fires on its own, so nothing competes for the hand holding the phone.",
        ios_f2_t: "Weapons that keep changing",
        ios_f2_d: "Every power-up moves you up a rung, and each rung is a different weapon. How a run is armed by the end is nothing like how it started.",
        ios_f3_t: "Bosses that have to be learned",
        ios_f3_d: "Formations give way to a single ship that holds its ground and attacks in shapes you read rather than out-shoot.",
        ios_f4_t: "Offline, and quiet",
        ios_f4_d: "No account, no sign-in, no server, no advertising, no analytics. Scores stay on the device. The game never asks for a permission.",
        ios_iap_eyebrow: "In-app purchases",
        ios_iap_title: "Ships are paint. <em>Nothing else is for sale</em>.",
        ios_iap_sub: "Every purchase in Novaryn is cosmetic. No weapon, wave, difficulty or level is behind a payment, and the game is complete without spending anything. Purchases are handled by the App Store; we never see your payment details.",
        ios_iap_skins_t: "Ship skins — one-time purchases",
        ios_iap_skins_d: "Sold outright, from US$1.99 to US$5.99. Bought once, yours permanently, and restored on a new device with <strong>Restore Purchases</strong> in the shop.",
        ios_pro_t: "Novaryn Pro — auto-renewable subscription",
        ios_pro_len: "Length of subscription",
        ios_pro_len_v: "1 month, renews automatically",
        ios_pro_price: "Price",
        ios_pro_price_v: "US$4.99 per month, billed in your local currency",
        ios_pro_what: "What it unlocks",
        ios_pro_what_v: "Every ship skin in the shop while the subscription is active",
        ios_pro_terms: "Payment is charged to your Apple Account at confirmation of purchase. The subscription renews automatically unless auto-renew is turned off at least 24 hours before the end of the current period, and your account is charged for renewal within 24 hours before that period ends. Manage or cancel it in <strong>Settings → your name → Subscriptions</strong>. Ships unlocked by an active subscription lock again when it ends; ships bought outright stay yours.",
        ios_legal_privacy: "Privacy Policy",
        ios_legal_terms: "Terms of Use (EULA)",
        ios_shots_eyebrow: "Screenshots",
        ios_shots_title: "What a run looks like",
        ios_support_eyebrow: "Support",
        ios_support_title: "A person answers this address",
        ios_support_sub: "Questions, a bug, a purchase that did not arrive — write to us. We reply within two working days, in English or Vietnamese.",
        ios_cta_title: "There is no end screen. Only how far you got."
    }
};

const LANGS = [
    { code: 'en', label: 'English' }
];
const DEFAULT_LANG = 'en';
const SHOT_DIR = '/assets/games/novaryn/';
/* the seventh capture is landscape key art rather than a phone frame */
const WIDE_SHOTS = new Set(['shot-07']);

document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;

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

    // A stored choice wins, then whatever the visitor picked on the landing
    // page. Anything no longer offered — a 'vi' left over from before it was
    // hidden — falls back to English rather than painting a blank page.
    const detectLang = () => {
        // The URL wins: /es/… is the Spanish page whatever the browser
        // or a previous visit would have preferred.
        const fromUrl = window.LangUrl && window.LangUrl.fromPath(supported);
        if (fromUrl) return fromUrl;
        const own = localStorage.getItem('novaryn-lang');
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
        const lang = sel.value;
        localStorage.setItem('novaryn-lang', lang);
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
    const tabs = Array.from(document.querySelectorAll('.nv-gal-tab'));
    const galStage = document.getElementById('gal-stage');
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
        const shot = active.dataset.shot;
        galImg.src = SHOT_DIR + shot + '.webp';
        galImg.alt = 'Novaryn — ' + (dict[key + '_title'] || '');
        if (galStage) galStage.classList.toggle('is-wide', WIDE_SHOTS.has(shot));
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
