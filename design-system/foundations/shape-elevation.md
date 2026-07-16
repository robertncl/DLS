# Shape & Elevation

ACME surfaces look machined: consistent corner radii, honest 1 px borders,
and shadows used for *altitude*, not decoration.

## Radius

| Token | Value | Use |
| --- | --- | --- |
| `--acme-radius-sm` | 4 px | Wordmark mark, checkboxes, focus outlines |
| `--acme-radius-md` | 8 px | Buttons, inputs, alerts |
| `--acme-radius-lg` | 12 px | Cards, popovers |
| `--acme-radius-xl` | 16 px | Modals, page-level panels |
| `--acme-radius-full` | 999 px | Badges, pills, switches, avatars |

Rule: **nesting decreases radius** — a card (12) may contain buttons (8) which
may contain nothing rounder than themselves. Never the reverse.

## Borders

- Default hairline: `1px solid var(--acme-color-border)` (dividers, cards).
- Inputs use `--acme-color-border-strong` so fields read as affordances.
- The 3 px accent on alerts is the only decorative thick border in the system.

## Elevation

Three levels. Elevation communicates what floats above the page — nothing
else. Static content never carries a shadow heavier than `sm`.

| Token | Level | Use |
| --- | --- | --- |
| `--acme-shadow-sm` | Resting | Cards, inputs on canvas |
| `--acme-shadow-md` | Raised | Hovered interactive cards, dropdowns, popovers |
| `--acme-shadow-lg` | Floating | Modals, command palettes, toasts |

In dark mode the same tokens resolve to stronger black shadows (borders do
most of the separating work there — every elevated surface keeps its 1 px
border in both themes).

Don'ts: no colored shadows, no inner shadows, no stacking multiple shadow
tokens on one element.
