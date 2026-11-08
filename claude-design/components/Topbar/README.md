Opaque full-width app bar on the canvas, capped by a hairline: wordmark, up to 5 destinations beside it, actions pushed right.

```jsx
<Topbar links={['Catalog','Orders','Depots','Account']} current="Catalog">
  <Button variant="ghost" size="sm">Search</Button>
  <Button size="sm">Sign out</Button>
</Topbar>
```

56px tall, zero elevation: no shadow, no blur. The current page is ink text on a `surface-hover` fill; hover on the other links is the lighter `surface` fill, so position reads stronger than hover. Children render in the actions slot (search, account, at most one small primary).
