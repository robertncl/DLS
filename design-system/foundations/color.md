# Color

ACME's palette is **neutral-first**: Graphite does the work, ACME Red provides
the signature, Blueprint/Go/Caution carry meaning. Components must reference
**semantic tokens** (`--acme-color-*`); primitive scales are for defining
tokens, not for direct use in product code.

## Primitive scales

| Scale | Anchor | Role |
| --- | --- | --- |
| ACME Red `--acme-red-*` | `600 #C8102E` | Brand, primary actions, links, danger |
| Graphite `--acme-gray-*` | `900 #16191F` | Text, surfaces, borders |
| Blueprint Blue `--acme-blue-*` | `600 #2563EB` | Info, focus ring, data viz |
| Go Green `--acme-green-*` | `600 #15803D` | Success |
| Caution Amber `--acme-amber-*` | `700 #B45309` | Warnings |

Full values live in [tokens/tokens.json](../tokens/tokens.json) and
[tokens/acme.css](../tokens/acme.css).

## Semantic tokens

| Token | Light | Dark | Use for |
| --- | --- | --- | --- |
| `--acme-color-canvas` | white | gray-950 | Page background |
| `--acme-color-surface` | gray-50 | gray-900 | Recessed areas, hover fills |
| `--acme-color-surface-raised` | white | gray-800 | Cards, inputs, modals |
| `--acme-color-border` | gray-200 | gray-700 | Dividers, card borders |
| `--acme-color-border-strong` | gray-300 | gray-600 | Input borders |
| `--acme-color-text` | gray-900 | gray-100 | Default text |
| `--acme-color-text-muted` | gray-600 | gray-400 | Secondary text |
| `--acme-color-text-subtle` | gray-500 | gray-400 | Placeholders, captions |
| `--acme-color-primary` (+hover/active) | red-600/700/800 | red-500/400/600 | The one primary action |
| `--acme-color-link` | red-700 | red-300 | Inline links |
| `--acme-color-focus` | blue-500 | blue-400 | Focus ring only |
| `--acme-color-success/warning/danger/info` | see tokens | see tokens | Status text & icons |
| `--acme-color-danger-emphasis` | red-700 | red-500 | Danger button fills (always AA under white text) |
| `--acme-color-data` / `-data-highlight` | blue-600 / red-600 | blue-400 / red-500 | Chart marks: Blueprint carries data, red marks the one takeaway |
| `--acme-material-glass` / `-strong` | white 62% / 85% | gray-900 70% / 90% | Translucent surfaces — see [materials.md](materials.md) for hosting rules |
| `--acme-color-*-soft` / `-soft-text` | tinted pairs | mixed on surface | Badges, alerts |

## Rules

1. **Red is rationed.** One primary (red) action per view. Additional red
   means danger — don't dilute the signal. Screens >~10% red are off-brand.
2. **Meaning never travels by color alone.** Pair status color with an icon or
   label (WCAG 1.4.1).
3. **Soft pairs stay together.** `*-soft` backgrounds take only their matching
   `*-soft-text` foreground.
4. **Focus is always Blueprint.** Never restyle the focus ring red — it must
   stand apart from the brand color.
5. **Don't hardcode hex values** in product code; if a needed color is
   missing, add a semantic token.

## Contrast (verified)

All combinations below are measured, not aspirational. AA normal text needs
≥ 4.5:1.

| Pair | Ratio |
| --- | --- |
| Text (gray-900) on canvas (white) | 17.6:1 |
| Muted text (gray-600) on white | 7.5:1 |
| Subtle text (gray-500) on white | 4.7:1 |
| White on primary (red-600) | 5.9:1 |
| Link (red-700) on white | 7.8:1 |
| Info (blue-600) / success (green-600) / warning (amber-700) on white | 5.2 / 5.0 / 5.0:1 |
| Badge soft-text on soft backgrounds (all four) | ≥ 6.1:1 |
| Dark: text (gray-100) on canvas (gray-950) | 17.4:1 |
| Dark: muted (gray-400) on canvas / surface | 7.4 / 6.8:1 |
| Dark: white on primary (red-500) | 4.9:1 |
| Dark: link (red-300) on canvas | 8.5:1 |

The chart pair (`data`/`data-highlight`) is additionally validated for
color-vision deficiency: worst-case adjacent ΔE 92.3 (light) / 67.2 (dark)
against a ≥ 12 target, and both marks hold ≥ 3:1 against their surface.

## Theming

`acme.css` declares `color-scheme: light dark` and follows the system
preference by default. Hosts may pin a theme with
`<html data-theme="light|dark">`. Both themes ship in one stylesheet; there is
no separate dark build.
