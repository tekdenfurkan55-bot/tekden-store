# TEKDEN — Devam özeti (yeni sohbet için)

TEKDEN sitesine kaldığımız yerden devam ediyoruz. Bu, önceki uzun sohbetin tam özetidir. Aynı kişiyle konuşur gibi devam et; baştan tanışma, özet tekrarı yapma.

## 1. Proje ve yayın
- Site (canlı): https://tekden-store-nine.vercel.app
- GitHub: tekdenfurkan55-bot/tekden-store — Next.js 15.5 (App Router), React 19, TypeScript, Vercel.
- Çalışma dalı: `tasarim-yenileme`. Her push Vercel önizlemesi üretir (önizleme linki: `gh api repos/tekdenfurkan55-bot/tekden-store/deployments?sha=<commit>` → statuses → environment_url).
- `main` = canlı site. Yalnızca kullanıcı "canlıya al" deyince güncellenir.
- Son önizleme (Revizyon 6): https://tekden-store-cnwgrp4xt-tekden.vercel.app
- Commit sonuna atıf satırları eklenir (Co-Authored-By / Claude-Session), git kullanıcı adı "Claude".
- Kurallar dosyası: AGENTS.md (ürün bilgileri, fiyatlar, kurallar, devam notları). Önce onu oku.

## 2. Kullanıcı ve çalışma düzeni
- Kullanıcı yazılımcı değil. Ondan kod, komut, dosya işi isteme. Türkçe, kısa, sade cevap ver; teknik ayrıntı dökme.
- Kullanıcı maddeleri tek tek yazar (çoğu zaman ekran görüntüsü + kırmızı işaretle). Her birini kısaca "X. madde not edildi: …" diye onayla ve listeye ekle. Uygulama yapma.
- "Uygula" deyince listedeki her şeyi birlikte yap: build + lint + tsc, Playwright ile masaüstü (1440) ve mobil (390 ve 360) ekran görüntüsü kontrolü, yatay taşma kontrolü, sepet → ödeme akışı kontrolü, commit + push, önizleme linkini ver ve madde madde ne yapıldığını yaz.
- Gemini görsellerini kullanıcı üretir; promptları sen yazarsın (İngilizce, her biri ayrı kod bloğunda, dosya adıyla). Gelen görselin plakasını/yazılarını büyütüp kontrol et; bozuk yazı, gerçek marka tabelası (ör. banka) varsa kodla temizle (OpenCV inpaint). Plaka bozuksa yeniden ürettir, kodla plaka yapıştırma.
- Kullanıcı bazen sesle yazıyor; yazım hataları normal, niyeti anla.

## 3. Marka ve tasarım kuralları
- Kurumsal görünüm: RedTiger sitesinin düzeni örnek alınır ama birebir kopya değil, TEKDEN markası. RedTiger görselleri kullanılmaz.
- Sitede emoji YOK. Yazılar ve butonlar büyük ve okunur (butonlar 60px yükseklik / 18px kalın yazı).
- Renkler: TEKDEN mavisi #1546d8, lacivert #0b2fa8 (fiyat), asfalt #16181b, REC kırmızısı #e5322d. Birincil buton lacivert gradyan.
- Logo: TEK ve EN siyah, D mavi, altında TECHNOLOGY. V30 model adı tamamen siyah.
- Fontlar yerel paket (Google Fonts proxy'de engelli): @fontsource-variable/archivo + jetbrains-mono.
- Görsellerde yollar Türkiye/İstanbul, plakalar gerçek Türk plakası (beyaz zemin, solda mavi TR şeridi, rastgele il kodu).
- Doğrulanmamış özellik yazılmaz: "gece görüşü / ultra gece görüş" denmez (kızılötesi yok) → "Gece de net görüntü". GPS dahili, ayrı aparat gösterilmez. 1 FPS, 140° açı, "otomatik kilitler" gibi doğrulanmamış iddialar yazılmaz. "X30" geçen görsel kullanılmaz. CE belgesi doğrulanmadığı için CE işareti kullanılmaz.
- İndirim etiketi: üstü çizili eski fiyat + "%X indirim" (aşağı yuvarlanır).

## 4. Ürün bilgileri (doğrulanmış)
- TEKDEN V30: gerçek 4K ön, 1080P Full HD arka, GalaxyCore GC4653 sensör, SA230D işlemci, 3.2" IPS ekran, HDR, Wi-Fi (Viidure uygulaması), dahili GPS, Time-Lapse, G-Sensor, 24 saat park modu (OBD kiti ile), 512 GB'a kadar microSD (kutuya dahil değil), döngüsel kayıt, ses kaydı, Türkçe menü. Kutuda çakmaklık güç kablosu var.
- Kurulum: 1) V30 ön cama yerleştirilir. 2) Arka kamera kablosu ana kameraya takılır; güç için OBD Park Kiti ya da kutudaki çakmaklık kablosu ana kameraya bağlanır. 3) microSD takılır, kayıt başlar.
- OBD Type-C Park Kiti: OBD portuna tak-çalıştır, Type-C ile kameraya güç verir, Type-C güç girişli tüm araç kameralarıyla çalışır ("TEKDEN V30 önerilir" yazılmaz), park modu / G-Sensor / Time-Lapse park kaydı için sürekli güç, kablo tavan döşemesi ve A sütunundan gizlenir, sigorta kutusu gerekmez.
- Fiyatlar: V30 4.499 TL (eski 5.999), V30 + OBD paketi 5.199 TL (eski 7.500), OBD kiti 1.199 TL. Ücretsiz hızlı kargo, 2 yıl garanti, güvenli ödeme.

