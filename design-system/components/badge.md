# Badge

Class: `.acme-badge` · Preview: [previews/feedback.html](../previews/feedback.html)

Badges are compact status labels: small rounded rectangles (`--acme-radius-sm`),
12 px / 500 text on a soft tint with a matching hairline. Read-only — a badge is never a button or a filter chip.

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
- Colour sets are fixed `*-soft` / `*-soft-text` / `*-border` tokens — never put
  custom colours on badges. Success is Green, warning Amber, danger Red, info
  Blue, neutral Graphite (see [color.md](../foundations/color.md)).
- **The word carries the meaning; the hue speeds scanning.** A badge must be
  legible with colour removed. A leading 12 px icon is optional; if one badge in
  a set has an icon, all of them do.
- Maximum one badge per table row / card title line. If everything is badged,
  nothing is.
