import Link from "next/link";
import { BrandLogo } from "./brand-logo";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand"><BrandLogo light /><p>Günlük hayatı kolaylaştıran, güvenilir teknoloji ürünleri.</p></div>
        <div className="footer-columns">
          <div><strong>Ürünler</strong><Link href="/urun/v30">V30 Araç Kamerası</Link><Link href="/urun/obd-park-kiti">OBD Park Kiti</Link></div>
          <div><strong>Destek</strong><Link href="/sss">Sık sorulan sorular</Link><Link href="/kurulum">Kurulum</Link><Link href="/bilgi/iletisim">İletişim</Link></div>
          <div><strong>Kurumsal</strong><Link href="/bilgi/hakkimizda">Hakkımızda</Link></div>
          <div><strong>Yasal</strong><Link href="/bilgi/mesafeli-satis-sozlesmesi">Mesafeli Satış Sözleşmesi</Link><Link href="/bilgi/on-bilgilendirme-formu">Ön Bilgilendirme Formu</Link><Link href="/bilgi/gizlilik-politikasi">Gizlilik Politikası</Link><Link href="/bilgi/kvkk">KVKK</Link><Link href="/bilgi/iade-ve-iptal">İade ve İptal</Link><Link href="/bilgi/cerez-politikasi">Çerez Politikası</Link></div>
        </div>
      </div>
      <div className="footer-bottom"><span>© 2026 TEKDEN TECHNOLOGY</span><span>Türkiye</span></div>
    </footer>
  );
}
