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
2. **Considered** — A crisp, quiet page, precise hairlines, product-grade
   restraint. Structure is visible and calm; colour is reserved for meaning.
   Decoration must earn its place.
3. **Wile-E-proof** — Products get tested to destruction. Interfaces are
   forgiving: destructive actions confirm, errors explain how to recover.

## The wordmark

The wordmark is the word **ACME** set in the brand face (Inter, weight 700,
uppercase, 12% letter-spacing), preceded by the **mark**: a Signal Red rounded
square (corner radius 0.3 × its height) containing an upright capital "A" in
white.

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
- On dark or photographic backgrounds, the wordmark text is white and the
  mark lifts to `--acme-red-500` so it stays a bright shape (4.3:1 on
  graphite-950): add `.acme-wordmark--on-dark`.
- The mark may be used alone (favicon, avatar) at 24 px and up.

### Wordmark don'ts

- Don't recolor the mark (it is always Signal Red with a white "A").
- Don't stretch, rotate, outline, or add drop shadows.
- Don't set the wordmark in the body face or lowercase.
- Don't place the mark on a Signal Red or other saturated background.
- Don't italicise the "A" or swap the face; the mark is upright Inter 700.

## The material

ACME interfaces are set on a **crisp Graphite page**: a white canvas, opaque
surfaces, precise 1 px hairlines and soft neutral shadows. It reads like a
well-made product tool: ink text, one grotesque typeface with tight headings,
and colour used only where it means something. Structure comes from borders,
alignment and whitespace; depth from three quiet shadow levels; nothing is
translucent or decorative. Recipes and rules live in
[foundations/shape-elevation.md](../foundations/shape-elevation.md).

## Color in the brand

The brand is **a light Graphite theme where every colour has one job**:

- **Signal Red (`#C91C15`) — the signature.** The wordmark mark, and the
  editorial marks in decks and reports (kickers, rules, section numerals,
  callouts). In product UI, red appears on controls only to mean "destructive".
- **Ink — the action.** The single primary button per view is graphite-900.
- **Blue — interaction.** Links, focus, checked controls, selected rows, the
  chart takeaway.
- **Green / Amber / Red / Blue — status.** Success, warning, danger, info.
- **Graphite — everything else.** Canvas, surfaces, borders, text.

The rule that keeps it honest: **if a colour isn't acting, interacting,
reporting or signing the brand, it's Graphite.** ACME ships a light theme only.
See [foundations/color.md](../foundations/color.md).

## Imagery & illustration

- Product photography on plain `--acme-color-surface` (pale graphite)
  backgrounds, soft daylight, gentle shadows.
- Illustration style: single-weight ink linework on white, the occasional
  Signal Red accent stroke, no gradients.
- No stock-photo people shaking hands. Ever.
