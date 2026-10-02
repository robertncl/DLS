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
2. **Considered** — A clean blue-white page, honest borders, editorial
   restraint. Structure is visible and calm; one blue accent does the
   emphasis. Decoration must earn its place.
3. **Wile-E-proof** — Products get tested to destruction. Interfaces are
   forgiving: destructive actions confirm, errors explain how to recover.

## The wordmark

The wordmark is the word **ACME** set in the sans face (Styrene B, weight 700,
uppercase, 14% letter-spacing), preceded by the **mark**: a Cobalt square
(radius `--acme-radius-sm`) containing an italic capital "A" in white.

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
- On navy or photographic backgrounds, the wordmark text is white; the mark
  stays Cobalt (`--acme-blue-600`).
- The mark may be used alone (favicon, avatar) at 24 px and up.

### Wordmark don'ts

- Don't recolor the mark (it is always Cobalt with a white "A").
- Don't stretch, rotate, outline, or add drop shadows.
- Don't set the wordmark in the body face or lowercase.
- Don't place the mark on a Cobalt or saturated blue background.

## The material

ACME interfaces are set on a **cool blue-white page** — opaque, flat surfaces
in a blue-tinted Slate neutral, with honest 1 px edges and generous space. The
page reads like a well-set technical document: navy ink on a light canvas, a
serif for the headlines, and a single blue accent. Structure comes from borders, alignment, and
whitespace; depth from three quiet shadow levels; nothing is translucent or
decorative. Recipes and rules live in
[foundations/shape-elevation.md](../foundations/shape-elevation.md).

## Color in the brand

The brand is **a blue-based light theme with one Cobalt highlight**. Slate
neutrals — tinted blue — build everything; **Cobalt** (`#2F6BE4`), a clear
confident blue, is the single accent, with **Red** reserved for danger and
**Teal** for information:

- **Cobalt — the highlight.** The wordmark mark, the single primary action,
  links, the current page, selected rows, checked controls, editorial marks
  (kickers, rules, numerals), and the one takeaway in a chart. Rationed: a
  screen washed in saturated blue is off-brand.
- **Slate — everything else.** Body, structure, and even success and warning
  status stay in the Slate neutral; their icon and label carry the meaning.

The rule that keeps it honest: **Cobalt means "act, attend, or you-are-here";
everything else is Slate.** Danger is the one exception — it's Red, the only
warm hue in the system, so a destructive action never hides among the primary
ones. ACME ships a light theme only.
See [foundations/color.md](../foundations/color.md).

## Imagery & illustration

- Product photography on plain `--acme-color-surface` (pale blue-grey)
  backgrounds, cool daylight, gentle shadows.
- Illustration style: single-weight navy linework on Slate, the occasional
  Cobalt accent stroke, no gradients.
- No stock-photo people shaking hands. Ever.
