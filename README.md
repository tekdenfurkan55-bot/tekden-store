# TEKDEN Teknoloji — e-ticaret sitesi

TEKDEN V30 4K araç kamerası ve OBD Type-C Park Kiti satış sitesi.

- Canlı site: https://tekdenteknoloji.com (Vercel)
- Teknoloji: Next.js 15 (App Router), React 19, TypeScript
- Kurallar, ürün bilgileri ve fiyatlar: `AGENTS.md`

## Klasörler

- `app/` — sayfalar (ana sayfa, `/urun/v30`, `/urun/obd-park-kiti`, `/kurulum`, `/sss`, `/sepet`, `/checkout`, `/bilgi/*`)
- `components/` — sayfa parçaları (`v30-showcase.tsx`: ana sayfa ve V30 sayfasındaki ortak tanıtım bölümleri)
- `lib/` — ürün ve fiyatlar (`product.ts`), firma bilgileri (`company.ts`), SEO şemaları (`seo.ts`)
- `content/legal/` — sözleşme ve politika metinleri
- `public/` — görseller

## Çalıştırma

```
npm install
npm run build
npm start
```

Ödeme: PayTR bilgileri Vercel ortam değişkeni olarak eklenecek; anahtarlar koda yazılmaz.
