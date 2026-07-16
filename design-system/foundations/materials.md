# Materials — ACME Glass

ACME surfaces are **machined glass over industrial Graphite**: translucent,
blurred, with a specular top edge, floating above content instead of capping
it. Glass is *chrome, not content* — it carries controls and navigation;
the things users read and edit stay opaque.

## The two materials

| Material | Token | Light | Dark | May host |
| --- | --- | --- | --- | --- |
| Glass | `--acme-material-glass` | white 62% | graphite-900 70% | Controls, primary-text labels |
| Glass strong | `--acme-material-glass-strong` | white 85% | graphite-900 90% | Body **and muted** text |

Both render with `backdrop-filter: blur(24px) saturate(160%)`
(`--acme-glass-blur` / `--acme-glass-saturate`) and the specular edge
`--acme-glass-edge` (a 1 px inner highlight, brighter along the top).
Components bake this in; for bespoke surfaces use `.acme-glass` /
`.acme-glass--strong`.

## Contrast floors (verified, worst case)

The tint opacities are not aesthetic choices — they are the minimum tints at
which text keeps WCAG AA over a **pathological backdrop** (pure black under
light glass, pure white under dark glass), before blur helps at all:

| Pair | Ratio |
| --- | --- |
| Text (gray-900) on light glass 62% over black | 6.6:1 |
| Muted (gray-600) on light glass-strong 85% over black | 5.3:1 |
| Dark: text (gray-100) on glass 70% over white | 5.8:1 |
| Dark: muted (gray-400) on glass-strong 90% over white | 4.6:1 |

Hence the hosting rule: **muted text only on strong**. Regular glass at 62/70%
cannot guarantee AA for muted text, so it never carries any.

## Where glass is used — and where it never is

Glass: secondary/ghost buttons, cards, the floating top bar, the segmented
tab control, modals.

**Always opaque:**

- **Primary and danger buttons** — the red fill is a guaranteed-contrast
  surface; the call to action never depends on what scrolls beneath it.
- **Selected states** (active tab segment, current nav chip) — the "you are
  here" signal sits on `--acme-color-surface-raised`.
- **Form fields, tables, alerts, badges** — content and status are read, not
  looked through.
- **Documents and decks** — print and projection have no backdrop; the
  report and presentation patterns never use glass.

## Fallbacks & accessibility

- Browsers without `backdrop-filter`, and users with
  `prefers-reduced-transparency: reduce`, get the theme's opaque
  `--acme-color-surface-raised` on every glass surface automatically — the
  override rides the material tokens, so components need no per-case code.
- Print forces glass to opaque white and strips blur and shadows.
- Never stack more than ~3 blurred surfaces in a viewport; blur is the most
  expensive paint effect in the system. A scrolling list of 50 glass cards is
  a jank generator — use glass on the list's chrome, not on every row.

## Don'ts

- Don't put glass on glass (a glass card inside a glass panel reads as smear).
- Don't tint glass with brand red — red means action or danger, not material.
- Don't raise the blur to hide a contrast problem; fix the tint or the text
  token.
