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
