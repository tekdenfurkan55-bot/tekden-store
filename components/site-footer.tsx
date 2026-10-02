import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div><Link className="wordmark wordmark--light" href="/">TEKDEN</Link><p>Otomotiv teknolojilerinde netlik, güven ve kontrol.</p></div>
        <div className="footer-links"><Link href="/urun/x30">X30</Link><Link href="/#ozellikler">Özellikler</Link><Link href="/#sss">SSS</Link><Link href="/sepet">Sepet</Link></div>
      </div>
      <div className="footer-bottom"><span>© 2026 TEKDEN</span><span>Türkiye</span></div>
    </footer>
  );
}
