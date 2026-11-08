import React from 'react';
const VISUALLY_HIDDEN = { position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap', border: 0 };
export function Table({ columns, rows, caption, children }) {
  const cap = caption && <caption style={VISUALLY_HIDDEN}>{caption}</caption>;
  if (children) return <table className="acme-table">{cap}{children}</table>;
  return (
    <table className="acme-table">
      {cap}
      <thead><tr>{(columns || []).map(c => <th key={c.key} scope="col" className={c.numeric ? 'acme-table__num' : undefined}>{c.label}</th>)}</tr></thead>
      <tbody>{(rows || []).map((r, i) => <tr key={i}>{(columns || []).map(c => <td key={c.key} className={c.numeric ? 'acme-table__num' : undefined}>{r[c.key]}</td>)}</tr>)}</tbody>
    </table>
  );
}
