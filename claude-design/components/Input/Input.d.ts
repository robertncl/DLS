/** Text input: 40px min height, radius-md, strong border on raised surface. Placeholders are examples, never labels. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Danger border + aria-invalid; pair with Field error text */
  invalid?: boolean;
}
export declare function Input(props: InputProps): JSX.Element;
