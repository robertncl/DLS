# DLS

Example **design language system** for **ACME Corp**, a fictional company —
built as a test fixture for design tooling (e.g. Claude Design / `/design-sync`).

Everything lives in [design-system/](design-system/):

- **Brand** — identity, wordmark, voice & tone
- **Foundations** — color, typography, spacing, shape & elevation, motion
- **Tokens** — [tokens.json](design-system/tokens/tokens.json) (DTCG) and
  [acme.css](design-system/tokens/acme.css) (custom properties + component styles)
- **Components** — button, forms, card, badge, alert, table, navigation, modal
- **Patterns** — presentation deck (16:9 slide masters) and report document
  (long-form editorial styles)
- **Previews** — self-contained HTML pages with `@dsCard` markers, one card
  per foundation/component, light + dark

Start at [design-system/README.md](design-system/README.md).
