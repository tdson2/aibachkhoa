/* =========================================================
   OriMessenger — product pages (main, Android, desktop, iOS)
   and privacy policy. Same runtime as the other product pages
   on the site; translations live in ./i18n/<lang>.js.
   ========================================================= */
const i18n = {
    en: {
        page_title: "OriMessenger — chat that works without the Internet | AIBachKhoa",
        meta_desc: "End-to-end encrypted messaging over Bluetooth, Wi-Fi or the Internet. Available for iPhone, Android, Windows, macOS and Linux.",
        android_page_title: "OriMessenger for Android | AIBachKhoa",
        android_meta_desc: "End-to-end encrypted messaging for Android that keeps working over Bluetooth and Wi-Fi when there is no Internet.",
        desktop_page_title: "OriMessenger for Windows, macOS and Linux | AIBachKhoa",
        desktop_meta_desc: "End-to-end encrypted messaging for Windows, macOS and Linux that keeps working over Bluetooth and the local network when there is no Internet.",
        ios_page_title: "OriMessenger for iPhone and iPad | AIBachKhoa",
        ios_meta_desc: "End-to-end encrypted messaging for iPhone and iPad that keeps working over Bluetooth and Wi-Fi when there is no Internet.",
        pol_page_title: "Privacy Policy — OriMessenger | AIBachKhoa",
        pol_meta_desc: "The OriMessenger privacy policy: what the app stores on your device, what the relay server does and does not see, and the three network paths a message can take.",
        aria_lang: "Change language",
        aria_theme: "Toggle theme",
        aria_menu: "Open menu",
        skip_link: "Skip to content",
        nav_home: "Home",
        nav_blog: "Blog",
        nav_get: "Get the app",
        nav_features: "Features",
        nav_privacy: "Privacy",
        nav_download: "Download",
        nav_downloads: "Downloads",
        nav_avail: "Availability",
        nav_back: "Back to product",
        footer_tagline: "Building practical AI tools for developers and businesses.",
        footer_prod: "Products",
        footer_this: "This product",
        footer_comp: "Company",
        footer_policy: "Privacy policy",
        footer_support: "Support",
        footer_about: "About",
        footer_services: "Services",
        footer_contact: "Contact",
        footer_rights: "All rights reserved.",
        hero_eyebrow: "Peer-to-peer messenger &middot; v0.2.1",
        android_eyebrow: "For Android &middot; v0.2.1",
        desktop_eyebrow: "For desktop",
        ios_eyebrow: "For iPhone and iPad &middot; v0.2.1",
        hero_title: "Chat that keeps talking <em>when the Internet stops</em>.",
        hero_sub: "OriMessenger sends your messages over Bluetooth or the same Wi-Fi when the other person is close, and falls back to the Internet only when they are not. Every message is end-to-end encrypted.",
        hero_sub_mobile: "OriMessenger sends your messages over Bluetooth or the same Wi-Fi when the other person is close, and falls back to the Internet only when they are not. Every message is end-to-end encrypted &mdash; there is no account and no phone number.",
        hero_sub_desktop: "OriMessenger sends your messages over Bluetooth or the same local network when the other person is close, and falls back to the Internet only when they are not. Every message is end-to-end encrypted &mdash; there is no account and no phone number.",
        badge_e2e: "End-to-end encrypted",
        badge_nophone: "No phone number required",
        badge_noacct: "No account, no phone number",
        badge_paths: "Bluetooth &middot; Wi-Fi &middot; Internet",
        badge_paths_lan: "Bluetooth &middot; LAN &middot; Internet",
        badge_offline: "Offline-first",
        badge_bg: "Runs in the background",
        badge_tray: "Stays in the tray",
        btn_policy: "Read the privacy policy",
        btn_apk: "Download the APK",
        btn_see_dl: "See the downloads",
        feat_eyebrow: "Why OriMessenger",
        feat_title: "Three ways to reach someone, in this order.",
        feat_sub: "Most messengers assume the Internet is always there. OriMessenger does not. When the person you are talking to is next to you, the app chooses the shortest path automatically.",
        feat1_h: "1. Bluetooth &mdash; when you are within a few metres",
        feat1_p: "The app finds other Ori users nearby over Bluetooth. When you are within roughly 10 to 30 metres, messages go directly from device to device, without touching a router or a cell tower. No Internet needed at all.",
        feat2_h: "2. Wi-Fi / LAN &mdash; same network",
        feat2_p: "On the same Wi-Fi or wired network, devices find each other automatically and messages stay inside the local network. This works even on hotel or guest Wi-Fi where the Internet is blocked, and it is fast enough for photos.",
        feat3_h: "3. Internet &mdash; when neither of the above works",
        feat3_p: "Only when Bluetooth and the local network both fail does the message travel through our server. Names, profiles, messages and attachments are all encrypted end to end, so the server cannot read any of them. It does see who sent to whom and when &mdash; it needs that to deliver the message &mdash; and holds it for at most 30 days.",
        plat_title: "Pick your device.",
        plat_sub: "Version 0.2.1. The same app and the same privacy rules on every platform &mdash; only the way you install it differs.",
        plat_ios_os: "iPhone &amp; iPad",
        plat_ios_meta: "Release in preparation",
        plat_android_os: "Phones &amp; tablets",
        plat_android_meta: "Android 7.0 and newer",
        plat_desktop_os: "Computers",
        plat_desktop_meta: "Desktop builds",
        and_dl_title: "Signed build, direct from us.",
        and_dl_sub: "Version 0.2.1 for Android 7.0 and newer. Signed with the certificate we will keep using, so future updates install cleanly on top. Google Play distribution is on the way.",
        and_dl_meta: "Signed release &middot; 21.6 MB &middot; arm64-v8a",
        and_note_install: "<strong>How to install.</strong> Allow &ldquo;Install unknown apps&rdquo; for the browser you download with, then tap the downloaded file.",
        and_note_bg: "<strong>Background delivery.</strong> Android lets the app keep finding people nearby and receiving messages after you swipe it away, and it starts again after a reboot. You can turn that off in Settings inside the app.",
        desk_dl_title: "Signed builds, direct from us.",
        desk_dl_sub: "macOS and Linux 0.3.0; Windows 0.2.1. Closing the window keeps the app running in the tray or menu bar, so you still receive messages. All builds default to English; you can change the language from Settings inside the app.",
        desk_msi_meta: "MSI installer &middot; 6.2 MB &middot; 64-bit",
        desk_deb_meta: "DEB package &middot; 8.2 MB &middot; x86_64",
        desk_mac_os: "macOS 11 and newer",
        desk_dmg_meta: "DMG &middot; 8.4 MB &middot; Apple silicon &middot; notarized",
        desk_note_win: "<strong>Windows SmartScreen warning?</strong> The Windows installer is not signed with a Microsoft-issued code-signing certificate yet, so SmartScreen may show &ldquo;Windows protected your PC&rdquo; the first time. Click <em>More info &rarr; Run anyway</em> to continue.",
        desk_note_mac: "<strong>macOS install:</strong> the app and the disk image are both signed with our Developer ID and notarised by Apple, so it opens without any Gatekeeper warning &mdash; open the .dmg and drag OriMessenger to Applications. Apple silicon only.",
        desk_note_linux: "<strong>Linux install:</strong> run <code>sudo apt install ./OriMessenger-0.3.0-amd64.deb</code> from the folder you downloaded it to; apt pulls in the required system libraries. Requires Ubuntu 24.04 / Debian 13 or newer (64-bit).",
        ios_get_title: "Coming to the App Store.",
        ios_get_sub: "The iPhone and iPad build is finished and in review preparation. If you would like to try it before the public release, email us and we will add you to the TestFlight group.",
        ios_testflight: "Ask for a TestFlight invite",
        ios_note_expect: "<strong>What to expect on iPhone.</strong> Bluetooth and Wi-Fi messaging work the same as everywhere else while the app is open. iOS limits what any app may do once it leaves the foreground far more tightly than other systems, so background discovery is reduced, and messages that arrive while the app is fully closed are delivered the next time you open it.",
        ios_note_perm: "<strong>Permissions.</strong> The app asks for Bluetooth and Local Network access, and for permission to show notifications. Each one is explained when it is requested, and declining any of them leaves the rest working.",
        how_eyebrow: "How it works",
        how_title: "Your privacy, in plain terms.",
        how_sub: "What stays on your phone, what is protected, and what we can and cannot see. The <a href=\"/orimessenger/policy\">privacy policy</a> has the full details.",
        how1_h: "Your identity stays on the device",
        how1_p: "Your identity is created on your device the first time you open the app, and the secret part of it never leaves that device.",
        how2_h: "Messages are sealed",
        how2_p: "Messages, names, avatars and attachments are end-to-end encrypted, so only the person you are talking to can read them. When a message goes over the Internet, our server sees only what it needs to deliver it: who it is from, who it is for, and when.",
        how3_h: "Friend requests carry no profile",
        how3_p: "A friend request carries only your ID. Your display name and status are shared with that person, encrypted, only after they accept.",
        how4_h: "History stays on the device",
        how4_p: "Chat history is kept only on your device. Uninstalling the app or deleting the app data removes it. There is no cloud backup that we control.",
        brk_title: "Built for places the Internet is unreliable.",
        brk_sub: "A concert, a metro tunnel, a campsite, a captive-portal hotel Wi-Fi, a country where messenger apps get blocked. OriMessenger keeps working because it does not depend on a single network being up.",
        brk1_h: "No phone number",
        brk1_p: "Sign-up is a 16-character ID generated on your device. There is no SMS gateway to leak your number to.",
        brk2_h: "No account",
        brk2_p: "No email, no password, no recovery flow. Losing the device is losing the identity, and that is by design.",
        brk3_h: "Free, with no ads",
        brk3_p: "The app is free. There are no subscriptions, no in-app purchases and no advertising.",
        brk4_h: "Closed to strangers",
        brk4_p: "You can only be messaged by someone who already has your ID. The nearby list is opt-in from the same screen.",
        cta_title: "Questions or a bug?",
        cta_sub: "Email works best &mdash; usually answered the same day.",
        cta_btn: "Get in touch",
        pol_eyebrow: "Legal",
        pol_title: "Privacy Policy",
        pol_sub: "OriMessenger &mdash; for Windows, macOS, Linux, Android and iOS.",
        pol_updated: "Last updated: 26 September 2026",
        pol_short: "<strong>Short version.</strong> OriMessenger has no account and no phone number. Every message body, avatar and attachment is encrypted end to end between the two devices. Where the app has to reach the Internet, our relay server carries encrypted messages it cannot open &mdash; but it does see <em>who sent it to whom, and when</em>, because it has to route the message. Two things are deliberately <strong>not</strong> secret: your chosen display name and status text are readable by any nearby device running OriMessenger, and the relay retains delivery metadata for up to 30 days. Both are explained below.",
        pol_toc: "On this page",
        pol_who_h: "Who publishes this app",
        pol_device_h: "What is stored on the device",
        pol_paths_h: "The three network paths a message can take",
        pol_nearby_h: "What nearby devices can see",
        pol_relay_h: "What the relay server sees",
        pol_collect_h: "What we collect, in categories",
        pol_perm_h: "Permissions the app asks for, and why",
        pol_share_h: "Sharing with third parties",
        pol_retention_h: "Retention and deletion",
        pol_children_h: "Children's privacy",
        pol_rights_h: "Your rights",
        pol_security_h: "Security",
        pol_changes_h: "Changes to this policy",
        pol_who_p: "OriMessenger is published by <strong>AIBachKhoa</strong> (Son Tran), based in Hanoi, Vietnam. Contact details are at the bottom of the page.",
        pol_device_p: "On the first launch the app creates your identity on the device: a set of encryption keys, used to protect your messages and to prove to your contacts that they really came from you, and your 16-character user ID. The secret parts never leave your device. Everything below is kept in the app's own private data folder:",
        pol_th_platform: "Platform",
        pol_th_where: "Where it is kept",
        pol_where_win: "The app's data folder inside your Windows user profile.",
        pol_where_mac: "The app's data folder inside your macOS user account.",
        pol_where_linux: "The app's data folder inside your home directory.",
        pol_where_android: "The app's private storage. It is excluded from Android cloud backup, so it is not copied to Google Drive.",
        pol_where_ios: "The app's private storage &mdash; chat history and keys are never exposed through the Files app or iTunes file sharing.",
        pol_dev_li1: "Your identity keys. The secret part never leaves the device.",
        pol_dev_li2: "Your chosen display name, status text, avatar colour and background.",
        pol_dev_li3: "Your friend list, blocked list, and any pending friend requests.",
        pol_dev_li4: "The chat history and the attachments you sent or received.",
        pol_dev_li5: "The encryption keys for each of your conversations.",
        pol_dev_li6: "App preferences: language, light/dark mode, sending channel default.",
        pol_dev_uninstall: "Uninstalling the app or clearing its data removes all of the above. There is no cloud backup that we control.",
        pol_dev_note: "<strong>Be clear about at-rest protection.</strong> Your chat history and private keys are stored unencrypted in the app's data folder. The app does <em>not</em> add a passphrase or a second layer of encryption on top. They are protected by your operating system: the app sandbox on Android and iOS, your user account and full-disk encryption (FileVault, BitLocker, LUKS) on desktop. Anyone who can read files as your user, on an unlocked device, can read your chat history. If that matters to you, use full-disk encryption and a device passcode.",
        pol_paths_p: "OriMessenger tries paths in this order and stops at the first one that works:",
        pol_th_path: "Path",
        pol_th_travels: "What travels, and to where",
        pol_path_bt: "The device makes itself discoverable over Bluetooth and looks for other OriMessenger devices nearby. Messages go directly, device to device &mdash; no cell tower, no router, nothing leaves your immediate area. Note that the device also publishes a small public profile so others can find it: see <a href=\"#nearby\">what nearby devices can see</a>.",
        pol_path_lan: "Devices on the same local network announce themselves to each other, then connect directly. Traffic stays inside the local network and works even when the Internet is blocked. These announcements are visible to every device on the network: see <a href=\"#nearby\">what nearby devices can see</a>.",
        pol_path_relay_h: "<strong>Internet relay</strong>",
        pol_path_relay: "Only when the two above have failed. The device opens an encrypted connection to the relay server operated by AIBachKhoa and hands over the encrypted message, addressed to the recipient's ID. <a href=\"#relay\">What the relay server sees</a> describes exactly what it keeps.",
        pol_nearby_p1: "This is the one part of OriMessenger that is <strong>not</strong> end-to-end encrypted, and it is worth understanding before you choose a display name.",
        pol_nearby_p2: "To let people find each other without an account or a server, each device publishes a small public profile. It contains your <strong>user ID</strong>, your <strong>display name</strong>, your <strong>status text</strong>, your avatar colour, and your <strong>public</strong> keys. It never contains your private keys, your chat history, or your friend list.",
        pol_nearby_p3: "That profile is readable by anyone in range who is looking for it &mdash; not only by your contacts:",
        pol_nearby_bt: "<strong>Over Bluetooth</strong>, the profile is published so that any device in range may read it. There is no pairing step and no approval prompt, because a stranger has to be able to read your name in order to send you a friend request in the first place.",
        pol_nearby_wifi: "<strong>Over Wi-Fi</strong>, the same profile is included in the announcements sent to every device on the local network.",
        pol_nearby_p4: "The profile is signed with your identity, so nobody on your network can advertise <em>your</em> name attached to <em>their</em> address. But it is not secret. Practically:",
        pol_nearby_li1: "Anyone in the same caf&eacute;, office or classroom running OriMessenger can see the display name and status text you chose, and can tell that your device is present.",
        pol_nearby_li2: "If you would rather not be visible, turn <strong>Nearby</strong> off in Settings. That stops you being discoverable over both Bluetooth and Wi-Fi; the Internet relay keeps working, so existing conversations still deliver.",
        pol_nearby_li3: "Use a nickname rather than your legal name if you expect to be in public places. Your user ID does not reveal anything by itself, but the name you type is shown as you typed it.",
        pol_nearby_p5: "Message contents are never part of this. Once two devices decide to talk, everything after the profile exchange is encrypted end to end.",
        pol_relay_p1: "The Internet relay holds messages until they can be delivered. Each device connects to it over an encrypted connection and proves that it owns its ID. When your device has a message for someone whose ID it knows, the relay stores a record containing:",
        pol_relay_li1: "The <strong>recipient's user ID</strong> (16 characters).",
        pol_relay_li2: "The <strong>sender's user ID</strong> &mdash; that is, yours. The relay needs it to apply block lists and to let the recipient's device verify the signature.",
        pol_relay_li3: "A <strong>timestamp</strong>, used to expire the record.",
        pol_relay_li4: "The <strong>encrypted message</strong>, which only your device and the recipient's can open. This includes any attachment bytes and any human-readable metadata such as your name, avatar or status.",
        pol_relay_li5: "The <strong>network information</strong> that any Internet connection carries: your IP address and a temporary connection ID.",
        pol_relay_p2: "So the relay <strong>does</strong> learn delivery metadata: who sent a message to whom, when, and roughly how large it was. We cannot design that away while still delivering to devices that are offline. If that metadata matters to you, use OriMessenger over Bluetooth or Wi-Fi, where no server is involved at all.",
        pol_relay_p3: "The relay also keeps a <strong>block list</strong>: when you block someone, the pair (your ID, their ID) is stored server-side so the relay can refuse their messages before they ever reach your device. This list has no expiry; it is removed when you unblock the person, or on request.",
        pol_relay_p4: "The relay <strong>does not see</strong>:",
        pol_relay_not1: "The message text or media contents. It has no key to decrypt them.",
        pol_relay_not2: "Your display name, avatar or status &mdash; those travel inside the encrypted message.",
        pol_relay_not3: "Your friend list, your pending requests, or anything you exchanged over Bluetooth or Wi-Fi. Those paths never touch the server.",
        pol_relay_not4: "Any phone number, email address, or third-party account. There is none associated with your ID.",
        pol_relay_p5: "Stored messages are deleted the moment the recipient's device confirms receipt, or after 30 days, whichever comes first.",
        pol_collect_p: "Mapped to the Google Play Data Safety format:",
        pol_th_category: "Category",
        pol_th_collected: "Collected?",
        pol_th_details: "Details",
        pol_c1_cat: "Personal info (name, email, phone)",
        pol_c1_col: "Not collected by us",
        pol_c1_det: "No account is created and we never receive your name. But note it is not private either: the display name and status text you choose are broadcast to nearby devices during discovery &mdash; see <a href=\"#nearby\">what nearby devices can see</a>. We collect no email and no phone number at all.",
        pol_c2_cat: "Contacts (address book)",
        pol_no: "No",
        pol_c2_det: "The app does not read your device's contacts.",
        pol_c3_cat: "Location (GPS or fine)",
        pol_c3_det: "Not requested, not collected.",
        pol_c4_cat: "Messages",
        pol_c4_col: "Only in transit, encrypted",
        pol_c4_det: "The relay handles only encrypted messages and cannot read their contents. It does retain delivery metadata (sender ID, recipient ID, timestamp) until delivery or for 30 days &mdash; see <a href=\"#relay\">what the relay server sees</a>.",
        pol_c5_cat: "Photos and media",
        pol_c5_col: "Only what you attach",
        pol_c5_det: "You pick files to send; the encrypted bytes travel through the chosen network path. Nothing is auto-uploaded.",
        pol_c6_cat: "App activity, in-app actions",
        pol_c6_col: "No analytics",
        pol_c6_det: "The app contains no third-party analytics.",
        pol_c7_cat: "App info and performance (crash logs)",
        pol_c7_col: "Only on request",
        pol_c7_det: "Crash reports are written locally. If you send us one, you attach the file yourself.",
        pol_c8_cat: "Device or other identifiers",
        pol_c8_det: "No IMEI, no Android ID, no advertising ID.",
        pol_th_permission: "Permission",
        pol_th_why: "Why it is needed",
        pol_p1_name: "Nearby devices / Bluetooth (Android)",
        pol_p1_why: "To find nearby OriMessenger users and exchange messages directly, without the Internet.",
        pol_p2_name: "Location (Android 11 and older)",
        pol_p2_why: "Older Android versions require this to be granted alongside Bluetooth scan. The app does not read GPS or use the location.",
        pol_p3_name: "Internet access (Android, Linux, Windows)",
        pol_p3_why: "To reach the relay when Bluetooth and LAN are not available.",
        pol_p4_name: "Network and Wi-Fi status (Android)",
        pol_p4_why: "To detect whether Wi-Fi is on and whether the device is on a LAN worth trying.",
        pol_p5_name: "Run in the background and start at boot (Android)",
        pol_p5_why: "To keep discovering nearby users and delivering messages while the app is in the background, and to resume on reboot. Optional &mdash; you can turn this off in Settings.",
        pol_p6_name: "Notifications (Android 13+)",
        pol_p6_why: "To show incoming-message notifications.",
        pol_p7_name: "Photos / file access (Android, Windows, Linux)",
        pol_p7_why: "To let you pick a photo to attach or a background image. Only files you choose are read.",
        pol_p8_name: "Bluetooth (macOS, iOS)",
        pol_p8_why: "Same purpose as on Android: to find nearby users and exchange messages without the Internet. macOS and iOS ask you once, with a system prompt; you can revoke it later in Settings &rarr; Privacy &amp; Security &rarr; Bluetooth.",
        pol_p9_name: "Local Network (macOS, iOS)",
        pol_p9_why: "To find devices on the same Wi-Fi and connect to them directly. Declining it leaves Bluetooth and the Internet relay working.",
        pol_p10_name: "Notifications (macOS, iOS)",
        pol_p10_why: "To show incoming-message notifications. Optional; declining costs you only the banners.",
        pol_p11_name: "Background Bluetooth (iOS)",
        pol_p11_why: "To keep receiving messages from nearby devices while the app is not in the foreground. iOS limits this heavily and does not allow the continuous background operation that Android permits; iOS cannot deliver messages at all while the app is fully closed.",
        pol_share_p: "<strong>We do not sell user data, and we do not share it with advertising networks.</strong> The only situations in which any information related to you leaves our systems are:",
        pol_share_li1: "<strong>Infrastructure providers</strong> that host the relay (a Vietnamese cloud provider) &mdash; they see the encrypted messages passing through it, no more than the relay itself does.",
        pol_share_li2: "<strong>Law enforcement</strong>, when we are legally required to respond to a valid request. Given that the relay only holds encrypted messages and delivery metadata, the useful surface is small; we will say so if asked.",
        pol_share_li3: "<strong>A successor entity</strong>, in the event of a merger or acquisition. Any transfer inherits this policy.",
        pol_ret_p1: "Chat history, key material and profile settings live on your device until you delete them. Uninstalling the app removes them, on every platform.",
        pol_ret_p2: "Undelivered messages on the relay are dropped once the recipient fetches them, or after 30 days. Delivered messages are dropped immediately.",
        pol_ret_p3: "Server-side block entries (your ID paired with the ID you blocked) have no expiry. They are deleted when you unblock the person in the app, or if you ask us to clear your relay data by ID.",
        pol_ret_p4: "Server-side logs of relay traffic (connection metadata, timestamps, byte counts &mdash; no message payloads and no user IDs) are retained for up to 14 days for operational debugging, then rotated out.",
        pol_children_p: "OriMessenger is not directed at users under 13. In jurisdictions that require parental consent, we follow the local rule. If you believe a child has created an ID and you want it removed, write to the address below with the ID; we can delete the corresponding data on the relay.",
        pol_rights_p1: "Because there is no account, most rights you would normally exercise against a company are yours to exercise directly on the device: access, correction, deletion and export all mean opening the app. Inside the app you can clear your whole history, remove a contact, turn <strong>Nearby</strong> off so you stop being discoverable, and <strong>block</strong> or <strong>report</strong> anyone who sends you something abusive. A report is prepared on your device and sent to the address below &mdash; we act on those, and we can delete relay data by ID.",
        pol_rights_p2: "If you need something we can help with &mdash; deleting your data on the relay, clearing a server-side block entry &mdash; write to the address below with the ID concerned.",
        pol_sec_p1: "All Internet traffic to the relay is encrypted in transit. On top of that, every message is encrypted end to end between the two devices and signed, so the recipient can verify both that the contents were not altered and that they really came from you. The relay carries the result without holding any key that could open it.",
        pol_sec_p2: "<strong>On-device data is not separately encrypted by the app.</strong> As described under <a href=\"#device\">what is stored on the device</a>, chat history and private keys are protected by the operating system rather than by an app passphrase. We would rather state that plainly than imply a protection the app does not provide.",
        pol_sec_p3: "The Android APK and the Google Play build are signed with a certificate whose fingerprint is:",
        pol_sec_p4: "The Windows installer is not code-signed yet; check it against the SHA-256 published on the download page instead.",
        pol_sec_p5: "No system is fully secure and we do not promise otherwise. If you find a vulnerability, please email <a href=\"mailto:contact@aibachkhoa.com\">contact@aibachkhoa.com</a> with the details rather than posting it publicly.",
        pol_changes_p: "This policy may change as the app changes. The &ldquo;last updated&rdquo; date at the top always reflects the current version. Changes that materially affect how your data is handled will be surfaced inside the app, not just published on this page.",
        pol_th_email: "Email",
        pol_th_address: "Address",
        pol_th_publisher: "Publisher",
        pol_address: "Cau Giay District, Hanoi, Vietnam"
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
