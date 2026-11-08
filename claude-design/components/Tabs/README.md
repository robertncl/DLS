Underline tabs — the selected tab carries a 2px ink underline and ink label.

```jsx
<Tabs label="Order status" idPrefix="orders"
  tabs={[{id:'open',label:'Open',count:12},{id:'shipped',label:'Shipped'}]} active={tab} onChange={setTab} />
<div role="tabpanel" id={`orders-panel-${tab}`} aria-labelledby={`orders-tab-${tab}`}>…</div>
```

Unselected tabs are muted; hover darkens to ink. Weight stays 500 in every state so labels never shift. Counts sit in a quiet pill (`surface-hover`). Arrow keys, Home and End move between tabs (selection follows focus). Only the selected tab is in the Tab order.
