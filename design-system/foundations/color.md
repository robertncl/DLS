# Color

ACME's palette is **a cool blue-white page with a single Cobalt highlight**,
and it ships as a **light theme only**. Slate — a blue-tinted neutral — builds
every surface, border, and word; **Cobalt**, a clear confident blue, is the
one accent that carries emphasis and orientation. Two functional hues sit
underneath for status only: **Red** (danger) and **Teal** (info). Everything
else, including success and warning, stays in the Slate base and leans on
icon and label. Components reference **semantic tokens** (`--acme-color-*`);
primitive scales are for defining tokens, not for direct use in product code.

## The idea

The system is modernist and editorial: a light blue-white canvas, navy ink
text, a serif display face, and one blue accent used with intent. The whole
interface sits in one cool hue family — the base is blue-tinted, the accent is
saturated blue — so color only has to change *intensity* to signal meaning.

| Role | Color | Where |
| --- | --- | --- |
| Base | **Slate** (blue-tinted neutral) | Canvas, surfaces, borders, body text, success/warning |
| Highlight | **Cobalt** (blue) | Primary action, links, selection, focus, editorial marks, the wordmark mark, the chart takeaway |
| Danger | **Red** (true red) | Destructive actions, error status — the one warm hue, so it can't be missed |
| Info | **Teal** (green-leaning) | Informational status only — kept off Cobalt so info never reads as an action |

Cobalt is the whole personality of the interface, so it is **rationed**: one
primary (cobalt) action per view, and orientation cues (current page, selected
row, active tab). If a screen is more than roughly 10–15% saturated cobalt, it
has stopped being editorial. The pale Slate surfaces are already blue; let
them do the atmosphere and keep Cobalt for meaning. Danger and info are
functional, never decorative.

### Cobalt does double duty — action *and* orientation

Cobalt marks both **where you act** (primary button, links) and **where you
are** (current page, selected row, checked control, active tab). With a single
accent, meaning never travels by hue alone, so selection also carries a
non-color cue — an underline, a fill, `aria-current`, or `aria-selected`.

### Why info is Teal, not blue

In most systems info is blue. Here blue already means "act" and "you are
here", so a blue info alert would read as a call to action. Teal is close
enough to sit comfortably in the cool palette and far enough — green-leaning,
lower chroma — to be told apart from Cobalt next to it.

### What stays neutral

Success and warning have **no hue** — they render in the Slate ink
(`--acme-color-success` / `-warning` = slate-600), so the icon and the label
carry the meaning (see [badge](../components/badge.md),
[alert](../components/alert.md)). Only danger (Red) and info (Teal) earn a
functional color, because only those two need to shout or to cross-reference.

## Primitive scales

| Scale | Anchor | Role |
| --- | --- | --- |
| Slate `--acme-gray-*` | `900 #111A2B` | The base: blue-white canvas, navy ink, borders, neutral status |
| Cobalt `--acme-blue-*` | `500 #2F6BE4` | The one highlight: action, orientation, editorial, data takeaway |
| Red `--acme-red-*` | `700 #A42222` | Danger only |
| Teal `--acme-teal-*` | `700 #105C58` | Info only |

Full values live in [tokens/tokens.json](../tokens/tokens.json) and
[tokens/acme.css](../tokens/acme.css). (The neutral scale keeps the
`--acme-gray-*` custom-property names; the values are blue-tinted.)

## Semantic tokens

| Token | Value | Use for |
| --- | --- | --- |
| `--acme-color-canvas` | slate-50 `#F5F8FC` | Page background — a cool blue-white |
| `--acme-color-surface` | slate-100 `#E9EFF7` | Recessed areas, hover fills |
| `--acme-color-surface-raised` | slate-0 (white) | Cards, inputs, modals |
| `--acme-color-border` | slate-200 | Dividers, card borders |
| `--acme-color-border-strong` | slate-400 | Input/control boundaries — ≥3:1 on every surface |
| `--acme-color-text` | slate-900 (navy ink) | Default text |
| `--acme-color-text-muted` | slate-600 | Secondary text |
| `--acme-color-text-subtle` | slate-500 | Placeholders, captions |
| `--acme-color-primary` (+hover/active) | cobalt-600/700/800 | The one primary action |
| `--acme-color-on-primary` | white | Text/icon on a primary or danger fill |
| `--acme-color-accent` | cobalt-700 | Editorial marks: kickers, rules, numerals, callout accents |
| `--acme-color-accent-soft` | cobalt-50 | Tinted highlight blocks |
| `--acme-color-selected` | cobalt-700 | Current page, active tab, sorted column |
| `--acme-color-selected-soft` | cobalt-50 | Selected rows, current nav item |
| `--acme-color-link` / `-link-hover` | cobalt-700 / cobalt-800 | Inline links |
| `--acme-color-focus` | cobalt-600 | Focus ring only |
| `--acme-color-success` / `-warning` | slate-600 | Status text & icon — **neutral ink**, icon + label carry meaning |
| `--acme-color-danger` / `-danger-emphasis` | red-700 | Danger status text, icons, and button fills |
| `--acme-color-info` | teal-700 | Info status text & icons |
| `--acme-color-data` / `-data-highlight` | slate-400 / cobalt-600 | Chart marks: slate bars, Cobalt marks the one takeaway |
| `--acme-color-*-soft` / `-soft-text` | tinted pairs | Badges, alerts |

