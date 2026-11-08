/**
 * Form field wrapper: label above, control, then help or error text below.
 * Mark optional fields, not required ones. Errors state what happened + the fix.
 * Wires itself: the single child control gets an id, the label's htmlFor, and aria-describedby pointing at the help or error text.
 */
export interface FieldProps {
  label?: string;
  /** Appends "(optional)" — mark optional fields, not required ones */
  optional?: boolean;
  /** Muted 12px helper under the control */
  help?: string;
  /** Replaces help and marks the control invalid */
  error?: string;
  /** Id of the control; generated when omitted */
  htmlFor?: string;
  children?: React.ReactNode;
}
export declare function Field(props: FieldProps): JSX.Element;
