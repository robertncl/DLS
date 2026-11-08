import React from 'react';
export function Wordmark({ href = '/', markOnly = false, onDark = false, className = '', style, ...rest }) {
  const cls = ['acme-wordmark', onDark ? 'acme-wordmark--on-dark' : '', className].filter(Boolean).join(' ');
  if (markOnly) {
    return (
      <span className={cls} style={style} role="img" aria-label="ACME" {...rest}>
        <span className="acme-wordmark__mark" aria-hidden="true">A</span>
      </span>
    );
  }
  return (
    <a className={cls} href={href} style={style} {...rest}>
      <span className="acme-wordmark__mark" aria-hidden="true">A</span>ACME
    </a>
  );
}
