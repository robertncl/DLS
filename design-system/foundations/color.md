# Color

ACME's palette is a **monochrome base with two highlights**. Graphite builds
every surface, border, and word; **ACME Red** and **Blueprint Blue** are the
only two colors allowed to interrupt it, and each has exactly one job.
Everything else — success, warning, neutral status — stays in the base and
relies on icon and label. Components must reference **semantic tokens**
(`--acme-color-*`); primitive scales are for defining tokens, not for direct
use in product code.

## The two highlights

The base is grey. Anything that isn't grey is making a claim, and there are
only two claims worth making:

| | **ACME Red** — act & attend | **Blueprint Blue** — orient & inform |
| --- | --- | --- |
| Means | "Do this", "look here", "be careful" | "You are here", "this is known" |
| Interactive | The one primary action · danger | Links · focus ring |
| State | — | Selected rows, current page, checked controls, active tab, sorted column |
| Editorial | Kickers, rules, heading numerals, callout accents | — |
| Data | The single takeaway mark | All other marks |
| Brand | The wordmark mark | — |

The split is the whole system: **red is where the user acts, blue is where
the user is.** A control that isn't an action never turns red — this is why
checkboxes, radios, switches, selected tabs, and the current nav item are
Blueprint.

Red stays rationed by that definition alone: at most one red action per view,
plus whatever is genuinely destructive. Blue may repeat freely — orientation
is not scarce. Together they should still read as *highlights on grey*: if a
screen is more than roughly 10% red, or blue is doing decoration rather than
orientation, it is off-brand.

### What stays monochrome

Success and warning have **no highlight assigned**. They share the base's
status ink (`gray-700` / `gray-300`), which is why the icon and the label
remain load-bearing — see [badge](../components/badge.md) and
[alert](../components/alert.md). Only danger (red) and info (blue) took a
highlight, because only those two map onto "attend" and "inform".

## Primitive scales

| Scale | Anchor | Role |
| --- | --- | --- |
| Graphite `--acme-gray-*` | `900 #16191F` | The base: text, surfaces, borders, success/warning status |
| ACME Red `--acme-red-*` | `600 #C8102E` | Highlight 1: brand mark, primary action, danger, editorial marks |
| Blueprint Blue `--acme-blue-*` | `600 #2563EB` | Highlight 2: links, selection, focus, info, data |

Three scales, no more. Full values live in
[tokens/tokens.json](../tokens/tokens.json) and
[tokens/acme.css](../tokens/acme.css).

## Semantic tokens

| Token | Light | Dark | Use for |
| --- | --- | --- | --- |
| `--acme-color-canvas` | white | gray-950 | Page background |
| `--acme-color-surface` | gray-50 | gray-900 | Recessed areas, hover fills |
| `--acme-color-surface-raised` | white | gray-800 | Cards, inputs, modals |
| `--acme-color-border` | gray-200 | gray-700 | Dividers, card borders |
| `--acme-color-border-strong` | gray-300 | gray-600 | Input borders |
| `--acme-color-text` | gray-900 | gray-100 | Default text |
| `--acme-color-text-muted` | gray-600 | gray-400 | Secondary text |
| `--acme-color-text-subtle` | gray-500 | gray-400 | Placeholders, captions |
| `--acme-color-primary` (+hover/active) | red-600/700/800 | red-500/400/600 | The one primary action |
| `--acme-color-on-primary` | white | **white** | Text/icon on a primary or danger fill |
| `--acme-color-accent` | red-600 | red-**300** | Non-interactive red marks: kickers, rules, numerals, callout accents |
| `--acme-color-accent-soft` | red-50 | mixed on surface | Tinted highlight blocks |
| `--acme-color-selected` | blue-600 | blue-300 | Current page, active tab, sorted column |
| `--acme-color-selected-soft` | blue-50 | mixed on surface | Selected rows, current nav item |
| `--acme-color-link` / `-link-hover` | blue-700 / blue-800 | blue-300 / blue-200 | Inline links |
| `--acme-color-focus` | blue-500 | blue-400 | Focus ring only |
| `--acme-color-success` / `-warning` | gray-700 | gray-300 | Status text & icon — **shared base ink**, icon + label carry meaning |
| `--acme-color-danger` | red-700 | red-400 | Danger status text & icons |
| `--acme-color-danger-emphasis` | red-700 | red-500 | Danger button fills (always AA under white text) |
| `--acme-color-info` | blue-600 | blue-300 | Info status text & icons |
| `--acme-color-data` / `-data-highlight` | blue-600 / red-600 | blue-400 / red-500 | Chart marks: Blueprint carries data, red marks the one takeaway |
| `--acme-color-*-soft` / `-soft-text` | tinted pairs | mixed on surface | Badges, alerts |

