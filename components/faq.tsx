import { ChevronDownIcon } from "./icons";

export type FaqItem = { question: string; answer: string };

function FaqColumn({ items }: { items: readonly FaqItem[] }) {
  return (
    <div className="faq-list">
      {items.map(({ question, answer }) => (
        <details key={question}>
          <summary>{question}<span className="faq-chevron" aria-hidden="true"><ChevronDownIcon /></span></summary>
          <p>{answer}</p>
        </details>
      ))}
    </div>
  );
}

/** İki sütunlu SSS: her sütun kendi içinde açılır, diğerini kaydırmaz. */
export function Faq({ items }: { items: readonly FaqItem[] }) {
  const half = Math.ceil(items.length / 2);
  return (
    <div className="faq-cols">
      <FaqColumn items={items.slice(0, half)} />
      <FaqColumn items={items.slice(half)} />
    </div>
  );
}
