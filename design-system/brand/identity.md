# ACME Corp — Brand Identity

> ACME Corp is a **fictional company** invented for this design-language fixture.
> Tagline: **"Everything you need. Instantly."**

ACME Corp ("A Company that Makes Everything") is an industrial-catalog company,
est. 1949, that ships anvils, rocket skates, portable holes, and 40,000 other
products anywhere on Earth. The brand is confident, industrial, and a little
playful — a heritage hardware catalog rebuilt as a modern product company.

## Brand pillars

1. **Instant** — ACME delivers immediately. Interfaces feel fast, motion is
   snappy, copy gets to the point.
2. **Considered** — Warm paper, honest borders, editorial restraint. Structure
   is visible and calm; one warm accent does the emphasis. Decoration must
   earn its place.
3. **Wile-E-proof** — Products get tested to destruction. Interfaces are
   forgiving: destructive actions confirm, errors explain how to recover.

## The wordmark

The wordmark is the word **ACME** set in the sans face (Styrene B, weight 700,
uppercase, 14% letter-spacing), preceded by the **mark**: a Clay square
(radius `--acme-radius-sm`) containing an italic capital "A" in warm white.

In code, use the `.acme-wordmark` component:

```html
<a class="acme-wordmark" href="/">
  <span class="acme-wordmark__mark" aria-hidden="true">A</span>
  ACME
</a>
```

### Wordmark rules

- **Clearspace:** keep at least the height of the mark on all sides.
- **Minimum size:** the mark must never render below 20×20 px.
- On dark or photographic backgrounds, the wordmark text is warm white; the
  mark stays Clay (`--acme-clay-600`).
- The mark may be used alone (favicon, avatar) at 24 px and up.

### Wordmark don'ts

- Don't recolor the mark (it is always Clay with a warm-white "A").
- Don't stretch, rotate, outline, or add drop shadows.
- Don't set the wordmark in the body face or lowercase.
- Don't place the red mark on a red background.

## The material

ACME interfaces are printed on **warm paper** — opaque, flat surfaces in a
warm Oat neutral, with honest 1 px edges and generous space. The page reads
like a well-set document: an ink-on-paper canvas, a serif for the headlines,
and a single warm accent. Structure comes from borders, alignment, and
whitespace; depth from three quiet shadow levels; nothing is translucent or
decorative. Recipes and rules live in
[foundations/shape-elevation.md](../foundations/shape-elevation.md).

## Color in the brand

The brand is **warm paper with one clay highlight**. Oat neutrals build
everything; **Clay** (`#CC785C`), a warm coral, is the single accent, with
**Brick** (a true red) reserved for danger and **Sky** (a muted blue) for
information:

- **Clay — the highlight.** The wordmark mark, the single primary action,
  links, the current page, selected rows, checked controls, editorial marks
  (kickers, rules, numerals), and the one takeaway in a chart. Rationed: a
  screen washed in clay is off-brand.
- **Neutral — everything else.** Body, structure, and even success and warning
  status stay in warm Oat; their icon and label carry the meaning.

The rule that keeps it honest: **clay means "act, attend, or you-are-here";
everything else is paper and ink.** Danger is the one exception that isn't
clay — it's Brick, so a destructive action never hides among the primary ones.
See [foundations/color.md](../foundations/color.md).

## Imagery & illustration

- Product photography on plain warm `--acme-color-surface` backgrounds, soft
  daylight, gentle shadows. Objects sit on paper.
- Illustration style: single-weight ink linework on Oat, the occasional Clay
  accent stroke, no gradients.
- No stock-photo people shaking hands. Ever.
