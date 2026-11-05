# Surfaces, Shape & Elevation

ACME surfaces are a **crisp Graphite page**: a white canvas, opaque surfaces,
and precise 1 px hairlines. Structure comes from borders, quiet tonal
recesses, and generous space. Shadows are soft and neutral, and they say only
*how high* a surface sits. Nothing is translucent, so what you read never
depends on what's behind it.

## Surfaces

| Surface | Token | Use |
| --- | --- | --- |
| Canvas | `--acme-color-canvas` (white) | Page background, the app bar |
| Surface | `--acme-color-surface` (graphite-50) | Recessed bands: table header, card and modal footers, card media, callouts |
| Surface hover | `--acme-color-surface-hover` (graphite-100) | Hover fills, the current nav item, neutral badges |
| Surface raised | `--acme-color-surface-raised` (white) | Cards, inputs, modals, popovers |

Raised surfaces always pair with a `--acme-color-border` hairline: the border
defines the edge, and the shadow defines the height. Recessed *footer bands*
(cards, modals) separate actions from content without adding another border
weight.

## Radius

| Token | Value | Use |
| --- | --- | --- |
| `--acme-radius-sm` | 4 px | Badges, checkboxes, focus rings |
| `--acme-radius-md` | 6 px | **Buttons, inputs**, nav links |
| `--acme-radius-lg` | 10 px | Cards, alerts, popovers |
| `--acme-radius-xl` | 12 px | Modals, page-level panels |
| `--acme-radius-full` | 999 px | Switches and tab counts **only** |

Rules:

- **Controls are rounded rectangles**, not capsules. Buttons and inputs share
  `--acme-radius-md`, so forms read as one family.
- **Nesting decreases radius** for containers: modal (12) › card (10) ›
  control (6) › badge (4).
- Status badges are small rounded rectangles, not pills. They read as data
  labels, not as buttons.

## Borders

| Token | Weight | Use |
| --- | --- | --- |
| `--acme-color-border` | hairline (graphite-200) | Card and modal edges, dividers, table rows. Decorative. |
| `--acme-color-border-control` | graphite-300 | Secondary-button edge, hovered interactive card |
| `--acme-color-border-strong` | graphite-400, ≥ 3:1 | Inputs and switch tracks, where the edge *is* the affordance |

- Status surfaces (alerts, badges) take their matching `*-border` tint instead
  of the neutral hairline.
- The 3 px accent on report callouts is the only thick border in the system,
  and it is editorial.

## Elevation

There are three levels, each with its own shadow. A shadow never appears
without a reason for the surface to sit above the page.

| Level | Recipe | Use |
| --- | --- | --- |
| Resting | border + `--acme-shadow-sm` | Cards, buttons, inputs |
| Raised | border-control + `--acme-shadow-md` | Hovered interactive cards, dropdowns |
| Floating | border + `--acme-shadow-lg` | Modals, command palettes |

Shadows are tinted with graphite ink (`rgb(16 24 40 / …)`), never pure black,
and they spread negatively so the edge stays crisp. The app bar sits at zero
elevation: it is part of the page frame, separated by its bottom hairline,
not floating above content.

Don'ts:

- no coloured shadows
- no stacking shadow tokens on one element
- no shadow on static text content
- no borderless "floating" panels
- no glassmorphism or backdrop blur
