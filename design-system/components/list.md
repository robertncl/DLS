# List

Classes: `.acme-list`, `.acme-list__row` · Preview:
[previews/mobile.html](../previews/mobile.html)

A list is the compact-window form of a [table](table.md): one row per record,
read top to bottom, each row one target. Use it below 640 px wherever a table
would need more than three columns, and on any screen for short groups of
settings or line items.

## Anatomy

```html
<ul class="acme-list">
  <li><a class="acme-list__row" href="/orders/4417">
    <span class="acme-list__body">
      <span class="acme-list__title">Order #4417</span>
      <span class="acme-list__meta">3 items · Arrives Jul 18</span>
    </span>
    <span class="acme-badge acme-badge--info">Packing</span>
    <svg class="acme-list__chevron" aria-hidden="true">…</svg>
  </a></li>
</ul>
```

- **Row:** 64 px minimum, `--acme-gutter` side padding so text aligns with the
  page, a hairline under each row. Rows run edge to edge.
- **Title:** 16 px / 500 — the table's key column. **Meta:** 14 px muted, one
  line, facts joined with a middle dot.
- **Trailing:** at most one [badge](badge.md) or one value
  (`.acme-list__value`, tabular numerals), then a chevron if the row
  navigates.
- **Inset** (`.acme-list--inset`): a bordered, 10 px-radius group inside a
  padded page — order items, settings. Never inside a card.

## Rules

- A navigating row is a single `<a>`; a row that acts is a single `<button>`.
  No second tappable control inside a row.
- The chevron means "opens a screen". Rows that don't navigate have none.
- Static rows (line items, read-only facts) are plain `<li>` content with no
  hover fill.
- Keep the table's order and the table's words: a list is the same data,
  re-set, not a different view of it.
- Empty lists say what belongs here and offer the action that fills them
  (see [voice-and-tone](../brand/voice-and-tone.md)).
