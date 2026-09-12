#!/usr/bin/env python3
"""Converts the site's artwork to WebP and rewrites every reference to it.

    npm run webp

Two things are deliberately left as PNG/JPEG:

  * favicons and apple-touch-icons, where WebP support is still patchy;
  * the Open Graph cards under assets/og/, because some social scrapers
    still refuse a WebP preview.

For each remaining image both a lossless and a quality-88 lossy WebP are
encoded and the smaller one kept. Pixel art and flat UI screenshots almost
always come out smaller (and pixel-exact) as lossless; photographic frames
come out far smaller as lossy. Anything wider than MAX_EDGE is scaled down
first — nothing on the site is displayed near that size.
"""
import pathlib, re, sys, io
from PIL import Image

ROOT = pathlib.Path(__file__).resolve().parent.parent
PUB = ROOT / 'public'
MAX_EDGE = 1600

# Referenced by <link rel="icon"> / apple-touch-icon, so they stay as-is.
KEEP = {
    'assets/logo.png',
    'assets/apps/bksafe-icon.png',
    'assets/apps/genvideo-icon.png',
    'assets/apps/chefeasy/icon.jpg',
    'assets/apps/novels/icon.png',
    'assets/bksafe/icon-256.png',
    'assets/games/castle-of-ancients/icon.png',
    'assets/games/dungeon-blade/icon.png',
    'assets/games/iron-line/icon-256.png',
    'assets/games/mini-castle/icon.png',
    'assets/games/novaryn/icon.png',
}


def encode(img):
    """Return (bytes, kind) for whichever WebP encoding comes out smaller."""
    best = None
    for kwargs, kind in (({'lossless': True, 'method': 6}, 'lossless'),
                         ({'quality': 88, 'method': 6}, 'q88')):
        buf = io.BytesIO()
        img.save(buf, 'WEBP', **kwargs)
        if best is None or buf.tell() < best[0].tell():
            best = (buf, kind)
    return best[0].getvalue(), best[1]


def main():
    images = [p for p in PUB.joinpath('assets').rglob('*')
              if p.suffix.lower() in ('.png', '.jpg', '.jpeg')
              and 'og' not in p.relative_to(PUB).parts
              and str(p.relative_to(PUB)) not in KEEP]

    before = after = 0
    converted = []          # (old relative path, new relative path)

    for src in sorted(images):
        rel = str(src.relative_to(PUB))
        img = Image.open(src)
        img = img.convert('RGBA' if img.mode in ('RGBA', 'LA', 'P') else 'RGB')
        if max(img.size) > MAX_EDGE:
            img.thumbnail((MAX_EDGE, MAX_EDGE), Image.LANCZOS)

        data, kind = encode(img)
        dst = src.with_suffix('.webp')
        dst.write_bytes(data)

        old_size = src.stat().st_size
        before += old_size
        after += len(data)
        converted.append((rel, str(dst.relative_to(PUB))))
        src.unlink()
        print(f'  {rel:<52} {old_size//1024:>6} KB -> {len(data)//1024:>5} KB  {kind}')

    # ---- rewrite references -------------------------------------------------
    # Exact-path replacement, so the favicon PNGs that share a directory with
    # converted files are never touched.
    text_files = [p for p in PUB.rglob('*')
                  if p.suffix in ('.html', '.css', '.js')] + [ROOT / 'server.js']
    subs = {f'/{old}': f'/{new}' for old, new in converted}
    subs.update({old: new for old, new in converted})

    touched = 0
    for f in text_files:
        s = orig = f.read_text(encoding='utf-8')
        for old, new in subs.items():
            if old in s:
                s = s.replace(old, new)
        # Galleries build their own paths: SHOT_DIR + name + '.png'. Every
        # file in those directories was just converted, so the extension
        # literal has to follow.
        s = re.sub(r"(SHOT_DIR \+ [^;]*?\+ )'\.(png|jpg)'", r"\1'.webp'", s)
        s = re.sub(r"^(const SHOT_EXT = )'\.(png|jpg)';", r"\1'.webp';", s, flags=re.M)
        if s != orig:
            f.write_text(s, encoding='utf-8')
            touched += 1

    print(f'\n{len(converted)} images -> WebP, {touched} source files updated')
    print(f'{before//1024//1024} MB -> {after//1024//1024} MB '
          f'({100 - after * 100 // max(before, 1)}% smaller)')

    # ---- nothing may still point at a file that no longer exists ------------
    missing = set()
    for f in text_files:
        s = f.read_text(encoding='utf-8')
        for m in re.finditer(r'["\'(]\s*(/assets/[^"\')\s]+\.(?:png|jpg|jpeg))', s):
            if not (PUB / m.group(1).lstrip('/')).exists():
                missing.add(f'{f.relative_to(ROOT)}: {m.group(1)}')
    if missing:
        print('\nDANGLING REFERENCES:', file=sys.stderr)
        for m in sorted(missing):
            print('  ' + m, file=sys.stderr)
        sys.exit(1)
    print('no dangling image references')


if __name__ == '__main__':
    main()
