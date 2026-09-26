/* =========================================================
   BKSafe product page.
   NOTE: this page is English-only. The Vietnamese copy was removed
   from the whole site along with every /vi/ URL, so there is no
   hidden locale left here to switch back on.
   Theme is shared with the main site through the same 'theme' key;
   the language choice is stored separately so it does not fight
   with the picker on the landing page.
   ========================================================= */

const i18n = {

    en: {
        page_title: "BKSafe — security for Mac, Windows and Android | AIBachKhoa",
        meta_desc: "BKSafe watches machine health, scans for malware, clears junk and monitors network traffic. Direct downloads for macOS, Windows and Linux, plus Android.",
        nav_policy: "Privacy",
        pol_page_title: "Privacy Policy — BKSafe | AIBachKhoa",
        pol_meta_desc: "The BKSafe privacy policy: what the Android build collects, why the desktop builds collect nothing, and the only two network connections they make.",
        pol_back: "Back to the product",
        pol_eyebrow: "Legal",
        pol_title: "Privacy Policy",
        pol_product: "BKSafe — for Windows, macOS, Linux and Android",
        pol_updated: "Last updated: 23 August 2026",
        pol_lead: "This page sets out how BKSafe handles information. The phone build and the desktop builds differ substantially here, so they are treated separately rather than blurred into one general statement — a policy written for both at once either overstates one or understates the other.",
        pol_toc: "On this page",
        pol_h_summary: "Summary",
        pol_summary_1: "BKSafe is a set of protection and maintenance tools published by AIBachKhoa (Son Tran), Vietnam. There are four builds: Windows, macOS, Linux and Android.",
        pol_summary_2: "<strong>The desktop builds have no account, no telemetry, and send no results anywhere.</strong> Every scan, every figure and every log stays on that machine. The Android build does collect some operational data, listed in full below.",
        pol_h_desktop: "The desktop builds (Windows, macOS, Linux)",
        pol_desktop_1: "These three read a great deal about your machine — that is their job. But <strong>none of it leaves the machine</strong>. Specifically, the app reads:",
        pol_desktop_l1: "Hardware figures: CPU, memory, temperature, drive health, network traffic",
        pol_desktop_l2: "The contents of files in the folders you choose to scan, to match against malware signatures",
        pol_desktop_l3: "The list of processes, services, drivers and startup entries",
        pol_desktop_l4: "The operating system's security configuration: firewall, anti-malware, drive encryption",
        pol_desktop_l5: "Folder names and sizes, when you use the storage measurement feature",
        pol_desktop_2: "There is no account to sign in to, no device identifier is generated, and no analytics or crash-reporting SDK is embedded. File contents are read *in memory* to compare against signatures and then discarded — they are not copied, not uploaded, and not retained.",
        pol_desktop_3: "What the app does write to disk sits in your own account's configuration folder: language choice, light/dark mode, alert thresholds, and the log of scans you have run. On Windows that is <code>%APPDATA%\\BKSafe\\BKSafe</code>. Uninstalling the app or deleting that folder removes all of it.",
        pol_h_network: "When the desktop builds connect out",
        pol_network_1: "Exactly two connections, and neither carries your data:",
        pol_network_2: "Beyond these two, the desktop builds open no other network connection. You can verify this with any network monitoring tool — including this app's own Network screen.",
        pol_net_th_what: "Connection",
        pol_net_th_when: "When and why",
        pol_net_clam_t: "Virus signature update service",
        pol_net_clam_w: "Runs automatically at app launch. Downloads the virus signature database — this is what determines what the scanner can recognise. Download only; nothing is sent up beyond an ordinary file request.",
        pol_net_wu_w: "Only when you press \"Check now\" on the Updates tab. The app asks the operating system's own Windows Update service whether any patch is waiting; that connection is between your machine and Microsoft.",
        pol_h_collect: "What the Android build collects",
        pol_collect_1: "The Android build collects some data in order to run the service and detect threats:",
        pol_collect_l1: "Email address and usage data",
        pol_collect_l2: "Device information: model, OS version, hardware identifiers, IMEI, Android ID",
        pol_collect_l3: "How often and how long the app is used, and which actions are taken",
        pol_collect_l4: "Crash logs and performance metrics",
        pol_collect_l5: "Package names of scanned apps, for threat detection",
        pol_collect_2: "<strong>We do not collect your personal files</strong> — photos, videos, contacts, messages — unless you explicitly grant access for a specific feature.",
        pol_h_perm: "The permissions the Android build asks for, and why",
        pol_perm_th_p: "Permission",
        pol_perm_th_w: "What it is for",
        pol_perm_storage_w: "To scan storage folders for malware.",
        pol_perm_usage_w: "To notice apps behaving unusually in the background.",
        pol_perm_call_w: "To match incoming numbers against a list of fraudulent ones.",
        pol_perm_vpn_w: "To monitor network traffic on the device itself. This is a local, on-device connection — no traffic is routed through our servers.",
        pol_h_use: "What the data is used for",
        pol_use_1: "Data collected by the Android build is processed only for the following purposes:",
        pol_use_l1: "Detecting security threats",
        pol_use_l2: "Improving and maintaining how the app works",
        pol_use_l3: "Managing your account",
        pol_use_l4: "Meeting legal obligations",
        pol_use_l5: "Contacting you when necessary",
        pol_h_share: "Data sharing",
        pol_share_1: "<strong>We are committed to not selling and not sharing user data with third parties.</strong> There are three exceptions, and we state them here rather than bury them:",
        pol_share_l1: "Service providers we engage to operate the service (for example analytics), and only to the minimum their work requires",
        pol_share_l2: "Authorities, where the law requires it",
        pol_share_l3: "An acquiring party, in the event of a future merger or business transfer",
        pol_share_2: "For the desktop builds none of these arise: no data of yours leaves the machine, so there is nothing to share.",
        pol_h_store: "Storage and retention",
        pol_store_1: "All data relating to the app's operation is processed and stored on your own device.",
        pol_store_2: "Delete it by uninstalling the app, or with the app's built-in delete function. On the desktop builds, deleting the app's configuration folder removes everything it has ever written.",
        pol_h_children: "Children's privacy",
        pol_children: "The service is not directed at users under 13. Where the law requires the consent of a parent or guardian, we comply with that requirement. If you believe your child has provided information to us, contact us at the address at the foot of this page and we will delete it.",
        pol_h_rights: "Your rights",
        pol_rights_1: "You have the right to access, correct and delete your data, and to object to our processing of it. Send requests to the email address at the foot of this page.",
        pol_rights_2: "On the desktop builds you can exercise most of these yourself without asking anyone: the only data that exists is a handful of settings and log files inside your own folder.",
        pol_h_security: "Security",
        pol_security: "Because the desktop builds keep everything on the machine itself, your data is protected by the operating system's own defences — your user account and its file permissions. For data the Android build does send us, we use encrypted connections in transit and keep access to the minimum needed. No system is perfectly secure, and we do not claim otherwise.",
        pol_h_changes: "Changes to this policy",
        pol_changes: "This policy may be updated as the app changes. The \"last updated\" stamp at the top always reflects the version in force. For changes that materially affect how your data is handled, we will say so in the app rather than quietly editing this page.",
        pol_h_contact: "Contact",
        pol_contact_1: "For questions about this policy, or to exercise your rights:",
        pol_contact_mail: "Email",
        pol_contact_addr: "Address",
        pol_contact_addr_v: "Cau Giay District, Ha Noi, Vietnam",
        aria_lang: "Change language",
        aria_theme: "Toggle theme",
        aria_menu: "Open menu",
        skip_link: "Skip to content",

        nav_home: "Home",
        nav_overview: "Overview",
        cta_download: "Download",

        hero_platforms: "macOS · Windows · Android",
        hero_title: "Your machine, <em>in plain sight</em>.",
        hero_sub: "BKSafe watches machine health, scans for malware, clears out junk and keeps an eye on network traffic. Every bit of analysis happens on the device — none of your files ever leave it.",
        btn_dl_mac: "Download for macOS",
        btn_dl_win: "Download for Windows",
        btn_dl_play: "Get it on Google Play",
        hero_meta: "macOS 1.3.3 · 33 MB · universal for Intel and Apple Silicon. Windows 1.3.0 · 20 MB · runs straight out of the folder. Linux 1.3.1 · 15 MB · .deb for Debian and Ubuntu.",

        pillar_local_t: "Analysis stays local",
        pillar_local_d: "Every scan and measurement runs on the device itself. Your files are never uploaded to a server.",
        pillar_notary_t: "Notarized by Apple",
        pillar_notary_d: "Signed with a Developer ID and notarized. Drag it into Applications and open it — no warning, no unblocking.",
        pillar_portable_t: "Runs without installing",
        pillar_portable_d: "The Windows build is a folder you can copy anywhere — a USB stick, a network share, another PC. No installer; double-click and it runs.",
        pillar_two_t: "Desktop and phone",
        pillar_two_d: "The macOS app looks after the Mac, the Windows app after the PC, the Android app after the phone. Same thinking, three interfaces built for their own platform.",

        pick_title: "Pick your platform.",
        pick_sub: "Three separate apps, each written for the operating system it runs on.",
        pick_mac_kicker: "Desktop app",
        pick_mac_desc: "Monitoring and maintenance in one app: system health, junk cleanup, malware scanning, a security audit, drive health, temperature, network activity and anomaly alerts.",
        pick_mac_go: "See the macOS 1.3.3 build",
        pick_win_kicker: "Desktop app",
        pick_win_desc: "Junk cleanup, storage and memory insight, virus scanning, ransomware protection, a system safety check, background services, network activity, drive health and monitoring.",
        pick_win_go: "See the Windows 1.3.0 build",
        pick_droid_kicker: "Mobile app",
        pick_droid_desc: "On-device scanning for apps and files, scam call blocking, a PIN-protected vault and a safety score for the phone. BKSafe Lite covers older devices.",
        pick_droid_go: "See the Android build",

        mac_eyebrow: "macOS build",
        mac_title: "Your Mac, measured end to end.",
        mac_sub: "Live readings for every part of the Mac in one place — processor, graphics, memory, storage, drive health, temperature and network — alongside cleanup, malware scanning and a security audit.",
        mac_badge_ver: "Version 1.3.3 · build 26",
        mac_badge_req: "macOS 11 Big Sur or later",
        mac_badge_arch: "Universal · Intel & Apple Silicon",

        f_sys_t: "System",
        f_sys_d: "CPU, GPU, memory, storage and network side by side. Machine spec, uptime, process count and memory pressure on one screen.",
        f_cpu_t: "CPU, core by core",
        f_cpu_d: "Load on each core with performance and efficiency clusters kept apart, 1/5/15-minute load averages, and the processes eating the most CPU.",
        f_gpu_t: "GPU",
        f_gpu_d: "Utilisation, renderer and tiler activity, graphics memory in use against its limit, and core count.",
        f_mem_t: "Memory",
        f_mem_d: "Split the way macOS actually splits it: app memory, wired, compressed and file cache — with memory pressure and how much has been swapped out.",
        f_disk_t: "Disk health",
        f_disk_d: "Drive health at a glance: wear level, spare capacity, total data written, unsafe shutdowns, media errors and drive temperature.",
        f_temp_t: "Temperature",
        f_temp_d: "Every thermal sensor in the machine, which one is hottest right now, and whether the Mac is throttling because of heat.",
        f_net_t: "Network",
        f_net_d: "Who is moving data, how much of it, over which interface, and which ports this Mac exposes — broken down per process.",
        f_mon_t: "Anomaly alerts",
        f_mon_d: "Alerts when a reading stays outside its expected range. You set the thresholds, so ordinary spikes are not reported as problems.",
        f_clean_t: "Cleaner",
        f_clean_d: "Finds caches, logs, temporary files and leftovers from apps you removed. You see the list, then you decide what goes.",
        f_scan_t: "Malware scan",
        f_scan_d: "Sweeps the locations malware commonly targets, along with everything that launches with the Mac, checked against an up-to-date threat database.",
        f_sec_t: "Security audit",
        f_sec_d: "Checks macOS's defence layers, open ports and everything that starts itself with the Mac. Reads settings only — changes nothing.",
        f_set_t: "Settings",
        f_set_d: "Set alert thresholds, choose whether notifications appear, and decide how much the app does in the background.",

        gal_title: "See every screen for yourself",
        gal_sub: "Actual screens from the macOS build.",
        gal_aria: "Choose a screen",

        s01_tab: "Overview", s01_title: "System — Overview",
        s01_cap: "CPU, GPU, memory, storage and network side by side, with the machine spec and its current state.",
        s02_tab: "CPU", s02_title: "System — CPU",
        s02_cap: "Load per core with performance and efficiency clusters kept apart, plus 1/5/15-minute load averages.",
        s03_tab: "GPU", s03_title: "System — GPU",
        s03_cap: "Utilisation, renderer and tiler activity, and graphics memory in use against its limit.",
        s04_tab: "Memory", s04_title: "System — Memory",
        s04_cap: "Grouped the way macOS groups it: app, wired, compressed and file cache — with memory pressure.",
        s05_tab: "Storage", s05_title: "System — Storage",
        s05_cap: "Read and write speed right now, and the capacity of every mounted volume.",
        s06_tab: "Interfaces", s06_title: "System — Network",
        s06_cap: "Throughput per interface, error packets and cumulative traffic.",
        s07_tab: "Cleaner", s07_title: "Cleaner",
        s07_cap: "The start of a cleaning pass: run the scan, review the list of junk, then decide what gets deleted.",
        s08_tab: "Malware scan", s08_title: "Malware scan",
        s08_cap: "The start of a malware pass over the folders that tend to get targeted.",
        s09_tab: "Security", s09_title: "Security audit",
        s09_cap: "Checks macOS's defence layers, open ports and everything that starts with the Mac. Reads only, changes nothing.",
        s10_tab: "Disk", s10_title: "Disk — Health and traffic",
        s10_cap: "Drive health, read and write activity, and how space is laid out across the volume.",
        s11_tab: "Temperature", s11_title: "Temperature",
        s11_cap: "Every thermal sensor, and which one is running hottest.",
        s12_tab: "Network", s12_title: "Network — Interfaces, processes and ports",
        s12_cap: "Who is moving data, how much of it, and which ports this Mac exposes to the network.",
        s13_tab: "Monitor", s13_title: "Monitor — Anomaly detection",
        s13_cap: "Alerts appear only when a reading stays outside its normal range.",
        s14_tab: "Settings", s14_title: "Settings",
        s14_cap: "Alert thresholds, notification switches, and how much the app runs in the background.",

        note_title: "Why the app asks for Full Disk Access",
        note_body: "BKSafe reports on hardware, storage, network and security settings that sit outside an app's own container, and clears junk files left across the system. That needs Full Disk Access, and it is why BKSafe is distributed with a Developer ID and Apple notarization rather than through the Mac App Store. The access is used for reading only, and nothing is sent anywhere.",

        steps_title: "Installed in three steps",
        step_1: "Download <code>BKSafe-1.3.3.dmg</code>.",
        step_2: "Open it and drag <strong>BKSafe</strong> into <strong>Applications</strong>.",
        step_3: "Open BKSafe from Launchpad or the Applications folder.",
        steps_foot: "No right-click-then-Open, no trip to Settings to unblock it, no “unidentified developer” warning. Apple's notarization ticket is stapled to both the DMG and the app inside it, so the Mac opens it fine even with <strong>no network connection</strong>.",

        win_eyebrow: "Windows build",
        win_title: "Your PC, with nothing left in the dark.",
        win_sub: "The same BKSafe, built for Windows: junk cleanup, storage and memory insight, virus scanning, ransomware protection, background service auditing, network activity and alerts when a reading goes out of range. No installer — unzip it and run it.",
        win_badge_ver: "Version 1.3.0 · build 23",
        win_badge_req: "Windows 10 64-bit or later",
        win_badge_portable: "Portable — no installation",

        w_clean_t: "Cleaner",
        w_clean_d: "Finds what Windows and your apps leave behind: temp folders, the update store, browser caches, the old Windows install. It only lists — nothing is deleted until you pick it.",
        w_storage_t: "Storage",
        w_storage_d: "Which folders and which files are taking up the room. View by folder, by largest file, or by file type.",
        w_mem_t: "Memory",
        w_mem_d: "Where the RAM is going and which process is holding it, plus the file cache that can be handed back when the machine needs it.",
        w_scan_t: "Virus scan",
        w_scan_d: "Content-based scanning of the folders you choose, checked against an up-to-date threat database.",
        w_guard_t: "Ransomware guard",
        w_guard_d: "Behaviour-based protection that detects mass encryption of your documents while it is happening and alerts you immediately.",
        w_sec_t: "System safety",
        w_sec_d: "Whether Windows' defence layers are switched on, what starts itself with the machine, and whether any patch is waiting.",
        w_svc_t: "System services",
        w_svc_d: "What runs in the background with system privileges, who signed it and where it lives, with newly installed services surfaced promptly.",
        w_net_t: "Network",
        w_net_d: "How much is moving, which process is moving it, and which ports are open to the outside.",
        w_disk_t: "Drive",
        w_disk_d: "Hardware health, read and write throughput, and how fragmented each volume is.",
        w_mon_t: "Monitor",
        w_mon_d: "The whole machine on one screen, with a record of every alert raised. Alerts appear only when a reading falls outside the range you set.",
        w_hist_t: "Scan history",
        w_hist_d: "Every scan is recorded: when it ran, what it covered and what it found. Cancelled runs are recorded too, so the history is complete.",
        w_sched_t: "Scheduled scans",
        w_sched_d: "Daily, weekly or monthly scans that run on their own, with the next scheduled run always shown.",
        w_auto_t: "Start with the system",
        w_auto_d: "Start BKSafe with Windows so background protection is active from the moment you sign in. The entry is created under your own account and needs no administrator rights.",
        w_hud_t: "Collapse to a widget",
        w_hud_d: "Collapse the app into a compact panel on the desktop showing key live readings, with an indicator when something needs your attention.",

        win_note_title: "When you need administrator rights",
        win_note_body: "For everyday use the normal build is enough — auditing, virus scanning, measuring storage and the ransomware guard all work at user level. Only three things need administrator rights: deleting Windows' own junk (the system temp folder, the update store, the old Windows install), stopping or disabling a service, and counting network bytes per process. The download ships with <code>Chay bang quyen quan tri.bat</code>, and the app itself has a <strong>Relaunch as administrator</strong> button on the Settings and Cleaner screens.",

        win_steps_title: "Running it in three steps",
        win_step_1: "Download <code>BKSafe-1.3.0-win-x64-portable.zip</code> and unzip it into a folder.",
        win_step_2: "Double-click <code>bksafe.exe</code>. There is no installation step.",
        win_step_3: "To clear the system's own junk, use the bundled <code>Chay bang quyen quan tri.bat</code>.",
        win_steps_foot: "Copy the whole folder anywhere and it runs — a USB stick, a network share, another PC; just keep the folder's contents together. Your settings live in <code>%APPDATA%\\BKSafe\\BKSafe</code>, so deleting the app folder does not lose them. The app has no code-signing certificate yet, so the first launch may bring up a blue SmartScreen panel — click <strong>More info</strong> then <strong>Run anyway</strong>.",

        droid_eyebrow: "Android build",
        droid_title: "A phone that looks after itself.",
        droid_sub: "Apps and files are checked on the phone itself, scam calls are blocked before it rings, and private data sits behind a PIN. None of it requires a server.",
        droid_badge_store: "On Google Play",
        droid_badge_free: "Free to download",
        droid_badge_vi: "Vietnamese interface",
        d_scan_t: "Quick scan on the device",
        d_scan_d: "One tap checks every installed app and file on the phone. The analysis runs on the device, so it works with no connection at all.",
        d_call_t: "Scam call blocking",
        d_call_d: "Nuisance and scam numbers are stopped before the phone rings, with a log so you can see who was blocked.",
        d_vault_t: "Secure vault",
        d_vault_d: "Passwords and sensitive notes stored encrypted, unlocked with a PIN only you know.",
        d_bg_t: "Background service inspector",
        d_bg_d: "Shows which apps are quietly running, draining the battery or sending data while you are not using them.",
        d_score_t: "Safety score",
        d_score_d: "A single number for how the phone is doing, with the list of things to fix to raise it.",
        d_clean_t: "Cleanup and privacy",
        d_clean_d: "Clears junk files, wipes browsing traces and reviews the permissions your apps are holding on to.",

        lite_title: "Older phone, slower phone? Take the Lite build.",
        lite_sub: "BKSafe Lite is built for older and lower-powered phones: no background service, and a short set of tools reachable straight from the home screen.",
        lite_f1_t: "File scan",
        lite_f1_d: "Checks files against a signature database held on the phone — no connection required.",
        lite_f2_t: "Junk cleanup",
        lite_f2_d: "Finds leftover files, shows the list and how much you would get back, then deletes what you picked.",
        lite_f3_t: "Battery check",
        lite_f3_d: "Charge level, temperature, charge cycles and how the battery's health is holding up.",
        lite_f4_t: "Network speed test",
        lite_f4_d: "Download, upload, latency and jitter, along with the connection type and packet loss.",
        lite_note: "Background service inspection, traffic monitoring, the password vault and the safety score are available in the full BKSafe build.",

        dl_eyebrow: "Download",
        dl_title: "Get BKSafe on your device.",
        dl_sub: "The macOS and Windows builds download straight from here. Both Android builds come from Google Play.",
        dl_mac_line: "DMG installer · direct download",
        dl_mac_btn: "Download BKSafe-1.3.3.dmg (33 MB)",
        dl_droid_line: "Installed via Google Play · updates itself",
        play_small: "GET IT ON",
        spec_file: "File name",
        spec_size: "Size",
        spec_ver: "Version", spec_ver_v: "1.3.3 (build 26)",
        spec_req: "Requires", spec_req_v: "macOS 11.0 Big Sur or later",
        spec_arch: "Architecture", spec_arch_v: "Universal — Intel (x86_64) and Apple Silicon (arm64)",
        spec_sign: "Signed by",
        spec_notary: "Notarization", spec_notary_v: "Notarized by Apple and stapled",
        spec_pkg: "Package",
        spec_store: "Channel", spec_store_v: "Google Play — updates arrive on their own",
        spec_price: "Price", spec_price_v: "Free to download",
        spec_lang: "Language", spec_lang_v: "Vietnamese",
        sha_label: "SHA-256",
        sha_copy: "Copy",
        sha_copied: "Copied",
        sha_hint: "Check it with <code>shasum -a 256 BKSafe-1.3.3.dmg</code>, or use the <a href=\"/downloads/BKSafe-1.3.3.dmg.sha256\" download>.sha256 file</a> alongside it.",
        dl_droid_foot: "On an older or slower phone, take the Lite build next to this one. There is no iOS build — on iPhone, everything BKSafe does sits outside what iOS lets an app reach.",

        dl_win_line: "Portable ZIP · direct download",
        dl_linux_line: ".deb package · direct download",
        footer_linux: "Linux build",
        pick_linux_kicker: "Desktop app",
        pick_linux_desc: "Junk cleanup, storage and memory insight, virus scanning, real-time protection, a system safety check, service auditing, network activity, drive health and temperature.",
        pick_linux_go: "See the Linux 1.3.1 build",
        linux_eyebrow: "Linux build",
        linux_title: "Your Linux machine, fully measured.",
        linux_sub: "The same BKSafe, built for Linux: junk cleanup, storage and memory insight, virus scanning, real-time protection for newly arrived files, service auditing, drive health, temperature and network activity. Installs as a standard .deb and removes cleanly.",
        linux_badge_ver: "Version 1.3.1 · build 24",
        linux_badge_req: "Debian 12 / Ubuntu 22.04 or newer",
        linux_badge_deb: ".deb — installs and removes cleanly",
        dl_linux_btn: "Download the Linux .deb (15 MB)",
        btn_dl_linux: "Download for Linux",
        spec_ver_linux: "1.3.1 (build 24)",
        spec_req_linux: "Debian 12, Ubuntu 22.04 or newer",
        spec_arch_linux: "amd64 (x86-64) — about 34 MB once installed",
        spec_install_linux: "Double-click the file, or <code>sudo apt install ./BKSafe-1.3.1-linux-amd64.deb</code>",
        spec_sign_linux: "Not signed — verify with the SHA-256 below",
        sha_hint_linux: "Check it with <code>sha256sum BKSafe-1.3.1-linux-amd64.deb</code>, or use the <a href=\"/downloads/BKSafe-1.3.1-linux-amd64.deb.sha256\" download>.sha256 file</a> alongside it.",
        linux_steps_title: "Installing it in three steps",
        linux_step_1: "Download <code>BKSafe-1.3.1-linux-amd64.deb</code>.",
        linux_step_2: "Double-click it to open your software installer, or run <code>sudo apt install ./BKSafe-1.3.1-linux-amd64.deb</code> in a terminal.",
        linux_step_3: "Open <strong>BKSafe</strong> from the applications menu, or type <code>bksafe</code> in a terminal.",
        linux_steps_foot: "The package installs any dependencies your machine is missing, adds an entry to the applications menu, and removes cleanly with <code>sudo apt remove bksafe</code>. Your settings live under <code>~/.config</code> and <code>~/.local/share/bksafe</code>, so removing the package does not lose them. A few readings depend on optional system utilities; where those are not present, the app reports the reading as unavailable rather than estimating a number.",
        dl_win_btn: "Download the Windows portable build (20 MB)",
        dl_lite_line: "Installed via Google Play · built for slower phones",
        dl_lite_foot: "File scan, junk cleanup, battery check and a network speed test, with no background service — built to stay light on older phones.",
        spec_ver_win: "1.3.0 (build 23)",
        spec_req_win: "Windows 10 64-bit or later",
        spec_arch_win: "x64 — about 39 MB once unzipped",
        spec_req_droid: "Android 7.0 or later",
        spec_install: "Installation",
        spec_install_v: "None — unzip, then double-click <code>bksafe.exe</code>",
        spec_sign_win: "Not code-signed — SmartScreen may ask on first launch",
        sha_hint_win: "Check it with <code>Get-FileHash BKSafe-1.3.0-win-x64-portable.zip -Algorithm SHA256</code> in PowerShell, or use the <a href=\"/downloads/BKSafe-1.3.0-win-x64-portable.zip.sha256\" download>.sha256 file</a> alongside it.",

        faq_title: "Questions that come up.",
        faq_1_q: "Does BKSafe send my data anywhere?",
        faq_1_a: "No. Scanning and measurement run entirely on the device. The app does not upload your files, your process list or your machine figures to any server — and you can check that yourself on the app's own Network screen, which lists traffic per process.",
        faq_2_q: "Why is the macOS build not on the Mac App Store?",
        faq_2_a: "Apps on the Mac App Store must run sandboxed, and the sandbox blocks access to the hardware, storage and system information BKSafe reports on. BKSafe is therefore distributed with a Developer ID and Apple notarization.",
        faq_3_q: "Will macOS block it when I open it?",
        faq_3_a: "No. The macOS build is signed with a Developer ID and notarized by Apple, with the ticket stapled to both the DMG and the app inside. Drag it into Applications and open it like anything else, even with no network connection.",
        faq_4_q: "Does it work on Intel Macs?",
        faq_4_a: "Yes. It is a universal binary that runs natively on both Intel (x86_64) and Apple Silicon (arm64). There is one file to download, and no build to choose between.",
        faq_5_q: "How do I know the download is genuine?",
        faq_5_a: "On a Mac run <code>shasum -a 256 BKSafe-1.3.3.dmg</code>; on Windows open PowerShell and run <code>Get-FileHash BKSafe-1.3.0-win-x64-portable.zip -Algorithm SHA256</code>; on Linux run <code>sha256sum BKSafe-1.3.1-linux-amd64.deb</code>. Compare the result with the SHA-256 published in the Download section — matching strings mean the file is intact.",
        faq_6_q: "Do the builds share an account?",
        faq_6_a: "No. The macOS, Windows and Android apps are independent, each working on its own device. There is no shared account and nothing syncs between them.",

        faq_w1_q: "Does the Windows build need installing?",
        faq_w1_a: "No. It is a portable package: unzip it into a folder and double-click <code>bksafe.exe</code>. Copy the whole folder to a USB stick or another PC and it still runs — just keep the folder's contents together. Your settings are kept separately in <code>%APPDATA%\\BKSafe\\BKSafe</code>.",
        faq_w2_q: "Windows shows “Windows protected your PC” — what now?",
        faq_w2_a: "Click <strong>More info</strong> then <strong>Run anyway</strong>. The app has no code-signing certificate yet, so SmartScreen warns on the first few launches. If it will not start at all, right-click <code>bksafe.exe</code> → Properties → tick <strong>Unblock</strong> at the bottom of the General tab → OK. You can compare the SHA-256 published in the Download section to confirm the file is intact.",
        faq_w3_q: "When do I have to run it as administrator?",
        faq_w3_a: "Only to delete Windows' own junk, to stop or disable a service, or to count network bytes per process. For those, use the bundled <code>Chay bang quyen quan tri.bat</code>, or press <strong>Relaunch as administrator</strong> inside the app. For everyday use, ordinary user rights are enough.",
        faq_lite_q: "How does Lite differ from the full BKSafe?",
        faq_lite_a: "BKSafe Lite (<code>com.tdson.bksafelite</code>) covers file scanning, junk cleanup, a battery check and a network speed test. It runs no background service, so it stays light on an older phone. Scam call blocking, background service inspection, the vault and the safety score are in the full BKSafe build. They are separate apps, so you can keep both installed.",

        cta_title: "Start with the device in front of you.",
        cta_contact: "Get in touch",

        footer_desc: "Building practical AI tools for developers and businesses.",
        footer_bk: "BKSafe",
        footer_mac: "macOS build",
        footer_win: "Windows build",
        footer_droid: "Android build",
        footer_prod: "Other products",
        footer_comp: "Company",
        footer_about: "About",
        footer_services: "Services",
        footer_contact: "Contact",
        footer_rights: "All rights reserved.",

        /* Bảng giá */
        nav_pricing: "Pricing",
        pr_eyebrow: "Pricing",
        pr_title: "Protection is free. Automation is what costs.",
        pr_sub: "Scanning, quarantine, cleanup and every live reading are free on every platform. Pro adds what cannot be done by hand: protection that keeps running while you are away, and a longer history.",
        pr_free_name: "Free",
        pr_free_amount: "$0",
        pr_free_note: "Forever, on every platform.",
        pr_free_1: "On-demand file scanning with the full threat database",
        pr_free_2: "Move anything found to quarantine",
        pr_free_3: "Junk cleanup, storage, disk, memory, temperature, live network figures",
        pr_free_4: "Startup-item and service inspection",
        pr_free_5: "7 days of scan history",
        pr_free_btn: "Download",
        pr_pro_tag: "Best value",
        pr_pro_name: "Pro — desktop",
        pr_pro_per: "/ year",
        pr_pro_note: "Or $1.99 a month — the yearly plan saves 37%.",
        pr_pro_1: "<strong>Everything in Free</strong>, plus:",
        pr_pro_2: "Real-time guard — new files scanned the moment they land, and the startup folders watched",
        pr_pro_3: "Scheduled scans that run without you opening the app",
        pr_pro_4: "Automatic traffic alerts every 6 hours",
        pr_pro_5: "Full scan history instead of 7 days",
        pr_pro_6: "BKSafe Firewall",
        pr_pro_6_note: "(Linux only)",
        pr_pro_btn: "Get BKSafe, then upgrade in the app",
        pr_pro_fine: "Paid through PayPal from inside the app. Renews automatically; cancel any time on paypal.com. Priced in USD — PayPal does not support VND.",
        pr_droid_name: "Premium — Android",
        pr_droid_per: "/ year",
        pr_droid_note: "Billed through Google Play.",
        pr_droid_1: "Automatic scan of newly installed apps and downloads",
        pr_droid_2: "Traffic alerts without opening the app",
        pr_droid_3: "30 days of traffic history instead of 7",
        pr_droid_btn: "Get it on Google Play",
        pr_support: "Trouble paying, or a question about a charge?",

    }
};

