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
