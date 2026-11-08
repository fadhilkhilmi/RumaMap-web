import Icon from "./icon";

const footerLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Cari Properti", href: "#properti-unggulan" },
  { label: "Peta Properti", href: "#peta-properti" },
  { label: "Tentang Kami", href: "#keunggulan" },
];

export default function Footer() {
  return (
    <footer className="site-footer" id="kontak">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand-block">
            <a className="brand" href="#beranda" aria-label="RumaMap, beranda">
              <span className="brand-mark">
                <Icon name="map-pin" size={20} />
              </span>
              <span className="brand-name">
                Ruma<span>Map</span>
              </span>
            </a>
            <p className="footer-description">
              Temukan informasi hunian dan lokasi dalam satu pengalaman
              pencarian yang lebih mudah.
            </p>
          </div>

          <div>
            <h2 className="footer-heading">Navigasi</h2>
            <nav className="footer-links" aria-label="Navigasi footer">
              {footerLinks.map((link) => (
                <a className="footer-link" key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="footer-heading">Hubungi Kami</h2>
            <div className="footer-links">
              <a className="footer-contact" href="mailto:halo@rumamap.demo">
                <Icon name="mail" size={14} />
                halo@rumamap.demo
              </a>
              <a className="footer-contact" href="tel:+6281234567890">
                <Icon name="phone" size={14} />
                +62 812-3456-7890
              </a>
            </div>
            <span className="footer-demo">Kontak demonstrasi</span>
          </div>

          <div>
            <h2 className="footer-heading">Tentang RumaMap</h2>
            <p className="footer-description">
              Sistem informasi properti dengan pendekatan lokasi untuk
              membantu Anda mengenal area hunian.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 RumaMap. Seluruh hak cipta dilindungi.</p>
          <p>Informasi properti di halaman ini merupakan data demonstrasi.</p>
        </div>
      </div>
    </footer>
  );
}
