import React from 'react';
export function Textarea({ invalid = false, className = '', ...rest }) {
  return <textarea className={('acme-input ' + className).trim()} aria-invalid={invalid || undefined} {...rest} />;
}
