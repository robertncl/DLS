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

- **Container:** content max-width 1200 px, centered, with `--acme-space-5`
  side gutters (`--acme-space-8` at ≥ lg).
- **Grid:** 12 columns, `--acme-space-6` gutters. Cards snap to 3/4/6/12
  columns.
- **Prose:** long-form text capped at `65ch` regardless of container width.

## Breakpoints

| Token | Min width | Notes |
| --- | --- | --- |
| `sm` | 640 px | Stacked → 2-up cards |
| `md` | 768 px | Sidebars appear |
| `lg` | 1024 px | Full grid, persistent nav |
| `xl` | 1280 px | Container reaches max width |

Design mobile-first; breakpoints add columns, never rearrange meaning. Prefer
intrinsic patterns (`auto-fill` + `minmax()`, flex wrap) over breakpoint
forests, and container queries when a component must adapt to its slot rather
than the viewport.

## Touch targets

Interactive elements are at least **40×40 px** (`min-height: 2.5rem` on
buttons and inputs); small buttons (32 px) are for dense toolbars only and
must keep 8 px of surrounding clearance.
