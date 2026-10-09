import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "TEKDEN Teknoloji; 20 yılı aşkın sektör tecrübesine sahip Teknovit bünyesinde faaliyet gösteren bir teknoloji markasıdır.",
  alternates: { canonical: "/bilgi/hakkimizda" },
};

const sw = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
const values = [
  { title: "Kalite", text: "Ürünlerimizi yüksek kalite standartlarına göre seçiyor ve sunuyoruz.", icon: <><circle cx="12" cy="9" r="5.5" {...sw} /><path d="m9 13.8-1.5 7 4.5-2.3 4.5 2.3-1.5-7" {...sw} /><path d="m9.8 9 1.5 1.5 3-3" {...sw} /></> },
  { title: "Güven", text: "Açık, doğru bilgi ve sağlam satış sonrası destek veriyoruz.", icon: <><path d="M12 3 5 6v5.5c0 4.3 3 7.8 7 9.5 4-1.7 7-5.2 7-9.5V6l-7-3Z" {...sw} /><path d="m9 12 2.2 2.2L15.5 10" {...sw} /></> },
  { title: "Müşteri memnuniyeti", text: "Her kararımızda kullanıcı ihtiyacını esas alıyoruz.", icon: <><circle cx="12" cy="8" r="3.8" {...sw} /><path d="M4.5 20.5c.8-4 3.8-6.2 7.5-6.2s6.7 2.2 7.5 6.2" {...sw} /></> },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="company-page">
        <header className="company-hero">
          <p className="company-hero__eyebrow">Hakkımızda</p>
          <h1>Deneyimden doğan bir teknoloji markası</h1>
          <p>TEKDEN Teknoloji; makine, kimya, elektronik ve gıda sektörlerinde 20 yılı aşkın tecrübeye sahip {company.legalName} bünyesinde faaliyet gösteren bir teknoloji markasıdır.</p>
          <p>Farklı sektörlerde edindiğimiz deneyimi ve kalite anlayışını teknoloji dünyasına taşıyoruz. Amacımız, müşterilerimize yenilikçi, güvenilir ve ulaşılabilir ürünler sunmak.</p>
        </header>
        <section className="company-block">
          <h2>Ne yapıyoruz?</h2>
          <p>Gelişen teknolojiyi yakından takip ediyor, günlük yaşamı kolaylaştıran ürünleri müşterilerimizle buluşturuyoruz. Her ürünü yüksek kalite standartlarına ve kullanıcı ihtiyaçlarına göre seçiyoruz.</p>
        </section>
        <section className="company-block">
          <h2>Değerlerimiz</h2>
          <ul className="value-cards">
            {values.map(({ title, text, icon }) => (
              <li key={title}><span className="value-cards__icon"><svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">{icon}</svg></span><h3>{title}</h3><p>{text}</p></li>
            ))}
          </ul>
          <p className="company-closing">TEKDEN Teknoloji olarak hedefimiz; kalite, güven ve müşteri memnuniyeti üzerine kurulu, teknoloji alanında kalıcı ve güçlü bir marka olmaktır.</p>
        </section>
        <section className="company-facts">
          <dl>
            <div><dt>Marka</dt><dd>{company.brand}</dd></div>
            <div><dt>Firma unvanı</dt><dd>{company.legalName}</dd></div>
            <div><dt>Adres</dt><dd>{company.address}</dd></div>
          </dl>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
