export const v30 = {
  id: "v30",
  sku: "TEKDEN-V30",
  name: "TEKDEN V30",
  category: "4K Araç Kamerası",
  tagline: "Gerçek 4K ön kamera, 1080P Full HD arka kamera, Wi-Fi, GPS ve HDR.",
  price: 449900,
  compareAt: 599900,
  image: "/products/v30-angle.webp",
  images: [
    { src: "/products/v30-angle.webp", alt: "TEKDEN V30 4K araç kamerası, açılı görünüm" },
    { src: "/products/v30-front.webp", alt: "TEKDEN V30 ön görünüm" },
    { src: "/products/v30-side-ports.webp", alt: "TEKDEN V30 yan görünüm ve girişler" },
    { src: "/products/v30-screen-back.webp", alt: "TEKDEN V30 3.2 inç IPS ekran" },
    { src: "/products/v30-screen-angle.webp", alt: "TEKDEN V30 ekran, açılı görünüm" },
    { src: "/products/v30-screen-ports.webp", alt: "TEKDEN V30 Type-C, AV ve microSD girişleri" },
    { src: "/products/v30-rear.webp", alt: "TEKDEN V30 1080P arka kamera" },
    { src: "/products/v30-afis-kapak.webp", alt: "TEKDEN V30 4K araç kamerası tanıtım görseli" },
    { src: "/products/v30-afis-4k.webp", alt: "TEKDEN V30 4K ön ve 1080P arka kayıt tanıtım görseli" },
    { src: "/products/v30-afis-goruntu.webp", alt: "TEKDEN V30 GalaxyCore GC4653 sensör tanıtım görseli" },
  ],
  highlights: ["4K Ön", "1080P Arka", "Wi-Fi", "GPS", "HDR"],
  specifications: [
    ["Model", "TEKDEN V30"],
    ["Kanal", "2 Kanal — Ön + Arka"],
    ["Ön Kamera", "4K"],
    ["Arka Kamera", "1080P Full HD"],
    ["Sensör", "GalaxyCore GC4653"],
    ["İşlemci", "SA230D"],
    ["Ekran", '3.2" IPS'],
    ["HDR", "Var"],
    ["Wi-Fi", "Var — Viidure uygulaması"],
    ["GPS", "Dahili"],
    ["Ses Kaydı", "Var"],
    ["Dil Desteği", "Türkçe"],
    ["Park Modu", "24 Saat — OBD Park Kiti ile"],
    ["G-Sensor", "Var"],
    ["Time-Lapse", "Var"],
    ["Döngüsel Kayıt", "Var"],
    ["Depolama", "512 GB'a kadar microSD"],
  ],
} as const;

export const obdKit = {
  id: "obd-park-kiti",
  sku: "TEKDEN-OBD-TYPE-C",
  name: "TEKDEN OBD Type-C Park Kiti",
  shortName: "OBD Type-C Park Kiti",
  price: 119900,
  image: "/products/obd-1.webp",
  images: [
    { src: "/products/obd-1.webp", alt: "TEKDEN OBD Type-C Park Kiti, kablo ve OBD fişi" },
    { src: "/products/obd-2.webp", alt: "TEKDEN OBD Type-C Park Kiti, OBD fişi yakın görünüm" },
    { src: "/products/obd-afis-park-modu.webp", alt: "TEKDEN OBD Type-C Park Kiti ile 24 saat park modu: darbe algılama ve Time-Lapse park kaydı" },
  ],
  description: "Araç kameralarına park halindeyken de sürekli güç sağlayarak park modu özelliklerinin kullanılmasına yardımcı olan OBD güç bağlantı kitidir. Araç içerisindeki OBD portuna bağlanır ve Type-C bağlantısı üzerinden kameraya güç iletir.",
  compatibility: "Type-C güç girişli tüm araç kameraları",
  specifications: [
    ["Ürün Adı", "TEKDEN OBD Type-C Park Kiti"],
    ["Uyumlu Modeller", "Type-C güç girişli tüm araç kameraları"],
    ["Kablo Tipi", "Type-C"],
    ["Montaj Yeri", "Araç OBD portu"],
    ["Kullanım Amacı", "24 saat park modu için sürekli güç beslemesi"],
    ["Desteklenen Özellikler", "Park modu, G-Sensor destekli park kaydı, Time-Lapse park kaydı"],
    ["Kurulum Tipi", "OBD portuna tak-çalıştır bağlantı"],
    ["Kablo Yerleşimi", "Tavan döşemesi ve A sütunu boyunca gizli kurulum"],
    ["Önerilen Kullanım", "TEKDEN V30 ve Type-C güç girişli araç kameraları"],
  ],
} as const;

export type ThumbPart = "v30" | "obd";

export const selections = {
  v30: { id: "v30", name: "TEKDEN V30", detail: "4K Araç Kamerası", price: v30.price, compareAt: v30.compareAt as number | undefined, image: v30.image, parts: ["v30"] as ThumbPart[], includesObd: false },
  "v30-obd": { id: "v30-obd", name: "V30 + OBD Park Kiti", detail: "24 saat park modu paketi", price: 519900, compareAt: 750000 as number | undefined, image: v30.image, parts: ["v30", "obd"] as ThumbPart[], includesObd: true },
  obd: { id: "obd", name: obdKit.name, detail: "Type-C girişli araç kameraları için", price: obdKit.price, compareAt: undefined as number | undefined, image: obdKit.image, parts: ["obd"] as ThumbPart[], includesObd: true },
} as const;

export type SelectionId = keyof typeof selections;

export function formatPrice(value: number) {
  return `${new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 0 }).format(value / 100)} TL`;
}

/** İndirim oranı, abartmamak için aşağı yuvarlanır. */
export function discountPercent(price: number, compareAt?: number) {
  if (!compareAt || compareAt <= price) return 0;
  return Math.floor(((compareAt - price) / compareAt) * 100);
}
