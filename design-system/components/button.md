# Button

Class: `.acme-btn` · Preview: [previews/buttons.html](../previews/buttons.html)

## Variants

| Variant | Class | Use |
| --- | --- | --- |
| Primary | `.acme-btn--primary` | The single most important action on the view. ACME Red — **one per view**. |
| Secondary | `.acme-btn--secondary` | Alternative or companion actions. Bordered, neutral. |
| Ghost | `.acme-btn--ghost` | Low-emphasis actions in toolbars, cards, table rows. |
| Danger | `.acme-btn--danger` | Destructive, irreversible actions. Always paired with a confirmation step. |

## Sizes

| Size | Class | Height | Use |
| --- | --- | --- | --- |
| Small | `.acme-btn--sm` | 32 px | Dense toolbars, table rows only |
| Medium | *(default)* | 40 px | Everything |
| Large | `.acme-btn--lg` | 48 px | Marketing, checkout, mobile-first flows |

## States

Rest → hover (one shade deeper) → active (two shades) → focus-visible
(Blueprint ring, 2 px offset) → disabled (50% opacity, `not-allowed` cursor).
Disabled buttons never show tooltips explaining why — put the reason in
adjacent help text instead.

## Content

- Verb-first, specific, sentence case: "Delete 12 products", "Track order".
- Never "OK", "Yes", "Submit", or "Click here".
- Icon + label preferred over icon-only; icon-only buttons require an
  `aria-label`.

## Accessibility

- Real `<button>` elements (or `<a>` for navigation — never a div).
- Minimum 40 px target; small buttons need 8 px clearance around them.
- Loading state: keep the label, add `aria-busy="true"`; don't swap the label
  for a lone spinner.

## Don'ts

- Two primary buttons on one view.
- Danger styling for actions that are merely important.
- Full-width buttons outside mobile checkout flows.
