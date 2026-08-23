/* =========================================================
   BKSafe product page.
   NOTE: Vietnamese ("vi") is temporarily hidden from the language
   picker, the same way it is on the landing page — the strings are
   kept in this file, so bringing it back only means adding
   { code: 'vi', label: 'Tiếng Việt' } to LANGS below (and, for the
   pre-JS paint, restoring the Vietnamese copy in index.html).
   Theme is shared with the main site through the same 'theme' key;
   the language choice is stored separately so it does not fight
   with the picker on the landing page.
   ========================================================= */

const i18n = {
    vi: {
        page_title: "BKSafe — Bảo vệ máy Mac, máy Windows và điện thoại Android | AIBachKhoa",
        meta_desc: "BKSafe theo dõi sức khoẻ máy, quét mã độc, dọn rác và canh lưu lượng mạng. Bản macOS 1.2.8 và bản Windows 1.2.9 tải trực tiếp, bản Android và bản Lite cho máy yếu trên Google Play.",
        aria_lang: "Đổi ngôn ngữ",
        aria_theme: "Đổi giao diện sáng tối",
        aria_menu: "Mở menu",
        skip_link: "Tới nội dung",

        nav_home: "Trang chủ",
        nav_overview: "Tổng quan",
        cta_download: "Tải về",

        hero_platforms: "macOS · Windows · Android",
        hero_title: "Máy của bạn, <em>trong tầm mắt</em>.",
        hero_sub: "BKSafe theo dõi sức khoẻ máy, quét mã độc, dọn rác và canh chừng lưu lượng mạng. Toàn bộ việc phân tích diễn ra ngay trên thiết bị — không có tệp nào của bạn rời khỏi máy.",
        btn_dl_mac: "Tải cho macOS",
        btn_dl_win: "Tải cho Windows",
        btn_dl_play: "Tải trên Google Play",
        hero_meta: "macOS 1.2.8 · 29 MB · universal cho Intel và Apple Silicon. Windows 1.2.9 · 19 MB · chạy ngay, không cần cài.",

        pillar_local_t: "Phân tích tại chỗ",
        pillar_local_d: "Mọi phép quét và đo đạc chạy trên chính thiết bị. Tệp của bạn không được tải lên máy chủ nào.",
        pillar_notary_t: "Đã công chứng Apple",
        pillar_notary_d: "Ký bằng Developer ID và đóng dấu công chứng. Kéo vào Applications là mở được, không cảnh báo, không cần gỡ chặn.",
        pillar_portable_t: "Chạy ngay, không cần cài",
        pillar_portable_d: "Bản Windows là một thư mục chép đi đâu cũng chạy — ổ USB, ổ mạng hay một máy khác. Không có bộ cài, bấm đúp là xong.",
        pillar_two_t: "Máy tính và điện thoại",
        pillar_two_d: "Bản macOS lo cho chiếc Mac, bản Windows lo cho chiếc PC, bản Android lo cho chiếc điện thoại. Cùng một triết lý, ba giao diện riêng.",

        pick_title: "Chọn nền tảng của bạn.",
        pick_sub: "Ba ứng dụng riêng biệt, mỗi bản được viết cho đúng hệ điều hành của nó.",
        pick_mac_kicker: "Ứng dụng máy tính",
        pick_mac_desc: "Chín màn hình theo dõi và bảo trì: hệ thống, dọn rác, quét mã độc, rà soát bảo mật, sức khoẻ ổ đĩa, nhiệt độ, mạng và cảnh báo bất thường.",
        pick_mac_go: "Xem bản macOS 1.2.8",
        pick_win_kicker: "Ứng dụng máy tính",
        pick_win_desc: "Mười màn hình: dọn rác, đo dung lượng, bộ nhớ, quét virus, chống mã hoá hàng loạt, an toàn hệ thống, dịch vụ nền, mạng, ổ cứng và giám sát.",
        pick_win_go: "Xem bản Windows 1.2.9",
        pick_droid_kicker: "Ứng dụng di động",
        pick_droid_desc: "Quét ứng dụng và tệp bằng mô hình AI chạy trên máy, chặn cuộc gọi lừa đảo, két bảo mật có mã PIN và điểm an toàn cho cả máy. Máy yếu thì có bản Lite.",
        pick_droid_go: "Xem bản Android",

        mac_eyebrow: "Bản macOS",
        mac_title: "Chiếc Mac của bạn, đo tới từng nhân xử lý.",
        mac_sub: "BKSafe lấy số liệu ngay từ nhân hệ điều hành và cảm biến của máy, làm mới hai giây một lần. Không đồ thị trang trí — mỗi con số đều là thứ đang thật sự xảy ra bên trong máy.",
        mac_badge_ver: "Phiên bản 1.2.8 · build 21",
        mac_badge_req: "macOS 11 Big Sur trở lên",
        mac_badge_arch: "Universal · Intel & Apple Silicon",

        f_sys_t: "Hệ thống",
        f_sys_d: "CPU, GPU, bộ nhớ, lưu trữ và mạng cạnh nhau. Cấu hình máy, thời gian bật, số tiến trình và áp lực bộ nhớ ngay trong một màn.",
        f_cpu_t: "CPU theo từng lõi",
        f_cpu_d: "Mức bận của từng lõi, tách rõ cụm lõi hiệu năng và cụm lõi tiết kiệm điện, tải trung bình 1/5/15 phút và những tiến trình ngốn CPU nhất.",
        f_gpu_t: "GPU",
        f_gpu_d: "Mức bận, khối dựng hình và khối chia mảnh, bộ nhớ đồ hoạ đang chiếm so với hạn mức, số nhân và số lần trình điều khiển phải dựng lại GPU.",
        f_mem_t: "Bộ nhớ",
        f_mem_d: "Chia đúng cách macOS chia: ứng dụng, ghim cứng, đã nén và đệm tệp. Kèm áp lực bộ nhớ và phần đã tráo ra ổ.",
        f_disk_t: "Sức khoẻ ổ đĩa",
        f_disk_d: "Đọc thẳng nhật ký SMART của ổ: mức hao mòn, khối dự phòng còn lại, tổng ghi, số lần tắt đột ngột, lỗi đọc ghi và nhiệt độ ổ.",
        f_temp_t: "Nhiệt độ",
        f_temp_d: "Toàn bộ cảm biến nhiệt của máy, chỉ rõ cảm biến nào đang nóng nhất và máy có đang phải hạ xung vì nhiệt hay không.",
        f_net_t: "Mạng",
        f_net_d: "Ai đang chuyển dữ liệu, chuyển bao nhiêu, qua đường truyền nào và máy đang mở những cổng nào ra ngoài — kèm lưu lượng theo từng tiến trình.",
        f_mon_t: "Cảnh báo bất thường",
        f_mon_d: "Lấy mẫu hai giây một lần và chỉ lên tiếng khi một chỉ số ở ngoài ngưỡng suốt nhiều lần liên tiếp. Ngưỡng do bạn đặt, mở một ứng dụng nặng không bị coi là bất thường.",
        f_clean_t: "Dọn rác",
        f_clean_d: "Tìm bộ nhớ đệm, nhật ký, tệp tạm và phần thừa của những ứng dụng đã gỡ. Bạn xem danh sách rồi mới quyết định xoá.",
        f_scan_t: "Quét mã độc",
        f_scan_d: "Rà các thư mục hay bị nhắm tới và những thứ tự khởi động cùng máy, đối chiếu với dấu hiệu của phần mềm quảng cáo và mã độc trên macOS.",
        f_sec_t: "Rà soát bảo mật",
        f_sec_d: "Kiểm các lớp phòng vệ của macOS, cổng đang mở và mọi thứ tự chạy cùng máy. Chỉ đọc cấu hình, không đổi gì trên máy bạn.",
        f_set_t: "Cài đặt",
        f_set_d: "Đặt ngưỡng cảnh báo, chọn nhận hay không nhận thông báo, và quyết định ứng dụng chạy nền tới đâu.",

        gal_title: "Nhìn tận mắt từng màn hình",
        gal_sub: "Ảnh chụp thật trên Mac mini M4 chạy macOS 26.6.",
        gal_aria: "Chọn màn hình",

        s01_tab: "Tổng quan", s01_title: "Hệ thống — Tổng quan",
        s01_cap: "CPU, GPU, bộ nhớ, lưu trữ và mạng cạnh nhau, kèm cấu hình máy và trạng thái hiện tại.",
        s02_tab: "CPU", s02_title: "Hệ thống — CPU",
        s02_cap: "Mức bận từng lõi, tách cụm lõi hiệu năng và cụm lõi tiết kiệm điện, tải trung bình 1/5/15 phút.",
        s03_tab: "GPU", s03_title: "Hệ thống — GPU",
        s03_cap: "Mức bận, khối dựng hình và chia mảnh, bộ nhớ đồ hoạ đang chiếm so với hạn mức.",
        s04_tab: "Bộ nhớ", s04_title: "Hệ thống — Bộ nhớ",
        s04_cap: "Chia theo đúng nhóm của macOS: ứng dụng, ghim cứng, đã nén, đệm tệp — kèm áp lực bộ nhớ.",
        s05_tab: "Lưu trữ", s05_title: "Hệ thống — Lưu trữ",
        s05_cap: "Tốc độ đọc ghi ngay lúc này và dung lượng của từng ổ đang gắn.",
        s06_tab: "Đường truyền", s06_title: "Hệ thống — Mạng",
        s06_cap: "Tốc độ từng đường truyền, số gói lỗi và lưu lượng luỹ kế.",
        s07_tab: "Dọn rác", s07_title: "Dọn rác",
        s07_cap: "Điểm bắt đầu của một lượt dọn: bấm quét, xem danh sách tệp thừa rồi mới quyết định xoá.",
        s08_tab: "Quét mã độc", s08_title: "Quét mã độc",
        s08_cap: "Điểm bắt đầu của một lượt quét mã độc trên các thư mục hay bị nhắm tới.",
        s09_tab: "Bảo mật", s09_title: "Rà soát bảo mật",
        s09_cap: "Kiểm các lớp phòng vệ của macOS, cổng đang mở và mọi thứ tự chạy cùng máy. Chỉ đọc, không đổi gì.",
        s10_tab: "Ổ đĩa", s10_title: "Ổ đĩa — Sức khoẻ và lưu lượng",
        s10_cap: "Đọc nhật ký SMART của ổ, bộ đếm vào ra của nhân hệ điều hành và bản đồ khối thật của hệ tệp.",
        s11_tab: "Nhiệt độ", s11_title: "Nhiệt độ",
        s11_cap: "Toàn bộ cảm biến nhiệt, chỉ rõ cảm biến nào đang nóng nhất.",
        s12_tab: "Mạng", s12_title: "Mạng — Đường truyền, tiến trình và cổng",
        s12_cap: "Ai đang chuyển dữ liệu, chuyển bao nhiêu, và máy đang mở những cổng nào ra mạng.",
        s13_tab: "Giám sát", s13_title: "Giám sát — Cảnh báo bất thường",
        s13_cap: "Lấy mẫu hai giây một lần và chỉ lên tiếng khi một chỉ số nằm ngoài ngưỡng suốt nhiều lần liên tiếp.",
        s14_tab: "Cài đặt", s14_title: "Cài đặt",
        s14_cap: "Đặt ngưỡng cảnh báo, bật tắt thông báo và mức độ chạy nền của ứng dụng.",

        note_title: "Vì sao ứng dụng xin quyền Toàn quyền truy cập ổ đĩa",
        note_body: "BKSafe cần đọc IORegistry để lấy chỉ số SMART của ổ cứng và số liệu cảm biến nhiệt, cần gọi các công cụ hệ thống của macOS như <code>diskutil</code>, <code>nettop</code>, <code>lsof</code>, <code>tmutil</code>, và cần duyệt những thư mục rác nằm ngoài vùng chứa riêng của ứng dụng. Vì vậy ứng dụng chạy ngoài hộp cát và phát hành qua Developer ID thay vì qua Mac App Store — đúng cách CleanMyMac, iStat Menus hay Little Snitch vẫn làm. Quyền này chỉ dùng để đọc; ứng dụng không gửi gì ra ngoài.",

        steps_title: "Cài trong ba bước",
        step_1: "Tải tệp <code>BKSafe-1.2.8.dmg</code> về máy.",
        step_2: "Mở tệp vừa tải, kéo <strong>BKSafe</strong> vào thư mục <strong>Applications</strong>.",
        step_3: "Mở BKSafe từ Launchpad hoặc thư mục Ứng dụng.",
        steps_foot: "Không cần bấm chuột phải rồi chọn Mở, không cần vào Cài đặt để gỡ chặn, không có cảnh báo “không xác minh được nhà phát triển”. Vé công chứng của Apple được đóng thẳng vào cả tệp DMG lẫn ứng dụng bên trong, nên máy <strong>không có mạng</strong> vẫn mở được bình thường.",

        win_eyebrow: "Bản Windows",
        win_title: "Chiếc PC của bạn, không còn chỗ nào khuất.",
        win_sub: "Cùng một BKSafe, viết riêng cho Windows: mười màn hình lấy số liệu thật từ hệ điều hành — dọn rác, đo dung lượng, quét virus theo nội dung tệp, canh mã hoá hàng loạt, soi dịch vụ nền và báo khi có bất thường. Không có bộ cài: giải nén ra, bấm đúp là chạy.",
        win_badge_ver: "Phiên bản 1.2.9 · build 22",
        win_badge_req: "Windows 10 64-bit trở lên",
        win_badge_portable: "Chạy ngay — không cần cài đặt",

        w_clean_t: "Dọn rác",
        w_clean_d: "Tìm những gì Windows và các ứng dụng bỏ lại: thư mục tạm, kho cập nhật, bộ nhớ đệm trình duyệt, bản Windows cũ. Chỉ liệt kê — không gì bị xoá cho tới khi bạn tự chọn.",
        w_storage_t: "Dung lượng",
        w_storage_d: "Thư mục nào, tệp nào đang chiếm chỗ — đo thật chứ không ước lượng. Xem theo thư mục, theo tệp lớn nhất hoặc theo loại tệp.",
        w_mem_t: "Bộ nhớ",
        w_mem_d: "RAM đang đi đâu và tiến trình nào đang giữ nó, kèm phần đệm tệp có thể nhả ra khi máy cần.",
        w_scan_t: "Quét virus",
        w_scan_d: "Đọc nội dung từng tệp rồi đối chiếu chữ ký — không đoán theo tên hay đuôi tệp. Bạn chọn thư mục muốn quét.",
        w_guard_t: "Chống mã hoá hàng loạt",
        w_guard_d: "Canh hành vi chứ không canh mẫu: hàng loạt tài liệu bị ghi đè và đổi đuôi trong vài giây là ứng dụng lên tiếng ngay.",
        w_sec_t: "An toàn hệ thống",
        w_sec_d: "Các lớp phòng vệ của Windows có đang bật không, cái gì tự chạy cùng máy, và có bản vá nào đang chờ.",
        w_svc_t: "Dịch vụ hệ thống",
        w_svc_d: "Cái gì đang chạy nền dưới quyền hệ thống, ai ký nó và nó nằm ở đâu — dịch vụ mới cài được biết trong một hai giây.",
        w_net_t: "Mạng",
        w_net_d: "Đang truyền bao nhiêu, tiến trình nào truyền, và cổng nào đang mở ra ngoài.",
        w_disk_t: "Ổ cứng",
        w_disk_d: "Sức khoẻ phần cứng, lưu lượng đọc ghi và mức phân mảnh của từng ổ.",
        w_mon_t: "Giám sát",
        w_mon_d: "Toàn bộ máy trong một màn hình, kèm mọi cảnh báo đã phát. Chỉ lên tiếng khi một chỉ số ở ngoài ngưỡng bạn đặt.",

        win_note_title: "Khi nào cần chạy bằng quyền quản trị",
        win_note_body: "Xem hằng ngày thì bản thường là đủ — rà soát, quét virus, đo dung lượng và canh mã hoá hàng loạt đều chạy bình thường ở quyền người dùng. Chỉ ba việc cần quyền quản trị: xoá rác của chính Windows (thư mục tạm hệ thống, kho cập nhật, bản Windows cũ), dừng hoặc tắt một dịch vụ, và đếm số byte mạng theo từng tiến trình. Gói tải về có sẵn tệp <code>Chay bang quyen quan tri.bat</code>, và ngay trong ứng dụng cũng có nút <strong>Mở lại bằng quyền quản trị</strong> ở màn Cài đặt và màn Dọn rác.",

        win_steps_title: "Chạy trong ba bước",
        win_step_1: "Tải tệp <code>BKSafe-1.2.9-win-x64-portable.zip</code> rồi giải nén ra một thư mục.",
        win_step_2: "Bấm đúp vào <code>bksafe.exe</code>. Không có bước cài đặt nào.",
        win_step_3: "Muốn dọn rác của hệ thống thì chạy <code>Chay bang quyen quan tri.bat</code> đi kèm.",
        win_steps_foot: "Chép cả thư mục đi đâu cũng chạy — ổ USB, ổ mạng hay một máy khác; chỉ đừng tách riêng <code>bksafe.exe</code> khỏi thư mục <code>data</code> và các tệp .dll nằm cùng chỗ. Cài đặt của bạn nằm ở <code>%APPDATA%\\BKSafe\\BKSafe</code> nên xoá thư mục ứng dụng cũng không mất cài đặt. Ứng dụng chưa mua chứng chỉ ký mã nên lần đầu mở, SmartScreen có thể hiện một màn xanh — bấm <strong>More info</strong> rồi <strong>Run anyway</strong>.",

        droid_eyebrow: "Bản Android",
        droid_title: "Chiếc điện thoại tự lo được cho mình.",
        droid_sub: "Mô hình AI nằm sẵn trong máy soi ứng dụng và tệp, chặn cuộc gọi lừa đảo trước khi máy kịp đổ chuông, và cất những thứ riêng tư sau một mã PIN. Không có bước nào phải gửi dữ liệu lên máy chủ.",
        droid_badge_store: "Có trên Google Play",
        droid_badge_free: "Miễn phí tải về",
        droid_badge_vi: "Giao diện tiếng Việt",
        d_scan_t: "Quét nhanh bằng AI trên máy",
        d_scan_d: "Một chạm là soi hết ứng dụng đã cài và tệp trong máy. Mô hình chạy ngay trên điện thoại nên quét được cả khi đang ngoài vùng phủ sóng.",
        d_call_t: "Chặn cuộc gọi lừa đảo",
        d_call_d: "Số quấy rối và số lừa đảo bị chặn trước khi máy đổ chuông, kèm nhật ký để bạn xem lại đã chặn những ai.",
        d_vault_t: "Két bảo mật",
        d_vault_d: "Mật khẩu và thông tin nhạy cảm được mã hoá, mở khoá bằng mã PIN riêng của bạn.",
        d_bg_t: "Soi dịch vụ nền",
        d_bg_d: "Chỉ ra ứng dụng nào đang âm thầm chạy nền, ngốn pin hay gửi dữ liệu đi khi bạn không dùng tới.",
        d_score_t: "Điểm an toàn",
        d_score_d: "Một con số duy nhất cho biết máy đang ở mức nào, kèm danh sách việc cần làm để nâng điểm lên.",
        d_clean_t: "Dọn rác và bảo vệ riêng tư",
        d_clean_d: "Xoá tệp thừa, dọn dấu vết duyệt web và rà lại những quyền mà các ứng dụng đang giữ.",

        lite_title: "Máy yếu, máy cũ? Có bản Lite.",
        lite_sub: "BKSafe Lite bỏ hết phần chạy nền và giữ đúng bốn việc bạn bấm là chạy. Không thanh menu, không dịch vụ nền — mở lên là thấy thông tin máy và bốn nút.",
        lite_f1_t: "Quét tệp",
        lite_f1_d: "Đối chiếu chữ ký TLSH ngay trên máy — không cần mô hình AI nặng, không cần mạng.",
        lite_f2_t: "Dọn dẹp rác",
        lite_f2_d: "Tìm tệp thừa, cho xem danh sách và dung lượng lấy lại được rồi mới xoá.",
        lite_f3_t: "Kiểm tra pin",
        lite_f3_d: "Mức pin, nhiệt độ, số chu kỳ sạc và tình trạng sức khoẻ pin.",
        lite_f4_t: "Đo tốc độ mạng",
        lite_f4_d: "Tải xuống, tải lên, độ trễ và độ dao động, kèm loại kết nối và mức mất gói.",
        lite_note: "Bản Lite không có quét dịch vụ nền, giám sát lưu lượng, két mật khẩu hay điểm an toàn — những phần đó nằm ở bản đầy đủ.",

        dl_eyebrow: "Tải về",
        dl_title: "Lấy BKSafe về máy.",
        dl_sub: "Bản macOS và bản Windows tải thẳng từ đây. Hai bản Android lấy trên Google Play.",
        dl_mac_line: "Tệp cài đặt DMG · tải trực tiếp",
        dl_mac_btn: "Tải BKSafe-1.2.8.dmg (29 MB)",
        dl_droid_line: "Cài qua Google Play · tự động cập nhật",
        play_small: "TẢI VỀ TRÊN",
        spec_file: "Tên tệp",
        spec_size: "Kích cỡ",
        spec_ver: "Phiên bản", spec_ver_v: "1.2.8 (build 21)",
        spec_req: "Yêu cầu", spec_req_v: "macOS 11.0 Big Sur trở lên",
        spec_arch: "Kiến trúc", spec_arch_v: "Universal — Intel (x86_64) và Apple Silicon (arm64)",
        spec_sign: "Ký bởi",
        spec_notary: "Công chứng", spec_notary_v: "Đã công chứng Apple và đóng dấu (notarized + stapled)",
        spec_pkg: "Mã ứng dụng",
        spec_store: "Kênh phát hành", spec_store_v: "Google Play — bản cập nhật về thẳng máy",
        spec_price: "Giá", spec_price_v: "Miễn phí tải về",
        spec_lang: "Ngôn ngữ", spec_lang_v: "Tiếng Việt",
        sha_label: "SHA-256",
        sha_copy: "Sao chép",
        sha_copied: "Đã chép",
        sha_hint: "Đối chiếu bằng <code>shasum -a 256 BKSafe-1.2.8.dmg</code>, hoặc dùng luôn <a href=\"/downloads/BKSafe-1.2.8.dmg.sha256\" download>tệp .sha256 kèm theo</a>.",
        dl_droid_foot: "Máy yếu hay máy cũ thì lấy bản Lite ở bên. Chưa có bản iOS — trên iPhone, những gì BKSafe làm được đều nằm ngoài phạm vi mà iOS cho phép một ứng dụng chạm tới.",

        dl_win_line: "Gói portable ZIP · tải trực tiếp",
        dl_win_btn: "Tải gói Windows portable (19 MB)",
        dl_lite_line: "Cài qua Google Play · dành cho máy yếu",
        dl_lite_foot: "Bốn việc, không hơn: quét tệp, dọn rác, kiểm tra pin và đo tốc độ mạng. Không dịch vụ nền, không mô hình AI — nên nhẹ và ít ngốn pin.",
        spec_ver_win: "1.2.9 (build 22)",
        spec_req_win: "Windows 10 64-bit trở lên",
        spec_arch_win: "x64 — sau khi giải nén chiếm khoảng 39 MB",
        spec_req_droid: "Android 7.0 trở lên",
        spec_install: "Cài đặt",
        spec_install_v: "Không cần — giải nén rồi bấm đúp <code>bksafe.exe</code>",
        spec_sign_win: "Chưa ký mã — SmartScreen có thể hỏi ở lần mở đầu",
        sha_hint_win: "Đối chiếu bằng <code>Get-FileHash BKSafe-1.2.9-win-x64-portable.zip -Algorithm SHA256</code> trong PowerShell, hoặc dùng luôn <a href=\"/downloads/BKSafe-1.2.9-win-x64-portable.zip.sha256\" download>tệp .sha256 kèm theo</a>.",

        faq_title: "Vài câu hay được hỏi.",
        faq_1_q: "BKSafe có gửi dữ liệu của tôi đi đâu không?",
        faq_1_a: "Không. Việc quét và đo đạc chạy hoàn toàn trên thiết bị. Ứng dụng không tải tệp, danh sách tiến trình hay số liệu máy của bạn lên bất kỳ máy chủ nào — bạn có thể tự kiểm chứng bằng chính màn Mạng của ứng dụng, nơi liệt kê lưu lượng theo từng tiến trình.",
        faq_2_q: "Vì sao bản macOS không có trên Mac App Store?",
        faq_2_a: "Ứng dụng trên App Store bắt buộc chạy trong hộp cát, mà trong hộp cát thì không đọc được chỉ số SMART của ổ, không đọc được cảm biến nhiệt và không duyệt được thư mục rác ngoài vùng chứa riêng. Vì vậy BKSafe phát hành qua Developer ID và công chứng của Apple — cách mà CleanMyMac, iStat Menus hay Little Snitch vẫn dùng.",
        faq_3_q: "Mở lên có bị macOS chặn không?",
        faq_3_a: "Không. Bản 1.2.8 được ký bằng Developer ID và đã qua công chứng của Apple, vé công chứng đóng thẳng vào cả tệp DMG lẫn ứng dụng bên trong. Bạn chỉ cần kéo vào Applications rồi mở như mọi ứng dụng khác, kể cả lúc máy không có mạng.",
        faq_4_q: "Máy Mac chip Intel dùng được không?",
        faq_4_a: "Được. Đây là gói universal, chạy nguyên bản trên cả Intel (x86_64) lẫn Apple Silicon (arm64). Chỉ có một tệp tải về, không phải chọn bản cho đúng máy.",
        faq_5_q: "Làm sao biết tệp tải về là tệp gốc?",
        faq_5_a: "Trên Mac chạy <code>shasum -a 256 BKSafe-1.2.8.dmg</code>; trên Windows mở PowerShell rồi chạy <code>Get-FileHash BKSafe-1.2.9-win-x64-portable.zip -Algorithm SHA256</code>. So kết quả với chuỗi SHA-256 đăng ở mục Tải về — trùng nhau nghĩa là tệp còn nguyên vẹn.",
        faq_6_q: "Các bản có dùng chung tài khoản không?",
        faq_6_a: "Không. macOS, Windows và Android là những ứng dụng độc lập, mỗi bản làm việc riêng trên thiết bị của nó. Không có tài khoản chung, cũng không có dữ liệu nào đồng bộ qua lại giữa các máy.",

        faq_w1_q: "Bản Windows có phải cài đặt không?",
        faq_w1_a: "Không. Đây là gói portable: giải nén tệp ZIP ra một thư mục rồi bấm đúp <code>bksafe.exe</code>. Chép cả thư mục sang ổ USB hay máy khác vẫn chạy — chỉ đừng tách riêng <code>bksafe.exe</code> khỏi thư mục <code>data</code> và các tệp .dll đi kèm. Cài đặt của bạn được lưu riêng ở <code>%APPDATA%\\BKSafe\\BKSafe</code>.",
        faq_w2_q: "Windows hiện màn xanh “Windows protected your PC” thì làm sao?",
        faq_w2_a: "Bấm <strong>More info</strong> rồi <strong>Run anyway</strong>. Ứng dụng chưa mua chứng chỉ ký mã, nên SmartScreen cảnh báo ở những lần mở đầu. Nếu mở không lên, chuột phải vào <code>bksafe.exe</code> → Properties → đánh dấu <strong>Unblock</strong> ở cuối thẻ General → OK. Bạn có thể đối chiếu chuỗi SHA-256 đăng ở mục Tải về để chắc tệp còn nguyên vẹn.",
        faq_w3_q: "Khi nào phải chạy bằng quyền quản trị?",
        faq_w3_a: "Chỉ khi muốn xoá rác của chính Windows, dừng hoặc tắt một dịch vụ, hoặc đếm số byte mạng theo từng tiến trình. Khi ấy dùng tệp <code>Chay bang quyen quan tri.bat</code> đi kèm, hoặc bấm <strong>Mở lại bằng quyền quản trị</strong> ngay trong ứng dụng. Xem hằng ngày thì quyền người dùng là đủ.",
        faq_lite_q: "Bản Lite khác bản BKSafe đầy đủ thế nào?",
        faq_lite_a: "Bản Lite (<code>com.tdson.bksafelite</code>) giữ bốn việc: quét tệp, dọn rác, kiểm tra pin và đo tốc độ mạng. Nó không dùng mô hình AI mà đối chiếu chữ ký TLSH, và không chạy dịch vụ nền nào — nên nhẹ hơn và ít ngốn pin hơn trên máy yếu. Chặn cuộc gọi lừa đảo, quét dịch vụ nền, két bảo mật và điểm an toàn chỉ có ở bản đầy đủ. Hai bản cài song song được vì là hai ứng dụng riêng.",

        cta_title: "Bắt đầu với chiếc máy bạn đang dùng.",
        cta_contact: "Liên hệ",

        footer_desc: "Xây những công cụ AI dùng được thật, cho lập trình viên và doanh nghiệp.",
        footer_bk: "BKSafe",
        footer_mac: "Bản macOS",
        footer_win: "Bản Windows",
        footer_droid: "Bản Android",
        footer_prod: "Sản phẩm khác",
        footer_comp: "Công ty",
        footer_about: "Giới thiệu",
        footer_services: "Dịch vụ",
        footer_contact: "Liên hệ",
        footer_rights: "Bảo lưu mọi quyền."
    },

    en: {
        page_title: "BKSafe — Security for your Mac, your PC and your Android phone | AIBachKhoa",
        meta_desc: "BKSafe watches machine health, scans for malware, clears junk and keeps an eye on network traffic. macOS 1.2.8 and Windows 1.2.9 as direct downloads, Android and the lightweight Lite build on Google Play.",
        aria_lang: "Change language",
        aria_theme: "Toggle theme",
        aria_menu: "Open menu",
        skip_link: "Skip to content",

        nav_home: "Home",
        nav_overview: "Overview",
        cta_download: "Download",

        hero_platforms: "macOS · Windows · Android",
        hero_title: "Your machine, <em>in plain sight</em>.",
        hero_sub: "BKSafe watches machine health, scans for malware, clears out junk and keeps an eye on network traffic. Every bit of analysis happens on the device — none of your files ever leave it.",
        btn_dl_mac: "Download for macOS",
        btn_dl_win: "Download for Windows",
        btn_dl_play: "Get it on Google Play",
        hero_meta: "macOS 1.2.8 · 29 MB · universal for Intel and Apple Silicon. Windows 1.2.9 · 19 MB · runs straight out of the folder.",

        pillar_local_t: "Analysis stays local",
        pillar_local_d: "Every scan and measurement runs on the device itself. Your files are never uploaded to a server.",
        pillar_notary_t: "Notarized by Apple",
        pillar_notary_d: "Signed with a Developer ID and notarized. Drag it into Applications and open it — no warning, no unblocking.",
        pillar_portable_t: "Runs without installing",
        pillar_portable_d: "The Windows build is a folder you can copy anywhere — a USB stick, a network share, another PC. No installer; double-click and it runs.",
        pillar_two_t: "Desktop and phone",
        pillar_two_d: "The macOS app looks after the Mac, the Windows app after the PC, the Android app after the phone. Same thinking, three interfaces built for their own platform.",

        pick_title: "Pick your platform.",
        pick_sub: "Three separate apps, each written for the operating system it runs on.",
        pick_mac_kicker: "Desktop app",
        pick_mac_desc: "Nine screens for monitoring and upkeep: system, cleaner, malware scan, security audit, disk health, temperature, network and anomaly alerts.",
        pick_mac_go: "See the macOS 1.2.8 build",
        pick_win_kicker: "Desktop app",
        pick_win_desc: "Ten screens: cleaner, storage, memory, virus scan, ransomware guard, system safety, services, network, drive health and monitoring.",
        pick_win_go: "See the Windows 1.2.9 build",
        pick_droid_kicker: "Mobile app",
        pick_droid_desc: "Scans apps and files with an on-device AI model, blocks scam calls, keeps a PIN-locked vault and scores how safe the phone is. Older phones get the Lite build.",
        pick_droid_go: "See the Android build",

        mac_eyebrow: "macOS build",
        mac_title: "Your Mac, measured down to the core.",
        mac_sub: "BKSafe reads straight from the kernel and the machine's own sensors, refreshed every two seconds. No decorative charts — every figure is something actually happening inside the Mac.",
        mac_badge_ver: "Version 1.2.8 · build 21",
        mac_badge_req: "macOS 11 Big Sur or later",
        mac_badge_arch: "Universal · Intel & Apple Silicon",

        f_sys_t: "System",
        f_sys_d: "CPU, GPU, memory, storage and network side by side. Machine spec, uptime, process count and memory pressure on one screen.",
        f_cpu_t: "CPU, core by core",
        f_cpu_d: "Load on each core with performance and efficiency clusters kept apart, 1/5/15-minute load averages, and the processes eating the most CPU.",
        f_gpu_t: "GPU",
        f_gpu_d: "Utilisation, renderer and tiler activity, graphics memory in use against its limit, core count, and how often the driver had to rebuild the GPU.",
        f_mem_t: "Memory",
        f_mem_d: "Split the way macOS actually splits it: app memory, wired, compressed and file cache — with memory pressure and how much has been swapped out.",
        f_disk_t: "Disk health",
        f_disk_d: "Reads the drive's own SMART log: wear level, spare blocks left, total written, unsafe shutdowns, media errors and drive temperature.",
        f_temp_t: "Temperature",
        f_temp_d: "Every thermal sensor in the machine, which one is hottest right now, and whether the Mac is throttling because of heat.",
        f_net_t: "Network",
        f_net_d: "Who is moving data, how much of it, over which interface, and which ports this Mac exposes — broken down per process.",
        f_mon_t: "Anomaly alerts",
        f_mon_d: "Samples every two seconds and speaks up only when a figure stays outside its range across several samples. You set the thresholds, so opening a heavy app is not an anomaly.",
        f_clean_t: "Cleaner",
        f_clean_d: "Finds caches, logs, temporary files and leftovers from apps you removed. You see the list, then you decide what goes.",
        f_scan_t: "Malware scan",
        f_scan_d: "Sweeps the folders that get targeted and everything that launches with the Mac, matched against known macOS adware and malware signatures.",
        f_sec_t: "Security audit",
        f_sec_d: "Checks macOS's defence layers, open ports and everything that starts itself with the Mac. Reads settings only — changes nothing.",
        f_set_t: "Settings",
        f_set_d: "Set alert thresholds, choose whether notifications appear, and decide how much the app does in the background.",

        gal_title: "See every screen for yourself",
        gal_sub: "Real captures from a Mac mini M4 running macOS 26.6.",
        gal_aria: "Choose a screen",

        s01_tab: "Overview", s01_title: "System — Overview",
        s01_cap: "CPU, GPU, memory, storage and network side by side, with the machine spec and its current state.",
        s02_tab: "CPU", s02_title: "System — CPU",
        s02_cap: "Load per core with performance and efficiency clusters kept apart, plus 1/5/15-minute load averages.",
        s03_tab: "GPU", s03_title: "System — GPU",
        s03_cap: "Utilisation, renderer and tiler activity, and graphics memory in use against its limit.",
        s04_tab: "Memory", s04_title: "System — Memory",
        s04_cap: "Grouped the way macOS groups it: app, wired, compressed and file cache — with memory pressure.",
        s05_tab: "Storage", s05_title: "System — Storage",
        s05_cap: "Read and write speed right now, and the capacity of every mounted volume.",
        s06_tab: "Interfaces", s06_title: "System — Network",
        s06_cap: "Throughput per interface, error packets and cumulative traffic.",
        s07_tab: "Cleaner", s07_title: "Cleaner",
        s07_cap: "The start of a cleaning pass: run the scan, review the list of junk, then decide what gets deleted.",
        s08_tab: "Malware scan", s08_title: "Malware scan",
        s08_cap: "The start of a malware pass over the folders that tend to get targeted.",
        s09_tab: "Security", s09_title: "Security audit",
        s09_cap: "Checks macOS's defence layers, open ports and everything that starts with the Mac. Reads only, changes nothing.",
        s10_tab: "Disk", s10_title: "Disk — Health and traffic",
        s10_cap: "Reads the drive's own SMART log, the kernel's I/O counters and the filesystem's real block map.",
        s11_tab: "Temperature", s11_title: "Temperature",
        s11_cap: "Every thermal sensor, and which one is running hottest.",
        s12_tab: "Network", s12_title: "Network — Interfaces, processes and ports",
        s12_cap: "Who is moving data, how much of it, and which ports this Mac exposes to the network.",
        s13_tab: "Monitor", s13_title: "Monitor — Anomaly detection",
        s13_cap: "Samples every two seconds and speaks up only when a figure stays outside its normal range.",
        s14_tab: "Settings", s14_title: "Settings",
        s14_cap: "Alert thresholds, notification switches, and how much the app runs in the background.",

        note_title: "Why the app asks for Full Disk Access",
        note_body: "BKSafe reads IORegistry to pull the drive's SMART figures and thermal sensor data, calls macOS system tools such as <code>diskutil</code>, <code>nettop</code>, <code>lsof</code> and <code>tmutil</code>, and walks junk folders that sit outside the app's own container. That is why it runs outside the sandbox and ships through a Developer ID rather than the Mac App Store — the same route CleanMyMac, iStat Menus and Little Snitch take. The access is used for reading only; nothing is sent anywhere.",

        steps_title: "Installed in three steps",
        step_1: "Download <code>BKSafe-1.2.8.dmg</code>.",
        step_2: "Open it and drag <strong>BKSafe</strong> into <strong>Applications</strong>.",
        step_3: "Open BKSafe from Launchpad or the Applications folder.",
        steps_foot: "No right-click-then-Open, no trip to Settings to unblock it, no “unidentified developer” warning. Apple's notarization ticket is stapled to both the DMG and the app inside it, so the Mac opens it fine even with <strong>no network connection</strong>.",

        win_eyebrow: "Windows build",
        win_title: "Your PC, with nothing left in the dark.",
        win_sub: "The same BKSafe, written for Windows: ten screens reading real figures from the operating system — cleaner, storage, virus scanning by file content, ransomware guard, background services, and an alert when something goes out of range. No installer: unzip it, double-click it, it runs.",
        win_badge_ver: "Version 1.2.9 · build 22",
        win_badge_req: "Windows 10 64-bit or later",
        win_badge_portable: "Portable — no installation",

        w_clean_t: "Cleaner",
        w_clean_d: "Finds what Windows and your apps leave behind: temp folders, the update store, browser caches, the old Windows install. It only lists — nothing is deleted until you pick it.",
        w_storage_t: "Storage",
        w_storage_d: "Which folders and which files are taking up the room — measured, not estimated. View by folder, by largest file, or by file type.",
        w_mem_t: "Memory",
        w_mem_d: "Where the RAM is going and which process is holding it, plus the file cache that can be handed back when the machine needs it.",
        w_scan_t: "Virus scan",
        w_scan_d: "Reads the contents of each file and matches it against signatures — no guessing from names or extensions. You choose the folders to sweep.",
        w_guard_t: "Ransomware guard",
        w_guard_d: "Watches behaviour rather than samples: the moment a batch of documents is overwritten and renamed within seconds, the app speaks up.",
        w_sec_t: "System safety",
        w_sec_d: "Whether Windows' defence layers are switched on, what starts itself with the machine, and whether any patch is waiting.",
        w_svc_t: "System services",
        w_svc_d: "What is running in the background with system rights, who signed it and where it lives — a newly installed service shows up within a second or two.",
        w_net_t: "Network",
        w_net_d: "How much is moving, which process is moving it, and which ports are open to the outside.",
        w_disk_t: "Drive",
        w_disk_d: "Hardware health, read and write throughput, and how fragmented each volume is.",
        w_mon_t: "Monitor",
        w_mon_d: "The whole machine on one screen, with every alert it has raised. It speaks up only when a figure sits outside the range you set.",

        win_note_title: "When you need administrator rights",
        win_note_body: "For everyday use the normal build is enough — auditing, virus scanning, measuring storage and the ransomware guard all work at user level. Only three things need administrator rights: deleting Windows' own junk (the system temp folder, the update store, the old Windows install), stopping or disabling a service, and counting network bytes per process. The download ships with <code>Chay bang quyen quan tri.bat</code>, and the app itself has a <strong>Relaunch as administrator</strong> button on the Settings and Cleaner screens.",

        win_steps_title: "Running it in three steps",
        win_step_1: "Download <code>BKSafe-1.2.9-win-x64-portable.zip</code> and unzip it into a folder.",
        win_step_2: "Double-click <code>bksafe.exe</code>. There is no installation step.",
        win_step_3: "To clear the system's own junk, use the bundled <code>Chay bang quyen quan tri.bat</code>.",
        win_steps_foot: "Copy the whole folder anywhere and it runs — a USB stick, a network share, another PC; just do not separate <code>bksafe.exe</code> from the <code>data</code> folder and the .dll files beside it. Your settings live in <code>%APPDATA%\\BKSafe\\BKSafe</code>, so deleting the app folder does not lose them. The app has no code-signing certificate yet, so the first launch may bring up a blue SmartScreen panel — click <strong>More info</strong> then <strong>Run anyway</strong>.",

        droid_eyebrow: "Android build",
        droid_title: "A phone that looks after itself.",
        droid_sub: "An AI model that lives on the phone inspects apps and files, scam calls are blocked before the phone rings, and private things sit behind a PIN. Not one step of it needs a server.",
        droid_badge_store: "On Google Play",
        droid_badge_free: "Free to download",
        droid_badge_vi: "Vietnamese interface",
        d_scan_t: "Quick scan with on-device AI",
        d_scan_d: "One tap sweeps every installed app and file on the phone. The model runs locally, so it works with no signal at all.",
        d_call_t: "Scam call blocking",
        d_call_d: "Nuisance and scam numbers are stopped before the phone rings, with a log so you can see who was blocked.",
        d_vault_t: "Secure vault",
        d_vault_d: "Passwords and sensitive notes stored encrypted, unlocked with a PIN only you know.",
        d_bg_t: "Background service inspector",
        d_bg_d: "Shows which apps are quietly running, draining the battery or sending data while you are not using them.",
        d_score_t: "Safety score",
        d_score_d: "A single number for how the phone is doing, with the list of things to fix to raise it.",
        d_clean_t: "Cleanup and privacy",
        d_clean_d: "Clears junk files, wipes browsing traces and reviews the permissions your apps are holding on to.",

        lite_title: "Older phone, slower phone? Take the Lite build.",
        lite_sub: "BKSafe Lite drops everything that runs in the background and keeps the four things you tap. No menu bar, no background service — open it and you see the device figures and four buttons.",
        lite_f1_t: "File scan",
        lite_f1_d: "Matches TLSH signatures on the phone itself — no heavy AI model, no network needed.",
        lite_f2_t: "Junk cleanup",
        lite_f2_d: "Finds leftover files, shows the list and how much you would get back, then deletes what you picked.",
        lite_f3_t: "Battery check",
        lite_f3_d: "Charge level, temperature, charge cycles and how the battery's health is holding up.",
        lite_f4_t: "Network speed test",
        lite_f4_d: "Download, upload, latency and jitter, along with the connection type and packet loss.",
        lite_note: "The Lite build has no background-service scan, no traffic monitoring, no password vault and no safety score — those live in the full build.",

        dl_eyebrow: "Download",
        dl_title: "Get BKSafe on your device.",
        dl_sub: "The macOS and Windows builds download straight from here. Both Android builds come from Google Play.",
        dl_mac_line: "DMG installer · direct download",
        dl_mac_btn: "Download BKSafe-1.2.8.dmg (29 MB)",
        dl_droid_line: "Installed via Google Play · updates itself",
        play_small: "GET IT ON",
        spec_file: "File name",
        spec_size: "Size",
        spec_ver: "Version", spec_ver_v: "1.2.8 (build 21)",
        spec_req: "Requires", spec_req_v: "macOS 11.0 Big Sur or later",
        spec_arch: "Architecture", spec_arch_v: "Universal — Intel (x86_64) and Apple Silicon (arm64)",
        spec_sign: "Signed by",
        spec_notary: "Notarization", spec_notary_v: "Notarized by Apple and stapled",
        spec_pkg: "Package",
        spec_store: "Channel", spec_store_v: "Google Play — updates arrive on their own",
        spec_price: "Price", spec_price_v: "Free to download",
        spec_lang: "Language", spec_lang_v: "Vietnamese",
        sha_label: "SHA-256",
        sha_copy: "Copy",
        sha_copied: "Copied",
        sha_hint: "Check it with <code>shasum -a 256 BKSafe-1.2.8.dmg</code>, or use the <a href=\"/downloads/BKSafe-1.2.8.dmg.sha256\" download>.sha256 file</a> alongside it.",
        dl_droid_foot: "On an older or slower phone, take the Lite build next to this one. There is no iOS build — on iPhone, everything BKSafe does sits outside what iOS lets an app reach.",

        dl_win_line: "Portable ZIP · direct download",
        dl_win_btn: "Download the Windows portable build (19 MB)",
        dl_lite_line: "Installed via Google Play · built for slower phones",
        dl_lite_foot: "Four things, no more: file scan, junk cleanup, battery check and a network speed test. No background service and no AI model, so it stays light on the battery.",
        spec_ver_win: "1.2.9 (build 22)",
        spec_req_win: "Windows 10 64-bit or later",
        spec_arch_win: "x64 — about 39 MB once unzipped",
        spec_req_droid: "Android 7.0 or later",
        spec_install: "Installation",
        spec_install_v: "None — unzip, then double-click <code>bksafe.exe</code>",
        spec_sign_win: "Not code-signed — SmartScreen may ask on first launch",
        sha_hint_win: "Check it with <code>Get-FileHash BKSafe-1.2.9-win-x64-portable.zip -Algorithm SHA256</code> in PowerShell, or use the <a href=\"/downloads/BKSafe-1.2.9-win-x64-portable.zip.sha256\" download>.sha256 file</a> alongside it.",

        faq_title: "Questions that come up.",
        faq_1_q: "Does BKSafe send my data anywhere?",
        faq_1_a: "No. Scanning and measurement run entirely on the device. The app does not upload your files, your process list or your machine figures to any server — and you can check that yourself on the app's own Network screen, which lists traffic per process.",
        faq_2_q: "Why is the macOS build not on the Mac App Store?",
        faq_2_a: "App Store apps must run sandboxed, and inside the sandbox you cannot read the drive's SMART figures, cannot read thermal sensors and cannot walk junk folders outside your own container. So BKSafe ships through a Developer ID with Apple notarization — the route CleanMyMac, iStat Menus and Little Snitch take.",
        faq_3_q: "Will macOS block it when I open it?",
        faq_3_a: "No. Build 1.2.8 is signed with a Developer ID and notarized by Apple, with the ticket stapled to both the DMG and the app inside. Drag it into Applications and open it like anything else, even with no network connection.",
        faq_4_q: "Does it work on Intel Macs?",
        faq_4_a: "Yes. It is a universal binary that runs natively on both Intel (x86_64) and Apple Silicon (arm64). There is one file to download, and no build to choose between.",
        faq_5_q: "How do I know the download is genuine?",
        faq_5_a: "On a Mac run <code>shasum -a 256 BKSafe-1.2.8.dmg</code>; on Windows open PowerShell and run <code>Get-FileHash BKSafe-1.2.9-win-x64-portable.zip -Algorithm SHA256</code>. Compare the result with the SHA-256 published in the Download section — matching strings mean the file is intact.",
        faq_6_q: "Do the builds share an account?",
        faq_6_a: "No. The macOS, Windows and Android apps are independent, each working on its own device. There is no shared account and nothing syncs between them.",

        faq_w1_q: "Does the Windows build need installing?",
        faq_w1_a: "No. It is a portable package: unzip it into a folder and double-click <code>bksafe.exe</code>. Copy the whole folder to a USB stick or another PC and it still runs — just do not separate <code>bksafe.exe</code> from the <code>data</code> folder and the .dll files beside it. Your settings are kept separately in <code>%APPDATA%\\BKSafe\\BKSafe</code>.",
        faq_w2_q: "Windows shows “Windows protected your PC” — what now?",
        faq_w2_a: "Click <strong>More info</strong> then <strong>Run anyway</strong>. The app has no code-signing certificate yet, so SmartScreen warns on the first few launches. If it will not start at all, right-click <code>bksafe.exe</code> → Properties → tick <strong>Unblock</strong> at the bottom of the General tab → OK. You can compare the SHA-256 published in the Download section to confirm the file is intact.",
        faq_w3_q: "When do I have to run it as administrator?",
        faq_w3_a: "Only to delete Windows' own junk, to stop or disable a service, or to count network bytes per process. For those, use the bundled <code>Chay bang quyen quan tri.bat</code>, or press <strong>Relaunch as administrator</strong> inside the app. For everyday use, ordinary user rights are enough.",
        faq_lite_q: "How does Lite differ from the full BKSafe?",
        faq_lite_a: "Lite (<code>com.tdson.bksafelite</code>) keeps four things: file scan, junk cleanup, battery check and a network speed test. It matches TLSH signatures instead of running an AI model, and it runs no background service — so it is lighter and easier on the battery of an older phone. Scam call blocking, the background-service scan, the vault and the safety score are in the full build only. They are separate apps, so you can keep both installed.",

        cta_title: "Start with the device in front of you.",
        cta_contact: "Get in touch",

        footer_desc: "Building practical AI tools for developers and businesses.",
        footer_bk: "BKSafe",
        footer_mac: "macOS build",
        footer_win: "Windows build",
        footer_droid: "Android build",
        footer_prod: "Other products",
        footer_comp: "Company",
        footer_about: "About",
        footer_services: "Services",
        footer_contact: "Contact",
        footer_rights: "All rights reserved."
    }
};

