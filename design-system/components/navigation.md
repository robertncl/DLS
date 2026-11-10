# Navigation

Classes: `.acme-topbar`, `.acme-tabbar`, `.acme-tabs`, `.acme-breadcrumbs` ·
Previews: [previews/navigation.html](../previews/navigation.html),
[previews/mobile.html](../previews/mobile.html)

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

### On compact windows

Below 640 px the bar keeps the wordmark and the actions slot and drops its
destinations — the [tab bar](#tab-bar) carries them. Its side padding follows
`--acme-gutter` and it clears the top safe area. A pushed screen (a record
opened from a list) replaces the wordmark with a back link and the parent's
name:

```html
<header class="acme-topbar">
  <a class="acme-btn acme-btn--ghost acme-btn--icon" href="/orders" aria-label="Back to orders">…</a>
  <span class="acme-topbar__title">Orders</span>
</header>
```

## Tab bar

Primary navigation on compact windows: the same destinations as the app bar
(max 5), at the bottom edge where a thumb reaches. It hides itself from
640 px, so one page can ship both bars.

```html
<nav class="acme-tabbar" aria-label="Primary">
  <a class="acme-tabbar__item" href="/catalog"><svg aria-hidden="true">…</svg>Catalog</a>
  <a class="acme-tabbar__item" href="/orders" aria-current="page"><svg aria-hidden="true">…</svg>Orders</a>
  …
</nav>
```

- 56 px tall plus the bottom safe area, opaque canvas, hairline on top, zero
  elevation — the same construction as the app bar, mirrored.
- Every item is an icon **and** a label (12 px / 500). Icon-only tab bars are
  not allowed: position and the word carry the meaning.
- The current destination is ink with a 2 px ink bar on its top edge, via
  `aria-current="page"`; the others are muted. Weight stays 500, as in tabs.
- Destinations only. Actions ("Create order") belong on the screen, not in
  the bar. A pushed screen keeps the bar unless it has its own footer
  actions.
- Icons: 24 px grid, 2 px round stroke, `currentColor` (see
  [platforms](../foundations/platforms.md#icons)).

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
- Proper ARIA: `role="tablist"` / `role="tab"` / `aria-selected`, and each
  tab's `aria-controls` names its `role="tabpanel"` (which points back with
  `aria-labelledby`).
- Roving tabindex: only the selected tab is in the tab order
  (`tabindex="-1"` on the rest). Left/Right arrows move between tabs and wrap,
  Home/End jump to the first/last, and moving selects the tab.
- The first tab is selected by default — never render a tabless state.

## Breadcrumbs

For hierarchies ≥ 3 levels deep, directly under the app bar. Current page is
plain text (`aria-current="page"`), ancestors are links, "/" separators are
decorative (`aria-hidden`). Wrap in `<nav aria-label="Breadcrumb">`. Collapse
middle levels beyond 4 with an ellipsis.
