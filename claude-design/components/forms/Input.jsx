import React from 'react';
export function Input({ invalid = false, className = '', ...rest }) {
  return <input className={('acme-input ' + className).trim()} aria-invalid={invalid || undefined} {...rest} />;
}
