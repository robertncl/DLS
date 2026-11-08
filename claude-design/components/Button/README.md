ACME button — use for actions; one ink primary per view, danger only for destructive, confirmed actions.

```jsx
<Button variant="primary">Add to order</Button>
<Button>Cancel</Button>
<Button variant="ghost" size="sm">Details</Button>
<Button variant="danger">Delete 12 products</Button>
```

Variants: primary (ink fill — Graphite 900 with a white label — ONE per view), secondary (white with a `border-control` edge, default), ghost (toolbars, cards, table rows, the app bar), danger (Signal Red fill — red on a control only ever means destructive; usually the solid action of a confirmation step). Ink hover lightens to Graphite 700 and pressed settles to 800; danger hover goes one step deeper; nothing scales or bounces. Sizes: sm 32px (dense toolbars, table rows), default 40px, lg 48px. Rounded rectangles at 6px (`radius-md`), shared with inputs. Labels 14px / 500, verb-first sentence case. Disabled uses the surface fill with subtle ink rather than fading.
