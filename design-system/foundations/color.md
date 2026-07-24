# Color

ACME's palette is **warm paper with a single clay highlight**. Oat — a warm
neutral — builds every surface, border, and word; **Clay**, a warm coral, is
the one accent that carries emphasis and orientation. Two functional hues sit
underneath for status only: **Brick** (danger) and **Sky** (info). Everything
else, including success and warning, stays in the neutral base and leans on
icon and label. Components reference **semantic tokens** (`--acme-color-*`);
primitive scales are for defining tokens, not for direct use in product code.

## The idea

The system is modernist and editorial: a paper canvas, ink text, a serif
display face, and one warm accent used sparingly. Restraint is the point —
color appears where it means something, and the rest is warm neutral.

| Role | Color | Where |
| --- | --- | --- |
| Base | **Oat** (warm neutral) | Canvas, surfaces, borders, body text, success/warning |
| Highlight | **Clay** (coral) | Primary action, links, selection, focus, editorial marks, the wordmark mark, the chart takeaway |
| Danger | **Brick** (true red) | Destructive actions, error status — kept visibly distinct from Clay |
| Info | **Sky** (muted slate blue) | Informational status only |

Clay is the whole personality of the interface, so it is **rationed**: one
primary (clay) action per view, and orientation cues (current page, selected
row, active tab). If a screen is more than roughly 10–15% clay, it has stopped
being editorial. Danger and info are functional, never decorative.

### Clay does double duty — action *and* orientation

Earlier ACME palettes split emphasis across two hues. The modernist system
collapses to one: Clay marks both **where you act** (primary button, links)
and **where you are** (current page, selected row, checked control, active
tab). With a single accent, meaning never travels by hue alone anyway, so
selection also carries a non-color cue — an underline, a fill, `aria-current`,
or `aria-selected`.

### What stays neutral

Success and warning have **no hue** — they render in the warm neutral ink
(`--acme-color-success` / `-warning` = oat-600 / oat-300), so the icon and the
label carry the meaning (see [badge](../components/badge.md),
[alert](../components/alert.md)). Only danger (Brick) and info (Sky) earn a
functional color, because only those two need to shout or to cross-reference.

## Primitive scales

| Scale | Anchor | Role |
| --- | --- | --- |
| Oat `--acme-gray-*` | `900 #1B1911` | The base: paper, ink, borders, neutral status |
| Clay `--acme-clay-*` | `500 #CC785C` | The one highlight: action, orientation, editorial, data takeaway |
| Brick `--acme-red-*` | `700 #97291B` | Danger only — a true red, distinct from Clay |
| Sky `--acme-sky-*` | `700 #305875` | Info only — a muted slate blue |

Full values live in [tokens/tokens.json](../tokens/tokens.json) and
[tokens/acme.css](../tokens/acme.css). (The neutral scale keeps the
`--acme-gray-*` custom-property names; the values are warm.)

## Semantic tokens

| Token | Light | Dark | Use for |
| --- | --- | --- | --- |
| `--acme-color-canvas` | oat-50 (paper) | oat-950 | Page background |
| `--acme-color-surface` | oat-100 | oat-900 | Recessed areas, hover fills |
| `--acme-color-surface-raised` | oat-0 (warm white) | oat-800 | Cards, inputs, modals |
| `--acme-color-border` | oat-200 | oat-700 | Dividers, card borders |
| `--acme-color-border-strong` | oat-300 | oat-600 | Input borders |
| `--acme-color-text` | oat-900 (ink) | oat-100 | Default text |
| `--acme-color-text-muted` | oat-600 | oat-400 | Secondary text |
| `--acme-color-text-subtle` | oat-500 | oat-400 | Placeholders, captions |
| `--acme-color-primary` (+hover/active) | clay-600/700/800 | clay-600/700/800 | The one primary action |
| `--acme-color-on-primary` | warm white | warm white | Text/icon on a primary or danger fill |
| `--acme-color-accent` | clay-700 | clay-**300** | Editorial marks: kickers, rules, numerals, callout accents |
| `--acme-color-accent-soft` | clay-50 | mixed on surface | Tinted highlight blocks |
| `--acme-color-selected` | clay-600 | clay-300 | Current page, active tab, sorted column |
| `--acme-color-selected-soft` | clay-50 | mixed on surface | Selected rows, current nav item |
| `--acme-color-link` / `-link-hover` | clay-700 / clay-800 | clay-300 / clay-200 | Inline links |
| `--acme-color-focus` | clay-600 | clay-400 | Focus ring only |
| `--acme-color-success` / `-warning` | oat-600 | oat-300 | Status text & icon — **neutral ink**, icon + label carry meaning |
| `--acme-color-danger` | brick-700 | brick-400 | Danger status text & icons |
| `--acme-color-danger-emphasis` | brick-700 | brick-500 | Danger button fills (AA under white text) |
| `--acme-color-info` | sky-700 | sky-300 | Info status text & icons |
| `--acme-color-data` / `-data-highlight` | oat-600 / clay-600 | oat-400 / clay-300 | Chart marks: neutral bars, Clay marks the one takeaway |
| `--acme-color-*-soft` / `-soft-text` | tinted pairs | mixed on surface | Badges, alerts |

