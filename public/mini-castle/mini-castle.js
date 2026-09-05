/* =========================================================
   Mini Castle product page + privacy policy.
   Same shape as novaryn.js / dungeon-blade.js: a self-contained
   dictionary, a language picker that remembers its own choice,
   and a theme toggle shared with the rest of the site.

   Vietnamese IS offered here — unlike the other product pages —
   because the game ships with a Vietnamese build and the store
   listing is bilingual.
   ========================================================= */

const i18n = {
    en: {
        footer_desc: "Building practical AI tools for developers and businesses.",
        footer_game: "The game",
        footer_prod: "Other products",
        footer_comp: "Company",
        footer_about: "About",
        footer_services: "Services",
        footer_contact: "Contact",
        footer_rights: "All rights reserved.",
        page_title: "Mini Castle — every gatherer is one less spear | AIBachKhoa",
        meta_desc: "A castle-defense game with a stripped-down RTS economy for iPhone, iPad and Android. Twenty nights, twenty-one maps, twenty-four edicts. No ads, no purchases, fully offline.",
        pol_page_title: "Privacy Policy — Mini Castle | AIBachKhoa",
        pol_meta_desc: "Mini Castle collects nothing. No account, no network access, no analytics, no ads — every save file stays on your device.",

        aria_lang: "Change language",
        aria_theme: "Toggle theme",
        aria_menu: "Open menu",
        skip_link: "Skip to content",

        nav_home: "Home",
        nav_overview: "Overview",
        nav_loop: "The loop",
        nav_economy: "Economy",
        nav_shots: "Screenshots",
        nav_policy: "Privacy",
        nav_back: "Back to the game",

        hero_kicker: "iPhone · iPad · Android · strategy",
        hero_title: "Every gatherer is <em>one less spear</em>.",
        hero_sub: "Mini Castle is a castle-defense game with a stripped-down RTS economy. Your people are both workers and soldiers, and you only ever have enough of them for one of those jobs.",
        btn_shots: "See how it plays",
        btn_policy: "Privacy policy",

        quote: "Send them to chop wood and your stores fill while your walls empty. Keep them holding spears and the walls hold — but next wave you cannot afford a single new recruit.",

        loop_eyebrow: "The loop",
        loop_title: "Forty-five seconds, then the horn.",
        loop_lede: "Twenty waves. If the castle falls, the run is over. Nothing else in the game is on a timer, which is why those forty-five seconds hurt.",
        loop_day_h: "Day · 45 seconds",
        loop_day_p: "Gather, build, train. Skip the rest of the day and the castle pays you gold for the time you gave back.",
        loop_night_h: "Night",
        loop_night_p: "Goblins pour in from the map edge, led from wave two on by a Chieftain that heals everything around it.",
        loop_edict_h: "Edict",
        loop_edict_p: "Draw three of twenty-four, keep one. It is the only permanent choice you make, and it is never the same three.",

        eco_eyebrow: "Economy",
        eco_title: "Three resources that never run at the same speed.",
        eco_lede: "The whole design sits on one tension: population is a hard ceiling, and everything you build to raise it is something you did not build to defend yourself.",
        eco_gold_h: "Gold",
        eco_gold_p: "Finite mines. Once a seam is dug out it is gone, so the map slowly pushes you outward and away from the walls.",
        eco_wood_h: "Wood",
        eco_wood_p: "Trees regrow. It is the one resource that rewards patience — and the one every building wants.",
        eco_meat_h: "Meat",
        eco_meat_p: "Sheep breed on their own; farms trickle forever but slowly. Run out and the whole army goes Hungry: 30% less damage and speed.",
        eco_pop_h: "Population",
        eco_pop_p: "Houses set the cap. Go over it and every unit is Exhausted — 25% off damage and movement — until you build your way back under.",
        eco_camps_h: "Goblin camps",
        eco_camps_p: "Raze one and every later wave is 12% weaker, stacking. Marching out to do it means leaving home undefended.",
        eco_maps_h: "21 maps",
        eco_maps_p: "Plains, highland, desert, archipelago, marsh and coast — from 89×58 up to 139×94 tiles. Win one to unlock the next.",

        gal_eyebrow: "Screenshots",
        gal_title: "Captured from the real build.",
        gal_lede: "Nothing here is mocked up: these are frames from an actual run, HUD and all.",
        gal_t1: "Last stand",
        gal_t2: "Night assault",
        gal_t3: "Held the line",
        gal_t4: "Choose a level",
        gal_t5: "Wave one",
        gal_t6: "On iPad",
        gal_c1_h: "Wave 19 of 20",
        gal_c1_p: "Three chieftains on the board at once, towers up, and the population bar sitting over its cap.",
        gal_c2_h: "The horn goes",
        gal_c2_p: "Goblins arrive from the map edge in bands, each led by one of nineteen possible monsters.",
        gal_c3_h: "The line holds",
        gal_c3_p: "Archers behind, warriors in front, and a repair crew keeping the towers standing.",
        gal_c4_h: "Twenty-one maps, seven pages",
        gal_c4_p: "Each map states its own tactical question. Only the first is unlocked when you install.",
        gal_c5_h: "Forty-five seconds on the clock",
        gal_c5_p: "The prepare phase, with the full touch HUD: resources, population, the recruit and build bar.",
        gal_c6_h: "Same game, more board",
        gal_c6_p: "On a 13-inch iPad the 4:3 frame shows more of the map above and below the castle.",

        facts_title: "At a glance",
        f1: "waves per run", f2: "maps", f3: "edicts", f4: "languages",
        f5_b: "None", f5: "ads, purchases or trackers",

        pol_eyebrow: "Legal",
        pol_title: "Privacy Policy",
        pol_updated: "Last updated: 2 September 2026",
        pol_short_h: "The short version",
        pol_short_p: "Mini Castle collects nothing, sends nothing and asks for no permissions. The app has no network access at all — the Android build ships without the INTERNET permission, and the iOS build makes no network calls. Everything it remembers stays in the app's own storage on your device.",
        pol_collect_h: "Information we collect",
        pol_collect_p: "None. There is no account, no sign-in, no analytics SDK, no advertising SDK, no crash reporter and no telemetry of any kind. We never see that you installed the game, never see how you play it, and have no way to identify you.",
        pol_device_h: "What is stored on your device",
        pol_device_p: "Two small files, written by the game and readable only by it:",
        pol_device_li1: "<strong>settings.cfg</strong> — volume levels, language, team colour, control scheme and display options.",
        pol_device_li2: "<strong>progress.cfg</strong> — which of the 21 levels you have unlocked.",
        pol_device_p2: "Neither file leaves the device. Deleting the app deletes both. They are kept separate on purpose: clearing a broken setting should never cost you your campaign progress.",
        pol_perm_h: "Permissions",
        pol_perm_p: "The game requests no permissions. No camera, no microphone, no photos, no location, no contacts, no notifications, no network. Where an app store shows a permissions list for Mini Castle, it will be empty.",
        pol_stores_h: "What the app stores see",
        pol_stores_p: "Downloading and updating the game happens through Apple's App Store and Google Play. Those companies handle that transaction under their own privacy policies, and they may tell us aggregate, anonymous figures — how many people installed the app in a country, for instance. We receive no personal information from them and cannot connect any of it to a person.",
        pol_children_h: "Children",
        pol_children_p: "The game is rated 9+ / PEGI 7 for mild fantasy violence and is safe for children in the sense that matters here: because it collects no data at all, it collects no data about children either. It contains no chat, no user-generated content, no links out and no purchases.",
        pol_changes_h: "Changes to this policy",
        pol_changes_p: "If the game ever gains a feature that touches the network, this page will be updated before that version ships, and the date at the top will change with it.",
        pol_contact_h: "Contact",
        pol_contact_p: "Questions about this policy: <a href=\"mailto:tdson278@gmail.com\">tdson278@gmail.com</a>.",
        pol_credit_p: "Artwork from the Tiny Swords pack by Pixel Frog. Mini Castle is made by AIBachKhoa.",
    },

    vi: {
        footer_desc: "Xây những công cụ AI dùng được cho lập trình viên và doanh nghiệp.",
        footer_game: "Trò chơi",
        footer_prod: "Sản phẩm khác",
        footer_comp: "Công ty",
        footer_about: "Giới thiệu",
        footer_services: "Dịch vụ",
        footer_contact: "Liên hệ",
        footer_rights: "Bảo lưu mọi quyền.",
        page_title: "Mini Castle — mỗi dân đi hái là một dân không cầm giáo | AIBachKhoa",
        meta_desc: "Game thủ thành pha kinh tế RTS rút gọn cho iPhone, iPad và Android. Hai mươi đêm, hai mươi mốt bản đồ, hai mươi bốn sắc lệnh. Không quảng cáo, không mua trong ứng dụng, chơi offline hoàn toàn.",
        pol_page_title: "Chính sách quyền riêng tư — Mini Castle | AIBachKhoa",
        pol_meta_desc: "Mini Castle không thu thập bất cứ dữ liệu nào. Không tài khoản, không mạng, không phân tích, không quảng cáo — mọi thứ lưu trên máy bạn.",

        aria_lang: "Đổi ngôn ngữ",
        aria_theme: "Đổi giao diện sáng/tối",
        aria_menu: "Mở menu",
        skip_link: "Tới nội dung",

        nav_home: "Trang chủ",
        nav_overview: "Tổng quan",
        nav_loop: "Vòng chơi",
        nav_economy: "Kinh tế",
        nav_shots: "Ảnh trong game",
        nav_policy: "Quyền riêng tư",
        nav_back: "Quay lại trang game",

        hero_kicker: "iPhone · iPad · Android · chiến thuật",
        hero_title: "Mỗi dân đi hái là <em>một dân không cầm giáo</em>.",
        hero_sub: "Mini Castle là game thủ thành pha kinh tế RTS rút gọn. Người dân của bạn vừa là thợ vừa là lính, mà lúc nào cũng chỉ đủ người cho đúng một trong hai việc đó.",
        btn_shots: "Xem game chơi thế nào",
        btn_policy: "Chính sách quyền riêng tư",

        quote: "Cử họ đi đốn gỗ thì kho đầy nhưng tường thành trống. Giữ họ lại cầm giáo thì tường thành vững, mà sang đợt sau không đủ tài nguyên tuyển thêm một ai.",

        loop_eyebrow: "Vòng chơi",
        loop_title: "Bốn mươi lăm giây, rồi tiếng tù và.",
        loop_lede: "Hai mươi đợt. Lâu đài sụp là hết ván. Trong game không còn thứ gì khác bị bấm giờ — chính vì thế bốn mươi lăm giây đó mới đau.",
        loop_day_h: "Ngày · 45 giây",
        loop_day_p: "Thu thập, xây, tuyển quân. Bỏ qua phần ngày còn lại thì Lâu đài trả cho bạn vàng theo đúng số thời gian bạn nhường.",
        loop_night_h: "Đêm",
        loop_night_p: "Goblin tràn vào từ mép bản đồ; từ đợt 2 trở đi mỗi toán có một Thủ lĩnh hồi máu cho mọi thứ quanh nó.",
        loop_edict_h: "Sắc lệnh",
        loop_edict_p: "Rút 3 trong 24 lá, giữ 1. Đây là lựa chọn vĩnh viễn duy nhất bạn phải ra, và không ván nào rút trúng cùng bộ ba.",

        eco_eyebrow: "Kinh tế",
        eco_title: "Ba tài nguyên không bao giờ chảy cùng một nhịp.",
        eco_lede: "Toàn bộ thiết kế nằm trên một sức ép: dân số là trần cứng, mà mọi thứ bạn xây để nâng trần đều là thứ bạn đã không xây để tự vệ.",
        eco_gold_h: "Vàng",
        eco_gold_p: "Mỏ có hạn. Đào hết một vỉa là hết, nên bản đồ cứ từ từ đẩy bạn đi xa khỏi tường thành.",
        eco_wood_h: "Gỗ",
        eco_wood_p: "Cây mọc lại. Đây là tài nguyên duy nhất thưởng cho sự kiên nhẫn — và cũng là thứ mọi công trình đều cần.",
        eco_meat_h: "Thịt",
        eco_meat_p: "Cừu tự sinh sản; Trang Trại chảy mãi nhưng chảy chậm. Hết thịt là cả đội Đói: giảm 30% sát thương và tốc độ.",
        eco_pop_h: "Dân số",
        eco_pop_p: "Nhà dân quyết định trần. Vượt trần thì mọi quân đều Suy kiệt — giảm 25% sát thương và tốc chạy — cho tới khi bạn xây đủ nhà để chui lại xuống dưới.",
        eco_camps_h: "Trại goblin",
        eco_camps_p: "Phá một trại thì mọi đợt sau yếu đi 12%, cộng dồn. Nhưng đem quân đi phá nghĩa là để trống nhà.",
        eco_maps_h: "21 bản đồ",
        eco_maps_p: "Đồng bằng, cao nguyên, sa mạc, quần đảo, đầm lầy, bờ biển — từ 89×58 tới 139×94 ô. Thắng màn nào mở màn kế tiếp.",

        gal_eyebrow: "Ảnh trong game",
        gal_title: "Chụp từ bản build thật.",
        gal_lede: "Không có tấm nào là dựng cảnh: đây là các khung hình của một ván chơi thật, kèm nguyên HUD.",
        gal_t1: "Trận cuối",
        gal_t2: "Đêm tràn quân",
        gal_t3: "Giữ được tuyến",
        gal_t4: "Chọn màn",
        gal_t5: "Đợt một",
        gal_t6: "Trên iPad",
        gal_c1_h: "Đợt 19 trên 20",
        gal_c1_p: "Ba thủ lĩnh cùng lúc trên bản đồ, tháp đã dựng, và thanh dân số thì đang vượt trần.",
        gal_c2_h: "Tù và vang lên",
        gal_c2_p: "Goblin vào theo từng toán từ mép bản đồ, mỗi toán do một trong mười chín con quái dẫn đầu.",
        gal_c3_h: "Tuyến vẫn đứng",
        gal_c3_p: "Cung thủ phía sau, chiến binh phía trước, và một tổ thợ lo sửa để tháp khỏi sụp.",
        gal_c4_h: "Hai mươi mốt bản đồ, bảy trang",
        gal_c4_p: "Mỗi bản đồ đặt ra một câu hỏi chiến thuật riêng. Lúc mới cài chỉ mở đúng màn đầu.",
        gal_c5_h: "Bốn mươi lăm giây trên đồng hồ",
        gal_c5_p: "Pha chuẩn bị, với đầy đủ HUD cảm ứng: tài nguyên, dân số, thanh tuyển quân và xây dựng.",
        gal_c6_h: "Vẫn game đó, nhiều sân hơn",
        gal_c6_p: "Trên iPad 13 inch, khung 4:3 cho thấy nhiều bản đồ hơn ở phía trên và dưới Lâu đài.",

        facts_title: "Vài con số",
        f1: "đợt mỗi ván", f2: "bản đồ", f3: "sắc lệnh", f4: "ngôn ngữ",
        f5_b: "Không", f5: "quảng cáo, mua bán hay theo dõi",

        pol_eyebrow: "Pháp lý",
        pol_title: "Chính sách quyền riêng tư",
        pol_updated: "Cập nhật lần cuối: 2 tháng 9, 2026",
        pol_short_h: "Bản ngắn gọn",
        pol_short_p: "Mini Castle không thu thập gì, không gửi đi đâu và không xin quyền nào. Ứng dụng hoàn toàn không có khả năng truy cập mạng — bản Android phát hành không kèm quyền INTERNET, còn bản iOS không thực hiện bất kỳ lệnh gọi mạng nào. Mọi thứ game ghi nhớ đều nằm trong vùng lưu trữ riêng của nó trên máy bạn.",
        pol_collect_h: "Dữ liệu chúng tôi thu thập",
        pol_collect_p: "Không có. Không tài khoản, không đăng nhập, không SDK phân tích, không SDK quảng cáo, không công cụ báo lỗi và không đo đạc dưới bất kỳ hình thức nào. Chúng tôi không biết bạn đã cài game, không biết bạn chơi ra sao, và không có cách nào nhận ra bạn là ai.",
        pol_device_h: "Những gì được lưu trên máy bạn",
        pol_device_p: "Hai tệp nhỏ, do game ghi ra và chỉ mình nó đọc được:",
        pol_device_li1: "<strong>settings.cfg</strong> — mức âm lượng, ngôn ngữ, màu đội quân, kiểu điều khiển và tuỳ chọn hiển thị.",
        pol_device_li2: "<strong>progress.cfg</strong> — bạn đã mở khoá những màn nào trong 21 màn.",
        pol_device_p2: "Cả hai tệp đều không rời khỏi máy. Gỡ ứng dụng là xoá cả hai. Chúng được tách riêng có chủ đích: xoá một cấu hình hỏng thì không được phép làm mất luôn tiến trình chiến dịch của bạn.",
        pol_perm_h: "Quyền truy cập",
        pol_perm_p: "Game không xin quyền nào. Không camera, không micro, không ảnh, không vị trí, không danh bạ, không thông báo, không mạng. Chỗ nào cửa hàng ứng dụng hiện danh sách quyền của Mini Castle thì danh sách đó trống.",
        pol_stores_h: "Những gì cửa hàng ứng dụng nhìn thấy",
        pol_stores_p: "Việc tải và cập nhật game diễn ra qua App Store của Apple và Google Play. Hai công ty đó xử lý giao dịch ấy theo chính sách riêng của họ, và có thể cho chúng tôi biết vài con số tổng hợp, ẩn danh — chẳng hạn bao nhiêu lượt cài ở một quốc gia. Chúng tôi không nhận được thông tin cá nhân nào từ họ và không thể gắn bất kỳ con số nào với một con người cụ thể.",
        pol_children_h: "Trẻ em",
        pol_children_p: "Game được xếp hạng 9+ / PEGI 7 vì có bạo lực giả tưởng ở mức nhẹ, và an toàn với trẻ em theo đúng nghĩa quan trọng nhất ở đây: vì không thu thập dữ liệu nào cả, nên cũng không thu thập dữ liệu của trẻ em. Game không có trò chuyện, không có nội dung do người dùng tạo, không có liên kết ra ngoài và không có mua bán.",
        pol_changes_h: "Thay đổi chính sách",
        pol_changes_p: "Nếu sau này game có thêm tính năng nào đụng tới mạng, trang này sẽ được cập nhật TRƯỚC khi phiên bản đó phát hành, và ngày ở đầu trang sẽ đổi theo.",
        pol_contact_h: "Liên hệ",
        pol_contact_p: "Thắc mắc về chính sách này: <a href=\"mailto:tdson278@gmail.com\">tdson278@gmail.com</a>.",
        pol_credit_p: "Đồ hoạ lấy từ bộ Tiny Swords của Pixel Frog. Mini Castle do AIBachKhoa thực hiện.",
    }
};

