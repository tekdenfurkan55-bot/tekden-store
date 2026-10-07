import { obdKit, selections, v30 } from "./product";
import { absoluteUrl, brandName, siteName } from "./site";

const toTl = (kurus: number) => (kurus / 100).toFixed(2);

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": absoluteUrl("/#organization"),
  name: brandName,
  alternateName: siteName,
  url: absoluteUrl(),
  logo: absoluteUrl("/brand/tekden-logo.webp"),
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": absoluteUrl("/#website"),
  name: siteName,
  alternateName: brandName,
  url: absoluteUrl(),
  inLanguage: "tr-TR",
  publisher: { "@id": absoluteUrl("/#organization") },
};

const shippingDetails = {
  "@type": "OfferShippingDetails",
  shippingRate: { "@type": "MonetaryAmount", value: "0", currency: "TRY" },
  shippingDestination: { "@type": "DefinedRegion", addressCountry: "TR" },
};

const returnPolicy = {
  "@type": "MerchantReturnPolicy",
  applicableCountry: "TR",
  returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
  merchantReturnDays: 14,
  returnMethod: "https://schema.org/ReturnByMail",
};

function offer(path: string, price: number, compareAt?: number) {
  return {
    "@type": "Offer",
    url: absoluteUrl(path),
    priceCurrency: "TRY",
    price: toTl(price),
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    seller: { "@id": absoluteUrl("/#organization") },
    shippingDetails,
    hasMerchantReturnPolicy: returnPolicy,
    ...(compareAt ? { priceSpecification: [
      { "@type": "UnitPriceSpecification", price: toTl(price), priceCurrency: "TRY" },
      { "@type": "UnitPriceSpecification", priceType: "https://schema.org/StrikethroughPrice", price: toTl(compareAt), priceCurrency: "TRY" },
    ] } : {}),
  };
}

export const v30ProductSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": absoluteUrl("/urun/v30#product"),
  name: "TEKDEN V30 4K Ön ve Arka Araç Kamerası",
  description: "Gerçek 4K ön kamera, 1080P Full HD arka kamera, GalaxyCore GC4653 sensör, 3.2 inç IPS ekran, Wi-Fi (Viidure), dahili GPS, HDR, ses kaydı, G-Sensor, Time-Lapse, döngüsel kayıt ve OBD Park Kiti ile 24 saat park modu.",
  image: v30.images.slice(0, 7).map((item) => absoluteUrl(item.src)),
  sku: v30.sku,
  mpn: "V30",
  model: "V30",
  category: "Araç Kamerası",
  brand: { "@type": "Brand", name: "TEKDEN" },
  offers: offer("/urun/v30", v30.price, v30.compareAt),
};

export const obdProductSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": absoluteUrl("/urun/obd-park-kiti#product"),
  name: obdKit.name,
  description: obdKit.description,
  image: obdKit.images.map((item) => absoluteUrl(item.src)),
  sku: obdKit.sku,
  category: "Araç Kamerası Aksesuarı",
  brand: { "@type": "Brand", name: "TEKDEN" },
  offers: offer("/urun/obd-park-kiti", obdKit.price),
};

export const bundleOffer = selections["v30-obd"];

export function breadcrumb(items: Array<[string, string]>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [["Ana Sayfa", "/"], ...items].map(([name, path], index) => ({ "@type": "ListItem", position: index + 1, name, item: absoluteUrl(path) })),
  };
}

export function faqSchema(items: readonly { question: string; answer: string }[]) {
  return { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: items.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) };
}
