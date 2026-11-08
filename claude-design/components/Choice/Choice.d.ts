/**
 * Checkbox or radio row — native input themed by accent-color, never rebuilt from divs.
 * Radios need 2–5 options and a default; more → use Select.
 */
export interface ChoiceProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** "checkbox" (default) or "radio" */
  type?: 'checkbox' | 'radio';
  label?: React.ReactNode;
  /** Muted second line */
  description?: React.ReactNode;
}
export declare function Choice(props: ChoiceProps): JSX.Element;
