/* The language a page is in now lives in its URL: /bksafe is English,
 * /vi/bksafe is the Vietnamese build of the same page. Both are real,
 * pre-rendered files (see tools/build-i18n-pages.js), so a crawler and a
 * reader who arrives cold both get the right language with no JavaScript.
 *
 * This file gives the per-page scripts the two things they need to keep the
 * picker honest: read the language out of the path, and work out where the
 * picker should send someone who chooses another one.
 */
(function () {
    'use strict';

    function fromPath(supported) {
        var seg = window.location.pathname.split('/')[1];
        return supported.indexOf(seg) !== -1 ? seg : null;
    }

    // Strip whatever language prefix is on the current path, then put the
    // requested one back. The default language has no prefix at all.
    function hrefFor(lang, defaultLang, supported) {
        var parts = window.location.pathname.split('/').filter(Boolean);
        if (parts.length && supported.indexOf(parts[0]) !== -1) parts.shift();
        var rest = parts.join('/');
        var prefix = lang === defaultLang ? '' : '/' + lang;
        return (prefix + '/' + rest).replace(/\/+$/, '') + (rest ? '' : '/')
            + window.location.search + window.location.hash;
    }

    window.LangUrl = { fromPath: fromPath, hrefFor: hrefFor };
})();
