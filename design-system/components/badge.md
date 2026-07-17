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
  badges.
- Status must also be legible from the text alone (color-blind safe); an
  optional leading dot/icon reinforces but never replaces the word.
- Maximum one badge per table row / card title line. If everything is badged,
  nothing is.
