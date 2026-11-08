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
