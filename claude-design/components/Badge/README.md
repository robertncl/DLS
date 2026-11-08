Status badge — a small rounded rectangle.

```jsx
<Badge>Draft</Badge> <Badge variant="success">Shipped</Badge> <Badge variant="warning">Low stock</Badge> <Badge variant="danger">Recalled</Badge> <Badge variant="info">Preorder</Badge>
```

12px / 500 text on a soft tint with a matching hairline, `radius-sm`. Fixed `*-soft` / `*-soft-text` / `*-border` sets only: success Green, warning Amber, danger Red, info Blue, neutral Graphite. Status variants carry a 12px icon (check, triangle, cross, info); neutral has none. The word carries the meaning, the hue speeds scanning. One badge per row or title line.
