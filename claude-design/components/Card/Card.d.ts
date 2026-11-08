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
