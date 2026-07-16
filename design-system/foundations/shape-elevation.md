# Shape & Elevation

ACME surfaces are **machined glass**: generous continuous curvature, capsule
controls, and elevation carried by material + shadow together. Borders have
largely given way to the specular glass edge; the few that remain are honest
1 px hairlines.

## Radius

| Token | Value | Use |
| --- | --- | --- |
| `--acme-radius-sm` | 6 px | Wordmark mark, checkboxes |
| `--acme-radius-md` | 12 px | Inputs, alerts |
| `--acme-radius-lg` | 20 px | Cards, popovers |
| `--acme-radius-xl` | 28 px | Modals, page-level panels |
| `--acme-radius-full` | 999 px | **All interactive controls**: buttons, segmented tabs, the top bar, badges, switches |

Rules:

- **Controls are capsules.** Anything tappable that isn't a field or a card
  takes `--acme-radius-full`.
- **Nesting decreases radius** for containers: modal (28) › card (20) › field
  (12) › checkbox (6). Capsule controls are exempt — a capsule button inside
  a card is correct.
- Corners are concentric: an inner element's radius = outer radius − the gap
  between them, floored at 6 px.

## Borders

- Inputs keep a `--acme-color-border-strong` hairline so fields read as
  affordances (fields are opaque — see [materials.md](materials.md)).
- Dividers inside surfaces (card footers, table rows) stay
  `1px solid var(--acme-color-border)`.
- Glass surfaces have **no border**; their edge is the specular highlight
  `--acme-glass-edge`.
- The 3 px accent on alerts is the only decorative thick border in the system.

## Elevation

Elevation = material + shadow. The material says *what* a surface is; the
shadow says *how high* it floats.

| Level | Recipe | Use |
| --- | --- | --- |
| Resting | glass-strong + `--acme-shadow-sm` | Cards |
| Raised | glass + `--acme-shadow-md` | Hovered cards, the floating top bar, segmented control |
| Floating | glass-strong + `--acme-shadow-lg` | Modals, command palettes |

Opaque surfaces (fields, alerts) sit at resting height with at most
`--acme-shadow-sm`. In dark mode shadows deepen and the specular edge dims;
both come from the same tokens.

Don'ts: no colored shadows, no stacking multiple shadow tokens beyond the
glass edge + one elevation shadow, no shadow on static text content.
