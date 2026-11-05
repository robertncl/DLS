# Color

ACME's palette is **a crisp Graphite page where every colour has one job**,
and it ships as a **light theme only**. Graphite, a cool near-neutral grey,
builds every surface, border and word, and fills the primary action with ink.
**Blue** marks everything you can interact with. **Green, Amber and Red** report
status. **Signal Red** is also the brand's signature: the wordmark, and the
editorial marks in decks and reports. Components reference **semantic tokens**
(`--acme-color-*`). The primitive scales define those tokens and are not for
direct use in product code.

## The idea

| Role | Colour | Job | Where |
| --- | --- | --- | --- |
| Base | **Graphite** (cool neutral) | Structure | Canvas, surfaces, borders, text |
| Act | **Ink** (graphite-900) | The primary action | One solid primary button per view, the selected tab, the current nav item |
| Interact | **Blue** | Affordance and state | Links, focus ring, checked controls, selected rows, the chart takeaway, info status |
| Report | **Green / Amber / Red / Blue** | Status | Success, warning, danger, info: badges, alerts, inline status |
| Sign | **Signal Red** | Brand | Wordmark mark; kickers, rules, numerals and callouts in decks and reports |

The page stays quiet so that colour carries meaning. In product UI, **each hue
has exactly one meaning**:

- **Red means destructive or failed.** That's all it means in an interface. The
  wordmark is the only red in product chrome that isn't danger.
- **Blue means interactive or selected.** It is never decoration.
- **Ink means "the action".** The primary button is the darkest, highest-contrast
  object on the screen, so it leads without shouting.

### Why the primary is ink, not a brand colour

