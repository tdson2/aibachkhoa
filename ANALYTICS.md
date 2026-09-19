# Analytics and the /admin dashboard

First-party analytics for aibachkhoa.com. No third party, no cookies, no IP
addresses on disk. A beacon on every page reports what happened, the server
appends it to a file, and `/admin` reads it back.

## Deploying it

Two things are required, both on the server:

| Setting | Why |
|---|---|
| `ADMIN_PASSWORD` | the one password for `/admin`. Without it the dashboard refuses to open and explains itself instead of shipping a default. |
| a writable `ANALYTICS_DIR` | the container filesystem is read-only, so the data needs a volume. Nothing is recorded without one. |

`docker-compose.yml` already declares both — the `analytics-data` volume and
`ANALYTICS_DIR: /app/data`. Put the password in a `.env` file beside it:

```
ADMIN_PASSWORD=$(openssl rand -base64 24)
```

Then `docker compose up -d --build`. Leaving the password unset does not stop
the site; it only leaves the dashboard closed.

Changing the password signs out every open session, by design: the signing key
is derived from it.

`/admin` is reached through the same tunnel as the rest of the site, so it is
only as exposed as the site is. `robots.txt` disallows it, every response
carries `X-Robots-Tag: noindex`, and eight failed passwords from one address
lock that address out for fifteen minutes.

## The beacon

`public/analytics.js` is added to every page by `npm run track`, which is part
of `npm run build`. Run it after adding a page or after `npm run i18n`; it
skips pages that already have the tag.

Anyone can opt out permanently, which is worth doing in your own browser so
your visits are not in your own numbers:

```js
localStorage.setItem('abk_optout', '1')
```

Visitors sending Global Privacy Control are never recorded.

## Seeing it before there is traffic

```
ANALYTICS_DIR=./data-demo npm run seed -- 45
ANALYTICS_DIR=./data-demo ADMIN_PASSWORD=demo npm start
```

The seeder refuses to write into a directory that already holds events, so
invented numbers can never end up mixed into real ones.

## What the numbers mean

- **Visit** — one person in one sitting. Thirty minutes idle starts a new one.
- **Visitor** — one browser, identified by a random string it generated for
  itself and keeps in its own `localStorage`. It matches no person and no
  email, and it travels nowhere.
- **Action** — a click or a preference change. Scroll marks and time reports
  are measurements the page takes by itself and are not counted here.
- **Download** — one confirmed request for an installer, counted on the
  request for the file, so a link pasted into a chat counts too. Checksums and
  resumed transfers do not; the same address asking twice within half an hour
  counts once.
- **Bounce** — a visit that opened one page, clicked nothing, read less than
  half of it and stayed under thirty seconds.
- **Time on a page** — foreground time only. A tab left open behind a window
  contributes nothing.
- **Country** — from the `CF-IPCountry` header the Cloudflare tunnel sets on
  every request it forwards. Reached without the tunnel — over the published
  port, or from the host itself — it reads as unknown, which is why your own
  visits show no country.

### Leads, prospects, passers-by

Every visitor carries a score. The rules are in `lib/analytics/stats.js`
(`POINTS`) and the dashboard prints them from the same constants, so the
explanation on screen cannot drift from what the code does.

- **Lead** — clicked an email or contact link. A flag, not a threshold:
  asking to be contacted is not a matter of degree.
- **Prospect** — started a download, clicked through to an app store, or
  scored 25 or more.
- **Passer-by** — everyone else.

Scoring spans the whole range on screen, so coming back on another day counts
for something. Changing a rule changes the whole history, because segments are
computed on read and never stored.

## How it is stored

```
<ANALYTICS_DIR>/events/YYYY-MM-DD.jsonl    one event per line, append only
<ANALYTICS_DIR>/rollups/YYYY-MM-DD.json    that day, folded once
```

A finished day is rolled up the first time it is read and never parsed again;
only today is read live. Files past `ANALYTICS_RETENTION_DAYS` (90) are
deleted at boot and once a day after that.

Roughly 200 bytes an event, so a thousand visits a day is about 1 MB a day and
under 100 MB at full retention.

## The pieces

| Path | What it does |
|---|---|
| `public/analytics.js` | the beacon in the browser |
| `lib/analytics/collect.js` | `POST /api/collect` and the download counter |
| `lib/analytics/enrich.js` | user agent, country, source, page classification |
| `lib/analytics/store.js` | the append-only files and retention |
| `lib/analytics/stats.js` | rollups, the range merge and the visitor model |
| `lib/admin/auth.js` | password, signed cookie, attempt throttling |
| `lib/admin/routes.js` | `/admin`, `/api/admin/stats`, the CSV export |
| `admin/` | the dashboard itself — outside `public/` so it is never served as a file, never crawled, never translated |
| `tools/build-analytics-tag.js` | puts the beacon on every page (`npm run track`) |
| `tools/seed-analytics.js` | invented traffic for previewing (`npm run seed`) |
