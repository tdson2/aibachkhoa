/* =========================================================
   Castle of Ancients product page + privacy policy.
   NOTE: Vietnamese ("vi") is kept here but left out of the picker,
   the same way it is on the landing page, the BKSafe page, the
   Dungeon of the Fallen Blade page and the Novaryn page — to show it
   again, add { code: 'vi', label: 'Tiếng Việt' } to LANGS below.
   Theme is shared with the rest of the site through the same
   'theme' key; the language choice is stored separately so it does
   not fight with the picker on the landing page.
   ========================================================= */

const i18n = {
    en: {
        page_title: "Castle of Ancients — hold the road | AIBachKhoa",
        meta_desc: "A hand-drawn pixel tower defense game for iPhone and iPad. Four guard posts, twelve maps, twenty-four kinds of enemy, and campaign rules you set yourself. No ads, no purchases, plays offline.",
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
        pol_meta_desc: "How Castle of Ancients handles information: it collects nothing, sends nothing, and has no network access at all. Everything the game saves stays in its own folder on your device.",
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
    },

    vi: {
        page_title: "Castle of Ancients — giữ lấy con đường | AIBachKhoa",
        meta_desc: "Game thủ thành pixel vẽ tay cho iPhone và iPad. Bốn loại trạm canh gác, mười hai bản đồ, hai mươi bốn loại quân địch, và luật chơi chiến dịch do bạn đặt. Không quảng cáo, không mua trong ứng dụng, chơi offline.",
        aria_lang: "Đổi ngôn ngữ",
        aria_theme: "Đổi giao diện",
        aria_menu: "Mở menu",
        skip_link: "Tới nội dung",

        nav_home: "Trang chủ",
        nav_overview: "Tổng quan",
        nav_posts: "Trạm canh gác",
        nav_foes: "Quân địch",
        nav_maps: "Bản đồ",
        nav_shots: "Ảnh chụp",
        nav_policy: "Quyền riêng tư",

        hero_kicker: "iPhone · iPad · thủ thành pixel",
        hero_title: "Một con đường. <em>Một toà thành</em>. Giữ lấy.",
        hero_sub: "Kéo một trạm canh gác từ thanh bên, thả xuống bãi cỏ, và một khúc đường trống bỗng thành bãi tử địa. Diệt địch lấy vàng, đổ vàng vào hàng phòng thủ sâu hơn, rồi giữ cho tới đợt cuối cùng.",
        btn_shots: "Xem lối chơi",
        btn_policy: "Đọc chính sách quyền riêng tư",
        btn_contact: "Liên hệ",
        hero_meta: "Mã ứng dụng <code>com.tdson.castleofancients</code> · nằm ngang, iPhone và iPad · không quảng cáo, không mua trong ứng dụng, chơi hoàn toàn offline.",
        hero_shot_alt: "Castle of Ancients — tháp cung thủ giữ một khúc cua trước đoàn quân goblin",

        stat_maps: "Bản đồ trong hai chế độ",
        stat_posts: "Loại trạm, mỗi loại ba cấp",
        stat_foes: "Loại quân địch phải trả lời",
        stat_langs: "Ngôn ngữ có sẵn",
        stat_ads: "Quảng cáo, theo dõi và mua bán",

        loop_eyebrow: "Vòng chơi",
        loop_title: "Dựng, diệt, <em>dựng tiếp</em>.",
        loop_sub: "Mọi thứ trong game chạy quanh một con số. Vàng đến từ những con đã chết, và nó là thứ duy nhất mua được hàng phòng thủ giết lứa sau. Đổ sai chỗ thì chừng bốn mươi giây sau con đường sẽ nói cho bạn biết.",

        c_drag_t: "Kéo tới đúng chỗ bạn muốn",
        c_drag_d: "Một ngón nhấc thẻ khỏi thanh bên và thả xuống ô bạn chọn. Hoặc chạm thẻ rồi chạm ô — cùng một cú dựng, hai lối, để tay nào rảnh cũng làm được.",
        c_gold_t: "Vàng là toàn bộ nền kinh tế",
        c_gold_d: "Không có loại tiền thứ hai, không thanh năng lượng, không có gì để nạp. Mỗi đồng đều bóc ra từ một con đã chết trên đường của bạn, và câu hỏi duy nhất game từng hỏi là đồng tiếp theo đi đâu.",
        c_up_t: "Nâng cấp là thêm người ra sân",
        c_up_d: "Ba cấp mỗi trạm, và cấp nào cũng nhìn thấy được: thêm một cung thủ trên nóc, thêm một chiến binh đứng ngoài đường. Không cần mở bảng chỉ số cũng biết mình đã mua gì.",
        c_sell_t: "Đặt sai một trạm không mất cả ván",
        c_sell_d: "Dỡ bất kỳ trạm nào lấy lại 60% tổng vàng đã đổ vào, rồi dựng lại ở chỗ chạy được. Bản đồ được phép dạy bạn một điều gì đó ngay giữa đợt.",

        post_eyebrow: "Trạm canh gác",
        post_title: "Bốn trạm, <em>bốn câu trả lời khác nhau</em>.",
        post_sub: "Không cái nào là cái tốt nhất. Mỗi cái đóng lại một cánh cửa mà ba cái kia để ngỏ, và mỗi bản đồ thật ra là một câu hỏi: ở đây cánh cửa nào mới quan trọng.",

        post_archer_n: "Tháp Cung Thủ",
        post_archer_c: "70 vàng",
        post_archer_d: "Bắn nhanh, một mục tiêu, và là thứ rẻ duy nhất bạn có mà chạm được tới quân bay. Xương sống của mọi tuyến phòng thủ bạn từng dựng.",
        post_bolt_n: "Trại Nỏ",
        post_bolt_c: "110 vàng",
        post_bolt_d: "Đạn nổ toả ra cả một cột quân chen chúc, và giáp chỉ chặn được một nửa. Hoàn toàn mù trước mọi thứ đang bay.",
        post_barr_n: "Trại Lính",
        post_barr_c: "90 vàng",
        post_barr_d: "Gần như không bắn. Nó đẩy ba chiến binh ra đứng giữa đường và CHẶN lại, giữ địch đứng yên cho mọi thứ còn lại làm việc giết chóc.",
        post_mon_n: "Tu Viện",
        post_mon_c: "130 vàng",
        post_mon_d: "Đòn phép bỏ qua giáp hoàn toàn và làm chậm mục tiêu. Lời giải cho Bộ Xương, và cho cả con Ngưu Ma đi phía sau chúng.",

        armour_t: "Giáp là phép TRỪ, không phải phần trăm",
        armour_d: "Mỗi điểm giáp trừ thẳng vào sát thương của cú đánh vừa trúng. Đó là lý do một loại trạm không bao giờ đủ, và lý do câu trả lời cho một cột quân nặng là một trạm KHÁC chứ không phải một trạm to hơn.",
        armour_l1: "<strong>Mũi tên ăn trọn lớp giáp.</strong> Một Bộ Xương giáp 5 nuốt gần hết một loạt cung thủ rồi đi tiếp.",
        armour_l2: "<strong>Đạn nổ xuyên được một nửa.</strong> Trại Nỏ còn tác dụng trước giáp lâu hơn mũi tên — cho tới đúng lúc có thứ gì đó bay lên.",
        armour_l3: "<strong>Đòn phép bỏ qua hoàn toàn.</strong> Tu Viện đánh đủ số lên thứ dày nhất bản đồ, và làm chậm nó trên đường đi.",
        armour_l4: "<strong>Không có gì miễn nhiễm tuyệt đối.</strong> Đòn yếu nhất đánh vào giáp dày nhất vẫn xuyên được 20%, nên không đợt nào là không thắng nổi — chỉ là đắt.",

        foe_eyebrow: "Quân địch",
        foe_title: "Hai mươi bốn loại <em>rắc rối</em>.",
        foe_sub: "Chúng không chỉ to dần lên. Mỗi con phá một luật mà con trước còn tuân theo — nên một tuyến giữ được sáu đợt vẫn có thể vỡ ở đợt thứ bảy mà chẳng có gì trong nó thay đổi.",

        foe_torch: "Bộ binh cơ bản. Cái đợt mà bạn dựng phòng thủ để chống lại.",
        foe_barrel: "Nhanh, máu mỏng, và lọt qua khe hở trước khi bạn kịp ngẩng lên.",
        foe_tnt: "Đứng ngoài tầm với của lính chặn mà ném bom vào chúng.",
        foe_skull: "Giáp 5 và đi chậm. Mũi tên gần như chỉ gãi ngứa.",
        foe_spider: "Rất nhanh, và không thèm dừng lại đánh lính chặn của bạn.",
        foe_bat: "Bay. Vượt thẳng qua đầu lính chặn, cắt luôn các khúc cua.",
        foe_imp: "Lách gọn qua mọi thứ đang đứng giữa đường.",
        foe_wisp: "Bay, và bay thẳng vào Thành.",
        foe_raft: "Một cái xuồng chứ không phải một con quái — bắn chìm ngoài khơi thì cả tiểu đội trên đó chìm theo.",
        foe_serpent: "Bơi theo làn nước, rồi lên bờ lướt qua lính chặn.",
        foe_turtle: "Trùm biển. Giáp cao tới mức chỉ đòn phép mới tính là sát thương.",
        foe_ogre: "Thứ nặng nhất trên cạn, và chậm như một trận lở núi.",
        foe_mino: "1500 máu, giáp 8, và sáu máu Thành nếu nó lọt vào.",
        foe_more: "…và mười một con nữa nằm giữa chúng.",

        tag_air: "Bay",
        tag_sea: "Từ dưới nước",
        tag_boss: "Trùm",

        map_eyebrow: "Bản đồ",
        map_title: "Mười hai bản đồ, <em>hai lối chơi</em>.",
        map_sub: "Cốt truyện thì dạy, chiến dịch thì để bạn đặt luật. Cả hai là cùng một game; chỉ khác nhau ở mấy thanh chắn.",

        story_t: "Cốt truyện — năm màn, mỗi màn một ý",
        story_d: "Mở dần từng màn một, và mỗi bản đồ dựng quanh đúng một bài học chứ không phải quanh một con số độ khó.",
        story_1: "<strong>Đồng Cỏ Cổng Thành.</strong> Một đường thẳng và bãi cỏ rộng cả hai bên. Không học gì ngoài chính vòng chơi.",
        story_2: "<strong>Khe Núi Gãy.</strong> Đường bẻ ngoặt lại chính nó, và mỗi khúc cua là chỗ một tháp với tới cùng một cột quân hai lần.",
        story_3: "<strong>Bến Nước Cạn.</strong> Nước bóp hẹp chỗ xây, và những con bay đầu tiên tới để phớt lờ lính chặn của bạn.",
        story_4: "<strong>Ngã Ba Hợp Quân.</strong> Hai cột quân tiến vào rồi nhập làm một ở khúc giữa. Một tuyến, dựng đúng chỗ chúng gặp nhau.",
        story_5: "<strong>Vòng Vây Cổ Thành.</strong> Đường xoắn ốc 79 ô, toà thành nằm giữa vòng vây, hai con trùm ở ngay trong vòng ấy.",

        camp_t: "Chiến dịch — bảy bản đồ lớn hơn, mở sẵn từ đầu",
        camp_d: "Rộng hơn màn hình, nên chụm hai ngón để phóng to và một ngón để kéo. Từ đồng bằng lộng gió hình chữ S tới tam giác châu ba cửa, đường xoắn 98 ô, thành trên đỉnh núi chỉ có một lối lên, và một toà thành bị vây bốn phía cùng lúc.",

        dial_eyebrow: "Luật của bạn",
        dial_title: "Bốn núm vặn, và <em>núm nào cũng tháo được</em>.",
        dial_sub: "Đặt trước mỗi ván chiến dịch. Mỗi núm đều có một nấc bỏ hẳn giới hạn — nên cùng bảy bản đồ ấy có thể là bài toán kinh tế bóp chặt hoặc một cái sân chơi, và đó là quyết định của bạn chứ không phải của một menu độ khó.",

        dial_gold: "Vàng",
        dial_gold_1: "Eo hẹp ½",
        dial_gold_2: "Thường",
        dial_gold_3: "Dư dả ×2",
        dial_gold_4: "Vô hạn",
        dial_life: "Máu Thành",
        dial_life_1: "Mong manh ½",
        dial_life_2: "Thường",
        dial_life_3: "Kiên cố ×2.5",
        dial_life_4: "Bất tử",
        dial_foe: "Sức địch",
        dial_foe_1: "Dễ thở ×0.7",
        dial_foe_2: "Thường",
        dial_foe_3: "Khắc nghiệt ×1.5",
        dial_foe_4: "Địa ngục ×2.2",
        dial_wave: "Số đợt",
        dial_wave_1: "Theo bản đồ",
        dial_wave_2: "Vô tận",

        touch_eyebrow: "Cảm ứng",
        touch_title: "Làm cho bàn tay, <em>không phải thu nhỏ cho vừa nó</em>.",
        touch_sub: "Bản cảm ứng không phải bản máy tính phóng to nút lên. Đó là một bộ số khác, chọn ra vì ngón tay không phải con trỏ.",
        touch_l1: "<strong>Thẻ cao hơn</strong> và thanh bên rộng hơn, vì ngón cái với ngang một màn hình nằm ngang thì kém chính xác hơn con chuột không bao giờ trượt.",
        touch_l2: "<strong>Ngưỡng phân biệt chạm/kéo nới rộng,</strong> nên một cú chạm rung hai pixel vẫn là chạm chứ không thành một cú dựng dở dang phải đi huỷ.",
        touch_l3: "<strong>Ảnh mờ của trạm nhấc hẳn lên trên đầu ngón tay,</strong> vì bàn tay che đúng cái ô bạn đang nhắm vào — chỗ duy nhất mà một ảnh xem trước không được nằm.",
        touch_l4: "<strong>Chụm hai ngón để phóng to, một ngón để kéo</strong> ở các bản đồ chiến dịch, vốn rộng hơn mọi màn hình bạn có.",

        shot_eyebrow: "Ảnh chụp",
        shot_title: "Ảnh thật, <em>không dựng lại</em>.",
        shot_sub: "Mọi tấm dưới đây đều là game đang chạy, ở độ phân giải đầy đủ, không vẽ thêm gì sau đó.",

        s1_title: "Menu chính",
        s1_cap: "Hai chế độ và một màn thiết lập. Không tài khoản, không thưởng điểm danh, không có gì chen giữa cái icon và một ván chơi.",
        s2_title: "Dựng tháp đầu tiên",
        s2_cap: "Một thẻ nhấc khỏi thanh bên, giữ trên bãi cỏ trống. Mọi ô cỏ trống đều là chỗ thả hợp lệ.",
        s3_title: "Giữ lấy con đường",
        s3_cap: "Tháp cung thủ phủ một khúc cua, chỗ tầm bắn của một tháp với tới cùng một cột quân hai lần.",
        s4_title: "Lính chặn và nâng cấp",
        s4_cap: "Chiến binh Trại Lính đứng giữa đường trong lúc các tháp làm việc. Mỗi cấp nâng đẩy thêm một người ra đó.",
        s5_title: "Vòng Vây Cổ Thành",
        s5_cap: "Màn cốt truyện cuối: đường xoắn 79 ô, toà thành nằm giữa vòng vây, hai con trùm ở trong vòng.",
        s6_title: "Bị vây bốn phía",
        s6_cap: "Một bản đồ chiến dịch có bốn con đường dẫn vào. Ở đây không có tuyến sau — hướng nào cũng là mặt trận.",
        s7_title: "Vịnh Gầm",
        s7_cap: "Quái biển bơi theo làn nước vào bờ, và bè đổ bộ chở bộ binh vòng qua tuyến đầu.",
        s8_title: "Năm màn cốt truyện",
        s8_cap: "Thang màn cốt truyện, mở dần từng cái. Bản đồ chiến dịch nằm ở danh sách riêng, mở sẵn từ đầu.",

        cta_title: "Một con đường dẫn tới Thành của bạn. Mọi thứ trên đó đều muốn san phẳng nó.",

        footer_desc: "Xây dựng các công cụ AI thiết thực cho lập trình viên và doanh nghiệp.",
        footer_game: "Về game",
        footer_prod: "Sản phẩm khác",
        footer_comp: "Công ty",
        footer_about: "Giới thiệu",
        footer_services: "Dịch vụ",
        footer_contact: "Liên hệ",
        footer_rights: "Bảo lưu mọi quyền.",

        /* ---------- Chính sách quyền riêng tư ---------- */
        pol_page_title: "Chính sách quyền riêng tư — Castle of Ancients | AIBachKhoa",
        pol_meta_desc: "Cách Castle of Ancients xử lý thông tin: không thu thập gì, không gửi đi gì, và không có quyền mạng nào. Mọi thứ game lưu đều nằm trong thư mục riêng của nó trên máy bạn.",
        pol_kicker: "Cập nhật lần cuối: 2 tháng 9 năm 2026",
        pol_title: "Chính sách quyền riêng tư — Castle of Ancients",
        pol_lead: "Castle of Ancients không thu thập, không truyền đi và không chia sẻ bất kỳ thông tin nào về bạn. Ứng dụng không có quyền mạng nào, không đo đạc, không quảng cáo, không tài khoản và không mua trong ứng dụng. Mọi thứ nó lưu đều nằm trong thư mục riêng của ứng dụng trên máy bạn.",

        pol_h_short: "Bản ngắn gọn",
        pol_short_1: "<strong>Không thu thập gì.</strong> Game không hỏi thông tin cá nhân nào và cũng không có ô nào để gõ vào.",
        pol_short_2: "<strong>Không gửi đi gì.</strong> Ứng dụng không khai một khả năng mạng nào, nên không có đường nào để thứ gì rời khỏi máy bạn, kể cả do nhầm lẫn.",
        pol_short_3: "<strong>Không có bên thứ ba.</strong> Không mạng quảng cáo, không SDK đo đạc, không trình báo lỗi, không đăng nhập mạng xã hội.",
        pol_short_4: "<strong>Không theo dõi.</strong> Không đọc mã định danh quảng cáo, và không có việc bạn làm nào bị gắn với bạn hay với ứng dụng khác.",
        pol_short_5: "<strong>Gỡ ứng dụng là xoá sạch.</strong> Không có bản sao nào trên máy chủ, vì chưa từng có bản sao ở đâu ngoài máy bạn.",

        pol_h_stores: "Ứng dụng lưu gì trên máy bạn",
        pol_stores_lead: "Game giữ một tệp thiết lập nhỏ trong thư mục cách ly của riêng nó. Ứng dụng khác không đọc được, tệp không bao giờ được tải lên, và trong đó không có gì nhận ra bạn:",
        pol_tbl_what: "Cái gì",
        pol_tbl_why: "Để làm gì",
        pol_row_prog_w: "Bạn đã qua những màn nào",
        pol_row_prog_y: "Để mở màn cốt truyện kế tiếp, và để nút Chơi tiếp đưa bạn về đúng ván đang chơi dở.",
        pol_row_opt_w: "Thiết lập của bạn",
        pol_row_opt_y: "Tốc độ game, âm lượng nhạc và tiếng động, ngôn ngữ, cách điều khiển, và bốn núm vặn chiến dịch.",
        pol_row_log_w: "Một tệp nhật ký cục bộ",
        pol_row_log_y: "Do engine ghi để giúp tìm nguyên nhân một cú sập ngay trên máy bạn. Nó không bao giờ được gửi đi đâu và bạn xoá nó bằng cách gỡ ứng dụng.",
        pol_stores_note: "Đó là toàn bộ danh sách. Không có mã định danh, không có dấu thời gian gắn với một con người, và không có lịch sử sử dụng.",

        pol_h_perm: "Quyền truy cập",
        pol_perm_1: "Ứng dụng không xin quyền nào. Nó không dùng máy ảnh, micro, thư viện ảnh, danh bạ, vị trí, Bluetooth, mạng nội bộ hay thông báo, và nó không xin quyền theo dõi vì nó không theo dõi.",
        pol_perm_2: "Nếu máy bạn có lúc nào hiện ra một hộp xin quyền ghi tên ứng dụng này, xin hãy coi đó là lỗi và báo cho chúng tôi — ứng dụng không được thiết kế để làm việc đó.",

        pol_h_children: "Quyền riêng tư của trẻ em",
        pol_children_1: "Game là một game chiến thuật vẽ kiểu hoạt hình, không máu me, không trò chuyện, không nội dung do người dùng tạo và không có liên kết nào dẫn ra ngoài ứng dụng. Chúng tôi không cố ý thu thập thông tin cá nhân của bất kỳ ai ở bất kỳ độ tuổi nào, kể cả trẻ dưới 13 tuổi, bởi vì chúng tôi không thu thập thông tin cá nhân nào cả.",
        pol_children_2: "Trong ứng dụng không có gì để mua, nên không có giao dịch nào trẻ có thể lỡ tay thực hiện.",

        pol_h_rights: "Quyền của bạn",
        pol_rights_lead: "Theo GDPR, CCPA và các luật tương đương, bạn có quyền truy cập, chỉnh sửa, xoá, chuyển dữ liệu và phản đối đối với dữ liệu cá nhân của mình. Vì chúng tôi không giữ dữ liệu cá nhân nào về bạn nên không có gì ở phía chúng tôi để các yêu cầu đó chạm tới — nhưng các quyền đó vẫn có hiệu lực, và bạn hoàn toàn có thể liên hệ để xác nhận đúng điều này.",
        pol_rights_1: "<strong>Truy cập:</strong> chúng tôi không giữ dữ liệu nào về bạn để cung cấp.",
        pol_rights_2: "<strong>Xoá:</strong> gỡ ứng dụng là xoá mọi thứ ứng dụng đã lưu.",
        pol_rights_3: "<strong>Chuyển dữ liệu:</strong> không có tài khoản và không có bản ghi phía máy chủ nào để xuất ra.",
        pol_rights_4: "<strong>Phản đối:</strong> trong ứng dụng không có việc lập hồ sơ, ra quyết định tự động hay quảng cáo nhắm mục tiêu nào để phản đối.",

        pol_h_security: "Bảo mật",
        pol_security: "Vì ứng dụng lưu dữ liệu cục bộ và không truyền đi thứ gì, các rủi ro thông thường của dữ liệu trên đường truyền không phát sinh. Tệp lưu trên máy bạn được bảo vệ bởi chính bảo mật của thiết bị — nên có khoá màn hình. Không phương thức lưu trữ điện tử nào an toàn tuyệt đối, nhưng cũng không có bản sao nào ở đâu khác để mà gặp rủi ro.",

        pol_h_changes: "Thay đổi với Chính sách này",
        pol_changes_1: "Chúng tôi có thể cập nhật Chính sách quyền riêng tư này theo thời gian — ví dụ nếu một phiên bản sau của ứng dụng có thêm tính năng làm thay đổi cách xử lý dữ liệu. Chúng tôi sẽ đăng chính sách mới trên trang này và cập nhật ngày \"Cập nhật lần cuối\" ở đầu trang.",
        pol_changes_2: "Bạn nên xem lại Chính sách này định kỳ. Các thay đổi có hiệu lực khi được đăng trên trang này.",

        pol_h_contact: "Liên hệ",
        pol_contact_lead: "Nếu bạn có câu hỏi nào về Chính sách quyền riêng tư này, bạn có thể liên hệ:",
        pol_contact_email: "Qua email",
        pol_contact_addr: "Qua địa chỉ",
        pol_contact_addr_v: "Nhân Mỹ, Lý Nhân, Hà Nam 400000, Việt Nam",
        pol_contact_dev: "Tên nhà phát triển",
        pol_contact_dev_v: "tdson",
        pol_contact_app: "Mã ứng dụng",
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
        currentLang = sel.value;
        localStorage.setItem('castleofancients-lang', currentLang);
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
        galImg.src = SHOT_DIR + active.dataset.shot + '.png';
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