**Why the fill is cobalt-600 but text marks are cobalt-700.** Primary is a
*fill* under white text, and cobalt-600 clears 6.4:1 there while still reading
as bright, saturated blue. Accent, link, and selected are *text* — often 12 px
kickers or an active tab label — so they step down to cobalt-700, which holds
≥7:1 on every surface including the recessed slate-100.

**Why `selected` is held to the text threshold.** `--acme-color-selected` is
rendered as **text** — the active tab label, the sorted column header, the
current nav item — so it needs 4.5:1, not the 3:1 UI threshold. The checker
asserts the text threshold for this token. The 2 px tab underline drawn from
the same token is a non-text indicator and clears 3:1 comfortably.

**Why `border-strong` is slate-400.** Field and control boundaries are UI
components under WCAG 1.4.11 and need 3:1 against *both* the control fill and
the page behind it. Slate-400 is the lightest stop that clears 3:1 on the
canvas, the recessed surface (the switch track), and white.

**Why Red is the only warm hue.** Everything else in the system is cool. A
true red against a blue-white page is the strongest contrast of *temperature*
available, so a destructive action never hides among primary ones — and it
still carries the mandatory warning icon and verb.

## Light theme only

`acme.css` declares `color-scheme: light` and ships no dark theme: there are
no `prefers-color-scheme` overrides and no `data-theme` switch. Native
controls, scrollbars, and form widgets render in their light variants on
every OS setting.

The one dark surface in the system is deliberate and local: the **navy deck
bookends** (`.acme-slide--dark`, slate-950) used for title, section, and
closing slides. They pin their own colors — text slate-100, meta slate-300,
footer slate-400, accent cobalt-300 — because the page's cobalt-700 accent
would sit at only 2.2:1 on navy. Those pins are checked too.

## Rules

1. **One highlight.** Cobalt is the only accent — action and orientation
   both. If a color choice isn't "this is the action / this is where you are /
   this is the editorial mark," the answer is Slate.
2. **Cobalt is rationed.** One primary (cobalt) action per view; orientation
   cues may repeat but stay quiet. Screens washed in saturated blue are
   off-brand — the pale Slate surfaces already carry the blue mood.
3. **Danger is Red, never Cobalt**, and always carries an icon + verb.
4. **Info is Teal, never Cobalt**, so it can't be mistaken for an action.
5. **Success and warning are neutral ink** — the icon plus the word are the
   only differentiators (WCAG 1.4.1). A badge or alert without one fails review.
6. **Soft pairs stay together.** `*-soft` backgrounds take only their matching
   `*-soft-text`; `selected-soft` takes `selected`.
7. **Focus is Cobalt** at `--acme-color-focus`, never restyled per component.
8. **Don't hardcode hex values** in product code; add a semantic token if one
   is missing.

## Contrast (verified)

All combinations below are measured, not aspirational — they are generated
from the tokens themselves. AA normal text needs ≥ 4.5:1 (WCAG 1.4.3); UI
component boundaries and meaningful graphics need ≥ 3:1 (1.4.11).

Re-verify after any token change (exits non-zero on a regression):

```sh
design-system/scripts/check-contrast.py
```

| Pair | Ratio |
| --- | --- |
| Text (slate-900) on canvas / surface / raised | 16.3 / 15.1 / 17.4:1 |
| Muted (slate-600) on canvas / surface / raised | 7.3 / 6.8 / 7.8:1 |
| Subtle (slate-500) on canvas / surface / raised | 5.8 / 5.4 / 6.2:1 |
| White on primary (cobalt-600) / primary-hover (cobalt-700) | 6.4 / 8.4:1 |
| Accent / link / selected (cobalt-700) on canvas / surface / raised | 7.9 / 7.3 / 8.4:1 |
| Link hover (cobalt-800) on canvas | 10.0:1 |
| Selected (cobalt-700) on selected-soft | 7.6:1 |
| Danger (red-700) on canvas · white on danger-emphasis | 7.0 · 7.4:1 |
| Info (teal-700) on canvas · info-soft-text on info-soft | 7.3 · 9.3:1 |
| Neutral status (slate-600) on canvas · badge soft-text on soft | 7.3 · 12.2:1 |
| **Focus ring** (cobalt-600) vs canvas / raised *(needs 3)* | 6.0 / 6.4:1 |
| **Input border** (slate-400) vs raised / canvas *(needs 3)* | 4.1 / 3.9:1 |
| **Switch track** (slate-400) vs surface *(needs 3)* | 3.6:1 |
| Data (slate-400) · data-highlight (cobalt-600) vs canvas *(needs 3)* | 3.9 · 6.0:1 |
| Navy slide: title (slate-100) · accent (cobalt-300) · meta (slate-300) | 16.3 · 8.4 · 8.5:1 |
| Navy slide: footer (slate-400) | 4.6:1 |

**Charts and color-vision deficiency.** The data pair is a slate bar plus a
Cobalt takeaway, differentiated by hue, by lightness (the takeaway is the
darker, stronger mark), *and* by a mandatory direct label on the highlighted
mark. Both marks independently clear 3:1 on the canvas. Because the takeaway
is always labelled, the chart never relies on telling blue from grey.
