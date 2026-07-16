# ACME Corp Design Language (v1.0.0)

The design language system for **ACME Corp** — a fictional industrial-catalog
company ("Everything you need. Instantly."). This repo exists as a realistic
fixture for testing design tooling such as Claude Design; nothing here
describes a real company.

## Structure

| Path | What it is |
| --- | --- |
| [brand/identity.md](brand/identity.md) | Who ACME is, the wordmark, brand pillars |
| [brand/voice-and-tone.md](brand/voice-and-tone.md) | How ACME writes |
| [foundations/color.md](foundations/color.md) | Palette, semantic tokens, verified contrast |
| [foundations/materials.md](foundations/materials.md) | ACME Glass: translucent materials, contrast floors, fallbacks |
| [foundations/typography.md](foundations/typography.md) | Families, scale, weights |
| [foundations/spacing-layout.md](foundations/spacing-layout.md) | 4 px grid, breakpoints, containers |
| [foundations/shape-elevation.md](foundations/shape-elevation.md) | Radius, borders, shadows |
| [foundations/motion.md](foundations/motion.md) | Durations, easings, reduced-motion |
| [tokens/tokens.json](tokens/tokens.json) | Canonical tokens (DTCG format) |
| [tokens/acme.css](tokens/acme.css) | Tokens as CSS custom properties + core component styles |
| [components/](components/) | Specs: button, forms, card, badge, alert, table, navigation, modal |
| [patterns/presentation-deck.md](patterns/presentation-deck.md) | 16:9 slide masters (title, section, content, data, closing) |
| [patterns/report-document.md](patterns/report-document.md) | Long-form documents: cover, numbered headings, callouts, figures, print |
| [previews/](previews/) | **Built**, self-contained HTML previews (one per card) |
| [previews/src/](previews/src/) | Preview sources — edit these, then rebuild |
| [scripts/build-previews.sh](scripts/build-previews.sh) | Inlines `acme.css` into each preview |

## Using the tokens

Everything is prefixed `acme`. Product code uses **semantic** color tokens
(`--acme-color-*`), never primitive scales or raw hex. Both themes live in one
stylesheet: the system preference wins by default; hosts can pin a theme with
`<html data-theme="light|dark">`.

```html
<link rel="stylesheet" href="tokens/acme.css">
<button class="acme-btn acme-btn--primary">Add to order</button>
```

## Previews

Each file in `previews/` is fully self-contained (no external requests, no
webfonts, light + dark) and starts with a `@dsCard` marker naming its card,
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

1. One ACME Red primary action per view; extra red means danger.
2. Semantic tokens only; no hex values in product code.
3. 4 px spacing grid; if it isn't a token, it isn't a size.
4. Sentence case everywhere; buttons are verb-first and specific.
5. All text meets WCAG AA (the palette is pre-verified — see
   [foundations/color.md](foundations/color.md)).
6. Focus rings are Blueprint Blue, never red; `prefers-reduced-motion` is
   always honored.
7. Glass is chrome, not content: primary/danger fills, selected states, form
   fields, status surfaces, and print stay opaque; muted text only on
   glass-strong; everything degrades to opaque under
   `prefers-reduced-transparency` (see
   [foundations/materials.md](foundations/materials.md)).
