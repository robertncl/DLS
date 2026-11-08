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
