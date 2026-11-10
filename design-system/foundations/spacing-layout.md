# Spacing & Layout

Everything sits on a **4 px grid**. Spacing tokens are the only spacing values
allowed; if a design needs 18 px, it's wrong by definition — pick 16 or 20.

## Scale

| Token | rem / px | Typical use |
| --- | --- | --- |
| `--acme-space-1` | 0.25 / 4 | Icon-to-label gaps, badge padding |
| `--acme-space-2` | 0.5 / 8 | Gaps inside controls, choice rows |
| `--acme-space-3` | 0.75 / 12 | Input padding, table cells |
| `--acme-space-4` | 1 / 16 | Default gap between related elements |
| `--acme-space-5` | 1.25 / 20 | Card padding |
| `--acme-space-6` | 1.5 / 24 | Section padding, modal gutters |
| `--acme-space-8` | 2 / 32 | Between component groups |
| `--acme-space-10` | 2.5 / 40 | — |
| `--acme-space-12` | 3 / 48 | Between page sections |
| `--acme-space-16` | 4 / 64 | Hero padding |
| `--acme-space-20` / `-24` | 5 / 80 · 6 / 96 | Marketing rhythm |

**Proximity rule:** space *within* a group < space *between* groups. A card's
internal padding (20) must be smaller than the gap separating unrelated
sections (48).

## Layout

- **Container:** content max-width 1200 px, centered, with `--acme-gutter`
  side gutters: 16 px on compact windows, 24 px on medium, 32 px on expanded.
- **Grid:** 12 columns, `--acme-space-6` gutters. Cards snap to 3/4/6/12
  columns.
- **Prose:** long-form text capped at `65ch` regardless of container width.

## Window classes

Layouts are designed for three window classes, not for devices. The same
classes apply to web and to native apps (see [platforms](platforms.md)).

| Class | Width | Gutter | Primary navigation | Collections |
| --- | --- | --- | --- | --- |
| Compact | below 640 px | 16 px | Tab bar (bottom) | List rows |
| Medium | 640–1023 px | 24 px | Top bar | Table |
| Expanded | from 1024 px | 32 px | Top bar | Table |

`--acme-gutter` resolves to the right value for the current class; use it for
page-edge padding instead of a fixed spacing token.

## Breakpoints

| Token | Min width | Notes |
| --- | --- | --- |
| `sm` | 640 px | Compact → medium. Stacked → 2-up cards; tab bar gives way to the top bar |
| `md` | 768 px | Sidebars appear |
| `lg` | 1024 px | Medium → expanded. Full grid, persistent nav |
| `xl` | 1280 px | Container reaches max width |

Design mobile-first; breakpoints add columns, never rearrange meaning. Prefer
intrinsic patterns (`auto-fill` + `minmax()`, flex wrap) over breakpoint
forests, and container queries when a component must adapt to its slot rather
than the viewport.

## Touch targets

Controls come in two densities, driven by the `--acme-control-*` tokens:

| Token | Pointer | Touch |
| --- | --- | --- |
| `--acme-control-sm` | 32 px | 44 px |
| `--acme-control-md` (default) | 40 px | 48 px |
| `--acme-control-lg` | 48 px | 48 px |
| `--acme-touch-target` | — | 44 px minimum for anything tappable |

**Pointer density** is the default. Small buttons (32 px) are for dense
toolbars only and must keep 8 px of surrounding clearance.

**Touch density** applies automatically on coarse pointers
(`@media (pointer: coarse)`); add `.acme-touch` to a root element to opt in
where the media query can't tell (native webviews, previews). Under touch
density nothing tappable is smaller than 44×44 px, choice and switch rows
grow to 44 px, and inputs set 16 px text so mobile browsers don't zoom on
focus. Never hard-code a control height — use the tokens so both densities
keep working.
