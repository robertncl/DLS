/** Toggle for settings that take effect immediately. If a Save button applies the change, use a Choice (checkbox) instead. */
export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
}
export declare function Switch(props: SwitchProps): JSX.Element;
