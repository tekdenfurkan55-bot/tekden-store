import { Fragment, type ReactNode } from "react";

/** **kalın** işaretlerini <strong> yapar. */
function inline(text: string): ReactNode {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? <strong key={i}>{part.slice(2, -2)}</strong> : <Fragment key={i}>{part}</Fragment>,
  );
}

type Block =
  | { kind: "h2" | "h3"; text: string }
  | { kind: "p"; lines: string[] }
  | { kind: "ul" | "ol"; items: string[] }
  | { kind: "hr" };

/** Basit metin biçimi (başlık, paragraf, madde, kalın) → sayfa. İlk "# " başlığı atlanır, sayfa başlığı ayrıca verilir. */
export function LegalText({ source }: { source: string }) {
  const blocks: Block[] = [];
  let para: string[] = [];
  const flush = () => { if (para.length) { blocks.push({ kind: "p", lines: para }); para = []; } };
  for (const raw of source.split("\n")) {
    const line = raw.trimEnd();
    if (!line.trim()) { flush(); continue; }
    if (line.startsWith("# ")) { flush(); continue; }
    const h = line.match(/^(#{2,3})\s+(.*)$/);
    if (h) { flush(); blocks.push({ kind: h[1].length === 2 ? "h2" : "h3", text: h[2] }); continue; }
    if (/^-{3,}$/.test(line.trim())) { flush(); blocks.push({ kind: "hr" }); continue; }
    const ul = line.match(/^[-*]\s+(.*)$/);
    const ol = line.match(/^\d+\.\s+(.*)$/);
    if (ul || ol) {
      flush();
      const kind = ul ? "ul" : "ol";
      const last = blocks[blocks.length - 1];
      const text = (ul ?? ol)![1];
      if (last && last.kind === kind) last.items.push(text); else blocks.push({ kind, items: [text] });
      continue;
    }
    para.push(line.trim());
  }
  flush();
  return (
    <div className="legal-text">
      {blocks.map((b, i) => {
        if (b.kind === "h2") return <h2 key={i}>{inline(b.text)}</h2>;
        if (b.kind === "h3") return <h3 key={i}>{inline(b.text)}</h3>;
        if (b.kind === "hr") return <hr key={i} />;
        if (b.kind === "ul") return <ul key={i}>{b.items.map((t, j) => <li key={j}>{inline(t)}</li>)}</ul>;
        if (b.kind === "ol") return <ol key={i}>{b.items.map((t, j) => <li key={j}>{inline(t)}</li>)}</ol>;
        if (b.kind !== "p") return null;
        return <p key={i}>{b.lines.map((l, j) => <Fragment key={j}>{j > 0 && <br />}{inline(l)}</Fragment>)}</p>;
      })}
    </div>
  );
}
