import React from 'react';
export function Breadcrumbs({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb">
      <div className="acme-breadcrumbs">
        {items.map((it, i) => {
          const last = i === items.length - 1;
          const label = typeof it === 'string' ? it : it.label;
          const href = typeof it === 'string' ? '#' : (it.href || '#');
          return (
            <React.Fragment key={i}>
              {i > 0 && <span aria-hidden="true">/</span>}
              {last ? <span aria-current="page">{label}</span> : <a href={href}>{label}</a>}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
}
