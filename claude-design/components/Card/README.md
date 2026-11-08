Card — one noun-titled thing (product, order, metric).

```jsx
<Card media="16:9" title="Rocket skates" footer={<Button size="sm">Details</Button>}>
  <p style={{color:'var(--acme-color-text-muted)',fontSize:14,margin:0}}>Twin-turbine. Self-balancing. Mostly.</p>
</Card>
```

A bordered raised surface: hairline, 10px radius, resting shadow-sm. Title 16px / 600; the media well and footer are recessed `surface` bands under hairlines. `interactive` makes the whole card one target — hover firms the edge to `border-control` and raises to shadow-md, no scaling (no nested clickables then). Grid cards: 24px gaps, 3–4 columns max, card actions are secondary/ghost.
