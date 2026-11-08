/* ACME Design System — component properties (joined from each components/<Comp>/<Comp>.d.ts). Documentation, not type-checked. */

// ── Button ──
/**
 * ACME button. One ink primary per view; danger always pairs with a confirmation.
 * Labels are verb-first, specific, sentence case — never "OK"/"Submit".
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Default "secondary". Primary is the ink fill — one per view. Danger is the Signal Red fill — destructive, confirmed actions only. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  /** sm = 32px (dense toolbars, table rows) · default 40px · lg = 48px */
  size?: 'sm' | 'lg';
  /** Disabled buttons take the surface fill with subtle ink, never a faded opacity. */
  disabled?: boolean;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;

// ── Wordmark ──
/**
 * The ACME wordmark: Signal Red mark (upright white "A", corner radius 0.3 × height) + "ACME" in Inter 700 uppercase, 12% tracking.
 * Never recolor, stretch, outline, italicise, or shadow. Mark never below 20px.
 */
export interface WordmarkProps {
  /** Link target. Default "/" */
  href?: string;
  /** Render the Signal Red mark alone (favicon/avatar contexts, 24px+); announced as "ACME" */
  markOnly?: boolean;
  /** On dark grounds (a Graphite 900/950 band in the light page, dark slides), 20px+: white letters, mark lifts to red-500 (4.4:1 on Graphite 950). */
  onDark?: boolean;
  className?: string;
  /** Set fontSize here to scale the whole lockup */
  style?: React.CSSProperties;
}
export declare function Wordmark(props: WordmarkProps): JSX.Element;

// ── Alert ──
/**
 * Inline page/section-level message: soft tint, matching tinted hairline, radius-lg, status icon in the status hue.
 * Appears at the top of the region it describes; danger alerts must state the recovery path.
 */
export interface AlertProps {
  /** Default "info" (Blue). Success is Green, warning Amber, danger Red — the icon and title still carry the meaning. */
  variant?: 'info' | 'success' | 'warning' | 'danger';
  /** One line, semibold, no period */
  title?: React.ReactNode;
  /** Status icon before the text. Default true; keep it on — status never relies on hue alone. */
  icon?: boolean;
  /** 1–2 sentences: what + next step */
  children?: React.ReactNode;
}
export declare function Alert(props: AlertProps): JSX.Element;

// ── Badge ──
/**
 * Compact read-only status badge (small rounded rectangle) — never a button or filter chip.
 * One or two words, sentence case; max one badge per row/title line.
 */
export interface BadgeProps {
  /** Default "neutral" (Draft, Archived): Graphite, no icon. Success Green, warning Amber, danger Red, info Blue. */
  variant?: 'neutral' | 'success' | 'warning' | 'danger' | 'info';
  /** Status icon before the label. Default true. */
  icon?: boolean;
  children?: React.ReactNode;
}
export declare function Badge(props: BadgeProps): JSX.Element;

// ── Card ──
/**
 * One self-contained thing: a product, an order, a metric. If you can't title it with a noun, it's a section, not a card.
 * Cards never sit on other cards; max one primary button per card grid.
 */
export interface CardProps {
  /** Optional 16:9 media area content */
  media?: React.ReactNode;
  title?: React.ReactNode;
  /** Hairline-separated footer: actions + meta */
  footer?: React.ReactNode;
  /** Whole card is one target; hover raises shadow */
  interactive?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export declare function Card(props: CardProps): JSX.Element;

// ── Table ──
/**
 * ACME's workhorse for catalog and order data. Semantic table markup; header band in sentence case;
 * left-align text, right-align numbers (tabular-nums), never center data columns.
 */
export interface TableColumn { key: string; label: React.ReactNode; /** Right-aligned tabular numerals */ numeric?: boolean; }
export interface TableProps {
  columns?: TableColumn[];
  /** Objects keyed by column key; cells may be ReactNodes (badges, ghost buttons) */
  rows?: Record<string, React.ReactNode>[];
  /** Visually hidden accessible name */
  caption?: string;
  /** Custom thead/tbody markup instead of columns/rows */
  children?: React.ReactNode;
}
export declare function Table(props: TableProps): JSX.Element;

// ── Choice ──
/**
 * Checkbox or radio row — native input themed by accent-color, never rebuilt from divs.
 * Radios need 2–5 options and a default; more → use Select.
 */
export interface ChoiceProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** "checkbox" (default) or "radio" */
  type?: 'checkbox' | 'radio';
  label?: React.ReactNode;
  /** Muted second line */
  description?: React.ReactNode;
}
export declare function Choice(props: ChoiceProps): JSX.Element;

