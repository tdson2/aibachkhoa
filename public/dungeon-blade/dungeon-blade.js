/* =========================================================
   Dungeon of the Fallen Blade product page.
   NOTE: this page is English-only. The Vietnamese copy was removed
   from the whole site along with every /vi/ URL, so there is no
   hidden locale left here to switch back on.
   Theme is shared with the rest of the site through the same
   'theme' key; the language choice is stored separately so it does
   not fight with the picker on the landing page.
   ========================================================= */

const i18n = {
    en: {
        page_title: "Dungeon of the Fallen Blade — pixel roguelite | AIBachKhoa",
        meta_desc: "A hand-made pixel-art action roguelite for Android: a hundred procedural depths, twenty lords, sword combos, bow and dodge roll. No ads, no purchases.",
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
        gen_sub: "Every depth is built fresh, with rooms joined left, right, up and down — so a floor is ground to move around in, not a line to walk.",
        g_tree_t: "Rooms wired in all four directions",
        g_tree_d: "Rooms sit side by side and stacked on top of one another, so a depth climbs as much as it spreads. Side doors join neighbours on a row; shafts with drop-through walkways and staggered ledges join the floors above and below.",
        g_braid_t: "Loops and dead ends, not one route",
        g_braid_d: "Extra links open between rooms so a floor is never a single corridor. The deeper you go, the more a depth opens out into ground you can move around in rather than a route you follow.",
        g_gate_t: "A key, a gate, and an exit that can be anywhere",
        g_gate_d: "The entrance is a random dead end and the exit is the dead end furthest from it — above, below, left or right of where you start. From depth 2 the portal is sealed behind a barred gate whose key waits in another dead end, guarded.",
        g_pit_t: "Pits kill, and every one of them can be cleared",
        g_pit_d: "Falling into spikes or fire is death on the spot, for you and for anything chasing you. No pit is ever wider than a single jump clears, and no route ever asks you to cross a deadly tile.",
        g_proof_t: "Every floor is guaranteed completable",
        g_proof_d: "No depth reaches you without being checked end to end: the key reachable with the gate shut, the portal reachable with it open, and no room sealed off. A layout that does not hold up is discarded and built again.",
        g_audit_t: "And every depth is checked for pacing",
        g_audit_d: "All hundred depths are reviewed for how a clean run plays out. A floor that would drag, one that could kill too quickly, or one that crowds a room too hard is rebuilt before it ever reaches you.",

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
        l_rhythm_d: "A lord's moves are spaced out at the start rather than thrown at you all at once, and the gaps between them tighten the longer the fight runs. Waiting it out on a ledge only brings the leap sooner.",
        l_size_t: "Size is derived from health",
        l_size_d: "How big a thing looks is how much punishment it will take, and that reading holds for every enemy in the game. Each of the twenty lords has its own size, colour, health, reach, volley and roar.",
        l_arena_t: "Four arena layouts",
        l_arena_d: "Arenas come in four ledge patterns of increasing length, so twenty fights do not all happen in the same hall repainted. Every ledge sits within reach of a double jump.",

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
        p_wide: "<strong>A tall screen gets a wider view, not black bars.</strong> The view keeps its height and widens to fill the device, and the HUD re-anchors itself on rotation.",
        p_pixel: "<strong>Whole pixels on real hardware.</strong> On common phone resolutions the art scales by a whole number, so nothing is softened by resampling.",
        p_auto: "<strong>On automatically, and switchable.</strong> The pads turn on for Android, iOS or anything reporting a touchscreen; <em>Options → Touch pad</em> cycles auto / on / off. Gamepads and keyboards work throughout.",

        gal_eyebrow: "Screenshots",
        gal_title: "Straight captures, <em>no mock-ups</em>.",
        gal_sub: "Every frame here comes straight off the running build at full resolution.",
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


        ns_eyebrow: "No strings",
        ns_title: "Nothing to buy, <em>nothing behind a paywall</em>.",
        ns_sub: "The game itself runs on the device. Settings and your best depth live in the app's own save file; the only thing that ever leaves the phone is a leaderboard score, and only once you sign in to Google Play Games.",
        ns_ads: "<strong>No ads.</strong> None anywhere in the game, and no ad network in the build.",
        ns_iap: "<strong>No in-app purchases.</strong> The whole hundred depths ship in the download.",
        ns_acct: "<strong>Signing in is optional.</strong> Every depth, boon and lord is playable without an account — Play Games only adds the leaderboards and the achievements.",
        ns_offline: "<strong>Plays with the connection off.</strong> The app asks for the internet permission so it can reach Play Games; drop the connection and the game plays exactly the same, minus posting a score.",
        ns_readpolicy: "Read the privacy policy",

        faq1_q: "Which Android versions does it run on?",
        faq1_a: "Android 7.0 and up, on arm64-v8a and armeabi-v7a. Google Play splits the bundle per device, so a phone downloads roughly a third of the whole build.",
        faq2_q: "Does it need an internet connection?",
        faq2_a: "Not to play. The app declares the internet permission because it talks to Google Play Games for the leaderboards and achievements, but every depth, boon and lord works with the connection off — you simply do not post a score while it is.",
        faq2b_q: "What is sent to Google Play Games?",
        faq2b_a: "Three leaderboard scores — deepest descent, richest run and fastest descent — and progress on eight achievements, tied to your own Play Games profile and handled by Google under its own privacy policy. None of it happens unless you sign in, and nothing else leaves the phone.",
        faq3_q: "Is there a save between runs?",
        faq3_a: "Only your settings and the deepest depth you have reached. A run itself has no checkpoint: death resets you to depth one with the levels, boons and gold gone. That is the roguelite part. Signed in, your best depth, richest run and fastest descent also go to the leaderboards.",
        faq4_q: "Can I play it with a gamepad, or on a desktop?",
        faq4_a: "Yes. Keyboard and gamepad bindings are first-class, and the on-screen pads can be forced off under <em>Options → Touch pad</em>. The art scales by whole pixels, so it stays crisp on a handheld or a desktop.",
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
        pol_meta_desc: "How Dungeon of the Fallen Blade handles information: what stays on your device, what Google Play Games receives, and why it needs internet.",
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
    }
};

/* Languages offered in the picker, in order. English only: the picker
   hides itself when there is nothing to pick between. */
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
        // The URL wins: /es/… is the Spanish page whatever the browser
        // or a previous visit would have preferred.
        const fromUrl = window.LangUrl && window.LangUrl.fromPath(supported);
        if (fromUrl) return fromUrl;
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
        const lang = sel.value;
        localStorage.setItem('dungeon-lang', lang);
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
        galImg.src = SHOT_DIR + active.dataset.shot + '.webp';
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
            tabs.slice(1).forEach(t => { new Image().src = SHOT_DIR + t.dataset.shot + '.webp'; });
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
