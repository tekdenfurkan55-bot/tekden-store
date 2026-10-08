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
- OBD Park Kiti: 1.199 TL
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
