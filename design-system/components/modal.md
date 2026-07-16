# Modal

Classes: `.acme-modal`, `.acme-modal-backdrop` · Preview:
[previews/modal.html](../previews/modal.html)

A modal interrupts. It earns that interruption only for: confirming
destructive actions, short focused tasks (rename, share), and blocking errors.
Anything with more than ~4 fields or its own scrollbar should be a page.

## Anatomy

- Backdrop: `rgb(12 14 18 / 0.55)`, click-to-dismiss (except destructive
  confirms).
- Panel: max 28 rem wide, `--acme-radius-xl`, `--acme-shadow-lg`, centered.
- Header: title 20 px + ghost close button (with `aria-label="Close"`).
- Body: muted 14 px text; keep to a few sentences or one small form.
- Footer: actions right-aligned — **primary/danger rightmost**, "Cancel" as a
  secondary button beside it.

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
- Focus moves to the first sensible control on open and returns to the
  trigger on close.
- `aria-labelledby` points at the title.
- Enter: fade + scale from 0.98, `--acme-duration-deliberate` ease-out; exit
  faster (`--acme-duration-slow`).
- One modal at a time — a modal never opens another modal.
