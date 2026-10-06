export type FaqItem = { question: string; answer: string };

export function Faq({ items }: { items: readonly FaqItem[] }) {
  return <div className="faq-list">{items.map(({ question, answer }) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>;
}
