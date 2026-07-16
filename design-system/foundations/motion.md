# Motion

ACME motion is **fluid and mechanical** — glass responds like gel under a
thumb, then snaps into place like good hardware. Motion explains cause and
effect; it never entertains.

## Tokens

| Token | Value | Use |
| --- | --- | --- |
| `--acme-duration-fast` | 100 ms | Hover/active color shifts |
| `--acme-duration-base` | 150 ms | Most transitions: borders, toggles, fades, press scale |
| `--acme-duration-slow` | 250 ms | Enter/exit: dropdowns, toasts, tab panels |
| `--acme-duration-deliberate` | 400 ms | Modals, page-level panels — the ceiling |
| `--acme-ease-out` | cubic-bezier(0.2, 0.8, 0.4, 1) | Anything entering or responding |
| `--acme-ease-in-out` | cubic-bezier(0.45, 0, 0.25, 1) | Position changes, exits |
| `--acme-ease-spring` | cubic-bezier(0.32, 1.36, 0.5, 1) | Press/release scale, selected-segment moves — a single small overshoot |

## The press

Controls acknowledge touch physically: buttons scale to **0.97** on `:active`
with the spring ease (baked into `.acme-btn`); interactive cards lift to
1.01 on hover. Scale is the only property that springs — color and opacity
never bounce, and exits never overshoot.

## Rules

1. **Animate only `opacity` and `transform`** (plus color transitions on
   controls). Never animate layout properties (`width`, `height`, `top`).
2. Entrances ease **out** (fast start, soft landing). Exits are faster than
   entrances — leaving should cost less than arriving.
3. Nothing loops except progress indicators.
4. Distance is small: enter/exit translations of 4–8 px, scale from 0.98, not
   from 0.
5. No motion on initial page load; content appears, it doesn't parade in.
6. **`prefers-reduced-motion` is honored globally** — `acme.css` collapses all
   durations to ~0 under it. Any bespoke animation must survive that collapse
   (i.e., end states must be correct without the animation).
