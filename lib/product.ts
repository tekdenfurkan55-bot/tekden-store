export const x30 = {
  id: "x30",
  name: "TEKDEN X30 Araç Kamerası",
  shortName: "X30",
  tagline: "Gerçek 4K Ön + 2K Arka Araç Kamerası",
  price: null,
  features: [
    "Gerçek 4K ön kamera",
    "2K arka kamera",
    "GalaxyCore GC4653 sensör",
    "SA230D işlemci",
    "3.2 inç IPS ekran",
    "HDR",
    "Wi-Fi",
    "GPS",
    "Time-Lapse",
    "G-Sensor",
    "24 saat park modu",
    "512 GB'a kadar microSD desteği",
    "Döngüsel kayıt",
    "Ön + arka çift kanal kayıt",
  ],
  packages: [1, 2, 3] as const,
} as const;

export const obdKit = {
  id: "obd-type-c",
  name: "OBD Type-C Park Kiti",
  price: null,
  description: "24 saat park modu için düzenli güç bağlantısı.",
} as const;

export type PackageSize = (typeof x30.packages)[number];
