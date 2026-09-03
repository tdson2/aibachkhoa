# Temporarily hidden products

iTask, CrewAI, CrewOSINT and CrewChat were taken off the site on 3 September 2026
at the owner's request. **CrewAI Platform was deliberately kept** — it was not on
the list. Nothing was deleted from the codebase; this folder holds everything
needed to put the four back.

`homepage-blocks.html` contains the exact markup removed from `public/index.html`,
each block labelled with where it belongs:

| Block | Goes back into |
|---|---|
| `card-itask`, `card-crewai`, `card-crewosint` | top of the `Web & desktop` `.product-grid`, before `<!-- 01 CrewAI Platform -->` |
| `card-crewchat` | same grid, before `<!-- 02 BKSafe for macOS -->` |
| `hero-slide-itask` | `#hero-carousel .carousel-viewport`, before `.slide--platform` |
| `hero-dot-itask` | `.carousel-dots`, as the first `.dot` after the active one |
| `hero-btn-itask` | `.hero-actions`, after the "Explore products" button |
| `cta-buttons` | `.cta-actions`, replacing the single "Explore products" button |
| `footer-products` | footer `Products` column, replacing its two current links |

## Also to undo

- **Card numbers.** CrewAI Platform is currently `01` and BKSafe for macOS `02`;
  they were `04` and `06`. The restored cards are `01`, `02`, `03` and `05`.
- **Filter chip counts** in `#product-filter`: `Everything` 13 → 17,
  `Web & desktop` 2 → 6.
- **Footer links on the product pages.** Each `Other products` column lost its
  iTask / CrewAI / CrewOSINT / CrewChat entries. `public/bksafe/index.html` was
  down to one link afterwards, so it was refilled with Chilly Novels and the
  games — trim that back when the web products return.
- **Copy in `public/script.js`**, changed in all 12 languages. The keys still
  holding the old product names (`cta_try`, `cta_crew`, `itask_desc`,
  `crew_desc`, `osint_desc`, `chat_desc`, `action_plans`, `action_console`,
  `action_osint`, `action_chat`, and the matching `tag_*` / `feat_*`) were left
  untouched, so only these three need reverting:

  - `hero_subtitle` — was "iTask manages your tasks. CrewAI orchestrates
    autonomous agents that automate complex workflows."
  - `meta_desc` — was "AIBachKhoa builds practical AI tools: iTask for task
    management and CrewAI for orchestrating AI agents that automate workflows."
  - `products_sub` — the product count, currently thirteen, back to seventeen.

  `git log -p public/script.js` has the previous wording for every language.

Nothing in `public/` links to the four any more, so no dead links are being
served while they are off.
