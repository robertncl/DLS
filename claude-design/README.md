# ACME Corp Design System

The design language system for **ACME Corp** — a fictional industrial-catalog company ("Everything you need. Instantly."). ACME ("A Company that Makes Everything"), est. 1949, ships anvils, rocket skates, portable holes, and 40,000 other products anywhere on Earth. The brand is confident, industrial, and a little playful — a heritage hardware catalog rebuilt as a modern product company.

**Source:** built from https://github.com/robertncl/DLS (the `design-system/` tree: brand, foundations, tokens, component specs, previews), currently v5.0.0. Explore that repo for the canonical prose specs — this project is a faithful, componentized recreation.

## Brand pillars

1. **Instant** — interfaces feel fast, motion is snappy, copy gets to the point.
2. **Considered** — a crisp, quiet page, precise hairlines, product-grade restraint. Structure is visible and calm; colour is reserved for meaning. Decoration must earn its place.
3. **Wile-E-proof** — interfaces are forgiving: destructive actions confirm, errors explain how to recover.

## Non-negotiables

1. **Every colour has one job.** Ink acts (one primary per view), Blue interacts (links, focus, checked, selected), Green / Amber / Red / Blue report status, Signal Red signs the brand. Everything else is Graphite.
2. **Red on a control means destructive** — nothing else clickable is red. Editorial red (`--acme-color-accent`) stays in decks and reports.
3. Semantic tokens only (`--acme-color-*`); no hex in product code.
4. 4px spacing grid — if it isn't a token, it isn't a size.
5. One typeface (Inter), sentence case everywhere; headings are 600 with tight tracking; buttons are verb-first and specific.
6. All text meets WCAG AA and control boundaries meet 1.4.11 (palette pre-verified).
7. Status never relies on hue alone: badges name the status, alerts carry an icon and a title. Focus rings are Blue, never restyled per component.
8. Surfaces are opaque and bordered: raised surfaces take a 1px hairline, shadows only say how high, nothing is translucent or bounces.

## CONTENT FUNDAMENTALS

ACME sounds like a veteran shopkeeper: **plainspoken, confident, dryly funny**.

- **Plainspoken.** Short sentences. Concrete nouns. Never "leverage", "seamless", "solutions".
- **Confident, not boastful.** "Ships today" beats "blazingly fast logistics".
- **Dry humor, rationed.** One wink per screen; never in errors about money, safety, or data loss.
- **On the user's side.** Errors say what happened, why, and the next step — in that order.

Casing & mechanics:
- Sentence case everywhere: headings, buttons, labels, table headers ("Track order", not "Track Order").
- Buttons verb-first and specific: "Delete 12 products", never "Confirm"/"OK"/"Submit".
- Numbers as numerals ("3 items"); absolute dates when it matters ("Arrives Jul 18"), relative when ambient ("Updated 2 hours ago").
- Never blame the user; avoid exclamation marks (max one per flow).
- No emoji anywhere in product UI.

Tone by context (examples from the source):
- Marketing / empty states — warm, playful: "Nothing here yet. The catalog has 40,000 ideas."
- Transactional — neutral, brisk: "Order #4417 confirmed. Arrives Thursday."
- Recoverable errors — calm, directive: "Card declined. Try another card or contact your bank."
- Destructive — serious, zero humor: "This deletes 12 products permanently. This can't be undone."
- Success — brief: "Saved."

Vocabulary: say *order* (not purchase transaction), *ships/arrives*, *price*, *delete* (permanent) vs *remove* (reversible), *sign in/out* (not login).

## VISUAL FOUNDATIONS

