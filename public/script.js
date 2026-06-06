const i18n = {
    vi: {
        nav_about: "Về chúng tôi",
        nav_products: "Sản phẩm",
        nav_get_started: "Bắt đầu",
        hero_badge: "Nâng Tầm Quy Trình Làm Việc",
        hero_title: "Hệ Sinh Thái <span class='gradient-text'>AI Tương Lai</span>",
        hero_subtitle: "Khám phá các công cụ mạnh mẽ được thiết kế để tự động hóa công việc, điều phối các trợ lý AI và nâng cao năng suất của bạn lên những tầm cao mới.",
        btn_explore: "Khám phá Sản phẩm",
        btn_try_itask: "Thử nghiệm iTask",
        hero_stat: "Năng suất",
        products_title: "Giải Pháp <span class='gradient-text'>Nổi Bật</span>",
        products_subtitle: "Chọn công cụ phù hợp với nhu cầu cụ thể của bạn. Từ quản lý công việc thông minh đến điều phối hệ thống đa AI.",
        tag_task: "Quản lý Công việc",
        itask_desc: "Tối ưu hóa quy trình với hệ thống quản lý công việc thông minh. Tổ chức, ưu tiên và chinh phục mục tiêu với sự hỗ trợ của AI.",
        feat_prioritization: "Ưu tiên thông minh",
        feat_collaboration: "Cộng tác nhóm",
        action_plans: "Xem Gói Dịch Vụ",
        tag_orchestration: "Điều phối AI",
        crew_desc: "Triển khai và quản lý các AI tự động. Xây dựng đội ngũ tác tử AI tùy chỉnh để tự động hóa các quy trình phức tạp.",
        feat_multiagent: "Hệ thống Đa AI",
        feat_roles: "Vai trò tùy chỉnh",
        action_console: "Mở Bảng Điều Khiển",
        footer_desc: "Phát triển các giải pháp AI thế hệ tiếp theo cho nhà phát triển và doanh nghiệp.",
        footer_prod: "Sản phẩm",
        footer_comp: "Công ty",
        footer_contact: "Liên hệ",
        footer_privacy: "Chính sách Bảo mật"
    },
    en: {
        nav_about: "About Us",
        nav_products: "Products",
        nav_get_started: "Get Started",
        hero_badge: "Empowering Your Workflow",
        hero_title: "Next-Generation <span class='gradient-text'>AI Ecosystem</span>",
        hero_subtitle: "Discover powerful tools designed to automate your tasks, orchestrate AI agents, and elevate your productivity to new heights.",
        btn_explore: "Explore Products",
        btn_try_itask: "Try iTask",
        hero_stat: "Productivity",
        products_title: "Our <span class='gradient-text'>Flagship Solutions</span>",
        products_subtitle: "Choose the right tool for your specific needs. From intelligent task management to multi-agent orchestration.",
        tag_task: "Task Management",
        itask_desc: "Streamline your workflow with intelligent task management. Organize, prioritize, and conquer your goals with AI assistance.",
        feat_prioritization: "Smart Prioritization",
        feat_collaboration: "Team Collaboration",
        action_plans: "View Plans",
        tag_orchestration: "AI Orchestration",
        crew_desc: "Deploy and manage autonomous AI agents. Build custom teams of agents to automate complex multi-step workflows seamlessly.",
        feat_multiagent: "Multi-Agent System",
        feat_roles: "Custom Roles",
        action_console: "Launch Console",
        footer_desc: "Empowering the next generation of AI solutions for developers and businesses.",
        footer_prod: "Products",
        footer_comp: "Company",
        footer_contact: "Contact",
        footer_privacy: "Privacy Policy"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // --------------------------------------------------------
    // Theme Toggle Logic
    // --------------------------------------------------------
    const rootElement = document.documentElement;
    const themeToggles = [document.getElementById('theme-toggle'), document.getElementById('mobile-theme-toggle')];
    
    // Check local storage or system preference
    let currentTheme = localStorage.getItem('theme') || 
        (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    
    rootElement.setAttribute('data-theme', currentTheme);

    themeToggles.forEach(toggle => {
        if (!toggle) return;
        toggle.addEventListener('click', () => {
            currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
            rootElement.setAttribute('data-theme', currentTheme);
            localStorage.setItem('theme', currentTheme);
        });
    });

    // --------------------------------------------------------
    // Language Toggle Logic
    // --------------------------------------------------------
    const langToggles = [document.getElementById('lang-toggle'), document.getElementById('mobile-lang-toggle')];
    let currentLang = localStorage.getItem('lang') || 'vi';
    
    const updateLanguage = (lang) => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (i18n[lang] && i18n[lang][key]) {
                el.innerHTML = i18n[lang][key];
            }
        });
        
        // Update button text to show the OTHER language (what happens if you click)
        const nextLangText = lang === 'vi' ? 'EN' : 'VI';
        langToggles.forEach(toggle => {
            if (toggle) toggle.textContent = nextLangText;
        });
        
        document.documentElement.lang = lang;
    };

    // Initial language setup
    updateLanguage(currentLang);

    langToggles.forEach(toggle => {
        if (!toggle) return;
        toggle.addEventListener('click', () => {
            currentLang = currentLang === 'vi' ? 'en' : 'vi';
            localStorage.setItem('lang', currentLang);
            updateLanguage(currentLang);
        });
    });

    // --------------------------------------------------------
    // UI Interactions
    // --------------------------------------------------------
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        const isLight = rootElement.getAttribute('data-theme') === 'light';
        if (window.scrollY > 50) {
            navbar.style.background = isLight ? 'rgba(255, 255, 255, 0.9)' : 'rgba(11, 15, 25, 0.9)';
            navbar.style.boxShadow = isLight ? '0 4px 30px rgba(0, 0, 0, 0.05)' : '0 4px 30px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = isLight ? 'rgba(255, 255, 255, 0.7)' : 'rgba(17, 24, 39, 0.7)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Mobile menu toggle
    const mobileBtn = document.getElementById('mobile-btn');
    const navLinks = document.getElementById('nav-links');
    
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                const isLight = rootElement.getAttribute('data-theme') === 'light';
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = isLight ? '#f8fafc' : '#0b0f19';
                navLinks.style.padding = '1rem 0';
                navLinks.style.borderBottom = `1px solid ${isLight ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)'}`;
            }
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (window.innerWidth <= 768 && navLinks.style.display === 'flex') {
                    navLinks.style.display = 'none';
                }
                
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add mouse move effect to product cards
    const cards = document.querySelectorAll('.product-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});
