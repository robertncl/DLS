# Modal

Classes: `.acme-modal`, `.acme-modal-backdrop` · Preview:
[previews/modal.html](../previews/modal.html)

A modal interrupts. It earns that interruption only for: confirming
destructive actions, short focused tasks (rename, share), and blocking errors.
Anything with more than ~4 fields or its own scrollbar should be a page.

On compact windows use a [bottom sheet](sheet.md) instead — same rules, same
copy, reachable by thumb.

## Anatomy

- Backdrop: a plain `rgb(11 13 16 / 0.45)` graphite scrim — the page dims, no blur.
  Click-to-dismiss (except destructive confirms).
- Panel: opaque `--acme-color-surface-raised` with a hairline border, max
  28 rem wide, `--acme-radius-xl` (12 px), `--acme-shadow-lg`, centered.
- Header: title 18 px / 600 + ghost close button (with `aria-label="Close"`).
- Body: muted 14 px text; keep to a few sentences or one small form.
- Footer: a recessed `surface` band under a hairline; actions right-aligned —
  **primary/danger rightmost**, "Cancel" as a secondary button beside it.

## Destructive confirms

- Title names the action and object: "Delete 12 products?"
- Body states consequence + irreversibility, zero humor (see
  [voice-and-tone](../brand/voice-and-tone.md)).
- Confirm button is `.acme-btn--danger` and repeats the verb ("Delete 12
  products"), never "Yes"/"OK".
- Backdrop click does **not** dismiss; Esc does.

## Behavior & accessibility

- Build on `<dialog>` + `showModal()`: free focus trap, Esc handling, and
  top-layer stacking.
- Focus moves on open to the first field, else the first footer action —
  in a destructive confirm that is "Cancel", never the danger button — and
  returns to the trigger on close.
- Tab and Shift+Tab cycle inside the panel; Esc closes (also for destructive
  confirms, where the backdrop does not).
- `aria-labelledby` points at the title.
- Enter: fade + scale from 0.98, `--acme-duration-deliberate` ease-out; exit
  faster (`--acme-duration-slow`).
- One modal at a time — a modal never opens another modal.
