const SHOT_DIR = '/assets/apps/locallex/android/';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;

    // ---------- Theme ----------
    const themeToggles = [document.getElementById('theme-toggle'), document.getElementById('mobile-theme-toggle')];
    let currentTheme = localStorage.getItem('theme') || 'light';
    root.setAttribute('data-theme', currentTheme);
    themeToggles.filter(Boolean).forEach(btn => btn.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        root.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
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

    // ---------- Screenshot gallery ----------
    const tabs = Array.from(document.querySelectorAll('.ll-gal-tab'));
    const galImg = document.getElementById('gal-img');
    tabs.forEach(tab => tab.addEventListener('click', () => {
        tabs.forEach(other => other.classList.toggle('is-active', other === tab));
        if (galImg) {
            galImg.src = SHOT_DIR + tab.dataset.shot + '.webp';
            galImg.alt = 'LocalLex — ' + tab.textContent.trim();
        }
    }));

    // ---------- Copy the SHA-256 ----------
    document.querySelectorAll('.ll-copy').forEach(btn => {
        const value = btn.closest('.ll-sha')?.querySelector('.ll-sha-value');
        if (!value) return;
        btn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(value.textContent.trim());
                const truoc = btn.textContent;
                btn.textContent = 'Đã sao chép';
                setTimeout(() => { btn.textContent = truoc; }, 1600);
            } catch {
                // Clipboard refused (no permission, or a non-secure origin):
                // select the hash so the reader can copy it by hand.
                const range = document.createRange();
                range.selectNodeContents(value);
                const sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
            }
        });
    });

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
