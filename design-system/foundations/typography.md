# Typography

Two families, one job each. **Archivo** (display) gives headlines their
industrial voice; **Inter** (sans) does everything else; **JetBrains Mono**
appears only for code, SKUs, and tabular identifiers. All stacks fall back to
system fonts — previews in this repo intentionally load no webfonts.

| Token | Stack |
| --- | --- |
| `--acme-font-display` | Archivo, Inter, Segoe UI, system-ui, sans-serif |
| `--acme-font-sans` | Inter, SF Pro Text, Segoe UI, system-ui, sans-serif |
| `--acme-font-mono` | JetBrains Mono, ui-monospace, Cascadia Code, Consolas, monospace |

## Scale

Rem-based; px values assume a 16 px root. Never set font sizes in px.

| Token | rem / px | Typical use |
| --- | --- | --- |
| `--acme-text-5xl` | 3 / 48 | Marketing hero |
| `--acme-text-4xl` | 2.25 / 36 | h1, page title |
| `--acme-text-3xl` | 1.875 / 30 | h2 |
| `--acme-text-2xl` | 1.5 / 24 | Large stats |
| `--acme-text-xl` | 1.25 / 20 | h3, modal titles |
| `--acme-text-lg` | 1.125 / 18 | h4, card titles, lede |
| `--acme-text-md` | 1 / 16 | Body (default) |
| `--acme-text-sm` | 0.875 / 14 | UI controls, dense body, tables |
| `--acme-text-xs` | 0.75 / 12 | Captions, badges, table headers |

## Weights & line height

- Weights: 400 body · 500 UI emphasis · 600 controls & labels · 700 headings ·
  800 wordmark/display only.
- Line heights: `tight 1.2` headings · `snug 1.35` large text ·
  `normal 1.5` body/UI · `relaxed 1.65` long-form reading.
- Headings ≥ 30 px take negative tracking (−1% to −2%); ALL-CAPS labels
  (table headers, badges) take +5% tracking and never exceed 12 px.

## Rules

1. Sentence case everywhere — headings, buttons, labels (see
   [voice-and-tone](../brand/voice-and-tone.md)).
2. Body text below 14 px is forbidden; 12 px is for captions and badges only.
3. Line length for prose: 45–75 characters (`max-width: 65ch`).
4. Numbers in tables and stats use `font-variant-numeric: tabular-nums`.
5. Don't use weight 800 outside the wordmark and marketing display type.
6. Don't fake hierarchy with size alone — pair size steps with weight and
   color (`--acme-color-text-muted`) shifts.
