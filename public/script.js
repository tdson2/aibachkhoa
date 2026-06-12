const i18n = {
    vi: {
        skip_link: "Bỏ qua đến nội dung",
        nav_about: "Về chúng tôi",
        nav_products: "Sản phẩm",
        cta_try: "Dùng thử iTask",
        hero_eyebrow: "Nền tảng AI cho doanh nghiệp",
        hero_title: "Công cụ AI cho công việc và <em>tự động hóa</em>.",
        hero_subtitle: "iTask quản lý công việc. CrewAI điều phối các tác tử AI tự động hóa những quy trình phức tạp.",
        btn_explore: "Khám phá sản phẩm",
        products_title: "Chọn công cụ phù hợp với bạn.",
        products_sub: "Ba sản phẩm độc lập, mỗi sản phẩm giải quyết một nhu cầu cụ thể.",
        tag_task: "Quản lý công việc",
        itask_desc: "Tổ chức, ưu tiên và theo dõi công việc trong một nơi duy nhất. AI gợi ý thứ tự ưu tiên và tóm tắt tiến độ cho cả nhóm.",
        feat_prioritization: "Ưu tiên thông minh theo ngữ cảnh",
        feat_collaboration: "Cộng tác nhóm theo thời gian thực",
        action_plans: "Xem gói dịch vụ",
        tag_orchestration: "Điều phối tác tử AI",
        crew_desc: "Xây dựng đội ngũ tác tử AI với vai trò riêng, giao việc và để chúng phối hợp tự động hóa các quy trình nhiều bước.",
        feat_multiagent: "Hệ thống nhiều tác tử phối hợp",
        feat_roles: "Vai trò và công cụ tùy chỉnh",
        action_console: "Mở bảng điều khiển",
        tag_osint: "Điều tra nguồn mở",
        osint_desc: "Các tác tử AI tự động thu thập và phân tích thông tin từ nguồn mở, rồi tổng hợp thành báo cáo điều tra rõ ràng.",
        action_osint: "Khám phá CrewOSINT",
        cta_title: "Bắt đầu với công cụ phù hợp với đội ngũ của bạn.",
        cta_crew: "Tìm hiểu CrewAI",
        footer_desc: "Xây dựng công cụ AI thực dụng cho nhà phát triển và doanh nghiệp.",
        footer_prod: "Sản phẩm",
        footer_comp: "Công ty",
        footer_contact: "Liên hệ",
        footer_privacy: "Chính sách bảo mật",
        footer_rights: "Mọi quyền được bảo lưu."
    },
    en: {
        skip_link: "Skip to content",
        nav_about: "About",
        nav_products: "Products",
        cta_try: "Try iTask",
        hero_eyebrow: "AI platform for teams",
        hero_title: "AI tools for work and <em>automation</em>.",
        hero_subtitle: "iTask manages your tasks. CrewAI orchestrates autonomous agents that automate complex workflows.",
        btn_explore: "Explore products",
        products_title: "Pick the tool that fits.",
        products_sub: "Three independent products, each built for a specific need.",
        tag_task: "Task management",
        itask_desc: "Organize, prioritize, and track work in one place. AI suggests what to do next and summarizes progress for the whole team.",
        feat_prioritization: "Context-aware smart prioritization",
        feat_collaboration: "Real-time team collaboration",
        action_plans: "View plans",
        tag_orchestration: "AI agent orchestration",
        crew_desc: "Build a team of AI agents with their own roles, assign work, and let them coordinate to automate multi-step processes.",
        feat_multiagent: "Coordinated multi-agent system",
        feat_roles: "Custom roles and tools",
        action_console: "Open console",
        tag_osint: "Open-source intelligence",
        osint_desc: "AI agents automatically gather and analyze open-source information, then compile it into a clear investigation report.",
        action_osint: "Explore CrewOSINT",
        cta_title: "Start with the tool that fits your team.",
        cta_crew: "Explore CrewAI",
        footer_desc: "Building practical AI tools for developers and businesses.",
        footer_prod: "Products",
        footer_comp: "Company",
        footer_contact: "Contact",
        footer_privacy: "Privacy policy",
        footer_rights: "All rights reserved."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;

    // ---------- Theme ----------
    const themeToggles = [document.getElementById('theme-toggle'), document.getElementById('mobile-theme-toggle')];
    let currentTheme = localStorage.getItem('theme') ||
        (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    root.setAttribute('data-theme', currentTheme);

    themeToggles.forEach(t => t && t.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
    }));

    // ---------- Language ----------
    const langToggles = [document.getElementById('lang-toggle'), document.getElementById('mobile-lang-toggle')];
    let currentLang = localStorage.getItem('lang') || 'vi';

    const updateLanguage = (lang) => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (i18n[lang] && i18n[lang][key]) el.innerHTML = i18n[lang][key];
        });
        const next = lang === 'vi' ? 'EN' : 'VI';
        langToggles.forEach(t => { if (t) t.textContent = next; });
        root.lang = lang;
    };
    updateLanguage(currentLang);

    langToggles.forEach(t => t && t.addEventListener('click', () => {
        currentLang = currentLang === 'vi' ? 'en' : 'vi';
        localStorage.setItem('lang', currentLang);
        updateLanguage(currentLang);
    }));

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

    // ---------- Navbar border on scroll (no scroll listener) ----------
    const navbar = document.getElementById('navbar');
    const sentinel = document.createElement('div');
    sentinel.style.cssText = 'position:absolute;top:0;height:1px;width:1px;';
    document.body.prepend(sentinel);
    new IntersectionObserver(([e]) => {
        navbar.classList.toggle('scrolled', !e.isIntersecting);
    }, { threshold: 0 }).observe(sentinel);

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
        }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
        reveals.forEach(el => io.observe(el));
    }
});
