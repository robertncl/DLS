# Typography

Two families, one job each — the modernist editorial pairing: a **serif
display** for headlines and a **neutral grotesque** for everything else.
**Tiempos Headline** (display) gives headings their warm, literary voice;
**Styrene B** (sans) does body, UI, and the wordmark; **JetBrains Mono**
appears only for code, SKUs, and tabular identifiers. All stacks fall back to
system fonts — previews in this repo intentionally load no webfonts, so the
serif renders as Georgia and the sans as a system grotesque.

| Token | Stack |
| --- | --- |
| `--acme-font-display` | Tiempos Headline, Copernicus, Georgia, Times New Roman, ui-serif, serif |
| `--acme-font-sans` | Styrene B, Inter, Helvetica Neue, Segoe UI, system-ui, sans-serif |
| `--acme-font-mono` | JetBrains Mono, ui-monospace, Cascadia Code, Consolas, monospace |

The serif carries headings, card titles, slide titles, and the big section
numerals; the sans carries body, controls, labels, kickers, table headers, and
the wordmark. Don't set body copy in the serif, and don't set headings in the
sans — the contrast between the two families *is* the type system.

## Scale

Rem-based; px values assume a 16 px root. Never set font sizes in px.

| Token | rem / px | Typical use |
| --- | --- | --- |
| `--acme-text-5xl` | 3 / 48 | Marketing hero (serif) |
| `--acme-text-4xl` | 2.25 / 36 | h1, page title (serif) |
| `--acme-text-3xl` | 1.875 / 30 | h2 (serif) |
| `--acme-text-2xl` | 1.5 / 24 | Large stats |
| `--acme-text-xl` | 1.25 / 20 | h3, modal titles (serif) |
| `--acme-text-lg` | 1.125 / 18 | h4, card titles, lede |
| `--acme-text-md` | 1 / 16 | Body (default, sans) |
| `--acme-text-sm` | 0.875 / 14 | UI controls, dense body, tables |
| `--acme-text-xs` | 0.75 / 12 | Captions, badges, table headers |

## Weights & line height

- Serif display renders at **700**; sans weights are 400 body · 500 UI
  emphasis · 600 controls & labels · 700 wordmark.
- Line heights: `tight 1.2` headings · `snug 1.35` large text ·
  `normal 1.5` body/UI · `relaxed 1.65` long-form reading.
- Serif headings take a little negative tracking at large sizes (h1 −1.5%,
  h2 −1%); below the xl step, tracking is normal. ALL-CAPS sans labels (table
  headers, badges, kickers) take +5% tracking and never exceed 12 px.

## Rules

1. Sentence case everywhere — headings, buttons, labels (see
   [voice-and-tone](../brand/voice-and-tone.md)).
2. Body text below 14 px is forbidden; 12 px is for captions and badges only.
3. Line length for prose: 45–75 characters (`max-width: 65ch`) — the serif
   especially wants a comfortable measure.
4. Numbers in tables and stats use `font-variant-numeric: tabular-nums`.
5. Headings are always the serif display face; never fake a heading by bolding
   the sans, and never set a paragraph in the serif.
6. Don't fake hierarchy with size alone — pair size steps with weight, family,
   and color (`--acme-color-text-muted`) shifts.
