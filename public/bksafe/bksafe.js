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
        meta_desc: "BKSafe theo dõi sức khoẻ máy, quét mã độc, dọn rác và canh lưu lượng mạng. Bản macOS 1.3.0 và bản Windows 1.3.0 tải trực tiếp, bản Android và bản Lite cho máy yếu trên Google Play.",
        nav_policy: "Quyền riêng tư",
        pol_page_title: "Chính sách quyền riêng tư — BKSafe | AIBachKhoa",
        pol_meta_desc: "Chính sách quyền riêng tư của BKSafe: dữ liệu nào được thu thập trên bản điện thoại, vì sao bản máy tính không thu thập gì, và hai đường ra mạng duy nhất của nó.",
        pol_back: "Về trang sản phẩm",
        pol_eyebrow: "Pháp lý",
        pol_title: "Chính sách quyền riêng tư",
        pol_product: "BKSafe — cho Windows, macOS, Linux và Android",
        pol_updated: "Cập nhật lần cuối: 23 tháng 8, 2026",
        pol_lead: "Trang này nói rõ BKSafe xử lý thông tin như thế nào. Bản điện thoại và bản máy tính khác nhau đáng kể ở điểm này, nên chúng được tách riêng thay vì gộp thành một câu chung chung — một chính sách viết chung cho cả hai thì hoặc là nói quá về bản này, hoặc nói thiếu về bản kia.",
        pol_toc: "Nội dung trang",
        pol_h_summary: "Tóm tắt",
        pol_summary_1: "BKSafe là bộ công cụ bảo vệ và tối ưu máy, do AIBachKhoa (Trần Đức Sơn), Việt Nam phát hành. Có bốn bản: Windows, macOS, Linux và Android.",
        pol_summary_2: "<strong>Bản máy tính không có tài khoản, không đo đạc từ xa, và không gửi kết quả đi đâu cả.</strong> Mọi phép quét, mọi con số, mọi nhật ký đều nằm lại trên chính máy đó. Bản Android có thu thập một số dữ liệu vận hành, được liệt kê đầy đủ bên dưới.",
        pol_h_desktop: "Bản máy tính (Windows, macOS, Linux)",
        pol_desktop_1: "Ba bản này đọc rất nhiều thứ về máy của bạn — đó là công việc của chúng. Nhưng <strong>không thứ nào rời khỏi máy</strong>. Cụ thể, ứng dụng đọc:",
        pol_desktop_l1: "Chỉ số phần cứng: CPU, bộ nhớ, nhiệt độ, sức khoẻ ổ đĩa, lưu lượng mạng",
        pol_desktop_l2: "Nội dung tệp trong các thư mục bạn chọn quét, để đối chiếu với chữ ký mã độc",
        pol_desktop_l3: "Danh sách tiến trình, dịch vụ, trình điều khiển và các mục tự khởi động",
        pol_desktop_l4: "Cấu hình an toàn của hệ điều hành: tường lửa, chống mã độc, mã hoá ổ đĩa",
        pol_desktop_l5: "Tên và dung lượng thư mục, khi bạn dùng chức năng đo dung lượng",
        pol_desktop_2: "Không có tài khoản để đăng nhập, không có mã định danh thiết bị nào được tạo ra, và không có bộ đo đạc hay báo cáo sự cố nào được nhúng vào. Nội dung tệp được đọc *trong bộ nhớ* để so với chữ ký rồi bỏ đi — nó không được sao chép, không được tải lên, và không được giữ lại.",
        pol_desktop_3: "Những gì ứng dụng ghi xuống đĩa đều nằm trong thư mục cấu hình của riêng tài khoản bạn: lựa chọn ngôn ngữ, chế độ sáng/tối, các ngưỡng cảnh báo, và nhật ký các lượt quét đã chạy. Trên Windows là <code>%APPDATA%\\BKSafe\\BKSafe</code>. Gỡ ứng dụng hoặc xoá thư mục đó là mất hết.",
        pol_h_network: "Bản máy tính kết nối ra ngoài khi nào",
        pol_network_1: "Đúng hai đường, và không đường nào mang dữ liệu của bạn đi:",
        pol_network_2: "Ngoài hai đường trên, bản máy tính không mở bất kỳ kết nối mạng nào khác. Bạn kiểm chứng được bằng bất kỳ công cụ theo dõi mạng nào — kể cả bằng chính màn Mạng của ứng dụng này.",
        pol_net_th_what: "Kết nối",
        pol_net_th_when: "Khi nào và vì sao",
        pol_net_clam_w: "Tự chạy khi mở ứng dụng. Tải kho chữ ký virus về máy — đây là thứ quyết định bộ quét nhận ra được những gì. Chỉ tải xuống; không có gì được gửi lên ngoài yêu cầu tải tệp thông thường.",
        pol_net_wu_w: "Chỉ khi bạn tự bấm \"Kiểm tra ngay\" ở thẻ Cập nhật. Ứng dụng nhờ chính dịch vụ Windows Update của hệ điều hành hỏi xem có bản vá nào đang chờ; kết nối này là giữa máy bạn và Microsoft.",
        pol_h_collect: "Bản Android thu thập những gì",
        pol_collect_1: "Bản Android có thu thập một số dữ liệu để vận hành dịch vụ và phát hiện mối nguy:",
        pol_collect_l1: "Địa chỉ thư điện tử và dữ liệu sử dụng",
        pol_collect_l2: "Thông tin thiết bị: kiểu máy, phiên bản hệ điều hành, mã định danh phần cứng, IMEI, Android ID",
        pol_collect_l3: "Tần suất, thời lượng và thao tác trong ứng dụng",
        pol_collect_l4: "Nhật ký sự cố và chỉ số hiệu năng",
        pol_collect_l5: "Tên gói của các ứng dụng được quét, phục vụ việc phát hiện mối nguy",
        pol_collect_2: "<strong>Chúng tôi không thu thập tệp cá nhân của bạn</strong> — ảnh, video, danh bạ, tin nhắn — trừ khi bạn cấp quyền một cách rõ ràng cho một chức năng cụ thể.",
        pol_h_perm: "Quyền mà bản Android xin, và vì sao",
        pol_perm_th_p: "Quyền",
        pol_perm_th_w: "Dùng để làm gì",
        pol_perm_storage_w: "Quét các thư mục trong bộ nhớ để tìm mã độc.",
        pol_perm_usage_w: "Nhận ra ứng dụng đang chạy nền một cách bất thường.",
        pol_perm_call_w: "Đối chiếu số điện thoại gọi đến với danh sách số lừa đảo.",
        pol_perm_vpn_w: "Theo dõi lưu lượng mạng ngay trên máy. Đây là kết nối cục bộ trong thiết bị — không có lưu lượng nào được chuyển qua máy chủ của chúng tôi.",
        pol_h_use: "Dữ liệu được dùng vào việc gì",
        pol_use_1: "Dữ liệu thu thập từ bản Android chỉ được xử lý cho những mục đích sau:",
        pol_use_l1: "Phát hiện mối nguy về an toàn",
        pol_use_l2: "Cải thiện và duy trì hoạt động của ứng dụng",
        pol_use_l3: "Quản lý tài khoản của bạn",
        pol_use_l4: "Tuân thủ nghĩa vụ pháp lý",
        pol_use_l5: "Liên hệ với bạn khi cần",
        pol_h_share: "Chia sẻ dữ liệu",
        pol_share_1: "<strong>Chúng tôi cam kết không bán và không chia sẻ dữ liệu người dùng cho bên thứ ba.</strong> Chỉ có ba trường hợp ngoại lệ, và chúng tôi nêu ra đây thay vì giấu đi:",
        pol_share_l1: "Nhà cung cấp dịch vụ mà chúng tôi thuê để vận hành (ví dụ dịch vụ phân tích), và chỉ ở mức tối thiểu cần cho công việc của họ",
        pol_share_l2: "Cơ quan chức năng, khi pháp luật yêu cầu",
        pol_share_l3: "Bên nhận chuyển giao, nếu sau này có việc sáp nhập hoặc chuyển nhượng doanh nghiệp",
        pol_share_2: "Với bản máy tính, ba trường hợp trên không phát sinh: không có dữ liệu nào của bạn rời khỏi máy để mà chia sẻ.",
        pol_h_store: "Lưu trữ và thời gian giữ",
        pol_store_1: "Toàn bộ dữ liệu liên quan tới hoạt động của ứng dụng được xử lý và lưu ngay trên thiết bị của bạn.",
        pol_store_2: "Xoá bằng cách gỡ ứng dụng, hoặc dùng chức năng xoá dữ liệu có sẵn trong ứng dụng. Trên bản máy tính, xoá thư mục cấu hình của ứng dụng là xoá sạch mọi thứ nó từng ghi.",
        pol_h_children: "Quyền riêng tư của trẻ em",
        pol_children: "Dịch vụ không hướng tới người dùng dưới 13 tuổi. Ở những nơi pháp luật yêu cầu sự đồng ý của cha mẹ hoặc người giám hộ, chúng tôi tuân thủ yêu cầu đó. Nếu bạn cho rằng con mình đã cung cấp thông tin cho chúng tôi, hãy liên hệ theo địa chỉ ở cuối trang và chúng tôi sẽ xoá.",
        pol_h_rights: "Quyền của bạn",
        pol_rights_1: "Bạn có quyền xem, sửa, xoá dữ liệu của mình, và phản đối việc chúng tôi xử lý dữ liệu đó. Gửi yêu cầu tới địa chỉ thư điện tử ở cuối trang.",
        pol_rights_2: "Với bản máy tính, phần lớn các quyền này bạn tự thực hiện được ngay mà không cần hỏi ai: dữ liệu duy nhất tồn tại là mấy tệp cấu hình và nhật ký nằm trong thư mục của chính bạn.",
        pol_h_security: "An toàn dữ liệu",
        pol_security: "Vì bản máy tính giữ mọi thứ trên chính máy đó, dữ liệu của bạn được bảo vệ bởi đúng những lớp phòng vệ của hệ điều hành — tài khoản người dùng và quyền truy cập tệp. Với dữ liệu mà bản Android gửi về, chúng tôi dùng kết nối mã hoá khi truyền và giới hạn quyền truy cập ở mức tối thiểu cần thiết. Không hệ thống nào an toàn tuyệt đối, và chúng tôi không hứa điều đó.",
        pol_h_changes: "Thay đổi chính sách",
        pol_changes: "Chính sách này có thể được cập nhật khi ứng dụng thay đổi. Mốc \"cập nhật lần cuối\" ở đầu trang luôn phản ánh phiên bản đang có hiệu lực. Với những thay đổi làm ảnh hưởng thực chất tới cách dữ liệu của bạn được xử lý, chúng tôi sẽ thông báo trong ứng dụng chứ không lặng lẽ sửa trang này.",
        pol_h_contact: "Liên hệ",
        pol_contact_1: "Có câu hỏi về chính sách này, hoặc muốn thực hiện quyền của bạn:",
        pol_contact_mail: "Thư điện tử",
        pol_contact_addr: "Địa chỉ",
        pol_contact_addr_v: "Quận Cầu Giấy, Hà Nội, Việt Nam",
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
        hero_meta: "macOS 1.3.0 · 29 MB · universal cho Intel và Apple Silicon. Windows 1.3.0 · 20 MB · chạy ngay, không cần cài. Linux 1.3.1 · 15 MB · gói .deb cho Debian và Ubuntu.",

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
        pick_mac_go: "Xem bản macOS 1.3.0",
        pick_win_kicker: "Ứng dụng máy tính",
        pick_win_desc: "Mười màn hình: dọn rác, đo dung lượng, bộ nhớ, quét virus, chống mã hoá hàng loạt, an toàn hệ thống, dịch vụ nền, mạng, ổ cứng và giám sát.",
        pick_win_go: "Xem bản Windows 1.3.0",
        pick_droid_kicker: "Ứng dụng di động",
        pick_droid_desc: "Quét ứng dụng và tệp bằng mô hình AI chạy trên máy, chặn cuộc gọi lừa đảo, két bảo mật có mã PIN và điểm an toàn cho cả máy. Máy yếu thì có bản Lite.",
        pick_droid_go: "Xem bản Android",

        mac_eyebrow: "Bản macOS",
        mac_title: "Chiếc Mac của bạn, đo tới từng nhân xử lý.",
        mac_sub: "BKSafe lấy số liệu ngay từ nhân hệ điều hành và cảm biến của máy, làm mới hai giây một lần. Không đồ thị trang trí — mỗi con số đều là thứ đang thật sự xảy ra bên trong máy.",
        mac_badge_ver: "Phiên bản 1.3.2 · build 25",
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
        step_1: "Tải tệp <code>BKSafe-1.3.2.dmg</code> về máy.",
        step_2: "Mở tệp vừa tải, kéo <strong>BKSafe</strong> vào thư mục <strong>Applications</strong>.",
        step_3: "Mở BKSafe từ Launchpad hoặc thư mục Ứng dụng.",
        steps_foot: "Không cần bấm chuột phải rồi chọn Mở, không cần vào Cài đặt để gỡ chặn, không có cảnh báo “không xác minh được nhà phát triển”. Vé công chứng của Apple được đóng thẳng vào cả tệp DMG lẫn ứng dụng bên trong, nên máy <strong>không có mạng</strong> vẫn mở được bình thường.",

        win_eyebrow: "Bản Windows",
        win_title: "Chiếc PC của bạn, không còn chỗ nào khuất.",
        win_sub: "Cùng một BKSafe, viết riêng cho Windows: mười màn hình lấy số liệu thật từ hệ điều hành — dọn rác, đo dung lượng, quét virus theo nội dung tệp, canh mã hoá hàng loạt, soi dịch vụ nền và báo khi có bất thường. Không có bộ cài: giải nén ra, bấm đúp là chạy.",
        win_badge_ver: "Phiên bản 1.3.0 · build 23",
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
        w_hist_t: "Nhật ký quét",
        w_hist_d: "Mỗi lượt quét được ghi lại: quét lúc nào, phạm vi nào, thấy gì, và dựa vào bằng chứng nào. Cả lượt bị dừng giữa chừng cũng vào sổ — một nhật ký chỉ có lượt thành công thì không trả lời được câu \"hôm qua tôi đã quét chưa\".",
        w_sched_t: "Quét định kỳ",
        w_sched_d: "Đặt hằng ngày, hằng tuần hoặc hằng tháng rồi thôi. Thẻ cài đặt nói rõ lượt kế tiếp rơi vào lúc nào, để bạn không phải tự đoán rồi lại bấm quét cho chắc.",
        w_auto_t: "Khởi động cùng máy",
        w_auto_d: "Các bộ theo dõi chạy nền chỉ làm việc khi ứng dụng đang mở. Bật mục này thì chúng chạy từ lúc bạn đăng nhập. Mục được ghi vào phần của riêng tài khoản bạn — không cần quyền quản trị.",
        w_hud_t: "Cửa sổ thu gọn",
        w_hud_d: "Thu cả ứng dụng thành một ô nhỏ nổi trên màn hình: vài chỉ số đang chạy, và một dải sáng lên khi có việc cần bạn quyết.",

        win_note_title: "Khi nào cần chạy bằng quyền quản trị",
        win_note_body: "Xem hằng ngày thì bản thường là đủ — rà soát, quét virus, đo dung lượng và canh mã hoá hàng loạt đều chạy bình thường ở quyền người dùng. Chỉ ba việc cần quyền quản trị: xoá rác của chính Windows (thư mục tạm hệ thống, kho cập nhật, bản Windows cũ), dừng hoặc tắt một dịch vụ, và đếm số byte mạng theo từng tiến trình. Gói tải về có sẵn tệp <code>Chay bang quyen quan tri.bat</code>, và ngay trong ứng dụng cũng có nút <strong>Mở lại bằng quyền quản trị</strong> ở màn Cài đặt và màn Dọn rác.",

        win_steps_title: "Chạy trong ba bước",
        win_step_1: "Tải tệp <code>BKSafe-1.3.0-win-x64-portable.zip</code> rồi giải nén ra một thư mục.",
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
        dl_mac_btn: "Tải BKSafe-1.3.2.dmg (33 MB)",
        dl_droid_line: "Cài qua Google Play · tự động cập nhật",
        play_small: "TẢI VỀ TRÊN",
        spec_file: "Tên tệp",
        spec_size: "Kích cỡ",
        spec_ver: "Phiên bản", spec_ver_v: "1.3.2 (build 25)",
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
        sha_hint: "Đối chiếu bằng <code>shasum -a 256 BKSafe-1.3.2.dmg</code>, hoặc dùng luôn <a href=\"/downloads/BKSafe-1.3.2.dmg.sha256\" download>tệp .sha256 kèm theo</a>.",
        dl_droid_foot: "Máy yếu hay máy cũ thì lấy bản Lite ở bên. Chưa có bản iOS — trên iPhone, những gì BKSafe làm được đều nằm ngoài phạm vi mà iOS cho phép một ứng dụng chạm tới.",

        dl_win_line: "Gói portable ZIP · tải trực tiếp",
        dl_linux_line: "Gói .deb · tải trực tiếp",
        footer_linux: "Bản Linux",
        pick_linux_kicker: "Ứng dụng máy tính",
        pick_linux_desc: "Mười ba màn: dọn rác, dung lượng, bộ nhớ, quét mã độc, bộ canh thời gian thực, rà soát an toàn, dịch vụ systemd, mạng, sức khoẻ ổ đĩa, nhiệt độ và giám sát.",
        pick_linux_go: "Xem bản Linux 1.3.1",
        linux_eyebrow: "Bản Linux",
        linux_title: "Máy của bạn, đo thẳng từ nhân hệ điều hành.",
        linux_sub: "Vẫn là BKSafe, viết cho Linux: mười ba màn đọc thẳng từ <code>/proc</code>, <code>/sys</code> và systemd — dọn rác, dung lượng, bộ nhớ, quét mã độc theo nội dung tệp, một bộ canh kiểm mọi tệp mới ngay khi nó vừa đặt chân vào máy, một lượt rà dịch vụ systemd đối chiếu từng tệp chạy với trình quản lý gói, cùng sức khoẻ ổ đĩa, nhiệt độ và mạng. Cài như một gói .deb bình thường, gỡ ra cũng sạch.",
        linux_badge_ver: "Phiên bản 1.3.1 · build 24",
        linux_badge_req: "Debian 12 / Ubuntu 22.04 trở lên",
        linux_badge_deb: ".deb — cài và gỡ đều sạch",
        dl_linux_btn: "Tải gói .deb cho Linux (15 MB)",
        btn_dl_linux: "Tải cho Linux",
        spec_ver_linux: "1.3.1 (build 24)",
        spec_req_linux: "Debian 12, Ubuntu 22.04 trở lên — máy nào có GTK 3 đều chạy",
        spec_arch_linux: "amd64 (x86-64) — sau khi cài chiếm khoảng 34 MB",
        spec_install_linux: "Bấm đúp vào tệp, hoặc chạy <code>sudo apt install ./BKSafe-1.3.1-linux-amd64.deb</code>",
        spec_sign_linux: "Chưa ký — đối chiếu bằng mã SHA-256 bên dưới",
        sha_hint_linux: "Đối chiếu bằng <code>sha256sum BKSafe-1.3.1-linux-amd64.deb</code>, hoặc dùng luôn <a href=\"/downloads/BKSafe-1.3.1-linux-amd64.deb.sha256\" download>tệp .sha256 kèm theo</a>.",
        linux_steps_title: "Cài trong ba bước",
        linux_step_1: "Tải tệp <code>BKSafe-1.3.1-linux-amd64.deb</code> về.",
        linux_step_2: "Bấm đúp vào tệp để mở trình cài đặt phần mềm, hoặc chạy <code>sudo apt install ./BKSafe-1.3.1-linux-amd64.deb</code> trong cửa sổ dòng lệnh.",
        linux_step_3: "Mở <strong>BKSafe</strong> từ trình đơn ứng dụng, hoặc gõ <code>bksafe</code> trong dòng lệnh.",
        linux_steps_foot: "Gói cài tự kéo theo những thư viện GTK mà máy còn thiếu, tự đặt biểu tượng vào trình đơn ứng dụng, và gỡ ra cũng sạch bằng <code>sudo apt remove bksafe</code>. Cài đặt của bạn nằm ở <code>~/.config</code> và <code>~/.local/share/bksafe</code> nên gỡ gói cũng không mất. Một vài phép đo cần công cụ đi kèm mà phần lớn máy để bàn đã có sẵn — <code>smartmontools</code> để đọc sức khoẻ ổ đĩa, <code>e2fsprogs</code> để đo phân mảnh, <code>policykit-1</code> cho những việc cần quyền quản trị; thiếu chúng thì ứng dụng nói thẳng là chưa đo được, chứ không bịa ra một con số.",
        dl_win_btn: "Tải gói Windows portable (20 MB)",
        dl_lite_line: "Cài qua Google Play · dành cho máy yếu",
        dl_lite_foot: "Bốn việc, không hơn: quét tệp, dọn rác, kiểm tra pin và đo tốc độ mạng. Không dịch vụ nền, không mô hình AI — nên nhẹ và ít ngốn pin.",
        spec_ver_win: "1.3.0 (build 23)",
        spec_req_win: "Windows 10 64-bit trở lên",
        spec_arch_win: "x64 — sau khi giải nén chiếm khoảng 39 MB",
        spec_req_droid: "Android 7.0 trở lên",
        spec_install: "Cài đặt",
        spec_install_v: "Không cần — giải nén rồi bấm đúp <code>bksafe.exe</code>",
        spec_sign_win: "Chưa ký mã — SmartScreen có thể hỏi ở lần mở đầu",
        sha_hint_win: "Đối chiếu bằng <code>Get-FileHash BKSafe-1.3.0-win-x64-portable.zip -Algorithm SHA256</code> trong PowerShell, hoặc dùng luôn <a href=\"/downloads/BKSafe-1.3.0-win-x64-portable.zip.sha256\" download>tệp .sha256 kèm theo</a>.",

        faq_title: "Vài câu hay được hỏi.",
        faq_1_q: "BKSafe có gửi dữ liệu của tôi đi đâu không?",
        faq_1_a: "Không. Việc quét và đo đạc chạy hoàn toàn trên thiết bị. Ứng dụng không tải tệp, danh sách tiến trình hay số liệu máy của bạn lên bất kỳ máy chủ nào — bạn có thể tự kiểm chứng bằng chính màn Mạng của ứng dụng, nơi liệt kê lưu lượng theo từng tiến trình.",
        faq_2_q: "Vì sao bản macOS không có trên Mac App Store?",
        faq_2_a: "Ứng dụng trên App Store bắt buộc chạy trong hộp cát, mà trong hộp cát thì không đọc được chỉ số SMART của ổ, không đọc được cảm biến nhiệt và không duyệt được thư mục rác ngoài vùng chứa riêng. Vì vậy BKSafe phát hành qua Developer ID và công chứng của Apple — cách mà CleanMyMac, iStat Menus hay Little Snitch vẫn dùng.",
        faq_3_q: "Mở lên có bị macOS chặn không?",
        faq_3_a: "Không. Bản 1.3.0 được ký bằng Developer ID và đã qua công chứng của Apple, vé công chứng đóng thẳng vào cả tệp DMG lẫn ứng dụng bên trong. Bạn chỉ cần kéo vào Applications rồi mở như mọi ứng dụng khác, kể cả lúc máy không có mạng.",
        faq_4_q: "Máy Mac chip Intel dùng được không?",
        faq_4_a: "Được. Đây là gói universal, chạy nguyên bản trên cả Intel (x86_64) lẫn Apple Silicon (arm64). Chỉ có một tệp tải về, không phải chọn bản cho đúng máy.",
        faq_5_q: "Làm sao biết tệp tải về là tệp gốc?",
        faq_5_a: "Trên Mac chạy <code>shasum -a 256 BKSafe-1.3.2.dmg</code>; trên Windows mở PowerShell rồi chạy <code>Get-FileHash BKSafe-1.3.0-win-x64-portable.zip -Algorithm SHA256</code>; trên Linux chạy <code>sha256sum BKSafe-1.3.1-linux-amd64.deb</code>. So kết quả với chuỗi SHA-256 đăng ở mục Tải về — trùng nhau nghĩa là tệp còn nguyên vẹn.",
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
        footer_rights: "Bảo lưu mọi quyền.",

        /* Bảng giá */
        nav_pricing: "Bảng giá",
        pr_eyebrow: "Bảng giá",
        pr_title: "Bảo vệ thì miễn phí. Cái mất tiền là sự tự động.",
        pr_sub: "Quét, cách ly, dọn rác và mọi số liệu trực tiếp — miễn phí mãi mãi. Một phần mềm diệt virus khoá mất phần bảo vệ rồi đòi tiền là thứ chúng tôi không phát hành. Gói Pro bán đúng hai thứ bạn không tự làm bằng tay được: canh giúp lúc bạn không ngồi đó, và nhớ xa hơn về quá khứ.",
        pr_free_name: "Miễn phí",
        pr_free_amount: "0₫",
        pr_free_note: "Mãi mãi, trên mọi nền tảng.",
        pr_free_1: "Tự bấm quét tệp, dùng trọn kho chữ ký ngoài",
        pr_free_2: "Đưa mọi thứ bắt được vào khu cách ly",
        pr_free_3: "Dọn rác, dung lượng, ổ đĩa, bộ nhớ, nhiệt độ, số liệu mạng trực tiếp",
        pr_free_4: "Soi mục khởi động cùng máy và dịch vụ nền",
        pr_free_5: "Lịch sử quét 7 ngày",
        pr_free_btn: "Tải về",
        pr_pro_tag: "Đáng tiền nhất",
        pr_pro_name: "Pro — máy tính",
        pr_pro_per: "/ năm",
        pr_pro_note: "Hoặc 1,99 $ mỗi tháng — trả theo năm rẻ hơn 37%.",
        pr_pro_1: "<strong>Toàn bộ bản miễn phí</strong>, thêm:",
        pr_pro_2: "Bộ canh thời gian thực — tệp mới được quét ngay khi vừa rơi vào máy, và các thư mục khởi động luôn được canh",
        pr_pro_3: "Quét định kỳ, chạy mà không cần bạn mở ứng dụng",
        pr_pro_4: "Tự kiểm lưu lượng và cảnh báo mỗi 6 giờ",
        pr_pro_5: "Lịch sử quét đầy đủ thay vì 7 ngày",
        pr_pro_6: "Tường lửa BKSafe",
        pr_pro_6_note: "(chỉ bản Linux)",
        pr_pro_btn: "Tải BKSafe, rồi nâng cấp ngay trong ứng dụng",
        pr_pro_fine: "Thanh toán qua PayPal ngay trong ứng dụng. Tự động gia hạn; huỷ bất cứ lúc nào trên paypal.com. Tính bằng đô la Mỹ — PayPal không hỗ trợ đồng Việt Nam.",
        pr_droid_name: "Premium — Android",
        pr_droid_per: "/ năm",
        pr_droid_note: "Thanh toán qua Google Play.",
        pr_droid_1: "Tự quét ứng dụng mới cài và tệp mới tải về",
        pr_droid_2: "Cảnh báo lưu lượng mà không cần mở ứng dụng",
        pr_droid_3: "Lịch sử lưu lượng 30 ngày thay vì 7",
        pr_droid_btn: "Tải trên Google Play",
        pr_support: "Gặp trục trặc khi thanh toán, hay có thắc mắc về một khoản đã trừ?",

    },

    en: {
        page_title: "BKSafe — Security for your Mac, your PC and your Android phone | AIBachKhoa",
        meta_desc: "BKSafe watches machine health, scans for malware, clears junk and keeps an eye on network traffic. macOS 1.3.0 and Windows 1.3.0 as direct downloads, Android and the lightweight Lite build on Google Play.",
        nav_policy: "Privacy",
        pol_page_title: "Privacy Policy — BKSafe | AIBachKhoa",
        pol_meta_desc: "The BKSafe privacy policy: what the Android build collects, why the desktop builds collect nothing, and the only two network connections they make.",
        pol_back: "Back to the product",
        pol_eyebrow: "Legal",
        pol_title: "Privacy Policy",
        pol_product: "BKSafe — for Windows, macOS, Linux and Android",
        pol_updated: "Last updated: 23 August 2026",
        pol_lead: "This page sets out how BKSafe handles information. The phone build and the desktop builds differ substantially here, so they are treated separately rather than blurred into one general statement — a policy written for both at once either overstates one or understates the other.",
        pol_toc: "On this page",
        pol_h_summary: "Summary",
        pol_summary_1: "BKSafe is a set of protection and maintenance tools published by AIBachKhoa (Trần Đức Sơn), Vietnam. There are four builds: Windows, macOS, Linux and Android.",
        pol_summary_2: "<strong>The desktop builds have no account, no telemetry, and send no results anywhere.</strong> Every scan, every figure and every log stays on that machine. The Android build does collect some operational data, listed in full below.",
        pol_h_desktop: "The desktop builds (Windows, macOS, Linux)",
        pol_desktop_1: "These three read a great deal about your machine — that is their job. But <strong>none of it leaves the machine</strong>. Specifically, the app reads:",
        pol_desktop_l1: "Hardware figures: CPU, memory, temperature, drive health, network traffic",
        pol_desktop_l2: "The contents of files in the folders you choose to scan, to match against malware signatures",
        pol_desktop_l3: "The list of processes, services, drivers and startup entries",
        pol_desktop_l4: "The operating system's security configuration: firewall, anti-malware, drive encryption",
        pol_desktop_l5: "Folder names and sizes, when you use the storage measurement feature",
        pol_desktop_2: "There is no account to sign in to, no device identifier is generated, and no analytics or crash-reporting SDK is embedded. File contents are read *in memory* to compare against signatures and then discarded — they are not copied, not uploaded, and not retained.",
        pol_desktop_3: "What the app does write to disk sits in your own account's configuration folder: language choice, light/dark mode, alert thresholds, and the log of scans you have run. On Windows that is <code>%APPDATA%\\BKSafe\\BKSafe</code>. Uninstalling the app or deleting that folder removes all of it.",
        pol_h_network: "When the desktop builds connect out",
        pol_network_1: "Exactly two connections, and neither carries your data:",
        pol_network_2: "Beyond these two, the desktop builds open no other network connection. You can verify this with any network monitoring tool — including this app's own Network screen.",
        pol_net_th_what: "Connection",
        pol_net_th_when: "When and why",
        pol_net_clam_w: "Runs automatically at app launch. Downloads the virus signature database — this is what determines what the scanner can recognise. Download only; nothing is sent up beyond an ordinary file request.",
        pol_net_wu_w: "Only when you press \"Check now\" on the Updates tab. The app asks the operating system's own Windows Update service whether any patch is waiting; that connection is between your machine and Microsoft.",
        pol_h_collect: "What the Android build collects",
        pol_collect_1: "The Android build collects some data in order to run the service and detect threats:",
        pol_collect_l1: "Email address and usage data",
        pol_collect_l2: "Device information: model, OS version, hardware identifiers, IMEI, Android ID",
        pol_collect_l3: "How often and how long the app is used, and which actions are taken",
        pol_collect_l4: "Crash logs and performance metrics",
        pol_collect_l5: "Package names of scanned apps, for threat detection",
        pol_collect_2: "<strong>We do not collect your personal files</strong> — photos, videos, contacts, messages — unless you explicitly grant access for a specific feature.",
        pol_h_perm: "The permissions the Android build asks for, and why",
        pol_perm_th_p: "Permission",
        pol_perm_th_w: "What it is for",
        pol_perm_storage_w: "To scan storage folders for malware.",
        pol_perm_usage_w: "To notice apps behaving unusually in the background.",
        pol_perm_call_w: "To match incoming numbers against a list of fraudulent ones.",
        pol_perm_vpn_w: "To monitor network traffic on the device itself. This is a local, on-device connection — no traffic is routed through our servers.",
        pol_h_use: "What the data is used for",
        pol_use_1: "Data collected by the Android build is processed only for the following purposes:",
        pol_use_l1: "Detecting security threats",
        pol_use_l2: "Improving and maintaining how the app works",
        pol_use_l3: "Managing your account",
        pol_use_l4: "Meeting legal obligations",
        pol_use_l5: "Contacting you when necessary",
        pol_h_share: "Data sharing",
        pol_share_1: "<strong>We are committed to not selling and not sharing user data with third parties.</strong> There are three exceptions, and we state them here rather than bury them:",
        pol_share_l1: "Service providers we engage to operate the service (for example analytics), and only to the minimum their work requires",
        pol_share_l2: "Authorities, where the law requires it",
        pol_share_l3: "An acquiring party, in the event of a future merger or business transfer",
        pol_share_2: "For the desktop builds none of these arise: no data of yours leaves the machine, so there is nothing to share.",
        pol_h_store: "Storage and retention",
        pol_store_1: "All data relating to the app's operation is processed and stored on your own device.",
        pol_store_2: "Delete it by uninstalling the app, or with the app's built-in delete function. On the desktop builds, deleting the app's configuration folder removes everything it has ever written.",
        pol_h_children: "Children's privacy",
        pol_children: "The service is not directed at users under 13. Where the law requires the consent of a parent or guardian, we comply with that requirement. If you believe your child has provided information to us, contact us at the address at the foot of this page and we will delete it.",
        pol_h_rights: "Your rights",
        pol_rights_1: "You have the right to access, correct and delete your data, and to object to our processing of it. Send requests to the email address at the foot of this page.",
        pol_rights_2: "On the desktop builds you can exercise most of these yourself without asking anyone: the only data that exists is a handful of settings and log files inside your own folder.",
        pol_h_security: "Security",
        pol_security: "Because the desktop builds keep everything on the machine itself, your data is protected by the operating system's own defences — your user account and its file permissions. For data the Android build does send us, we use encrypted connections in transit and keep access to the minimum needed. No system is perfectly secure, and we do not claim otherwise.",
        pol_h_changes: "Changes to this policy",
        pol_changes: "This policy may be updated as the app changes. The \"last updated\" stamp at the top always reflects the version in force. For changes that materially affect how your data is handled, we will say so in the app rather than quietly editing this page.",
        pol_h_contact: "Contact",
        pol_contact_1: "For questions about this policy, or to exercise your rights:",
        pol_contact_mail: "Email",
        pol_contact_addr: "Address",
        pol_contact_addr_v: "Cau Giay District, Ha Noi, Vietnam",
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
        hero_meta: "macOS 1.3.0 · 29 MB · universal for Intel and Apple Silicon. Windows 1.3.0 · 20 MB · runs straight out of the folder. Linux 1.3.1 · 15 MB · .deb for Debian and Ubuntu.",

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
        pick_mac_go: "See the macOS 1.3.0 build",
        pick_win_kicker: "Desktop app",
        pick_win_desc: "Ten screens: cleaner, storage, memory, virus scan, ransomware guard, system safety, services, network, drive health and monitoring.",
        pick_win_go: "See the Windows 1.3.0 build",
        pick_droid_kicker: "Mobile app",
        pick_droid_desc: "Scans apps and files with an on-device AI model, blocks scam calls, keeps a PIN-locked vault and scores how safe the phone is. Older phones get the Lite build.",
        pick_droid_go: "See the Android build",

        mac_eyebrow: "macOS build",
        mac_title: "Your Mac, measured down to the core.",
        mac_sub: "BKSafe reads straight from the kernel and the machine's own sensors, refreshed every two seconds. No decorative charts — every figure is something actually happening inside the Mac.",
        mac_badge_ver: "Version 1.3.2 · build 25",
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
        step_1: "Download <code>BKSafe-1.3.2.dmg</code>.",
        step_2: "Open it and drag <strong>BKSafe</strong> into <strong>Applications</strong>.",
        step_3: "Open BKSafe from Launchpad or the Applications folder.",
        steps_foot: "No right-click-then-Open, no trip to Settings to unblock it, no “unidentified developer” warning. Apple's notarization ticket is stapled to both the DMG and the app inside it, so the Mac opens it fine even with <strong>no network connection</strong>.",

        win_eyebrow: "Windows build",
        win_title: "Your PC, with nothing left in the dark.",
        win_sub: "The same BKSafe, written for Windows: ten screens reading real figures from the operating system — cleaner, storage, virus scanning by file content, ransomware guard, background services, and an alert when something goes out of range. No installer: unzip it, double-click it, it runs.",
        win_badge_ver: "Version 1.3.0 · build 23",
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
        w_hist_t: "Scan history",
        w_hist_d: "Every sweep is recorded: when it ran, over what, what it found and on what evidence. Cancelled runs go in the log too — a log holding only successful runs cannot answer \"did I scan yesterday\".",
        w_sched_t: "Scheduled scans",
        w_sched_d: "Set it to daily, weekly or monthly and leave it. The settings card states exactly when the next run falls, so you are not left guessing and scanning again just in case.",
        w_auto_t: "Start with the system",
        w_auto_d: "The background watchers only work while the app is open. Turn this on and they run from the moment you sign in. The entry is written under your own account — no administrator rights needed.",
        w_hud_t: "Collapse to a widget",
        w_hud_d: "Shrink the whole app into a small panel floating on the desktop: a few live figures, and a strip that lights up when something needs your decision.",

        win_note_title: "When you need administrator rights",
        win_note_body: "For everyday use the normal build is enough — auditing, virus scanning, measuring storage and the ransomware guard all work at user level. Only three things need administrator rights: deleting Windows' own junk (the system temp folder, the update store, the old Windows install), stopping or disabling a service, and counting network bytes per process. The download ships with <code>Chay bang quyen quan tri.bat</code>, and the app itself has a <strong>Relaunch as administrator</strong> button on the Settings and Cleaner screens.",

        win_steps_title: "Running it in three steps",
        win_step_1: "Download <code>BKSafe-1.3.0-win-x64-portable.zip</code> and unzip it into a folder.",
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
        dl_mac_btn: "Download BKSafe-1.3.2.dmg (33 MB)",
        dl_droid_line: "Installed via Google Play · updates itself",
        play_small: "GET IT ON",
        spec_file: "File name",
        spec_size: "Size",
        spec_ver: "Version", spec_ver_v: "1.3.2 (build 25)",
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
        sha_hint: "Check it with <code>shasum -a 256 BKSafe-1.3.2.dmg</code>, or use the <a href=\"/downloads/BKSafe-1.3.2.dmg.sha256\" download>.sha256 file</a> alongside it.",
        dl_droid_foot: "On an older or slower phone, take the Lite build next to this one. There is no iOS build — on iPhone, everything BKSafe does sits outside what iOS lets an app reach.",

        dl_win_line: "Portable ZIP · direct download",
        dl_linux_line: ".deb package · direct download",
        footer_linux: "Linux build",
        pick_linux_kicker: "Desktop app",
        pick_linux_desc: "Thirteen screens: cleaner, storage, memory, virus scan, real-time guard, system safety, systemd services, network, drive health, temperature and monitoring.",
        pick_linux_go: "See the Linux 1.3.1 build",
        linux_eyebrow: "Linux build",
        linux_title: "Your machine, measured from the kernel itself.",
        linux_sub: "The same BKSafe, written for Linux: thirteen screens reading straight from <code>/proc</code>, <code>/sys</code> and systemd — cleaner, storage, memory, virus scanning by file content, a guard that checks new files the moment they land, a systemd service audit that cross-checks every binary against your package manager, plus drive health, temperature and network. Installs as a normal .deb and removes cleanly.",
        linux_badge_ver: "Version 1.3.1 · build 24",
        linux_badge_req: "Debian 12 / Ubuntu 22.04 or newer",
        linux_badge_deb: ".deb — installs and removes cleanly",
        dl_linux_btn: "Download the Linux .deb (15 MB)",
        btn_dl_linux: "Download for Linux",
        spec_ver_linux: "1.3.1 (build 24)",
        spec_req_linux: "Debian 12, Ubuntu 22.04 or newer — anything with GTK 3",
        spec_arch_linux: "amd64 (x86-64) — about 34 MB once installed",
        spec_install_linux: "Double-click the file, or <code>sudo apt install ./BKSafe-1.3.1-linux-amd64.deb</code>",
        spec_sign_linux: "Not signed — verify with the SHA-256 below",
        sha_hint_linux: "Check it with <code>sha256sum BKSafe-1.3.1-linux-amd64.deb</code>, or use the <a href=\"/downloads/BKSafe-1.3.1-linux-amd64.deb.sha256\" download>.sha256 file</a> alongside it.",
        linux_steps_title: "Installing it in three steps",
        linux_step_1: "Download <code>BKSafe-1.3.1-linux-amd64.deb</code>.",
        linux_step_2: "Double-click it to open your software installer, or run <code>sudo apt install ./BKSafe-1.3.1-linux-amd64.deb</code> in a terminal.",
        linux_step_3: "Open <strong>BKSafe</strong> from the applications menu, or type <code>bksafe</code> in a terminal.",
        linux_steps_foot: "The package pulls in whatever GTK libraries your machine is missing, puts an icon in the applications menu, and removes cleanly with <code>sudo apt remove bksafe</code>. Your settings live under <code>~/.config</code> and <code>~/.local/share/bksafe</code>, so removing the package does not lose them. A few readings need optional tools that most desktops already have — <code>smartmontools</code> for drive health, <code>e2fsprogs</code> for fragmentation, <code>policykit-1</code> for anything needing administrator rights; without them the app says the reading is unavailable rather than inventing a number.",
        dl_win_btn: "Download the Windows portable build (20 MB)",
        dl_lite_line: "Installed via Google Play · built for slower phones",
        dl_lite_foot: "Four things, no more: file scan, junk cleanup, battery check and a network speed test. No background service and no AI model, so it stays light on the battery.",
        spec_ver_win: "1.3.0 (build 23)",
        spec_req_win: "Windows 10 64-bit or later",
        spec_arch_win: "x64 — about 39 MB once unzipped",
        spec_req_droid: "Android 7.0 or later",
        spec_install: "Installation",
        spec_install_v: "None — unzip, then double-click <code>bksafe.exe</code>",
        spec_sign_win: "Not code-signed — SmartScreen may ask on first launch",
        sha_hint_win: "Check it with <code>Get-FileHash BKSafe-1.3.0-win-x64-portable.zip -Algorithm SHA256</code> in PowerShell, or use the <a href=\"/downloads/BKSafe-1.3.0-win-x64-portable.zip.sha256\" download>.sha256 file</a> alongside it.",

        faq_title: "Questions that come up.",
        faq_1_q: "Does BKSafe send my data anywhere?",
        faq_1_a: "No. Scanning and measurement run entirely on the device. The app does not upload your files, your process list or your machine figures to any server — and you can check that yourself on the app's own Network screen, which lists traffic per process.",
        faq_2_q: "Why is the macOS build not on the Mac App Store?",
        faq_2_a: "App Store apps must run sandboxed, and inside the sandbox you cannot read the drive's SMART figures, cannot read thermal sensors and cannot walk junk folders outside your own container. So BKSafe ships through a Developer ID with Apple notarization — the route CleanMyMac, iStat Menus and Little Snitch take.",
        faq_3_q: "Will macOS block it when I open it?",
        faq_3_a: "No. Build 1.3.0 is signed with a Developer ID and notarized by Apple, with the ticket stapled to both the DMG and the app inside. Drag it into Applications and open it like anything else, even with no network connection.",
        faq_4_q: "Does it work on Intel Macs?",
        faq_4_a: "Yes. It is a universal binary that runs natively on both Intel (x86_64) and Apple Silicon (arm64). There is one file to download, and no build to choose between.",
        faq_5_q: "How do I know the download is genuine?",
        faq_5_a: "On a Mac run <code>shasum -a 256 BKSafe-1.3.2.dmg</code>; on Windows open PowerShell and run <code>Get-FileHash BKSafe-1.3.0-win-x64-portable.zip -Algorithm SHA256</code>; on Linux run <code>sha256sum BKSafe-1.3.1-linux-amd64.deb</code>. Compare the result with the SHA-256 published in the Download section — matching strings mean the file is intact.",
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
        footer_rights: "All rights reserved.",

        /* Bảng giá */
        nav_pricing: "Pricing",
        pr_eyebrow: "Pricing",
        pr_title: "Protection is free. Automation is what costs.",
        pr_sub: "Scanning, quarantine, cleanup and every live figure stay free forever — an antivirus that locks away the protecting part and then asks for money is not one we would ship. Pro sells the two things you cannot do by hand: watching while you are away, and remembering further back.",
        pr_free_name: "Free",
        pr_free_amount: "$0",
        pr_free_note: "Forever, on every platform.",
        pr_free_1: "Scan files on demand, with the full external signature database",
        pr_free_2: "Move anything found to quarantine",
        pr_free_3: "Junk cleanup, storage, disk, memory, temperature, live network figures",
        pr_free_4: "Startup-item and service inspection",
        pr_free_5: "7 days of scan history",
        pr_free_btn: "Download",
        pr_pro_tag: "Best value",
        pr_pro_name: "Pro — desktop",
        pr_pro_per: "/ year",
        pr_pro_note: "Or $1.99 a month — the yearly plan saves 37%.",
        pr_pro_1: "<strong>Everything in Free</strong>, plus:",
        pr_pro_2: "Real-time guard — new files scanned the moment they land, and the startup folders watched",
        pr_pro_3: "Scheduled scans that run without you opening the app",
        pr_pro_4: "Automatic traffic alerts every 6 hours",
        pr_pro_5: "Full scan history instead of 7 days",
        pr_pro_6: "BKSafe Firewall",
        pr_pro_6_note: "(Linux only)",
        pr_pro_btn: "Get BKSafe, then upgrade in the app",
        pr_pro_fine: "Paid through PayPal from inside the app. Renews automatically; cancel any time on paypal.com. Priced in USD — PayPal does not support VND.",
        pr_droid_name: "Premium — Android",
        pr_droid_per: "/ year",
        pr_droid_note: "Billed through Google Play.",
        pr_droid_1: "Automatic scan of newly installed apps and downloads",
        pr_droid_2: "Traffic alerts without opening the app",
        pr_droid_3: "30 days of traffic history instead of 7",
        pr_droid_btn: "Get it on Google Play",
        pr_support: "Trouble paying, or a question about a charge?",

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

        // The policy page carries its own title/description keys, so each page
        // says which pair it wants rather than the script guessing from the URL.
        const titleKey = document.body.dataset.titleKey || 'page_title';
        const descKey = document.body.dataset.descKey || 'meta_desc';
        if (dict[titleKey]) document.title = dict[titleKey];
        const meta = document.querySelector('meta[name="description"]');
        if (meta && dict[descKey]) meta.setAttribute('content', dict[descKey]);

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
