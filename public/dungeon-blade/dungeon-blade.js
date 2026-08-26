/* =========================================================
   Dungeon of the Fallen Blade product page.
   NOTE: Vietnamese ("vi") is kept here but left out of the picker,
   the same way it is on the landing page and the BKSafe page — to
   show it again, add { code: 'vi', label: 'Tiếng Việt' } to LANGS
   below (and restore the Vietnamese copy in index.html for the
   pre-JS paint if you want it to be the default).
   Theme is shared with the rest of the site through the same
   'theme' key; the language choice is stored separately so it does
   not fight with the picker on the landing page.
   ========================================================= */

const i18n = {
    en: {
        page_title: "Dungeon of the Fallen Blade — a hundred depths, one blade | AIBachKhoa",
        meta_desc: "A hand-made pixel-art action roguelite for Android: a hundred procedurally generated depths, twenty lords, a three-hit sword combo, a bow and a dodge roll, with Google Play Games leaderboards. No ads, no purchases.",
        aria_lang: "Change language",
        aria_theme: "Toggle theme",
        aria_menu: "Open menu",
        skip_link: "Skip to content",

        nav_home: "Home",
        nav_overview: "Overview",
        nav_trailer: "Trailer",
        nav_descent: "The descent",
        nav_combat: "Combat",
        nav_shots: "Screenshots",
        nav_policy: "Privacy",

        hero_kicker: "Android · pixel action roguelite",
        hero_title: "A hundred depths. <em>One blade</em>.",
        hero_sub: "A hand-made pixel-art action roguelite. Cut your way down a hundred procedurally generated depths, take a boon at every gate, and meet the lord waiting on every fifth. Every run rebuilds the dungeon from scratch — nothing is memorised, everything is earned.",
        btn_soon: "Coming to Google Play",
        btn_trailer: "Watch the trailer",
        btn_shots: "See how it plays",
        btn_contact: "Ask about a build",
        hero_meta: "Application id <code>com.tdson.dungeonblade</code> · landscape, arm64-v8a and armeabi-v7a · English, Tiếng Việt, Español, Français, Deutsch, Português.",

        stat_depths: "Depths, all generated",
        stat_lords: "Named lords, one every fifth",
        stat_boons: "Boons to pick between floors",
        stat_langs: "Languages",
        stat_zero: "Ads, purchases, paywalls",

        trailer_eyebrow: "Trailer",
        trailer_title: "Two minutes <em>of the descent</em>.",
        trailer_sub: "Cut from real capture on a phone, scored with an arrangement of the same motifs the game loops in play.",
        trailer_play: "Play the trailer",
        trailer_watch: "Watch it on YouTube",

        descent_eyebrow: "The descent",
        descent_title: "Twenty acts of five, <em>and a lord at the bottom of each</em>.",
        descent_sub: "An act sets the colour of its stone, how often a pit is fire rather than spikes, which music plays and which enemies patrol it. Its first four depths are ordinary warrens; its fifth is an arena holding that act's lord. So a boss waits on depth 5, 10, 15 … 100.",

        combat_eyebrow: "Combat",
        combat_title: "Swings with <em>weight</em>.",
        combat_sub: "Three ways to answer a room, and a stamina bar that makes you choose between them.",
        c_combo_t: "A three-hit sword combo",
        c_combo_d: "Chain the swings and the third lands as a heavy finisher, with more reach and more knockback than the two before it. Break the chain and it starts again.",
        c_bow_t: "A bow for the fights you would rather not walk into",
        c_bow_d: "Arrows cost stamina, so a room cleared at range is a room you enter with nothing left for a roll. The Deep Quiver boon makes the trade worth more.",
        c_roll_t: "A dodge roll with real invulnerability",
        c_roll_d: "Not a dash with a hopeful hitbox — the roll grants actual i-frames, and costs stamina to use. Rolling through a lord's charge is the game's main defensive move.",
        c_move_t: "Movement that reads the room",
        c_move_d: "Hold jump to rise higher, tap again to double jump, and press down with jump to drop through a wooden platform. Every ledge in the dungeon is proved reachable with these alone.",

        controls_title: "Controls",
        controls_sub: "The same bindings the title screen's HOW TO PLAY page lists, and the touch pads carry them on a phone.",
        th_action: "Action",
        th_keyboard: "Keyboard",
        th_gamepad: "Gamepad",
        k_move: "Move",
        g_stick: "Left stick / D-pad",
        k_jump: "Jump (double jump)",
        k_drop: "Drop through platform",
        g_downa: "Down + A",
        k_attack: "Attack (3-hit combo)",
        k_lmb: "left mouse",
        k_bow: "Bow",
        k_rmb: "right mouse",
        k_roll: "Dodge roll (i-frames)",
        k_potion: "Drink potion",
        k_use: "Interact (chests, gate)",
        k_map: "Dungeon map",
        k_pause: "Pause",

        gen_eyebrow: "The dungeon",
        gen_title: "A floor is not a corridor — <em>it runs in four directions</em>.",
        gen_sub: "The generator lays out a grid of 28×16-tile rooms and wires them together left, right, up and down, then carves each room from an archetype of its own.",
        g_tree_t: "Rooms wired in all four directions",
        g_tree_d: "A randomised spanning tree connects every room, weighted towards vertical steps so a depth stacks as much as it spreads. Neighbours on a row get a side door; rooms stacked on each other get a shaft with a drop-through walkway and staggered ledges climbing back up.",
        g_braid_t: "Loops and dead ends, not one route",
        g_braid_d: "A few braided edges are cut between neighbours so a floor is never a single corridor. The rate stays low and climbs slowly with depth — past about a quarter of the pairs a floor stops being a route and becomes open ground.",
        g_gate_t: "A key, a gate, and an exit that can be anywhere",
        g_gate_d: "The entrance is a random dead end and the exit is the dead end furthest from it — above, below, left or right of where you start. From depth 2 the portal is sealed behind a barred gate whose key waits in another dead end, guarded.",
        g_pit_t: "Pits kill, so the generator proves around them",
        g_pit_d: "Falling into spikes or fire is death on the spot, for the player and for anything chasing them. Pits are capped inside a single flat jump, and the validator marks every deadly tile and refuses to route through one.",
        g_proof_t: "Every layout is proved before it is used",
        g_proof_d: "A conservative model of what the player can actually reach — flat and three-tile jumps, no double jump, drop-through platforms, falls, no deadly tiles — checks that the key is reachable with the gate shut, the portal with it open, and that no room is walled off. A layout that does not prove out is re-rolled.",
        g_audit_t: "And every depth is audited for survivability",
        g_audit_d: "A second pass walks all hundred depths simulating a clean run and flags a floor that would drag, kill in under three hits, hold more than two enemies a room, or leave a gap wider than one flat jump. A third hands each depth to a bot that plays it through the real input actions and reports whether it can be finished.",

        lord_eyebrow: "The lords",
        lord_title: "A lord is not <em>a big orc with more health</em>.",
        lord_sub: "Each carries a short list of moves with their own cooldowns and range bands, and takes the first one that is off cooldown and in range. They break into a second phase at half health; most break again at a third, coming back faster, throwing longer volleys and calling deeper reinforcements.",
        th_move: "Move",
        th_does: "What it does",
        m_leap: "Leap",
        m_leap_d: "Crouches, then jumps onto where you are standing and lands in a shockwave. This is the answer to a ledge: a lord that cannot walk to you arrives anyway.",
        m_charge: "Charge",
        m_charge_d: "Winds up, then dashes the length of the arena with its hitbox live. Running it into a wall staggers it — the miss is your window.",
        m_quake: "Quake",
        m_quake_d: "The longest tell in the game, because it is the widest hit in the game: it clears five body-widths of ground on both sides.",
        m_fan: "Fan",
        m_fan_d: "A wall of bolts across an arc. Sidestepping alone will not clear it.",
        m_mortar: "Mortar",
        m_mortar_d: "Lobbed bolts that arc over cover and come down where you are standing.",
        m_contact: "Contact",
        m_contact_d: "Standing inside the biggest lords costs health on its own.",
        l_rhythm_t: "A fight you cannot wait out",
        l_rhythm_d: "A lord's moves are staggered at the start, so it does not dump its whole kit in the opening four seconds. A shared gap between any two moves keeps the kit a rhythm rather than one unbroken pin. And every cooldown shortens the longer the fight runs, so turtling on a ledge just brings the leap sooner.",
        l_size_t: "Size is derived from health",
        l_size_d: "How big a thing looks is how much punishment it will take, and that comparison holds across sprite sheets drawn at different resolutions. Twenty lords are built from seven family kits crossed with a per-boss spec: size, colour, health, reach, volley and what it roars when it is hurt.",
        l_arena_t: "Four arena patterns, checked by hand",
        l_arena_d: "Arenas come in four ledge patterns of increasing length, so twenty fights do not all happen in the same hall repainted. An arena skips the ordinary validator, so every ledge tier is checked against the 6.08 tiles a double jump actually clears.",

        boon_eyebrow: "Boons",
        boon_title: "One choice <em>at every gate</em>.",
        boon_sub: "Level up as you kill, then take a boon on the way down. Three are offered, one is yours — and the deeper you go, the more it takes.",
        b_vit: "+25 max HP and heal fully",
        b_might: "+4 attack power",
        b_swift: "+12% speed and +20 stamina",
        b_keen: "+10% critical chance",
        b_leech: "Heal 8% of the damage you deal",
        b_ward: "Take 12% less damage",
        b_quiver: "+60% arrow damage",
        b_flask: "+2 potions and stronger heals",
        boon_death: "<strong>Death ends the run.</strong> There is no checkpoint and nothing respawns where you fell — the results screen's only way back into the dungeon resets you to depth one with the levels, boons and gold gone.",

        phone_eyebrow: "Built for a phone",
        phone_title: "Touch controls that <em>hold a direction and swing at once</em>.",
        phone_sub: "A floating analogue stick on the left half of the screen and a compact action cluster in the bottom-right corner: attack, jump, bow, dodge, potion, plus a <em>use</em> pad that only appears next to a chest or a gate.",
        p_multi: "<strong>Every pad is multi-touch.</strong> Hold a direction, attack and jump at the same moment. The touch targets are about 30% larger than the art so they stay easy to hit.",
        p_wide: "<strong>A tall screen gets a wider view, not black bars.</strong> The 384×216 viewport fixes its height and grows its width to fill the device, and the HUD re-anchors itself on rotation.",
        p_pixel: "<strong>Whole pixels on real hardware.</strong> 1920×1080 is exactly 5× the canvas, so on a 2220×1080 phone the art lands on whole pixels with no resampling.",
        p_auto: "<strong>On automatically, and switchable.</strong> The pads turn on for Android, iOS or anything reporting a touchscreen; <em>Options → Touch pad</em> cycles auto / on / off. Gamepads and keyboards work throughout.",

        gal_eyebrow: "Screenshots",
        gal_title: "Straight captures, <em>no mock-ups</em>.",
        gal_sub: "Every frame here comes off the running build at 1920×1080 — five times the game's own canvas, so the pixels stay square.",
        s1_title: "The title screen",
        s1_cap: "A branded intro clip plays first; any key, click or tap skips it. The deepest descent and the run count sit under the menu.",
        s2_title: "The three-hit combo",
        s2_cap: "The stick is on the left, the action cluster bottom-right, and the HUD carries health, stamina, level, gold, potions and the depth you are on.",
        s3_title: "A floor built fresh",
        s3_cap: "Nothing here was authored. The ground, the ledges, the chasms and where the monsters stand are rolled for this run and proved before you see them.",
        s4_title: "Rolling through a hit",
        s4_cap: "The roll carries real invulnerability frames, paid for in stamina — the difference between reading an attack and eating it.",
        s5_title: "A depth announces itself",
        s5_cap: "Each act opens with its name and a line of flavour. On an arena the card names the lord waiting in it instead.",
        s6_title: "Choosing a boon",
        s6_cap: "Three of the eight boons are offered at every gate. Vitality and Might are the safe picks; Blood Pact and Keen Edge are the ones that change how you fight.",
        s7_title: "An arena, and a lord",
        s7_cap: "A boss waits on every fifth depth. Its size is derived from its health, so how big it looks is how much punishment it will take.",
        s8_title: "The second phase",
        s8_cap: "At half health a lord breaks phase: faster, longer volleys, deeper reinforcements. Most break again at a third.",

        hood_eyebrow: "Under the hood",
        hood_title: "Built in Godot, <em>drawn by code</em>.",
        hood_sub: "Godot 4.7, GDScript, the GL Compatibility renderer, and a 384×216 canvas that scales by whole pixels.",
        h_gen_t: "Almost every asset is generated",
        h_gen_d: "The tileset, props, parallax backgrounds, combat effects, HUD chrome, touch pads, the bitmap font and all the audio come out of Python generators — 29 sound effects and six music loops synthesised from oscillators rather than sampled. Only the character sprite sheets and the arrow are drawn art.",
        h_scene_t: "Almost no scene files",
        h_scene_d: "The whole game is one node with a script. The TileSet, SpriteFrames, collision shapes and UI are all built at runtime, so there is nothing to keep in sync between the editor and the code.",
        h_font_t: "A 5×7 font that carries Vietnamese",
        h_font_d: "Accented glyphs are composed from a base letter plus combining marks on a 7×13 canvas rather than drawn by hand, so a capital with two marks above it fits. A checker measures every translated string against the box the UI gives it, using the real font metrics, and fails the build if one would not fit.",
        h_lang_t: "Six languages, English as the base",
        h_lang_d: "English, Tiếng Việt, Español, Français, Deutsch and Português. English holds every key and anything a translation is missing falls back to it. Labels step down through four baked font sizes to fit their box.",

        ns_eyebrow: "No strings",
        ns_title: "Nothing to buy, <em>nothing behind a paywall</em>.",
        ns_sub: "The game itself runs on the device. Settings and your best depth live in the app's own save file; the only thing that ever leaves the phone is a leaderboard score, and only once you sign in to Google Play Games.",
        ns_ads: "<strong>No ads.</strong> None anywhere in the game, and no ad network in the build.",
        ns_iap: "<strong>No in-app purchases.</strong> The whole hundred depths ship in the download.",
        ns_acct: "<strong>Signing in is optional.</strong> Every depth, boon and lord is playable without an account — Play Games only adds the leaderboards and the achievements.",
        ns_offline: "<strong>Plays with the connection off.</strong> The app asks for the internet permission so it can reach Play Games; drop the connection and the game plays exactly the same, minus posting a score.",
        ns_readpolicy: "Read the privacy policy",

        faq1_q: "Which Android versions does it run on?",
        faq1_a: "Android 7.0 and up, on arm64-v8a and armeabi-v7a. Google Play splits the bundle per device, so a phone downloads roughly a third of the whole build. It is verified on a Galaxy S8+ at 2220×1080, which is exactly 5× the game's canvas.",
        faq2_q: "Does it need an internet connection?",
        faq2_a: "Not to play. The app declares the internet permission because it talks to Google Play Games for the leaderboards and achievements, but every depth, boon and lord works with the connection off — you simply do not post a score while it is.",
        faq2b_q: "What is sent to Google Play Games?",
        faq2b_a: "Three leaderboard scores — deepest descent, richest run and fastest descent — and progress on eight achievements, tied to your own Play Games profile and handled by Google under its own privacy policy. None of it happens unless you sign in, and nothing else leaves the phone.",
        faq3_q: "Is there a save between runs?",
        faq3_a: "Only your settings and the deepest depth you have reached. A run itself has no checkpoint: death resets you to depth one with the levels, boons and gold gone. That is the roguelite part. Signed in, your best depth, richest run and fastest descent also go to the leaderboards.",
        faq4_q: "Can I play it with a gamepad, or on a desktop?",
        faq4_a: "Yes. Keyboard and gamepad bindings are first-class, and the on-screen pads can be forced off under <em>Options → Touch pad</em>. The project runs on the GL Compatibility renderer at a base viewport that scales by whole pixels, so it stays crisp on a handheld or a desktop.",
        faq5_q: "How violent is it?",
        faq5_a: "Fantasy violence with pixel-art blood effects, and nothing else sensitive. That lands around ESRB Teen / PEGI 12 / IARC 12+, and 13+ is the natural audience.",
        faq6_q: "Where can I get a build right now?",
        faq6_a: "The Play listing is still in review. Until it is live, ask through the contact details on the AIBachKhoa home page and we will send you an APK to sideload.",

        cta_title: "The blade fell a long way down.",

        footer_desc: "Building practical AI tools for developers and businesses.",
        footer_game: "The game",
        footer_prod: "Other products",
        footer_comp: "Company",
        footer_about: "About",
        footer_services: "Services",
        footer_contact: "Contact",
        footer_rights: "All rights reserved.",

        // ---- privacy policy page ----
        pol_page_title: "Privacy Policy — Dungeon of the Fallen Blade | AIBachKhoa",
        pol_meta_desc: "How Dungeon of the Fallen Blade handles information: what stays on your device, what Google Play Games receives when you sign in, and why the app asks for the internet permission.",
        pol_eyebrow: "Legal",
        pol_title: "Privacy Policy",
        pol_game: "Dungeon of the Fallen Blade",
        pol_updated: "Last updated: June 09, 2025",
        pol_lead: "This Privacy Policy explains how Dungeon of the Fallen Blade (\"we\", \"our\", or \"us\") collects, uses, and protects your information when you use our mobile application Dungeon of the Fallen Blade (the \"App\"). We are committed to protecting your privacy and complying with applicable data protection laws, including the General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA), where applicable.",
        pol_toc: "On this page",
        pol_back: "Back to the game",

        pol_h_intro: "Introduction",
        pol_intro: "Dungeon of the Fallen Blade is a 2D pixel-art action roguelite for mobile: a hundred procedurally generated depths, a sword, a bow and a dodge roll, played on your own device, with optional leaderboards and achievements through Google Play Games Services.",

        pol_h_defs: "Interpretation and Definitions",
        pol_h_interp: "Interpretation",
        pol_interp: "The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.",
        pol_h_defs2: "Definitions",
        pol_defs_lead: "For the purposes of this Privacy Policy:",
        pol_d_account: "<strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.",
        pol_d_affiliate: "<strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where \"control\" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.",
        pol_d_app: "<strong>Application</strong> refers to App, the software program provided by the Company.",
        pol_d_company: "<strong>Company</strong> (referred to as either \"the Company\", \"We\", \"Us\" or \"Our\" in this Agreement) refers to App.",
        pol_d_country: "<strong>Country</strong> refers to: Vietnam.",
        pol_d_device: "<strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.",
        pol_d_personal: "<strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.",
        pol_d_service: "<strong>Service</strong> refers to the Application.",
        pol_d_provider: "<strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.",
        pol_d_usage: "<strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).",
        pol_d_you: "<strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.",

        pol_h_collect: "Collecting and Using Your Personal Data",
        pol_h_types: "Types of Data Collected",
        pol_h_personal: "Personal Data",
        pol_personal: "While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:",
        pol_personal_1: "Email address",
        pol_personal_2: "Usage Data",
        pol_h_usage: "Usage Data",
        pol_usage_lead: "Usage Data is collected automatically when using the Service. Specifically,",
        pol_usage_dev_t: "Device Information",
        pol_usage_dev_1: "Device model, manufacturer, operating system, hardware identifiers (e.g., IMEI, Android ID, Advertising ID).",
        pol_usage_dev_2: "Network status and type (e.g., Wi-Fi, mobile).",
        pol_usage_app_t: "App Usage Data",
        pol_usage_app_1: "Frequency and duration of app usage.",
        pol_usage_app_2: "Actions taken within the app.",
        pol_usage_app_3: "Crash logs and performance metrics.",
        pol_usage_sec_t: "Security-Related Data",
        pol_usage_sec_1: "Scanned app package names and basic metadata to detect malicious behavior.",
        pol_usage_sec_2: "Threat detection logs (anonymous or aggregated).",
        pol_usage_note: "<strong>Note:</strong> We do not collect personal files (e.g., photos, videos, contacts, messages) unless explicitly granted and clearly stated.",
        pol_usage_p1: "Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.",
        pol_usage_p2: "When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.",
        pol_usage_p3: "We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.",

        pol_h_sharing: "Sharing Data with Third Parties",
        pol_sharing_1: "The App integrates <strong>Google Play Games Services</strong> so that it can offer leaderboards and achievements. This is the only third-party SDK in the App. Signing in to Play Games is optional and is never required to play.",
        pol_sharing_2: "If You do sign in, the App sends Google three leaderboard scores — deepest descent, richest run and fastest descent — together with Your progress on eight achievements, tied to Your own Play Games profile. Google processes that data as an independent controller under its own privacy policy. If You do not sign in, nothing is sent.",
        pol_sharing_3: "We do not sell user data, and we do not share it with anyone beyond what is described above. No advertising, analytics or tracking SDK is present in the App.",

        pol_h_perm: "Permissions and Network Access",
        pol_perm_1: "The App declares the Android <code>INTERNET</code> permission. It needs that permission for one purpose: reaching Google Play Games Services for the leaderboards and achievements described above.",
        pol_perm_2: "The game itself does not require a connection. Every call to Play Games is skipped when You are not signed in, and a run plays identically with the connection off — You simply do not post a score while it is. The App requests no other sensitive permission: no location, no contacts, no storage access to Your personal files.",

        pol_h_storage: "Data Storage and Deletion",
        pol_storage_1: "We operate no servers of our own and do not collect or store user data on them. Everything the game needs in order to run — Your settings and Your best-depth record — is processed and stored locally on Your device. You can delete it by uninstalling the application or using the data deletion functions built into the application (if available).",
        pol_storage_2: "The leaderboard scores and achievement progress described above are the exception: they are held by Google Play Games Services, not by us. You can review or remove them through Your Google Play Games account settings.",

        pol_h_sensitive: "Sensitive Data",
        pol_sensitive_lead: "Dungeon of the Fallen Blade does not collect any sensitive user data, including but not limited to:",
        pol_sensitive_1: "Location information",
        pol_sensitive_2: "Contacts",
        pol_sensitive_3: "Messages",
        pol_sensitive_4: "Health data",
        pol_sensitive_5: "Financial information",
        pol_sensitive_end: "We are committed to not accessing, collecting or processing any sensitive user data.",

        pol_h_control: "User Control",
        pol_control: "You can uninstall the app at any time to stop all data access.",

        pol_h_use: "Use of Your Personal Data",
        pol_use_lead: "The Company may use Personal Data for the following purposes:",
        pol_use_1: "<strong>To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.",
        pol_use_2: "<strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.",
        pol_use_3: "<strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.",
        pol_use_4: "To provide You with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.",
        pol_use_5: "<strong>To manage Your requests:</strong> To attend and manage Your requests to Us.",
        pol_use_6: "<strong>For business transfers:</strong> We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.",
        pol_use_7: "<strong>For other purposes:</strong> We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.",
        pol_share_lead: "We may share Your personal information in the following situations:",
        pol_share_1: "<strong>With Service Providers:</strong> We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.",
        pol_share_2: "<strong>For business transfers:</strong> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.",
        pol_share_3: "<strong>With Affiliates:</strong> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.",
        pol_share_4: "<strong>With business partners:</strong> We may share Your information with Our business partners to offer You certain products, services or promotions.",
        pol_share_5: "<strong>With other users:</strong> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.",
        pol_share_6: "<strong>With Your consent:</strong> We may disclose Your personal information for any other purpose with Your consent.",
        pol_share2_lead: "Otherwise, we may share data:",
        pol_share2_1: "With service providers strictly for analytics or functionality (e.g., crash reporting services).",
        pol_share2_2: "With law enforcement if required by applicable law.",
        pol_share2_3: "In case of a business transfer (merger, acquisition, etc.), in compliance with data protection regulations.",

        pol_h_rights: "User Rights",
        pol_rights_lead: "Users have the right to:",
        pol_rights_1: "Access and review data processed by the application",
        pol_rights_2: "Edit or update personal information (if applicable)",
        pol_rights_3: "Delete data stored by the application",
        pol_rights_4: "Object to data processing in certain cases",
        pol_rights_end: "To exercise these rights, users can contact us via the contact information provided in the \"Contact Us\" section.",

        pol_h_retention: "Retention of Your Personal Data",
        pol_retention_1: "The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.",
        pol_retention_2: "The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.",

        pol_h_transfer: "Transfer of Your Personal Data",
        pol_transfer_1: "Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.",
        pol_transfer_2: "Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.",
        pol_transfer_3: "The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.",

        pol_h_delete: "Delete Your Personal Data",
        pol_delete_1: "You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.",
        pol_delete_2: "Our Service may give You the ability to delete certain information about You from within the Service.",
        pol_delete_3: "You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.",
        pol_delete_4: "Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.",

        pol_h_disclosure: "Disclosure of Your Personal Data",
        pol_h_business: "Business Transactions",
        pol_business: "If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.",
        pol_h_law: "Law enforcement",
        pol_law: "Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).",
        pol_h_legal: "Other legal requirements",
        pol_legal_lead: "The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:",
        pol_legal_1: "Comply with a legal obligation",
        pol_legal_2: "Protect and defend the rights or property of the Company",
        pol_legal_3: "Prevent or investigate possible wrongdoing in connection with the Service",
        pol_legal_4: "Protect the personal safety of Users of the Service or the public",
        pol_legal_5: "Protect against legal liability",

        pol_h_security: "Security of Your Personal Data",
        pol_security: "The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.",

        pol_h_children: "Children's Privacy",
        pol_children_1: "Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.",
        pol_children_2: "If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.",

        pol_h_links: "Links to Other Websites",
        pol_links_1: "Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.",
        pol_links_2: "We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.",

        pol_h_changes: "Changes to this Privacy Policy",
        pol_changes_1: "We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.",
        pol_changes_2: "We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the \"Last updated\" date at the top of this Privacy Policy.",
        pol_changes_3: "You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.",

        pol_h_contact: "Contact Us",
        pol_contact_lead: "If you have any questions about this Privacy Policy, You can contact us:",
        pol_contact_email: "By email",
        pol_contact_addr: "By address",
        pol_contact_addr_v: "Cau Giay District, Ha Noi, Viet Nam",
        pol_contact_dev: "Developer name",
        pol_contact_dev_v: "tdson"
    },

    vi: {
        page_title: "Dungeon of the Fallen Blade — một trăm tầng ngục, một thanh kiếm | AIBachKhoa",
        meta_desc: "Game hành động roguelite pixel art cho Android: một trăm tầng ngục sinh ngẫu nhiên, hai mươi lãnh chúa, combo kiếm ba nhát, cung tên và lăn né, kèm bảng xếp hạng Google Play Games. Không quảng cáo, không mua trong ứng dụng.",
        aria_lang: "Đổi ngôn ngữ",
        aria_theme: "Đổi giao diện sáng tối",
        aria_menu: "Mở menu",
        skip_link: "Tới nội dung",

        nav_home: "Trang chủ",
        nav_overview: "Tổng quan",
        nav_trailer: "Trailer",
        nav_descent: "Đường xuống",
        nav_combat: "Chiến đấu",
        nav_shots: "Ảnh chụp",
        nav_policy: "Quyền riêng tư",

        hero_kicker: "Android · roguelite hành động pixel",
        hero_title: "Một trăm tầng ngục. <em>Một thanh kiếm</em>.",
        hero_sub: "Một game hành động roguelite pixel art làm thủ công. Chém đường xuống một trăm tầng ngục sinh ngẫu nhiên, nhận một ân huệ ở mỗi cổng, và đối mặt lãnh chúa chờ sẵn ở mỗi tầng thứ năm. Mỗi lượt chơi dựng lại hầm ngục từ đầu — không có gì để học thuộc, tất cả đều phải giành lấy.",
        btn_soon: "Sắp có trên Google Play",
        btn_trailer: "Xem trailer",
        btn_shots: "Xem lối chơi",
        btn_contact: "Hỏi xin bản cài",
        hero_meta: "Mã ứng dụng <code>com.tdson.dungeonblade</code> · nằm ngang, arm64-v8a và armeabi-v7a · English, Tiếng Việt, Español, Français, Deutsch, Português.",

        stat_depths: "Tầng ngục, đều sinh ngẫu nhiên",
        stat_lords: "Lãnh chúa, một con mỗi năm tầng",
        stat_boons: "Ân huệ để chọn giữa các tầng",
        stat_langs: "Ngôn ngữ",
        stat_zero: "Quảng cáo, mua bán, tường phí",

        trailer_eyebrow: "Trailer",
        trailer_title: "Hai phút <em>của đường xuống</em>.",
        trailer_sub: "Dựng từ cảnh quay thật trên điện thoại, lồng nhạc soạn lại từ chính những mô-típ game chơi trong lúc bạn đánh.",
        trailer_play: "Phát trailer",
        trailer_watch: "Xem trên YouTube",

        descent_eyebrow: "Đường xuống",
        descent_title: "Hai mươi chương, mỗi chương năm tầng, <em>và một lãnh chúa dưới đáy</em>.",
        descent_sub: "Mỗi chương quyết định màu đá của nó, tần suất một hố là lửa thay vì chông, bản nhạc nào chơi và lũ quái nào tuần tra. Bốn tầng đầu là hầm ngục thường; tầng thứ năm là đấu trường giữ lãnh chúa của chương đó. Vậy nên boss chờ ở tầng 5, 10, 15 … 100.",

        combat_eyebrow: "Chiến đấu",
        combat_title: "Những nhát chém <em>có sức nặng</em>.",
        combat_sub: "Ba cách để giải quyết một căn phòng, và một thanh thể lực buộc bạn phải chọn giữa chúng.",
        c_combo_t: "Combo kiếm ba nhát",
        c_combo_d: "Nối các nhát chém lại và nhát thứ ba thành đòn kết liễu nặng, tầm với xa hơn và đẩy lùi mạnh hơn hai nhát trước. Đứt chuỗi thì phải bắt đầu lại.",
        c_bow_t: "Cung tên cho những trận bạn không muốn lao vào",
        c_bow_d: "Bắn tên tốn thể lực, nên một căn phòng dọn sạch từ xa là căn phòng bạn bước vào mà không còn gì để lăn né. Ân huệ Bao Tên Sâu khiến đánh đổi đó đáng giá hơn.",
        c_roll_t: "Lăn né với khung bất tử thật sự",
        c_roll_d: "Không phải cú lướt với hitbox may rủi — cú lăn cho khung bất tử thật, và tốn thể lực. Lăn xuyên cú lao của lãnh chúa là đòn thủ chính của game.",
        c_move_t: "Di chuyển biết đọc căn phòng",
        c_move_d: "Giữ nút nhảy để lên cao hơn, nhấn lần nữa để nhảy đúp, và nhấn xuống kèm nhảy để thả người xuyên bệ gỗ. Mọi gờ đá trong hầm ngục đều được chứng minh là tới được chỉ bằng chừng đó.",

        controls_title: "Điều khiển",
        controls_sub: "Đúng những phím mà trang HOW TO PLAY ở màn hình tiêu đề liệt kê, và các nút cảm ứng mang chúng lên điện thoại.",
        th_action: "Thao tác",
        th_keyboard: "Bàn phím",
        th_gamepad: "Tay cầm",
        k_move: "Di chuyển",
        g_stick: "Cần trái / phím D-pad",
        k_jump: "Nhảy (nhảy đúp)",
        k_drop: "Thả người xuyên bệ",
        g_downa: "Xuống + A",
        k_attack: "Tấn công (combo 3 nhát)",
        k_lmb: "chuột trái",
        k_bow: "Cung tên",
        k_rmb: "chuột phải",
        k_roll: "Lăn né (khung bất tử)",
        k_potion: "Uống thuốc",
        k_use: "Tương tác (rương, cổng)",
        k_map: "Bản đồ hầm ngục",
        k_pause: "Tạm dừng",

        gen_eyebrow: "Hầm ngục",
        gen_title: "Một tầng ngục không phải hành lang — <em>nó chạy theo bốn hướng</em>.",
        gen_sub: "Bộ sinh bố trí một lưới các phòng 28×16 ô và nối chúng lại theo trái, phải, trên, dưới, rồi khoét mỗi phòng theo một hình mẫu riêng.",
        g_tree_t: "Phòng nối theo cả bốn hướng",
        g_tree_d: "Một cây khung ngẫu nhiên nối mọi căn phòng, nghiêng về những bước dọc để một tầng ngục xếp chồng nhiều như trải rộng. Phòng cạnh nhau trên một hàng có cửa hông; phòng chồng lên nhau có giếng thông — một lỗ xuyên sàn với lối đi thả người và các gờ so le leo ngược lên.",
        g_braid_t: "Vòng lặp và ngõ cụt, không phải một tuyến duy nhất",
        g_braid_d: "Vài cạnh bện được cắt thêm giữa các phòng kề nhau để một tầng ngục không bao giờ là một hành lang. Tỉ lệ giữ thấp và tăng chậm theo độ sâu — quá khoảng một phần tư số cặp thì tầng ngục thôi là một tuyến đường và thành bãi đất trống.",
        g_gate_t: "Một chiếc chìa, một cánh cổng, và lối ra có thể ở bất cứ đâu",
        g_gate_d: "Lối vào là một ngõ cụt ngẫu nhiên còn lối ra là ngõ cụt xa nó nhất — có thể ở trên, dưới, trái hay phải chỗ bạn bắt đầu. Từ tầng 2, cổng dịch chuyển bị niêm sau một cánh cổng chấn song, chìa khoá nằm ở một ngõ cụt khác, có canh gác.",
        g_pit_t: "Hố giết người, nên bộ sinh phải chứng minh đường vòng qua chúng",
        g_pit_d: "Rơi xuống chông hay lửa là chết ngay tại chỗ, cho cả người chơi lẫn thứ đang đuổi theo. Hố bị giới hạn trong tầm một cú nhảy bằng, và bộ kiểm tra đánh dấu mọi ô chết chóc rồi từ chối vạch đường xuyên qua.",
        g_proof_t: "Mọi bố cục đều được chứng minh trước khi dùng",
        g_proof_d: "Một mô hình dè dặt về những gì người chơi thật sự với tới — nhảy bằng và nhảy ba ô, không nhảy đúp, bệ thả người, cú rơi, không ô chết chóc — kiểm tra rằng chìa tới được khi cổng còn đóng, cổng dịch chuyển tới được khi cổng đã mở, và không phòng nào bị bịt kín. Bố cục nào không chứng minh được thì gieo lại.",
        g_audit_t: "Và mọi tầng ngục đều được soát xem có sống nổi không",
        g_audit_d: "Một lượt thứ hai đi hết một trăm tầng, mô phỏng một lượt chơi sạch, rồi gắn cờ tầng nào đánh quá lâu, giết người chơi trong chưa tới ba đòn, chứa hơn hai quái mỗi phòng, hay để lại khoảng hở rộng hơn một cú nhảy bằng. Lượt thứ ba giao từng tầng cho một con bot chơi qua đúng những thao tác nhập liệu thật và báo lại tầng đó có kết thúc được hay không.",

        lord_eyebrow: "Các lãnh chúa",
        lord_title: "Lãnh chúa không phải <em>một con orc to hơn với nhiều máu hơn</em>.",
        lord_sub: "Mỗi con mang một danh sách ngắn các chiêu, mỗi chiêu có hồi chiêu và dải tầm riêng, và nó dùng chiêu đầu tiên vừa hết hồi vừa trong tầm. Chúng vỡ sang giai đoạn hai ở nửa máu; phần lớn vỡ tiếp ở một phần ba, quay lại nhanh hơn, ném loạt dài hơn và gọi viện binh nặng hơn.",
        th_move: "Chiêu",
        th_does: "Nó làm gì",
        m_leap: "Nhảy chồm",
        m_leap_d: "Khuỵu xuống, rồi nhảy tới đúng chỗ bạn đang đứng và đáp xuống thành sóng xung kích. Đây là câu trả lời cho một gờ đá: lãnh chúa không đi bộ tới được thì vẫn tới được.",
        m_charge: "Lao húc",
        m_charge_d: "Lấy đà, rồi lao hết chiều dài đấu trường với hitbox đang bật. Để nó lao vào tường là nó choáng — cú hụt đó là khe hở của bạn.",
        m_quake: "Chấn địa",
        m_quake_d: "Đòn báo trước lâu nhất trong game, vì nó là đòn rộng nhất trong game: quét sạch năm thân mình mặt đất về cả hai phía.",
        m_fan: "Quạt đạn",
        m_fan_d: "Một bức tường đạn trải theo hình cung. Chỉ né ngang thôi thì không thoát.",
        m_mortar: "Cối",
        m_mortar_d: "Những viên đạn ném vòng cầu vượt qua vật che và rơi xuống đúng chỗ bạn đang đứng.",
        m_contact: "Va chạm",
        m_contact_d: "Đứng bên trong những lãnh chúa lớn nhất là đã mất máu rồi.",
        l_rhythm_t: "Một trận đánh không thể chờ cho qua",
        l_rhythm_d: "Các chiêu của lãnh chúa được lệch pha ngay từ đầu, nên nó không dốc hết bộ chiêu trong bốn giây mở màn. Một khoảng nghỉ chung giữa hai chiêu bất kỳ giữ bộ chiêu thành nhịp chứ không thành một chuỗi ghim liền. Và mọi hồi chiêu rút ngắn dần theo thời gian trận đánh, nên núp trên gờ đá chỉ khiến cú nhảy chồm tới sớm hơn.",
        l_size_t: "Kích cỡ suy ra từ máu",
        l_size_d: "Một thứ trông to bao nhiêu là nó chịu đòn được bấy nhiêu, và phép so sánh đó vẫn đúng qua những tấm sprite vẽ ở độ phân giải khác nhau. Hai mươi lãnh chúa dựng từ bảy bộ khung họ hàng nhân với đặc tả riêng từng con: kích cỡ, màu, máu, tầm với, loạt đạn và tiếng gầm khi trúng đòn.",
        l_arena_t: "Bốn kiểu đấu trường, kiểm tra bằng tay",
        l_arena_d: "Đấu trường có bốn kiểu gờ đá dài dần, nên hai mươi trận không diễn ra trong cùng một gian sảnh sơn lại. Đấu trường bỏ qua bộ kiểm tra thường, nên từng tầng gờ được đối chiếu với 6,08 ô mà một cú nhảy đúp thật sự vượt được.",

        boon_eyebrow: "Ân huệ",
        boon_title: "Một lựa chọn <em>ở mỗi cánh cổng</em>.",
        boon_sub: "Lên cấp khi hạ quái, rồi nhận một ân huệ trên đường xuống. Ba lựa chọn được đưa ra, một là của bạn — và càng xuống sâu, cái giá càng lớn.",
        b_vit: "+25 máu tối đa và hồi đầy",
        b_might: "+4 sức tấn công",
        b_swift: "+12% tốc độ và +20 thể lực",
        b_keen: "+10% tỉ lệ chí mạng",
        b_leech: "Hồi 8% sát thương bạn gây ra",
        b_ward: "Nhận ít hơn 12% sát thương",
        b_quiver: "+60% sát thương mũi tên",
        b_flask: "+2 bình thuốc và hồi máu mạnh hơn",
        boon_death: "<strong>Chết là hết lượt.</strong> Không có điểm lưu và không gì hồi sinh ở chỗ bạn ngã xuống — đường duy nhất từ màn hình kết quả quay lại hầm ngục là về tầng một, mất sạch cấp độ, ân huệ và vàng.",

        phone_eyebrow: "Làm cho điện thoại",
        phone_title: "Điều khiển cảm ứng <em>vừa giữ hướng vừa chém</em>.",
        phone_sub: "Một cần analog nổi ở nửa trái màn hình và một cụm nút gọn ở góc dưới bên phải: chém, nhảy, bắn cung, lăn né, uống thuốc, cộng một nút <em>dùng</em> chỉ hiện ra khi đứng cạnh rương hay cổng.",
        p_multi: "<strong>Mọi nút đều đa chạm.</strong> Giữ một hướng, chém và nhảy cùng một lúc. Vùng chạm rộng hơn phần hình khoảng 30% nên vẫn dễ bấm trúng.",
        p_wide: "<strong>Màn hình dài được nhìn rộng hơn, không phải viền đen.</strong> Khung nhìn 384×216 cố định chiều cao và nới chiều rộng để lấp kín máy, còn HUD tự neo lại khi xoay máy.",
        p_pixel: "<strong>Pixel nguyên vẹn trên máy thật.</strong> 1920×1080 đúng bằng 5× khung vẽ, nên trên máy 2220×1080 phần hình rơi vào pixel nguyên, không bị nội suy.",
        p_auto: "<strong>Tự bật, và bật tắt được.</strong> Các nút tự bật trên Android, iOS hay bất cứ máy nào báo có màn hình cảm ứng; <em>Options → Touch pad</em> xoay vòng auto / on / off. Tay cầm và bàn phím vẫn dùng được xuyên suốt.",

        gal_eyebrow: "Ảnh chụp",
        gal_title: "Ảnh chụp thẳng, <em>không dàn dựng</em>.",
        gal_sub: "Mọi khung hình ở đây đều chụp từ bản game đang chạy ở 1920×1080 — gấp năm lần khung vẽ của chính game, nên pixel vẫn vuông.",
        s1_title: "Màn hình tiêu đề",
        s1_cap: "Một đoạn intro có thương hiệu chạy trước; bấm phím, bấm chuột hay chạm đều bỏ qua được. Độ sâu kỷ lục và số lượt chơi nằm dưới menu.",
        s2_title: "Combo ba nhát",
        s2_cap: "Cần điều khiển bên trái, cụm nút dưới phải, còn HUD mang máu, thể lực, cấp độ, vàng, thuốc và tầng ngục bạn đang ở.",
        s3_title: "Một tầng ngục dựng mới",
        s3_cap: "Không gì ở đây được vẽ tay. Nền đất, gờ đá, vực sâu và chỗ lũ quái đứng đều được gieo cho lượt chơi này và chứng minh trước khi bạn nhìn thấy.",
        s4_title: "Lăn xuyên một đòn",
        s4_cap: "Cú lăn mang khung bất tử thật, trả bằng thể lực — khác biệt giữa đọc được đòn đánh và ăn trọn nó.",
        s5_title: "Một tầng ngục tự giới thiệu",
        s5_cap: "Mỗi chương mở màn bằng tên và một dòng dẫn dắt. Ở đấu trường, tấm thẻ nêu tên lãnh chúa đang chờ trong đó.",
        s6_title: "Chọn một ân huệ",
        s6_cap: "Ba trong tám ân huệ được đưa ra ở mỗi cổng. Sinh Lực và Sức Mạnh là lựa chọn an toàn; Khế Ước Máu và Lưỡi Sắc mới là thứ đổi cách bạn đánh.",
        s7_title: "Một đấu trường, và một lãnh chúa",
        s7_cap: "Boss chờ ở mỗi tầng thứ năm. Kích cỡ của nó suy ra từ máu, nên trông nó to bao nhiêu là nó chịu đòn được bấy nhiêu.",
        s8_title: "Giai đoạn hai",
        s8_cap: "Ở nửa máu, lãnh chúa vỡ giai đoạn: nhanh hơn, loạt đạn dài hơn, viện binh nặng hơn. Phần lớn vỡ tiếp ở một phần ba.",

        hood_eyebrow: "Bên trong",
        hood_title: "Dựng bằng Godot, <em>vẽ bằng code</em>.",
        hood_sub: "Godot 4.7, GDScript, bộ dựng hình GL Compatibility, và một khung vẽ 384×216 phóng theo bội số pixel nguyên.",
        h_gen_t: "Gần như mọi tài nguyên đều được sinh ra",
        h_gen_d: "Bộ ô lát, đạo cụ, nền parallax, hiệu ứng chiến đấu, khung HUD, nút cảm ứng, phông bitmap và toàn bộ âm thanh đều ra từ các script Python — 29 hiệu ứng âm thanh và sáu bản nhạc tổng hợp từ dao động chứ không lấy mẫu. Chỉ các tấm sprite nhân vật và mũi tên là hình vẽ sẵn.",
        h_scene_t: "Gần như không có file scene",
        h_scene_d: "Cả game là một node với một script. TileSet, SpriteFrames, hình dạng va chạm và giao diện đều dựng lúc chạy, nên không có gì phải giữ đồng bộ giữa trình biên tập và code.",
        h_font_t: "Một phông 5×7 gánh được tiếng Việt",
        h_font_d: "Ký tự có dấu được ghép từ chữ gốc cộng các dấu tổ hợp trên khung 7×13 thay vì vẽ tay, nên một chữ hoa với hai dấu phía trên vẫn vừa. Một bộ kiểm tra đo mọi chuỗi đã dịch so với cái hộp mà giao diện dành cho nó, dùng đúng số đo phông thật, và báo lỗi nếu có chuỗi không vừa.",
        h_lang_t: "Sáu ngôn ngữ, tiếng Anh là gốc",
        h_lang_d: "English, Tiếng Việt, Español, Français, Deutsch và Português. Tiếng Anh giữ đủ mọi khoá và bất cứ chuỗi nào bản dịch thiếu đều rơi về nó. Nhãn chữ tự hạ dần qua bốn cỡ phông đã nướng sẵn cho vừa hộp.",

        ns_eyebrow: "Không ràng buộc",
        ns_title: "Không có gì để mua, <em>không có gì chặn sau tường phí</em>.",
        ns_sub: "Bản thân game chạy trên thiết bị. Cài đặt và kỷ lục độ sâu nằm trong file lưu của chính ứng dụng; thứ duy nhất rời khỏi máy là điểm bảng xếp hạng, và chỉ khi bạn đăng nhập Google Play Games.",
        ns_ads: "<strong>Không quảng cáo.</strong> Không có chỗ nào trong game, và không có mạng quảng cáo nào trong bản dựng.",
        ns_iap: "<strong>Không mua trong ứng dụng.</strong> Trọn một trăm tầng nằm sẵn trong bản tải về.",
        ns_acct: "<strong>Đăng nhập là tuỳ chọn.</strong> Mọi tầng ngục, ân huệ và lãnh chúa đều chơi được mà không cần tài khoản — Play Games chỉ thêm bảng xếp hạng và thành tựu.",
        ns_offline: "<strong>Tắt mạng vẫn chơi được.</strong> Ứng dụng xin quyền internet để nói chuyện với Play Games; ngắt kết nối thì game vẫn chạy y hệt, chỉ là không gửi điểm lên được.",
        ns_readpolicy: "Đọc chính sách quyền riêng tư",

        faq1_q: "Nó chạy trên phiên bản Android nào?",
        faq1_a: "Android 7.0 trở lên, trên arm64-v8a và armeabi-v7a. Google Play tách gói theo từng máy, nên điện thoại chỉ tải khoảng một phần ba cả bản dựng. Đã kiểm chứng trên Galaxy S8+ ở 2220×1080, đúng bằng 5× khung vẽ của game.",
        faq2_q: "Có cần kết nối mạng không?",
        faq2_a: "Không cần để chơi. Ứng dụng khai quyền internet vì nó nói chuyện với Google Play Games để lo bảng xếp hạng và thành tựu, nhưng mọi tầng ngục, ân huệ và lãnh chúa đều chạy bình thường khi tắt mạng — chỉ là lúc đó bạn không gửi điểm lên được.",
        faq2b_q: "Những gì được gửi lên Google Play Games?",
        faq2b_a: "Ba loại điểm bảng xếp hạng — độ sâu nhất, lượt chơi giàu nhất và lượt xuống nhanh nhất — cùng tiến độ của tám thành tựu, gắn với hồ sơ Play Games của chính bạn và do Google xử lý theo chính sách quyền riêng tư của họ. Không có gì trong số đó xảy ra nếu bạn không đăng nhập, và ngoài chúng ra không gì rời khỏi máy.",
        faq3_q: "Có lưu tiến trình giữa các lượt chơi không?",
        faq3_a: "Chỉ cài đặt và tầng sâu nhất bạn từng tới. Bản thân một lượt chơi không có điểm lưu: chết là về tầng một, mất sạch cấp độ, ân huệ và vàng. Đó chính là phần roguelite. Nếu đã đăng nhập, độ sâu nhất, lượt chơi giàu nhất và lượt xuống nhanh nhất cũng được gửi lên bảng xếp hạng.",
        faq4_q: "Chơi bằng tay cầm hay trên máy tính được không?",
        faq4_a: "Được. Phím bàn phím và tay cầm đều là công dân hạng nhất, còn nút cảm ứng có thể tắt hẳn ở <em>Options → Touch pad</em>. Dự án chạy trên bộ dựng hình GL Compatibility với khung nhìn gốc phóng theo bội số pixel nguyên, nên vẫn sắc nét trên máy cầm tay hay máy bàn.",
        faq5_q: "Mức độ bạo lực thế nào?",
        faq5_a: "Bạo lực kiểu giả tưởng với hiệu ứng máu pixel art, và không có gì nhạy cảm khác. Mức đó rơi vào khoảng ESRB Teen / PEGI 12 / IARC 12+, và 13+ là nhóm tuổi tự nhiên.",
        faq6_q: "Giờ lấy bản cài ở đâu?",
        faq6_a: "Trang Play vẫn đang chờ duyệt. Trước khi nó lên, cứ liên hệ theo thông tin ở trang chủ AIBachKhoa và chúng tôi sẽ gửi bạn file APK để cài tay.",

        cta_title: "Thanh kiếm đã rơi rất sâu.",

        footer_desc: "Xây những công cụ AI thiết thực cho lập trình viên và doanh nghiệp.",
        footer_game: "Về game",
        footer_prod: "Sản phẩm khác",
        footer_comp: "Công ty",
        footer_about: "Giới thiệu",
        footer_services: "Dịch vụ",
        footer_contact: "Liên hệ",
        footer_rights: "Bảo lưu mọi quyền.",

        // ---- privacy policy page ----
        pol_page_title: "Chính sách quyền riêng tư — Dungeon of the Fallen Blade | AIBachKhoa",
        pol_meta_desc: "Dungeon of the Fallen Blade xử lý thông tin ra sao: những gì nằm lại trên máy bạn, những gì Google Play Games nhận khi bạn đăng nhập, và vì sao ứng dụng xin quyền internet.",
        pol_eyebrow: "Pháp lý",
        pol_title: "Chính sách quyền riêng tư",
        pol_game: "Dungeon of the Fallen Blade",
        pol_updated: "Cập nhật lần cuối: 09 tháng 6, 2025",
        pol_lead: "Chính sách quyền riêng tư này giải thích cách Dungeon of the Fallen Blade (\"chúng tôi\") thu thập, sử dụng và bảo vệ thông tin của bạn khi bạn dùng ứng dụng di động Dungeon of the Fallen Blade (\"Ứng dụng\"). Chúng tôi cam kết bảo vệ quyền riêng tư của bạn và tuân thủ các luật bảo vệ dữ liệu hiện hành, bao gồm Quy định chung về bảo vệ dữ liệu (GDPR) và Đạo luật quyền riêng tư của người tiêu dùng California (CCPA), ở nơi chúng được áp dụng.",
        pol_toc: "Trên trang này",
        pol_back: "Quay lại trang game",

        pol_h_intro: "Giới thiệu",
        pol_intro: "Dungeon of the Fallen Blade là một game hành động roguelite pixel art 2D cho di động: một trăm tầng ngục sinh ngẫu nhiên, một thanh kiếm, một cây cung và một cú lăn né, chơi trên chính thiết bị của bạn, kèm bảng xếp hạng và thành tựu tuỳ chọn qua Google Play Games Services.",

        pol_h_defs: "Cách hiểu và định nghĩa",
        pol_h_interp: "Cách hiểu",
        pol_interp: "Những từ có chữ cái đầu viết hoa mang nghĩa được định nghĩa theo các điều kiện dưới đây. Các định nghĩa sau có cùng ý nghĩa dù xuất hiện ở dạng số ít hay số nhiều.",
        pol_h_defs2: "Định nghĩa",
        pol_defs_lead: "Trong phạm vi Chính sách quyền riêng tư này:",
        pol_d_account: "<strong>Tài khoản</strong> nghĩa là một tài khoản riêng được tạo để Bạn truy cập Dịch vụ của chúng tôi hoặc một phần của Dịch vụ.",
        pol_d_affiliate: "<strong>Công ty liên kết</strong> nghĩa là một pháp nhân kiểm soát, bị kiểm soát bởi hoặc chịu chung sự kiểm soát với một bên, trong đó \"kiểm soát\" nghĩa là sở hữu từ 50% trở lên cổ phần, phần vốn góp hoặc chứng khoán khác có quyền biểu quyết bầu ban giám đốc hoặc cơ quan quản lý khác.",
        pol_d_app: "<strong>Ứng dụng</strong> chỉ App, chương trình phần mềm do Công ty cung cấp.",
        pol_d_company: "<strong>Công ty</strong> (được gọi là \"Công ty\", \"Chúng tôi\" trong Thoả thuận này) chỉ App.",
        pol_d_country: "<strong>Quốc gia</strong> chỉ: Việt Nam.",
        pol_d_device: "<strong>Thiết bị</strong> nghĩa là bất kỳ thiết bị nào có thể truy cập Dịch vụ, chẳng hạn máy tính, điện thoại di động hoặc máy tính bảng.",
        pol_d_personal: "<strong>Dữ liệu cá nhân</strong> là bất kỳ thông tin nào liên quan đến một cá nhân đã được xác định hoặc có thể xác định.",
        pol_d_service: "<strong>Dịch vụ</strong> chỉ Ứng dụng.",
        pol_d_provider: "<strong>Nhà cung cấp dịch vụ</strong> nghĩa là bất kỳ cá nhân hay pháp nhân nào xử lý dữ liệu thay mặt Công ty. Nó chỉ các công ty hoặc cá nhân bên thứ ba được Công ty thuê để hỗ trợ Dịch vụ, cung cấp Dịch vụ thay mặt Công ty, thực hiện các công việc liên quan đến Dịch vụ hoặc giúp Công ty phân tích cách Dịch vụ được sử dụng.",
        pol_d_usage: "<strong>Dữ liệu sử dụng</strong> chỉ dữ liệu được thu thập tự động, hoặc sinh ra từ việc dùng Dịch vụ hoặc từ chính hạ tầng của Dịch vụ (ví dụ, thời lượng của một lượt truy cập trang).",
        pol_d_you: "<strong>Bạn</strong> nghĩa là cá nhân truy cập hoặc sử dụng Dịch vụ, hoặc công ty, hoặc pháp nhân khác mà cá nhân đó đang truy cập hoặc sử dụng Dịch vụ thay mặt, tuỳ trường hợp.",

        pol_h_collect: "Thu thập và sử dụng dữ liệu cá nhân của bạn",
        pol_h_types: "Các loại dữ liệu được thu thập",
        pol_h_personal: "Dữ liệu cá nhân",
        pol_personal: "Khi dùng Dịch vụ của chúng tôi, Chúng tôi có thể đề nghị Bạn cung cấp một số thông tin định danh cá nhân có thể dùng để liên hệ hoặc nhận diện Bạn. Thông tin định danh cá nhân có thể bao gồm, nhưng không giới hạn ở:",
        pol_personal_1: "Địa chỉ email",
        pol_personal_2: "Dữ liệu sử dụng",
        pol_h_usage: "Dữ liệu sử dụng",
        pol_usage_lead: "Dữ liệu sử dụng được thu thập tự động khi dùng Dịch vụ. Cụ thể,",
        pol_usage_dev_t: "Thông tin thiết bị",
        pol_usage_dev_1: "Kiểu máy, nhà sản xuất, hệ điều hành, định danh phần cứng (ví dụ IMEI, Android ID, Advertising ID).",
        pol_usage_dev_2: "Trạng thái và loại kết nối mạng (ví dụ Wi-Fi, di động).",
        pol_usage_app_t: "Dữ liệu sử dụng ứng dụng",
        pol_usage_app_1: "Tần suất và thời lượng dùng ứng dụng.",
        pol_usage_app_2: "Các thao tác thực hiện trong ứng dụng.",
        pol_usage_app_3: "Nhật ký sự cố và số đo hiệu năng.",
        pol_usage_sec_t: "Dữ liệu liên quan đến bảo mật",
        pol_usage_sec_1: "Tên gói của ứng dụng được quét và siêu dữ liệu cơ bản để phát hiện hành vi độc hại.",
        pol_usage_sec_2: "Nhật ký phát hiện mối đe doạ (ẩn danh hoặc tổng hợp).",
        pol_usage_note: "<strong>Lưu ý:</strong> Chúng tôi không thu thập tệp cá nhân (ví dụ ảnh, video, danh bạ, tin nhắn) trừ khi được cấp quyền rõ ràng và nêu rõ.",
        pol_usage_p1: "Dữ liệu sử dụng có thể bao gồm những thông tin như địa chỉ Giao thức Internet của Thiết bị (ví dụ địa chỉ IP), loại trình duyệt, phiên bản trình duyệt, những trang trong Dịch vụ mà Bạn ghé thăm, thời gian và ngày truy cập, thời gian ở lại các trang đó, định danh thiết bị duy nhất và dữ liệu chẩn đoán khác.",
        pol_usage_p2: "Khi Bạn truy cập Dịch vụ bằng hoặc thông qua một thiết bị di động, Chúng tôi có thể thu thập tự động một số thông tin, bao gồm nhưng không giới hạn ở loại thiết bị di động Bạn dùng, ID duy nhất của thiết bị, địa chỉ IP của thiết bị, hệ điều hành di động, loại trình duyệt Internet di động Bạn dùng, định danh thiết bị duy nhất và dữ liệu chẩn đoán khác.",
        pol_usage_p3: "Chúng tôi cũng có thể thu thập thông tin mà trình duyệt của Bạn gửi đi mỗi khi Bạn ghé thăm Dịch vụ hoặc khi Bạn truy cập Dịch vụ bằng hoặc thông qua một thiết bị di động.",

        pol_h_sharing: "Chia sẻ dữ liệu với bên thứ ba",
        pol_sharing_1: "Ứng dụng có tích hợp <strong>Google Play Games Services</strong> để cung cấp bảng xếp hạng và thành tựu. Đây là SDK bên thứ ba duy nhất trong Ứng dụng. Việc đăng nhập Play Games là tuỳ chọn và không bao giờ bắt buộc để chơi.",
        pol_sharing_2: "Nếu Bạn có đăng nhập, Ứng dụng gửi cho Google ba loại điểm bảng xếp hạng — độ sâu nhất, lượt chơi giàu nhất và lượt xuống nhanh nhất — cùng tiến độ của tám thành tựu, gắn với hồ sơ Play Games của chính Bạn. Google xử lý dữ liệu đó với tư cách một bên kiểm soát độc lập, theo chính sách quyền riêng tư của họ. Nếu Bạn không đăng nhập, không có gì được gửi đi.",
        pol_sharing_3: "Chúng tôi không bán dữ liệu người dùng, và không chia sẻ nó với ai ngoài phạm vi mô tả ở trên. Trong Ứng dụng không có SDK quảng cáo, đo đạc hay theo dõi nào.",

        pol_h_perm: "Quyền truy cập và kết nối mạng",
        pol_perm_1: "Ứng dụng khai quyền <code>INTERNET</code> của Android. Quyền này chỉ phục vụ một mục đích: kết nối tới Google Play Games Services cho bảng xếp hạng và thành tựu nêu trên.",
        pol_perm_2: "Bản thân game không cần kết nối. Mọi lệnh gọi tới Play Games đều được bỏ qua khi Bạn chưa đăng nhập, và một lượt chơi diễn ra y hệt khi tắt mạng — chỉ là lúc đó Bạn không gửi điểm lên được. Ứng dụng không xin bất kỳ quyền nhạy cảm nào khác: không vị trí, không danh bạ, không truy cập kho tệp cá nhân của Bạn.",

        pol_h_storage: "Lưu trữ và xoá dữ liệu",
        pol_storage_1: "Chúng tôi không vận hành máy chủ nào của riêng mình và không thu thập hay lưu dữ liệu người dùng trên đó. Mọi thứ game cần để chạy — cài đặt và kỷ lục độ sâu của Bạn — đều được xử lý và lưu ngay trên thiết bị của Bạn. Bạn có thể xoá bằng cách gỡ cài đặt ứng dụng hoặc dùng chức năng xoá dữ liệu tích hợp trong ứng dụng (nếu có).",
        pol_storage_2: "Điểm bảng xếp hạng và tiến độ thành tựu nêu trên là ngoại lệ: chúng do Google Play Games Services giữ, không phải chúng tôi. Bạn có thể xem lại hoặc xoá chúng trong phần cài đặt tài khoản Google Play Games của mình.",

        pol_h_sensitive: "Dữ liệu nhạy cảm",
        pol_sensitive_lead: "Dungeon of the Fallen Blade không thu thập bất kỳ dữ liệu nhạy cảm nào của người dùng, bao gồm nhưng không giới hạn ở:",
        pol_sensitive_1: "Thông tin vị trí",
        pol_sensitive_2: "Danh bạ",
        pol_sensitive_3: "Tin nhắn",
        pol_sensitive_4: "Dữ liệu sức khoẻ",
        pol_sensitive_5: "Thông tin tài chính",
        pol_sensitive_end: "Chúng tôi cam kết không truy cập, thu thập hay xử lý bất kỳ dữ liệu nhạy cảm nào của người dùng.",

        pol_h_control: "Quyền kiểm soát của người dùng",
        pol_control: "Bạn có thể gỡ cài đặt ứng dụng bất cứ lúc nào để dừng mọi truy cập dữ liệu.",

        pol_h_use: "Sử dụng dữ liệu cá nhân của bạn",
        pol_use_lead: "Công ty có thể dùng Dữ liệu cá nhân cho những mục đích sau:",
        pol_use_1: "<strong>Để quản lý Tài khoản của Bạn:</strong> quản lý việc đăng ký của Bạn với tư cách người dùng Dịch vụ. Dữ liệu cá nhân Bạn cung cấp có thể cho Bạn quyền dùng những chức năng khác nhau của Dịch vụ dành cho người dùng đã đăng ký.",
        pol_use_2: "<strong>Để thực hiện hợp đồng:</strong> việc xây dựng, tuân thủ và thực hiện hợp đồng mua bán sản phẩm, hàng hoá hoặc dịch vụ Bạn đã mua, hoặc bất kỳ hợp đồng nào khác với Chúng tôi qua Dịch vụ.",
        pol_use_3: "<strong>Để liên hệ với Bạn:</strong> Liên hệ với Bạn qua email, điện thoại, SMS hoặc các hình thức liên lạc điện tử tương đương khác, chẳng hạn thông báo đẩy của ứng dụng di động về các bản cập nhật hoặc thông tin liên quan tới chức năng, sản phẩm hoặc dịch vụ đã ký kết, kể cả các bản cập nhật bảo mật, khi cần thiết hoặc hợp lý cho việc triển khai.",
        pol_use_4: "Để cung cấp cho Bạn tin tức, ưu đãi đặc biệt và thông tin chung về hàng hoá, dịch vụ và sự kiện khác mà chúng tôi cung cấp tương tự những thứ bạn đã mua hoặc từng hỏi tới, trừ khi Bạn đã chọn không nhận những thông tin đó.",
        pol_use_5: "<strong>Để xử lý yêu cầu của Bạn:</strong> Tiếp nhận và xử lý các yêu cầu Bạn gửi tới Chúng tôi.",
        pol_use_6: "<strong>Cho việc chuyển giao doanh nghiệp:</strong> Chúng tôi có thể dùng thông tin của Bạn để đánh giá hoặc tiến hành sáp nhập, thoái vốn, tái cấu trúc, tổ chức lại, giải thể hoặc việc bán, chuyển giao khác một phần hay toàn bộ tài sản của Chúng tôi, dù là hoạt động liên tục hay trong khuôn khổ phá sản, thanh lý hoặc thủ tục tương tự, trong đó Dữ liệu cá nhân mà Chúng tôi nắm giữ về người dùng Dịch vụ nằm trong khối tài sản được chuyển giao.",
        pol_use_7: "<strong>Cho các mục đích khác:</strong> Chúng tôi có thể dùng thông tin của Bạn cho các mục đích khác, như phân tích dữ liệu, nhận diện xu hướng sử dụng, xác định hiệu quả các chiến dịch quảng bá và để đánh giá, cải thiện Dịch vụ, sản phẩm, dịch vụ, hoạt động tiếp thị và trải nghiệm của bạn.",
        pol_share_lead: "Chúng tôi có thể chia sẻ thông tin cá nhân của Bạn trong những tình huống sau:",
        pol_share_1: "<strong>Với Nhà cung cấp dịch vụ:</strong> Chúng tôi có thể chia sẻ thông tin cá nhân của Bạn với Nhà cung cấp dịch vụ để theo dõi và phân tích việc sử dụng Dịch vụ, để liên hệ với Bạn.",
        pol_share_2: "<strong>Cho việc chuyển giao doanh nghiệp:</strong> Chúng tôi có thể chia sẻ hoặc chuyển giao thông tin cá nhân của Bạn liên quan tới, hoặc trong quá trình thương lượng, bất kỳ vụ sáp nhập, bán tài sản Công ty, huy động vốn hay mua lại một phần hoặc toàn bộ hoạt động kinh doanh của Chúng tôi cho một công ty khác.",
        pol_share_3: "<strong>Với các Công ty liên kết:</strong> Chúng tôi có thể chia sẻ thông tin của Bạn với các công ty liên kết, trong trường hợp đó chúng tôi sẽ yêu cầu họ tôn trọng Chính sách quyền riêng tư này. Công ty liên kết bao gồm công ty mẹ và mọi công ty con khác, đối tác liên doanh hoặc công ty khác mà Chúng tôi kiểm soát hoặc chịu chung sự kiểm soát.",
        pol_share_4: "<strong>Với đối tác kinh doanh:</strong> Chúng tôi có thể chia sẻ thông tin của Bạn với đối tác kinh doanh để đưa tới Bạn một số sản phẩm, dịch vụ hoặc khuyến mãi.",
        pol_share_5: "<strong>Với người dùng khác:</strong> khi Bạn chia sẻ thông tin cá nhân hoặc tương tác ở các khu vực công khai với người dùng khác, thông tin đó có thể được mọi người dùng xem và có thể được phát tán công khai ra ngoài.",
        pol_share_6: "<strong>Khi Bạn đồng ý:</strong> Chúng tôi có thể tiết lộ thông tin cá nhân của Bạn cho bất kỳ mục đích nào khác khi có sự đồng ý của Bạn.",
        pol_share2_lead: "Ngoài ra, chúng tôi có thể chia sẻ dữ liệu:",
        pol_share2_1: "Với nhà cung cấp dịch vụ, chỉ nhằm phục vụ phân tích hoặc chức năng (ví dụ dịch vụ báo cáo sự cố).",
        pol_share2_2: "Với cơ quan thực thi pháp luật nếu luật hiện hành yêu cầu.",
        pol_share2_3: "Trong trường hợp chuyển giao doanh nghiệp (sáp nhập, mua lại, v.v.), tuân thủ các quy định bảo vệ dữ liệu.",

        pol_h_rights: "Quyền của người dùng",
        pol_rights_lead: "Người dùng có quyền:",
        pol_rights_1: "Truy cập và xem lại dữ liệu do ứng dụng xử lý",
        pol_rights_2: "Sửa hoặc cập nhật thông tin cá nhân (nếu có)",
        pol_rights_3: "Xoá dữ liệu do ứng dụng lưu trữ",
        pol_rights_4: "Phản đối việc xử lý dữ liệu trong một số trường hợp",
        pol_rights_end: "Để thực hiện các quyền này, người dùng có thể liên hệ với chúng tôi qua thông tin trong mục \"Liên hệ\".",

        pol_h_retention: "Thời gian lưu giữ dữ liệu cá nhân của bạn",
        pol_retention_1: "Công ty sẽ chỉ lưu giữ Dữ liệu cá nhân của Bạn trong thời gian cần thiết cho những mục đích nêu trong Chính sách quyền riêng tư này. Chúng tôi sẽ lưu giữ và sử dụng Dữ liệu cá nhân của Bạn ở mức cần thiết để tuân thủ nghĩa vụ pháp lý (ví dụ, nếu chúng tôi buộc phải lưu dữ liệu của bạn để tuân thủ luật hiện hành), giải quyết tranh chấp và thực thi các thoả thuận, chính sách pháp lý của chúng tôi.",
        pol_retention_2: "Công ty cũng sẽ lưu giữ Dữ liệu sử dụng cho mục đích phân tích nội bộ. Dữ liệu sử dụng thường được lưu trong thời gian ngắn hơn, trừ khi dữ liệu này được dùng để tăng cường bảo mật hoặc cải thiện chức năng của Dịch vụ, hoặc Chúng tôi có nghĩa vụ pháp lý phải lưu lâu hơn.",

        pol_h_transfer: "Chuyển dữ liệu cá nhân của bạn",
        pol_transfer_1: "Thông tin của Bạn, bao gồm Dữ liệu cá nhân, được xử lý tại văn phòng hoạt động của Công ty và tại bất kỳ nơi nào khác có mặt các bên tham gia xử lý. Nghĩa là thông tin này có thể được chuyển tới — và lưu trên — những máy tính đặt ngoài bang, tỉnh, quốc gia hoặc khu vực tài phán khác của Bạn, nơi luật bảo vệ dữ liệu có thể khác với nơi Bạn ở.",
        pol_transfer_2: "Việc Bạn đồng ý với Chính sách quyền riêng tư này rồi gửi những thông tin đó thể hiện sự đồng ý của Bạn với việc chuyển giao ấy.",
        pol_transfer_3: "Công ty sẽ thực hiện mọi bước hợp lý cần thiết để bảo đảm dữ liệu của Bạn được xử lý an toàn và đúng Chính sách quyền riêng tư này, và sẽ không chuyển Dữ liệu cá nhân của Bạn tới một tổ chức hay quốc gia nào trừ khi có các biện pháp kiểm soát thoả đáng, bao gồm bảo mật dữ liệu và các thông tin cá nhân khác của Bạn.",

        pol_h_delete: "Xoá dữ liệu cá nhân của bạn",
        pol_delete_1: "Bạn có quyền xoá hoặc yêu cầu Chúng tôi hỗ trợ xoá Dữ liệu cá nhân mà Chúng tôi đã thu thập về Bạn.",
        pol_delete_2: "Dịch vụ của chúng tôi có thể cho Bạn khả năng xoá một số thông tin về Bạn ngay trong Dịch vụ.",
        pol_delete_3: "Bạn có thể cập nhật, sửa đổi hoặc xoá thông tin của mình bất cứ lúc nào bằng cách đăng nhập vào Tài khoản, nếu bạn có, và vào phần cài đặt tài khoản cho phép quản lý thông tin cá nhân. Bạn cũng có thể liên hệ Chúng tôi để yêu cầu truy cập, chỉnh sửa hoặc xoá bất kỳ thông tin cá nhân nào Bạn đã cung cấp cho Chúng tôi.",
        pol_delete_4: "Tuy nhiên, xin lưu ý rằng Chúng tôi có thể cần giữ lại một số thông tin khi có nghĩa vụ pháp lý hoặc cơ sở hợp pháp để làm vậy.",

        pol_h_disclosure: "Tiết lộ dữ liệu cá nhân của bạn",
        pol_h_business: "Giao dịch doanh nghiệp",
        pol_business: "Nếu Công ty tham gia một vụ sáp nhập, mua lại hoặc bán tài sản, Dữ liệu cá nhân của Bạn có thể được chuyển giao. Chúng tôi sẽ thông báo trước khi Dữ liệu cá nhân của Bạn được chuyển đi và chịu sự điều chỉnh của một Chính sách quyền riêng tư khác.",
        pol_h_law: "Thực thi pháp luật",
        pol_law: "Trong một số trường hợp, Công ty có thể buộc phải tiết lộ Dữ liệu cá nhân của Bạn nếu luật yêu cầu hoặc để đáp ứng các yêu cầu hợp lệ của cơ quan công quyền (ví dụ toà án hoặc cơ quan nhà nước).",
        pol_h_legal: "Các yêu cầu pháp lý khác",
        pol_legal_lead: "Công ty có thể tiết lộ Dữ liệu cá nhân của Bạn khi tin tưởng một cách ngay tình rằng hành động đó là cần thiết để:",
        pol_legal_1: "Tuân thủ một nghĩa vụ pháp lý",
        pol_legal_2: "Bảo vệ và bảo toàn quyền hoặc tài sản của Công ty",
        pol_legal_3: "Ngăn chặn hoặc điều tra hành vi sai trái có thể xảy ra liên quan đến Dịch vụ",
        pol_legal_4: "Bảo vệ an toàn cá nhân của Người dùng Dịch vụ hoặc của công chúng",
        pol_legal_5: "Bảo vệ trước trách nhiệm pháp lý",

        pol_h_security: "Bảo mật dữ liệu cá nhân của bạn",
        pol_security: "Bảo mật Dữ liệu cá nhân của Bạn là điều quan trọng với Chúng tôi, nhưng xin nhớ rằng không có phương thức truyền tải nào qua Internet, hay phương thức lưu trữ điện tử nào, an toàn 100%. Dù Chúng tôi nỗ lực dùng những biện pháp được chấp nhận về mặt thương mại để bảo vệ Dữ liệu cá nhân của Bạn, Chúng tôi không thể bảo đảm an toàn tuyệt đối.",

        pol_h_children: "Quyền riêng tư của trẻ em",
        pol_children_1: "Dịch vụ của chúng tôi không hướng tới bất kỳ ai dưới 13 tuổi. Chúng tôi không cố ý thu thập thông tin định danh cá nhân từ bất kỳ ai dưới 13 tuổi. Nếu Bạn là cha mẹ hoặc người giám hộ và biết rằng con Bạn đã cung cấp cho Chúng tôi Dữ liệu cá nhân, xin liên hệ với Chúng tôi. Nếu Chúng tôi phát hiện đã thu thập Dữ liệu cá nhân từ người dưới 13 tuổi mà không có xác nhận đồng ý của cha mẹ, Chúng tôi sẽ tiến hành gỡ thông tin đó khỏi máy chủ của mình.",
        pol_children_2: "Nếu Chúng tôi cần dựa vào sự đồng ý làm cơ sở pháp lý để xử lý thông tin của Bạn và quốc gia của Bạn yêu cầu sự đồng ý từ cha mẹ, Chúng tôi có thể yêu cầu sự đồng ý của cha mẹ Bạn trước khi thu thập và sử dụng thông tin đó.",

        pol_h_links: "Liên kết tới website khác",
        pol_links_1: "Dịch vụ của chúng tôi có thể chứa liên kết tới những website không do Chúng tôi vận hành. Nếu Bạn bấm vào một liên kết bên thứ ba, Bạn sẽ được đưa tới trang của bên thứ ba đó. Chúng tôi khuyên Bạn nên đọc Chính sách quyền riêng tư của mọi trang Bạn ghé thăm.",
        pol_links_2: "Chúng tôi không kiểm soát và không chịu trách nhiệm về nội dung, chính sách quyền riêng tư hay cách làm của bất kỳ trang hoặc dịch vụ bên thứ ba nào.",

        pol_h_changes: "Thay đổi Chính sách quyền riêng tư này",
        pol_changes_1: "Chúng tôi có thể cập nhật Chính sách quyền riêng tư theo thời gian. Chúng tôi sẽ thông báo mọi thay đổi bằng cách đăng Chính sách quyền riêng tư mới trên trang này.",
        pol_changes_2: "Chúng tôi sẽ báo cho Bạn qua email và/hoặc một thông báo nổi bật trên Dịch vụ, trước khi thay đổi có hiệu lực, và cập nhật ngày \"Cập nhật lần cuối\" ở đầu Chính sách quyền riêng tư này.",
        pol_changes_3: "Bạn nên xem lại Chính sách quyền riêng tư này định kỳ để nắm mọi thay đổi. Các thay đổi có hiệu lực khi được đăng trên trang này.",

        pol_h_contact: "Liên hệ",
        pol_contact_lead: "Nếu bạn có bất kỳ câu hỏi nào về Chính sách quyền riêng tư này, bạn có thể liên hệ với chúng tôi:",
        pol_contact_email: "Qua email",
        pol_contact_addr: "Qua địa chỉ",
        pol_contact_addr_v: "Quận Cầu Giấy, Hà Nội, Việt Nam",
        pol_contact_dev: "Tên nhà phát triển",
        pol_contact_dev_v: "tdson"
    }
};

