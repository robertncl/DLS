# Badge

Class: `.acme-badge` · Preview: [previews/feedback.html](../previews/feedback.html)

Badges are compact status labels: pill-shaped, 12 px semibold text on a soft
tinted background. Read-only — a badge is never a button or a filter chip.

## Variants

| Variant | Class | Meaning | Example |
| --- | --- | --- | --- |
| Neutral | *(default)* | State without judgment | `Draft`, `Archived` |
| Success | `.acme-badge--success` | Complete, positive | `Shipped`, `In stock` |
| Warning | `.acme-badge--warning` | Needs attention soon | `Low stock`, `Expiring` |
| Danger | `.acme-badge--danger` | Failed, blocked | `Payment failed`, `Recalled` |
| Info | `.acme-badge--info` | Neutral-informative | `Beta`, `Preorder` |

## Rules

- One or two words, sentence case, no punctuation. Numbers allowed
  (`3 pending`).
- Color pairs are fixed soft/soft-text tokens — never put custom colors on
  badges. All four variants currently render in the **same** neutral ink
  (see [color.md](../foundations/color.md)); nothing here is color-blind
  unsafe by construction, because color was never the signal.
- **A leading icon is required, not optional.** Since success/warning/danger/
  info share one ink, the icon is the only non-text differentiator a variant
  has — status must still be legible from the word alone, but ship the icon.
- Maximum one badge per table row / card title line. If everything is badged,
  nothing is.
