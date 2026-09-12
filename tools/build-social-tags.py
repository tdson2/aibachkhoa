#!/usr/bin/env python3
"""Rebuild the Open Graph / Twitter block on every page.

Each page ends up with one consistent block: og:type, og:site_name, title,
description, url, a 1200x630 card with declared dimensions and alt text,
plus the four twitter:* tags. Existing social tags are stripped first so
the script can be re-run.
"""
import pathlib, re, sys, html as htmllib

PUB = pathlib.Path('/home/ailab/Desktop/aibachkhoa/public')
SITE = 'https://aibachkhoa.com'

# page (relative to public/) -> og card slug
PRODUCTS = ['bksafe', 'genvideo', 'chefeasy', 'jemul', 'chilly-novels',
            'castle-of-ancients', 'iron-line', 'mini-castle', 'novaryn',
            'dungeon-blade']
IOS = {'genvideo', 'chefeasy', 'novaryn'}

pages = {'index.html': 'home'}
for p in PRODUCTS:
    pages[f'{p}/index.html'] = p
    pages[f'{p}/policy/index.html'] = p          # policy shares the product card
    if p in IOS:
        pages[f'{p}/ios/index.html'] = f'{p}-ios'

SOCIAL_LINE = re.compile(
    r'^[ \t]*<meta (?:property="og:[^"]*"|name="twitter:[^"]*")[^>]*>[ \t]*\n', re.M)

def tag(html, pattern, default=''):
    m = re.search(pattern, html)
    return m.group(1) if m else default

changed = 0
for rel, slug in sorted(pages.items()):
    f = PUB / rel
    if not f.exists():
        print(f'missing page: {rel}', file=sys.stderr); sys.exit(1)
    src = f.read_text(encoding='utf-8')

    title = tag(src, r'<title>([^<]*)</title>')
    desc = tag(src, r'<meta name="description" content="([^"]*)"')
    url = tag(src, r'<link rel="canonical" href="([^"]*)"')
    if not (title and desc and url):
        print(f'{rel}: missing title/description/canonical', file=sys.stderr); sys.exit(1)

    # Keep the hand-written og:title if there is one; it is usually the page
    # title without the " | AIBachKhoa" suffix, which reads better in a card.
    og_title = tag(src, r'<meta property="og:title" content="([^"]*)"') \
        or title.split(' | ')[0]
    og_desc = tag(src, r'<meta property="og:description" content="([^"]*)"') or desc

    card = f'{SITE}/assets/og/{slug}.png'
    alt = htmllib.escape(og_title, quote=True)

    block = f'''    <meta property="og:type" content="website">
    <meta property="og:site_name" content="AIBachKhoa">
    <meta property="og:title" content="{og_title}">
    <meta property="og:description" content="{og_desc}">
    <meta property="og:url" content="{url}">
    <meta property="og:image" content="{card}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="{alt}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{og_title}">
    <meta name="twitter:description" content="{og_desc}">
    <meta name="twitter:image" content="{card}">
'''

    out = SOCIAL_LINE.sub('', src)
    anchor = re.search(r'^([ \t]*<link rel="canonical" href="[^"]*">[ \t]*\n)', out, re.M)
    if not anchor:
        print(f'{rel}: no canonical anchor', file=sys.stderr); sys.exit(1)
    out = out[:anchor.end()] + block + out[anchor.end():]

    if out != src:
        f.write_text(out, encoding='utf-8')
        changed += 1

print(f'social tags rebuilt on {changed} pages')
