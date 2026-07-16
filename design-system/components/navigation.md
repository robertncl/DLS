# Navigation

Classes: `.acme-topbar`, `.acme-tabs`, `.acme-breadcrumbs` · Preview:
[previews/navigation.html](../previews/navigation.html)

## Top bar

The global bar is a **floating glass capsule** — glass-strong material,
specular edge, hovering over content with breathing room on all sides rather
than capping the page. The brand anchor is the wordmark itself (the red mark
never changes). Wordmark left, primary destinations right (max 5); the
current page sits on a raised opaque chip via `aria-current="page"`.

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

Give the bar `--acme-space-3` clearance from the viewport edges; it may pin
(`position: sticky`) and float over scrolling content — that's what the glass
is for.

## Tabs — floating segmented control

Tabs switch **views of the same thing**; they never navigate to a different
page (that's a link) and never trigger actions (that's a button).

- A glass capsule containing capsule segments; the **selected segment is a
  raised opaque chip** (`--acme-color-surface-raised` + shadow) so the "you
  are here" signal never depends on the backdrop.
- 2–6 tabs, one-word labels preferred, counts allowed ("Orders 12").
- Proper ARIA: `role="tablist"` / `role="tab"` / `aria-selected`, arrow-key
  navigation between tabs.
- The first tab is selected by default — never render a tabless state.

## Breadcrumbs

For hierarchies ≥ 3 levels deep, directly under the top bar. Current page is
plain text (`aria-current="page"`), ancestors are links, "/" separators are
decorative (`aria-hidden`). Wrap in `<nav aria-label="Breadcrumb">`. Collapse
middle levels beyond 4 with an ellipsis.