// ── Field ──
/**
 * Form field wrapper: label above, control, then help or error text below.
 * Mark optional fields, not required ones. Errors state what happened + the fix.
 * Wires itself: the single child control gets an id, the label's htmlFor, and aria-describedby pointing at the help or error text.
 */
export interface FieldProps {
  label?: string;
  /** Appends "(optional)" — mark optional fields, not required ones */
  optional?: boolean;
  /** Muted 12px helper under the control */
  help?: string;
  /** Replaces help and marks the control invalid */
  error?: string;
  /** Id of the control; generated when omitted */
  htmlFor?: string;
  children?: React.ReactNode;
}
export declare function Field(props: FieldProps): JSX.Element;

// ── Input ──
/** Text input: 40px min height, radius-md, strong border on raised surface. Placeholders are examples, never labels. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Danger border + aria-invalid; pair with Field error text */
  invalid?: boolean;
}
export declare function Input(props: InputProps): JSX.Element;

// ── Select ──
/** Native select sharing Input styling. Use instead of radios when there are >5 options. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  invalid?: boolean;
  children?: React.ReactNode;
}
export declare function Select(props: SelectProps): JSX.Element;

// ── Switch ──
/** Toggle for settings that take effect immediately. If a Save button applies the change, use a Choice (checkbox) instead. */
export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
}
export declare function Switch(props: SwitchProps): JSX.Element;

// ── Textarea ──
/** Multiline input sharing Input styling; min-height 5rem, vertical resize only. */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
}
export declare function Textarea(props: TextareaProps): JSX.Element;

// ── Breadcrumbs ──
/**
 * For hierarchies ≥3 levels, directly under the top bar. Current page is plain text; collapse middles beyond 4.
 */
export interface BreadcrumbsProps {
  /** Labels or {label, href}; last item is the current page */
  items?: (string | { label: string; href?: string })[];
}
export declare function Breadcrumbs(props: BreadcrumbsProps): JSX.Element;

// ── Tabs ──
/**
 * Underline tabs — views of the same thing, never page navigation or actions.
 * 2–6 tabs, one-word labels, first selected by default; the selected tab takes a 2px ink underline.
 * Arrow keys, Home and End move between tabs.
 */
export interface TabsProps {
  /** Labels or {id, label, count}; a count renders in a quiet pill */
  tabs?: (string | { id: string; label: React.ReactNode; count?: number })[];
  /** id of the selected tab (defaults to the first) */
  active?: string;
  onChange?: (id: string) => void;
  /** Prefix for element ids. Tab i is `${idPrefix}-tab-${id}`; give its panel id `${idPrefix}-panel-${id}`, role="tabpanel" and aria-labelledby the tab id. */
  idPrefix?: string;
  /** Accessible name for the tab list, e.g. "Order status" */
  label?: string;
}
export declare function Tabs(props: TabsProps): JSX.Element;

// ── Topbar ──
/**
 * Global app bar — full-width, opaque canvas fill capped by a bottom hairline (zero elevation, 56px).
 * Wordmark, then max 5 destinations beside it, then an actions slot pushed right; the current page is ink on surface-hover.
 */
export interface TopbarProps {
  /** Destination labels (max 5) or {label, href} objects */
  links?: (string | { label: string; href?: string })[];
  /** Label of the current page (gets aria-current="page": ink text on the surface-hover fill) */
  current?: string;
  /** Actions slot, pushed to the right edge (search, account, at most one small primary) */
  children?: React.ReactNode;
}
export declare function Topbar(props: TopbarProps): JSX.Element;

// ── Modal ──
/**
 * A modal interrupts — only for destructive confirms, short focused tasks, blocking errors.
 * More than ~4 fields or its own scrollbar → make it a page. One modal at a time.
 * Traps focus, focuses the first field (else the first footer action), closes on Escape, and returns focus on close.
 */
export interface ModalProps {
  open?: boolean;
  /** Names the action and object: "Delete 12 products?" Labels the dialog. */
  title?: React.ReactNode;
  /** Right-aligned actions; Cancel (secondary) first, primary/danger rightmost */
  footer?: React.ReactNode;
  onClose?: () => void;
  /** Set false for destructive confirms — backdrop click must not dismiss */
  dismissOnBackdrop?: boolean;
  children?: React.ReactNode;
}
export declare function Modal(props: ModalProps): JSX.Element;
