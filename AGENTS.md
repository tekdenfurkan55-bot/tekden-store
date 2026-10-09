# TEKDEN Store — Codex çalışma kuralları

## Çalışma biçimi
- Kullanıcı yazılımcı değildir. Kullanıcıdan kod yazması, terminal komutu çalıştırması, dosya oluşturması veya teknik değişiklik yapması istenmemelidir.
- Teknik uygulamayı Codex yapar. Kullanıcı tasarım, içerik, ürün bilgisi ve işleyiş beklentisini tarif eder.
- Bir revizyon istendiğinde yalnızca ilgili alan değiştirilir; çalışan diğer bölümler gereksiz yere yeniden tasarlanmaz.
- Her değişiklikten sonra build ve temel kullanıcı akışları kontrol edilir.
- Kullanıcı özellikle istemedikçe uzun teknik açıklama veya kod bloğu dökülmez.

## Marka ve ürün
- Marka: TEKDEN
- Ana ürün: TEKDEN V30 Araç Kamerası
- Ek ürün: OBD Type-C Park Kiti
- Site ileride başka otomotiv/mobilite teknoloji ürünleri eklenebilecek şekilde geliştirilebilir olmalıdır.

## V30 doğrulanmış özellikleri
- Gerçek 4K ön kamera
- 1080P Full HD arka kamera
- GalaxyCore GC4653 sensör
- SA230D işlemci
- 3.2 inç IPS ekran
- HDR
- Wi-Fi
- GPS
- Time-Lapse
- G-Sensor
- 24 saat park modu
- 512 GB'a kadar microSD desteği
- Döngüsel kayıt
- Ön + arka çift kanal kayıt
- Ses kaydı (dahili mikrofon)
- Türkçe dil desteği
- Telefon uygulaması: Viidure (Wi-Fi ile bağlanır)
- Kutu içeriği: çakmaklık güç kablosu (OBD kullanılmazsa güç için)

## Kurulum akışı (kullanıcı tarafından doğrulandı)
1. Ana kamera ön cama yerleştirilir.
2. Arka kamera kablosu ana kameraya takılır; güç için OBD Park Kiti ya da kutudaki çakmaklık kablosu ana kameraya bağlanır.
3. microSD kart takılır, kayıt başlar.

## OBD Type-C Park Kiti (kullanıcı tarafından doğrulandı)
- OBD portuna tak-çalıştır bağlanır, Type-C ile kameraya güç iletir.
- Uyumluluk: Type-C güç girişli araç kameraları (kullanıcı beyanı: tüm kameralarla çalışır).
- Park modu, G-Sensor destekli park kaydı ve Time-Lapse park kaydı için sürekli güç sağlar.
- Kablo tavan döşemesi ve A sütunu boyunca gizlenir; sigorta kutusu bağlantısı gerekmez.

## Fiyatlar (Ekim 2026)
- TEKDEN V30: 4.499 TL (önceki fiyat 5.999 TL)
- V30 + OBD Park Kiti: 5.199 TL (önceki fiyat 7.500 TL)
- OBD Park Kiti: 1.199 TL (önceki fiyat 1.699 TL)
- Not: Üstü çizili önceki fiyat, İndirimli Satış Yönetmeliği gereği son 30 günde uygulanmış en düşük fiyat olmalıdır.

## Kritik ürün kuralları
- GPS ayrı fiziksel aksesuar/modül gibi gösterilmemelidir.
- Gerçekte olmayan aksesuar, sensör, kamera veya teknik özellik uydurulmamalıdır.
- Ürün görsellerinde gerçek V30 fiziksel tasarımı korunmalıdır.
- "X30" model adı geçen eski görseller yayımlanmaz.

## Logo
- TEKDEN yazı logosunda TEK ve EN siyah, D harfi TEKDEN mavisidir; altında TECHNOLOGY yer alır.
- V30 model adı tamamen siyah kullanılmalıdır.

## Tasarım yönü
- Site sıradan bir AI landing page gibi görünmemelidir.
- Premium otomotiv teknolojisi ve gerçek e-ticaret hissi hedeflenir.
- Ürün görselleri metinden daha baskın olmalıdır.
- Uzun paragraflardan kaçınılmalı; kısa başlıklar ve kısa açıklamalar kullanılmalıdır.
- Gereksiz gradient, glow, kart kalabalığı, ikon kalabalığı ve jenerik SaaS görünümünden kaçınılmalıdır.
- Mobil deneyim ayrı olarak optimize edilmelidir.

