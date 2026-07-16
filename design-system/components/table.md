# Table

Class: `.acme-table` · Preview: [previews/table.html](../previews/table.html)

Tables are ACME's workhorse for catalog and order data. Semantic `<table>`
markup only — no div grids.

## Anatomy

- **Header row:** 12 px, semibold, uppercase, +5% tracking, muted color;
  bottom border `--acme-color-border-strong`.
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
- Sorting: clickable `<th>` with `aria-sort`; sorted column header darkens to
  `--acme-color-text`.
- Pagination beyond ~50 rows; virtualize beyond ~500.
- Column headers describe data ("Ship date"), not actions.

## Accessibility

- `<caption>` (visually hidden if needed) names every table.
- `scope="col"` / `scope="row"` on header cells.
- Row hover is decoration only; selection uses a leading checkbox column.
