import Link from "next/link";
import { siVisa } from "simple-icons";
import { BrandLogo } from "./brand-logo";
import { company } from "@/lib/company";

function MailIcon() {
  return <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><rect x="3" y="5.5" width="18" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" /><path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function PinIcon() {
  return <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /><circle cx="12" cy="10" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.7" /></svg>;
}

/** Kabul edilen kart logoları (PayTR ile kullanılacak kartlar). */
function PaymentMarks() {
  return (
    <ul className="pay-marks" aria-label="Kabul edilen kartlar">
      <li title="Visa"><svg viewBox="0 7.4 24 9.2" width="46" height="18" role="img" aria-label="Visa"><path d={siVisa.path} fill="#1a1f71" /></svg></li>
      <li title="Mastercard"><svg viewBox="0 0 40 24" width="40" height="24" role="img" aria-label="Mastercard"><circle cx="15" cy="12" r="9" fill="#eb001b" /><circle cx="25" cy="12" r="9" fill="#f79e1b" /><path d="M20 4.5a9 9 0 0 1 0 15 9 9 0 0 1 0-15Z" fill="#ff5f00" /></svg></li>
      <li title="Troy"><span className="pay-marks__troy" role="img" aria-label="Troy">troy</span></li>
    </ul>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand"><BrandLogo light /></div>
        <div className="footer-columns">
          <div><strong>Ürünler</strong><Link href="/urun/v30">V30 Araç Kamerası</Link><Link href="/urun/obd-park-kiti">OBD Park Kiti</Link></div>
          <div><strong>Kurumsal</strong><Link href="/bilgi/hakkimizda">Hakkımızda</Link><Link href="/sss">Sık sorulan sorular</Link><Link href="/kurulum">Kurulum</Link><Link href="/bilgi/iletisim">İletişim</Link></div>
          <div><strong>Yasal</strong><Link href="/bilgi/mesafeli-satis-sozlesmesi">Mesafeli Satış Sözleşmesi</Link><Link href="/bilgi/on-bilgilendirme-formu">Ön Bilgilendirme Formu</Link><Link href="/bilgi/gizlilik-politikasi">Gizlilik Politikası</Link><Link href="/bilgi/kvkk">KVKK</Link><Link href="/bilgi/iade-ve-iptal">İade ve İptal</Link><Link href="/bilgi/cerez-politikasi">Çerez Politikası</Link></div>
          <div className="footer-contact"><strong>İletişim</strong><p><MailIcon /><span>{company.email}</span></p><p><PinIcon /><span>{company.addressLine1}<br />{company.addressLine2}</span></p></div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-legal">
          <span>© 2026 TEKDEN Teknoloji</span>
          <span>{company.legalName} · Vergi Dairesi: {company.taxOffice} · Vergi No: {company.taxNumber}</span>
        </div>
        <div className="footer-pay">
          <span className="footer-pay__secure"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><rect x="5" y="10.5" width="14" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" /><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" fill="none" stroke="currentColor" strokeWidth="1.7" /></svg>SSL ile güvenli ödeme</span>
          <PaymentMarks />
        </div>
      </div>
    </footer>
  );
}