const LANGS = [
    { code: 'en', label: 'English' },
    { code: 'vi', label: 'Tiếng Việt' }
];
const DEFAULT_LANG = 'en';
const SHOT_DIR = '/assets/games/mini-castle/';

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

    const detectLang = () => {
        const own = localStorage.getItem('mini-castle-lang');
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
    // The policy page carries its own title/description keys, so each page says
    // which pair it wants rather than the script guessing from the URL.
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
        localStorage.setItem('mini-castle-lang', currentLang);
        updateLanguage(currentLang);
    }));

    // ---------- Screenshot gallery ----------
    const tabs = Array.from(document.querySelectorAll('.mc-gal-tab'));
    const galImg = document.getElementById('gal-img');
    const galTitle = document.getElementById('gal-title');
    const galCap = document.getElementById('gal-cap');

    // The caption follows both the selected shot and the current language, so
    // changing either one alone is enough to repaint it.
    function paintGallery() {
        const active = tabs.find(tab => tab.classList.contains('is-active'));
        if (!active || !galImg) return;
        const dict = i18n[currentLang] || i18n[DEFAULT_LANG];
        const key = active.dataset.key;
        galImg.src = SHOT_DIR + active.dataset.shot + '.png';
        galImg.alt = 'Mini Castle — ' + (dict[key + '_h'] || '');
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
            tabs.slice(1).forEach(tab => { new Image().src = SHOT_DIR + tab.dataset.shot + '.png'; });
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
