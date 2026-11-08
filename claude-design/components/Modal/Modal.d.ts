/**
 * A modal interrupts — only for destructive confirms, short focused tasks, blocking errors.
 * More than ~4 fields or its own scrollbar → make it a page. One modal at a time.
 * Traps focus, focuses the first field (else the first footer action), closes on Escape, and returns focus on close.
 */
export interface ModalProps {
  open?: boolean;
  /** Names the action and object: "Delete 12 products?" Labels the dialog. */
  title?: React.ReactNode;
  /** Right-aligned actions; Cancel (secondary) first, primary/danger rightmost */
  footer?: React.ReactNode;
  onClose?: () => void;
  /** Set false for destructive confirms — backdrop click must not dismiss */
  dismissOnBackdrop?: boolean;
  children?: React.ReactNode;
}
export declare function Modal(props: ModalProps): JSX.Element;
