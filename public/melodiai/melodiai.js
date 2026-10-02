/* =========================================================
   MelodiAI — product page. Same runtime as the other product
   pages on the site; translations live in ./i18n/<lang>.js.
   ========================================================= */
const i18n = {
    en: {
        page_title: "MelodiAI — turn your lyrics into a finished song | AIBachKhoa",
        meta_desc: "Write the lyrics, describe the style, and MelodiAI makes the whole song: vocals, band and arrangement, with the sheet music. Remix any recording in a new style. 5 free credits.",
        skip_link: "Skip to content",
        nav_home: "Home",
        nav_samples: "Listen",
        nav_features: "Features",
        nav_pricing: "Pricing",
        nav_contact: "Contact",
        cta_open: "Open MelodiAI",
        hero_eyebrow: "AI music studio &middot; in your browser",
        hero_title: "Write the words. <em>Hear the song.</em>",
        hero_sub: "MelodiAI turns your lyrics and a few words about the style into a complete song &mdash; vocals, band and arrangement &mdash; and hands you the sheet music with it. Or bring a recording you already have and hear it again in a new style.",
        cta_start: "Start free",
        cta_listen: "Listen to songs made with it",
        badge_free: "5 free credits on sign-up",
        badge_length: "Songs up to 6 minutes",
        badge_inst: "Sung or instrumental",
        badge_sheet: "Sheet music included",
        samples_eyebrow: "Made with MelodiAI",
        samples_title: "Press play.",
        samples_sub: "Every track here came out of MelodiAI from a one-line style description, plus the lyrics where someone sings. They are shortened for this page; nothing else was touched.",
        t_city: "Synth-pop &middot; male vocal &middot; English",
        t_ballad: "Acoustic ballad &middot; Vietnamese lyrics",
        t_pop: "Acoustic pop &middot; female vocal",
        t_cinematic: "Instrumental &middot; piano and strings",
        t_lofi: "Instrumental &middot; lofi hip hop",
        remix_eyebrow: "Remix &middot; before and after",
        remix_pair_title: "Same tune, new style.",
        remix_pair_sub: "A late-night jazz track, put through Remix with one line: &ldquo;rock&rdquo;. The melody stays; everything around it changes.",
        tag_before: "Before",
        t_jazz: "Smooth jazz &middot; saxophone and Rhodes",
        tag_after: "After",
        t_rock: "Rock remix &middot; guitars and drums",
        f1_eyebrow: "Create",
        f1_title: "From lyrics to a finished song.",
        f1_sub: "Describe the sound in your own words &mdash; genre, voice, instruments, mood, tempo &mdash; paste the lyrics with [Verse] and [Chorus] tags, and press create. A few minutes later you have a mixed song with vocals and a full band.",
        f1_l1: "Lyrics in Vietnamese, English and many other languages",
        f1_l2: "Male, female or duet vocals &mdash; or an instrumental of 1 to 5 minutes",
        f1_l3: "Style ideas and templates to start from",
        f2_eyebrow: "Remix",
        f2_title: "Your recording, in a new style.",
        f2_sub: "Upload a recording or pick a song you made. MelodiAI writes down its melody, chords and sections, fills in the lyrics for you to check, and plays it back as jazz, rock, a piano piece &mdash; whatever you describe.",
        f2_l1: "Keep the original chords, or let it write new harmony",
        f2_l2: "Sung or instrumental, with a new voice of your choice",
        f2_l3: "MP3, WAV, FLAC or OGG, from 10 seconds to 6 minutes",
        f3_eyebrow: "Sheet music",
        f3_title: "Every song comes with its score.",
        f3_sub: "See the melody, chords and lyrics on the staff, follow along on a piano or guitar view, swap the instruments and play it back, then take it to your own music software.",
        f3_l1: "Print-ready PDF, MusicXML and MIDI",
        f3_l2: "Render the score with real instrument sounds",
        f3_l3: "Lossless FLAC download of every song",
        how_eyebrow: "How it works",
        how_title: "Three steps, no studio.",
        how1_t: "Describe the sound",
        how1_d: "A line about genre, voice, instruments and mood. Not sure? Start from one of the style ideas.",
        how2_t: "Add the words",
        how2_d: "Paste your lyrics with section tags, choose instrumental, or upload a recording to remix.",
        how3_t: "Listen and take it with you",
        how3_d: "Play it in your library, build playlists, and download the audio, the sheet music and the MIDI.",
        price_title: "One credit, one minute of music.",
        price_sub: "You pay only for the length of the songs you make. Sheet music, MIDI, playlists and downloads are included with every song.",
        price1_t: "5 credits free",
        price1_d: "Enough for your first songs as soon as you sign up, with no card.",
        price2_t: "Pay for what you hear",
        price2_d: "A 3-minute song uses 3 credits. Analysing a recording for Remix is free.",
        price3_t: "Top up any time",
        price3_d: "Credit packs by PayPal, whenever you need more.",
        price4_t: "Honest about speed",
        price4_d: "We are a young startup, so a song takes a few minutes and there can be a short queue at busy times.",
        know_eyebrow: "Good to know",
        know_title: "Made for people who write songs.",
        know1_t: "Six interface languages",
        know1_d: "English, Chinese, Japanese, Korean, French and Spanish, and your songs can be in many more.",
        know2_t: "Your library, organised",
        know2_d: "Titles, tags, favourites, cover art and playlists, with a player that follows you around the app.",
        know3_t: "Only what you own",
        know3_d: "Upload recordings you made or have the rights to use. Uploads are analysed for your remix and stay in your account.",
        cta_title: "Make your first song today.",
        cta_sub: "Questions, a bug, a partnership &mdash; or you would like to invest in what we are building? Write to us &mdash; usually answered the same day.",
        cta_mail: "Email us",
        footer_tagline: "Building practical AI tools for developers and businesses.",
        footer_prod: "Products",
        footer_comp: "Company",
        footer_about: "About",
        footer_services: "Services",
        footer_contact: "Contact",
        footer_rights: "All rights reserved.",
        alt_studio: "The MelodiAI studio: style, lyrics and song structure on the left, songs in progress on the right",
        alt_create: "Writing a song in MelodiAI",
        alt_remix: "Remixing an uploaded recording in MelodiAI",
        alt_score: "Sheet music with a live piano view in MelodiAI",
        aria_lang: "Change language",
        aria_theme: "Toggle theme",
        aria_menu: "Open menu",
        aria_play: "Play",
        footer_this: "This product",
        aria_pause: "Pause"
    }
};

