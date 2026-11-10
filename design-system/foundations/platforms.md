# Platforms: web and mobile

ACME is **one system** for web apps and mobile apps. Colour, type, spacing,
radius, elevation, motion and voice are identical everywhere. Two things
change between a pointer and a thumb — **density** and **navigation** — and
nothing else.

## What changes

| | Web, pointer | Mobile, touch |
| --- | --- | --- |
| Control height | 32 · 40 · 48 px | 44 · 48 · 48 px |
| Minimum target | 32 px with 8 px clearance | 44×44 px, no exceptions |
| Page gutter | 24 px (medium), 32 px (expanded) | 16 px (compact) |
| Primary navigation | [App bar](../components/navigation.md#app-bar), up to 5 destinations | [Tab bar](../components/navigation.md#tab-bar), the same destinations |
| Collections | [Table](../components/table.md) | [List](../components/list.md), 64 px rows |
| Overlays | [Modal](../components/modal.md), centred | [Bottom sheet](../components/sheet.md) |
| Primary action | Top right of the page header | Full-width (`.acme-btn--block`) at the foot of the screen |
| Input text | 14 px | 16 px (prevents focus zoom) |
| Hover | Fills and edges respond | None — never hide information or actions behind hover |

## What never changes

- **Colour roles.** Ink acts, Blue interacts, status hues report, Signal Red
  signs the brand. One ink primary per screen, on a phone too.
- **Type.** Same scale, same weights. Body is 16 px on both; nothing drops
  below 12 px. Native apps map the scale to Dynamic Type / font scaling
  rather than pinning sizes.
- **Shape and elevation.** Same radii and shadows. A sheet is a modal that
  enters from the bottom edge, not a new surface language.
- **Motion.** Same durations and easings; sheets and pushed screens use
  `--acme-duration-slow` ease-out to enter. Nothing springs or overshoots,
  including on platforms where springs are the default.
- **Voice.** Same words. Shorter where space demands it, never different.

## Two densities

Density is a token switch, not a second set of components. Buttons, inputs,
choices and switches read `--acme-control-sm/md/lg` and `--acme-hit-min`;
touch density raises those values.

- **Web:** touch density turns on by itself under
  `@media (pointer: coarse)`. A desktop browser on a touch laptop still
  reports a fine primary pointer and keeps pointer density.
- **Webviews and previews:** add `.acme-touch` to the root element.
- **Native apps:** always touch density. Use the `size.control-touch` values
  from [tokens.json](../tokens/tokens.json).

## Three window classes

Compact (below 640 px), medium (640–1023 px), expanded (from 1024 px) — see
[spacing-layout](spacing-layout.md#window-classes). Design for the class, not
the device: a phone in landscape or a tablet in split view is whatever class
its width says it is. A responsive web page ships both the app bar and the
tab bar; CSS shows the right one.

## Native mapping

`tokens.json` is the single source for every platform.

| Token type | CSS | iOS | Android |
| --- | --- | --- | --- |
| Dimension (`rem`) | `rem` (16 px base) | pt = rem × 16 | dp = rem × 16 |
| Dimension (`px`) | px | pt | dp |
| Colour | `--acme-color-*` | Asset catalog colour, same name | `colors.xml` / theme attr, same name |
| Font size | `--acme-text-*` | Scaled with Dynamic Type from the same base | sp |
| Shadow | `box-shadow` | Layer shadow, same offset / blur / colour | Hairline border + tonal elevation off; draw the shadow |
| Duration / easing | `--acme-duration-*`, `--acme-ease-*` | `UIView` timing curve with the same control points | `PathInterpolator` with the same control points |

Semantic names are the contract: native code refers to `color.semantic.primary`,
never to `graphite.900`. Platform chrome ACME does not draw (status bar, home
indicator, system keyboard, share sheet, permission prompts) stays native.

## Safe areas

`--acme-safe-top` and `--acme-safe-bottom` resolve to the device insets
(`env(safe-area-inset-*)`). The app bar pads its top edge with the first; the
tab bar, bottom sheet and any pinned footer pad their bottom edge with the
second. Pages that use them set `viewport-fit=cover` in the viewport meta
tag. Native apps use the platform's safe-area layout guides.

## Icons

ACME ships no icon set. Where a mobile pattern needs icons (tab bar, list
chevron, back link) use a single outline family on a 24 px grid with a 2 px
round stroke in `currentColor`; Lucide is the recommended stand-in. Navigation
icons always sit beside a text label.

## Accessibility on touch

- 44×44 px minimum target; 8 px between adjacent targets.
- Every row in a list is one target. Don't nest a second tappable control in
  a row — move the action to the detail screen or a sheet.
- Respect the system text-size setting: layouts must hold at 200% text.
- `prefers-reduced-motion` and the native reduce-motion settings collapse
  sheet and push transitions to a fade.