## 5. Sitede şu an olanlar
Ana sayfa sırası: banner (hero-v30.webp, ilk ekrana sığar) + satın alma şeridi → özellik şeridi (4K ve 1080P altın rozetler, GalaxyCore GC4653, 512 GB, döngüsel kayıt, 24 saat park) → ön/arka kamera plaka bölümü (components/plate-cams.tsx: gündüz/gece düğmesi, plakadan oklu büyütme kutusu "Net plaka okuma"; görseller public/media/plaka/) → görüntü sensörü → Viidure telefonu + WhatsApp/Instagram/YouTube/Galeri paylaşım satırı → 3.2 inç ekran (LiveScreen, gerçek otoyol görüntüsü media/ekran-yol.webp + REC + 4K) → 8 özellik ikonu → Türkçe dil (ekranda Türkçe menü) → 512 GB microSD → park modu (arka plan media/park/arka-plan.webp, yakın G-Sensor g-sensor-yakin.webp, 2x2 Time-Lapse, kırmızı "OBD Park Kiti gerekir") → paket seçimi → 3 adımda kurulum (media/kurulum/kurulum-1..3.webp) → teknik özellikler (2 sütun) → SSS (2 sütun, 16 soru).
Diğer sayfalar: /urun/v30 (galeri + büyütme penceresi, oklar, X), /urun/obd-park-kiti, /kurulum (HowTo şeması), /sss, /sepet (adet artır/azalt/sil), /checkout (İletişim → Adres → Özet → Ödeme; özet görselli, eski fiyat üstü çizili, kargo ücretsiz; PayTR bilgisi gelene kadar ödeme kapalı, sahte ödeme yok).
SEO: lib/seo.ts (Organization, WebSite, Product + StrikethroughPrice, FAQPage, BreadcrumbList, HowTo), sitemap görselli, canonical, OG görseli media/og-v30.jpg, Google doğrulama için NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION.
CSS: app/globals.css içinde "Revizyon 2…6" blokları sırayla eklenmiştir; yeni değişiklikler en alta yeni blok olarak eklenir.

## 6. Teknik notlar
- Yerel test: `npm run build` sonra `npx next start -p 3100` (setsid ile arka planda). Yeniden build sonrası eski next-server'ı kapat (`kill <pid>`; pkill kabuğu 144 ile kapatabilir, ayrı komutla çalıştır).
- Ekran görüntüsü: Python Playwright (Chromium kurulu). Sepet localStorage anahtarı: `tekden-cart-v2`.
- Görsel işleme: Python PIL + OpenCV (arka plan silme, inpaint, webp çıktısı). Sohbetteki geçici klasör yeni sohbete taşınmaz; sitede kullanılan bütün görseller public/ altında.
- Kullanıcıya 8000 px'ten büyük görsel gönderilmez (parçala).

## 7. Bekleyen konular
- CE belgesi var mı? (Varsa CE işareti geri eklenebilir.)
- OBD ürün fotoğrafında giriş micro-USB gibi görünüyor; Type-C fotoğraf istenmeli.
- "Kutu içeriği" bölümü önerisi (V30, arka kamera + kablo, çakmaklık güç kablosu, montaj aparatı — kullanıcıdan doğrulanmalı).
- Afiş yazı düzeltmeleri (daha önce Excel dosyası gönderildi).
- PayTR bilgileri gelince gerçek ödeme entegrasyonu (anahtarlar koda gömülmez, Vercel ortam değişkeni).
- Canlıya alma onayı.

Şimdi yeni tur (Tur 6) maddelerini yazacağım; not almaya hazır ol.
