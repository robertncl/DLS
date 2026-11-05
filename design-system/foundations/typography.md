# Typography

One family, one voice. **Inter**, a neutral grotesque drawn for screens, sets
everything: headings, body, UI, and the wordmark. Hierarchy comes from **size,
weight, tracking and colour**, not from a second typeface. **JetBrains Mono**
appears only for code, SKUs and tabular identifiers.

`styles.css` self-hosts Inter from [tokens/fonts.css](../tokens/fonts.css)
in weights 400, 500, 600 and 700, under the SIL Open Font License.
`--acme-font-display` is kept as an alias of the sans stack, so code written
against v4 still resolves. Previews in this repo intentionally load no webfonts,
so they render in the system grotesque (Helvetica Neue, Segoe UI or system-ui).

| Token | Stack |
| --- | --- |
| `--acme-font-sans` | Inter, Helvetica Neue, Segoe UI, system-ui, sans-serif |
| `--acme-font-display` | alias of `--acme-font-sans` |
| `--acme-font-mono` | JetBrains Mono, ui-monospace, Cascadia Code, Consolas, monospace |

## Scale

Sizes are rem-based. The px values assume a 16 px root. Never set font sizes
in px.

| Token | rem / px | Weight · tracking | Typical use |
| --- | --- | --- | --- |
| `--acme-text-5xl` | 3 / 48 | 600 · −2% | Marketing hero |
| `--acme-text-4xl` | 2.25 / 36 | 600 · −2% | h1, page title |
| `--acme-text-3xl` | 1.875 / 30 | 600 · −2% | h2, stat values |
| `--acme-text-2xl` | 1.5 / 24 | 600 · −2% | Report h2 |
| `--acme-text-xl` | 1.25 / 20 | 600 · −1.1% | h3 |
| `--acme-text-lg` | 1.125 / 18 | 600 · −1.1% | h4, modal titles, lede |
| `--acme-text-md` | 1 / 16 | 400 | Body (default), card titles at 600 |
| `--acme-text-sm` | 0.875 / 14 | 400 / 500 | UI controls, labels, dense body, tables |
| `--acme-text-xs` | 0.75 / 12 | 400 / 500 | Captions, badges, table headers, help text |

## Weights, tracking & line height

- **Weights.**
  - 400 is body text.
  - 500 is UI: buttons, labels, nav, tabs, badges, table headers.
  - 600 is headings and emphasis.
  - 700 is the wordmark only.

  Don't use 800 or heavier.
- **Tracking tokens.**
  - `--acme-tracking-tight` (−0.02em) applies at 24 px and up.
  - `--acme-tracking-snug` (−0.011em) applies from 16 to 20 px and to buttons.
  - `--acme-tracking-caps` (+0.06em) is for the few uppercase labels.

  Large grotesque type looks loose at default tracking, and tightening it is
  most of what makes headings look current.
- **Line heights.**
  - `tight 1.2`: headings
  - `snug 1.35`: large text
  - `normal 1.5`: body and UI
  - `relaxed 1.65`: long-form reading
- **Uppercase is rare.** Use it only for editorial kickers and callout labels in
  decks and reports, never above 12 px (slides excepted), and always with caps
  tracking. Table headers, stat labels and badges are sentence case.
- **Wrapping.** Headings use `text-wrap: balance` and paragraphs use
  `text-wrap: pretty`. Both are set in the base styles.

## Rules

1. Sentence case everywhere: headings, buttons, labels, table headers (see
   [voice-and-tone](../brand/voice-and-tone.md)).
2. Body text below 14 px is forbidden. 12 px is for captions, badges and table
   headers only.
3. Line length for prose is 45–75 characters (`max-width: 65ch`).
4. Numbers in tables, stats and section numerals use
   `font-variant-numeric: tabular-nums`.
5. Build hierarchy from size *and* weight *and* colour
   (`--acme-color-text-muted`). Size alone isn't enough.
6. Don't use italics for emphasis in UI. Use weight 500/600.
