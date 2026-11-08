import React from 'react';
import { Wordmark } from '../brand/Wordmark.jsx';
export function Topbar({ links = [], current, children }) {
  return (
    <header className="acme-topbar">
      <Wordmark />
      <nav className="acme-topbar__nav" aria-label="Primary">
        {links.map(l => {
          const label = typeof l === 'string' ? l : l.label;
          const href = typeof l === 'string' ? '#' : (l.href || '#');
          return <a key={label} className="acme-topbar__link" href={href} aria-current={label === current ? 'page' : undefined}>{label}</a>;
        })}
      </nav>
      {children && <div className="acme-topbar__actions">{children}</div>}
    </header>
  );
}
