repo: robertncl/DLS
branch: master (v5.0.0, PR #12)
path: design-system

## Last sync
date: 2026-11-06
commit: d1665db

### Updated in this sync
- Palette moved to the repo's v5 theme: Graphite (`--acme-gray-*`, re-cut cool neutral on a white canvas) is the base and the **ink primary**; Blue (`--acme-blue-*`, now with 100/200) is interaction — links, focus, checked, selected rows, chart takeaway — and info; Green (`--acme-green-*`) and Amber (`--acme-amber-*`) are new for success and warning; Signal Red is the brand signature and danger. New semantic tokens: `surface-hover`, `border-control`, and `success-/warning-/danger-/info-border`.
- Removed (approved by Robert): the Crimson ramp (`--acme-crimson-50/300/600/700/800`), `--acme-color-danger-emphasis-active`, the serif display face and its files (`fonts/SourceSerif4-Bold.woff2`, `fonts/SourceSerif4-BoldItalic.woff2`, `fonts/Inter-BoldItalic.woff2`, `assets/Fonts/SourceSerif4-OFL.txt`). Styrene B and Tiempos Headline are no longer in the stacks — the repo sets everything in Inter.
- Type: one family. Headings Inter 600 with tracking tokens (`--acme-tracking-tight/-snug/-caps`), UI weight 500, `--acme-font-display` aliases the sans stack. Text styles re-cut; `card-title` and `table-header` added.
- Shape and elevation: radii 4/6/10/12 (was 4/8/12/16); softer graphite-tinted shadows; scrim Graphite 950 at 45%.
- `bundle.css` rebuilt from v5 `acme.css`: ink primary with shadow, `border-control` secondary, tinted alerts with a matching hairline and no 3px stripe, rectangular badges with a status hairline, sentence-case table header band, ink tab underline with a count pill, app bar with nav beside the wordmark and an actions slot, recessed card and modal footers, upright wordmark "A".
- Components: `Topbar` renders its children in the new `.acme-topbar__actions` slot (`bundle.js` patched for Topbar only). READMEs, types and previews for Button, Wordmark, Alert, Badge, Card, Table, Tabs, Topbar, Choice and Modal re-worded.
- Guideline cards: `colors-stone.html` and `colors-crimson.html` replaced by `colors-graphite.html`, `colors-green.html` and `colors-amber.html`; signal, blue, semantic, status, soft sets, data, type, radius, elevation and wordmark cards redone; voice, spacing and doc cards touched up. README, cover and the catalog template's price style updated.

## Sync history
- 2026-11-06 — synced to master@d1665db (PR #12): Graphite + ink primary + Blue interaction v5. Includes PR #11 (self-hosted Inter) in passing.
- 2026-10-19 — synced to PR #10 (a811be5): Stone + Signal Red v4. Skipped the intermediate Slate + Cobalt v3 (cbec176) entirely.
- 2026-09-01T11:36 — Clay 600–900 deepened; Oat re-cut across stops 100–950; Brick 300–600 re-cut; semantic remaps.
- 2026-08 — pulled upstream back from the monochrome (Graphite/Red/Blueprint) experiment to the warm-paper Oat + Clay + Brick + Sky system.

## Screen map
| Screen / file | Built from |
| --- | --- |
| tokens.json (→ tokens.css) | design-system/tokens/tokens.json, design-system/tokens/acme.css (tokens section), design-system/tokens/fonts.css |
| components/bundle.css | design-system/tokens/acme.css (everything but tokens) |
| components/<group>/*.jsx → components/bundle.js, components/<Comp>/*.d.ts + README.md + preview.html | design-system/components/*.md |
| guidelines/*.html (specimen cards) | design-system/foundations/*.md, design-system/brand/*.md |
| templates/catalog-app/ | design-system/patterns/*.md, previews/src/*.html |
| README.md | design-system/README.md, brand/identity.md, brand/voice-and-tone.md, foundations/*.md |

## Local deviations (intentional, do not overwrite on sync)
- Motion tokens carry `/* @kind other */` annotations for this project's compiler.
- `.acme-slide--dark` applies per-element red-300 overrides (kicker, list marker, section numeral) instead of upstream's `--acme-color-accent` re-declaration, which registered as a ghost token here.
- Tokens live in `tokens.json` (list format the design-system page reads), not DTCG.
- Tokens the repo does not define, kept and re-pointed: `color-mark` (wordmark fill, red-600 — the repo hard-codes red-600 in `.acme-wordmark__mark`), `scrim` (Graphite 950 at 45% — the repo's inline `rgb(11 13 16 / 0.45)`, named). Wordmark `onDark` lifts the mark to red-500, matching the repo's dark-slide pin.
- Disabled buttons and inputs use the `surface` fill with `text-subtle` ink (4.9:1), not the repo's 45% / 60% opacity.
- The focus ring does not change a control's radius (the repo adds `border-radius: radius-sm` on `:focus-visible`).
- Components: status icons in Badge (on by default for status variants; the repo makes them optional) and Alert (wrapped in `.acme-alert__icon`); Alert `role="alert"` for danger only, explicit `info` variant; Badge explicit `neutral` variant; Wordmark `onDark`; Tabs roving tabindex + arrow keys + `aria-controls`; Field wires id / `aria-describedby`; Modal focus trap, Escape, initial focus, `aria-labelledby`; Table caption fully visually hidden; `.acme-btn--icon` size kept.
- Catalog template built on `.acme-*` classes (opaque app bar, no glass, no pills on buttons, no press scaling).
- Fonts: self-hosted under `fonts/` (OFL): Inter 400–700 as in the repo, plus JetBrains Mono 400/600, which the repo names but does not ship.
- Dropped with earlier syncs (no longer apply): the Clay ramp re-cuts, the clay-900 chart takeaway, the dark theme and its warm/black shadows, Crimson and `danger-emphasis-active` (v5), the Styrene B / Tiempos Headline stand-ins (v5).
