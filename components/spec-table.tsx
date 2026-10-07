type Row = readonly [string, string];

/** Teknik özellikler: iki sütun, tek ekrana sığar. Mobilde tek sütun. */
export function SpecTable({ rows }: { rows: readonly Row[] }) {
  const half = Math.ceil(rows.length / 2);
  const columns = [rows.slice(0, half), rows.slice(half)];
  return (
    <div className="spec-grid">
      {columns.map((column, index) => (
        <table className="spec-table" key={index}>
          <tbody>{column.map(([label, value]) => <tr key={label}><th scope="row">{label}</th><td>{value}</td></tr>)}</tbody>
        </table>
      ))}
    </div>
  );
}
