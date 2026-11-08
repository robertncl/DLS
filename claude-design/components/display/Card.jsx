import React from 'react';
export function Card({ media, title, footer, interactive = false, style, children, ...rest }) {
  return (
    <article className={'acme-card' + (interactive ? ' acme-card--interactive' : '')} style={style} {...rest}>
      {media !== undefined && <div className="acme-card__media">{media}</div>}
      <div className="acme-card__body">
        {title && <h3 className="acme-card__title">{title}</h3>}
        {children}
      </div>
      {footer && <div className="acme-card__footer">{footer}</div>}
    </article>
  );
}
