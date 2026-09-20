/* Google Ads conversion tracking for the Novaryn landing page.
 *
 * The Google tag in the <head> only reports visits, and the page-view
 * conversion is fired inline beside it. This file covers the other action:
 * the moment a visitor does something that means they are interested.
 *
 * Google Ads calls that action "Gửi biểu mẫu khách hàng tiềm năng" (lead form
 * submission), but this page has no form — the two things a visitor can do
 * are head for the Play listing or write to us. Both are counted as the lead,
 * which is what the campaign is paying for. If those two ever need telling
 * apart, create a second conversion action in Google Ads and give it its own
 * entry below.
 *
 * A label is the part after the slash in "AW-18444819482/AbC-D_efGhIjKlMn".
 * Nothing is sent while a label is empty. */
(function () {
    'use strict';

    var CONVERSION_ID = 'AW-18444819482';

    var LABELS = {
        // Clicking through to the Google Play listing, or writing to us.
        lead: 'FwiOCNO4t_4cEJq4lttE'
    };

    // One conversion per visit per kind. The buttons are repeated in the hero
    // and the closing section, and a visitor who taps back from Play and taps
    // again is still one lead.
    var sent = {};

    function send(kind) {
        var label = LABELS[kind];
        if (!label || sent[kind] || typeof window.gtag !== 'function') return;
        sent[kind] = true;
        window.gtag('event', 'conversion', {
            send_to: CONVERSION_ID + '/' + label
        });
    }

    function kindOf(link) {
        var href = link.getAttribute('href') || '';
        if (href.indexOf('play.google.com') !== -1) return 'lead';
        if (href.indexOf('mailto:') === 0) return 'lead';
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
