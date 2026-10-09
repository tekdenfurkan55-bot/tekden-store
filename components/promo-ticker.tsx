import { formatPrice, selections } from "@/lib/product";

const sw = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
const icons = {
  truck: <><path d="M2.5 6.5h11v9h-11z" {...sw} /><path d="M13.5 9.5h4l3 3v3h-7" {...sw} /><circle cx="6.5" cy="17" r="1.8" {...sw} /><circle cx="16.5" cy="17" r="1.8" {...sw} /></>,
  shield: <><path d="M12 3 5 6v5.5c0 4.3 3 7.8 7 9.5 4-1.7 7-5.2 7-9.5V6l-7-3Z" {...sw} /><path d="m9 12 2.2 2.2L15.5 10" {...sw} /></>,
  lock: <><rect x="5" y="10.5" width="14" height="10" rx="2" {...sw} /><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" {...sw} /></>,
  box: <><path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z" {...sw} /><path d="M4 7l8 4 8-4M12 11v10" {...sw} /></>,
  camera: <><rect x="3" y="7" width="14" height="10" rx="2" {...sw} /><path d="m17 10.5 4-2.5v8l-4-2.5" {...sw} /></>,
};

const items: [keyof typeof icons, string][] = [
  ["truck", "Ücretsiz hızlı kargo"],
  ["shield", "2 yıl garanti"],
  ["lock", "Güvenli ödeme"],
  ["box", `V30 + OBD Park Kiti paketi: ${formatPrice(selections["v30-obd"].price)}`],
  ["camera", "Gerçek 4K araç kamerası"],
];

/** Menünün altındaki kayan duyuru şeridi. */
export function PromoTicker() {
  const row = (hidden: boolean) => (
    <ul className="ticker__row" aria-hidden={hidden || undefined}>
      {items.map(([icon, text]) => (
        <li key={text}><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">{icons[icon]}</svg>{text}</li>
      ))}
    </ul>
  );
  return (
    <div className="ticker" role="region" aria-label="Duyurular">
      <div className="ticker__track">{row(false)}{row(true)}{row(true)}{row(true)}</div>
    </div>
  );
}
