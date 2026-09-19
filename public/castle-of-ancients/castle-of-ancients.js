/* =========================================================
   Castle of Ancients product page + privacy policy.
   NOTE: this page is English-only. The Vietnamese copy was removed
   from the whole site along with every /vi/ URL, so there is no
   hidden locale left here to switch back on.
   Theme is shared with the rest of the site through the same
   'theme' key; the language choice is stored separately so it does
   not fight with the picker on the landing page.
   ========================================================= */

const i18n = {
    en: {
        page_title: "Castle of Ancients — hold the road | AIBachKhoa",
        meta_desc: "A hand-drawn pixel tower defense for iPhone and iPad. Four guard posts, twelve maps, twenty-four enemies. No ads, no purchases, plays offline.",
        aria_lang: "Change language",
        aria_theme: "Toggle theme",
        aria_menu: "Open menu",
        skip_link: "Skip to content",

        nav_home: "Home",
        nav_overview: "Overview",
        nav_posts: "Guard posts",
        nav_foes: "Enemies",
        nav_maps: "Maps",
        nav_shots: "Screenshots",
        nav_policy: "Privacy",

        hero_kicker: "iPhone · iPad · pixel tower defense",
        hero_title: "One road. <em>One castle</em>. Hold it.",
        hero_sub: "Drag a guard post from the side bar, drop it on the grass, and watch a stretch of open road turn into a killing field. Kill for gold, spend the gold on deeper defences, and hold the line to the last wave.",
        btn_shots: "See how it plays",
        btn_policy: "Read the privacy policy",
        btn_contact: "Contact us",
        hero_meta: "Bundle id <code>com.tdson.castleofancients</code> · landscape, iPhone and iPad · no ads, no in-app purchases, plays fully offline.",
        hero_shot_alt: "Castle of Ancients — archer towers holding a bend in the road against a goblin column",

        stat_maps: "Maps across two modes",
        stat_posts: "Guard posts, three levels each",
        stat_foes: "Kinds of enemy to answer",
        stat_langs: "Languages in the box",
        stat_ads: "Ads, trackers and purchases",

        loop_eyebrow: "The loop",
        loop_title: "Build, kill, <em>build again</em>.",
        loop_sub: "Everything in the game runs off one number. Gold comes from things you killed, and it is the only thing that buys the defence that kills the next lot. Spend it in the wrong place and the road tells you so about forty seconds later.",

        c_drag_t: "Drag it where you want it",
        c_drag_d: "One finger takes a card off the side bar and drops it on the tile you chose. Or tap the card, then tap the tile — the same build, two ways round, so it works whichever hand you have free.",
        c_gold_t: "Gold is the whole economy",
        c_gold_d: "There is no second currency, no energy bar and nothing to top up. Every coin came off something that died on your road, and the only question the game ever asks is where the next one goes.",
        c_up_t: "Upgrades put a body on the board",
        c_up_d: "Three levels per post, and each one is visible: another archer on the roof, another warrior standing in the road. You can see what you paid for without opening a stats panel.",
        c_sell_t: "A wrong post is not a lost run",
        c_sell_d: "Sell any post back for 60% of everything you poured into it and rebuild somewhere that works. The map is allowed to teach you something halfway through a wave.",

        post_eyebrow: "Guard posts",
        post_title: "Four posts, <em>four different answers</em>.",
        post_sub: "None of the four is the best one. Each closes a door the others leave open, and every map is really a question about which door matters here.",

        post_archer_n: "Archer Tower",
        post_archer_c: "70 gold",
        post_archer_d: "Fast single-target fire, and the only cheap thing you own that can touch a flier. The backbone of every line you will ever build.",
        post_bolt_n: "Bolt Yard",
        post_bolt_c: "110 gold",
        post_bolt_d: "Explosive bolts that splash across a packed column, and armour only stops half of it. Completely blind to anything airborne.",
        post_barr_n: "Barracks",
        post_barr_c: "90 gold",
        post_barr_d: "Barely shoots. It sends three warriors out to stand in the road and BLOCK it, holding the enemy still while everything else does the killing.",
        post_mon_n: "Monastery",
        post_mon_c: "130 gold",
        post_mon_d: "Magic that ignores armour completely and slows what it hits. The answer to skeletons, and the answer to the minotaur walking behind them.",

        armour_t: "Armour is subtraction, not a percentage",
        armour_d: "Every point of armour comes straight off the damage of the hit that lands. That is why one post is never enough, and why the counter to a heavy column is a different post rather than a bigger one.",
        armour_l1: "<strong>Arrows take armour full in the face.</strong> A skeleton with 5 armour eats most of an archer volley and keeps walking.",
        armour_l2: "<strong>Explosions get through half of it.</strong> Bolt Yards stay useful against armour longer than arrows do — right up until something flies.",
        armour_l3: "<strong>Magic ignores it entirely.</strong> The Monastery does its full number to the toughest thing on the map, and slows it on the way through.",
        armour_l4: "<strong>Nothing is ever fully immune.</strong> Even the weakest hit against the heaviest armour still carries 20% through, so no wave is ever unwinnable — only expensive.",

        foe_eyebrow: "Enemies",
        foe_title: "Twenty-four kinds of <em>trouble</em>.",
        foe_sub: "They do not just get bigger. Each one breaks a rule the last one obeyed — which is why a line that held for six waves can fail on the seventh without anything about it changing.",

        foe_torch: "Basic infantry. The wave you build against.",
        foe_barrel: "Fast, thin, and through a gap before you look up.",
        foe_tnt: "Lobs bombs at your blockers from out of their reach.",
        foe_skull: "Armour 5 and slow. Arrows barely scratch it.",
        foe_spider: "Very fast, and refuses to stop and fight your blockers.",
        foe_bat: "Flies. Straight over the blockers, cutting the corners.",
        foe_imp: "Slips clean past anything standing in the road.",
        foe_wisp: "Flies, and flies straight at the castle.",
        foe_raft: "A boat, not a monster — sink it offshore and the whole squad aboard goes down with it.",
        foe_serpent: "Swims the waterway, then ignores your blockers on land.",
        foe_turtle: "The sea boss. Armour so high only magic reads as damage.",
        foe_ogre: "The heaviest thing on land, and slow as a landslide.",
        foe_mino: "1500 HP, armour 8, and six castle health if it gets through.",
        foe_more: "…and eleven more between them.",

        tag_air: "Flies",
        tag_sea: "From the water",
        tag_boss: "Boss",

        map_eyebrow: "Maps",
        map_title: "Twelve maps, <em>two ways to play</em>.",
        map_sub: "Story teaches, campaign lets you set the terms. Both are the same game; only the guard rails differ.",

        story_t: "Story — five missions, each one an idea",
        story_d: "They unlock one after another, and each map is built around a single lesson rather than a difficulty number.",
        story_1: "<strong>Gatemeadow.</strong> One straight road and open grass on both sides. Nothing to learn but the loop itself.",
        story_2: "<strong>Broken Gorge.</strong> The road doubles back on itself, and every bend is a place one tower covers twice.",
        story_3: "<strong>Shallow Ford.</strong> Water squeezes the building space, and the first fliers arrive to ignore your blockers.",
        story_4: "<strong>Muster Crossroads.</strong> Two columns march in and merge halfway. One line, built where they meet.",
        story_5: "<strong>Siege of the Old Keep.</strong> A 79-tile spiral with the keep ringed in the middle and two bosses inside the ring.",

        camp_t: "Campaign — seven larger maps, unlocked from the start",
        camp_d: "Bigger than the screen, so you pinch to zoom and drag to pan. From a windswept S-bend to a three-gate river delta, a 98-tile spiral, a mountaintop keep with a single ramp, and a castle beset on four sides at once.",

        dial_eyebrow: "Your rules",
        dial_title: "Four dials, and <em>every one comes off</em>.",
        dial_sub: "Set before each campaign run. Each dial has a setting that removes the limit outright — so the same seven maps are a tight economy puzzle or a sandbox, and that is your call rather than a difficulty menu's.",

        dial_gold: "Gold",
        dial_gold_1: "Lean ½",
        dial_gold_2: "Normal",
        dial_gold_3: "Flush ×2",
        dial_gold_4: "Infinite",
        dial_life: "Castle health",
        dial_life_1: "Brittle ½",
        dial_life_2: "Normal",
        dial_life_3: "Solid ×2.5",
        dial_life_4: "Immortal",
        dial_foe: "Enemy strength",
        dial_foe_1: "Easy ×0.7",
        dial_foe_2: "Normal",
        dial_foe_3: "Harsh ×1.5",
        dial_foe_4: "Hell ×2.2",
        dial_wave: "Waves",
        dial_wave_1: "As the map says",
        dial_wave_2: "Endless",

        touch_eyebrow: "Touch",
        touch_title: "Built for a hand, <em>not shrunk to fit one</em>.",
        touch_sub: "The touch layout is not the desktop layout with bigger buttons. It is a different set of numbers, chosen because a finger is not a cursor.",
        touch_l1: "<strong>The cards are taller</strong> and the side bar is wider, because a thumb reaching across a landscape screen is less accurate than a mouse that never misses.",
        touch_l2: "<strong>The drag threshold is wider,</strong> so a tap that wobbles two pixels is still a tap and not a half-started build you have to cancel.",
        touch_l3: "<strong>The tower ghost lifts clear of your fingertip,</strong> because your hand covers exactly the tile you are aiming at — the one place a preview must not be.",
        touch_l4: "<strong>Pinch to zoom, one finger to pan</strong> on the campaign maps, which are wider than any screen you own.",

        shot_eyebrow: "Screenshots",
        shot_title: "Real captures, <em>no mock-ups</em>.",
        shot_sub: "Every shot below is the game running, at full resolution, with nothing painted on afterwards.",

        s1_title: "The main menu",
        s1_cap: "Two modes and a settings screen. No account, no daily reward, nothing between the icon and a run.",
        s2_title: "Building the first tower",
        s2_cap: "A card lifted off the side bar, held over open grass. Every empty grass tile is a legal drop.",
        s3_title: "Holding the road",
        s3_cap: "Archer towers covering a bend, where one tower's range reaches the same column twice.",
        s4_title: "Blockers and upgrades",
        s4_cap: "Barracks warriors standing in the road while the towers work. Each upgrade puts another body out there.",
        s5_title: "Siege of the Old Keep",
        s5_cap: "The last story mission: a 79-tile spiral, the keep ringed in the middle, two bosses inside the ring.",
        s6_title: "Beset on four sides",
        s6_cap: "A campaign map with four roads in. There is no back line here — every direction is the front.",
        s7_title: "Roaring Bay",
        s7_cap: "Sea monsters swim the waterway to shore, and landing rafts ferry infantry past the front line.",
        s8_title: "Five story missions",
        s8_cap: "The story ladder, unlocking one at a time. Campaign maps sit in their own list, open from the start.",

        cta_title: "One road leads to your castle. Everything on it wants the castle gone.",

        footer_desc: "Building practical AI tools for developers and businesses.",
        footer_game: "The game",
        footer_prod: "Other products",
        footer_comp: "Company",
        footer_about: "About",
        footer_services: "Services",
        footer_contact: "Contact",
        footer_rights: "All rights reserved.",

        /* ---------- Privacy policy ---------- */
        pol_page_title: "Privacy Policy — Castle of Ancients | AIBachKhoa",
        pol_meta_desc: "How Castle of Ancients handles information: it collects nothing, sends nothing, and has no network access. Every save stays on your device.",
        pol_kicker: "Last updated: 2 September 2026",
        pol_title: "Privacy Policy — Castle of Ancients",
        pol_lead: "Castle of Ancients does not collect, transmit or share any information about you. It has no network access at all, no analytics, no advertising, no accounts and no in-app purchases. Everything it saves stays in the app's own folder on your device.",

        pol_h_short: "The short version",
        pol_short_1: "<strong>Nothing is collected.</strong> The game asks for no personal information and has no field to type any into.",
        pol_short_2: "<strong>Nothing is sent.</strong> The app declares no network capability, so there is no route by which anything could leave your device even by mistake.",
        pol_short_3: "<strong>No third parties.</strong> No advertising network, no analytics SDK, no crash reporter, no social login.",
        pol_short_4: "<strong>No tracking.</strong> No advertising identifier is read, and nothing you do is linked to you or to any other app.",
        pol_short_5: "<strong>Deleting the app deletes everything.</strong> There is no server copy, because there was never a copy anywhere but your device.",

        pol_h_stores: "What the app stores on your device",
        pol_stores_lead: "The game keeps one small settings file inside its own sandboxed folder. It is not readable by other apps, it is never uploaded, and it holds nothing that identifies you:",
        pol_tbl_what: "What",
        pol_tbl_why: "Why it exists",
        pol_row_prog_w: "Which missions you have cleared",
        pol_row_prog_y: "So the next story mission unlocks, and so Continue can put you back in the run you left.",
        pol_row_opt_w: "Your settings",
        pol_row_opt_y: "Game speed, music and sound volume, language, control scheme, and the four campaign dials.",
        pol_row_log_w: "A local log file",
        pol_row_log_y: "Written by the game engine to help diagnose a crash on your own device. It is never sent anywhere and you can delete it by deleting the app.",
        pol_stores_note: "That is the whole list. There is no identifier, no timestamp tied to a person, and no usage history.",

        pol_h_perm: "Permissions",
        pol_perm_1: "The app requests no permissions. It does not use the camera, the microphone, the photo library, contacts, location, Bluetooth, local network or notifications, and it does not request tracking permission because it does not track.",
        pol_perm_2: "If your device ever shows you a permission prompt attributed to this app, please treat it as a bug and tell us — it is not something the app is designed to do.",

        pol_h_children: "Children's privacy",
        pol_children_1: "The game is a cartoon-styled strategy game with no blood, no gore, no chat, no user-generated content and no link out of the app. We do not knowingly collect personal information from anyone of any age, including children under 13, because we do not collect personal information at all.",
        pol_children_2: "There is nothing to buy inside the app, so there is no purchase a child could make by accident.",

        pol_h_rights: "Your rights",
        pol_rights_lead: "Under GDPR, CCPA and equivalent laws you have rights of access, correction, deletion, portability and objection over your personal data. Because we hold no personal data about you, there is nothing on our side for those requests to reach — but the rights still stand, and you are welcome to contact us to confirm exactly this.",
        pol_rights_1: "<strong>Access:</strong> we hold no data about you to provide.",
        pol_rights_2: "<strong>Deletion:</strong> removing the app deletes everything it saved.",
        pol_rights_3: "<strong>Portability:</strong> there is no account and no server-side record to export.",
        pol_rights_4: "<strong>Objection:</strong> there is no profiling, automated decision-making or targeted advertising in the app to object to.",

        pol_h_security: "Security",
        pol_security: "Because the app stores its data locally and transmits nothing, the usual risks to data in transit do not arise. The save file on your device is protected by your device's own security, so keep a screen lock on it. No method of electronic storage is completely secure, but there is no copy of anything anywhere else to be at risk.",

        pol_h_changes: "Changes to this Policy",
        pol_changes_1: "We may update this Privacy Policy from time to time — for example if a later version of the app gains a feature that changes how data is handled. We will post the new policy on this page and update the \"Last updated\" date at the top.",
        pol_changes_2: "You are encouraged to review this Policy periodically. Changes take effect when they are posted on this page.",

        pol_h_contact: "Contact",
        pol_contact_lead: "If you have any question about this Privacy Policy, you can reach us:",
        pol_contact_email: "By email",
        pol_contact_addr: "By post",
        pol_contact_addr_v: "Nhân Mỹ, Lý Nhân, Hà Nam 400000, Việt Nam",
        pol_contact_dev: "Developer name",
        pol_contact_dev_v: "tdson",
        pol_contact_app: "Application id",
        pol_contact_app_v: "com.tdson.castleofancients"
    }
};

const LANGS = [
    { code: 'en', label: 'English' }
];
const DEFAULT_LANG = 'en';
const SHOT_DIR = '/assets/games/castle-of-ancients/';

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
        const own = localStorage.getItem('castleofancients-lang');
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
        localStorage.setItem('castleofancients-lang', lang);
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
    const tabs = Array.from(document.querySelectorAll('.ca-gal-tab'));
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
        galImg.src = SHOT_DIR + active.dataset.shot + '.webp';
        galImg.alt = 'Castle of Ancients — ' + (dict[key + '_title'] || '');
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
