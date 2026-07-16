# Form controls

Classes: `.acme-field`, `.acme-label`, `.acme-input`, `.acme-help`,
`.acme-error`, `.acme-choice`, `.acme-switch` · Preview:
[previews/forms.html](../previews/forms.html)

## Anatomy

```html
<div class="acme-field">
  <label class="acme-label" for="sku">SKU
    <span class="acme-label__optional">(optional)</span></label>
  <input class="acme-input" id="sku" placeholder="ACME-0042">
  <p class="acme-help" id="sku-help">Find it on the blueprint label.</p>
</div>
```

- Labels sit **above** inputs, weight 600, always visible — placeholders are
  examples, never labels.
- Mark **optional** fields, not required ones (most fields should be
  required).
- Help text goes below the input in `--acme-color-text-muted`, 12 px.

## Text inputs & selects

- 40 px min height, `--acme-radius-md` (12 px), `--acme-color-border-strong`
  border on `--acme-color-surface-raised`.
- **Fields are opaque by design** — what the user types is content, and
  content is never read through glass (see
  [materials.md](../foundations/materials.md)).
- `<select>` and `<textarea>` share `.acme-input`.

## Validation

- Validate on blur or submit — never on every keystroke of a first entry.
- Invalid: `aria-invalid="true"` (danger border) plus `.acme-error` text
  replacing the help text, linked via `aria-describedby`.
- Error copy states what happened and the fix: "That SKU doesn't exist. Check
  the blueprint label." Never just "Invalid input."

## Checkboxes, radios, switches

- Checkboxes and radios are **native inputs** in an `.acme-choice` row —
  themed by `accent-color`, never rebuilt from divs.
- Radios need 2–5 options and a default; more options → use a select.
- Switch (`.acme-switch`, `role="switch"`) is for settings that take effect
  **immediately**. If a Save button applies the change, use a checkbox.

## Accessibility

- Every control has a `<label for>` — clicking the label focuses the control.
- Group related choices in `<fieldset>` with a `<legend>`.
- Error summaries on submit move focus to the first invalid field.
- Correct `autocomplete` attributes on identity/address/payment fields.
