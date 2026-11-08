Modal dialog — destructive confirms, short tasks, blocking errors.

```jsx
<Modal open={open} title="Delete 12 products?" onClose={close} dismissOnBackdrop={false}
  footer={<><Button onClick={close}>Cancel</Button><Button variant="danger">Delete 12 products</Button></>}>
  This deletes 12 products permanently. This can’t be undone.
</Modal>
```

A white panel with a hairline, 12px radius and shadow-lg over a Graphite scrim (no blur); title 18px / 600; the footer is a recessed `surface` band under a hairline with actions right-aligned. Destructive confirms: the red danger button repeats the verb, zero humor, backdrop click does not dismiss. Focus is trapped inside, starts on the first field or the safe first action (Cancel), Escape closes, and focus returns to what opened it.
