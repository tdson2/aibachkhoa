/* =========================================================
   JeMul — product page + privacy policy.
   English and Vietnamese, same runtime as the other product
   pages on the site.
   ========================================================= */
const SHOT_DIR = '/assets/apps/jemulwap/';

const i18n = {
    en: {
        page_title: "JeMul — J2ME emulator for Android and browser | AIBachKhoa",
        meta_desc: "JeMul runs the old Java ME games from feature phones. Install the Android app to play your own .jar files, or play a whole library in your browser.",
        pol_page_title: "JeMul — privacy policy | AIBachKhoa",
        pol_meta_desc: "JeMul has no accounts on Android and keeps everything on the device. The browser edition signs in with Google only to control who can play.",

        aria_lang: "Change language",
        aria_theme: "Toggle theme",
        aria_menu: "Open menu",
        skip_link: "Skip to content",

        nav_home: "Home",
        nav_overview: "Overview",
        nav_android: "Android app",
        nav_web: "Play in browser",
        nav_shots: "Screenshots",
        nav_policy: "Privacy",
        nav_back: "Back to JeMul",

        hero_kicker: "Android app · browser edition · J2ME",
        hero_title: "The games from your first phone, <em>running again</em>.",
        hero_sub: "JeMul is a Java ME emulator. Install the Android app and point it at your own .jar files, or open the browser edition and a library of over a thousand titles is already there — nothing to install, nothing to configure.",
        hero_meta: "Application id <code>com.tdson.jemul</code> · Android phones and tablets · free",
        btn_play: "Get it on Google Play",
        btn_web: "Play in your browser",
        btn_web_open: "Open the browser edition",

        ov_eyebrow: "What it is",
        ov_title: "An emulator, not a download site.",
        ov_lede: "JeMul runs MIDP applications — the .jar files that feature phones ran between roughly 2001 and 2012. It ships with no game content of its own: on Android you bring your own files, and the browser edition reads a library the operator has already put on the server.",
        c1_h: "Real controls",
        c1_p: "A full phone keypad: D-pad, both soft keys, 0–9, star and hash, clear. On a computer every one of them is a keyboard key you can rebind; on a phone they are buttons under your thumbs.",
        c2_h: "Made for old screens",
        c2_p: "These games were drawn for 128×128 up to 480×800. JeMul scales them with the pixels kept crisp, keeps the original aspect ratio, and can rotate the display for the builds that expect a landscape handset.",
        c3_h: "Your progress stays",
        c3_p: "High scores and saved games are kept the way the original game expects and preserved between sessions, so quitting and coming back tomorrow picks up where you left off.",

        an_eyebrow: "Android app",
        an_title: "JeMul on your phone.",
        an_lede: "Add a .jar or .jad file, and it appears in your library with its icon and size. Everything runs on the device — no account, no server, no network needed after the file is on the phone.",
        an_l1: "Import .jar and .jad files straight from storage",
        an_l2: "Library with search, recently played, and per-game details",
        an_l3: "On-screen keypad in Nokia, Samsung or Sony Ericsson layouts",
        an_l4: "Fullscreen, aspect-ratio lock, size and frame-rate settings",
        an_l5: "Game sound and haptic feedback on every key press",

        web_eyebrow: "Browser edition",
        web_title: "Nothing to install.",
        web_lede: "The browser edition does the heavy lifting for you, so the games run at the speed of a desktop rather than of a phone from 2006. Sign in with Google and press play.",
        web_l1: "A library of more than a thousand titles, searchable and filterable",
        web_l2: "60 frames per second, with the frame rate shown while you play",
        web_l3: "Keyboard, mouse for touch games, and an on-screen keypad",
        web_l4: "A glass interface you can retune: colours, blur, scale, scanlines",
        web_l5: "Works on a phone too: controls and screen on one screen, no scrolling",

        gal_eyebrow: "Screenshots",
        gal_title: "A look around.",
        g1_t: "Library", g1_h: "The library",
        g1_p: "Cover art where the collection has it, the icon out of the .jar where it does not. Filter by genre, screen size or year, or just search.",
        g2_t: "Game details", g2_h: "One title, many builds",
        g2_p: "A single game was often shipped in dozens of builds, one per handset. Pick the screen size you want and the right file is the one that runs.",
        g3_t: "Playing", g3_h: "Playing",
        g3_p: "The screen, a keypad, and every control listed on the right with the key that triggers it. Pause, fast-forward, restart and screenshots are one key away.",
        g4_t: "Settings", g4_h: "Settings that do something",
        g4_p: "Glass opacity, blur, accent colour, scaling, scanlines — and the emulator's own options: handset model, rotation, frame cap, sound.",
        g5_t: "Keyboard", g5_h: "The keyboard guide",
        g5_p: "Every phone key next to the keyboard key bound to it. Click a row and press a new key to rebind it, even while a game is running.",
        g6_t: "On a phone", g6_h: "On a phone",
        g6_p: "In landscape the D-pad and action keys sit either side of the screen; in portrait they sit underneath. Nothing scrolls, and focus mode hides everything but the game.",

        facts_eyebrow: "The details",
        facts_title: "In short.",
        f1_t: "Platforms", f1_v: "Android · any modern browser",
        f2_t: "Runs", f2_v: "J2ME / MIDP 2.0 .jar files",
        f3_t: "Price", f3_v: "Free",
        f4_t: "Application id",

        cta_title: "Pick where you want to play.",

        footer_desc: "Building practical AI tools for developers and businesses.",
        footer_app: "The app",
        footer_prod: "Other products",
        footer_comp: "Company",
        footer_about: "About",
        footer_services: "Services",
        footer_contact: "Contact",
        footer_rights: "All rights reserved.",

        pol_title: "Privacy policy",
        pol_updated: "Last updated: 7 September 2026",
        pol_s1_h: "The short version",
        pol_s1_p: "The Android app has no accounts and sends nothing anywhere: your games, saves and settings stay on the device. The browser edition asks you to sign in with Google before starting a game, so the operator knows who is using the server — that is the only personal data involved.",
        pol_s2_h: "What the Android app stores",
        pol_s2_l1: "The .jar and .jad files you import, in the app's own storage.",
        pol_s2_l2: "Saved games and high scores written by the games themselves.",
        pol_s2_l3: "Your display, keypad and sound settings.",
        pol_s2_p: "All of it is on your device. Uninstalling the app removes it. Nothing is uploaded, and there is no analytics or advertising SDK reading it.",
        pol_s3_h: "What the browser edition stores",
        pol_s3_l1: "Your Google account's name, email address and profile picture, taken from the sign-in and used to identify you to the operator.",
        pol_s3_l2: "A record of visits and of which games were started, when, and for how long — used to see how the server is being used.",
        pol_s3_l3: "Your interface settings and in-game saves, kept on the server so they are there next time.",
        pol_s3_p: "Sign-in is handled by Google Firebase Authentication; JeMul never sees your password. Firebase Analytics is used for basic page and event counts. You can stop all of it by signing out and not playing.",
        pol_s4_h: "Game content",
        pol_s4_p: "JeMul supplies no games. On Android you provide the files yourself. In the browser edition the library belongs to whoever runs that installation; the authors of JeMul did not create it, do not own it and do not distribute it. Rights holders who want a title removed from an installation should contact its operator, and it will be taken down.",
        pol_s5_h: "Children",
        pol_s5_p: "JeMul is not directed at children under 13 and no personal data is knowingly collected from them.",
        pol_s6_h: "Your choices",
        pol_s6_l1: "Android: clear the app's data or uninstall it to remove everything.",
        pol_s6_l2: "Browser: sign out at any time; ask the operator to delete your activity record and saves.",
        pol_s6_l3: "Write to the address below and your data will be removed within 30 days.",
        pol_s7_h: "Contact",
        pol_s7_p: "Questions about this policy, or a request to remove data or content:",
    },

    vi: {
        page_title: "JeMul — giả lập game Java J2ME cho Android | AIBachKhoa",
        meta_desc: "JeMul chạy lại game Java ME của điện thoại phổ thông. Cài app Android để chơi file .jar của bạn, hoặc mở bản web chơi cả thư viện.",
        pol_page_title: "JeMul — chính sách quyền riêng tư | AIBachKhoa",
        pol_meta_desc: "Bản Android không có tài khoản và giữ mọi thứ trên máy. Bản web đăng nhập Google chỉ để biết ai đang dùng máy chủ.",

        aria_lang: "Đổi ngôn ngữ",
        aria_theme: "Đổi giao diện sáng/tối",
        aria_menu: "Mở menu",
        skip_link: "Tới nội dung",

        nav_home: "Trang chủ",
        nav_overview: "Tổng quan",
        nav_android: "App Android",
        nav_web: "Chơi trên web",
        nav_shots: "Ảnh chụp",
        nav_policy: "Quyền riêng tư",
        nav_back: "Quay lại JeMul",

        hero_kicker: "App Android · bản web · J2ME",
        hero_title: "Những game trên chiếc điện thoại đầu tiên, <em>chạy lại</em>.",
        hero_sub: "JeMul là trình giả lập Java ME. Cài app Android rồi trỏ vào file .jar của bạn, hoặc mở bản web — nơi đã có sẵn hơn một nghìn tựa game, không cần cài, không cần thiết lập.",
        hero_meta: "Mã ứng dụng <code>com.tdson.jemul</code> · điện thoại và máy tính bảng Android · miễn phí",
        btn_play: "Tải trên Google Play",
        btn_web: "Chơi trên trình duyệt",
        btn_web_open: "Mở bản web",

        ov_eyebrow: "JeMul là gì",
        ov_title: "Một trình giả lập, không phải trang tải game.",
        ov_lede: "JeMul chạy các ứng dụng MIDP — những file .jar mà điện thoại phổ thông chạy trong khoảng 2001–2012. Bản thân nó không kèm game nào: trên Android bạn tự đưa file vào, còn bản web đọc thư viện mà người vận hành đã đặt sẵn trên máy chủ.",
        c1_h: "Phím bấm đầy đủ",
        c1_p: "Nguyên bàn phím điện thoại: phím điều hướng, hai phím mềm, 0–9, sao và thăng, phím xóa. Trên máy tính mỗi phím đều gán lại được; trên điện thoại chúng nằm ngay dưới ngón tay.",
        c2_h: "Dành cho màn hình cũ",
        c2_p: "Các game này được vẽ cho 128×128 đến 480×800. JeMul phóng to mà vẫn giữ nét pixel, giữ đúng tỉ lệ gốc, và xoay được màn hình cho những bản làm cho máy nằm ngang.",
        c3_h: "Tiến trình được giữ lại",
        c3_p: "Điểm cao và game đã lưu được giữ đúng cách game gốc mong đợi và còn nguyên giữa các lần chơi, nên hôm sau mở lại là chơi tiếp.",

        an_eyebrow: "App Android",
        an_title: "JeMul trên điện thoại.",
        an_lede: "Thêm một file .jar hoặc .jad là nó xuất hiện trong thư viện kèm icon và dung lượng. Mọi thứ chạy ngay trên máy — không tài khoản, không máy chủ, không cần mạng sau khi đã có file.",
        an_l1: "Nhập file .jar và .jad trực tiếp từ bộ nhớ máy",
        an_l2: "Thư viện có tìm kiếm, chơi gần đây và chi tiết từng game",
        an_l3: "Bàn phím ảo theo kiểu Nokia, Samsung hoặc Sony Ericsson",
        an_l4: "Toàn màn hình, giữ tỉ lệ, chỉnh kích thước và tốc độ khung hình",
        an_l5: "Âm thanh game và rung phản hồi mỗi lần bấm phím",

        web_eyebrow: "Bản web",
        web_title: "Không phải cài gì cả.",
        web_lede: "Bản web gánh phần nặng thay bạn, nên game chạy bằng sức máy tính chứ không phải sức một chiếc điện thoại đời 2006. Đăng nhập Google rồi bấm chơi.",
        web_l1: "Thư viện hơn một nghìn tựa game, tìm và lọc được",
        web_l2: "60 khung hình mỗi giây, hiện số FPS ngay khi chơi",
        web_l3: "Bàn phím, chuột cho game cảm ứng, và bàn phím ảo trên màn hình",
        web_l4: "Giao diện kính chỉnh được: màu, độ mờ, tỉ lệ, đường quét",
        web_l5: "Chơi được cả trên điện thoại: phím và màn hình gọn trong một khung, không phải cuộn",

        gal_eyebrow: "Ảnh chụp",
        gal_title: "Nhìn qua một vòng.",
        g1_t: "Thư viện", g1_h: "Thư viện",
        g1_p: "Có ảnh bìa thì dùng ảnh bìa, không có thì lấy icon ngay trong file .jar. Lọc theo thể loại, độ phân giải hoặc năm, hoặc chỉ cần gõ tìm.",
        g2_t: "Chi tiết game", g2_h: "Một game, nhiều bản",
        g2_p: "Một game ngày xưa thường có hàng chục bản, mỗi bản cho một dòng máy. Chọn độ phân giải bạn muốn là chạy đúng file đó.",
        g3_t: "Đang chơi", g3_h: "Đang chơi",
        g3_p: "Màn hình, bàn phím, và toàn bộ điều khiển liệt kê bên phải kèm phím tương ứng. Tạm dừng, tua nhanh, khởi động lại, chụp màn hình đều chỉ một phím.",
        g4_t: "Cài đặt", g4_h: "Cài đặt dùng được thật",
        g4_p: "Độ trong của kính, độ mờ, màu nhấn, tỉ lệ, đường quét — và cả tuỳ chọn của máy ảo: dòng máy, xoay màn hình, giới hạn FPS, âm thanh.",
        g5_t: "Bàn phím", g5_h: "Bảng hướng dẫn phím",
        g5_p: "Từng phím điện thoại đặt cạnh phím bàn phím đang gán cho nó. Bấm một dòng rồi nhấn phím mới là đổi được, kể cả khi đang chơi.",
        g6_t: "Trên điện thoại", g6_h: "Trên điện thoại",
        g6_p: "Nằm ngang thì phím điều hướng và phím bấm chia hai bên màn hình; nằm dọc thì nằm bên dưới. Không phải cuộn, và chế độ tập trung ẩn hết chỉ chừa game.",

        facts_eyebrow: "Thông số",
        facts_title: "Tóm tắt.",
        f1_t: "Nền tảng", f1_v: "Android · mọi trình duyệt hiện đại",
        f2_t: "Chạy được", f2_v: "File .jar J2ME / MIDP 2.0",
        f3_t: "Giá", f3_v: "Miễn phí",
        f4_t: "Mã ứng dụng",

        cta_title: "Chọn nơi bạn muốn chơi.",

        footer_desc: "Xây dựng công cụ AI thiết thực cho lập trình viên và doanh nghiệp.",
        footer_app: "Ứng dụng",
        footer_prod: "Sản phẩm khác",
        footer_comp: "Công ty",
        footer_about: "Giới thiệu",
        footer_services: "Dịch vụ",
        footer_contact: "Liên hệ",
        footer_rights: "Bảo lưu mọi quyền.",

        pol_title: "Chính sách quyền riêng tư",
        pol_updated: "Cập nhật lần cuối: 07/09/2026",
        pol_s1_h: "Tóm tắt",
        pol_s1_p: "Bản Android không có tài khoản và không gửi gì đi đâu: game, file lưu và cài đặt đều nằm trên máy bạn. Bản web yêu cầu đăng nhập Google trước khi chơi để người vận hành biết ai đang dùng máy chủ — đó là dữ liệu cá nhân duy nhất liên quan.",
        pol_s2_h: "Bản Android lưu những gì",
        pol_s2_l1: "Các file .jar và .jad bạn nhập vào, nằm trong bộ nhớ riêng của ứng dụng.",
        pol_s2_l2: "File lưu game và điểm cao do chính game ghi ra.",
        pol_s2_l3: "Cài đặt hiển thị, bàn phím và âm thanh của bạn.",
        pol_s2_p: "Tất cả nằm trên máy bạn. Gỡ ứng dụng là mất hết. Không có gì được tải lên, và không có SDK quảng cáo hay phân tích nào đọc chúng.",
        pol_s3_h: "Bản web lưu những gì",
        pol_s3_l1: "Tên, địa chỉ email và ảnh đại diện của tài khoản Google, lấy từ lần đăng nhập và dùng để nhận diện bạn với người vận hành.",
        pol_s3_l2: "Ghi nhận lượt truy cập và việc game nào được mở, lúc nào, trong bao lâu — để biết máy chủ đang được dùng ra sao.",
        pol_s3_l3: "Cài đặt giao diện và file lưu game, giữ trên máy chủ để lần sau vẫn còn.",
        pol_s3_p: "Việc đăng nhập do Google Firebase Authentication đảm nhiệm; JeMul không bao giờ thấy mật khẩu của bạn. Firebase Analytics được dùng để đếm lượt xem trang và sự kiện cơ bản. Bạn có thể dừng toàn bộ bằng cách đăng xuất và không chơi.",
        pol_s4_h: "Nội dung game",
        pol_s4_p: "JeMul không cung cấp game. Trên Android bạn tự đưa file vào. Ở bản web, thư viện thuộc về người vận hành bản cài đặt đó; tác giả JeMul không tạo ra, không sở hữu và không phân phối nó. Chủ sở hữu quyền muốn gỡ một tựa game khỏi một bản cài đặt xin liên hệ người vận hành bản đó, nội dung sẽ được gỡ.",
        pol_s5_h: "Trẻ em",
        pol_s5_p: "JeMul không hướng tới trẻ em dưới 13 tuổi và không chủ ý thu thập dữ liệu cá nhân từ các em.",
        pol_s6_h: "Quyền của bạn",
        pol_s6_l1: "Android: xoá dữ liệu ứng dụng hoặc gỡ cài đặt là xoá sạch.",
        pol_s6_l2: "Web: đăng xuất bất cứ lúc nào; yêu cầu người vận hành xoá lịch sử hoạt động và file lưu của bạn.",
        pol_s6_l3: "Gửi thư tới địa chỉ bên dưới, dữ liệu của bạn sẽ được xoá trong vòng 30 ngày.",
        pol_s7_h: "Liên hệ",
        pol_s7_p: "Thắc mắc về chính sách này, hoặc yêu cầu xoá dữ liệu hay nội dung:",
    },
};

