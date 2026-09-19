/* Authentication for /admin.
 *
 * One password, held in the environment, exchanged for a signed cookie. No
 * user table, no session store: there is exactly one person who reads this
 * dashboard, and a stateless token keeps the container free of yet another
 * piece of mutable state.
 *
 * The signing key is derived from the password rather than configured
 * separately. That means changing the password invalidates every cookie that
 * was issued under the old one, which is the behaviour anyone expects, and
 * it keeps the deployment down to a single secret.
 */
const crypto = require('crypto');

const COOKIE = 'abk_admin';
const TTL_MS = 12 * 3600 * 1000;
const MAX_ATTEMPTS = 8;
const ATTEMPT_WINDOW = 15 * 60 * 1000;

function password() {
    return process.env.ADMIN_PASSWORD || '';
}

function configured() {
    return password().length > 0;
}

function secret() {
    if (process.env.ADMIN_SECRET) return process.env.ADMIN_SECRET;
    return crypto.createHmac('sha256', 'aibachkhoa-admin-v1').update(password()).digest('hex');
}

function sign(expires) {
    return crypto.createHmac('sha256', secret()).update(String(expires)).digest('base64url');
}

const equal = (a, b) => {
    const left = Buffer.from(String(a));
    const right = Buffer.from(String(b));
    return left.length === right.length && crypto.timingSafeEqual(left, right);
};

function parseCookies(header) {
    const out = {};
    for (const part of String(header || '').split(';')) {
        const index = part.indexOf('=');
        if (index < 0) continue;
        out[part.slice(0, index).trim()] = decodeURIComponent(part.slice(index + 1).trim());
    }
    return out;
}

function isAuthed(req) {
    if (!configured()) return false;
    const token = parseCookies(req.headers.cookie)[COOKIE];
    if (!token) return false;
    const [expires, signature] = token.split('.');
    if (!expires || !signature) return false;
    if (!/^\d+$/.test(expires) || Number(expires) < Date.now()) return false;
    return equal(signature, sign(expires));
}

function secure(req) {
    // Behind the tunnel the connection to the app is plain HTTP while the
    // connection the browser made is not; the forwarded header is what says
    // whether Secure can be set without locking the cookie out.
    return req.secure || String(req.headers['x-forwarded-proto'] || '').split(',')[0].trim() === 'https';
}

function issue(req, res) {
    const expires = Date.now() + TTL_MS;
    const value = expires + '.' + sign(expires);
    const parts = [
        COOKIE + '=' + value,
        'Path=/',
        'HttpOnly',
        'SameSite=Lax',
        'Max-Age=' + Math.floor(TTL_MS / 1000)
    ];
    if (secure(req)) parts.push('Secure');
    res.setHeader('Set-Cookie', parts.join('; '));
}

function clear(req, res) {
    const parts = [COOKIE + '=', 'Path=/', 'HttpOnly', 'SameSite=Lax', 'Max-Age=0'];
    if (secure(req)) parts.push('Secure');
    res.setHeader('Set-Cookie', parts.join('; '));
}

/* Attempt throttling, in memory. The dashboard is one password away from a
 * list of what every visitor did, so an unthrottled form is not acceptable
 * even on a site nobody is attacking yet. */
const attempts = new Map();
setInterval(() => {
    const cutoff = Date.now() - ATTEMPT_WINDOW;
    for (const [key, list] of attempts) {
        const kept = list.filter(t => t > cutoff);
        if (kept.length) attempts.set(key, kept); else attempts.delete(key);
    }
}, ATTEMPT_WINDOW).unref();

function attemptKey(req) {
    const ip = req.headers['cf-connecting-ip'] || req.headers['x-real-ip']
        || String(req.headers['x-forwarded-for'] || '').split(',')[0].trim()
        || req.socket.remoteAddress || '';
    return crypto.createHash('sha256').update(String(ip)).digest('hex').slice(0, 16);
}

function throttled(req) {
    const now = Date.now();
    const list = (attempts.get(attemptKey(req)) || []).filter(t => t > now - ATTEMPT_WINDOW);
    return list.length >= MAX_ATTEMPTS;
}

function recordFailure(req) {
    const key = attemptKey(req);
    const now = Date.now();
    const list = (attempts.get(key) || []).filter(t => t > now - ATTEMPT_WINDOW);
    list.push(now);
    attempts.set(key, list);
}

function clearFailures(req) {
    attempts.delete(attemptKey(req));
}

function check(candidate) {
    // Both sides are hashed first so that the comparison is constant-time
    // whatever the length of what was typed.
    const expected = crypto.createHash('sha256').update(password()).digest();
    const given = crypto.createHash('sha256').update(String(candidate || '')).digest();
    return crypto.timingSafeEqual(expected, given);
}

module.exports = { configured, isAuthed, issue, clear, check, throttled, recordFailure, clearFailures, COOKIE };
