/* Google Ads conversion tracking for the BKSafe landing page.
 *
 * The Google tag itself sits in the <head> of every page and only reports
 * visits. A conversion action needs its own label, which Google Ads hands
 * you when you create the action (Goals -> Conversions -> New conversion
 * action -> Website). Paste that label between the quotes below; the part
 * after the slash is the label, e.g. "AW-18444819482/AbC-D_efGhIjKlMn"
 * means the label is "AbC-D_efGhIjKlMn".
 *
 * Nothing is sent while a label is empty, so the page is safe to ship
 * before the conversion actions exist. */
(function () {
    'use strict';

    var CONVERSION_ID = 'AW-18444819482';

    var LABELS = {
        // Clicking a direct download button (.dmg / .zip / .deb).
        download: '',
        // Clicking through to a Google Play listing.
        play: ''
    };

    // Checksum files sit next to the installers under /downloads/ and are
    // not a download in the sense that matters for an ad.
    var INSTALLER = /\.(dmg|zip|deb)$/i;

    function send(kind) {
        var label = LABELS[kind];
        if (!label || typeof window.gtag !== 'function') return;
        window.gtag('event', 'conversion', {
            send_to: CONVERSION_ID + '/' + label
        });
    }

    function kindOf(link) {
        var href = link.getAttribute('href') || '';
        if (href.indexOf('play.google.com') !== -1) return 'play';
        if (href.indexOf('/downloads/') === 0 && INSTALLER.test(href)) return 'download';
        return null;
    }

    // One listener on the document: the buttons live in several sections and
    // the language switcher rewrites their labels, so binding per element
    // would have to be redone every time the page re-renders text.
    document.addEventListener('click', function (event) {
        var link = event.target.closest && event.target.closest('a[href]');
        if (!link) return;
        var kind = kindOf(link);
        if (kind) send(kind);
    });
})();
