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
