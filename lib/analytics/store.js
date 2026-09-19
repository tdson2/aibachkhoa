/* Append-only event storage for the first-party analytics.
 *
 * Events are written one JSON object per line into a file named after the
 * day, e.g. data/events/2026-09-20.jsonl. A line is never rewritten and a
 * file is never reopened for anything but appending, which is what makes the
 * store safe to run in the read-only container: exactly one directory has to
 * be writable — the mounted volume — and a crash can lose at most the last
 * unflushed batch.
 *
 * Reading ninety days of raw lines on every dashboard refresh would not be
 * affordable, so a finished day is rolled up once into data/rollups/<day>.json
 * and read from there afterwards. Only the current day is ever scanned live.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..');
const DATA_DIR = process.env.ANALYTICS_DIR || path.join(ROOT, 'data');
const EVENTS_DIR = path.join(DATA_DIR, 'events');
const ROLLUPS_DIR = path.join(DATA_DIR, 'rollups');

const RETENTION_DAYS = Number(process.env.ANALYTICS_RETENTION_DAYS || 90);
const FLUSH_MS = 2000;
const FLUSH_LINES = 64;

let buffer = [];
let flushTimer = null;
let writable = null;   // null = not probed yet, then true/false
let lastError = '';

/* The container mounts one volume and nothing else, so a missing or
 * unwritable directory is a configuration problem worth reporting once
 * rather than an exception on every single request. */
function ensureWritable() {
    if (writable !== null) return writable;
    try {
        fs.mkdirSync(EVENTS_DIR, { recursive: true });
        fs.mkdirSync(ROLLUPS_DIR, { recursive: true });
        const probe = path.join(DATA_DIR, '.write-probe');
        fs.writeFileSync(probe, String(Date.now()));
        fs.unlinkSync(probe);
        writable = true;
    } catch (err) {
        writable = false;
        lastError = err.message;
        console.error('[analytics] storage is not writable, collection disabled:', err.message);
    }
    return writable;
}

function dayKey(ts) {
    // UTC throughout: a report that silently shifts when the host's timezone
    // changes is worse than one that is an hour off from local midnight.
    return new Date(ts).toISOString().slice(0, 10);
}

function eventFile(day) { return path.join(EVENTS_DIR, day + '.jsonl'); }
function rollupFile(day) { return path.join(ROLLUPS_DIR, day + '.json'); }

function flush() {
    if (flushTimer) { clearTimeout(flushTimer); flushTimer = null; }
    if (!buffer.length || !ensureWritable()) { buffer = []; return; }

    // The batch can straddle midnight, so group by day before appending.
    const byDay = new Map();
    for (const event of buffer) {
        const day = dayKey(event.ts);
        if (!byDay.has(day)) byDay.set(day, []);
        byDay.get(day).push(JSON.stringify(event));
    }
    buffer = [];

    for (const [day, lines] of byDay) {
        try {
            fs.appendFileSync(eventFile(day), lines.join('\n') + '\n');
        } catch (err) {
            lastError = err.message;
            console.error('[analytics] append failed:', err.message);
        }
    }
}

function write(event) {
    if (!ensureWritable()) return false;
    buffer.push(event);
    if (buffer.length >= FLUSH_LINES) flush();
    else if (!flushTimer) flushTimer = setTimeout(flush, FLUSH_MS).unref();
    return true;
}

/* Reads one day of raw events. The current day is always read from the
 * .jsonl; a line that fails to parse is skipped rather than throwing, because
 * the last line of the live file can legitimately be half-written. */
function readDay(day) {
    flushIfToday(day);
    let raw;
    try {
        raw = fs.readFileSync(eventFile(day), 'utf8');
    } catch (_) {
        return [];
    }
    const out = [];
    for (const line of raw.split('\n')) {
        if (!line) continue;
        try { out.push(JSON.parse(line)); } catch (_) { /* torn line */ }
    }
    return out;
}

function flushIfToday(day) {
    if (day === dayKey(Date.now())) flush();
}

function readRollup(day) {
    try {
        return JSON.parse(fs.readFileSync(rollupFile(day), 'utf8'));
    } catch (_) {
        return null;
    }
}

function writeRollup(day, value) {
    if (!ensureWritable()) return;
    try {
        // Write-then-rename: a reader never sees a partial rollup.
        const tmp = rollupFile(day) + '.tmp';
        fs.writeFileSync(tmp, JSON.stringify(value));
        fs.renameSync(tmp, rollupFile(day));
    } catch (err) {
        console.error('[analytics] rollup write failed:', err.message);
    }
}

/* Drops event and rollup files past the retention window. Called at boot and
 * once a day after that: nothing here needs to be precise, it only has to
 * stop the volume growing without bound. */
function prune() {
    if (!ensureWritable()) return;
    const cutoff = dayKey(Date.now() - RETENTION_DAYS * 86400000);
    for (const [dir, suffix] of [[EVENTS_DIR, '.jsonl'], [ROLLUPS_DIR, '.json']]) {
        let names;
        try { names = fs.readdirSync(dir); } catch (_) { continue; }
        for (const name of names) {
            if (!name.endsWith(suffix)) continue;
            if (name.slice(0, 10) >= cutoff) continue;
            try { fs.unlinkSync(path.join(dir, name)); } catch (_) { /* gone already */ }
        }
    }
}

function status() {
    ensureWritable();
    let days = 0, bytes = 0;
    try {
        for (const name of fs.readdirSync(EVENTS_DIR)) {
            if (!name.endsWith('.jsonl')) continue;
            days++;
            bytes += fs.statSync(path.join(EVENTS_DIR, name)).size;
        }
    } catch (_) { /* nothing stored yet */ }
    return { writable: writable === true, dir: DATA_DIR, days, bytes, retentionDays: RETENTION_DAYS, lastError };
}

// A container stop is a SIGTERM; flushing there is the difference between
// losing two seconds of events and losing them silently.
for (const signal of ['SIGTERM', 'SIGINT']) {
    process.on(signal, () => { flush(); process.exit(0); });
}
process.on('exit', flush);

module.exports = {
    write, flush, readDay, readRollup, writeRollup, prune, status,
    dayKey, DATA_DIR, RETENTION_DAYS,
    hasRollup: (day) => fs.existsSync(rollupFile(day))
};
