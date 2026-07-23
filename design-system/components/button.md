# Button

Class: `.acme-btn` · Preview: [previews/buttons.html](../previews/buttons.html)

Buttons are **rounded rectangles** (`--acme-radius-md`, 8 px) and share their
radius with inputs so forms read as one family. A press is acknowledged by
the `:active` color step — buttons never scale or bounce.

## Variants

| Variant | Class | Surface | Use |
| --- | --- | --- | --- |
| Primary | `.acme-btn--primary` | ACME Red fill, white label (both themes) | The single most important action on the view — **one per view**. |
| Secondary | `.acme-btn--secondary` | Raised surface + `border-strong` outline | Alternative or companion actions. Hover fills with `--acme-color-surface`. |
| Ghost | `.acme-btn--ghost` | Transparent → surface fill on hover | Low-emphasis actions in toolbars, cards, table rows. |
| Danger | `.acme-btn--danger` | danger-emphasis fill (deeper red) + warning icon | Destructive, irreversible actions. Red marks it, the icon and verb confirm it — always paired with a confirmation step. |

## Sizes

| Size | Class | Height | Use |
| --- | --- | --- | --- |
| Small | `.acme-btn--sm` | 32 px | Dense toolbars, table rows only |
| Medium | *(default)* | 40 px | Everything |
| Large | `.acme-btn--lg` | 48 px | Marketing, checkout, mobile-first flows |

## States

Rest → hover (one shade deeper / surface fill) → active (two shades deeper)
→ focus-visible (Blueprint ring, 2 px offset) → disabled (50% opacity,
`not-allowed` cursor).
Disabled buttons never show tooltips explaining why — put the reason in
adjacent help text instead.

## Content

- Verb-first, specific, sentence case: "Delete 12 products", "Track order".
- Never "OK", "Yes", "Submit", or "Click here".
- Icon + label preferred over icon-only; icon-only buttons require an
  `aria-label`.
- **Danger buttons always lead with a warning icon.** Primary and danger
  share one fill color now, so the icon — not the color — is what tells a
  reader "this one is destructive."

## Accessibility

- Real `<button>` elements (or `<a>` for navigation — never a div).
- Minimum 40 px target; small buttons need 8 px clearance around them.
- Loading state: keep the label, add `aria-busy="true"`; don't swap the label
  for a lone spinner.

## Don'ts

- Two primary buttons on one view.
- Danger styling for actions that are merely important.
- Full-width buttons outside mobile checkout flows.
