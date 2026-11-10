# Bottom sheet

Classes: `.acme-sheet`, `.acme-sheet-backdrop` · Preview:
[previews/sheet.html](../previews/sheet.html)

A bottom sheet is the compact-window form of a [modal](modal.md). It earns
the same interruption for the same reasons — destructive confirms, short
focused tasks, blocking errors — and puts the actions where a thumb reaches.
From 640 px the same markup centres itself and reads as a modal.

## Anatomy

```html
<div class="acme-sheet-backdrop">
  <div class="acme-sheet" role="dialog" aria-modal="true" aria-labelledby="sheet-title">
    <div class="acme-sheet__handle" aria-hidden="true"></div>
    <h2 class="acme-sheet__title" id="sheet-title">Cancel order #4416?</h2>
    <div class="acme-sheet__body"><p>This cancels 1 item and refunds $89.00 to your card.</p></div>
    <div class="acme-sheet__footer">
      <button class="acme-btn acme-btn--danger acme-btn--lg acme-btn--block">Cancel order</button>
      <button class="acme-btn acme-btn--secondary acme-btn--lg acme-btn--block">Keep order</button>
    </div>
  </div>
</div>
```

- Backdrop: the modal's graphite scrim, no blur.
- Panel: opaque `--acme-color-surface-raised`, hairline, `--acme-radius-xl`
  on the top corners only, `--acme-shadow-lg`, full width, at most 90% of the
  viewport height, padded for the bottom safe area.
- Handle: a 36×4 px bar. It signals that the sheet can be dragged down; it is
  not the only way to dismiss.
- Title 18 px / 600; body muted 14 px.
- Footer: a recessed `surface` band; actions **stacked full-width**, 48 px
  each, the primary or danger action on top and the safe action below it.

## Rules

- Same copy rules as a modal: the title names the action and object, the
  confirm button repeats the verb, destructive confirms carry no humour.
- Destructive confirms don't dismiss on backdrop tap or drag; the safe action
  is always a visible button.
- One sheet at a time. A sheet never opens a modal or another sheet.
- More than ~4 fields or a second scroll region is a screen, not a sheet.

## Behavior & accessibility

- Build on `<dialog>` + `showModal()`, as with the modal: focus trap, Esc and
  top-layer stacking come free.
- Focus moves to the first field or the safe action on open and returns to
  the trigger on close.
- Enter: translate up 8 px + fade, `--acme-duration-slow` ease-out; exit
  faster (`--acme-duration-base`). No spring, no overshoot.
- Native apps use the platform sheet presentation with ACME's surface,
  radius and button stack.