- **Color:** a crisp Graphite page where every colour has one job, light theme only. **Graphite** (`--acme-gray-*`, a cool near-neutral with a hint of blue; white canvas, anchor `900 #15181D`) builds every surface, border and word, and fills the primary action with **ink**: the one solid primary per view is Graphite 900 (white label 17.8:1), hover lightens to 700, pressed settles to 800. **Blue** (`--acme-blue-*`, anchor `600 #1F57C9`) marks everything you can interact with: links (blue-700), the focus ring, checked controls and switch tracks (blue-600), selected rows (`selected-soft`, blue-50 — text stays ink) and the chart takeaway. **Green / Amber / Red / Blue** report success, warning, danger and info, each as a `*-soft` / `*-soft-text` / `*-border` set that always travels together, plus a status ink for icons. **Signal Red** (`--acme-red-*`, anchor `600 #C91C15`) signs the brand — the wordmark mark, and the editorial marks in decks and reports via `--acme-color-accent` (red-700: kickers, rules, numerals, callouts) — and on a control means destructive, nothing else (`danger-emphasis` red-600, hover red-700). Charts: `--acme-color-data` (Graphite 400) carries every mark, `--acme-color-data-highlight` (blue-600) marks the single takeaway, always direct-labelled; Blue against grey stays distinct under protanopia and deuteranopia. There is **no dark theme** (`color-scheme: light`, no `data-theme` switch); the only dark surface is the deck bookend, which pins its own colours.
- **Type:** one family — **Inter** sets headings, body, UI and the wordmark; hierarchy comes from size, weight, tracking and colour. **JetBrains Mono** for code, SKUs and tabular identifiers only. Rem scale 12→48px; body 16px, UI 14px, captions/badges/table headers 12px minimum. Weights: 400 body, 500 UI (buttons, labels, nav, tabs, badges, table headers), 600 headings and emphasis, 700 the wordmark only. Tracking tokens: `--acme-tracking-tight` (−0.02em) at 24px and up, `--acme-tracking-snug` (−0.011em) from 16–20px and on buttons, `--acme-tracking-caps` (+0.06em) for the few uppercase editorial kickers. Headings `text-wrap: balance`, paragraphs `pretty`. Tables and stats use `tabular-nums`. No italics for emphasis in UI.
- **Spacing:** strict 4px grid, tokens `--acme-space-1…24` (4→96px). Card padding 20, section padding 24, between groups 32, between page sections 48. Container 1200px max, 12-col grid, 24px gutters. Proximity rule: space within a group < space between groups.
- **Shape:** crisp, product-grade radii. 4px (badges, checkboxes), 6px (buttons and inputs share this, so forms and controls read as one family; nav links), 10px (cards, alerts), 12px (modals). Pills (full radius) are reserved for the switch track and tab counts. Nesting decreases radius: modal (12) › card (10) › field (6) › checkbox (4). Inputs and switch tracks keep a `border-strong` hairline (3:1+); secondary buttons take the lighter `border-control` edge, which the label and shadow-sm make legible.
- **Elevation:** hairline + soft graphite-tinted shadow, never a shadow alone. Resting (border + shadow-sm — cards, buttons, inputs), raised (border-control + shadow-md — hovered interactive cards, dropdowns), floating (border + shadow-lg — modals, command palettes). The app bar sits at zero elevation, separated only by its bottom hairline. Recessed `surface` bands (table header, card and modal footers, callouts) carry structure without lifting anything.
- **Motion:** calm and precise — interfaces respond immediately and settle without ceremony; motion explains cause and effect, it never entertains and never overshoots. 100/150/250/400ms; ease-out for anything entering or responding, ease-in-out for position changes and exits. No spring, bounce, or overshoot anywhere — a press is acknowledged by its `:active` color step, not by deforming. Animate only opacity + transform (plus color/border/shadow transitions on controls); translations 4–8px, scale from 0.98 (never from 0). Nothing loops except progress indicators. No entrance animation on page load. `prefers-reduced-motion` collapses every duration to ~0.
- **Hover states:** the ink primary lightens one step (graphite-700) and settles on press (800); danger goes one step deeper; secondary tints to `surface` and firms its edge to `border-strong`; ghost fills with `surface-hover` and darkens text; nav links fill `surface`; table rows fill `surface`. Selected/current states (active tab, current nav link) stay put and outrank hover. Disabled controls take the `surface` fill with `text-subtle` ink (4.9:1), never a faded opacity.
- **Backgrounds & imagery:** flat token surfaces — no gradients, patterns, or textures. Product photography on plain `--acme-color-surface` (pale graphite) backgrounds, soft daylight, gentle shadows. Illustration: single-weight ink linework on white, the occasional Signal Red accent stroke, no gradients. No stock-photo handshakes. Ever.
- **Transparency/blur:** none — every surface in this system is opaque. The modal backdrop is `--acme-color-scrim` (Graphite 950 at 45%) with no blur.
- **Cards:** bordered surface-raised panel, 10px radius, shadow-sm resting / border-control + shadow-md on hover if interactive, 20px body padding, 16px / 600 title, optional 16:9 media well and a recessed footer band under a hairline. Never card-on-card.
- **Layout:** the top bar is a full-width, opaque, 56px app bar capped by a bottom hairline (not a floating panel) — wordmark, then up to five destinations beside it, then an actions slot pushed right. The current page is ink text on a `surface-hover` fill.

