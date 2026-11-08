import React from 'react';
const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
export function Modal({ open = true, title, footer, onClose, dismissOnBackdrop = true, children }) {
  const titleId = 'acme-modal' + React.useId().replace(/:/g, '') + '-title';
  const ref = React.useRef(null);
  const closeRef = React.useRef(onClose);
  closeRef.current = onClose;
  React.useEffect(() => {
    if (!open || !ref.current) return undefined;
    const prev = document.activeElement;
    const box = ref.current;
    // Initial focus: the first field, else the safe (non-destructive) first action, else the dialog.
    const first = box.querySelector('.acme-modal__body ' + FOCUSABLE) || box.querySelector('.acme-modal__footer ' + FOCUSABLE) || box;
    first.focus();
    const onKey = e => {
      if (e.key === 'Escape' && closeRef.current) { e.stopPropagation(); closeRef.current(); return; }
      if (e.key !== 'Tab') return;
      const items = Array.from(box.querySelectorAll(FOCUSABLE));
      if (!items.length) { e.preventDefault(); return; }
      const a = items[0], z = items[items.length - 1];
      if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
      else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
    };
    box.addEventListener('keydown', onKey);
    return () => { box.removeEventListener('keydown', onKey); if (prev && prev.focus) prev.focus(); };
  }, [open]);
  if (!open) return null;
  return (
    <div className="acme-modal-backdrop" onClick={dismissOnBackdrop && onClose ? (e) => { if (e.target === e.currentTarget) onClose(); } : undefined}>
      <div className="acme-modal" role="dialog" aria-modal="true" aria-labelledby={title ? titleId : undefined} tabIndex={-1} ref={ref}>
        <div className="acme-modal__header">
          <h3 className="acme-modal__title" id={titleId}>{title}</h3>
          {onClose && (
            <button type="button" className="acme-btn acme-btn--ghost acme-btn--sm acme-btn--icon" aria-label="Close" onClick={onClose}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" focusable="false"><path d="M18 6 6 18" /><path d="M6 6l12 12" /></svg>
            </button>
          )}
        </div>
        <div className="acme-modal__body">{children}</div>
        {footer && <div className="acme-modal__footer">{footer}</div>}
      </div>
    </div>
  );
}
