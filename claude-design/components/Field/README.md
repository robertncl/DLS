Field wrapper — label above control, help/error below. Wrap every Input/Select/Textarea in one.

```jsx
<Field label="SKU" optional help="Find it on the blueprint label.">
  <Input placeholder="ACME-0042" />
</Field>
<Field label="Quantity" error="That SKU doesn’t exist. Check the blueprint label.">
  <Input defaultValue="ACME-9999" />
</Field>
```

The field wires its single child: it gives the control an id (or uses `htmlFor`), points the label at it, links the help or error text with aria-describedby, and marks it invalid when `error` is set.
