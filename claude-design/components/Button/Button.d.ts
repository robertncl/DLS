/**
 * ACME button. One ink primary per view; danger always pairs with a confirmation.
 * Labels are verb-first, specific, sentence case — never "OK"/"Submit".
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Default "secondary". Primary is the ink fill — one per view. Danger is the Signal Red fill — destructive, confirmed actions only. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  /** sm = 32px (dense toolbars, table rows) · default 40px · lg = 48px */
  size?: 'sm' | 'lg';
  /** Disabled buttons take the surface fill with subtle ink, never a faded opacity. */
  disabled?: boolean;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
