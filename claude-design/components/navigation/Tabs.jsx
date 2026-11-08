import React from 'react';
export function Tabs({ tabs = [], active, onChange, idPrefix, label }) {
  const auto = React.useId().replace(/:/g, '');
  const base = idPrefix || 'acme-tabs' + auto;
  const ids = tabs.map(t => (typeof t === 'string' ? t : t.id));
  const current = ids.includes(active) ? active : ids[0];
  const refs = React.useRef({});
  const move = (e, i) => {
    let n = null;
    if (e.key === 'ArrowRight') n = (i + 1) % ids.length;
    else if (e.key === 'ArrowLeft') n = (i - 1 + ids.length) % ids.length;
    else if (e.key === 'Home') n = 0;
    else if (e.key === 'End') n = ids.length - 1;
    if (n === null) return;
    e.preventDefault();
    const el = refs.current[ids[n]];
    if (el) el.focus();
    if (onChange) onChange(ids[n]);
  };
  return (
    <div className="acme-tabs" role="tablist" aria-label={label}>
      {tabs.map((t, i) => {
        const id = ids[i];
        const text = typeof t === 'string' ? t : t.label;
        const count = typeof t === 'string' ? undefined : t.count;
        const sel = id === current;
        return (
          <button key={id} ref={el => { refs.current[id] = el; }} type="button" role="tab" className="acme-tab"
            id={base + '-tab-' + id} aria-controls={base + '-panel-' + id} aria-selected={sel} tabIndex={sel ? 0 : -1}
            onClick={onChange ? () => onChange(id) : undefined} onKeyDown={e => move(e, i)}>
            {text}{count !== undefined && <span className="acme-tab__count">{count}</span>}
          </button>
        );
      })}
    </div>
  );
}
