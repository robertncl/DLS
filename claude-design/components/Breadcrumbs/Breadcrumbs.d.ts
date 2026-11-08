/**
 * For hierarchies ≥3 levels, directly under the top bar. Current page is plain text; collapse middles beyond 4.
 */
export interface BreadcrumbsProps {
  /** Labels or {label, href}; last item is the current page */
  items?: (string | { label: string; href?: string })[];
}
export declare function Breadcrumbs(props: BreadcrumbsProps): JSX.Element;
