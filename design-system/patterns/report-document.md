# Report document

Classes: `.acme-doc`, `.acme-doc-kicker`, `.acme-doc-rule`, `.acme-doc-meta`,
`.acme-callout`, `.acme-figure`, `.acme-doc-footer` · Preview:
[previews/report.html](../previews/report.html)

Long-form documents: quarterly reports, white papers, incident reports.
Single column, `65ch` measure, relaxed leading (1.65). Signal Red is the
document's brand mark: `--acme-color-accent` sets the cover rule, heading
numerals, and the callout accent. Links and the chart takeaway are Blue, as in
the product. Body text and figures stay in Graphite ink.

## Structure

Cover → executive summary (one page, findings first) → table of contents
(only if > 8 pages) → numbered body sections → appendices.

**Cover:** wordmark top-left; bottom-anchored block of kicker (report type,
e.g. "Quarterly report"), rule (`.acme-doc-rule`), title (4xl / 600), and
`.acme-doc-meta` (authors · date · classification).

**Body:** wrap in `.acme-doc`. `h2` (24 px) / `h3` (18 px) self-number via CSS
counters ("3", "3.1") with tabular Signal Red numerals — don't hand-number headings. Body
text is 16 px/1.65; captions and footers 12 px.

## Callouts

`.acme-callout` is the editorial sibling of the UI alert: recessed surface,
hairline edge, 3 px Signal Red leading accent, small uppercase label. Reserve it for **findings and decisions** —
one per section at most. The label states the kind: "Key finding",
"Recommendation", "Risk".

## Figures & tables

- Every figure sits in `.acme-figure`; the `figcaption` auto-numbers
  ("Figure 1 — …") and states what the reader should see, not what the chart
  is: "Figure 3 — Orders rose 12% after instant freight launched."
- Charts follow the deck rule: `--acme-color-data` marks,
  `--acme-color-data-highlight` on the takeaway only.
- Tables reuse [`.acme-table`](../components/table.md); captions go above
  tables, below figures.
- Reference figures in prose by number ("see Figure 3"), never "below".

## Page furniture & print

- `.acme-doc-footer` on every page after the cover: report title left, page
  number right, hairline rule above.
- Documents print exactly as they render (the system is light-only); `acme.css` strips
  shadows and keeps figures, callouts, and tables from breaking across pages
  (`@media print`).
- Writing follows [voice-and-tone](../brand/voice-and-tone.md): findings
  first, numbers as numerals, absolute dates, zero humor in incident reports.
