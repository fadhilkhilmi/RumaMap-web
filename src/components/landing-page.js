"use client";

import { useState } from "react";
import { demoProperties } from "../data/properties";
import Footer from "./footer";
import HeroSection from "./hero-section";
import Icon from "./icon";
import Navbar from "./navbar";
import PropertyCard from "./property-card";

const benefits = [
  {
    icon: "search",
    title: "Pencarian lebih mudah",
    description:
      "Temukan pilihan hunian dengan menyaring lokasi, tipe, dan kisaran harga.",
  },
  {
    icon: "compass",
    title: "Lokasi berbasis peta",
    description:
      "Kenali area sekitar properti melalui konteks lokasi dalam satu tampilan.",
  },
  {
    icon: "list",
    title: "Informasi terperinci",
    description:
      "Bandingkan harga, luas, dan spesifikasi hunian dengan lebih nyaman.",
  },
  {
    icon: "calendar",
    title: "Rencana kunjungan mudah",
    description:
      "Temukan informasi properti sebagai langkah awal merencanakan kunjungan.",
  },
];

function Statistics() {
  const stats = [
    { value: "1.240+", label: "Pilihan hunian" },
    { value: "18", label: "Area pencarian" },
    { value: "86", label: "Mitra properti" },
  ];

  return (
    <section className="container stats-section" aria-label="Statistik demo">
      <div className="stats-card">
        {stats.map((stat) => (
          <div className="stat-item" key={stat.label}>
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
      <p className="demo-caption">
        Angka di atas merupakan data demonstrasi, bukan data aktual RumaMap.
      </p>
    </section>
  );
}

function MapSection({ onExploreMap, mapNotice }) {
  return (
    <section
      className="map-section"
      id="peta-properti"
      aria-labelledby="map-title"
    >
      <div className="container map-layout">
        <div className="map-copy">
          <p className="eyebrow">Lokasi lebih dekat</p>
          <h2 className="section-title" id="map-title">
            Kenali lingkungan sebelum memilih hunian
          </h2>
          <p className="section-description">
            Fitur peta RumaMap dirancang untuk membantu Anda menelusuri
            properti berdasarkan lokasi dan memahami area di sekitarnya.
            Visual di samping adalah ilustrasi antarmuka, bukan data peta
            properti.
          </p>
          <ul className="map-points">
            <li className="map-point">
              <span className="map-point-mark">
                <Icon name="check" size={13} />
              </span>
              Jelajahi area hunian berdasarkan lokasi
            </li>
            <li className="map-point">
              <span className="map-point-mark">
                <Icon name="check" size={13} />
              </span>
              Pahami konteks lingkungan sekitar
            </li>
          </ul>
          <button
            className="button button-primary"
            type="button"
            onClick={onExploreMap}
          >
            Jelajahi Peta
            <Icon name="arrow" size={17} />
          </button>
          {mapNotice && (
            <p className="search-results" role="status">
              {mapNotice}
            </p>
          )}
        </div>

        <div
          className="map-illustration"
          role="img"
          aria-label="Ilustrasi area dengan jalan, taman, dan lingkungan hunian tanpa penanda properti"
        >
          <span className="map-park" />
          <span className="map-river" />
          <span className="map-block map-block-one" />
          <span className="map-block map-block-two" />
          <span className="map-block map-block-three" />
          <span className="map-block map-block-four" />
          <span className="map-road map-road-one" />
          <span className="map-road map-road-two" />
          <span className="map-road map-road-three" />
          <span className="map-road map-road-four" />
          <span className="map-label map-label-one">Area hunian</span>
          <span className="map-label map-label-two">Ruang terbuka</span>
          <span className="map-label map-label-three">Jalan lingkungan</span>
          <span className="map-illustration-caption">Visual ilustrasi</span>
        </div>
      </div>
    </section>
  );
}

function Advantages() {
  return (
    <section
      className="container section"
      id="keunggulan"
      aria-labelledby="advantages-title"
    >
      <div className="section-heading">
        <p className="eyebrow">Pengalaman yang lebih baik</p>
        <h2 className="section-title" id="advantages-title">
          Cari hunian dengan lebih yakin
        </h2>
        <p className="section-description">
          RumaMap membantu menyederhanakan langkah awal pencarian rumah Anda.
        </p>
      </div>

      <div className="advantages-grid">
        {benefits.map((benefit) => (
          <article className="advantage-card" key={benefit.title}>
            <span className="advantage-icon">
              <Icon name={benefit.icon} size={20} />
            </span>
            <h3 className="advantage-title">{benefit.title}</h3>
            <p className="advantage-description">{benefit.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="container cta-section" aria-labelledby="cta-title">
      <div className="cta-card">
        <div className="cta-copy">
          <p className="eyebrow">Langkah pertama dimulai di sini</p>
          <h2 className="cta-title" id="cta-title">
            Siap menemukan tempat pulang Anda?
          </h2>
          <p className="cta-description">
            Mulai jelajahi pilihan properti demonstrasi dan temukan informasi
            lokasi yang Anda perlukan.
          </p>
        </div>
        <a className="button cta-action" href="#cari-properti">
          Mulai cari hunian
          <Icon name="arrow" size={17} />
        </a>
      </div>
    </section>
  );
}

export default function LandingPage() {
  const [filters, setFilters] = useState({
    location: "",
    type: "all",
    price: "all",
  });
  const [submittedFilters, setSubmittedFilters] = useState(null);
  const [mapNotice, setMapNotice] = useState("");

  const visibleProperties = submittedFilters
    ? demoProperties.filter((property) => {
        const locationMatches = property.location
          .toLowerCase()
          .includes(submittedFilters.location.trim().toLowerCase());
        const typeMatches =
          submittedFilters.type === "all" ||
          property.type.toLowerCase() === submittedFilters.type;
        const priceMatches =
          submittedFilters.price === "all" ||
          (submittedFilters.price === "under-1b" &&
            property.price < 1_000_000_000) ||
          (submittedFilters.price === "1-2b" &&
            property.price >= 1_000_000_000 &&
            property.price <= 2_000_000_000) ||
          (submittedFilters.price === "over-2b" &&
            property.price > 2_000_000_000);

        return locationMatches && typeMatches && priceMatches;
      })
    : demoProperties;

  function updateFilter(field, value) {
    setFilters((currentFilters) => ({
      ...currentFilters,
      [field]: value,
    }));
  }

  function handleSearch(event) {
    event.preventDefault();
    setSubmittedFilters(filters);
    document
      .getElementById("properti-unggulan")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <HeroSection
          filters={filters}
          onFilterChange={updateFilter}
          onSearch={handleSearch}
        />
        <Statistics />

        <section
          className="container section properties-section"
          id="properti-unggulan"
          aria-labelledby="properties-title"
        >
          <div className="properties-heading">
            <div className="section-heading">
              <p className="eyebrow">Pilihan untuk Anda</p>
              <h2 className="section-title" id="properties-title">
                Properti unggulan
              </h2>
              <p className="section-description">
                Kenali beberapa contoh hunian dan detailnya sebelum menentukan
                pilihan.
              </p>
            </div>
            <a className="text-link" href="#cari-properti">
              Sesuaikan pencarian
              <Icon name="arrow" size={16} />
            </a>
          </div>

          {submittedFilters && (
            <p className="search-results" role="status" aria-live="polite">
              {visibleProperties.length > 0
                ? `${visibleProperties.length} properti demonstrasi ditemukan.`
                : "Belum ada properti demonstrasi yang cocok. Coba ubah lokasi atau filter."}
            </p>
          )}

          <div className="property-grid">
            {visibleProperties.length > 0 ? (
              visibleProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))
            ) : (
              <div className="empty-results">
                <strong>Properti belum ditemukan</strong>
                Gunakan kata kunci atau filter lain untuk melihat pilihan
                demonstrasi.
              </div>
            )}
          </div>
          <p className="demo-caption">
            Foto dan detail properti ditampilkan sebagai data demonstrasi.
          </p>
        </section>

        <MapSection
          onExploreMap={() =>
            setMapNotice(
              "Peta interaktif belum tersedia pada demo landing page ini.",
            )
          }
          mapNotice={mapNotice}
        />
        <Advantages />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
