/* =========================================================
   Novaryn product page + privacy policy.
   NOTE: Vietnamese ("vi") is kept here but left out of the picker,
   the same way it is on the landing page, the BKSafe page and the
   Dungeon of the Fallen Blade page — to show it again, add
   { code: 'vi', label: 'Tiếng Việt' } to LANGS below.
   Theme is shared with the rest of the site through the same
   'theme' key; the language choice is stored separately so it does
   not fight with the picker on the landing page.
   ========================================================= */

const i18n = {
    en: {
        page_title: "Novaryn — one thumb, endless waves | AIBachKhoa",
        meta_desc: "A vertical arcade shoot-'em-up for Android. Drag to fly, the cannon fires itself, and every fifth wave brings a boss with a health bar. Ten ships, three power-ups, no ads, plays offline.",
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

        stat_waves: "Waves — there is no end screen",
        stat_boss: "Waves between bosses",
        stat_gun: "Cannon levels to climb",
        stat_ships: "Ships to fly",
        stat_ads: "Ads, anywhere in the game",

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
        boss_title: "Every fifth wave, <em>something with a name</em>.",
        boss_sub: "Four waves of formations, then a health bar slides across the top of the screen. A boss is not a bigger fighter — it holds position, takes real punishment, and throws a pattern you have to read rather than out-shoot. Learn it once and it stays learned.",
        w_open: "Opening formations",
        w_tight: "Tighter, faster",
        w_press: "The screen fills in",
        w_next: "The next one waiting",
        w_on: "And on, without a ceiling",
        w_rule: "A boss on every fifth",
        boss_read_t: "Read the pattern, not the bullet",
        boss_read_d: "A boss volley arrives as a shape — a fan that widens as it falls, a column that walks across the lane you are standing in. Chasing individual bolts loses. Picking the gap the shape will leave, and being in it early, wins.",
        boss_l1: "<strong>The health bar is the timer.</strong> It only moves while you are firing into the thing, so time spent hiding at the bottom of the screen is time the volleys keep coming for free.",
        boss_l2: "<strong>Close range is the trade.</strong> Your cannon does more work the nearer you sit, and every bolt gets less room to be dodged. Where you settle is the whole fight.",
        boss_l3: "<strong>Ordinary fighters keep coming.</strong> A boss is never alone on the screen, so the safe gap in the volley is often the lane a fighter is about to fly down.",

        gem_eyebrow: "Power-ups",
        gem_title: "Three gems, <em>and one honest trade</em>.",
        gem_sub: "Gems drop where the fighting was. Picking one up means flying into the space you were dodging a second ago — and that trade, made a dozen times a run, is the whole game.",
        gem_p_n: "P — the gold gem",
        gem_p_d: "Upgrades your cannon, up to level 4. The single biggest change to how a run feels, and the reason a good run gets easier rather than harder.",
        gem_s_n: "S — the cyan gem",
        gem_s_d: "A shield bubble that soaks exactly one hit. One mistake forgiven — which is usually one more than you need to reach the next boss.",
        gem_x_n: "+ — the pink gem",
        gem_x_d: "An extra ship on the counter in the top-right corner. The only thing in the game that gives back what a bad second took away.",
        gem_note: "<strong>Nothing here is bought.</strong> Every power-up in Novaryn drops from play. There is no gem sold in the shop, no revive offered after a death, and no advantage available for money — the shop holds ship skins and nothing else.",

        ship_eyebrow: "Ships",
        ship_title: "Ten hulls, <em>all of them cosmetic</em>.",
        ship_sub: "You start in the Aegis Cyan. Everything else in the shop changes how your run looks and nothing about how it plays — no faster ship, no wider cannon, no extra life for money. A leaderboard where the top scores could be bought would not be worth reading.",
        ship_start: "The ship you start in",
        ship_incl: "Included",
        ship_std: "Standard skin",
        ship_pro: "Pro skin",
        ship_shop: "In the shop",
        ship_price_note: "<strong>Prices are the US list.</strong> Google Play shows the shop in your own currency, and a skin you buy outright stays yours for good — on this device and on any other you sign in to with the same Google account.",

        pro_eyebrow: "Novaryn Pro",
        pro_title: "Optional, monthly, <em>and spelled out</em>.",
        pro_sub: "Pro is a subscription that unlocks every ship in the shop while it is active. It is the only recurring charge in the game, it changes nothing about how a run plays, and here is exactly what happens if you stop paying for it.",
        th_q: "The question",
        th_a: "The answer",
        pro_q1: "What it unlocks",
        pro_a1: "Every ship in the shop, standard and Pro alike, for as long as the subscription is active.",
        pro_q2: "What it costs",
        pro_a2: "$4.99 a month on the US list, shown in your own currency at checkout and billed by Google Play.",
        pro_q3: "What it does to a run",
        pro_a3: "Nothing. No extra ship, no stronger cannon, no revive. Pro buys paint.",
        pro_q4: "If you cancel",
        pro_a4: "Ships unlocked <em>through</em> Pro lock again when it lapses. Ships you bought outright stay yours — cancelling never takes back a purchase.",
        pro_q5: "How to cancel",
        pro_a5: "Any time, in Google Play → Payments &amp; subscriptions. We never see your card, and there is no cancellation flow inside the game to argue with you.",

        gal_eyebrow: "Screenshots",
        gal_title: "Straight captures, <em>no mock-ups</em>.",
        gal_sub: "Every frame here comes off a phone at 1080×2400, exactly as the game draws it.",
        s1_title: "The title screen",
        s1_cap: "Start, shop, leaderboard, settings — and the HUD already showing behind the panel, so the first thing you see is the thing you will be reading all run.",
        s2_title: "Wave one, first blood",
        s2_cap: "Score 40, three ships, gun level 1. Red fighters drift down in a loose formation while your own bolts climb the middle of the screen on their own.",
        s3_title: "The Dreadnought",
        s3_cap: "Wave five, and the first health bar. The gun is at level 4 and a shield bubble is up — which is exactly one hit's worth of margin against a volley this wide.",
        s4_title: "The Reaver, at wave ten",
        s4_cap: "Score 4,960 and five ships in hand. The volley falls in staggered rows rather than a wall, so the gap is real — you just have to be in it before the row arrives.",
        s5_title: "The shop",
        s5_cap: "Pro Monthly at the top, then every hull from the free Aegis Cyan down to the Pro skins. Prices are one-time unless the badge says Pro.",
        s6_title: "Settings, in full",
        s6_cap: "One slider for sound effects. That is the entire options screen — there is nothing else in the game that needs configuring.",
        s7_title: "Key art",
        s7_cap: "The nebula the whole game is painted against, and the ion trails the ship leaves behind it.",

        phone_eyebrow: "Built for a phone",
        phone_title: "Portrait, offline, <em>and small</em>.",
        phone_sub: "Novaryn is shaped around the way a phone is actually held: upright, in one hand, for a few minutes at a time, often somewhere with no signal.",
        p_portrait: "<strong>Portrait and one-handed.</strong> Playable while standing on a bus, with no rotation and no second thumb required.",
        p_offline: "<strong>Plays fully offline.</strong> The whole game runs on the device. Turn the connection off and nothing changes.",
        p_small: "<strong>Small download, old hardware.</strong> Android 7.0 and up, and it does not ask a budget phone for more than it has.",
        p_local: "<strong>Your best score is yours.</strong> It is kept on the device, in the game's own save file, and it is not sent anywhere.",

        faq1_q: "Which Android versions does it run on?",
        faq1_a: "Android 7.0 and up. The listing is version 1.0.0, published on 18 August 2026, rated Everyone with in-game purchases declared.",
        faq2_q: "Are there ads?",
        faq2_a: "None. No banner, no interstitial between runs, and no rewarded video offering you a revive. There is no ad network in the build at all.",
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
        pol_meta_desc: "How Novaryn handles information: what stays on your device, what Google Play Billing receives when you buy a ship or subscribe to Pro, and why the app needs no other permission.",
        pol_back: "Back to the game",
        pol_eyebrow: "Legal",
        pol_title: "Privacy Policy",
        pol_game: "Novaryn",
        pol_updated: "Last updated: 18 August 2026",
        pol_lead: "This Privacy Policy explains how Novaryn (\"we\", \"our\", or \"us\") collects, uses, and protects your information when you use our mobile application Novaryn (the \"App\"). We are committed to protecting your privacy and complying with applicable data protection laws, including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA), where applicable.",
        pol_toc: "On this page",

        pol_h_intro: "Introduction",
        pol_intro: "Novaryn is a vertical arcade shoot-'em-up for Android: endless waves of enemy formations, a boss on every fifth wave, and a collection of purely cosmetic ship skins. The game runs entirely on your own device. It has no accounts, no player profiles, no chat, no advertising and no analytics.",

        pol_h_short: "The short version",
        pol_short_1: "<strong>We run no servers and we receive no data about you.</strong> Your settings and your best score are written to the App's own save file on your device and never leave it.",
        pol_short_2: "<strong>There are no ads and no tracking.</strong> There is no advertising SDK, no analytics SDK and no crash-reporting SDK in the build, so nothing is profiling you or measuring what you do.",
        pol_short_3: "<strong>The one third party is Google Play Billing</strong>, and only when you choose to buy a ship skin or subscribe to Novaryn Pro. Google handles that transaction; we never see your payment details.",
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
        pol_d_provider: "<strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. For this App, the only such party is Google, through Google Play and Google Play Billing.",
        pol_d_purchase: "<strong>In-App Purchase</strong> means a ship skin bought outright, or the Novaryn Pro subscription, each transacted through Google Play Billing.",
        pol_d_you: "<strong>You</strong> means the individual accessing or using the Service.",

        pol_h_collect: "Data We Collect",
        pol_collect_lead: "We do not collect Personal Data. To be specific about what that means in practice:",
        pol_collect_none_t: "We do not collect",
        pol_collect_n1: "Your name, email address, phone number or any other contact detail.",
        pol_collect_n2: "Any account identifier — the App has no accounts and no sign-in.",
        pol_collect_n3: "Advertising identifiers, device identifiers, or any other identifier used for tracking or profiling.",
        pol_collect_n4: "Location, contacts, photos, files, camera or microphone input.",
        pol_collect_n5: "Analytics, usage statistics, session length, crash reports or performance metrics.",
        pol_collect_local_t: "Stored on your device only",
        pol_collect_l1: "Your best score, so the BEST figure under the score counter has something to compare against.",
        pol_collect_l2: "Your sound-effects volume setting.",
        pol_collect_l3: "Which ship skin you have equipped, and which skins you own.",
        pol_collect_note: "<strong>Note:</strong> the three items above are written to the App's own private save file on your device. They are not transmitted to us or to anyone else, and we have no way of reading them.",

        pol_h_purchases: "Purchases and Subscriptions",
        pol_purchase_1: "Novaryn offers optional in-app purchases: individual ship skins as one-time purchases, and <strong>Novaryn Pro</strong> as a monthly subscription that unlocks every ship in the shop while it is active. All purchases are cosmetic. Nothing sold in the App changes how the game plays.",
        pol_purchase_2: "Every transaction is carried out by <strong>Google Play Billing</strong>. When you buy something, Google — not us — processes your payment. We never see, receive or store your card number, billing address or any other payment detail. What we receive from Google is a purchase token telling the App that an entitlement is active, so it can unlock the skin you paid for.",
        pol_purchase_3: "Google processes that transaction as an independent controller under its own privacy policy. If you want to know what Google keeps about a Play purchase, that policy is the place to look, and your Google account settings are where you can review your purchase history.",
        pol_purchase_4: "The Novaryn Pro subscription renews monthly until you cancel it, and you can cancel at any time in <strong>Google Play → Payments &amp; subscriptions</strong>. Ships unlocked through an active Pro subscription lock again if the subscription ends; ships you bought outright remain yours permanently and restore when you reinstall the App.",

        pol_h_sharing: "Sharing Data with Third Parties",
        pol_sharing_1: "We do not sell user data, and we have no user data to sell. There is no advertising network, no analytics provider, no crash-reporting service and no social SDK in the App.",
        pol_sharing_2: "Google Play Billing is the only third-party service the App communicates with, and only at the moment you open the shop or complete a purchase. Outside of that, the App makes no network requests of its own.",

        pol_h_perm: "Permissions and Network Access",
        pol_perm_1: "The App declares the Android <code>INTERNET</code> permission, which Google Play Billing requires in order to verify purchases and entitlements, and <code>WAKE_LOCK</code>, which keeps the screen from sleeping in the middle of a run.",
        pol_perm_2: "It requests no other sensitive permission: no location, no contacts, no camera, no microphone, and no access to the photos, videos or documents on your device.",
        pol_perm_3: "The game itself does not require a connection. Every wave, every boss and every power-up works with the connection off — the only thing that needs the network is the shop.",

        pol_h_storage: "Data Storage and Deletion",
        pol_storage_1: "We operate no servers of our own and store no user data. Everything the game needs in order to run is processed and stored locally on your device.",
        pol_storage_2: "You can delete all of it by uninstalling the App. That removes your best score, your settings and the record of which skin you had equipped.",
        pol_storage_3: "Your purchase history is the exception, because it is held by Google rather than by us. Uninstalling the App does not erase a purchase — that is deliberate, and it is what lets a skin you paid for come back when you reinstall. Review or manage it through your Google Play account.",

        pol_h_children: "Children's Privacy",
        pol_children_1: "Novaryn is rated Everyone and contains no content directed at, or unsuitable for, children. We do not knowingly collect personal information from anyone, of any age, including children under 13.",
        pol_children_2: "The App does contain in-app purchases. If a child uses your device, we suggest turning on purchase authentication in the Google Play Store settings so that a password or biometric is required before any purchase completes.",

        pol_h_rights: "Your Rights",
        pol_rights_lead: "Under the GDPR, the CCPA and comparable laws, you have rights of access, correction, deletion, portability and objection with respect to your personal data. Because we hold no personal data about you, there is nothing on our side for those requests to reach — but the rights still apply, and you are welcome to contact us to confirm that.",
        pol_rights_1: "<strong>Access:</strong> we hold no data about you to disclose.",
        pol_rights_2: "<strong>Deletion:</strong> uninstalling the App removes everything the App has stored.",
        pol_rights_3: "<strong>Purchases:</strong> requests about payment records should go to Google, which processes them.",
        pol_rights_4: "<strong>Objection:</strong> there is no profiling, automated decision-making or targeted advertising in the App to object to.",

        pol_h_security: "Security",
        pol_security: "Because the App stores its data locally and transmits none of it, the ordinary risks of data in transit do not arise. Purchase traffic is handled by Google Play Billing over its own secured channel. That said, no method of electronic storage is completely secure, and the save file on your device is protected by your device's own security — a screen lock is worth having.",

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
        pol_contact_app_v: "com.tdson.novaryn"
    },

    vi: {
        page_title: "Novaryn — một ngón tay, vô tận đợt tấn công | AIBachKhoa",
        meta_desc: "Game bắn phi thuyền arcade dọc màn hình cho Android. Kéo để bay, súng tự bắn, cứ mỗi đợt thứ năm là một trùm có thanh máu. Mười phi thuyền, ba loại vật phẩm, không quảng cáo, chơi offline.",
        aria_lang: "Đổi ngôn ngữ",
        aria_theme: "Đổi giao diện",
        aria_menu: "Mở menu",
        skip_link: "Bỏ qua tới nội dung",

        nav_home: "Trang chủ",
        nav_overview: "Tổng quan",
        nav_loop: "Một ván",
        nav_gems: "Vật phẩm",
        nav_ships: "Phi thuyền",
        nav_shots: "Ảnh chụp",
        nav_policy: "Quyền riêng tư",

        hero_kicker: "Android · game bắn phi thuyền arcade",
        hero_title: "Một ngón tay. <em>Vô tận đợt tấn công</em>.",
        hero_sub: "Game bắn phi thuyền arcade dọc màn hình, làm cho những phút rảnh ngắn. Kéo ở bất kỳ đâu trên màn hình để bay; súng tự bắn. Phần còn lại là né, canh thời điểm, và biết khi nào nên liều.",
        btn_play: "Tải trên Google Play",
        btn_shots: "Xem cách chơi",
        btn_policy: "Đọc chính sách quyền riêng tư",
        btn_contact: "Liên hệ",
        hero_meta: "Mã ứng dụng <code>com.tdson.novaryn</code> · màn hình dọc, Android 7.0 trở lên · phân loại Everyone, có mua trong game.",

        stat_waves: "Đợt tấn công — không có màn kết",
        stat_boss: "Đợt giữa hai lần gặp trùm",
        stat_gun: "Cấp súng để leo lên",
        stat_ships: "Phi thuyền để lái",
        stat_ads: "Quảng cáo, ở bất kỳ đâu trong game",

        loop_eyebrow: "Một ván",
        loop_title: "Kéo để bay. <em>Còn lại là bản lĩnh</em>.",
        loop_sub: "Không có nút bắn, không có cần điều khiển, không có menu nào chen giữa bạn và lần thử tiếp theo. Bạn đặt ngón tay xuống bất cứ đâu trên mặt kính và phi thuyền đi theo — nghĩa là quyết định duy nhất còn lại trong game là đứng ở đâu, và toàn bộ game được dựng quanh đúng quyết định đó.",
        c_touch_t: "Cả màn hình là cần điều khiển",
        c_touch_d: "Không phải một bàn phím ảo ở góc mà ngón tay phải mò tìm. Đặt ngón tay xuống ngay chỗ nó đang ở, phi thuyền bám theo một-đổi-một, nên không bao giờ có thứ gì bị chính bàn tay bạn che mất đúng lúc cần nhìn.",
        c_auto_t: "Súng không bao giờ là việc của bạn",
        c_auto_d: "Nó tự bắn, theo nhịp của nó, suốt cả ván. Không mất gì vì một cú chạm hụt, cũng không được gì nhờ bấm loạn — một ván đọc lên đúng như đường bay bạn đã vẽ, không phải cái nút bạn giữ.",
        c_wave_t: "Đợt này tới, rồi đợt nữa tới",
        c_wave_d: "Đội hình vào dày hơn và nhanh hơn sau mỗi lần, và chẳng có đích nào ở cuối để với tới. Con số điểm cùng dòng BEST bên dưới là toàn bộ bảng thành tích: bạn đi được tới đâu, so với chỗ xa nhất bạn từng tới.",
        c_again_t: "Ván sau chỉ cách tám giây",
        c_again_d: "Chết là về thẳng menu với nút START nằm ngay dưới ngón tay. Không cổng mở khoá, không thanh năng lượng, không đếm ngược — vòng lặp đủ ngắn để lọt vào một lần chờ xe buýt, và đủ sòng phẳng để một ván dở là lỗi của bạn.",

        boss_eyebrow: "Trùm",
        boss_title: "Cứ đợt thứ năm, <em>một thứ có tên</em>.",
        boss_sub: "Bốn đợt đội hình, rồi một thanh máu trượt ngang đỉnh màn hình. Trùm không phải là một chiếc tiêm kích to hơn — nó giữ vị trí, chịu đòn thật, và tung ra một dạng đạn phải đọc chứ không bắn át được. Học một lần là thuộc.",
        w_open: "Những đội hình mở màn",
        w_tight: "Chặt hơn, nhanh hơn",
        w_press: "Màn hình bắt đầu kín",
        w_next: "Con tiếp theo đang đợi",
        w_on: "Và cứ thế, không có trần",
        w_rule: "Một trùm mỗi đợt thứ năm",
        boss_read_t: "Đọc dạng đạn, đừng đuổi từng viên",
        boss_read_d: "Loạt đạn của trùm tới dưới dạng một hình khối — một nan quạt loe dần khi rơi, một cột đạn đi ngang qua đúng làn bạn đang đứng. Đuổi theo từng viên là thua. Chọn sẵn khe hở mà hình khối đó sẽ chừa lại, và vào đó sớm, là thắng.",
        boss_l1: "<strong>Thanh máu chính là đồng hồ.</strong> Nó chỉ nhúc nhích khi bạn đang bắn vào con trùm, nên thời gian nấp ở đáy màn hình là thời gian các loạt đạn cứ tới miễn phí.",
        boss_l2: "<strong>Áp sát là canh bạc.</strong> Súng của bạn ăn nhiều hơn khi ngồi gần, và mỗi viên đạn cũng bớt chỗ để né. Bạn chọn đứng ở đâu, đó là cả trận đánh.",
        boss_l3: "<strong>Tiêm kích thường vẫn vào.</strong> Trùm không bao giờ ở một mình trên màn hình, nên khe an toàn trong loạt đạn thường lại là làn mà một chiếc tiêm kích sắp lao xuống.",

        gem_eyebrow: "Vật phẩm",
        gem_title: "Ba viên ngọc, <em>và một canh bạc sòng phẳng</em>.",
        gem_sub: "Ngọc rơi ngay chỗ vừa giao tranh. Nhặt một viên nghĩa là bay vào đúng khoảng không bạn vừa né một giây trước — và canh bạc đó, lặp lại cả chục lần mỗi ván, chính là cả trò chơi.",
        gem_p_n: "P — viên ngọc vàng",
        gem_p_d: "Nâng cấp súng, tối đa cấp 4. Thay đổi lớn nhất tới cảm giác của một ván, và là lý do một ván hay lại càng dễ đi tiếp thay vì khó lên.",
        gem_s_n: "S — viên ngọc lam",
        gem_s_d: "Một bong bóng khiên đỡ đúng một đòn. Một sai lầm được tha — thường là nhiều hơn đúng một so với thứ bạn cần để tới con trùm kế tiếp.",
        gem_x_n: "+ — viên ngọc hồng",
        gem_x_d: "Thêm một mạng vào bộ đếm ở góc phải trên. Thứ duy nhất trong game trả lại được cái mà một giây tồi tệ vừa lấy đi.",
        gem_note: "<strong>Không thứ nào ở đây mua được.</strong> Mọi vật phẩm trong Novaryn đều rơi ra từ lối chơi. Không có viên ngọc nào bán trong cửa hàng, không có hồi sinh nào chào mời sau khi chết, và không có lợi thế nào đổi được bằng tiền — cửa hàng chỉ có lớp sơn phi thuyền, không gì khác.",

        ship_eyebrow: "Phi thuyền",
        ship_title: "Mười thân vỏ, <em>tất cả đều chỉ để nhìn</em>.",
        ship_sub: "Bạn bắt đầu với Aegis Cyan. Mọi thứ khác trong cửa hàng chỉ đổi vẻ ngoài của ván chơi chứ không đổi cách nó vận hành — không có phi thuyền nhanh hơn, không có súng rộng hơn, không có mạng thêm đổi bằng tiền. Một bảng xếp hạng mà những điểm cao nhất có thể mua được thì chẳng đáng để đọc.",
        ship_start: "Phi thuyền bạn bắt đầu",
        ship_incl: "Có sẵn",
        ship_std: "Skin thường",
        ship_pro: "Skin Pro",
        ship_shop: "Trong cửa hàng",
        ship_price_note: "<strong>Giá niêm yết theo thị trường Mỹ.</strong> Google Play hiển thị cửa hàng bằng đơn vị tiền của bạn, và một skin mua đứt là của bạn vĩnh viễn — trên máy này và trên bất kỳ máy nào khác bạn đăng nhập cùng tài khoản Google.",

        pro_eyebrow: "Novaryn Pro",
        pro_title: "Tuỳ chọn, theo tháng, <em>và nói rõ từng điều</em>.",
        pro_sub: "Pro là gói đăng ký mở khoá mọi phi thuyền trong cửa hàng khi còn hiệu lực. Đây là khoản thu định kỳ duy nhất trong game, nó không đổi gì trong cách một ván vận hành, và đây là chính xác điều gì xảy ra nếu bạn ngừng trả tiền.",
        th_q: "Câu hỏi",
        th_a: "Câu trả lời",
        pro_q1: "Mở khoá những gì",
        pro_a1: "Mọi phi thuyền trong cửa hàng, cả skin thường lẫn skin Pro, trong suốt thời gian gói còn hiệu lực.",
        pro_q2: "Giá bao nhiêu",
        pro_a2: "4,99 USD mỗi tháng theo giá niêm yết Mỹ, hiển thị bằng tiền của bạn khi thanh toán và do Google Play thu.",
        pro_q3: "Ảnh hưởng gì tới ván chơi",
        pro_a3: "Không gì cả. Không thêm mạng, không mạnh súng, không hồi sinh. Pro mua lớp sơn.",
        pro_q4: "Nếu bạn huỷ",
        pro_a4: "Những phi thuyền mở khoá <em>nhờ</em> Pro sẽ khoá lại khi gói hết hạn. Phi thuyền bạn mua đứt vẫn là của bạn — huỷ gói không bao giờ lấy lại một lần mua.",
        pro_q5: "Huỷ thế nào",
        pro_a5: "Bất cứ lúc nào, trong Google Play → Thanh toán và gói đăng ký. Chúng tôi không bao giờ nhìn thấy thẻ của bạn, và trong game cũng không có màn giữ chân nào để cò kè với bạn.",

        gal_eyebrow: "Ảnh chụp",
        gal_title: "Ảnh chụp thẳng, <em>không dựng</em>.",
        gal_sub: "Mọi khung hình ở đây chụp từ điện thoại ở 1080×2400, đúng như game vẽ ra.",
        s1_title: "Màn hình tựa game",
        s1_cap: "Bắt đầu, cửa hàng, bảng xếp hạng, cài đặt — và phần HUD đã hiện sẵn sau bảng menu, nên thứ đầu tiên bạn thấy chính là thứ bạn sẽ đọc suốt ván.",
        s2_title: "Đợt một, phát đầu tiên",
        s2_cap: "40 điểm, ba mạng, súng cấp 1. Những chiếc tiêm kích đỏ trôi xuống theo đội hình lỏng trong khi đạn của bạn tự leo lên giữa màn hình.",
        s3_title: "Dreadnought",
        s3_cap: "Đợt năm, và thanh máu đầu tiên. Súng đã lên cấp 4 và khiên đang bật — tức là đúng một đòn dư ra trước một loạt đạn rộng cỡ này.",
        s4_title: "Reaver, ở đợt mười",
        s4_cap: "4.960 điểm và năm mạng trong tay. Loạt đạn rơi thành từng hàng so le chứ không phải một bức tường, nên khe hở là có thật — chỉ cần bạn vào đó trước khi hàng đạn tới.",
        s5_title: "Cửa hàng",
        s5_cap: "Pro Monthly ở trên cùng, rồi mọi thân vỏ từ Aegis Cyan miễn phí xuống tới các skin Pro. Giá là mua đứt trừ khi nhãn ghi Pro.",
        s6_title: "Cài đặt, đầy đủ",
        s6_cap: "Một thanh trượt cho âm thanh. Đó là toàn bộ màn tuỳ chọn — trong game không còn gì khác cần chỉnh.",
        s7_title: "Tranh bìa",
        s7_cap: "Dải tinh vân mà cả trò chơi được vẽ trên nền nó, cùng những vệt ion phi thuyền để lại phía sau.",

        phone_eyebrow: "Làm cho điện thoại",
        phone_title: "Dọc màn hình, offline, <em>và nhẹ</em>.",
        phone_sub: "Novaryn được nắn theo đúng cách một chiếc điện thoại thật sự được cầm: dựng đứng, một tay, vài phút mỗi lần, và thường ở nơi không có sóng.",
        p_portrait: "<strong>Dọc màn hình và một tay.</strong> Chơi được khi đang đứng trên xe buýt, không phải xoay máy, không cần ngón tay thứ hai.",
        p_offline: "<strong>Chơi offline hoàn toàn.</strong> Cả trò chơi chạy trên máy. Tắt mạng đi thì không có gì thay đổi.",
        p_small: "<strong>Tải nhẹ, chạy máy cũ.</strong> Android 7.0 trở lên, và nó không đòi ở một chiếc máy phổ thông nhiều hơn thứ máy đó có.",
        p_local: "<strong>Điểm cao nhất là của bạn.</strong> Nó nằm trên máy, trong tệp lưu của chính game, và không được gửi đi đâu cả.",

        faq1_q: "Chạy trên phiên bản Android nào?",
        faq1_a: "Android 7.0 trở lên. Bản trên cửa hàng là 1.0.0, phát hành ngày 18 tháng 8 năm 2026, phân loại Everyone và có khai báo mua trong game.",
        faq2_q: "Có quảng cáo không?",
        faq2_a: "Không. Không banner, không quảng cáo chen giữa các ván, và không có video đổi thưởng nào mời bạn hồi sinh. Trong bản dựng không hề có mạng quảng cáo nào.",
        faq3_q: "Có cần kết nối mạng không?",
        faq3_a: "Không. Một ván chơi y hệt khi tắt mạng. Mạng chỉ dùng khi bạn mở cửa hàng hoặc mua hàng, vì phần đó đi qua Google Play Billing.",
        faq4_q: "Tôi có thể mất skin đã mua không?",
        faq4_a: "Không mất skin mua đứt — đó là những lần mua một lần gắn với tài khoản Google của bạn và sẽ khôi phục khi cài lại. Chỉ những phi thuyền mở khoá <em>nhờ</em> gói Pro mới khoá lại nếu Pro hết hạn.",
        faq5_q: "Điểm cao của tôi có được gửi đi đâu không?",
        faq5_a: "Điểm cao nhất được giữ trên máy, trong tệp lưu của chính game. Gỡ ứng dụng là nó mất.",
        faq6_q: "Có hợp cho trẻ em không?",
        faq6_a: "Game phân loại Everyone: một trò bắn phi thuyền trừu tượng, không máu me, không cốt truyện, không trò chuyện. Chỉ cần lưu ý là có mua trong ứng dụng, nên với máy dùng chung thì nên bật mã PIN mua hàng trên Play Store.",

        cta_title: "Không có màn kết. Chỉ có chuyện bạn đi được tới đâu.",

        footer_desc: "Xây dựng các công cụ AI thiết thực cho lập trình viên và doanh nghiệp.",
        footer_game: "Trò chơi",
        footer_prod: "Sản phẩm khác",
        footer_comp: "Công ty",
        footer_about: "Giới thiệu",
        footer_services: "Dịch vụ",
        footer_contact: "Liên hệ",
        footer_rights: "Bảo lưu mọi quyền.",

        /* ---------- Chính sách quyền riêng tư ---------- */
        pol_page_title: "Chính sách quyền riêng tư — Novaryn | AIBachKhoa",
        pol_meta_desc: "Cách Novaryn xử lý thông tin: những gì ở lại trên máy bạn, những gì Google Play Billing nhận khi bạn mua phi thuyền hay đăng ký Pro, và vì sao ứng dụng không cần quyền nào khác.",
        pol_back: "Quay lại trang game",
        pol_eyebrow: "Pháp lý",
        pol_title: "Chính sách quyền riêng tư",
        pol_game: "Novaryn",
        pol_updated: "Cập nhật lần cuối: 18 tháng 8 năm 2026",
        pol_lead: "Chính sách quyền riêng tư này giải thích cách Novaryn (\"chúng tôi\") thu thập, sử dụng và bảo vệ thông tin của bạn khi bạn dùng ứng dụng di động Novaryn (\"Ứng dụng\"). Chúng tôi cam kết bảo vệ quyền riêng tư của bạn và tuân thủ các luật bảo vệ dữ liệu hiện hành, bao gồm Quy định chung về bảo vệ dữ liệu (GDPR) và Đạo luật quyền riêng tư của người tiêu dùng California (CCPA), khi áp dụng.",
        pol_toc: "Nội dung trang này",

        pol_h_intro: "Giới thiệu",
        pol_intro: "Novaryn là game bắn phi thuyền arcade dọc màn hình cho Android: các đợt đội hình địch vô tận, một trùm ở mỗi đợt thứ năm, và một bộ sưu tập skin phi thuyền thuần trang trí. Trò chơi chạy hoàn toàn trên máy của bạn. Nó không có tài khoản, không có hồ sơ người chơi, không có trò chuyện, không có quảng cáo và không có phân tích hành vi.",

        pol_h_short: "Bản tóm tắt",
        pol_short_1: "<strong>Chúng tôi không vận hành máy chủ nào và không nhận dữ liệu nào về bạn.</strong> Cài đặt và điểm cao nhất của bạn được ghi vào tệp lưu riêng của Ứng dụng trên máy bạn và không bao giờ rời khỏi đó.",
        pol_short_2: "<strong>Không có quảng cáo và không có theo dõi.</strong> Trong bản dựng không có SDK quảng cáo, SDK phân tích hay SDK báo lỗi nào, nên không có gì đang lập hồ sơ hay đo đếm hành vi của bạn.",
        pol_short_3: "<strong>Bên thứ ba duy nhất là Google Play Billing</strong>, và chỉ khi bạn chủ động mua một skin phi thuyền hoặc đăng ký Novaryn Pro. Google xử lý giao dịch đó; chúng tôi không bao giờ thấy thông tin thanh toán của bạn.",
        pol_short_4: "<strong>Ứng dụng không xin quyền nhạy cảm nào.</strong> Không vị trí, không danh bạ, không camera, không micro, không truy cập tệp của bạn.",

        pol_h_defs: "Diễn giải và định nghĩa",
        pol_h_interp: "Diễn giải",
        pol_interp: "Những từ viết hoa chữ cái đầu mang nghĩa được định nghĩa theo các điều kiện dưới đây. Các định nghĩa sau có cùng ý nghĩa dù xuất hiện ở dạng số ít hay số nhiều.",
        pol_h_defs2: "Định nghĩa",
        pol_defs_lead: "Trong phạm vi Chính sách quyền riêng tư này:",
        pol_d_app: "<strong>Ứng dụng</strong> là Novaryn, chương trình phần mềm do Công ty cung cấp.",
        pol_d_company: "<strong>Công ty</strong> (được gọi là \"Công ty\", \"chúng tôi\" trong thoả thuận này) là tdson, nhà phát triển Ứng dụng.",
        pol_d_country: "<strong>Quốc gia</strong> là: Việt Nam.",
        pol_d_device: "<strong>Thiết bị</strong> là bất kỳ thiết bị nào truy cập được Dịch vụ, chẳng hạn điện thoại hoặc máy tính bảng.",
        pol_d_personal: "<strong>Dữ liệu cá nhân</strong> là mọi thông tin liên quan tới một cá nhân đã hoặc có thể xác định được.",
        pol_d_service: "<strong>Dịch vụ</strong> là Ứng dụng.",
        pol_d_provider: "<strong>Nhà cung cấp dịch vụ</strong> là bất kỳ cá nhân hay pháp nhân nào xử lý dữ liệu thay mặt Công ty. Với Ứng dụng này, bên duy nhất như vậy là Google, thông qua Google Play và Google Play Billing.",
        pol_d_purchase: "<strong>Mua trong ứng dụng</strong> là một skin phi thuyền mua đứt, hoặc gói đăng ký Novaryn Pro, đều giao dịch qua Google Play Billing.",
        pol_d_you: "<strong>Bạn</strong> là cá nhân truy cập hoặc sử dụng Dịch vụ.",

        pol_h_collect: "Dữ liệu chúng tôi thu thập",
        pol_collect_lead: "Chúng tôi không thu thập Dữ liệu cá nhân. Cụ thể điều đó nghĩa là:",
        pol_collect_none_t: "Chúng tôi không thu thập",
        pol_collect_n1: "Tên, địa chỉ email, số điện thoại hay bất kỳ thông tin liên hệ nào của bạn.",
        pol_collect_n2: "Bất kỳ mã tài khoản nào — Ứng dụng không có tài khoản và không có đăng nhập.",
        pol_collect_n3: "Mã quảng cáo, mã thiết bị, hay bất kỳ mã định danh nào dùng để theo dõi hoặc lập hồ sơ.",
        pol_collect_n4: "Vị trí, danh bạ, ảnh, tệp, dữ liệu camera hay micro.",
        pol_collect_n5: "Số liệu phân tích, thống kê sử dụng, thời lượng phiên, báo lỗi hay chỉ số hiệu năng.",
        pol_collect_local_t: "Chỉ lưu trên máy bạn",
        pol_collect_l1: "Điểm cao nhất của bạn, để dòng BEST dưới bộ đếm điểm có cái để so.",
        pol_collect_l2: "Mức âm lượng hiệu ứng âm thanh bạn đặt.",
        pol_collect_l3: "Skin phi thuyền bạn đang dùng, và những skin bạn sở hữu.",
        pol_collect_note: "<strong>Lưu ý:</strong> ba mục trên được ghi vào tệp lưu riêng của Ứng dụng trên máy bạn. Chúng không được truyền tới chúng tôi hay bất kỳ ai khác, và chúng tôi cũng không có cách nào đọc được.",

        pol_h_purchases: "Mua hàng và gói đăng ký",
        pol_purchase_1: "Novaryn có các khoản mua trong ứng dụng tuỳ chọn: từng skin phi thuyền dưới dạng mua một lần, và <strong>Novaryn Pro</strong> dưới dạng gói đăng ký tháng mở khoá mọi phi thuyền trong cửa hàng khi còn hiệu lực. Mọi khoản mua đều chỉ mang tính trang trí. Không thứ gì bán trong Ứng dụng làm thay đổi cách chơi.",
        pol_purchase_2: "Mọi giao dịch đều do <strong>Google Play Billing</strong> thực hiện. Khi bạn mua thứ gì đó, Google — chứ không phải chúng tôi — xử lý khoản thanh toán. Chúng tôi không bao giờ thấy, nhận hay lưu số thẻ, địa chỉ thanh toán hay bất kỳ chi tiết thanh toán nào của bạn. Thứ chúng tôi nhận từ Google là một mã giao dịch cho Ứng dụng biết rằng một quyền sở hữu đang có hiệu lực, để nó mở khoá skin bạn đã trả tiền.",
        pol_purchase_3: "Google xử lý giao dịch đó với tư cách một bên kiểm soát dữ liệu độc lập theo chính sách quyền riêng tư của riêng họ. Nếu bạn muốn biết Google lưu gì về một giao dịch trên Play, chính sách đó là nơi cần đọc, và phần cài đặt tài khoản Google là nơi bạn xem lại lịch sử mua hàng.",
        pol_purchase_4: "Gói Novaryn Pro tự gia hạn hằng tháng cho tới khi bạn huỷ, và bạn có thể huỷ bất cứ lúc nào trong <strong>Google Play → Thanh toán và gói đăng ký</strong>. Những phi thuyền mở khoá nhờ gói Pro đang hiệu lực sẽ khoá lại khi gói kết thúc; những phi thuyền bạn mua đứt vẫn là của bạn vĩnh viễn và sẽ khôi phục khi bạn cài lại Ứng dụng.",

        pol_h_sharing: "Chia sẻ dữ liệu với bên thứ ba",
        pol_sharing_1: "Chúng tôi không bán dữ liệu người dùng, và cũng không có dữ liệu người dùng nào để bán. Trong Ứng dụng không có mạng quảng cáo, không có nhà cung cấp phân tích, không có dịch vụ báo lỗi và không có SDK mạng xã hội nào.",
        pol_sharing_2: "Google Play Billing là dịch vụ bên thứ ba duy nhất Ứng dụng liên lạc, và chỉ vào lúc bạn mở cửa hàng hoặc hoàn tất một giao dịch. Ngoài việc đó ra, Ứng dụng không tự gửi yêu cầu mạng nào.",

        pol_h_perm: "Quyền và truy cập mạng",
        pol_perm_1: "Ứng dụng khai báo quyền Android <code>INTERNET</code>, thứ mà Google Play Billing cần để xác minh giao dịch và quyền sở hữu, cùng <code>WAKE_LOCK</code>, để màn hình không tắt giữa một ván chơi.",
        pol_perm_2: "Ứng dụng không xin quyền nhạy cảm nào khác: không vị trí, không danh bạ, không camera, không micro, và không truy cập ảnh, video hay tài liệu trên máy bạn.",
        pol_perm_3: "Bản thân trò chơi không cần kết nối. Mọi đợt tấn công, mọi con trùm và mọi vật phẩm đều hoạt động khi tắt mạng — thứ duy nhất cần mạng là cửa hàng.",

        pol_h_storage: "Lưu trữ và xoá dữ liệu",
        pol_storage_1: "Chúng tôi không vận hành máy chủ nào của riêng mình và không lưu dữ liệu người dùng nào. Mọi thứ trò chơi cần để chạy đều được xử lý và lưu ngay trên máy bạn.",
        pol_storage_2: "Bạn có thể xoá toàn bộ bằng cách gỡ Ứng dụng. Việc đó xoá điểm cao nhất, cài đặt và ghi nhận về skin bạn đang dùng.",
        pol_storage_3: "Lịch sử mua hàng là ngoại lệ, vì nó do Google giữ chứ không phải chúng tôi. Gỡ Ứng dụng không xoá một khoản mua — đó là chủ ý, và chính điều đó cho phép skin bạn đã trả tiền quay lại khi cài lại. Hãy xem hoặc quản lý nó qua tài khoản Google Play của bạn.",

        pol_h_children: "Quyền riêng tư của trẻ em",
        pol_children_1: "Novaryn được phân loại Everyone và không chứa nội dung hướng tới trẻ em hay không phù hợp với trẻ em. Chúng tôi không cố ý thu thập thông tin cá nhân của bất kỳ ai, ở bất kỳ độ tuổi nào, kể cả trẻ em dưới 13 tuổi.",
        pol_children_2: "Ứng dụng có mua trong ứng dụng. Nếu trẻ dùng máy của bạn, chúng tôi khuyến nghị bật xác thực mua hàng trong cài đặt Google Play Store để cần mật khẩu hoặc sinh trắc học trước khi một giao dịch hoàn tất.",

        pol_h_rights: "Quyền của bạn",
        pol_rights_lead: "Theo GDPR, CCPA và các luật tương đương, bạn có quyền truy cập, chỉnh sửa, xoá, chuyển dữ liệu và phản đối đối với dữ liệu cá nhân của mình. Vì chúng tôi không giữ dữ liệu cá nhân nào về bạn nên không có gì ở phía chúng tôi để các yêu cầu đó chạm tới — nhưng các quyền đó vẫn có hiệu lực, và bạn hoàn toàn có thể liên hệ để xác nhận điều này.",
        pol_rights_1: "<strong>Truy cập:</strong> chúng tôi không giữ dữ liệu nào về bạn để cung cấp.",
        pol_rights_2: "<strong>Xoá:</strong> gỡ Ứng dụng là xoá mọi thứ Ứng dụng đã lưu.",
        pol_rights_3: "<strong>Mua hàng:</strong> yêu cầu về hồ sơ thanh toán nên gửi tới Google, bên xử lý chúng.",
        pol_rights_4: "<strong>Phản đối:</strong> trong Ứng dụng không có việc lập hồ sơ, ra quyết định tự động hay quảng cáo nhắm mục tiêu nào để phản đối.",

        pol_h_security: "Bảo mật",
        pol_security: "Vì Ứng dụng lưu dữ liệu cục bộ và không truyền đi thứ gì, các rủi ro thông thường của dữ liệu trên đường truyền không phát sinh. Lưu lượng giao dịch do Google Play Billing xử lý qua kênh bảo mật của riêng họ. Dù vậy, không phương thức lưu trữ điện tử nào an toàn tuyệt đối, và tệp lưu trên máy bạn được bảo vệ bởi chính bảo mật của thiết bị — nên có khoá màn hình.",

        pol_h_changes: "Thay đổi với Chính sách này",
        pol_changes_1: "Chúng tôi có thể cập nhật Chính sách quyền riêng tư này theo thời gian — ví dụ nếu một phiên bản sau của Ứng dụng có thêm tính năng làm thay đổi cách xử lý dữ liệu. Chúng tôi sẽ đăng chính sách mới trên trang này và cập nhật ngày \"Cập nhật lần cuối\" ở đầu trang.",
        pol_changes_2: "Bạn nên xem lại Chính sách này định kỳ. Các thay đổi có hiệu lực khi được đăng trên trang này.",

        pol_h_contact: "Liên hệ",
        pol_contact_lead: "Nếu bạn có câu hỏi nào về Chính sách quyền riêng tư này, bạn có thể liên hệ:",
        pol_contact_email: "Qua email",
        pol_contact_addr: "Qua địa chỉ",
        pol_contact_addr_v: "Nhân Mỹ, Lý Nhân, Hà Nam 400000, Việt Nam",
        pol_contact_dev: "Tên nhà phát triển",
        pol_contact_dev_v: "tdson",
        pol_contact_app: "Mã ứng dụng",
        pol_contact_app_v: "com.tdson.novaryn"
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
        currentLang = sel.value;
        localStorage.setItem('novaryn-lang', currentLang);
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
        galImg.src = SHOT_DIR + shot + '.png';
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
            tabs.slice(1).forEach(tab => { new Image().src = SHOT_DIR + tab.dataset.shot + '.png'; });
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
