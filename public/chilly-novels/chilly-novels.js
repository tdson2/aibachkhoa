/* =========================================================
   Chilly Novels — product page + privacy policy.
   English and Vietnamese. Vietnamese is the app's own
   interface language, so it is the one the copy is written
   against; English is the translation.
   ========================================================= */
const SHOT_DIR = '/assets/apps/novels/';

const i18n = {
    en: {
        page_title: "Chilly Novels — download once, read offline | AIBachKhoa",
        meta_desc: "A small Vietnamese reading app for short stories and comics. Pick what you want, download it once — a story weighs about 15 KB — and read it offline forever. No account, nothing to sign up for.",
        pol_page_title: "Chilly Novels — privacy policy | AIBachKhoa",
        pol_meta_desc: "Chilly Novels has no accounts and collects no personal information. Favourites, history and reading progress stay on your device. Where the stories come from, and how to ask for one to be removed.",

        aria_lang: "Change language",
        aria_theme: "Toggle theme",
        aria_menu: "Open menu",
        skip_link: "Skip to content",

        nav_home: "Home",
        nav_overview: "Overview",
        nav_library: "The library",
        nav_reading: "Reading",
        nav_shots: "Screenshots",
        nav_policy: "Privacy",
        nav_back: "Back to the app",

        hero_kicker: "Android · Vietnamese · offline reading",
        hero_title: "Download once. <em>Read offline</em> forever.",
        hero_sub: "A small library of short stories and comics. Pick the ones you want, pull them onto the phone once, and they are yours to read on a plane, on the metro, or anywhere the signal gives up. A whole story weighs about fifteen kilobytes.",
        btn_play: "Get it on Google Play",
        btn_shots: "See how it reads",
        hero_meta_app: "Application id",
        hero_meta_rest: "portrait, Android phones · Vietnamese interface · rated Teen · free, with ads",

        quote: "Tải truyện về máy một lần rồi đọc offline thoải mái.",

        how_eyebrow: "How it works",
        how_title: "Three taps, then the network stops mattering.",
        how_lede: "The app opens on a shelf-building screen rather than a sign-up form. Nothing streams while you read, so a dead signal never costs you a chapter.",
        how_1_h: "Build the shelf",
        how_1_p: "On first run the app shows the whole catalogue with a checkbox and a size beside each title, and adds up what you picked at the bottom. Take a couple, or take the lot — two stories came to 193 KB.",
        how_2_h: "Pull it down",
        how_2_p: "One download and the text lives on the phone. Anything you skipped stays in the catalogue, and you can come back for it whenever you next have a connection.",
        how_3_h: "Read anywhere",
        how_3_p: "Downloaded stories open with no network at all. Favourites, reading history and progress are written to the phone and never leave it.",

        lib_eyebrow: "The library",
        lib_title: "Two kinds of story, sorted the way you look for them.",
        lib_lede: "The shelf holds prose and comics side by side, grouped into everyday life, humour, school and fantasy. The search sheet narrows it down without making you scroll.",
        lib_f1_b: "Prose or comics.",
        lib_f1: "Filter to one or the other, or leave it on everything.",
        lib_f2_b: "Sort that admits what it is.",
        lib_f2: "By title, by chapter count, or by how much space it will take.",
        lib_f3_b: "Downloaded only.",
        lib_f3: "One switch hides everything you have not pulled down yet — the view you want on a train.",
        lib_f4_b: "Genre chips.",
        lib_f4: "Everyday life, humour, school, fantasy — and per-story tags like adventure or detective.",

        read_eyebrow: "Before you commit",
        read_title: "Every story tells you its size first.",
        read_lede: "Open a title and you get the cover, the author, how many chapters there are and exactly how many kilobytes it will cost you — on the button itself, before you tap it.",
        read_f1_b: "A summary, not a teaser.",
        read_f1: "Two lines telling you what the story actually is, so you can put it back.",
        read_f2_b: "Kept private on the device.",
        read_f2: "Downloads sit in the app's own storage, encrypted, where nothing else on the phone reads them.",
        read_f3_b: "Favourites and progress.",
        read_f3: "A heart on the story, a progress tab for what you have been through. Both stay on the phone.",
        read_f4_b: "No account, ever.",
        read_f4: "There is no sign-up screen, because there is nothing to sign up to.",

        gal_eyebrow: "Screenshots",
        gal_title: "The whole app, six screens.",
        gal_lede: "Straight from the current build on Google Play.",
        gal_t1: "Home", gal_c1_h: "Home",
        gal_c1_p: "A featured story at the top, then shelves by genre. Each cover carries its size, and anything already on the phone is flagged.",
        gal_t2: "Search", gal_c2_h: "Search and filter",
        gal_c2_p: "Type a title or an author, or work down the sheet: story type, sort order, downloaded-only, then the genre chips.",
        gal_t3: "A story", gal_c3_h: "A story page",
        gal_c3_p: "Cover, author, type, chapter count and size — and a download button that names the price in kilobytes before you press it.",
        gal_t4: "First run", gal_c4_h: "Building the shelf",
        gal_c4_p: "The first screen after install: tick a few stories, watch the total add up, and download them together. Or leave it for later.",
        gal_t5: "Terms", gal_c5_h: "Terms and privacy, in the app",
        gal_c5_p: "The same four points as the policy page — where the stories come from, no warranty, what stays on your device, and how to ask for a takedown.",
        gal_t6: "Welcome", gal_c6_h: "Opening the app",
        gal_c6_p: "The splash screen, in the light theme. The app follows the system theme and ships in dark as well.",

        facts_title: "At a glance",
        f1: "kinds of story: prose and comics",
        f2: "for a whole prose story",
        f3: "genres on the shelf",
        f4_b: "Offline",
        f4: "once a story is downloaded",
        f5_b: "None",
        f5: "accounts or personal data collected",

        pol_h1: "Privacy policy",
        pol_date: "Chilly Novels · last updated 3 September 2026",
        pol_tldr: "The short version: there is no account, the app collects no personal information, and everything you do in it — favourites, reading history, progress — is written to your phone and stays there. Uninstall the app and it is all gone.",
        pol_sources_h: "Where the stories come from",
        pol_sources_p: "Every story in the app is collected from sources published openly on the internet, then compiled and edited for reading. We are not the copyright holder, and we do not vouch for the legal standing of any individual source. Copyright remains with the authors and their original publishers.",
        pol_takedown_h: "Asking for something to be removed",
        pol_takedown_p: "If you own the rights to a work in the app and want it taken down, email us with enough detail to identify it and we will remove it as soon as we can. There is no form to fill in and no argument to be had — write to <a href=\"mailto:tdson278@gmail.com\">tdson278@gmail.com</a>.",
        pol_data_h: "What the app stores, and where",
        pol_data_p: "The app has no accounts and asks for no personal information — no name, no email, no phone number, no contacts, no location. These stay on the device and are never sent anywhere:",
        pol_data_1: "Stories you have downloaded, held in the app's own private storage in encrypted form.",
        pol_data_2: "Your favourites.",
        pol_data_3: "Reading history and progress.",
        pol_data_4: "Settings, such as the theme and the language.",
        pol_data_after: "Uninstalling the app deletes all of it. There is no backup on our side to restore from, because there is no copy on our side.",
        pol_net_h: "When the app uses the network",
        pol_net_p: "The app reaches the network for two things: listing the catalogue and downloading a story you asked for. Reading itself is entirely offline — once a story is on the phone, you can put the device in airplane mode and it will open exactly the same.",
        pol_ads_h: "Advertising",
        pol_ads_p: "The app is free and shows ads. Ads are served by a third-party provider, which may use your device's advertising identifier under its own privacy policy. We do not receive that identifier, and we do not connect anything in the app to it. Android lets you reset or delete that identifier in Settings, and the app keeps working either way.",
        pol_warranty_h: "No warranty",
        pol_warranty_p: "The app is provided as it is, with no guarantee attached. We are not liable for incidents, damages or copyright disputes arising from your use of it, including data loss and interruptions of service.",
        pol_stores_h: "What Google Play sees",
        pol_stores_p: "Installing and updating the app happens through Google Play. Google handles that transaction under its own privacy policy and may report aggregate, anonymous figures to us — how many people installed the app in a country, for instance. We receive no personal information from them and cannot connect any of it to a person.",
        pol_children_h: "Children",
        pol_children_p: "The app is rated Teen. Because it collects no data at all, it collects no data about children either. It has no chat, no user-generated content and no purchases.",
        pol_changes_h: "Changes to this policy",
        pol_changes_p: "If a future version of the app changes what it stores or what it sends, this page will be updated before that version ships, and the date at the top will change with it.",
        pol_contact_h: "Contact",
        pol_contact_p: "Questions about this policy, or a takedown request: <a href=\"mailto:tdson278@gmail.com\">tdson278@gmail.com</a>.",
        pol_credit_p: "Chilly Novels is made by AIBachKhoa.",

        footer_desc: "Building practical AI tools for developers and businesses.",
        footer_app: "The app",
        footer_prod: "Other products",
        footer_comp: "Company",
        footer_about: "About",
        footer_services: "Services",
        footer_contact: "Contact",
        footer_rights: "All rights reserved."
    },

    vi: {
        page_title: "Chilly Novels — tải một lần, đọc offline | AIBachKhoa",
        meta_desc: "Ứng dụng đọc truyện ngắn và truyện tranh. Chọn truyện bạn thích, tải một lần — mỗi truyện chữ chỉ khoảng 15 KB — rồi đọc offline thoải mái. Không tài khoản, không phải đăng ký.",
        pol_page_title: "Chilly Novels — chính sách quyền riêng tư | AIBachKhoa",
        pol_meta_desc: "Chilly Novels không có tài khoản và không thu thập thông tin cá nhân. Truyện yêu thích, lịch sử và tiến trình đọc đều nằm trên máy bạn. Nguồn truyện đến từ đâu, và cách yêu cầu gỡ nội dung.",

        aria_lang: "Đổi ngôn ngữ",
        aria_theme: "Đổi giao diện sáng/tối",
        aria_menu: "Mở menu",
        skip_link: "Bỏ qua tới nội dung",

        nav_home: "Trang chủ",
        nav_overview: "Tổng quan",
        nav_library: "Tủ truyện",
        nav_reading: "Khi đọc",
        nav_shots: "Ảnh màn hình",
        nav_policy: "Quyền riêng tư",
        nav_back: "Quay lại ứng dụng",

        hero_kicker: "Android · tiếng Việt · đọc offline",
        hero_title: "Tải một lần. <em>Đọc offline</em> mãi mãi.",
        hero_sub: "Một tủ truyện nhỏ gồm truyện chữ và truyện tranh. Chọn truyện bạn muốn, tải về máy một lần, rồi đọc trên máy bay, dưới tàu điện, hay bất cứ đâu sóng đã bỏ cuộc. Một truyện chữ trọn bộ chỉ nặng chừng mười lăm kilobyte.",
        btn_play: "Tải trên Google Play",
        btn_shots: "Xem giao diện đọc",
        hero_meta_app: "Mã ứng dụng",
        hero_meta_rest: "màn hình dọc, điện thoại Android · giao diện tiếng Việt · gán nhãn Teen · miễn phí, có quảng cáo",

        quote: "Tải truyện về máy một lần rồi đọc offline thoải mái.",

        how_eyebrow: "Cách hoạt động",
        how_title: "Ba lần chạm, rồi sóng mạng hết quan trọng.",
        how_lede: "Mở app lên là màn hình chuẩn bị tủ sách, không phải form đăng ký. Lúc đọc không có gì tải trực tuyến, nên mất sóng cũng không mất chương nào.",
        how_1_h: "Chuẩn bị tủ sách",
        how_1_p: "Lần đầu mở, app bày cả kho truyện kèm ô chọn và dung lượng từng truyện, rồi cộng tổng ở dưới cùng. Lấy vài truyện, hay lấy hết cũng được — hai truyện cộng lại mới 193 KB.",
        how_2_h: "Tải về máy",
        how_2_p: "Tải một lần là chữ nằm sẵn trên máy. Truyện bạn bỏ qua vẫn còn trong kho, khi nào có mạng quay lại lấy tiếp.",
        how_3_h: "Đọc ở bất cứ đâu",
        how_3_p: "Truyện đã tải mở được khi không có mạng. Truyện yêu thích, lịch sử và tiến trình đọc đều ghi xuống máy và không rời khỏi đó.",

        lib_eyebrow: "Tủ truyện",
        lib_title: "Hai loại truyện, sắp theo đúng cách bạn đi tìm.",
        lib_lede: "Truyện chữ và truyện tranh nằm cạnh nhau, chia theo đời thường, hài hước, học đường và kỳ ảo. Bảng tìm kiếm lọc gọn lại để bạn khỏi phải cuộn.",
        lib_f1_b: "Truyện chữ hay truyện tranh.",
        lib_f1: "Lọc riêng một loại, hoặc để tất cả.",
        lib_f2_b: "Sắp xếp thẳng thắn.",
        lib_f2: "Theo tên truyện, số chương, hoặc dung lượng sẽ chiếm.",
        lib_f3_b: "Chỉ truyện đã tải.",
        lib_f3: "Một công tắc ẩn hết những gì chưa tải về — đúng thứ bạn cần khi đang trên tàu.",
        lib_f4_b: "Thẻ thể loại.",
        lib_f4: "Đời thường, hài hước, học đường, kỳ ảo — cùng thẻ riêng từng truyện như phiêu lưu hay trinh thám.",

        read_eyebrow: "Trước khi tải",
        read_title: "Truyện nào cũng khai dung lượng trước.",
        read_lede: "Mở một truyện ra là thấy bìa, tác giả, bao nhiêu chương và tốn đúng bao nhiêu kilobyte — ghi ngay trên nút, trước khi bạn chạm vào.",
        read_f1_b: "Tóm tắt thật, không câu kéo.",
        read_f1: "Hai dòng nói đúng truyện là gì, để bạn còn kịp xếp lại lên kệ.",
        read_f2_b: "Nằm riêng trên máy bạn.",
        read_f2: "Truyện tải về nằm trong bộ nhớ riêng của ứng dụng, ở dạng đã mã hoá, không ứng dụng nào khác trên máy đọc được.",
        read_f3_b: "Yêu thích và tiến trình.",
        read_f3: "Một trái tim trên truyện, một tab tiến trình cho những gì bạn đã đọc qua. Cả hai đều ở lại trên máy.",
        read_f4_b: "Không tài khoản, không bao giờ.",
        read_f4: "Không có màn hình đăng ký, vì chẳng có gì để đăng ký cả.",

        gal_eyebrow: "Ảnh màn hình",
        gal_title: "Toàn bộ ứng dụng, sáu màn hình.",
        gal_lede: "Chụp thẳng từ bản đang phát hành trên Google Play.",
        gal_t1: "Trang chính", gal_c1_h: "Trang chính",
        gal_c1_p: "Truyện nổi bật ở trên, rồi các kệ chia theo thể loại. Mỗi bìa đều ghi dung lượng, truyện nào đã có trên máy thì được đánh dấu.",
        gal_t2: "Tìm kiếm", gal_c2_h: "Tìm kiếm và lọc",
        gal_c2_p: "Gõ tên truyện hoặc tác giả, hoặc lần theo bảng lọc: loại truyện, cách sắp xếp, chỉ truyện đã tải, rồi tới thẻ thể loại.",
        gal_t3: "Trang truyện", gal_c3_h: "Trang một truyện",
        gal_c3_p: "Bìa, tác giả, loại truyện, số chương và dung lượng — cùng nút tải ghi rõ cái giá tính bằng kilobyte trước khi bạn bấm.",
        gal_t4: "Lần đầu mở", gal_c4_h: "Chuẩn bị tủ sách",
        gal_c4_p: "Màn hình đầu tiên sau khi cài: tích vài truyện, nhìn tổng dung lượng cộng dần, rồi tải cùng lúc. Hoặc để sau cũng được.",
        gal_t5: "Điều khoản", gal_c5_h: "Điều khoản và quyền riêng tư ngay trong app",
        gal_c5_p: "Đúng bốn mục như trang chính sách — truyện lấy từ đâu, miễn trừ trách nhiệm, những gì ở lại trên máy bạn, và cách yêu cầu gỡ nội dung.",
        gal_t6: "Mở app", gal_c6_h: "Lúc mở ứng dụng",
        gal_c6_p: "Màn hình chào, ở giao diện sáng. Ứng dụng chạy theo giao diện hệ thống nên có sẵn cả bản tối.",

        facts_title: "Vài con số",
        f1: "loại truyện: truyện chữ và truyện tranh",
        f2: "cho một truyện chữ trọn bộ",
        f3: "thể loại trên kệ",
        f4_b: "Offline",
        f4: "một khi truyện đã tải về",
        f5_b: "Không",
        f5: "tài khoản hay dữ liệu cá nhân nào được thu thập",

        pol_h1: "Chính sách quyền riêng tư",
        pol_date: "Chilly Novels · cập nhật lần cuối 3 tháng 9, 2026",
        pol_tldr: "Nói ngắn gọn: không có tài khoản, ứng dụng không thu thập thông tin cá nhân, và mọi thứ bạn làm trong đó — truyện yêu thích, lịch sử đọc, tiến trình — đều ghi xuống máy bạn và ở lại đó. Gỡ ứng dụng là mất sạch.",
        pol_sources_h: "Truyện đến từ đâu",
        pol_sources_p: "Toàn bộ truyện trong ứng dụng được thu thập từ các nguồn công khai trên Internet, sau đó tổng hợp và chỉnh sửa lại cho phù hợp để đọc. Chúng tôi không phải chủ sở hữu bản quyền và không xác nhận tính hợp lệ của từng nguồn. Bản quyền thuộc về tác giả và đơn vị phát hành gốc.",
        pol_takedown_h: "Yêu cầu gỡ nội dung",
        pol_takedown_p: "Nếu bạn là chủ sở hữu bản quyền một tác phẩm trong ứng dụng và muốn gỡ nó xuống, hãy gửi email kèm thông tin đủ để nhận ra tác phẩm, chúng tôi sẽ gỡ sớm nhất có thể. Không có biểu mẫu nào phải điền và không có gì phải tranh cãi — viết cho <a href=\"mailto:tdson278@gmail.com\">tdson278@gmail.com</a>.",
        pol_data_h: "Ứng dụng lưu gì, và lưu ở đâu",
        pol_data_p: "Ứng dụng không có tài khoản và không hỏi thông tin cá nhân nào — không tên, không email, không số điện thoại, không danh bạ, không vị trí. Những thứ sau nằm trên máy và không được gửi đi đâu cả:",
        pol_data_1: "Truyện bạn đã tải, giữ trong bộ nhớ riêng của ứng dụng ở dạng đã mã hoá.",
        pol_data_2: "Danh sách truyện yêu thích.",
        pol_data_3: "Lịch sử và tiến trình đọc.",
        pol_data_4: "Cài đặt, chẳng hạn giao diện và ngôn ngữ.",
        pol_data_after: "Gỡ ứng dụng là xoá sạch tất cả. Không có bản sao lưu nào bên phía chúng tôi để khôi phục, vì bên chúng tôi không hề có bản sao.",
        pol_net_h: "Khi nào ứng dụng dùng mạng",
        pol_net_p: "Ứng dụng chỉ chạm tới mạng cho hai việc: lấy danh sách kho truyện và tải truyện bạn yêu cầu. Còn việc đọc thì hoàn toàn offline — truyện đã nằm trên máy rồi thì bật chế độ máy bay nó vẫn mở y như thường.",
        pol_ads_h: "Quảng cáo",
        pol_ads_p: "Ứng dụng miễn phí và có hiển thị quảng cáo. Quảng cáo do một nhà cung cấp bên thứ ba phân phối, và bên đó có thể dùng mã nhận dạng quảng cáo của thiết bị theo chính sách riêng của họ. Chúng tôi không nhận mã đó và không gắn bất cứ thứ gì trong ứng dụng với nó. Android cho phép bạn đặt lại hoặc xoá mã này trong phần Cài đặt, và ứng dụng vẫn chạy bình thường.",
        pol_warranty_h: "Miễn trừ trách nhiệm",
        pol_warranty_p: "Ứng dụng được cung cấp nguyên trạng, không kèm bảo đảm nào. Chúng tôi không chịu trách nhiệm với bất kỳ sự cố, thiệt hại hay tranh chấp bản quyền nào phát sinh trong quá trình bạn sử dụng, bao gồm cả mất dữ liệu và gián đoạn dịch vụ.",
        pol_stores_h: "Google Play thấy những gì",
        pol_stores_p: "Việc cài đặt và cập nhật diễn ra qua Google Play. Google xử lý giao dịch đó theo chính sách riêng của họ và có thể báo cho chúng tôi các con số tổng hợp, ẩn danh — chẳng hạn bao nhiêu người đã cài ứng dụng ở một quốc gia. Chúng tôi không nhận thông tin cá nhân nào từ họ và không thể gắn bất cứ con số nào với một người cụ thể.",
        pol_children_h: "Trẻ em",
        pol_children_p: "Ứng dụng được gán nhãn Teen. Vì không thu thập dữ liệu nào cả, nó cũng không thu thập dữ liệu về trẻ em. Ứng dụng không có chat, không có nội dung do người dùng đăng và không có giao dịch mua bán.",
        pol_changes_h: "Thay đổi chính sách này",
        pol_changes_p: "Nếu một phiên bản sau thay đổi những gì ứng dụng lưu hoặc gửi đi, trang này sẽ được cập nhật trước khi phiên bản đó phát hành, và ngày ở đầu trang sẽ đổi theo.",
        pol_contact_h: "Liên hệ",
        pol_contact_p: "Thắc mắc về chính sách này, hoặc yêu cầu gỡ nội dung: <a href=\"mailto:tdson278@gmail.com\">tdson278@gmail.com</a>.",
        pol_credit_p: "Chilly Novels do AIBachKhoa thực hiện.",

        footer_desc: "Xây những công cụ AI dùng được cho lập trình viên và doanh nghiệp.",
        footer_app: "Ứng dụng",
        footer_prod: "Sản phẩm khác",
        footer_comp: "Công ty",
        footer_about: "Giới thiệu",
        footer_services: "Dịch vụ",
        footer_contact: "Liên hệ",
        footer_rights: "Bảo lưu mọi quyền."
    }
};

const LANGS = [
    { code: 'en', label: 'English' },
    { code: 'vi', label: 'Tiếng Việt' }
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
        const own = localStorage.getItem('chilly-novels-lang');
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
        localStorage.setItem('chilly-novels-lang', currentLang);
        updateLanguage(currentLang);
    }));

    // ---------- Screenshot gallery ----------
    const tabs = Array.from(document.querySelectorAll('.cn-gal-tab'));
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
        galImg.alt = 'Chilly Novels — ' + (dict[key + '_h'] || '');
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