**Why `--acme-color-accent` lightens to clay-300 in dark:** accent marks are
small text (12 px kickers, heading numerals), so they must clear AA on canvas,
surface, *and* raised surfaces. Clay-600 manages only ~2.5:1 on the dark
canvas; clay-300 clears 6.8:1 even on a raised surface. Primary is a *fill*
under white text, so it keeps the deeper clay-600 in both themes.

**Why `--acme-color-on-primary` doesn't flip.** A neutral fill would have to
invert between themes to stay legible; a fixed-hue clay fill does not.
Clay-600 reads under white text on any canvas, so primary and danger-emphasis
are clay/brick with white text in both themes. Still reference the token
rather than hardcoding white.

**Why Brick is separate from Clay.** Danger must not read as "the accent."
Brick is a truer, cooler red than Clay's coral; paired with the mandatory
warning icon and verb, a destructive action never hides among primary ones.

## Rules

1. **One highlight.** Clay is the only accent — action and orientation both.
   If a color choice isn't "this is the action / this is where you are / this
   is the editorial mark," the answer is neutral.
2. **Clay is rationed.** One primary (clay) action per view; orientation cues
   may repeat but stay quiet. Screens washed in clay are off-brand.
3. **Danger is Brick, never Clay**, and always carries an icon + verb.
4. **Success and warning are neutral ink** — the icon plus the word are the
   only differentiators (WCAG 1.4.1). A badge or alert without one fails review.
5. **Soft pairs stay together.** `*-soft` backgrounds take only their matching
   `*-soft-text`; `selected-soft` takes `selected`.
6. **Focus is Clay** at `--acme-color-focus`, never restyled per component.
7. **Don't hardcode hex values** in product code; add a semantic token if one
   is missing.

## Contrast (verified)

All combinations below are measured, not aspirational. AA normal text needs
≥ 4.5:1; UI components/graphics need ≥ 3:1.

| Pair | Ratio |
| --- | --- |
| Text (oat-900) on canvas (oat-50) | 15.4:1 |
| Muted (oat-600) on canvas / surface | 6.4 / 5.9:1 |
| Subtle (oat-500) on canvas / surface / raised | 5.1 / 4.7 / 5.6:1 |
| White on primary (clay-600) | 4.8:1 |
| White on primary hover (clay-700) | 6.9:1 |
| Accent / link (clay-700) on canvas / raised | 6.0 / 6.6:1 |
| Link hover (clay-800) on canvas | 8.1:1 |
| Selected (clay-600) on canvas / selected-soft | 4.2 / 4.3:1 |
| Danger (brick-700) on canvas · white on danger-emphasis | 7.0 · 7.9:1 |
| Info (sky-700) on canvas · info-soft-text (sky-800) on info-soft | 6.6 · 8.5:1 |
| Neutral status (oat-600) on canvas · badge soft-text (oat-800) on soft | 6.4 · 11.8:1 |
| Data (oat-600) · data-highlight (clay-600) on canvas (≥3) | 6.4 · 4.2:1 |
| Dark: text (oat-100) on canvas / raised | 15.4 / 11.8:1 |
| Dark: muted (oat-400) on canvas / raised | 7.3 / 5.6:1 |
| Dark: white on primary (clay-600) | 4.8:1 |
| Dark: accent / link (clay-300) on canvas / surface / raised | 8.9 / 8.2 / 6.8:1 |
| Dark: selected (clay-300) on selected-soft | 6.4:1 |
| Dark: danger (brick-400) on canvas · white on danger-emphasis (brick-500) | 5.0 · 5.0:1 |
| Dark: info (sky-300) on canvas | 8.3:1 |
| Dark: data (oat-400) · data-highlight (clay-300) on canvas (≥3) | 7.3 · 6.9:1 |

**Charts and color-vision deficiency.** The data pair is a neutral bar plus a
Clay takeaway, differentiated by hue *and* a mandatory direct label on the
highlighted mark; both marks independently clear 3:1 on their surface. Because
the takeaway is always labelled, the chart never relies on telling clay from
grey — the label carries it under any CVD.

## Theming

`acme.css` declares `color-scheme: light dark` and follows the system
preference by default. Hosts may pin a theme with
`<html data-theme="light|dark">`. Both themes ship in one stylesheet; there is
no separate dark build.

Clay **lightens** in dark mode for text-weight marks (clay-700 → clay-300) so
they stay legible on the dark Oat canvas, but the primary *fill* stays clay-600
with white text in both themes — a fixed hue doesn't need to invert. The dark
bookend slides in the deck pattern pin the dark accent explicitly, because
their ground is fixed dark Oat regardless of the page theme.