## ICONOGRAPHY & ASSETS

- **The source repo ships no icon font, SVG set, or image assets.** The only icons are four status glyphs built into Badge and Alert (check, triangle, cross-in-circle, info-in-circle) and the Modal's close cross: inline SVG on a 24px grid, 2px round stroke, `currentColor`. Alert icons take the status hue; they are required, so status reads without colour. There is **no logo file**: the brand mark is a CSS component — a Signal Red rounded square (corner radius 0.3 × its height) with an upright white capital "A", plus "ACME" in Inter 700 uppercase, 12% tracking. Use the `Wordmark` component (`components/brand/`); never draw a substitute logo.
- Emoji: never used. No unicode characters as icons (no ✓ ▲ ✕ ⓘ) — use the SVG glyphs above.
- When icons are genuinely needed, use **Lucide from CDN** (1.5–2px stroke, matches the precise, product-grade feel) and pair every status icon with a text label. **This is a substitution** — the source defines no icon system; flag icon choices to stakeholders.
- Wordmark rules: clearspace ≥ mark height; mark never below 20×20px; on dark grounds — a Graphite 900/950 band in the light page, or a dark slide — use `<Wordmark onDark />` at 20px+ (white letters, mark lifts to `red-500` so it stays a bright 3:1+ shape, 4.4:1 on Graphite 950); mark alone OK ≥24px (favicon/avatar). Don't recolor, stretch, outline, italicise or shadow it, don't swap the face, and never place it on a Signal Red or other saturated ground.

## Presentation & document patterns

The source repo also defines two long-form patterns (CSS classes in `components/bundle.css`, not yet componentized here):
- **Slides** (`.acme-slide` + `__frame/__kicker/__title/__meta/__body/__bullets/__footer/__chart`) — 16:9, `cqi`-sized so one markup scales from thumbnail to projector. Five masters (dark bookends keep every text colour AA on Graphite 950: title `gray-100`, body `gray-300`, footer `gray-400`): title (dark Graphite hero), section divider (dark bookend — an oversized Signal Red numeral marks it), content, data (neutral Graphite bars, the one Blue bar highlights the takeaway), closing (dark). Kickers and bullet markers use `--acme-color-accent` (Signal Red), pinned lighter (red-300, 8.6:1) inside dark bookends for contrast. Slide titles are Inter 600 with tight tracking.
- **Reports** (`.acme-doc` + `-kicker/-rule/-meta`, `.acme-callout`, `.acme-figure`, `.acme-doc-footer`) — 65ch measure, self-numbering headings, Signal Red (`--acme-color-accent`) in exactly three places: cover rule, heading numerals, callout accent — never used as an action color here, just an editorial mark.

See `guidelines/pattern-slide.html` and `guidelines/pattern-doc.html` for specimens.

## Fonts

