# Surfaces, Shape & Elevation

ACME surfaces are **warm paper**: opaque, flat, and precisely edged, in a warm
Oat neutral. Structure comes from honest 1 px borders and generous space;
shadows are quiet, warm-tinted, and say only *how high* a surface sits.
Nothing is translucent — what you read never depends on what's behind it.

## Surfaces

| Surface | Token | Use |
| --- | --- | --- |
| Canvas | `--acme-color-canvas` | Page background, the app bar |
| Surface | `--acme-color-surface` | Recessed areas, hover fills, selected nav |
| Surface raised | `--acme-color-surface-raised` | Cards, inputs, modals, popovers |

Raised surfaces always pair with a `--acme-color-border` hairline; the border
defines the edge, the shadow (if any) defines the height.

## Radius

| Token | Value | Use |
| --- | --- | --- |
| `--acme-radius-sm` | 4 px | Wordmark mark, checkboxes, nav links, small chips |
| `--acme-radius-md` | 8 px | **Buttons, inputs**, alerts |
| `--acme-radius-lg` | 12 px | Cards, popovers |
| `--acme-radius-xl` | 16 px | Modals, page-level panels |
| `--acme-radius-full` | 999 px | Badges and switches **only** |

Rules:

- **Controls are rounded rectangles**, not capsules. Buttons and inputs share
  `--acme-radius-md` so forms read as one family.
- **Nesting decreases radius** for containers: modal (16) › card (12) › field
  (8) › checkbox (4).
- Pills are reserved for the two shapes that are genuinely round-ended:
  badges and the switch track.

## Borders

- Every raised surface (card, modal, popover) takes a
  `1px solid var(--acme-color-border)` edge — borders are the primary
  separator in the system, not shadows.
- Inputs take the heavier `--acme-color-border-strong` so fields read as
  affordances; secondary buttons share it.
- Dividers inside surfaces (card footers, table rows) stay
  `1px solid var(--acme-color-border)`.
- The 3 px accent on alerts is the only decorative thick border in the system.

## Elevation

Three levels, three shadows. A shadow never appears without a reason to be
above the page.

| Level | Recipe | Use |
| --- | --- | --- |
| Resting | border + `--acme-shadow-sm` | Cards, secondary buttons |
| Raised | border-strong + `--acme-shadow-md` | Hovered interactive cards, dropdowns |
| Floating | border + `--acme-shadow-lg` | Modals, command palettes |

The app bar sits at zero elevation — it is part of the page frame, separated
by its bottom hairline, not floating above content. In dark mode shadows
deepen via the same tokens.

Don'ts: no colored shadows, no stacking shadow tokens, no shadow on static
text content, no borderless "floating" panels.
