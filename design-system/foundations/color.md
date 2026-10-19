# Color

ACME's palette is **a quiet Stone page with a single Signal Red highlight**,
and it ships as a **light theme only**. Stone — a near-neutral grey with a
whisper of warmth — builds every surface, border, and word; **Signal Red**, a
clear scarlet, is the one accent that carries emphasis and orientation. Two
functional hues sit underneath for status only: **Crimson** (danger) and
**Blue** (info). Everything else, including success and warning, stays in the
Stone base and leans on icon and label. Components reference **semantic
tokens** (`--acme-color-*`); primitive scales are for defining tokens, not for
direct use in product code.

## The idea

The system is modernist and editorial: a light near-neutral canvas, dark ink
text, a serif display face, and one red accent used with intent. The base
carries just enough warmth to sit with the accent — a blue-tinted page would
vibrate against red — but stays low-chroma so the red is the only color that
reads as color.

| Role | Color | Where |
| --- | --- | --- |
| Base | **Stone** (near-neutral, chroma ≤ 0.015) | Canvas, surfaces, borders, body text, success/warning |
| Highlight | **Signal Red** (scarlet) | Primary action, links, selection, focus, editorial marks, the wordmark mark, the chart takeaway |
| Danger | **Crimson** (deep, berry-leaning red) | Destructive actions, error status |
| Info | **Blue** | Informational status only — the one cool hue, so info never reads as an action |

Signal Red is the whole personality of the interface, so it is **rationed**:
one primary (red) action per view, and orientation cues (current page,
selected row, active tab). Red reads as alarm sooner than blue did, so the
ration is tighter: if a screen is more than roughly 10% saturated red, it has
stopped being editorial. Selected rows and the current nav item take the pale
`red-50` tint, never a solid. Danger and info are functional, never
decorative.

### Signal Red does double duty — action *and* orientation

Signal Red marks both **where you act** (primary button, links) and **where
you are** (current page, selected row, checked control, active tab). With a
single accent, meaning never travels by hue alone, so selection also carries a
non-color cue — an underline, a fill, `aria-current`, or `aria-selected`.

### Why danger is Crimson, not Signal Red

Red now means "act". Danger moves to Crimson — deeper and shifted toward
berry — so a destructive button never looks like the primary one. The two are
close in lightness (crimson-700 vs red-600 is only 1.5:1), so hue is not
trusted to carry the difference on its own:

- Danger **always** carries its icon and a specific verb ("Delete 12
  products").
- One solid action per view means a Crimson button and a Signal Red button
  never sit side by side — a destructive action is either the one solid
  action of a confirmation step, or not solid at all.

### Why info is Blue

In v3 blue meant "act", so info was pushed to Teal. Blue no longer means act,
so info returns to the hue people expect — the retired Cobalt stops — and it
is the one cool color in the system, about as far from Signal Red as a hue
can get.

### What stays neutral

Success and warning have **no hue** — they render in the Stone ink
(`--acme-color-success` / `-warning` = stone-600), so the icon and the label
carry the meaning (see [badge](../components/badge.md),
[alert](../components/alert.md)). Only danger (Crimson) and info (Blue) earn
a functional color, because only those two need to shout or to
cross-reference.

## Primitive scales

| Scale | Anchor | Role |
| --- | --- | --- |
| Signal Red `--acme-red-*` | `600 #C91C15` | The one highlight: action, orientation, editorial, data takeaway |
| Stone `--acme-gray-*` | `900 #1F1915` | The base: canvas, ink, borders, neutral status |
| Crimson `--acme-crimson-*` | `700 #8E1846` | Danger only |
| Blue `--acme-blue-*` | `700 #1A47A6` | Info only |

Full values live in [tokens/tokens.json](../tokens/tokens.json) and
[tokens/acme.css](../tokens/acme.css). The neutral scale keeps the
`--acme-gray-*` custom-property names. Stone keeps v3 Slate's exact OKLab
lightness at every stop, so every neutral pairing lands where it did.

**Migrating from v3.** Semantic token names are unchanged, so code that uses
only `--acme-color-*` picks the new theme up with no edits. Primitives moved:
`--acme-red-*` is now the highlight (it was danger), danger is
`--acme-crimson-*`, `--acme-blue-*` now holds info (it was the highlight), and
`--acme-teal-*` is gone. Anything that referenced a primitive directly must be
re-pointed — which rule 8 below already forbids in product code.

## Semantic tokens

| Token | Value | Use for |
| --- | --- | --- |
| `--acme-color-canvas` | stone-50 `#F9F7F6` | Page background |
| `--acme-color-surface` | stone-100 `#F1EEEC` | Recessed areas, hover fills |
| `--acme-color-surface-raised` | stone-0 (white) | Cards, inputs, modals |
| `--acme-color-border` | stone-200 | Dividers, card borders |
| `--acme-color-border-strong` | stone-400 | Input/control boundaries — ≥3:1 on every surface |
| `--acme-color-text` | stone-900 (ink) | Default text |
| `--acme-color-text-muted` | stone-600 | Secondary text |
| `--acme-color-text-subtle` | stone-500 | Placeholders, captions |
| `--acme-color-primary` (+hover/active) | red-600/700/800 | The one primary action |
| `--acme-color-on-primary` | white | Text/icon on a primary or danger fill |
| `--acme-color-accent` | red-700 | Editorial marks: kickers, rules, numerals, callout accents |
| `--acme-color-accent-soft` | red-50 | Tinted highlight blocks |
| `--acme-color-selected` | red-700 | Current page, active tab, sorted column |
| `--acme-color-selected-soft` | red-50 | Selected rows, current nav item |
| `--acme-color-link` / `-link-hover` | red-700 / red-800 | Inline links |
| `--acme-color-focus` | red-600 | Focus ring only |
| `--acme-color-success` / `-warning` | stone-600 | Status text & icon — **neutral ink**, icon + label carry meaning |
| `--acme-color-danger` / `-danger-emphasis` | crimson-700 | Danger status text, icons, and button fills |
| `--acme-color-danger-emphasis-hover` | crimson-800 | Danger button hover — one shade deeper, never a brightness filter |
| `--acme-color-info` | blue-700 | Info status text & icons |
| `--acme-color-data` / `-data-highlight` | stone-400 / red-600 | Chart marks: stone bars, Signal Red marks the one takeaway |
| `--acme-color-*-soft` / `-soft-text` | tinted pairs | Badges, alerts |

**Why the fill is red-600 but text marks are red-700.** Primary is a *fill*
under white text, and red-600 clears 5.7:1 there while still reading as a
bright, saturated red. Accent, link, and selected are *text* — often 12 px
kickers or an active tab label — so they step down to red-700, which holds
≥6.4:1 on every surface including the recessed stone-100.

**Why `selected` is held to the text threshold.** `--acme-color-selected` is
rendered as **text** — the active tab label, the sorted column header, the
current nav item — so it needs 4.5:1, not the 3:1 UI threshold. The checker
asserts the text threshold for this token. The 2 px tab underline drawn from
the same token is a non-text indicator and clears 3:1 comfortably.

**Why `border-strong` is stone-400.** Field and control boundaries are UI
components under WCAG 1.4.11 and need 3:1 against *both* the control fill and
the page behind it. Stone-400 is the lightest stop that clears 3:1 on the
canvas, the recessed surface (the switch track), and white.

## Light theme only

`acme.css` declares `color-scheme: light` and ships no dark theme: there are
no `prefers-color-scheme` overrides and no `data-theme` switch. Native
controls, scrollbars, and form widgets render in their light variants on
every OS setting.

The one dark surface in the system is deliberate and local: the **dark deck
bookends** (`.acme-slide--dark`, stone-950) used for title, section, and
closing slides. They pin their own colors — text stone-100, meta stone-300,
footer stone-400, accent red-300, wordmark mark red-500 — because the page's
red-700 accent would sit at only 2.5:1 on the dark ground. Those pins are
checked too.

## Rules

1. **One highlight.** Signal Red is the only accent — action and orientation
   both. If a color choice isn't "this is the action / this is where you are /
   this is the editorial mark," the answer is Stone.
2. **Signal Red is rationed.** One primary (red) action per view; orientation
   cues may repeat but stay quiet (tints, underlines — never solid fills).
   Screens washed in saturated red are off-brand.
3. **Danger is Crimson, never Signal Red**, and always carries an icon + verb.
4. **Info is Blue, never Signal Red**, so it can't be mistaken for an action.
5. **Success and warning are neutral ink** — the icon plus the word are the
   only differentiators (WCAG 1.4.1). A badge or alert without one fails review.
6. **Soft pairs stay together.** `*-soft` backgrounds take only their matching
   `*-soft-text`; `selected-soft` takes `selected`.
7. **Focus is Signal Red** at `--acme-color-focus`, never restyled per
   component.
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
| Text (stone-900) on canvas / surface / raised | 16.3 / 15.1 / 17.4:1 |
| Muted (stone-600) on canvas / surface / raised | 7.3 / 6.8 / 7.8:1 |
| Subtle (stone-500) on canvas / surface / raised | 5.8 / 5.4 / 6.2:1 |
| White on primary (red-600) / primary-hover (red-700) | 5.7 / 7.5:1 |
| Accent / link / selected (red-700) on canvas / surface / raised | 7.0 / 6.5 / 7.5:1 |
| Link hover (red-800) on canvas | 9.1:1 |
| Selected (red-700) on selected-soft | 6.8:1 |
| Danger (crimson-700) on canvas · white on danger-emphasis / hover | 8.3 · 8.9 / 11.1:1 |
| Info (blue-700) on canvas · info-soft-text on info-soft | 7.9 · 9.5:1 |
| Neutral status (stone-600) on canvas · badge soft-text on soft | 7.3 · 12.2:1 |
| **Focus ring** (red-600) vs canvas / raised *(needs 3)* | 5.4 / 5.7:1 |
| **Input border** (stone-400) vs raised / canvas *(needs 3)* | 4.2 / 3.9:1 |
| **Switch track** (stone-400) vs surface *(needs 3)* | 3.6:1 |
| Data (stone-400) · data-highlight (red-600) vs canvas *(needs 3)* | 3.9 · 5.4:1 |
| Dark slide: title (stone-100) · accent (red-300) · meta (stone-300) | 16.4 · 8.3 · 8.5:1 |
| Dark slide: footer (stone-400) · wordmark mark (red-500, *needs 3*) | 4.5 · 4.3:1 |

**Charts and color-vision deficiency.** The data pair is a stone bar plus a
Signal Red takeaway, differentiated by hue, by lightness (the takeaway is the
darker, stronger mark), *and* by a mandatory direct label on the highlighted
mark. Both marks independently clear 3:1 on the canvas. Because the takeaway
is always labelled, the chart never relies on telling red from grey — which
matters more now, since red/grey is exactly the pair protanopes find hardest.