const LANGS = [
    { code: 'en', label: 'English' },
    { code: 'vi', label: 'Tiếng Việt' },
];
const DEFAULT_LANG = 'en';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;

    // ---------- Theme ----------
    const themeToggles = [document.getElementById('theme-toggle'), document.getElementById('mobile-theme-toggle')].filter(Boolean);
    let currentTheme = localStorage.getItem('theme') || 'light';
    root.setAttribute('data-theme', currentTheme);
    themeToggles.forEach(btn => btn.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        root.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
    }));

    // ---------- Language ----------
    const langSelects = [document.getElementById('lang-select'), document.getElementById('mobile-lang-select')].filter(Boolean);
    const supported = LANGS.map(l => l.code);

    const detectLang = () => {
        // The URL wins: /vi/… is the Vietnamese page whatever the browser
        // or a previous visit would have preferred.
        const fromUrl = window.LangUrl && window.LangUrl.fromPath(supported);
        if (fromUrl) return fromUrl;
        const own = localStorage.getItem('jemul-lang');
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
        sel.innerHTML = LANGS.map(l => `<option value="${l.code}">${short ? l.code.toUpperCase() : l.label}</option>`).join('');
        sel.hidden = LANGS.length < 2;
    });

    const t = (lang, key) => (i18n[lang] && i18n[lang][key]) || i18n[DEFAULT_LANG][key] || '';

    const metaDesc = document.querySelector('meta[name="description"]');
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
        localStorage.setItem('jemul-lang', lang);
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
    const tabs = Array.from(document.querySelectorAll('.jm-gal-tab'));
    const galImg = document.getElementById('gal-img');
    const galTitle = document.getElementById('gal-title');
    const galCap = document.getElementById('gal-cap');

    function paintGallery() {
        const active = tabs.find(tab => tab.classList.contains('is-active'));
        if (!active || !galImg) return;
        const dict = i18n[currentLang] || i18n[DEFAULT_LANG];
        const key = active.dataset.key;
        galImg.src = SHOT_DIR + active.dataset.shot + '.webp';
        galImg.alt = 'JeMul — ' + (dict[key + '_h'] || '');
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
            tabs.slice(1).forEach(tab => { new Image().src = SHOT_DIR + tab.dataset.shot + '.webp'; });
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
