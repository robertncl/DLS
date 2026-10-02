# Presentation deck

Classes: `.acme-slide` (+ `__frame`, `__kicker`, `__title`, `__meta`, `__body`,
`__bullets`, `__footer`, `__chart`) · Preview:
[previews/presentation.html](../previews/presentation.html)

ACME decks are 16:9, built from five slide masters. Slide type is sized in
`cqi` units, so the same markup renders correctly as a thumbnail, in an
editor, or on a projector. Every slide is `.acme-slide` wrapping a single
`.acme-slide__frame` (required — it carries the padding).

## The five masters

| Master | Class | Background | Use |
| --- | --- | --- | --- |
| Title | `--dark --hero` | Navy (slate-950) | First slide: wordmark, deck title, presenter + date |
| Section divider | `--dark --section` | Navy (slate-950) — same ground as the bookends | Chapter breaks: giant italic Cobalt numeral + one-line title |
| Content | *(default)* | Canvas | Kicker, title, ≤ 4 bullets or one short paragraph |
| Data | *(default)* | Canvas | Kicker, takeaway headline, exactly one chart |
| Closing | `--dark` | Navy (slate-950) | Tagline + contact; bookends the deck with the title slide |

Decks breathe between **two grounds** — deep navy (bookends and section
dividers) and the blue-white canvas (content and data). The navy slides are
the only dark surface in the light-only system and pin their own colors (see
[color.md](../foundations/color.md#light-theme-only)). The section divider is
marked out by scale *and* the accent: its giant 12cqi numeral runs in bright
Cobalt (cobalt-300 on navy), the single sanctioned pop of color in the deck.
Pair `--section` with `--dark` in markup; it supplies the numeral treatment.

## Typography on slides

At a 1280 px reference width: kicker 23 px uppercase Cobalt accent · titles 51 px (hero
77 px) display face · body/bullets 28 px (~21 pt) · footer 18 px. Body text
never renders below the 2.2cqi baseline — if it doesn't fit, the slide has
too many words.

## Content rules

1. One idea per slide; the title states the idea, not the topic.
2. Maximum 4 bullets, ~8 words each, no sub-bullets, no full sentences.
3. Data slides: the headline is the takeaway ("Orders up 12% after instant
   freight"), never a label ("Q2 orders"). One chart per slide.
4. In charts, **value carries data; the strongest (Cobalt) mark is the
   single takeaway** — `--acme-color-data` for all
   marks, `--acme-color-data-highlight` on the one bar/point/line the headline
   is about, with a direct label on that mark only. The pair is CVD-safe by
   construction — see [color.md](../foundations/color.md).
5. Every slide after the title carries the footer: wordmark, deck title,
   slide number.
6. Sentence case everywhere; no gradients, no stock photos, no clip art.

## Skeleton

```html
<section class="acme-slide">
  <div class="acme-slide__frame">
    <p class="acme-slide__kicker">Logistics</p>
    <h2 class="acme-slide__title">Instant freight in 3 steps</h2>
    <ul class="acme-slide__bullets">…</ul>
    <footer class="acme-slide__footer">
      <span class="acme-wordmark"><span class="acme-wordmark__mark">A</span> ACME</span>
      <span>Q2 2026 review</span>
      <span class="acme-slide__footer-num">7</span>
    </footer>
  </div>
</section>
```
