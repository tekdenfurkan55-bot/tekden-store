import type { Metadata } from "next";
import Link from "next/link";
import { InstallSteps } from "@/components/install-steps";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { breadcrumb } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "TEKDEN V30 Kurulum | Araç Kamerası Nasıl Takılır?",
  description: "TEKDEN V30 araç kamerası üç adımda kurulur: ön cama yerleştirin, arka kamera ve güç kablosunu bağlayın, microSD kartı takıp kayda başlayın. 24 saat park modu için OBD Park Kiti.",
  alternates: { canonical: "/kurulum" },
  openGraph: { title: "TEKDEN V30 Kurulum", url: "/kurulum" },
};

const howTo = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "TEKDEN V30 araç kamerası kurulumu",
  step: [
    { "@type": "HowToStep", position: 1, name: "Yerleştirin", text: "V30'u ön cama, görüşünüzü kapatmayacak şekilde konumlandırın.", url: absoluteUrl("/kurulum") },
    { "@type": "HowToStep", position: 2, name: "Bağlayın", text: "Arka kamerayı ve güç kablosunu takın. Park modu için OBD kitini kullanın.", url: absoluteUrl("/kurulum") },
    { "@type": "HowToStep", position: 3, name: "Kayda başlayın", text: "microSD kartı takın ve kayda başlayın.", url: absoluteUrl("/kurulum") },
  ],
};

export default function InstallPage() {
  return (
    <>
      <StructuredData data={[howTo, breadcrumb([["Kurulum", "/kurulum"]])]} />
      <SiteHeader />
      <main className="product-page">
        <nav className="breadcrumbs" aria-label="Sayfa yolu"><Link href="/">Ana sayfa</Link><span>/</span><span>Kurulum</span></nav>
        <section className="install install--page">
          <h1 className="section-title">TEKDEN V30 kurulumu</h1>
          <p className="page-lead">Üç adımda kurun, kayda başlayın. 24 saat park modu için <Link className="text-link" href="/urun/obd-park-kiti">OBD Park Kiti</Link> kullanın.</p>
          <InstallSteps />
        </section>
        <section className="page-cta"><Link className="button button--primary button--wide" href="/urun/v30">V30&apos;u incele</Link></section>
      </main>
      <SiteFooter />
    </>
  );
}
