#!/usr/bin/env python3
"""Builds the 1200x630 Open Graph card for every page.

Facebook, LinkedIn, Zalo and X all want a landscape image of at least
1200x630 at roughly 1.91:1. The screenshots and store banners lying around
the repo are none of those shapes, so instead of pointing og:image at raw
artwork this composes a card per product: icon, name and tagline on the
left, the product's own artwork on the right.

    npm run og

Output goes to public/assets/og/<slug>.png and is safe to re-run.
"""
import pathlib
from PIL import Image, ImageDraw, ImageFont

ROOT = pathlib.Path(__file__).resolve().parent.parent
PUB = ROOT / 'public'
OUT = PUB / 'assets' / 'og'

W, H = 1200, 630
CREAM = (235, 234, 220)
INK = (39, 38, 42)
INK_SOFT = (85, 83, 92)
ACCENT = (71, 123, 255)
CARD = (255, 255, 255)

F = '/usr/share/fonts/truetype/dejavu/'
font_name = ImageFont.truetype(F + 'DejaVuSans-Bold.ttf', 50)
font_name_sm = ImageFont.truetype(F + 'DejaVuSans-Bold.ttf', 38)
font_tag = ImageFont.truetype(F + 'DejaVuSans.ttf', 24)
font_foot = ImageFont.truetype(F + 'DejaVuSans-Bold.ttf', 19)

# slug -> (display name, tagline, icon, artwork)
CARDS = {
    'home': ('AIBachKhoa', 'AI everywhere, making life easier.',
             'assets/logo.png', 'assets/bksafe/macos/01-he-thong-tong-quan.png'),
    'bksafe': ('BKSafe', 'Security for Mac, Windows, Linux and Android.',
               'assets/apps/bksafe-icon.png', 'assets/bksafe/macos/01-he-thong-tong-quan.png'),
    'genvideo': ('GenVideo', 'Turn a topic into a finished video.',
                 'assets/logo.png', 'assets/genvideo/windows-forge.png'),
    'genvideo-ios': ('GenVideo', 'A finished video, made on iPhone and iPad.',
                     'assets/logo.png', 'assets/genvideo/android-forge.png'),
    'chefeasy': ('ChefEasy', 'Cook a recipe one step at a time.',
                 'assets/apps/chefeasy/icon.jpg', 'assets/apps/chefeasy/android/shot-02.png'),
    'chefeasy-ios': ('ChefEasy', 'Step-by-step cooking on iPhone and iPad.',
                     'assets/apps/chefeasy/icon.jpg', 'assets/apps/chefeasy/ios/shot-02.png'),
    'jemul': ('JeMul', 'Play Java ME games on Android and in the browser.',
              'assets/apps/jemulwap/icon.png', 'assets/apps/jemulwap/shot-03-player.png'),
    'chilly-novels': ('Chilly Novels', 'Download once, read offline forever.',
                      'assets/apps/novels/icon.png', 'assets/apps/novels/shot-02.png'),
    'castle-of-ancients': ('Castle of Ancients', 'Hand-drawn pixel tower defense.',
                           'assets/games/castle-of-ancients/icon.png',
                           'assets/games/castle-of-ancients/shot-01.png'),
    'iron-line': ('Iron Line', 'Hold the line across 12 battlefields.',
                  'assets/games/iron-line/icon.png', 'assets/games/iron-line/shot-01.jpg'),
    'mini-castle': ('Mini Castle', 'Castle defense with an RTS economy.',
                    'assets/games/mini-castle/icon.png', 'assets/games/mini-castle/shot-01.png'),
    'novaryn': ('Novaryn', 'One thumb, endless waves.',
                'assets/games/novaryn/icon.png', 'assets/games/novaryn/shot-01.png'),
    'novaryn-ios': ('Novaryn', 'Endless waves on iPhone and iPad.',
                    'assets/games/novaryn/icon.png', 'assets/games/novaryn/shot-01.png'),
    'dungeon-blade': ('Dungeon of the Fallen Blade', 'A hundred depths, one blade.',
                      'assets/games/dungeon-blade/icon.png',
                      'assets/games/dungeon-blade/shot-01.png'),
}


def rounded(img, radius):
    """Clip an RGBA image to a rounded rectangle."""
    mask = Image.new('L', img.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, img.size[0] - 1, img.size[1] - 1],
                                           radius=radius, fill=255)
    out = img.convert('RGBA')
    out.putalpha(mask)
    return out


def wrap(draw, text, font, max_w):
    lines, cur = [], ''
    for word in text.split():
        trial = f'{cur} {word}'.strip()
        if draw.textlength(trial, font=font) <= max_w:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = word
    if cur:
        lines.append(cur)
    return lines


def build(slug, name, tagline, icon_rel, art_rel):
    card = Image.new('RGB', (W, H), CREAM)
    d = ImageDraw.Draw(card)

    has_art = art_rel is not None and (PUB / art_rel).exists()
    text_w = 470 if has_art else 900

    # ---- artwork panel on the right, on a white card so any letterboxing
    # reads as a deliberate frame rather than a gap.
    if has_art:
        bx0, by0, bx1, by1 = 560, 56, 1144, 574
        panel = Image.new('RGB', (bx1 - bx0, by1 - by0), CARD)
        art = Image.open(PUB / art_rel).convert('RGB')
        art.thumbnail((bx1 - bx0 - 32, by1 - by0 - 32), Image.LANCZOS)
        panel.paste(art, ((panel.width - art.width) // 2, (panel.height - art.height) // 2))
        card.paste(rounded(panel, 20), (bx0, by0), rounded(panel, 20))

    # ---- icon
    y = 78
    if icon_rel and (PUB / icon_rel).exists():
        icon = Image.open(PUB / icon_rel).convert('RGBA')
        icon.thumbnail((104, 104), Image.LANCZOS)
        card.paste(rounded(icon, 22), (72, y), rounded(icon, 22))
        y += icon.height + 40

    # ---- name
    f = font_name if len(name) <= 16 else font_name_sm
    for line in wrap(d, name, f, text_w):
        d.text((72, y), line, font=f, fill=INK)
        y += f.size + 10

    # ---- accent rule
    y += 14
    d.rectangle([72, y, 132, y + 5], fill=ACCENT)
    y += 34

    # ---- tagline
    for line in wrap(d, tagline, font_tag, text_w):
        d.text((72, y), line, font=font_tag, fill=INK_SOFT)
        y += font_tag.size + 9

    # ---- footer wordmark
    d.text((72, H - 76), 'A I B A C H K H O A . C O M', font=font_foot, fill=INK_SOFT)

    OUT.mkdir(parents=True, exist_ok=True)
    path = OUT / f'{slug}.png'
    card.save(path, 'PNG', optimize=True)
    return path


if __name__ == '__main__':
    total = 0
    for slug, (name, tag, icon, art) in CARDS.items():
        p = build(slug, name, tag, icon, art)
        print(f'  {p.relative_to(PUB)}  {p.stat().st_size // 1024} KB')
        total += 1
    print(f'{total} Open Graph cards at {W}x{H}')
