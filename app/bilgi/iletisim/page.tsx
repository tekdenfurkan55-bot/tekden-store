import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "İletişim",
  description: "TEKDEN Teknoloji iletişim bilgileri: e-posta ve adres.",
  alternates: { canonical: "/bilgi/iletisim" },
};

const sw = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.mapsQuery)}`;
const mapsEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(company.mapsQuery)}&z=16&output=embed`;

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="company-page contact-page">
        <header className="company-hero">
          <p className="company-hero__eyebrow">İletişim</p>
          <h1>Bize ulaşın</h1>
          <p>Ürünler, siparişler, iade ve garanti konularındaki sorularınız için bize e-posta ile yazabilirsiniz.</p>
        </header>
        <section className="contact-grid">
          <div className="contact-cards">
            <article className="contact-card">
              <span className="contact-card__icon"><svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true"><rect x="3" y="5.5" width="18" height="13" rx="2" {...sw} /><path d="m4 7 8 6 8-6" {...sw} /></svg></span>
              <div><h2>E-posta</h2><p className="contact-card__value">{company.email}</p></div>
            </article>
            <article className="contact-card">
              <span className="contact-card__icon"><svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true"><path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" {...sw} /><circle cx="12" cy="10" r="2.4" {...sw} /></svg></span>
              <div><h2>Adres</h2><p className="contact-card__value">{company.addressLine1}<br />{company.addressLine2}</p><a className="text-link" href={mapsLink} target="_blank" rel="noopener noreferrer">Yol tarifi al</a></div>
            </article>
            <article className="contact-card">
              <span className="contact-card__icon"><svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true"><path d="M4 20V8l8-4 8 4v12" {...sw} /><path d="M9 20v-6h6v6M8 10h.01M12 10h.01M16 10h.01" {...sw} /></svg></span>
              <div><h2>Firma</h2><p className="contact-card__value">{company.legalName}</p><p className="contact-card__meta">Vergi Dairesi: {company.taxOffice} · Vergi No: {company.taxNumber}</p></div>
            </article>
          </div>
          <div className="contact-map">
            <iframe title="TEKDEN Teknoloji adres haritası" src={mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </section>
        <section className="contact-help">
          <h2>Hızlı yardım</h2>
          <ul>
            <li><Link href="/kurulum">Kurulum adımları</Link></li>
            <li><Link href="/sss">Sık sorulan sorular</Link></li>
            <li><Link href="/bilgi/iade-ve-iptal">İptal ve iade koşulları</Link></li>
          </ul>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
