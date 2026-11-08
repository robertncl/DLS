/** Native select sharing Input styling. Use instead of radios when there are >5 options. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  invalid?: boolean;
  children?: React.ReactNode;
}
export declare function Select(props: SelectProps): JSX.Element;
