import React from 'react';
export function Choice({ type = 'checkbox', label, description, ...rest }) {
  return (
    <label className="acme-choice">
      <input type={type} {...rest} />
      <span>{label}{description && <span style={{ display: 'block', fontSize: 'var(--acme-text-xs)', color: 'var(--acme-color-text-muted)' }}>{description}</span>}</span>
    </label>
  );
}
