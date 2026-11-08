"use client";

import { useState } from "react";
import Icon from "./icon";

const links = [
  { label: "Beranda", href: "#beranda", active: true },
  { label: "Cari Properti", href: "#properti-unggulan" },
  { label: "Peta Properti", href: "#peta-properti" },
  { label: "Tentang Kami", href: "#keunggulan" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notice, setNotice] = useState("");

  function showAccountNotice(action) {
    setNotice(
      `Fitur ${action} belum tersedia pada demo landing page RumaMap.`,
    );
    setMenuOpen(false);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className={`site-header${menuOpen ? " menu-open" : ""}`}>
      <div className="container nav-inner">
        <a
          className="brand"
          href="#beranda"
          aria-label="RumaMap, kembali ke beranda"
          onClick={closeMenu}
        >
          <span className="brand-mark">
            <Icon name="map-pin" size={20} />
          </span>
          <span className="brand-name">
            Ruma<span>Map</span>
          </span>
        </a>

        <nav
          className="nav-links"
          id="mobile-nav"
          aria-label="Navigasi utama"
        >
          {links.map((link) => (
            <a
              key={link.href}
              className={`nav-link${link.active ? " nav-link-active" : ""}`}
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="button nav-login"
            type="button"
            onClick={() => showAccountNotice("masuk")}
          >
            Masuk
          </button>
          <button
            className="button button-primary nav-register"
            type="button"
            onClick={() => showAccountNotice("pendaftaran")}
          >
            Daftar
          </button>
        </div>

        <button
          className="nav-toggle"
          type="button"
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
      </div>
      {notice && (
        <div className="nav-notice" role="status">
          {notice}
        </div>
      )}
    </header>
  );
}
