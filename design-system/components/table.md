# Table

Class: `.acme-table` · Preview: [previews/table.html](../previews/table.html)

Tables are ACME's workhorse for catalog and order data. Semantic `<table>`
markup only — no div grids.

On compact windows (below 640 px) a table with more than three columns
becomes a [list](list.md): one row per record, the key column as the title.
Never shrink the type or let the page scroll sideways; if the table must stay
a table, scroll it inside its own `overflow-x: auto` box.

## Anatomy

- **Header row:** a recessed `--acme-color-surface` band between hairlines;
  12 px / 500, sentence case, muted colour, no wrapping.
- **Body rows:** 14 px, 12 px cell padding, hairline row borders, hover fill
  `--acme-color-surface`.
- **Numeric columns:** right-aligned with `tabular-nums`
  (`.acme-table__num` on both `th` and `td`).
- Status columns use [badges](badge.md); row actions use small ghost buttons,
  revealed at rest (not on hover — hover-only actions fail on touch).

## Rules

- Left-align text, right-align numbers, never center data columns.
- Rows are scannable, not prose: truncate long text with a title attribute,
  cap at one line.
- Empty state: keep the header row, show a short message + the action that
  fills the table ("No orders yet. Share your catalog link.").
- Sorting: clickable `<th>` with `aria-sort`; the sorted header steps up to
  ink at 600 and shows a direction arrow (↑/↓, `aria-hidden`).
- Pagination beyond ~50 rows; virtualize beyond ~500.
- Column headers describe data ("Ship date"), not actions.

## Accessibility

- `<caption>` names every table. When the page heading already titles it,
  hide the caption visually with `.acme-visually-hidden` — never drop it.
- `scope="col"` / `scope="row"` on header cells.
- Row hover is decoration only (graphite-50 fill); selection uses a leading checkbox
  column plus `aria-selected="true"` on the `<tr>`, which tints the row
  `--acme-color-selected-soft` (blue-50; text stays ink). Selection state must
  never be carried by the tint alone.
