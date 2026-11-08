import React from 'react';
export function Switch({ label, ...rest }) {
  return (
    <label className="acme-switch">
      <input type="checkbox" role="switch" {...rest} />
      {label && <span>{label}</span>}
    </label>
  );
}
