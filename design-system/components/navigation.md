# Navigation

Classes: `.acme-topbar`, `.acme-tabs`, `.acme-breadcrumbs` · Preview:
[previews/navigation.html](../previews/navigation.html)

## Top bar

The global bar is always **Graphite 900**, in both themes — it anchors the
brand. Wordmark left, primary destinations right (max 5), current page in
white via `aria-current="page"`, other links Graphite 300.

```html
<header class="acme-topbar">
  <a class="acme-wordmark" href="/">
    <span class="acme-wordmark__mark" aria-hidden="true">A</span> ACME</a>
  <nav class="acme-topbar__nav" aria-label="Primary">
    <a class="acme-topbar__link" aria-current="page" href="#">Catalog</a>
    …
  </nav>
</header>
```

## Tabs

Tabs switch **views of the same thing**; they never navigate to a different
page (that's a link) and never trigger actions (that's a button).

- Underline style: 2 px ACME Red under the selected tab, selected label in
  primary color, weight 600.
- 2–6 tabs, one-word labels preferred, counts allowed ("Orders 12").
- Proper ARIA: `role="tablist"` / `role="tab"` / `aria-selected`, arrow-key
  navigation between tabs.
- The first tab is selected by default — never render a tabless state.

## Breadcrumbs

For hierarchies ≥ 3 levels deep, directly under the top bar. Current page is
plain text (`aria-current="page"`), ancestors are links, "/" separators are
decorative (`aria-hidden`). Wrap in `<nav aria-label="Breadcrumb">`. Collapse
middle levels beyond 4 with an ellipsis.
