/* =========================================================
   ChefEasy — Android page, iOS page and privacy policy.
   One dictionary serves all three: keys with no prefix are shared,
   `ios_` keys belong to the App Store page and `pol_` keys to the
   policy. Each page says which title/description pair it wants
   through data-title-key / data-desc-key on <body>, and which
   screenshot folder its gallery reads through data-shot-dir.
   Theme rides on the site-wide 'theme' key; the language choice is
   stored separately so it does not fight the landing page picker.
   ========================================================= */

const i18n = {
    vi: {
        page_title: "ChefEasy — app công thức nấu ăn từng bước | AIBachKhoa",
        meta_desc: "App công thức nấu ăn cho Android: 44 món Việt, Trung, Nhật, Hàn, chế độ nấu từng bước có hẹn giờ, tìm bằng giọng nói, đọc được khi không mạng.",
        aria_lang: "Đổi ngôn ngữ",
        aria_theme: "Đổi giao diện sáng/tối",
        aria_menu: "Mở menu",
        skip_link: "Tới nội dung chính",

        nav_home: "Trang chủ",
        nav_overview: "Tổng quan",
        nav_cook: "Chế độ nấu",
        nav_voice: "Giọng nói",
        nav_pro: "ChefEasy Pro",
        nav_shots: "Ảnh màn hình",
        nav_policy: "Quyền riêng tư",
        nav_ios: "Bản iPhone & iPad",
        nav_android: "Bản Android",

        switch_label: "Nền tảng:",
        switch_android: "Android",
        switch_ios: "iPhone & iPad",

        hero_kicker: "Android · nấu ăn tại nhà",
        hero_title: "Nấu theo từng bước, <em>không phải đọc lại từ đầu</em>.",
        hero_sub: "Phần khó của một công thức không nằm ở danh sách nguyên liệu, mà ở lúc tay bạn đang dính bột và cần biết bước tiếp theo là gì. ChefEasy dẫn từng bước một, mỗi bước một đồng hồ riêng, màn hình không tự tắt giữa chừng.",
        btn_play: "Tải trên Google Play",
        btn_appstore: "Xem trên App Store",
        btn_shots: "Xem giao diện",
        btn_policy: "Đọc chính sách quyền riêng tư",
        btn_contact: "Liên hệ",
        hero_meta: "Mã ứng dụng <code>com.tdson.cooky</code> · dọc màn hình · Android 7.0 trở lên · miễn phí, có quảng cáo và gói đăng ký tuỳ chọn.",

        stat_recipes: "Món ăn, đọc được khi không có mạng",
        stat_langs: "Ngôn ngữ giao diện và công thức",
        stat_cuisine: "Nền ẩm thực: Việt, Trung, Nhật, Hàn",
        stat_offline: "Lần cần mạng để mở một công thức",
        stat_account: "Tài khoản phải tạo trước khi nấu",

        cook_eyebrow: "Chế độ nấu",
        cook_title: "Một bước một màn hình, <em>và một cái đồng hồ</em>.",
        cook_sub: "Công thức in trên giấy bắt bạn tự tìm lại dòng đang đọc dở. Chế độ nấu của ChefEasy làm ngược lại: mỗi lần chỉ hiện đúng việc đang phải làm, kèm đồng hồ đếm cho việc đó, và chỉ chuyển tiếp khi bạn bảo nó chuyển.",

        c_step_t: "Đúng một việc trên màn hình",
        c_step_d: "Bước đang thực hiện chiếm trọn khung nhìn, các bước còn lại thu xuống thành danh sách tiến độ bên dưới. Không phải dò mắt tìm dòng đang dở giữa một trang chữ dày đặc.",
        c_timer_t: "Đồng hồ gắn vào từng việc, không phải cả món",
        c_timer_d: "\"Ngâm đậu xanh 6-8 tiếng\" và \"cắt hành lá\" không cùng một loại thời gian. Mỗi việc mang đồng hồ riêng, chạy tự động khi tới lượt, và có nút xong sớm khi bếp nhà bạn nhanh hơn công thức.",
        c_screen_t: "Màn hình không tắt giữa chừng",
        c_screen_d: "Khi đang ở chế độ nấu, app giữ màn hình sáng. Không phải chạm vào điện thoại bằng tay dính dầu chỉ để đọc tiếp bước ba.",
        c_check_t: "Nguyên liệu tick được",
        c_check_d: "Danh sách nguyên liệu có ô đánh dấu và bộ đếm ở góc. Đi chợ về tick dần, hoặc vừa sơ chế vừa tick — cái nào chưa làm nhìn là biết.",

        voice_eyebrow: "Giọng nói",
        voice_title: "Tay bận thì <em>nói</em>.",
        voice_sub: "Nút micro nổi ở góc màn hình có mặt ở cả trang chủ, trang chi tiết lẫn trong lúc nấu. Nói tên món để tìm, hoặc ra lệnh chuyển bước mà không cần chạm vào máy.",
        v_1: "<strong>Tìm món bằng lời.</strong> Đọc tên món và app lọc ngay trong 44 công thức, khớp cả tên tiếng Việt lẫn tên đã dịch.",
        v_2: "<strong>Điều khiển lúc đang nấu.</strong> Chuyển bước, quay lại, bật hoặc dừng đồng hồ — bằng giọng, giữa lúc hai tay đang bận.",
        v_3: "<strong>Chỉ bật khi bạn bấm.</strong> Micro không nghe nền. Nó chỉ mở sau khi bạn chạm nút, và tắt ngay khi bạn nói xong.",
        v_note: "<strong>Cần nói rõ:</strong> việc chuyển giọng nói thành chữ do dịch vụ nhận dạng của hệ điều hành đảm nhiệm, nên đoạn âm thanh đó được gửi tới máy chủ của Google (trên Android) hoặc Apple (trên iPhone, iPad). ChefEasy không nhận được bản ghi, không lưu lại và không có máy chủ nào để lưu. Không muốn dùng thì đừng bấm nút micro — mọi thứ còn lại của app không cần tới nó.",

        lang_eyebrow: "Ngôn ngữ",
        lang_title: "Năm thứ tiếng, <em>dịch cả công thức</em>.",
        lang_sub: "Không chỉ nút bấm và nhãn menu. Tên món, nguyên liệu và từng bước nấu đều có bản dịch riêng — phần nào chưa dịch thì lùi về tiếng Anh chứ không để trống.",
        lang_vi: "Tiếng Việt",
        lang_en: "English",
        lang_ja: "日本語",
        lang_ko: "한국어",
        lang_zh: "中文",
        lang_note: "Số liệu — thời gian, khẩu phần, calo — giữ nguyên khi đổi ngôn ngữ, vì đó là thông tin của món ăn chứ không phải của bản dịch.",

        offline_eyebrow: "Không cần mạng",
        offline_title: "Công thức nằm sẵn <em>trong máy</em>.",
        offline_sub: "Toàn bộ 44 công thức và ảnh món đi kèm ứng dụng, được giải nén vào máy ở lần mở đầu tiên. Từ lần thứ hai trở đi, mở app là có ngay — kể cả khi bếp nhà bạn nằm chỗ sóng yếu.",
        o_1: "<strong>Đọc công thức không cần mạng.</strong> Tắt Wi-Fi và 4G thì phần nấu nướng không đổi gì.",
        o_2: "<strong>Không có tài khoản.</strong> Không đăng ký, không đăng nhập, không hồ sơ người dùng. Mở app là dùng được.",
        o_3: "<strong>Món yêu thích lưu trong máy.</strong> Danh sách yêu thích và lịch sử xem nằm trong bộ nhớ riêng của app, không gửi đi đâu.",
        o_4: "<strong>Mạng chỉ dùng cho hai việc.</strong> Tải quảng cáo ở bản miễn phí, và xử lý thanh toán khi bạn đăng ký Pro.",

        pro_eyebrow: "ChefEasy Pro",
        pro_title: "Tuỳ chọn, và <em>nói rõ từng dòng</em>.",
        pro_sub: "Bản miễn phí dùng được đầy đủ toàn bộ món Việt — không giới hạn số lần mở, không khoá bước nào. Pro là gói đăng ký để bỏ quảng cáo và mở thêm món nước ngoài.",
        th_q: "Câu hỏi",
        th_a: "Trả lời",
        pro_q1: "Pro mở thêm gì",
        pro_a1: "Bỏ toàn bộ quảng cáo, mở khoá các món Trung, Nhật, Hàn, và nhận món mới bổ sung hằng tuần.",
        pro_q2: "Không mua thì mất gì",
        pro_a2: "Không mất gì trong phần món Việt. Toàn bộ món Việt, chế độ nấu từng bước, hẹn giờ, tìm bằng giọng nói và chế độ ngoại tuyến đều miễn phí.",
        pro_q3: "Tính tiền thế nào",
        pro_a3: "Gói tháng hoặc gói năm, tự gia hạn, thanh toán qua Google Play. Giá hiện theo tiền tệ của bạn ngay trong app.",
        pro_q4: "Huỷ ở đâu",
        pro_a4: "Trong Google Play → Gói thuê bao, huỷ bất cứ lúc nào. App không có màn hình níu kéo, và chúng tôi không bao giờ thấy thẻ của bạn.",
        pro_q5: "Huỷ rồi thì sao",
        pro_a5: "Quảng cáo quay lại và các món Trung, Nhật, Hàn khoá lại khi hết kỳ đã trả. Món Việt vẫn nguyên.",

        gal_eyebrow: "Ảnh màn hình",
        gal_title: "Chụp thẳng từ máy, <em>không dựng</em>.",
        gal_sub: "Mọi khung hình dưới đây chụp trực tiếp trên thiết bị, đúng như app vẽ ra.",

        s1_title: "Trang chủ",
        s1_cap: "Món yêu thích và vừa xem gần đây nằm trên cùng, bên dưới là toàn bộ danh sách kèm thời gian nấu, calo, khẩu phần và độ khó — đủ để chọn món trước khi mở ra.",
        s2_title: "Trang chi tiết món",
        s2_cap: "Ảnh món, thẻ phân loại, mô tả ngắn, rồi tới sáu chỉ số của món. Hai nút dưới cùng là hai lối vào song song: đọc toàn bộ một trang, hoặc để app dẫn từng bước.",
        s3_title: "Nguyên liệu",
        s3_cap: "Mỗi dòng một nguyên liệu kèm ghi chú sơ chế và ô đánh dấu. Bộ đếm ở góc cho biết còn bao nhiêu thứ chưa chuẩn bị.",
        s4_title: "Công thức đầy đủ",
        s4_cap: "Bản đọc một trang cho người thích nhìn toàn cảnh trước khi bắt tay vào làm, có nút chuyển thẳng sang chế độ nấu từng bước ở cuối.",
        s5_title: "Đang nấu",
        s5_cap: "Bước hiện tại chiếm trọn màn hình, đồng hồ của việc đang làm chạy ở giữa, tiến độ các việc còn lại nằm ngay dưới.",

        a4_title: "Đang nấu",
        a4_cap: "Bước hiện tại chiếm trọn màn hình, đồng hồ của việc đang làm chạy ở giữa, tiến độ các việc còn lại nằm ngay dưới.",
        a5_title: "ChefEasy Pro",
        a5_cap: "Hộp thoại nâng cấp nói thẳng ba thứ Pro mở ra, và có nút Để sau — bản miễn phí vẫn dùng đủ toàn bộ món Việt.",

        faq_eyebrow: "Câu hỏi thường gặp",
        faq1_q: "Chạy được trên Android nào?",
        faq1_a: "Android 7.0 trở lên, màn hình dọc. Ứng dụng miễn phí, có quảng cáo và có gói đăng ký tuỳ chọn.",
        faq2_q: "Có quảng cáo không?",
        faq2_a: "Bản miễn phí có quảng cáo hiện lúc mở app. Không có quảng cáo chen ngang giữa lúc đang nấu. Đăng ký Pro thì bỏ hẳn.",
        faq3_q: "Có cần mạng không?",
        faq3_a: "Không, để đọc và nấu công thức. Mạng chỉ cần cho quảng cáo, cho thanh toán, và cho phần tìm bằng giọng nói.",
        faq4_q: "App có thu thập dữ liệu của tôi không?",
        faq4_a: "Chúng tôi không có máy chủ và không nhận dữ liệu nào về bạn. Món yêu thích, lịch sử xem và cài đặt nằm trong bộ nhớ riêng của app trên máy bạn. Bên thứ ba duy nhất là Google — cho quảng cáo, thanh toán và nhận dạng giọng nói.",
        faq5_q: "Micro dùng để làm gì?",
        faq5_a: "Chỉ để tìm món và ra lệnh khi đang nấu, và chỉ sau khi bạn bấm nút micro. App không nghe nền, không ghi âm và không lưu bất cứ đoạn tiếng nào.",
        faq6_q: "Trẻ em dùng được không?",
        faq6_a: "Nội dung là công thức nấu ăn, không có gì nhạy cảm. Nhưng app có quảng cáo và có mua trong ứng dụng, nên máy dùng chung nên đặt mã PIN mua hàng trên cửa hàng.",

        cta_title: "Mở app, chọn món, và để nó dẫn bạn từng bước.",

        footer_desc: "Xây dựng công cụ AI thiết thực cho lập trình viên và doanh nghiệp.",
        footer_app: "Ứng dụng",
        footer_prod: "Sản phẩm khác",
        footer_comp: "Công ty",
        footer_about: "Giới thiệu",
        footer_services: "Dịch vụ",
        footer_contact: "Liên hệ",
        footer_rights: "Bảo lưu mọi quyền.",

        /* ---------- iOS page ---------- */
        ios_page_title: "ChefEasy cho iPhone & iPad — nấu từng bước | AIBachKhoa",
        ios_meta_desc: "App công thức nấu ăn cho iPhone và iPad: 44 món Á, chế độ nấu từng bước có hẹn giờ, tìm bằng giọng nói, đọc offline. Yêu cầu iOS 15.0 trở lên.",
        ios_kicker: "iPhone & iPad · nấu ăn tại nhà",
        ios_meta: "Mã bundle <code>com.tdson.cooky</code> · dọc màn hình · iPhone và iPad, iOS 15.0 trở lên · miễn phí, có quảng cáo và gói đăng ký tuỳ chọn.",
        ios_faq1_q: "Chạy được trên iPhone, iPad nào?",
        ios_faq1_a: "iOS 15.0 trở lên, cho cả iPhone lẫn iPad.",
        ios_faq3_a: "Không, để đọc và nấu công thức. Mạng chỉ cần cho quảng cáo, cho thanh toán qua App Store, và cho phần tìm bằng giọng nói.",
        ios_faq4_a: "Chúng tôi không có máy chủ và không nhận dữ liệu nào về bạn. Món yêu thích, lịch sử xem và cài đặt nằm trong bộ nhớ riêng của app trên máy bạn. Bên thứ ba là Google (quảng cáo) và Apple (thanh toán, nhận dạng giọng nói).",
        ios_perm_eyebrow: "Quyền ứng dụng xin",
        ios_perm_title: "Đúng hai quyền, <em>và chỉ khi bạn bấm</em>.",
        ios_perm_sub: "iOS hỏi bạn trước khi cấp, và cả hai chỉ được xin ở đúng lúc bạn chạm nút micro — không phải lúc mở app.",
        ios_perm_mic: "<strong>Micro.</strong> Để nghe câu bạn nói khi tìm món hoặc ra lệnh lúc đang nấu.",
        ios_perm_speech: "<strong>Nhận dạng giọng nói.</strong> Để chuyển câu đó thành chữ. Việc này do dịch vụ của Apple xử lý, nên đoạn âm thanh được gửi tới máy chủ Apple.",
        ios_perm_none: "<strong>Ngoài hai quyền trên, không xin gì thêm.</strong> Không vị trí, không danh bạ, không máy ảnh, không ảnh, không thông báo đẩy.",
        ios_pro_a3: "Gói tháng hoặc gói năm, tự gia hạn, thanh toán qua App Store. Giá hiện theo tiền tệ của bạn ngay trong app.",
        ios_pro_a4: "Trong Cài đặt → tên bạn → Đăng ký, huỷ bất cứ lúc nào. App không có màn hình níu kéo, và chúng tôi không bao giờ thấy thẻ của bạn.",
        ios_pro_a5: "Quảng cáo quay lại và các món Trung, Nhật, Hàn khoá lại khi hết kỳ đã trả. Món Việt vẫn nguyên.",

        /* ---------- Policy ---------- */
        pol_page_title: "Chính sách quyền riêng tư — ChefEasy | AIBachKhoa",
        pol_meta_desc: "ChefEasy xử lý thông tin thế nào: cái gì ở lại trong máy bạn, đoạn giọng nói đi đâu, quảng cáo và thanh toán nhận được gì.",
        pol_eyebrow: "Pháp lý",
        pol_title: "Chính sách quyền riêng tư",
        pol_app: "ChefEasy",
        pol_updated: "Cập nhật lần cuối: 6 tháng 9, 2026",
        pol_back: "Quay lại trang ứng dụng",
        pol_toc: "Nội dung trang này",
        pol_lead: "Chính sách này giải thích ChefEasy (\"chúng tôi\") thu thập, sử dụng và bảo vệ thông tin của bạn ra sao khi bạn dùng ứng dụng di động ChefEasy (\"Ứng dụng\"). Chúng tôi tuân thủ các quy định bảo vệ dữ liệu hiện hành, bao gồm GDPR và CCPA ở những nơi các quy định này được áp dụng.",

        pol_h_intro: "Giới thiệu",
        pol_intro: "ChefEasy là ứng dụng công thức nấu ăn cho Android, iPhone và iPad: 44 món Việt, Trung, Nhật, Hàn, kèm chế độ nấu dẫn từng bước có hẹn giờ. Toàn bộ công thức đi kèm ứng dụng và chạy trên chính máy bạn. Không có tài khoản, không có hồ sơ người dùng, không có phần bình luận hay trò chuyện.",

        pol_h_short: "Bản tóm tắt",
        pol_short_1: "<strong>Chúng tôi không vận hành máy chủ nào và không nhận dữ liệu nào về bạn.</strong> Món yêu thích, lịch sử xem, ngôn ngữ và các cài đặt khác được ghi vào bộ nhớ riêng của Ứng dụng trên máy bạn và không rời khỏi đó.",
        pol_short_2: "<strong>Bản miễn phí có quảng cáo</strong> do Google AdMob cung cấp. AdMob có thể đọc mã định danh quảng cáo của thiết bị để chọn và đo lường quảng cáo. Đăng ký ChefEasy Pro thì quảng cáo tắt hoàn toàn.",
        pol_short_3: "<strong>Tìm bằng giọng nói gửi đoạn âm thanh đi.</strong> Việc chuyển tiếng nói thành chữ do dịch vụ nhận dạng của hệ điều hành thực hiện — Google trên Android, Apple trên iPhone và iPad. Chỉ xảy ra sau khi bạn chạm nút micro. Chúng tôi không nhận, không nghe và không lưu đoạn âm thanh đó.",
        pol_short_4: "<strong>Không có SDK phân tích hay báo lỗi nào trong bản dựng.</strong> Không có gì đo đếm bạn làm gì trong app.",
        pol_short_5: "<strong>Ứng dụng chỉ xin quyền micro và nhận dạng giọng nói</strong>, và chỉ xin khi bạn chủ động bấm nút micro. Không vị trí, không danh bạ, không máy ảnh, không truy cập tệp của bạn.",

        pol_h_defs: "Giải thích và định nghĩa",
        pol_h_interp: "Giải thích",
        pol_interp: "Những từ viết hoa chữ cái đầu mang nghĩa được định nghĩa dưới đây, không phụ thuộc vào việc chúng ở dạng số ít hay số nhiều.",
        pol_h_defs2: "Định nghĩa",
        pol_defs_lead: "Trong Chính sách này:",
        pol_d_app: "<strong>Ứng dụng</strong> là ChefEasy, phần mềm do Công ty cung cấp.",
        pol_d_company: "<strong>Công ty</strong> (\"chúng tôi\") là tdson, nhà phát triển Ứng dụng.",
        pol_d_country: "<strong>Quốc gia</strong>: Việt Nam.",
        pol_d_device: "<strong>Thiết bị</strong> là máy có thể chạy Ứng dụng, ví dụ điện thoại hoặc máy tính bảng.",
        pol_d_personal: "<strong>Dữ liệu cá nhân</strong> là thông tin liên quan tới một cá nhân đã hoặc có thể xác định được.",
        pol_d_provider: "<strong>Bên xử lý dữ liệu</strong> là tổ chức xử lý dữ liệu thay mặt Công ty. Với Ứng dụng này chỉ gồm: Google (quảng cáo AdMob, thanh toán Google Play, nhận dạng giọng nói trên Android) và Apple (thanh toán App Store, nhận dạng giọng nói trên iOS).",
        pol_d_purchase: "<strong>Mua trong ứng dụng</strong> là gói đăng ký ChefEasy Pro theo tháng hoặc theo năm, thanh toán qua Google Play hoặc App Store tuỳ nơi bạn cài Ứng dụng.",
        pol_d_you: "<strong>Bạn</strong> là cá nhân sử dụng Ứng dụng.",

        pol_h_collect: "Dữ liệu Ứng dụng lưu",
        pol_collect_lead: "Ứng dụng lưu những thứ sau, tất cả đều nằm trong bộ nhớ riêng của nó trên máy bạn và không được gửi tới chúng tôi:",
        pol_c_1: "Danh sách món yêu thích và lịch sử món đã xem.",
        pol_c_2: "Ngôn ngữ đã chọn, giao diện sáng hoặc tối, và tuỳ chọn giữ màn hình sáng khi nấu.",
        pol_c_3: "Trạng thái đăng ký Pro, để Ứng dụng biết có nên hiện quảng cáo hay không.",
        pol_c_4: "Gói dữ liệu công thức đã giải nén ở lần mở đầu tiên.",
        pol_collect_none: "Ứng dụng không hỏi tên, email, số điện thoại hay bất kỳ thông tin định danh nào của bạn, vì nó không có nơi để gửi những thứ đó tới.",

        pol_h_voice: "Micro và nhận dạng giọng nói",
        pol_voice_1: "Ứng dụng có nút micro để tìm món và ra lệnh khi đang nấu. Micro chỉ bật sau khi bạn chạm vào nút đó, và tắt ngay khi bạn nói xong. Ứng dụng không nghe nền và không ghi âm.",
        pol_voice_2: "Việc chuyển tiếng nói thành chữ không diễn ra trên máy bạn: đoạn âm thanh được chuyển tới dịch vụ nhận dạng giọng nói của hệ điều hành — Google trên Android, Apple trên iPhone và iPad — và chỉ phần chữ được trả về cho Ứng dụng. Cách Google và Apple xử lý đoạn âm thanh đó chịu sự điều chỉnh của chính sách quyền riêng tư của họ.",
        pol_voice_3: "Chúng tôi không nhận được đoạn âm thanh, không nghe được nội dung, và không lưu lại phần chữ trả về sau khi tìm kiếm kết thúc. Nếu bạn không muốn dùng, chỉ cần không bấm nút micro — mọi tính năng khác của Ứng dụng không cần tới nó.",

        pol_h_ads: "Quảng cáo",
        pol_ads_1: "Bản miễn phí hiện quảng cáo do Google AdMob cung cấp, dạng quảng cáo toàn màn hình lúc mở Ứng dụng. Không có quảng cáo nào chen vào giữa lúc bạn đang nấu.",
        pol_ads_2: "Để chọn và đo lường quảng cáo, AdMob có thể đọc mã định danh quảng cáo của thiết bị cùng thông tin kỹ thuật cơ bản như kiểu máy và phiên bản hệ điều hành. Chúng tôi không cung cấp cho AdMob bất kỳ thông tin nào về bạn, vì chúng tôi không có.",
        pol_ads_3: "Bạn có thể đặt lại hoặc xoá mã định danh quảng cáo trong phần cài đặt của hệ điều hành. Đăng ký ChefEasy Pro sẽ tắt quảng cáo hoàn toàn, và khi đó Ứng dụng không nạp SDK quảng cáo nữa.",

        pol_h_purchases: "Mua hàng và đăng ký",
        pol_pur_1: "ChefEasy Pro là gói đăng ký tự gia hạn theo tháng hoặc theo năm, dùng để tắt quảng cáo và mở khoá các món Trung, Nhật, Hàn.",
        pol_pur_2: "Giao dịch do Google Play hoặc App Store xử lý hoàn toàn, tuỳ nơi bạn cài Ứng dụng. Chúng tôi không bao giờ nhìn thấy, không nhận và không lưu thông tin thẻ hay thông tin thanh toán của bạn. Ứng dụng chỉ nhận được kết quả cuối cùng: đăng ký đang hoạt động hay không.",
        pol_pur_3: "Huỷ đăng ký trong Google Play → Gói thuê bao, hoặc Cài đặt → tên bạn → Đăng ký trên iPhone và iPad.",

        pol_h_perm: "Quyền và truy cập mạng",
        pol_perm_1: "Trên Android, Ứng dụng khai báo quyền ghi âm (cho nút micro) cùng quyền truy cập Internet và trạng thái mạng. Trên iPhone và iPad, Ứng dụng xin quyền micro và quyền nhận dạng giọng nói, và chỉ xin khi bạn chạm nút micro lần đầu.",
        pol_perm_2: "Ứng dụng không xin quyền vị trí, danh bạ, lịch, máy ảnh, thư viện ảnh hay quyền đọc tệp của bạn.",
        pol_perm_3: "Kết nối mạng chỉ được dùng cho ba việc: nạp quảng cáo ở bản miễn phí, xử lý thanh toán khi bạn đăng ký Pro, và gửi đoạn âm thanh tới dịch vụ nhận dạng giọng nói khi bạn dùng nút micro. Việc đọc và nấu theo công thức hoạt động bình thường khi không có mạng.",

        pol_h_storage: "Lưu trữ và xoá dữ liệu",
        pol_storage_1: "Mọi thứ Ứng dụng lưu đều nằm trong vùng nhớ riêng của nó trên máy bạn. Chúng tôi không có bản sao ở nơi nào khác, vì chúng tôi không vận hành máy chủ.",
        pol_storage_2: "Gỡ Ứng dụng sẽ xoá toàn bộ những dữ liệu đó. Bạn cũng có thể xoá dữ liệu ứng dụng trong phần cài đặt hệ điều hành mà không cần gỡ.",

        pol_h_children: "Quyền riêng tư của trẻ em",
        pol_children: "Ứng dụng không nhắm tới trẻ em dưới 13 tuổi và không cố ý thu thập dữ liệu cá nhân của trẻ em. Ứng dụng có chứa quảng cáo và mua trong ứng dụng, nên với máy dùng chung, chúng tôi khuyên bật mã PIN xác nhận mua hàng trên Google Play hoặc bật Screen Time trên thiết bị Apple.",

        pol_h_rights: "Quyền của bạn",
        pol_rights: "GDPR và CCPA cho bạn quyền truy cập, chỉnh sửa, xoá và mang đi dữ liệu cá nhân mà một tổ chức nắm giữ về bạn. Với Ứng dụng này, những quyền đó gần như không có gì để thực thi: chúng tôi không nắm giữ dữ liệu cá nhân nào của bạn. Dữ liệu duy nhất tồn tại nằm trên máy bạn và bạn xoá được bất cứ lúc nào bằng cách gỡ Ứng dụng. Với dữ liệu mà Google hoặc Apple xử lý — quảng cáo, thanh toán, nhận dạng giọng nói — vui lòng thực hiện quyền của bạn trực tiếp với họ.",

        pol_h_security: "Bảo mật",
        pol_security: "Vì Ứng dụng không truyền dữ liệu cá nhân đi, không có đường truyền nào để chặn bắt và không có cơ sở dữ liệu nào của chúng tôi để bị xâm nhập. Gói công thức đi kèm Ứng dụng được mã hoá và chỉ giải mã trên máy bạn. Dù vậy, không có phương thức lưu trữ điện tử nào an toàn tuyệt đối.",

        pol_h_changes: "Thay đổi chính sách",
        pol_changes: "Khi có thay đổi, bản mới sẽ được đăng tại chính trang này kèm ngày cập nhật mới. Nếu một bản cập nhật của Ứng dụng làm thay đổi cách xử lý dữ liệu, chúng tôi sẽ sửa trang này trước khi bản cập nhật đó được phát hành.",

        pol_h_contact: "Liên hệ",
        pol_contact: "Có câu hỏi về chính sách này, xin liên hệ:",
        pol_back_app: "Quay lại trang ChefEasy"
    }
};

