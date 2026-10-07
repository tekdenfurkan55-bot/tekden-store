import { ChevronDownIcon } from "./icons";

export type FaqItem = { question: string; answer: string };

export function Faq({ items }: { items: readonly FaqItem[] }) {
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
