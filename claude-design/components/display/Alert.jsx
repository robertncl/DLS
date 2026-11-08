import React from 'react';
const PATHS = {
  success: ['M20 6 9 17l-5-5'],
  warning: ['M12 3 2 20h20L12 3z', 'M12 10v4', 'M12 17h.01'],
  danger: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z', 'M15 9l-6 6', 'M9 9l6 6'],
  info: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z', 'M12 16v-4', 'M12 8h.01'],
};
function StatusIcon({ variant, size }) {
  const d = PATHS[variant];
  if (!d) return null;
  return (
    <svg className="acme-status-icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {d.map((p, i) => <path key={i} d={p} />)}
    </svg>
  );
}
export function Alert({ variant = 'info', title, icon = true, children }) {
  // Only danger interrupts a screen reader; everything else is announced politely.
  const role = variant === 'danger' ? 'alert' : 'status';
  return (
    <div className={'acme-alert acme-alert--' + variant} role={role}>
      {icon && <span className="acme-alert__icon"><StatusIcon variant={variant} size={16} /></span>}
      <div>
        {title && <p className="acme-alert__title">{title}</p>}
        {typeof children === 'string' ? <p>{children}</p> : children}
      </div>
    </div>
  );
}
