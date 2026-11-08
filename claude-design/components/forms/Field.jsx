import React from 'react';
export function Field({ label, optional = false, help, error, htmlFor, children }) {
  const auto = React.useId();
  const only = React.Children.count(children) === 1 && React.isValidElement(children) ? children : null;
  const controlId = htmlFor || (only && only.props.id) || (only ? 'acme-field' + auto.replace(/:/g, '') : undefined);
  const msgId = controlId ? controlId + '-msg' : undefined;
  const msg = error || help;
  let control = children;
  if (only) {
    const describedBy = [only.props['aria-describedby'], msg ? msgId : null].filter(Boolean).join(' ') || undefined;
    control = React.cloneElement(only, { id: controlId, 'aria-describedby': describedBy, ...(error ? (typeof only.type === 'string' ? { 'aria-invalid': true } : { invalid: only.props.invalid ?? true }) : null) });
  }
  return (
    <div className="acme-field">
      {label && <label className="acme-label" htmlFor={controlId}>{label}{optional && <span className="acme-label__optional"> (optional)</span>}</label>}
      {control}
      {error ? <p className="acme-error" id={msgId}>{error}</p> : help ? <p className="acme-help" id={msgId}>{help}</p> : null}
    </div>
  );
}
