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
2. **Industrial** — Built from steel and cardboard. Strong neutrals, honest
   borders, visible structure. Decoration must earn its place.
3. **Wile-E-proof** — Products get tested to destruction. Interfaces are
   forgiving: destructive actions confirm, errors explain how to recover.

## The wordmark

The wordmark is the word **ACME** set in the display face (Archivo, weight 800,
uppercase, 12% letter-spacing), preceded by the **mark**: an ACME Red square
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
- On dark or photographic backgrounds, the wordmark text is white; the mark
  stays ACME Red (`--acme-red-600`).
- The mark may be used alone (favicon, avatar) at 24 px and up.

### Wordmark don'ts

- Don't recolor the mark (it is always ACME Red with a white "A").
- Don't stretch, rotate, outline, or add drop shadows.
- Don't set the wordmark in the body face or lowercase.
- Don't place the red mark on a red background.

## The material

ACME interfaces are built from **pressed steel** — opaque, flat surfaces with
honest 1 px edges, laid out on a visible frame. The shopkeeper's counter is
solid: everything you read or sign is printed on stock you can rap your
knuckles on. Structure comes from borders and alignment, depth from three
quiet shadow levels, and nothing is translucent or decorative. Recipes and
rules live in
[foundations/shape-elevation.md](../foundations/shape-elevation.md).

## Color in the brand

ACME Red (`#C8102E`) lives in exactly one place now: the wordmark mark. The
product itself is monochrome — the primary action, links, status, and data
all speak in Graphite alone, differentiated by value and weight instead of
hue. Red stays legible precisely because it's rationed to a single fixed
spot; the moment it appears twice, it stops meaning "ACME" and starts meaning
nothing. See [foundations/color.md](../foundations/color.md).

## Imagery & illustration

- Product photography on plain `--acme-color-surface` backgrounds, hard light,
  visible shadows. Objects look heavy.
- Illustration style: Graphite linework on Graphite, single-weight strokes,
  no gradients.
- No stock-photo people shaking hands. Ever.