/* Languages offered in the picker, in order.
   'vi' is deliberately left out — add { code: 'vi', label: 'Tiếng Việt' } to show it again. */
const LANGS = [
    { code: 'en', label: 'English' }
];
const DEFAULT_LANG = 'en';
const SHOT_DIR = '/assets/games/dungeon-blade/';

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
    // page. Anything no longer offered — a 'vi' left over from before it was
    // hidden — falls back to English rather than painting a blank page.
    const detectLang = () => {
        const own = localStorage.getItem('dungeon-lang');
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
        localStorage.setItem('dungeon-lang', currentLang);
        updateLanguage(currentLang);
    }));

    // ---------- Screenshot gallery ----------
    const tabs = Array.from(document.querySelectorAll('.dg-gal-tab'));
    const galImg = document.getElementById('gal-img');
    const galTitle = document.getElementById('gal-title');
    const galCap = document.getElementById('gal-cap');

    // Keep the caption in step with both the selected shot and the current
    // language, so switching either one is enough.
    function paintGallery() {
        const active = tabs.find(t => t.classList.contains('is-active'));
        if (!active || !galImg) return;
        const dict = i18n[currentLang] || i18n[DEFAULT_LANG];
        const key = active.dataset.key;
        galImg.src = SHOT_DIR + active.dataset.shot + '.png';
        galImg.alt = 'Dungeon of the Fallen Blade — ' + (dict[key + '_title'] || '');
        if (galTitle) galTitle.textContent = dict[key + '_title'] || '';
        if (galCap) galCap.textContent = dict[key + '_cap'] || '';
    }

    tabs.forEach(tab => tab.addEventListener('click', () => {
        tabs.forEach(t => {
            const on = t === tab;
            t.classList.toggle('is-active', on);
            t.setAttribute('aria-selected', String(on));
        });
        paintGallery();
    }));

    // Warm the neighbouring shots so the first few clicks feel instant.
    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
            tabs.slice(1).forEach(t => { new Image().src = SHOT_DIR + t.dataset.shot + '.png'; });
        });
    }

    updateLanguage(currentLang);

    // ---------- Trailer ----------
    // Nothing is requested from YouTube until someone presses play, so the
    // page stays free of third-party requests on an ordinary visit.
    const player = document.getElementById('trailer-player');
    if (player) {
        const poster = player.querySelector('.dg-video-poster');
        poster && poster.addEventListener('click', () => {
            const id = player.dataset.video;
            if (!id) return;
            const frame = document.createElement('iframe');
            frame.src = 'https://www.youtube-nocookie.com/embed/' + id +
                '?autoplay=1&rel=0&modestbranding=1&playsinline=1';
            frame.title = 'Dungeon of the Fallen Blade — trailer';
            frame.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
            frame.allowFullscreen = true;
            player.replaceChildren(frame);
            frame.focus();
        });
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
