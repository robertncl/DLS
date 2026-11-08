import React from 'react';
export function Select({ invalid = false, className = '', children, ...rest }) {
  return <select className={('acme-input ' + className).trim()} aria-invalid={invalid || undefined} {...rest}>{children}</select>;
}