/* Languages offered in the picker, in order. English only: the picker
   hides itself when there is nothing to pick between. */
const LANGS = [
    { code: 'en', label: 'English' }
];
const DEFAULT_LANG = 'en';
const SHOT_DIR = '/assets/bksafe/macos/';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;

    // ---------- Theme (shared with the main site) ----------
    const themeToggles = [document.getElementById('theme-toggle'), document.getElementById('mobile-theme-toggle')];
    let currentTheme = localStorage.getItem('theme') || 'light';
    root.setAttribute('data-theme', currentTheme);

    themeToggles.forEach(t => t && t.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
    }));

    // ---------- Language ----------
    const langSelects = [document.getElementById('lang-select'), document.getElementById('mobile-lang-select')].filter(Boolean);
    const supported = LANGS.map(l => l.code);

    // A stored choice wins, then whatever the visitor picked on the
    // landing page. Anything no longer offered — a 'vi' left over from
    // before it was hidden, say — falls through to the default.
    const detectLang = () => {
        // The URL wins: /es/… is the Spanish page whatever the browser
        // or a previous visit would have preferred.
        const fromUrl = window.LangUrl && window.LangUrl.fromPath(supported);
        if (fromUrl) return fromUrl;
        const saved = localStorage.getItem('bksafe-lang');
        if (saved && supported.includes(saved)) return saved;
        const site = localStorage.getItem('lang');
        if (site && supported.includes(site)) return site;
        return DEFAULT_LANG;
    };

    langSelects.forEach(sel => {
        // Nothing to choose between while only one language is offered.
        sel.hidden = LANGS.length < 2;
        sel.innerHTML = '';
        LANGS.forEach(l => {
            const opt = document.createElement('option');
            opt.value = l.code;
            opt.textContent = sel.dataset.display === 'code' ? l.code.toUpperCase() : l.label;
            sel.appendChild(opt);
        });
    });

    let currentLang = detectLang();

    const updateLanguage = (lang) => {
        const dict = i18n[lang] || i18n[DEFAULT_LANG];
        root.setAttribute('lang', lang);

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const val = dict[el.dataset.i18n];
            if (val !== undefined) el.innerHTML = val;
        });
        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            const val = dict[el.dataset.i18nAria];
            if (val !== undefined) el.setAttribute('aria-label', val);
        });

        // The policy page carries its own title/description keys, so each page
        // says which pair it wants rather than the script guessing from the URL.
        const titleKey = document.body.dataset.titleKey || 'page_title';
        const descKey = document.body.dataset.descKey || 'meta_desc';
        if (dict[titleKey]) document.title = dict[titleKey];
        const meta = document.querySelector('meta[name="description"]');
        if (meta && dict[descKey]) meta.setAttribute('content', dict[descKey]);

        langSelects.forEach(sel => { sel.value = lang; });
        paintGallery();
    };

    langSelects.forEach(sel => sel.addEventListener('change', () => {
        const lang = sel.value;
        localStorage.setItem('bksafe-lang', lang);
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
    const tabs = Array.from(document.querySelectorAll('.bk-gal-tab'));
    const galImg = document.getElementById('gal-img');
    const galTitle = document.getElementById('gal-title');
    const galCap = document.getElementById('gal-cap');

    // Keep the caption and window title in step with both the selected
    // shot and the current language, so switching either one is enough.
    function paintGallery() {
        const active = tabs.find(t => t.classList.contains('is-active'));
        if (!active || !galImg) return;
        const dict = i18n[currentLang] || i18n[DEFAULT_LANG];
        const key = active.dataset.key;
        galImg.src = SHOT_DIR + active.dataset.shot + '.webp';
        galImg.alt = 'BKSafe — ' + (dict[key + '_title'] || '');
        if (galTitle) galTitle.textContent = dict[key + '_title'] || '';
        if (galCap) galCap.textContent = dict[key + '_cap'] || '';
    }

    tabs.forEach(tab => tab.addEventListener('click', () => {
        tabs.forEach(t => {
            const on = t === tab;
            t.classList.toggle('is-active', on);
            t.setAttribute('aria-selected', String(on));
        });
        paintGallery();
    }));

    // Warm the neighbouring shots so the first few clicks feel instant.
    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
            tabs.slice(1, 6).forEach(t => { new Image().src = SHOT_DIR + t.dataset.shot + '.webp'; });
        });
    }

    updateLanguage(currentLang);

    // ---------- Copy the checksum ----------
    // One button per download card, so bind them all rather than a single id.
    document.querySelectorAll('.bk-sha').forEach(block => {
        const copyBtn = block.querySelector('.bk-copy');
        const shaValue = block.querySelector('.bk-sha-value');
        if (!copyBtn || !shaValue || !navigator.clipboard) return;
        copyBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(shaValue.textContent.trim());
                const dict = i18n[currentLang] || i18n[DEFAULT_LANG];
                copyBtn.textContent = dict.sha_copied;
                copyBtn.classList.add('is-done');
                setTimeout(() => {
                    copyBtn.textContent = (i18n[currentLang] || i18n[DEFAULT_LANG]).sha_copy;
                    copyBtn.classList.remove('is-done');
                }, 1800);
            } catch { /* clipboard refused — the text is selectable anyway */ }
        });
    });

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
