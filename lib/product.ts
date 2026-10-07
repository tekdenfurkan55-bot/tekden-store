export const v30 = {
  id: "v30",
  sku: "TEKDEN-V30",
  name: "TEKDEN V30",
  category: "4K Araç Kamerası",
  tagline: "4K ön kayıt, 1080P arka kamera ve akıllı sürüş kayıt özellikleri.",
  price: 450000,
  image: "/products/v30-angle.webp",
  images: [
    { src: "/products/v30-angle.webp", alt: "TEKDEN V30 4K araç kamerası" },
    { src: "/products/v30-front.webp", alt: "TEKDEN V30 ön kamera" },
    { src: "/products/v30-rear.webp", alt: "TEKDEN V30 1080P arka kamera" },
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
    ["Wi-Fi", "Var"],
    ["GPS", "Var"],
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
  image: "/products/obd-park-kiti.webp",
  description: "V30'a park halinde sürekli güç sağlayarak 24 saat park modu kullanımını mümkün kılar.",
  compatibility: "TEKDEN V30",
} as const;

export type ThumbPart = "v30" | "obd";

export const selections = {
  v30: { id: "v30", name: "TEKDEN V30", detail: "4K Araç Kamerası", price: v30.price, image: v30.image, parts: ["v30"] as ThumbPart[], includesObd: false },
  "v30-obd": { id: "v30-obd", name: "V30 + OBD Park Kiti", detail: "24 saat park modu paketi", price: 520000, image: v30.image, parts: ["v30", "obd"] as ThumbPart[], includesObd: true },
  obd: { id: "obd", name: obdKit.name, detail: "V30 ile uyumlu", price: obdKit.price, image: obdKit.image, parts: ["obd"] as ThumbPart[], includesObd: true },
} as const;

export type SelectionId = keyof typeof selections;

export function formatPrice(value: number) {
  return `${new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 0 }).format(value / 100)} TL`;
}
