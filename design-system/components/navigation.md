# Navigation

Classes: `.acme-topbar`, `.acme-tabs`, `.acme-breadcrumbs` · Preview:
[previews/navigation.html](../previews/navigation.html)

## App bar

The global bar is **part of the page frame**: full-width, opaque canvas,
capped by a `--acme-color-border` hairline. It sits at zero elevation — no
shadow, no float. The brand anchor is the wordmark itself (the red mark never
changes). Wordmark left, primary destinations right (max 5); the current page
takes a subtle `--acme-color-surface` fill via `aria-current="page"`.

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

The bar spans the viewport edge to edge; its inner content aligns to the
page container. It may pin (`position: sticky`) — the hairline keeps it
legible over scrolling content.

## Tabs — underline tabs

Tabs switch **views of the same thing**; they never navigate to a different
page (that's a link) and never trigger actions (that's a button).

- A hairline baseline runs under the whole set; the **selected tab carries a
  2 px neutral underline** (`--acme-color-text`) and darkens to full text
  color. Unselected tabs are muted; hover darkens text only.
- The indicator is neutral — same ink as the rest of the interface. The
  wordmark mark is the only red left in the system; everything else,
  including the primary action, is Graphite.
- 2–6 tabs, one-word labels preferred, counts allowed ("Orders 12").
- Proper ARIA: `role="tablist"` / `role="tab"` / `aria-selected`, arrow-key
  navigation between tabs.
- The first tab is selected by default — never render a tabless state.

## Breadcrumbs

For hierarchies ≥ 3 levels deep, directly under the app bar. Current page is
plain text (`aria-current="page"`), ancestors are links, "/" separators are
decorative (`aria-hidden`). Wrap in `<nav aria-label="Breadcrumb">`. Collapse
middle levels beyond 4 with an ellipsis.
