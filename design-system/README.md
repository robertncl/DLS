# ACME Corp Design Language (v6.0.0)

The design language system for **ACME Corp** — a fictional industrial-catalog
company ("Everything you need. Instantly."). This repo exists as a realistic
fixture for testing design tooling such as Claude Design; nothing here
describes a real company.

One system for **web and mobile apps**: the same tokens, type and components
on both, with two control densities (pointer and touch) and three window
classes (compact, medium, expanded). See
[foundations/platforms.md](foundations/platforms.md).

## Structure

| Path | What it is |
| --- | --- |
| [brand/identity.md](brand/identity.md) | Who ACME is, the wordmark, brand pillars |
| [brand/voice-and-tone.md](brand/voice-and-tone.md) | How ACME writes |
| [foundations/color.md](foundations/color.md) | Light theme: Graphite base, ink primary, Blue interaction, status hues, Signal Red brand; verified contrast |
| [foundations/typography.md](foundations/typography.md) | One grotesque (Inter): scale, weights, tracking |
| [foundations/spacing-layout.md](foundations/spacing-layout.md) | 4 px grid, window classes, breakpoints, containers, control sizes |
| [foundations/platforms.md](foundations/platforms.md) | Web and mobile: what changes between pointer and touch, native mapping, safe areas |
| [foundations/shape-elevation.md](foundations/shape-elevation.md) | Surfaces, radius, borders, shadows |
| [foundations/motion.md](foundations/motion.md) | Durations, easings, reduced-motion |
| [styles.css](styles.css) | Entry stylesheet: imports `fonts.css`, then `acme.css` |
| [tokens/tokens.json](tokens/tokens.json) | Canonical tokens (DTCG format) |
| [tokens/acme.css](tokens/acme.css) | Tokens as CSS custom properties + core component styles |
| [tokens/fonts.css](tokens/fonts.css) | Self-hosted `@font-face` rules for Inter (files in `fonts/`, OFL) |
| [components/](components/) | Specs: button, forms, card, badge, alert, table, list, navigation (app bar, tab bar, tabs, breadcrumbs), modal, sheet |
| [patterns/presentation-deck.md](patterns/presentation-deck.md) | 16:9 slide masters (title, section, content, data, closing) |
| [patterns/report-document.md](patterns/report-document.md) | Long-form documents: cover, numbered headings, callouts, figures, print |
| [previews/](previews/) | **Built**, self-contained HTML previews (one per card) |
| [previews/src/](previews/src/) | Preview sources — edit these, then rebuild |
| [scripts/build-previews.sh](scripts/build-previews.sh) | Inlines `acme.css` into each preview |
| [scripts/check-contrast.py](scripts/check-contrast.py) | Verifies every colour pairing against WCAG AA |

## Using the tokens

Everything is prefixed `acme`. Product code uses **semantic** color tokens
(`--acme-color-*`), never primitive scales or raw hex. ACME is a **light
theme only** — `acme.css` declares `color-scheme: light` and has no dark
variant or theme switch.

```html
<link rel="stylesheet" href="styles.css">
<button class="acme-btn acme-btn--primary">Add to order</button>
```

## Previews

Each file in `previews/` is fully self-contained (no external requests, no
webfonts, light theme) and starts with a `@dsCard` marker naming its card,
group, and viewport — the shape design tools like Claude Design expect:

```html
<!-- @dsCard name="Buttons" group="Components" subtitle="…" width="880" height="520" -->
```

After editing `tokens/acme.css` or anything in `previews/src/`, rebuild:

```sh
design-system/scripts/build-previews.sh
```

Never edit `previews/*.html` directly — the build overwrites them.

## Non-negotiables (the short list)

1. **Every colour has one job.** Ink acts (one primary per view), Blue
   interacts (links, focus, checked, selected), Green / Amber / Red / Blue
   report status, Signal Red signs the brand. Everything else is Graphite.
2. **Red on a control means destructive** — nothing else clickable is red.
   Editorial red (`--acme-color-accent`) stays in decks and reports.
3. Semantic tokens only; no hex values in product code.
4. 4 px spacing grid; if it isn't a token, it isn't a size. Control heights
   and page gutters come from `--acme-control-*` and `--acme-gutter`, never
   from fixed values, so pointer and touch densities both hold.
5. One typeface (Inter), sentence case everywhere; headings are 600 with tight
   tracking; buttons are verb-first and specific.
6. All text meets WCAG AA and control boundaries meet 1.4.11 — the palette is
   verified by [scripts/check-contrast.py](scripts/check-contrast.py); run it
   after any token change (see [foundations/color.md](foundations/color.md)).
7. Status never relies on hue alone: badges name the status, alerts carry an
   icon and a title. Focus rings are Blue, never restyled per component.
8. On touch nothing tappable is smaller than 44×44 px, and navigation always
   pairs an icon with a label.
9. Surfaces are opaque and bordered: raised surfaces take a 1 px hairline,
   shadows only say how high, and nothing is translucent or bounces (see
   [foundations/shape-elevation.md](foundations/shape-elevation.md)).
