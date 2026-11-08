import React from 'react';
// Status glyphs drawn on a 24px grid, 2px stroke: they keep status legible without colour (WCAG 1.4.1).
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
      strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {d.map((p, i) => <path key={i} d={p} />)}
    </svg>
  );
}
export function Badge({ variant = 'neutral', icon = true, children }) {
  const v = variant === 'neutral' ? '' : variant;
  return (
    <span className={'acme-badge' + (v ? ' acme-badge--' + v : '')}>
      {icon && v && <StatusIcon variant={v} size={12} />}
      {children}
    </span>
  );
}
