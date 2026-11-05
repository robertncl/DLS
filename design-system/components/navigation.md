# Navigation

Classes: `.acme-topbar`, `.acme-tabs`, `.acme-breadcrumbs` · Preview:
[previews/navigation.html](../previews/navigation.html)

## App bar

The global bar is **part of the page frame**: full-width, opaque canvas,
capped by a `--acme-color-border` hairline. It sits at zero elevation — no
shadow, no float, 56 px tall. The brand anchor is the wordmark itself (the
Signal Red mark never changes). Layout: wordmark, then primary destinations
(max 5) beside it, then `.acme-topbar__actions` pushed right (search, account,
at most one small primary). The current page is ink text on a
`--acme-color-surface-hover` fill via `aria-current="page"`; hover on the
other links is the lighter `surface` fill, so position reads stronger than
hover.

```html
<header class="acme-topbar">
  <a class="acme-wordmark" href="/">
    <span class="acme-wordmark__mark" aria-hidden="true">A</span> ACME</a>
  <nav class="acme-topbar__nav" aria-label="Primary">
    <a class="acme-topbar__link" aria-current="page" href="#">Catalog</a>
    …
  </nav>
  <div class="acme-topbar__actions">…</div>
</header>
```

The bar spans the viewport edge to edge; its inner content aligns to the
page container. It may pin (`position: sticky`) — the hairline keeps it
legible over scrolling content.

## Tabs — underline tabs

Tabs switch **views of the same thing**; they never navigate to a different
page (that's a link) and never trigger actions (that's a button).

- A hairline baseline runs under the whole set; the **selected tab carries a
  2 px ink underline** and its label turns ink. Unselected tabs are muted;
  hover darkens text to ink only. Weight stays 500 in every state, so labels
  never shift.
- The underline plus `aria-selected` — not colour — is what marks the active
  tab.
- 2–6 tabs, one-word labels preferred. Counts go in a quiet pill:
  `Orders<span class="acme-tab__count">12</span>`.
- Proper ARIA: `role="tablist"` / `role="tab"` / `aria-selected`, arrow-key
  navigation between tabs.
- The first tab is selected by default — never render a tabless state.

## Breadcrumbs

For hierarchies ≥ 3 levels deep, directly under the app bar. Current page is
plain text (`aria-current="page"`), ancestors are links, "/" separators are
decorative (`aria-hidden`). Wrap in `<nav aria-label="Breadcrumb">`. Collapse
middle levels beyond 4 with an ellipsis.