## E-ticaret kapsamı
- V30 ürün sayfası
- V30 ve V30 + OBD paket seçimi
- OBD Park Kiti upsell
- Sepet
- Adet artırma/azaltma ve ürün silme
- Sipariş özeti
- Teslimat/adres akışı
- PayTR daha sonra gerçek bilgilerle entegre edilecektir; sahte ödeme akışı oluşturulmaz.

## Yayın
- Proje Vercel'e uygun tutulmalıdır.
- Secret ve API anahtarları koda gömülmemelidir.

## Devam notları (yeni sohbet için)
- Ekim 2026: Revizyon 8 sonrası site canlıya alındı (main güncel). Yeni çalışmalar yine `tasarim-yenileme` dalında yapılır; her push Vercel önizlemesi üretir. `main` (canlı site) yalnızca kullanıcı "canlıya al" deyince güncellenir.
- Çalışma düzeni: kullanıcı maddeleri tek tek yazar, her biri kısaca "X. madde not edildi" diye onaylanır ve listeye eklenir; kullanıcı "uygula" deyince hepsi birlikte yapılır, build + masaüstü/mobil kontrol + push, ardından önizleme linki verilir.
- Sitede emoji kullanılmaz; kurumsal görünüm (RedTiger düzeni, TEKDEN markası). Yazılar ve butonlar büyük ve okunur olmalı.
- Görsellerde yollar Türkiye (İstanbul), plakalar gerçek Türk plakası (mavi TR şeridi). Gemini görselleri kullanıcı üretir; promptları biz yazarız.
- Gece görüntüsü için "gece görüşü / ultra gece görüş" denmez (kızılötesi yok); "Gece de net görüntü" kullanılır.
- Tamamlanan son tur: Revizyon 7 (indirim etiketi REC kırmızısı; tanıtım bölümleri components/v30-showcase.tsx içinde, ana sayfa ve /urun/v30 ortak kullanır; sıra: plaka → park modu → sade görüntü performansı → Viidure → hafıza (64/128/256/512 GB, yaklaşık 2,5/5/10/20 saat) → 3.2 inç ekran + Türkçe yan yana → 8 özellik).
- Revizyon 8: kısa hafıza bölümü, alt kısım (sadece logo; Ürünler/Kurumsal/Yasal/İletişim; firma unvanı + vergi bilgisi; Visa/Mastercard/Troy), /bilgi/iletisim ve /bilgi/hakkimizda ayrı sayfalar, sözleşmeler content/legal/*.md (X30→V30 düzeltildi). Firma bilgileri lib/company.ts.
- Sözleşmelerde açık konu: iade gönderim süresi (iade metni 10 gün, mesafeli satış 14 gün) ve para iadesi başlangıcı farklı; kullanıcı kararı bekleniyor.
- Revizyon 9 (canlıya alma): kayan şerit kaldırıldı; alt satırda yalnızca © 2026 TEKDEN Teknoloji; kullanılmayan kod, görsel ve CSS temizlendi.
- Tur 6'dan bekleyen: 3.2 inç ekran görüntüsünde plakalar okunur olacak; kullanıcı Gemini'den yeni media/ekran-yol görseli üretecek.
- Alan adı: tekdenteknoloji.com Vercel projesine bağlandı (GoDaddy DNS: A @ 76.76.21.21, CNAME www cname.vercel-dns.com; www → ana adrese 308 yönlendirme). Canonical adres lib/site.ts. info@tekdenteknoloji.com için e-posta hizmeti henüz yok.
- Bekleyen konular: CE belgesi (banner'dan CE/işaretler silindi), OBD fotoğrafında giriş Type-C değil micro-USB gibi görünüyor (Type-C fotoğraf istenecek), "Kutu içeriği" bölümü önerisi, PayTR bilgileri, e-posta hizmeti.

## Teknik notlar
- Önizleme linki: `gh api repos/tekdenfurkan55-bot/tekden-store/deployments?sha=<commit>` → statuses → environment_url.
- Yerel test: `npm run build`, sonra `npx next start -p 3100`; yeniden build sonrası eski next-server kapatılır.
- Kontrol: Playwright ile 1440 / 390 / 360 px ekran görüntüsü, yatay taşma, sepet → ödeme akışı. Sepet localStorage anahtarı: `tekden-cart-v2`.
- CSS: `app/globals.css`; yeni değişiklikler en alta "Revizyon N" bloğu olarak eklenir.
- Fontlar yerel paket (@fontsource-variable/archivo, jetbrains-mono).
- Commit sonuna Co-Authored-By / Claude-Session satırları eklenir.
