import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const pages = {
  hakkimizda: { title: "Hakkımızda", intro: "TEKDEN TECHNOLOGY, günlük hayatta güvenilir ve anlaşılır teknoloji ürünleri sunmak üzere geliştirilen bir consumer electronics markasıdır." },
  iletisim: { title: "İletişim", intro: "TEKDEN iletişim kanalları yayına hazırlanmaktadır. Doğrulanmış şirket ve destek bilgileri bu alanda yayımlanacaktır." },
  "mesafeli-satis-sozlesmesi": { title: "Mesafeli Satış Sözleşmesi", intro: "Bu hukuki metin, doğrulanmış şirket ve satış bilgileri tamamlandıktan sonra hukuk danışmanı onayıyla yayımlanacaktır." },
  "on-bilgilendirme-formu": { title: "Ön Bilgilendirme Formu", intro: "Sipariş öncesi bilgilendirme metni, satış ve şirket bilgileri doğrulandıktan sonra yayımlanacaktır." },
  "gizlilik-politikasi": { title: "Gizlilik Politikası", intro: "Veri işleme süreçleri ve kullanılan hizmetler kesinleştikten sonra doğrulanmış gizlilik politikası burada yer alacaktır." },
  kvkk: { title: "KVKK Aydınlatma Metni", intro: "Veri sorumlusu ve iletişim bilgileri doğrulandıktan sonra KVKK aydınlatma metni burada yayımlanacaktır." },
  "iade-ve-iptal": { title: "İade ve İptal", intro: "Satış operasyonu ve şirket bilgileri tamamlandıktan sonra doğrulanmış iade ve iptal koşulları burada yer alacaktır." },
  "cerez-politikasi": { title: "Çerez Politikası", intro: "Sitede kullanılacak ölçüm ve pazarlama hizmetleri kesinleştikten sonra çerez politikası yayımlanacaktır." },
} as const;

type Slug = keyof typeof pages;

export function generateStaticParams() { return Object.keys(pages).map((slug) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug as Slug];
  if (!page) return {};
  return { title: page.title, description: page.intro, alternates: { canonical: `/bilgi/${slug}` }, robots: slug === "hakkimizda" || slug === "iletisim" ? undefined : { index: false, follow: true } };
}

export default async function InfoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug as Slug];
  if (!page) notFound();
  return <><SiteHeader /><main className="legal-page"><h1>{page.title}</h1><p>{page.intro}</p>{slug !== "hakkimizda" && <aside>Bu sayfa taslak altyapıdır; doğrulanmamış şirket veya hukuk bilgisi içermez.</aside>}</main><SiteFooter /></>;
}
