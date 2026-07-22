# Color

ACME's product palette is **monochrome**: Graphite alone does the work.
There is no second hue for primary actions, links, focus, or status —
hierarchy comes from **value** (how light or dark) and **weight** (icon +
label), not from color. Components must reference **semantic tokens**
(`--acme-color-*`); primitive scales are for defining tokens, not for direct
use in product code.

ACME Red survives in exactly one place: the wordmark mark. It is brand
identity, not UI — see [brand/identity.md](../brand/identity.md). Nothing
else in the product may use it.

## Primitive scales

| Scale | Anchor | Role |
| --- | --- | --- |
| Graphite `--acme-gray-*` | `900 #16191F` | Everything: text, surfaces, borders, actions, status, data |
| ACME Red `--acme-red-*` | `600 #C8102E` | Wordmark mark only — not a UI color, see brand/identity.md |

Full values live in [tokens/tokens.json](../tokens/tokens.json) and
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
| `--acme-color-primary` (+hover/active) | gray-800/900/950 | gray-200/300/400 | The one solid-fill action |
| `--acme-color-on-primary` | white | gray-900 | Text/icon on a primary or danger fill |
| `--acme-color-link` | gray-900 (= text) | gray-100 (= text) | Inline links — underline is the signal, not color |
| `--acme-color-focus` | gray-950 | gray-0 | Focus ring only |
| `--acme-color-success/warning/danger/info` | gray-700 | gray-300 | Status text, icon, alert accent — one shared ink; icon + label carry meaning |
| `--acme-color-danger-emphasis` | gray-900 | gray-100 | Danger button fills (pairs with on-primary) |
| `--acme-color-data` / `-data-highlight` | gray-500 / gray-900 | gray-500 / gray-100 | Chart marks: value carries data, the highlight is the darkest/lightest mark |
| `--acme-color-*-soft` / `-soft-text` | gray-100 / gray-800 | gray-800 / gray-200 | Badges, alerts — identical across success/warning/danger/info |

## Rules

1. **One solid action per view.** One `--acme-color-primary` fill per
   view — additional emphasis competes with it, it doesn't reinforce it.
2. **Icon and label are load-bearing, not decorative.** Since success,
   warning, danger, and info now render in the *same* ink, the icon plus the
   word are the only way meaning survives. A badge or alert without one
   fails review (WCAG 1.4.1) — see [button](../components/button.md),
   [badge](../components/badge.md), [alert](../components/alert.md).
3. **Soft pairs stay together.** `*-soft` backgrounds take only their
   matching `*-soft-text` foreground.
4. **Focus is always the neutral extreme** (near-black on light, near-white
   on dark) — never the wordmark's red, so focus reads as UI state, never as
   brand.
5. **Don't hardcode hex values** in product code; if a needed color is
   missing, add a semantic token.
6. **Primary and danger-emphasis flip which end of the scale they fill from**
   between themes (see Theming below) — never assume "primary is always the
   dark stop."

## Contrast (verified)

All combinations below are measured, not aspirational. AA normal text needs
≥ 4.5:1; UI components/graphics need ≥ 3:1.

| Pair | Ratio |
| --- | --- |
| Text (gray-900) on canvas (white) | 17.6:1 |
| Muted text (gray-600) on white | 7.5:1 |
| Subtle text (gray-500) on white | 4.7:1 |
| Link (gray-900, = text) on white | 17.6:1 |
| Status ink (gray-700) on white — success/warning/danger/info alike | 10.4:1 |
| Badge soft-text (gray-800) on soft background (gray-100) — all four variants | 12.8:1 |
| White on primary fill, rest (gray-800) | 14.2:1 |
| White on primary fill, hover (gray-900) / danger-emphasis | 17.6:1 |
| Data mark (gray-500) on canvas (white) | 4.7:1 |
| Data-highlight (gray-900) on canvas (white) | 17.6:1 |
| Dark: text (gray-100) on canvas (gray-950) | 17.4:1 |
| Dark: muted (gray-400) on canvas | 7.4:1 |
| Dark: link (gray-100, = text) on canvas | 17.4:1 |
| Dark: status ink (gray-300) on canvas (gray-950) | 12.7:1 |
| Dark: badge soft-text (gray-200) on soft background (gray-800) | 11.5:1 |
| Dark: on-primary (gray-900) on primary fill, rest (gray-200) | 14.2:1 |
| Dark: on-primary (gray-900) on danger-emphasis (gray-100) | 15.8:1 |
| Dark: data mark (gray-500) on canvas | 4.1:1 |
| Dark: data-highlight (gray-100) on canvas | 17.4:1 |

Data and data-highlight also hold ≥ 3.7:1 (light) / 4.2:1 (dark) against
*each other*, so the marks stay distinguishable from one another, not just
from the canvas. Because the pair is distinguished by **luminance**, not
hue, it's inherently CVD-safe — the deficiency that would blur two hues at
matched lightness has nothing to blur here.

## Theming

`acme.css` declares `color-scheme: light dark` and follows the system
preference by default. Hosts may pin a theme with
`<html data-theme="light|dark">`. Both themes ship in one stylesheet; there
is no separate dark build.

One deliberate asymmetry: `--acme-color-primary` and `-danger-emphasis` are a
**dark** fill in light mode (near-black, white text) but a **light** fill in
dark mode (near-white, near-black text). A fixed-hue brand color doesn't
need this — red-600 reads fine on white *and* on near-black. Graphite does
not: a dark-800 fill would all but disappear against a gray-950 canvas. The
flip is what keeps a "solid action" button legible, and at full contrast, in
both themes. `--acme-color-on-primary` flips with it — never hardcode white
text onto a primary/danger-emphasis fill; always reference the token.
