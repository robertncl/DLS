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
