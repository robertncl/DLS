# Claude Design mirror — sync record

`claude-design/` is a copy of the **ACME Corp Design System** as it lives in
Claude Design (the "Design System" artifact
<https://claude.ai/code/artifact/5d277dff-5eaa-4a79-a92c-691bac7f7c07>,
`project/` tree), kept in the repo next to the canonical
[`design-system/`](../design-system/) it was built from.

`design-system/` is still the source of truth. This folder holds what Claude Design
adds on top of it: React components (`components/`), the compiled
`components/bundle.css` + `bundle.js`, guideline specimen cards, the catalog-app
template, the token list format the Design System page edits, and JetBrains Mono.

## Last pull

| | |
| --- | --- |
| Pulled | 2026-11-08 |
| Artifact version | `1794137871-8f50` |
| Artifact's own upstream sync | `master@d1665db` (v5.0.0, PR #12), 2026-11-06 — see [github.md](github.md) |
| Repo at pull time | `master@d1665db` — no upstream drift to push back |

**Token drift: none.** All 101 tokens the two share resolve to the same values as
`design-system/tokens/acme.css`; the only differences are notation (`{alias}` vs
`var()`, hex-alpha vs `rgb()` shadows). `--acme-color-mark` and
`--acme-color-scrim` exist only here, as recorded under *Local deviations* in
[github.md](github.md). The component-level a11y fixes listed there (disabled
states, status icons, focus handling, on-dark wordmark) were ported into
`design-system/` in v5.1.0, so they are no longer deviations.

## What was copied

Verbatim from the artifact: `README.md`, `github.md`, `design-system.json`,
`tokens.json`, `components/**`, `guidelines/**`, `templates/**`, `fonts/**`,
`assets/Fonts/**`.

**Regenerated, not copied: `tokens.css`.** (Fixed in the artifact too: the
rebuilt file was published to it on 2026-11-08 as version 14.) The artifact's
stored `tokens.css` was a
stale compile from the v2 Clay/Oat palette (dark theme, 8/12/16 radii, the serif
display face, `@font-face` rules for deleted files) and did not match its own
`tokens.json`. It was rebuilt here from `tokens.json` with
[compile-tokens.py](compile-tokens.py), which reproduces the page's output format
(`--acme-*` properties, `--font-*` stacks for `bundle.css`, a class per text
style, `@font-face`).

Left out on purpose:

- `archived/` — the pre-migration v2 snapshot, superseded.
- `_ds_manifest.json` — card index the app generates from the `@dsCard` markers.
- `manifest.json` — legacy v1 file list pointing at `archived/` paths.
- `assets/notes/SKILL.from-standalone.md` — migration leftover, not system content.

## Notes

- `components/<Comp>/preview.html` and `guidelines/*.html` render inside the
  Claude Design pane, which injects `tokens.css`, `bundle.css`, React and
  `bundle.js`; opened straight from disk they are unstyled. The catalog template
  loads them itself through `templates/catalog-app/ds-base.js`.
- `fonts/Inter-*.woff2` are byte-identical to `design-system/fonts/`.

## Re-syncing

1. Read the artifact's `project/` files (the Artifact tool's `read` with `paths`).
2. Copy the folders listed above over this tree; skip the excluded files.
3. `python3 claude-design/compile-tokens.py` to rebuild `tokens.css`.
4. Compare `tokens.css` with `design-system/tokens/acme.css` and update this record.