/* Languages offered in the picker, in order.
   'vi' is deliberately left out — add { code: 'vi', label: 'Tiếng Việt' } to show it again. */
const LANGS = [
    { code: 'en', label: 'English' }
];
const DEFAULT_LANG = 'en';
const SHOT_DIR = '/assets/bksafe/macos/';

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

    // A stored choice wins, then whatever the visitor picked on the
    // landing page. Anything no longer offered — a 'vi' left over from
    // before it was hidden, say — falls through to the default.
    const detectLang = () => {
        const saved = localStorage.getItem('bksafe-lang');
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

        if (dict.page_title) document.title = dict.page_title;
        const meta = document.querySelector('meta[name="description"]');
        if (meta && dict.meta_desc) meta.setAttribute('content', dict.meta_desc);

        langSelects.forEach(sel => { sel.value = lang; });
        paintGallery();
    };

    langSelects.forEach(sel => sel.addEventListener('change', () => {
        currentLang = sel.value;
        localStorage.setItem('bksafe-lang', currentLang);
        updateLanguage(currentLang);
    }));

    // ---------- Screenshot gallery ----------
    const tabs = Array.from(document.querySelectorAll('.bk-gal-tab'));
    const galImg = document.getElementById('gal-img');
    const galTitle = document.getElementById('gal-title');
    const galCap = document.getElementById('gal-cap');

    // Keep the caption and window title in step with both the selected
    // shot and the current language, so switching either one is enough.
    function paintGallery() {
        const active = tabs.find(t => t.classList.contains('is-active'));
        if (!active || !galImg) return;
        const dict = i18n[currentLang] || i18n[DEFAULT_LANG];
        const key = active.dataset.key;
        galImg.src = SHOT_DIR + active.dataset.shot + '.png';
        galImg.alt = 'BKSafe — ' + (dict[key + '_title'] || '');
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
            tabs.slice(1, 6).forEach(t => { new Image().src = SHOT_DIR + t.dataset.shot + '.png'; });
        });
    }

    updateLanguage(currentLang);

    // ---------- Copy the checksum ----------
    // One button per download card, so bind them all rather than a single id.
    document.querySelectorAll('.bk-sha').forEach(block => {
        const copyBtn = block.querySelector('.bk-copy');
        const shaValue = block.querySelector('.bk-sha-value');
        if (!copyBtn || !shaValue || !navigator.clipboard) return;
        copyBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(shaValue.textContent.trim());
                const dict = i18n[currentLang] || i18n[DEFAULT_LANG];
                copyBtn.textContent = dict.sha_copied;
                copyBtn.classList.add('is-done');
                setTimeout(() => {
                    copyBtn.textContent = (i18n[currentLang] || i18n[DEFAULT_LANG]).sha_copy;
                    copyBtn.classList.remove('is-done');
                }, 1800);
            } catch { /* clipboard refused — the text is selectable anyway */ }
        });
    });

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
