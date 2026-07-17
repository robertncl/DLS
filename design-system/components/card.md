# Card

Class: `.acme-card` · Preview: [previews/cards.html](../previews/cards.html)

A card is one self-contained thing: a product, an order, a metric. If you
can't title it with a noun, it isn't a card — it's a section.

## Anatomy

```html
<article class="acme-card">
  <div class="acme-card__media">…image / 16:9…</div>
  <div class="acme-card__body">
    <h3 class="acme-card__title">Rocket skates</h3>
    <p>Twin-turbine. Self-balancing. Mostly.</p>
  </div>
  <div class="acme-card__footer">
    <button class="acme-btn acme-btn--secondary acme-btn--sm">Details</button>
  </div>
</article>
```

Media (optional, 16:9) → body (20 px padding: title 18 px/700, supporting text
muted 14 px) → footer (optional, separated by a hairline; actions and meta).

## Variants

Cards are **bordered raised surfaces**: `--acme-color-surface-raised`, a
`--acme-color-border` hairline, 12 px radius, resting `--acme-shadow-sm`.

- **Static** (default): no hover response.
- **Interactive** (`.acme-card--interactive`): whole card is one link/button;
  hover strengthens the border and raises to `--acme-shadow-md` — no scaling
  or lifting. One target per card — don't nest other clickables inside an
  interactive card.

## Rules

- Cards sit on `--acme-color-canvas` or `--acme-color-surface`, never on
  another card.
- Grids of cards: equal heights per row (`stretch`), `--acme-space-6` gaps,
  3–4 columns max at xl.
- Max one primary button across an entire card grid — card actions are
  secondary/ghost.
- A card with only text and no border-worthy identity should be a list item
  instead. When in doubt, use the table.
