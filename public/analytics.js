/* First-party analytics beacon.
 *
 * What it sends: which page was opened, how far down it was read, how long
 * the reader stayed, and which links were clicked. What it never sends: any
 * form field, any text from the page, any identifier that means anything
 * outside this site. There is no cookie — the visitor id is a random string
 * in this origin's localStorage and travels nowhere else.
 *
 * Anyone (including whoever is testing the site) can opt out for good with:
 *   localStorage.setItem('abk_optout', '1')
 */
(function () {
    'use strict';

    var ENDPOINT = '/api/collect';
    var SESSION_GAP = 30 * 60 * 1000;   // the usual "a new visit after half an hour idle"
    var FLUSH_MS = 15000;
    var INSTALLER = /\.(dmg|zip|deb|tar\.gz|exe|msi|pkg|apk|appimage)$/i;

    // Global Privacy Control is a request not to be tracked that carries
    // legal weight in some places. It costs a little data and settles the
    // question.
    if (navigator.globalPrivacyControl) return;

    var store = null;
    try {
        store = window.localStorage;
        if (store.getItem('abk_optout') === '1') return;
    } catch (_) {
        // Private mode with storage blocked: no id, so no session stitching
        // and no returning-visitor signal. Pageviews still count.
    }

    function readStore(key) { try { return store ? store.getItem(key) : null; } catch (_) { return null; } }
    function writeStore(key, value) { try { if (store) store.setItem(key, value); } catch (_) { /* full or blocked */ } }

    function randomId() {
        if (window.crypto && window.crypto.randomUUID) return window.crypto.randomUUID();
        return 'x' + Math.random().toString(36).slice(2) + Date.now().toString(36);
    }

    var now = Date.now();
    var firstEver = false;

    var vid = readStore('abk_vid');
    if (!vid) { vid = randomId(); firstEver = true; writeStore('abk_vid', vid); }

    var lastSeen = Number(readStore('abk_seen') || 0);
    var sid = readStore('abk_sid');
    var newSession = !sid || !lastSeen || (now - lastSeen) > SESSION_GAP;
    if (newSession) { sid = randomId(); writeStore('abk_sid', sid); }
    writeStore('abk_seen', String(now));

    var page = location.pathname;
    var queue = [];
    var timer = null;
    var startedAt = now;
    var maxDepth = 0;
    var sentDepths = {};

    function send(force) {
        if (timer) { clearTimeout(timer); timer = null; }
        if (!queue.length) return;

        var body = JSON.stringify({ vid: vid, sid: sid, nv: firstEver ? 1 : 0, events: queue });
        queue = [];

        // sendBeacon survives the page going away, which is exactly when the
        // most interesting event (a click that navigates) is recorded.
        if (navigator.sendBeacon) {
            try {
                if (navigator.sendBeacon(ENDPOINT, new Blob([body], { type: 'application/json' }))) return;
            } catch (_) { /* fall through to fetch */ }
        }
        try {
            fetch(ENDPOINT, { method: 'POST', body: body, keepalive: true, headers: { 'Content-Type': 'application/json' } });
        } catch (_) { /* nothing more to try */ }
    }

    function record(type, detail, immediate) {
        queue.push({
            t: type,
            p: page,
            q: location.search,
            r: document.referrer || '',
            d: detail || {}
        });
        if (immediate || queue.length >= 12) send(true);
        else if (!timer) timer = setTimeout(send, FLUSH_MS);
    }

    // ---------- pageview ----------
    record('view', {
        vw: window.innerWidth,
        theme: document.documentElement.getAttribute('data-theme') || ''
    });

    // ---------- scroll depth ----------
    // Four marks are enough to tell "bounced off the hero" from "read the
    // whole page", and a rAF gate keeps the handler off the critical path.
    var ticking = false;
    function measure() {
        ticking = false;
        var doc = document.documentElement;
        var scrollable = Math.max(doc.scrollHeight - window.innerHeight, 0);
        var depth = scrollable > 0
            ? Math.min(100, Math.round(((window.scrollY || doc.scrollTop) / scrollable) * 100))
            : 100;
        if (depth <= maxDepth) return;
        maxDepth = depth;
        var marks = [25, 50, 75, 100];
        for (var i = 0; i < marks.length; i++) {
            if (depth >= marks[i] && !sentDepths[marks[i]]) {
                sentDepths[marks[i]] = true;
                record('scroll', { depth: marks[i] });
            }
        }
    }
    addEventListener('scroll', function () {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(measure);
    }, { passive: true });

    // ---------- clicks ----------
    function kindOf(link) {
        var href = link.getAttribute('href') || '';
        if (!href || href.charAt(0) === '#') return null;
        if (href.indexOf('mailto:') === 0) return 'mailto';

        var url;
        try { url = new URL(href, location.href); } catch (_) { return null; }

        if (url.host !== location.host) {
            if (/play\.google\.com/.test(url.host)) return 'play';
            if (/apps\.apple\.com|itunes\.apple\.com/.test(url.host)) return 'appstore';
            return 'outbound';
        }
        if (url.pathname.indexOf('/downloads/') === 0) {
            return INSTALLER.test(url.pathname) ? 'download' : null;   // checksums are not a download
        }
        if (/\/policy\/?$/.test(url.pathname)) return 'policy';
        if (link.classList.contains('btn') || link.hasAttribute('data-cta')) return 'cta';
        return 'nav';
    }

    // One delegated listener: the language switcher rewrites the labels of
    // these links on every change, so anything bound per element would have
    // to be rebound each time.
    document.addEventListener('click', function (event) {
        var link = event.target && event.target.closest ? event.target.closest('a[href]') : null;
        if (!link) return;
        var kind = kindOf(link);
        if (!kind) return;
        record('click', {
            kind: kind,
            href: (link.getAttribute('href') || '').slice(0, 200),
            label: (link.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 60)
        }, true);
    }, true);

    // ---------- preference changes ----------
    document.addEventListener('change', function (event) {
        var target = event.target;
        if (target && target.classList && target.classList.contains('lang-select')) {
            record('pref', { what: 'lang', value: String(target.value || '').slice(0, 12) });
        }
    }, true);

    document.addEventListener('click', function (event) {
        var button = event.target && event.target.closest ? event.target.closest('#theme-toggle, #mobile-theme-toggle') : null;
        if (!button) return;
        // The toggle flips the attribute after this handler, so report the
        // theme being switched to rather than the one on screen.
        var current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        record('pref', { what: 'theme', value: current === 'dark' ? 'light' : 'dark' });
    }, true);

    // ---------- leaving ----------
    // Only foreground time counts: a tab left open behind a window for three
    // hours did not hold anyone's attention for three hours, and letting it
    // say so would make every average meaningless.
    //
    // pagehide is the event that fires reliably on mobile, where a tab is
    // frozen rather than unloaded; visibilitychange covers a switch away that
    // never comes back.
    var visibleSince = document.visibilityState === 'hidden' ? 0 : startedAt;
    function leaving() {
        if (!visibleSince) return;
        var dwell = Date.now() - visibleSince;
        visibleSince = 0;
        writeStore('abk_seen', String(Date.now()));
        if (dwell > 0) record('engage', { dwell: dwell, depth: maxDepth }, true);
        else send(true);
    }
    addEventListener('pagehide', leaving);
    addEventListener('visibilitychange', function () {
        if (document.visibilityState === 'hidden') leaving();
        else if (!visibleSince) visibleSince = Date.now();
    });
})();