A saturated primary (v4's Signal Red) spends the screen's attention on every
"Save". Red also reads as alarm, which forced danger into a hard-to-tell
Crimson that was only 1.5:1 from the primary. An ink primary is the
modern, professional default: it is unmistakable (17.8:1 on the canvas), it
never competes with status colour, and it gives the real danger red back to
destructive actions.

### Why red is both brand and danger

The two jobs never share a context. The brand red appears in the wordmark and
in **editorial** typography (decks, reports). Danger red appears on **controls
and status** in product UI. The `--acme-color-accent` token (editorial) and the
`--acme-color-danger*` tokens (status) are separate, so a component can never
borrow one for the other.

### Status has hue *and* words

Success is Green, warning is Amber, danger is Red and info is Blue. That makes
status scannable at a glance. Hue is never the only cue (WCAG 1.4.1): every
badge and alert carries its status word, and alerts carry a leading icon.

## Primitive scales

| Scale | Anchor | Role |
| --- | --- | --- |
| Graphite `--acme-gray-*` | `900 #15181D` | The base and the ink primary |
| Signal Red `--acme-red-*` | `600 #C91C15` | Brand signature; danger in product UI |
| Blue `--acme-blue-*` | `600 #1F57C9` | Interaction and info |
| Green `--acme-green-*` | `700 #11643F` | Success only |
| Amber `--acme-amber-*` | `700 #834808` | Warning only |

Full values live in [tokens/tokens.json](../tokens/tokens.json) and
[tokens/acme.css](../tokens/acme.css). The neutral scale keeps the
`--acme-gray-*` custom-property names.

**Migrating from v4.** Most semantic token names are unchanged, so code that
uses only `--acme-color-*` picks up the new theme without edits. What moved:

- `--acme-crimson-*` is gone. Danger is `--acme-red-*`.
- `--acme-green-*` and `--acme-amber-*` are new.
- `--acme-color-primary` is now ink.
- `selected`, `link` and `focus` are now Blue.
- `success` and `warning` now have hues.
- New tokens: `surface-hover`, `border-control`, and the `*-border` tokens
  for each status.

The serif display face is retired; see [typography](typography.md).

## Semantic tokens

| Token | Value | Use for |
| --- | --- | --- |
| `--acme-color-canvas` | graphite-0 (white) | Page background, app bar |
| `--acme-color-surface` | graphite-50 | Recessed areas: table header band, card footers, modal footers, callouts, light hover fills |
| `--acme-color-surface-hover` | graphite-100 | Hover fills on ghost buttons and nav, the current nav item, neutral badges |
| `--acme-color-surface-raised` | graphite-0 (white) | Cards, inputs, modals, popovers |
| `--acme-color-border` | graphite-200 | Hairlines: card edges, dividers, table rows |
| `--acme-color-border-control` | graphite-300 | Secondary-button edges, hovered interactive cards |
| `--acme-color-border-strong` | graphite-400 | Input and switch boundaries: ≥3:1 on every surface |
| `--acme-color-text` | graphite-900 (ink) | Default text |
| `--acme-color-text-muted` | graphite-600 | Secondary text, alert bodies |
| `--acme-color-text-subtle` | graphite-500 | Placeholders, captions |
| `--acme-color-primary` (+hover/active) | graphite-900 / 700 / 800 | The one primary action |
| `--acme-color-on-primary` | white | Label on a primary or danger fill |
| `--acme-color-accent` / `-soft` | red-700 / red-50 | Brand editorial marks in decks and reports. Never on a control. |
| `--acme-color-selected` | blue-600 | Checked controls, switch tracks |
| `--acme-color-selected-soft` | blue-50 | Selected table rows (text stays ink) |
| `--acme-color-link` / `-link-hover` | blue-700 / blue-800 | Inline links |
| `--acme-color-focus` | blue-600 | Focus ring only |
| `--acme-color-success` / `-soft` / `-soft-text` / `-border` | green-700 / 50 / 800 / 200 | Success status |
| `--acme-color-warning` / `-soft` / `-soft-text` / `-border` | amber-700 / 50 / 800 / 200 | Warning status |
| `--acme-color-danger` / `-soft` / `-soft-text` / `-border` | red-700 / 50 / 700 / 200 | Danger status text, icons, invalid fields |
| `--acme-color-danger-emphasis` / `-hover` | red-600 / red-700 | Danger button fill |
| `--acme-color-info` / `-soft` / `-soft-text` / `-border` | blue-700 / 50 / 800 / 200 | Info status |
| `--acme-color-data` / `-data-highlight` | graphite-400 / blue-600 | Chart marks: graphite bars, Blue marks the one takeaway |

**Three borders, three jobs.**

- `border` is a decorative hairline.
- `border-control` gives a secondary button its edge. WCAG 1.4.11 doesn't
  require 3:1 here, because the button's label identifies it. The shadow-sm adds
  lift.
- `border-strong` is the only one that meets 3:1. Inputs and switch tracks use
  it, because there the border *is* the control's affordance.

**Why the primary uses three ink steps.** Hover *lightens* (graphite-700) and
active settles back to graphite-800. On a near-black fill, darkening on hover
would be invisible. All three keep the white label above 10:1.

## Light theme only

`acme.css` declares `color-scheme: light` and ships no dark theme: there are no
`prefers-color-scheme` overrides and no `data-theme` switch. Native controls,
scrollbars and form widgets render in their light variants on every OS setting.

The one dark surface in the system is deliberate and local: the **dark deck
bookends** (`.acme-slide--dark`, graphite-950) used for title, section and
closing slides. They pin their own colours:

- text: graphite-100
- meta: graphite-300
- footer: graphite-400
- accent: red-300
- wordmark mark: red-500

They have to, because the page's red-700 accent would sit at only 2.4:1 on the
dark ground. These pins are checked too.

## Rules

1. **One meaning per hue.** Ink acts, Blue interacts, status hues report, and
   Signal Red signs the brand. If a colour choice doesn't fit one of those
   jobs, the answer is Graphite.
2. **One primary (ink) action per view.** Everything else is secondary or ghost.
3. **Red on a control means destructive.** Danger buttons are red, and nothing
   else that is clickable is.
4. **Editorial red stays editorial.** `--acme-color-accent` is for deck and
   report typography, never for UI controls or status.
5. **Status never relies on hue alone.** Badges carry the status word. Alerts
   carry an icon and a title (WCAG 1.4.1).
6. **Soft pairs stay together.** A `*-soft` background takes only its matching
   `*-soft-text` and `*-border`.
7. **Focus is Blue** at `--acme-color-focus`, never restyled per component.
8. **Don't hardcode hex values** in product code. If a semantic token is
   missing, add one.

## Contrast (verified)

Every ratio below is measured from the tokens, not aspirational. WCAG AA:

- normal text needs ≥ 4.5:1 (1.4.3)
- UI component boundaries and meaningful graphics need ≥ 3:1 (1.4.11)

Re-verify after any token change. The script exits non-zero on a regression:

```sh
design-system/scripts/check-contrast.py        # add --all for every pairing
```

| Pair | Ratio |
| --- | --- |
| Text (graphite-900) on canvas / surface / surface-hover | 17.8 / 16.9 / 16.0:1 |
| Muted (graphite-600) on canvas / surface / surface-hover | 7.1 / 6.7 / 6.4:1 |
| Subtle (graphite-500) on canvas / surface / surface-hover | 5.2 / 4.9 / 4.6:1 |
| White on primary / primary-hover / primary-active | 17.8 / 10.1 / 14.1:1 |
| White on danger-emphasis / hover | 5.7 / 7.5:1 |
| Link (blue-700) on canvas · link hover (blue-800) | 8.4 · 10.6:1 |
| Accent (red-700) on canvas / surface-hover | 7.5 / 6.7:1 |
| Ink on selected-soft (selected row) | 16.1:1 |
| Success · warning · danger · info on canvas | 7.2 · 7.3 · 7.5 · 8.4:1 |
| Soft-text on soft (badges): success · warning · danger · info | 8.6 · 8.8 · 6.8 · 9.6:1 |
| **Focus ring** (blue-600) vs canvas *(needs 3)* | 6.4:1 |
| **Checked control** (blue-600) vs canvas *(needs 3)* | 6.4:1 |
| **Input border** (graphite-400) vs canvas / surface *(needs 3)* | 3.5 / 3.3:1 |
| **Switch track** (graphite-400) vs surface-hover *(needs 3)* | 3.1:1 |
| Data (graphite-400) · data-highlight (blue-600) vs canvas *(needs 3)* | 3.5 · 6.4:1 |
| Dark slide: title (graphite-100) · accent (red-300) · meta (graphite-300) | 17.5 · 8.6 · 12.2:1 |
| Dark slide: footer (graphite-400) · wordmark mark (red-500, *needs 3*) | 5.6 · 4.4:1 |

**Charts and colour-vision deficiency.** The data pair is a graphite bar plus a
Blue takeaway. They differ by hue, by lightness (the takeaway is the darker,
stronger mark), and by a mandatory direct label on the highlighted mark. Blue
against grey stays distinct under protanopia and deuteranopia, which v4's
red-on-grey pair did not.
