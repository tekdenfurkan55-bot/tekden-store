import type { Metadata } from "next";
import { readFileSync } from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import { LegalText } from "@/components/legal-text";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const pages = {
  "mesafeli-satis-sozlesmesi": { title: "Mesafeli Satış Sözleşmesi", intro: "TEKDEN Teknoloji internet sitesi üzerinden verilen siparişlere ilişkin mesafeli satış sözleşmesi.", file: "mesafeli-satis-sozlesmesi" },
  "on-bilgilendirme-formu": { title: "Ön Bilgilendirme Formu", intro: "Sipariş öncesi bilgilendirme metni, satış ve şirket bilgileri doğrulandıktan sonra yayımlanacaktır.", file: null },
  "gizlilik-politikasi": { title: "Gizlilik Politikası", intro: "TEKDEN Teknoloji internet sitesinde paylaşılan kişisel bilgilerin gizliliğine ilişkin esaslar.", file: "gizlilik-politikasi" },
  kvkk: { title: "KVKK Aydınlatma Metni", intro: "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma metni.", file: "kvkk" },
  "iade-ve-iptal": { title: "İptal ve İade Koşulları", intro: "Cayma hakkı, iade süreci, kargo ve ücret iadesi koşulları.", file: "iade-ve-iptal" },
  "cerez-politikasi": { title: "Çerez Politikası", intro: "Sitede kullanılacak ölçüm ve pazarlama hizmetleri kesinleştikten sonra çerez politikası yayımlanacaktır.", file: null },
} as const;

type Slug = keyof typeof pages;

export function generateStaticParams() { return Object.keys(pages).map((slug) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug as Slug];
  if (!page) return {};
  return { title: page.title, description: page.intro, alternates: { canonical: `/bilgi/${slug}` }, robots: { index: false, follow: true } };
}

export default async function InfoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug as Slug];
  if (!page) notFound();
  const source = page.file ? readFileSync(path.join(process.cwd(), "content/legal", `${page.file}.md`), "utf8") : null;
  return (
    <>
      <SiteHeader />
      <main className="legal-page">
        <h1>{page.title}</h1>
        {source ? <LegalText source={source} /> : <><p>{page.intro}</p><aside>Bu sayfa taslak altyapıdır; doğrulanmamış şirket veya hukuk bilgisi içermez.</aside></>}
      </main>
      <SiteFooter />
    </>
  );
}