/* English mirrors the Vietnamese copy; the app itself is bilingual, so the
   page should be too. Keys missing here fall through to Vietnamese. */
i18n.en = {
    page_title: "ChefEasy — cook a recipe one step at a time | AIBachKhoa",
    meta_desc: "A cooking app for Android: 44 Vietnamese, Chinese, Japanese and Korean dishes, guided step-by-step mode with timers, voice search, works offline.",
    aria_lang: "Change language",
    aria_theme: "Toggle theme",
    aria_menu: "Open menu",
    skip_link: "Skip to content",

    nav_home: "Home",
    nav_overview: "Overview",
    nav_cook: "Cooking mode",
    nav_voice: "Voice",
    nav_pro: "ChefEasy Pro",
    nav_shots: "Screenshots",
    nav_policy: "Privacy",
    nav_ios: "iPhone & iPad version",
    nav_android: "Android version",

    switch_label: "Platform:",
    switch_android: "Android",
    switch_ios: "iPhone & iPad",

    hero_kicker: "Android · home cooking",
    hero_title: "One step at a time, <em>not one wall of text</em>.",
    hero_sub: "The hard part of a recipe is not the ingredient list. It is the moment your hands are covered in flour and you need to know what comes next. ChefEasy walks you through one task at a time, each with its own timer, and keeps the screen awake while it does.",
    btn_play: "Get it on Google Play",
    btn_appstore: "View on the App Store",
    btn_shots: "See the app",
    btn_policy: "Read the privacy policy",
    btn_contact: "Contact us",
    hero_meta: "Application id <code>com.tdson.cooky</code> · portrait · Android 7.0 and up · free, with ads and an optional subscription.",

    stat_recipes: "Recipes, all readable offline",
    stat_langs: "Languages, interface and recipes alike",
    stat_cuisine: "Cuisines: Vietnamese, Chinese, Japanese, Korean",
    stat_offline: "Times you need a connection to open a recipe",
    stat_account: "Accounts to create before you can cook",

    cook_eyebrow: "Cooking mode",
    cook_title: "One step per screen, <em>and a clock for it</em>.",
    cook_sub: "A printed recipe makes you find your place again every time you look down. Cooking mode does the opposite: it shows only the task in front of you, counts down that task alone, and moves on when you say so.",

    c_step_t: "Exactly one thing on screen",
    c_step_d: "The current step fills the view; the rest collapse into a progress list underneath. No hunting for the line you were on in a dense block of text.",
    c_timer_t: "Timers on tasks, not on the dish",
    c_timer_d: "\"Soak the mung beans 6–8 hours\" and \"chop the spring onion\" are not the same kind of time. Each task carries its own clock, starts when its turn comes, and has a done-early button for when your stove is faster than the recipe.",
    c_screen_t: "The screen stays awake",
    c_screen_d: "While cooking mode is open the app keeps the display on. You never have to touch the phone with oily hands just to read step three.",
    c_check_t: "Ingredients you can tick off",
    c_check_d: "The ingredient list has checkboxes and a counter in the corner. Tick them at the market or as you prep — what is left is always obvious.",

    voice_eyebrow: "Voice",
    voice_title: "When your hands are busy, <em>say it</em>.",
    voice_sub: "A floating microphone button sits on the home screen, the recipe page and inside cooking mode. Say a dish to find it, or move between steps without touching the device.",
    v_1: "<strong>Search by speaking.</strong> Say a dish name and the app filters all 44 recipes, matching both the original name and its translation.",
    v_2: "<strong>Command while cooking.</strong> Next step, back, start or stop a timer — by voice, with both hands full.",
    v_3: "<strong>Only on when you press it.</strong> The microphone does not listen in the background. It opens after you tap the button and closes when you stop speaking.",
    v_note: "<strong>Worth stating plainly:</strong> turning speech into text is done by the operating system's own recognition service, so that audio goes to Google's servers on Android or Apple's on iPhone and iPad. ChefEasy never receives the recording, never stores it, and has no server to store it on. If you would rather not, simply never press the microphone button — nothing else in the app needs it.",

    lang_eyebrow: "Languages",
    lang_title: "Five languages, <em>recipes included</em>.",
    lang_sub: "Not just buttons and menu labels. Dish names, ingredients and every cooking step carry their own translation — and anything not yet translated falls back to English rather than showing blank.",
    lang_vi: "Tiếng Việt",
    lang_en: "English",
    lang_ja: "日本語",
    lang_ko: "한국어",
    lang_zh: "中文",
    lang_note: "The numbers — cooking time, servings, calories — stay put when you switch language, because they describe the dish rather than the translation.",

    offline_eyebrow: "Offline",
    offline_title: "The recipes live <em>on your device</em>.",
    offline_sub: "All 44 recipes and their photographs ship inside the app and unpack on first launch. From the second launch onward it opens straight away — including in the corner of the kitchen where the signal dies.",
    o_1: "<strong>Recipes read with no connection.</strong> Turn off Wi-Fi and mobile data and the cooking side of the app is unchanged.",
    o_2: "<strong>No account.</strong> No sign-up, no login, no user profile. Open the app and use it.",
    o_3: "<strong>Favourites stay on the device.</strong> Your favourites and viewing history live in the app's own storage and are not sent anywhere.",
    o_4: "<strong>The network is used for two things.</strong> Loading ads on the free tier, and handling payment when you subscribe to Pro.",

    pro_eyebrow: "ChefEasy Pro",
    pro_title: "Optional, and <em>spelled out</em>.",
    pro_sub: "The free tier gives you every Vietnamese dish in full — no open limit, no locked steps. Pro is a subscription that removes the ads and unlocks the other cuisines.",
    th_q: "The question",
    th_a: "The answer",
    pro_q1: "What Pro unlocks",
    pro_a1: "Removes every ad, unlocks the Chinese, Japanese and Korean dishes, and adds new recipes each week.",
    pro_q2: "What you lose without it",
    pro_a2: "Nothing on the Vietnamese side. Every Vietnamese dish, the guided cooking mode, the timers, voice search and offline use are all free.",
    pro_q3: "What it costs",
    pro_a3: "A monthly or a yearly plan, auto-renewing, billed by Google Play. The price appears in your own currency inside the app.",
    pro_q4: "How to cancel",
    pro_a4: "In Google Play → Payments & subscriptions, any time. There is no retention flow in the app to argue with you, and we never see your card.",
    pro_q5: "If you cancel",
    pro_a5: "Ads return and the Chinese, Japanese and Korean dishes lock again at the end of the period you paid for. The Vietnamese dishes stay.",

    gal_eyebrow: "Screenshots",
    gal_title: "Straight captures, <em>no mock-ups</em>.",
    gal_sub: "Every frame below comes off a real device, exactly as the app draws it.",

    s1_title: "Home",
    s1_cap: "Favourites and recently viewed sit at the top; below them the full list, each row carrying cooking time, calories, servings and difficulty — enough to choose a dish before opening it.",
    s2_title: "Recipe page",
    s2_cap: "Photograph, tags, a short description, then the six numbers that describe the dish. The two buttons at the bottom are parallel ways in: read it all on one page, or let the app walk you through.",
    s3_title: "Ingredients",
    s3_cap: "One row per ingredient with its prep note and a checkbox. The counter in the corner says how much is still to do.",
    s4_title: "The full recipe",
    s4_cap: "A single-page read for people who want the whole shape before starting, with a button at the end that drops straight into guided cooking.",
    s5_title: "Cooking",
    s5_cap: "The current step fills the screen, the clock for the task in hand runs in the middle, and the remaining tasks sit right below it.",

    a4_title: "Cooking",
    a4_cap: "The current step fills the screen, the clock for the task in hand runs in the middle, and the remaining tasks sit right below it.",
    a5_title: "ChefEasy Pro",
    a5_cap: "The upgrade sheet states the three things Pro unlocks, and carries a Later button — the free tier still gives you every Vietnamese dish in full.",

    faq_eyebrow: "Questions",
    faq1_q: "Which Android versions does it run on?",
    faq1_a: "Android 7.0 and up, in portrait. The app is free, carries ads, and offers an optional subscription.",
    faq2_q: "Are there ads?",
    faq2_a: "The free tier shows an ad when the app opens. Nothing interrupts you mid-recipe. A Pro subscription removes them entirely.",
    faq3_q: "Does it need an internet connection?",
    faq3_a: "Not to read or cook a recipe. A connection is used for ads, for payment, and for voice search.",
    faq4_q: "Does the app collect my data?",
    faq4_a: "We run no servers and receive no data about you. Favourites, history and settings live in the app's own storage on your device. The only third party is Google — for ads, payment and speech recognition.",
    faq5_q: "What is the microphone for?",
    faq5_a: "Only for finding a dish and for commands while cooking, and only after you press the microphone button. The app does not listen in the background, does not record, and keeps no audio.",
    faq6_q: "Is it suitable for children?",
    faq6_a: "The content is cooking recipes, with nothing sensitive in it. But the app carries ads and in-app purchases, so a shared device is worth a store purchase PIN.",

    cta_title: "Open it, pick a dish, and let it walk you through.",

    footer_desc: "Building practical AI tools for developers and businesses.",
    footer_app: "The app",
    footer_prod: "Other products",
    footer_comp: "Company",
    footer_about: "About",
    footer_services: "Services",
    footer_contact: "Contact",
    footer_rights: "All rights reserved.",

    ios_page_title: "ChefEasy for iPhone & iPad — cook step by step | AIBachKhoa",
    ios_meta_desc: "A cooking app for iPhone and iPad: 44 Asian dishes, guided step-by-step mode with timers, voice search, works offline. Requires iOS 15.0 or later.",
    ios_kicker: "iPhone & iPad · home cooking",
    ios_meta: "Bundle id <code>com.tdson.cooky</code> · portrait · iPhone and iPad, iOS 15.0 or later · free, with ads and an optional subscription.",
    ios_faq1_q: "Which iPhones and iPads does it run on?",
    ios_faq1_a: "iOS 15.0 or later, on both iPhone and iPad.",
    ios_faq3_a: "Not to read or cook a recipe. A connection is used for ads, for App Store payment, and for voice search.",
    ios_faq4_a: "We run no servers and receive no data about you. Favourites, history and settings live in the app's own storage on your device. The third parties are Google, for ads, and Apple, for payment and speech recognition.",
    ios_perm_eyebrow: "Permissions",
    ios_perm_title: "Two permissions, <em>and only when you press</em>.",
    ios_perm_sub: "iOS asks you before granting either, and both are requested at the moment you tap the microphone — not when the app opens.",
    ios_perm_mic: "<strong>Microphone.</strong> To hear what you say when searching for a dish or giving a command while cooking.",
    ios_perm_speech: "<strong>Speech recognition.</strong> To turn that into text. Apple's service does this work, so the audio goes to Apple's servers.",
    ios_perm_none: "<strong>Nothing beyond those two.</strong> No location, no contacts, no camera, no photo library, no push notifications.",
    ios_pro_a3: "A monthly or a yearly plan, auto-renewing, billed by the App Store. The price appears in your own currency inside the app.",
    ios_pro_a4: "In Settings → your name → Subscriptions, any time. There is no retention flow in the app to argue with you, and we never see your card.",
    ios_pro_a5: "Ads return and the Chinese, Japanese and Korean dishes lock again at the end of the period you paid for. The Vietnamese dishes stay.",

    pol_page_title: "Privacy Policy — ChefEasy | AIBachKhoa",
    pol_meta_desc: "How ChefEasy handles information: what stays on your device, where a voice search goes, and what the ad network and app stores receive.",
    pol_eyebrow: "Legal",
    pol_title: "Privacy Policy",
    pol_app: "ChefEasy",
    pol_updated: "Last updated: 6 September 2026",
    pol_back: "Back to the app",
    pol_toc: "On this page",
    pol_lead: "This Privacy Policy explains how ChefEasy (\"we\", \"our\", or \"us\") collects, uses, and protects your information when you use our mobile application ChefEasy (the \"App\"). We are committed to protecting your privacy and complying with applicable data protection laws, including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA), where applicable.",

    pol_h_intro: "Introduction",
    pol_intro: "ChefEasy is a cooking app for Android, iPhone and iPad: 44 Vietnamese, Chinese, Japanese and Korean dishes, with a guided cooking mode that puts a timer on every task. The recipes ship inside the app and run on your own device. There are no accounts, no user profiles, and no comments or chat.",

    pol_h_short: "The short version",
    pol_short_1: "<strong>We run no servers and we receive no data about you.</strong> Your favourites, viewing history, language and other settings are written to the App's own storage on your device and never leave it.",
    pol_short_2: "<strong>The free tier carries ads</strong> served by Google AdMob. AdMob may read your device's advertising identifier in order to select and measure those ads. A ChefEasy Pro subscription switches them off entirely.",
    pol_short_3: "<strong>Voice search sends audio away.</strong> Turning speech into text is done by the operating system's recognition service — Google's on Android, Apple's on iPhone and iPad. It happens only after you tap the microphone button. We never receive, hear or keep that audio.",
    pol_short_4: "<strong>There is no analytics or crash-reporting SDK in the build.</strong> Nothing is measuring what you do in the app.",
    pol_short_5: "<strong>The App asks only for the microphone and speech recognition</strong>, and only when you deliberately press the microphone button. No location, no contacts, no camera, no access to your files.",

    pol_h_defs: "Interpretation and Definitions",
    pol_h_interp: "Interpretation",
    pol_interp: "The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.",
    pol_h_defs2: "Definitions",
    pol_defs_lead: "For the purposes of this Privacy Policy:",
    pol_d_app: "<strong>Application</strong> (or the <strong>App</strong>) refers to ChefEasy, the software program provided by the Company.",
    pol_d_company: "<strong>Company</strong> (referred to as either \"the Company\", \"We\", \"Us\" or \"Our\") refers to tdson, the developer of the Application.",
    pol_d_country: "<strong>Country</strong> refers to: Vietnam.",
    pol_d_device: "<strong>Device</strong> means any device that can access the Service, such as a phone or a tablet.",
    pol_d_personal: "<strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.",
    pol_d_provider: "<strong>Service Provider</strong> means any party that processes data on behalf of the Company. For this App those are Google — AdMob advertising, Google Play billing, and speech recognition on Android — and Apple, for App Store billing and speech recognition on iOS.",
    pol_d_purchase: "<strong>In-App Purchase</strong> means the ChefEasy Pro subscription, monthly or yearly, transacted through Google Play or the App Store depending on where the App was installed from.",
    pol_d_you: "<strong>You</strong> means the individual accessing or using the Service.",

    pol_h_collect: "What the App Stores",
    pol_collect_lead: "The App keeps the following, all of it in its own storage on your device and none of it sent to us:",
    pol_c_1: "Your list of favourite dishes and the recipes you viewed recently.",
    pol_c_2: "Your chosen language, light or dark theme, and whether the screen should stay awake while cooking.",
    pol_c_3: "Your Pro subscription state, so the App knows whether to show ads.",
    pol_c_4: "The recipe data bundle, unpacked on first launch.",
    pol_collect_none: "The App never asks for your name, email address, phone number or any other identifying information, because it has nowhere to send them.",

    pol_h_voice: "Microphone and Speech Recognition",
    pol_voice_1: "The App has a microphone button for finding a dish and for commands while cooking. The microphone turns on only after you tap that button, and turns off as soon as you stop speaking. The App does not listen in the background and does not record.",
    pol_voice_2: "Turning speech into text does not happen on your device: the audio is passed to the operating system's speech recognition service — Google's on Android, Apple's on iPhone and iPad — and only the resulting text comes back to the App. How Google and Apple handle that audio is governed by their own privacy policies.",
    pol_voice_3: "We never receive the audio, cannot hear its contents, and do not keep the returned text once the search is done. If you would rather not use it, simply never press the microphone button — no other feature of the App depends on it.",

    pol_h_ads: "Advertising",
    pol_ads_1: "The free tier shows advertising supplied by Google AdMob, as a full-screen ad when the App opens. Nothing interrupts you while you are cooking.",
    pol_ads_2: "To select and measure those ads, AdMob may read your device's advertising identifier along with basic technical information such as device model and operating system version. We supply AdMob with no information about you, because we hold none.",
    pol_ads_3: "You can reset or delete the advertising identifier in your operating system's settings. A ChefEasy Pro subscription removes advertising entirely, and the App then does not load the ad SDK at all.",

    pol_h_purchases: "Purchases and Subscriptions",
    pol_pur_1: "ChefEasy Pro is an auto-renewing subscription, monthly or yearly, that removes advertising and unlocks the Chinese, Japanese and Korean dishes.",
    pol_pur_2: "The transaction is handled entirely by Google Play or the App Store, depending on where the App was installed from. We never see, receive or store your card or payment details. The App learns only the final outcome: whether a subscription is active.",
    pol_pur_3: "Cancel in Google Play → Payments & subscriptions, or in Settings → your name → Subscriptions on iPhone and iPad.",

    pol_h_perm: "Permissions and Network Access",
    pol_perm_1: "On Android the App declares the record-audio permission, for the microphone button, together with internet and network-state access. On iPhone and iPad the App requests microphone and speech recognition permission, and requests them only when you first tap the microphone button.",
    pol_perm_2: "The App requests no location, contacts, calendar, camera, photo library or file access permission.",
    pol_perm_3: "The network connection is used for exactly three things: loading ads on the free tier, processing payment when you subscribe to Pro, and sending audio to the speech recognition service when you use the microphone button. Reading and cooking a recipe works normally with no connection at all.",

    pol_h_storage: "Data Storage and Deletion",
    pol_storage_1: "Everything the App stores lives in its own private area on your device. We hold no copy anywhere else, because we operate no servers.",
    pol_storage_2: "Uninstalling the App deletes all of it. You can also clear the App's data from your operating system's settings without uninstalling.",

    pol_h_children: "Children's Privacy",
    pol_children: "The App is not directed at children under 13 and does not knowingly collect personal data from children. It does contain advertising and in-app purchases, so on a shared device we recommend enabling a purchase PIN on Google Play, or Screen Time restrictions on an Apple device.",

    pol_h_rights: "Your Rights",
    pol_rights: "The GDPR and the CCPA give you rights to access, correct, delete and port the personal data an organisation holds about you. For this App there is almost nothing to exercise them against: we hold no personal data about you. The only data that exists is on your device, and you can delete it at any time by uninstalling the App. For data processed by Google or Apple — advertising, payment, speech recognition — please exercise your rights with them directly.",

    pol_h_security: "Security",
    pol_security: "Because the App transmits no personal data, there is no transfer to intercept and no database of ours to breach. The recipe bundle shipped with the App is encrypted and is decrypted only on your device. That said, no method of electronic storage is completely secure.",

    pol_h_changes: "Changes to this Privacy Policy",
    pol_changes: "When this policy changes, the new version is posted on this page with a new date at the top. If an update to the App changes how data is handled, we will update this page before that update ships.",

    pol_h_contact: "Contact Us",
    pol_contact: "If you have any question about this Privacy Policy, please get in touch:",
    pol_back_app: "Back to ChefEasy"
};