**Why `--acme-color-accent` is lighter than `--acme-color-primary` in dark:**
accent marks are small text (12 px kickers, heading numerals), so they must
clear AA on canvas, surface, *and* raised surfaces. Red-500 manages only
3.9:1 on the dark canvas; red-300 clears 6.3:1 everywhere. Primary is a
*fill* under white text, so it keeps the deeper red.

**Why `--acme-color-on-primary` no longer flips.** A graphite fill has to
invert between themes — a gray-800 fill would all but vanish against a
gray-950 canvas, so it becomes a light fill with dark text. A **fixed-hue**
fill doesn't: red-600 reads on white and red-500 reads on near-black, both
under white text. Primary and danger-emphasis are red in both themes, so
`on-primary` is white in both. Still reference the token rather than
hardcoding white.

`--acme-color-data-highlight` is deliberately **not** an alias of accent: it
marks chart geometry (a 3:1 non-text threshold) and its pairing with
`--acme-color-data` is CVD-validated. Change the two data tokens in step.

## Rules

1. **Two highlights, one job each.** Red = act/attend, blue = orient/inform.
   If a color choice doesn't fit one of those sentences, the answer is grey.
2. **Red is rationed.** One primary (red) action per view; additional red
   means danger. Screens >~10% red are off-brand.
3. **Selection is never red.** Checked inputs, selected rows, the current
   page, the active tab, and the sorted column are Blueprint — they report
   state, not action.
4. **Icon and label stay load-bearing.** Success and warning render in the
   *same* ink, so the icon plus the word are the only way meaning survives
   for those two (WCAG 1.4.1). A badge or alert without one fails review.
   Meaning never travels by color alone for the others either.
5. **Soft pairs stay together.** `*-soft` backgrounds take only their matching
   `*-soft-text` foreground; `selected-soft` takes `selected`.
6. **Focus is always Blueprint** at `--acme-color-focus` — never the
   wordmark's red, and never restyled per component.
7. **Don't hardcode hex values** in product code; if a needed color is
   missing, add a semantic token.

## Contrast (verified)

All combinations below are measured, not aspirational. AA normal text needs
≥ 4.5:1; UI components/graphics need ≥ 3:1.

| Pair | Ratio |
| --- | --- |
| Text (gray-900) on canvas (white) | 17.6:1 |
| Muted text (gray-600) on white | 7.5:1 |
| Subtle text (gray-500) on white | 4.7:1 |
| White on primary (red-600) | 5.9:1 |
| Accent (red-600) on canvas / surface | 5.9 / 5.6:1 |
| Link (blue-700) on canvas / surface | 6.7 / 6.4:1 |
| Link hover (blue-800) on canvas | 8.7:1 |
| Selected (blue-600) on canvas / surface / selected-soft | 5.2 / 4.9 / 4.7:1 |
| White on danger-emphasis (red-700) | 7.8:1 |
| Info (blue-600) on white | 5.2:1 |
| Status ink (gray-700) on white — success/warning alike | 10.4:1 |
| Badge soft-text (gray-800) on soft background (gray-100) | 12.8:1 |
| Danger soft-text (red-700) on danger-soft (red-50) | 7.1:1 |
| Info soft-text (blue-700) on info-soft (blue-50) | 6.1:1 |
| Dark: text (gray-100) on canvas (gray-950) | 17.4:1 |
| Dark: muted (gray-400) on canvas / surface | 7.4 / 6.8:1 |
| Dark: white on primary (red-500) | 4.9:1 |
| Dark: accent (red-300) on canvas / surface / raised | 8.5 / 7.8 / 6.3:1 |
| Dark: link & selected (blue-300) on canvas / surface / raised | 8.9 / 8.1 / 6.6:1 |
| Dark: selected (blue-300) on selected-soft | 6.7:1 |
| Dark: status ink (gray-300) on canvas | 12.7:1 |
| Dark: badge soft-text (gray-200) on soft background (gray-800) | 11.5:1 |

The chart pair (`data`/`data-highlight`) is additionally validated for
color-vision deficiency: worst-case adjacent ΔE 92.3 (light) / 67.2 (dark)
against a ≥ 12 target, and both marks hold ≥ 3:1 against their surface.

Red and blue differ in lightness as well as hue, so they stay separable under
all three common CVD types. Even so, the system never relies on red-vs-blue
alone: red carries a verb, blue carries a position or an underline.

## Theming

`acme.css` declares `color-scheme: light dark` and follows the system
preference by default. Hosts may pin a theme with
`<html data-theme="light|dark">`. Both themes ship in one stylesheet; there is
no separate dark build.

Both highlights **lighten** in dark mode (red-600 → red-500, blue-700 →
blue-300) so they stay legible on a near-black canvas, but neither inverts:
a red fill is still a red fill with white text in both themes. The dark
bookend slides in the deck pattern pin the dark accent explicitly, because
their background is fixed Graphite regardless of the page theme.