const LANGS = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'zh', label: '中文' },
    { code: 'hi', label: 'हिन्दी' },
    { code: 'ar', label: 'العربية' },
    { code: 'pt', label: 'Português' },
    { code: 'fr', label: 'Français' },
    { code: 'de', label: 'Deutsch' },
    { code: 'ja', label: '日本語' },
    { code: 'ko', label: '한국어' },
    { code: 'ru', label: 'Русский' }
];
const DEFAULT_LANG = 'en';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;

    // ---------- Theme ----------
    const saved = (() => { try { return localStorage.getItem('theme'); } catch (e) { return null; } })();
    if (saved === 'dark' || saved === 'light') root.setAttribute('data-theme', saved);
    const themeToggles = [document.getElementById('theme-toggle'), document.getElementById('mobile-theme-toggle')].filter(Boolean);
    themeToggles.forEach(btn => btn.addEventListener('click', () => {
        const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        try { localStorage.setItem('theme', next); } catch (e) { /* storage blocked */ }
    }));

    // ---------- Language ----------
    const langSelects = [document.getElementById('lang-select'), document.getElementById('mobile-lang-select')].filter(Boolean);
    const supported = LANGS.map(l => l.code);

    // The URL names the language; see LangUrl.detect in /lang-url.js.
    const detectLang = () => window.LangUrl ? window.LangUrl.detect(supported, DEFAULT_LANG) : DEFAULT_LANG;

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
        document.querySelectorAll('[data-i18n-alt]').forEach(el => {
            const value = t(lang, el.getAttribute('data-i18n-alt'));
            if (value) el.setAttribute('alt', value);
        });
        document.title = t(lang, titleKey);
        if (metaDesc) metaDesc.setAttribute('content', t(lang, descKey));
        root.lang = lang;
        langSelects.forEach(sel => { sel.value = lang; });
    };

    langSelects.forEach(sel => sel.addEventListener('change', () => {
        const lang = sel.value;
        localStorage.setItem('lang', lang);
        // Each language is its own page now, so go there rather
        // than rewriting this one and leaving the URL lying.
        if (window.LangUrl) {
            window.location.href = window.LangUrl.hrefFor(lang, DEFAULT_LANG, supported);
            return;
        }
        currentLang = lang;
        updateLanguage(currentLang);
    }));

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
});

// ---------- Sample players: one track at a time, click the bar to seek ----------
document.addEventListener('DOMContentLoaded', () => {
    const audio = new Audio();
    audio.preload = 'none';
    let current = null;
    const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
    const label = (key) => {
        const lang = document.documentElement.lang || DEFAULT_LANG;
        return (i18n[lang] && i18n[lang][key]) || i18n[DEFAULT_LANG][key];
    };
    const setState = (track, playing) => {
        track.classList.toggle('is-playing', playing);
        track.querySelector('.mx-play').setAttribute('aria-label', label(playing ? 'aria_pause' : 'aria_play'));
    };
    document.querySelectorAll('.mx-track').forEach((track) => {
        const time = track.querySelector('.mx-time');
        track.dataset.total = time.textContent;
        track.querySelector('.mx-play').addEventListener('click', () => {
            if (current === track) {
                if (audio.paused) audio.play(); else audio.pause();
                return;
            }
            if (current) { setState(current, false); current.querySelector('.mx-bar i').style.width = '0'; current.querySelector('.mx-time').textContent = current.dataset.total; }
            current = track;
            audio.src = track.dataset.src;
            audio.play().catch(() => setState(track, false));
        });
        track.querySelector('.mx-bar').addEventListener('click', (e) => {
            if (current !== track || !audio.duration) return;
            const r = e.currentTarget.getBoundingClientRect();
            audio.currentTime = ((e.clientX - r.left) / r.width) * audio.duration;
        });
    });
    audio.addEventListener('play', () => current && setState(current, true));
    audio.addEventListener('pause', () => current && setState(current, false));
    audio.addEventListener('timeupdate', () => {
        if (!current || !audio.duration) return;
        current.querySelector('.mx-bar i').style.width = `${(audio.currentTime / audio.duration) * 100}%`;
        current.querySelector('.mx-time').textContent = fmt(audio.currentTime);
    });
    audio.addEventListener('ended', () => {
        if (!current) return;
        const all = [...document.querySelectorAll('.mx-track')];
        const next = all[all.indexOf(current) + 1];
        setState(current, false);
        current.querySelector('.mx-time').textContent = current.dataset.total;
        current.querySelector('.mx-bar i').style.width = '0';
        current = null;
        if (next) next.querySelector('.mx-play').click();
    });
});