Self-hosted from `fonts/` and declared in `tokens.css`, so nothing loads from a font CDN:
- **Sans (and headings):** **Inter** 400, 500, 600, 700 — the single brand family, as in the source. `--acme-font-display` is kept as an alias of the sans stack so code written against v4 still resolves.
- **Mono:** **JetBrains Mono** 400, 600 (self-hosted here; the source names it in its stack but ships no file).

Both are SIL OFL 1.1 (licences in `assets/Fonts/`). The v4 serif display face and its stand-in (Source Serif 4) were retired with the v5 sync.

## Index

- `tokens.json` — the tokens: Graphite, Signal Red, Blue, Green and Amber primitives plus every semantic colour (light theme only), type families and text styles, spacing, radii, shadows. Edited on the page.
- `tokens.css` — compiled from `tokens.json` (`--acme-*` custom properties, a class per text style, `@font-face`). Load first.
- `components/bundle.css` — everything `tokens.json` can't hold: type scale (`--acme-text-*`), leading, tracking, motion, base styles, core `.acme-*` component classes, slide + doc patterns. Load after `tokens.css`.
- `components/bundle.js` — React primitives on `window.ACMEDesignSystem_739be1`; sources in `components/<group>/<Comp>.jsx`, props in `components/index.d.ts`, guidelines and a live preview in `components/<Comp>/`.
  - Brand: Wordmark · Actions: Button · Forms: Field, Input, Select, Textarea, Choice, Switch
  - Display: Card, Badge, Alert, Table · Navigation: Topbar, Tabs, Breadcrumbs · Overlay: Modal
- `guidelines/` — foundation specimen cards (colour ramps, semantic and status colours, type, spacing, shape, motion, voice, wordmark, slide + doc patterns)
- `templates/catalog-app/` — ACME catalog web app template (browse → product → order flow)

Component inventory matches the source exactly (button, forms, card, badge, alert, table, navigation, modal + the wordmark). **Intentional additions:** none.

## Caveats

- Light theme only, matching the source (`acme.css` declares `color-scheme: light`); the deck's dark bookends are the one dark surface.
- The v5 sync (2026-11-06, `master@d1665db`, PR #12) moved the system from v4's Stone + Signal Red to **Graphite + ink + Blue**: the primary is ink, Blue is interaction, each status has its own hue, and Signal Red is the brand signature plus danger. The Crimson ramp, `danger-emphasis-active` and the serif display face are gone. See `github.md` for the sync record and local deviations.
- No icon set or image/logo assets exist in the source repo — icons would be a Lucide CDN substitution if ever needed, and no logo file exists (the wordmark is CSS-only). Flag any of these if you supply real files.
- Component and token values come from `design-system/tokens/acme.css` and the `design-system/components/*.md` specs in the DLS repo, with the local fixes listed under *Local deviations* in `github.md` (disabled states, status icons, accessibility); behavior notes (validation, empty/loading states) are inferred from those specs, not from live product code.
- The catalog UI kit is an original composition of ACME's real components/tokens applied to a plausible catalog flow — the DLS repo has no screen-level mockups to copy pixel-for-pixel.

**Ask:** tell us what's off — palette balance, copy voice, a missing component, a UI kit screen that doesn't match a real ACME product — and we'll iterate until this feels right.

## Using this system in a canvas or deck

- **Design canvas:** copy `tokens.css`, `components/bundle.css` and `components/bundle.js` to the same paths under the canvas’s `project/ds/<folder>/`. Load `tokens.css`, then `components/bundle.css`, then React 18 + ReactDOM 18, then `components/bundle.js`, which defines `window.ACMEDesignSystem_739be1`; mount a component with `<x-import component-from-global-scope="ACMEDesignSystem_739be1.<Comp>" …>`. No component loads any other file.
- **Slides deck:** nothing to copy — a deck loads no stylesheet or script of the system. Use the colours from `tokens.json` and the `.acme-slide` rules in `components/bundle.css` as reference.
