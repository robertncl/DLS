# Button

Class: `.acme-btn` · Preview: [previews/buttons.html](../previews/buttons.html)

Buttons are **rounded rectangles** (`--acme-radius-md`, 6 px) and share their
radius with inputs so forms read as one family. A press is acknowledged by
the `:active` color step — buttons never scale or bounce.

## Variants

| Variant | Class | Surface | Use |
| --- | --- | --- | --- |
| Primary | `.acme-btn--primary` | Ink fill (graphite-900), white label, shadow-sm | The single most important action on the view — **one per view**. |
| Secondary | `.acme-btn--secondary` | White + `border-control` edge + shadow-sm | Alternative or companion actions. Hover tints to `surface` and firms the edge. |
| Ghost | `.acme-btn--ghost` | Transparent → `surface-hover` fill | Low-emphasis actions in toolbars, cards, table rows, the app bar. |
| Danger | `.acme-btn--danger` | Red fill (`danger-emphasis`), white label | Destructive, irreversible actions. Red on a control only ever means this; the specific verb confirms it. Usually the solid action of a confirmation step. |

## Sizes

| Size | Class | Height | Use |
| --- | --- | --- | --- |
| Small | `.acme-btn--sm` | 32 px | Dense toolbars, table rows only |
| Medium | *(default)* | 40 px | Everything |
| Large | `.acme-btn--lg` | 48 px | Marketing, checkout, mobile-first flows |

## States

Rest → hover (ink lightens to graphite-700; fills tint) → active (graphite-800)
→ focus-visible (Blue ring, 2 px offset; the ring follows the button's own
radius) → disabled (`surface` fill, hairline edge, `text-subtle` label at
4.9:1, no shadow, `not-allowed` cursor — readable, never a faded opacity).
Labels are 14 px / 500 with snug tracking.
Disabled buttons never show tooltips explaining why — put the reason in
adjacent help text instead.

## Content

- Verb-first, specific, sentence case: "Delete 12 products", "Track order".
- Never "OK", "Yes", "Submit", or "Click here".
- Icon + label preferred over icon-only; icon-only buttons require an
  `aria-label` and take `.acme-btn--icon` (square, 32 px with `--sm`), like
  the modal's close button.
- **Danger buttons name the consequence.** "Delete 12 products", never
  "Confirm". A leading warning icon is optional — red is unambiguous now that
  the primary is ink.

## Accessibility

- Real `<button>` elements (or `<a>` for navigation — never a div).
- Minimum 40 px target; small buttons need 8 px clearance around them.
- Loading state: keep the label, add `aria-busy="true"`; don't swap the label
  for a lone spinner.

## Don'ts

- Two primary buttons on one view.
- Danger styling for actions that are merely important.
- Full-width buttons outside mobile checkout flows.
