import React from 'react';
export function Button({ variant = 'secondary', size, className = '', children, ...rest }) {
  const cls = ['acme-btn', 'acme-btn--' + variant, size ? 'acme-btn--' + size : '', className].filter(Boolean).join(' ');
  return <button type="button" className={cls} {...rest}>{children}</button>;
}
