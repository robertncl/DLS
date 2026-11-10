# DLS

Example **design language system** for **ACME Corp**, a fictional company —
built as a test fixture for design tooling (e.g. Claude Design / `/design-sync`).

Everything lives in [design-system/](design-system/):

- **Brand** — identity, wordmark, voice & tone
- **Foundations** — color (a crisp Graphite page: ink primary, Blue interaction,
  status hues, Signal Red brand), typography (one grotesque, Inter), spacing, surfaces / shape &
  elevation, motion
- **Platforms** — one system for web and mobile apps: pointer and touch
  control densities, compact / medium / expanded window classes
- **Tokens** — [tokens.json](design-system/tokens/tokens.json) (DTCG) and
  [acme.css](design-system/tokens/acme.css) (custom properties + component styles)
- **Components** — button, forms, card, badge, alert, table, list, navigation
  (app bar, tab bar, tabs, breadcrumbs), modal, bottom sheet
- **Patterns** — presentation deck (16:9 slide masters) and report document
  (long-form editorial styles)
- **Previews** — self-contained HTML pages with `@dsCard` markers, one card
  per foundation/component, light + dark

Start at [design-system/README.md](design-system/README.md).

[claude-design/](claude-design/) mirrors the same system as it lives in Claude
Design: React components with a compiled `bundle.js` / `bundle.css`, guideline
specimen cards, a catalog-app template and the token list the Design System page
edits. `design-system/` stays the source of truth; see
[claude-design/SYNC.md](claude-design/SYNC.md) for what was pulled and how to
re-sync.
