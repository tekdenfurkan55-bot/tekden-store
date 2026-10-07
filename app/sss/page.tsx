import type { Metadata } from "next";
import Link from "next/link";
import { Faq } from "@/components/faq";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { faqs } from "@/lib/content";
import { breadcrumb, faqSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Sık Sorulan Sorular | TEKDEN V30 Araç Kamerası",
  description: "TEKDEN V30 hakkında merak edilenler: çözünürlük, park modu, OBD kiti, Wi-Fi ve Viidure uygulaması, GPS, microSD kapasitesi, ses kaydı ve Türkçe dil desteği.",
  alternates: { canonical: "/sss" },
  openGraph: { title: "TEKDEN V30 Sık Sorulan Sorular", url: "/sss" },
};

export default function FaqPage() {
  return (
    <>
      <StructuredData data={[faqSchema(faqs), breadcrumb([["Sık Sorulan Sorular", "/sss"]])]} />
      <SiteHeader />
      <main className="product-page">
        <nav className="breadcrumbs" aria-label="Sayfa yolu"><Link href="/">Ana sayfa</Link><span>/</span><span>SSS</span></nav>
        <section className="faq-section">
          <h1 className="section-title">Sık sorulan sorular</h1>
          <Faq items={faqs} />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
