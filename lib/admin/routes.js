/* The /admin routes.
 *
 * The pages live in admin/ rather than public/ on purpose: anything under
 * public/ is served by express.static before any of this runs, is picked up
 * by the sitemap builder, and is translated into eleven languages by the
 * i18n builder. A dashboard wants none of those three things.
 */
const fs = require('fs');
const path = require('path');
const auth = require('./auth');
const stats = require('../analytics/stats');
const store = require('../analytics/store');

const DIR = path.join(__dirname, '..', '..', 'admin');
const MAX_LOGIN_BODY = 2048;

function page(name) {
    return fs.readFileSync(path.join(DIR, name), 'utf8');
}

function sendHtml(res, html, status) {
    res.status(status || 200);
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    // Nothing here may be cached by a proxy, and the browser back button must
    // not hand a signed-out person a dashboard full of numbers.
    res.setHeader('Cache-Control', 'no-store, must-revalidate');
    res.setHeader('X-Robots-Tag', 'noindex, nofollow');
    res.setHeader('Referrer-Policy', 'same-origin');
    res.send(html);
}

function readBody(req) {
    return new Promise((resolve) => {
        let raw = '';
        req.on('data', chunk => {
            raw += chunk;
            if (raw.length > MAX_LOGIN_BODY) { raw = ''; req.destroy(); }
        });
        req.on('end', () => resolve(raw));
        req.on('error', () => resolve(''));
    });
}

function fieldFrom(raw, contentType, name) {
    if (String(contentType || '').includes('application/json')) {
        try { return String(JSON.parse(raw)[name] || ''); } catch (_) { return ''; }
    }
    for (const part of raw.split('&')) {
        const index = part.indexOf('=');
        if (index < 0) continue;
        if (decodeURIComponent(part.slice(0, index)) !== name) continue;
        return decodeURIComponent(part.slice(index + 1).replace(/\+/g, ' '));
    }
    return '';
}

const NOTICE = {
    bad: 'Wrong password. Try again.',
    throttled: 'Too many attempts. Wait fifteen minutes and try again.',
    out: 'Signed out.'
};

function loginPage(req, res, status) {
    const notice = NOTICE[req.query.e];
    const html = page('login.html').replace('{{NOTICE}}', notice
        ? '<p class="notice" role="alert">' + notice + '</p>'
        : '');
    sendHtml(res, html, status || 200);
}

function setupPage(res) {
    sendHtml(res, page('setup.html'), 503);
}

function csv(rows) {
    const escape = (value) => {
        const text = String(value == null ? '' : value);
        return /[",\n]/.test(text) ? '"' + text.replace(/"/g, '""') + '"' : text;
    };
    return rows.map(row => row.map(escape).join(',')).join('\n') + '\n';
}

function mount(app) {
    app.get('/admin', (req, res) => {
        if (!auth.configured()) return setupPage(res);
        if (!auth.isAuthed(req)) return loginPage(req, res, 401);
        sendHtml(res, page('dashboard.html'));
    });

    // The stylesheet and the script carry no data and are needed by the
    // sign-in screen itself, so they are not behind the cookie.
    app.get('/admin/:file(admin.css|admin.js)', (req, res) => {
        const file = path.join(DIR, req.params.file);
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('X-Robots-Tag', 'noindex, nofollow');
        res.sendFile(file);
    });

    app.post('/admin/login', (req, res) => {
        if (!auth.configured()) return setupPage(res);
        if (auth.throttled(req)) return res.redirect(303, '/admin?e=throttled');

        readBody(req).then(raw => {
            const given = fieldFrom(raw, req.headers['content-type'], 'password');
            if (!given || !auth.check(given)) {
                auth.recordFailure(req);
                return res.redirect(303, '/admin?e=bad');
            }
            auth.clearFailures(req);
            auth.issue(req, res);
            res.redirect(303, '/admin');
        });
    });

    app.post('/admin/logout', (req, res) => {
        auth.clear(req, res);
        res.redirect(303, '/admin?e=out');
    });

    app.get('/api/admin/stats', (req, res) => {
        if (!auth.isAuthed(req)) return res.status(401).json({ error: 'unauthorized' });
        res.setHeader('Cache-Control', 'no-store');
        res.json(stats.report(req.query.days));
    });

    /* An export exists so the numbers are never trapped behind this page —
     * a spreadsheet is still the right tool for a question nobody planned a
     * chart for. */
    app.get('/api/admin/export.csv', (req, res) => {
        if (!auth.isAuthed(req)) return res.status(401).json({ error: 'unauthorized' });
        const report = stats.report(req.query.days);
        const rows = [['day', 'visits', 'visitors', 'pageviews', 'actions', 'downloads']];
        for (const point of report.series) {
            rows.push([point.day, point.visits, point.visitors, point.pageviews, point.actions, point.downloads]);
        }
        res.setHeader('Content-Type', 'text/csv; charset=utf-8');
        res.setHeader('Content-Disposition', 'attachment; filename="aibachkhoa-' + report.range.from + '_' + report.range.to + '.csv"');
        res.send(csv(rows));
    });

    app.get('/api/admin/health', (req, res) => {
        if (!auth.isAuthed(req)) return res.status(401).json({ error: 'unauthorized' });
        res.setHeader('Cache-Control', 'no-store');
        res.json(store.status());
    });
}

module.exports = { mount };
