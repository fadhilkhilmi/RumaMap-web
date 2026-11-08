import Image from "next/image";
import Icon from "./icon";

export default function HeroSection({ filters, onFilterChange, onSearch }) {
  return (
    <section className="hero" id="beranda" aria-labelledby="hero-title">
      <div className="hero-image" aria-hidden="true">
        <Image
          className="hero-photo"
          src="/images/rumah-utama.jpg"
          alt=""
          fill
          priority
          sizes="(max-width: 720px) 100vw, 58vw"
        />
      </div>

      <div className="container hero-content">
        <div className="hero-copy">
          <p className="hero-kicker">
            <span className="hero-kicker-dot" />
            Cara baru menemukan rumah
          </p>
          <h1 className="hero-title" id="hero-title">
            Temukan Hunian <em>Impian</em> Anda
          </h1>
          <p className="hero-description">
            Jelajahi pilihan hunian dan kenali lokasinya lebih dekat. Temukan
            informasi yang Anda butuhkan untuk memilih tempat pulang yang tepat
            bersama RumaMap.
          </p>
          <p className="hero-note">
            <Icon name="check" size={16} />
            Pilihan properti dan lokasi dalam satu pengalaman
          </p>
        </div>

        <form
          className="hero-search"
          id="cari-properti"
          onSubmit={onSearch}
          aria-label="Cari properti demonstrasi"
        >
          <label className="search-field search-location">
            <span className="search-label">Lokasi</span>
            <span className="search-control">
              <Icon name="map-pin" size={18} />
              <input
                type="search"
                placeholder="Kota atau area"
                value={filters.location}
                onChange={(event) =>
                  onFilterChange("location", event.target.value)
                }
              />
            </span>
          </label>

          <label className="search-field">
            <span className="search-label">Tipe properti</span>
            <span className="search-control">
              <Icon name="home" size={17} />
              <select
                value={filters.type}
                onChange={(event) => onFilterChange("type", event.target.value)}
              >
                <option value="all">Semua tipe</option>
                <option value="rumah">Rumah</option>
                <option value="apartemen">Apartemen</option>
                <option value="villa">Villa</option>
              </select>
              <Icon name="chevron-down" size={15} />
            </span>
          </label>

          <label className="search-field">
            <span className="search-label">Rentang harga</span>
            <span className="search-control">
              <Icon name="ruler" size={17} />
              <select
                value={filters.price}
                onChange={(event) =>
                  onFilterChange("price", event.target.value)
                }
              >
                <option value="all">Semua harga</option>
                <option value="under-1b">Di bawah Rp1 M</option>
                <option value="1-2b">Rp1 M – Rp2 M</option>
                <option value="over-2b">Di atas Rp2 M</option>
              </select>
              <Icon name="chevron-down" size={15} />
            </span>
          </label>

          <button className="button button-primary search-submit" type="submit">
            <Icon name="search" size={17} />
            Cari Properti
          </button>
        </form>
      </div>
    </section>
  );
}