const LANGS = [
    { code: 'vi', label: 'Tiếng Việt' },
    { code: 'en', label: 'English' }
];
const DEFAULT_LANG = 'vi';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;

    // Each page names its own screenshot folder, so the Android page and the
    // iOS page can share this file and still show their own captures.
    const SHOT_DIR = document.body.dataset.shotDir || '/assets/apps/chefeasy/android/';

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

    // A choice made on these pages wins, then whatever the visitor picked on
    // the landing page, then the browser's own preference.
    const detectLang = () => {
        // The URL wins: /vi/… is the Vietnamese page whatever the browser
        // or a previous visit would have preferred.
        const fromUrl = window.LangUrl && window.LangUrl.fromPath(supported);
        if (fromUrl) return fromUrl;
        const own = localStorage.getItem('chefeasy-lang');
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
    // The iOS page and the policy carry their own title/description keys, so
    // each page says which pair it wants rather than the script guessing.
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
        localStorage.setItem('chefeasy-lang', lang);
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
    const tabs = Array.from(document.querySelectorAll('.ce-gal-tab'));
    const galImg = document.getElementById('gal-img');
    const galTitle = document.getElementById('gal-title');
    const galCap = document.getElementById('gal-cap');

    // Keep the caption in step with both the selected shot and the current
    // language, so switching either one is enough.
    function paintGallery() {
        const active = tabs.find(tab => tab.classList.contains('is-active'));
        if (!active || !galImg) return;
        const dict = i18n[currentLang] || i18n[DEFAULT_LANG];
        const fallback = i18n[DEFAULT_LANG];
        const key = active.dataset.key;
        galImg.src = SHOT_DIR + active.dataset.shot + '.webp';
        galImg.alt = 'ChefEasy — ' + (dict[key + '_title'] || fallback[key + '_title'] || '');
        if (galTitle) galTitle.textContent = dict[key + '_title'] || fallback[key + '_title'] || '';
        if (galCap) galCap.textContent = dict[key + '_cap'] || fallback[key + '_cap'] || '';
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
