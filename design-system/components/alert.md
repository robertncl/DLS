# Alert

Class: `.acme-alert` · Preview: [previews/feedback.html](../previews/feedback.html)

Inline message surface for page- or section-level status: a soft tinted panel
with a matching tinted hairline, `--acme-radius-lg`, a leading icon in the
status hue, and a semibold ink title over a muted body.

## Variants

| Variant | Class | Use |
| --- | --- | --- |
| Info | *(default)* | Ambient context: "Prices update nightly." |
| Success | `.acme-alert--success` | Confirmation that persists (not a toast) |
| Warning | `.acme-alert--warning` | Something needs attention before it becomes an error |
| Danger | `.acme-alert--danger` | Something failed; include the recovery step |

## Anatomy

```html
<div class="acme-alert acme-alert--warning" role="status">
  <svg aria-hidden="true" …><!-- triangle-exclamation --></svg>
  <div>
    <p class="acme-alert__title">Low stock</p>
    <p>Only 3 anvils left. Restock arrives Jul 20.</p>
  </div>
</div>
```

Title (one line, bold, no period) + body (1–2 sentences, what + next step).
**The leading icon is required.** It takes the status hue automatically (the
first child `svg` reads `--acme-alert-icon`), and its shape — info circle,
check, triangle, x-circle — keeps the status legible without colour (WCAG
1.4.1). See [color.md](../foundations/color.md).

## Rules

- Alerts appear **at the top of the region they describe** — page alerts under
  the page title, field-group alerts above the group.
- Danger alerts state the recovery path or they don't ship.
- `role="status"` for info/success, `role="alert"` for warning/danger that
  appears dynamically.
- Dismissible only if the information is safe to lose; danger alerts about
  unresolved problems are not dismissible.
- Never stack more than one alert per region — consolidate.
- Alerts are static page content; transient feedback ("Saved.") belongs to a
  toast, which reuses alert styling but auto-dismisses.
