Data table for catalog/order data.

```jsx
<Table caption="Open orders"
  columns={[{key:'id',label:'Order'},{key:'status',label:'Status'},{key:'total',label:'Total',numeric:true}]}
  rows={[{id:'#4417', status:<Badge variant="success">Shipped</Badge>, total:'$1,204.00'}]} />
```

The header row is a recessed `surface` band between hairlines: 12px / 500, sentence case, muted. Body rows 14px with hairline borders and a `surface` hover. A sorted header (`aria-sort`) steps up to ink at 600 with a direction arrow; selected rows (`aria-selected`) take `selected-soft` (Blue 50). Status cells use Badge; row actions use small ghost Buttons, visible at rest.
