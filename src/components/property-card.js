"use client";

import { useState } from "react";
import Image from "next/image";
import Icon from "./icon";

const formatPrice = (price) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);

export default function PropertyCard({ property }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <>
      <article className="property-card">
        <div className="property-image-wrap">
          <Image
            className="property-photo"
            src={property.image}
            alt={property.imageAlt}
            fill
            sizes="(max-width: 720px) 100vw, (max-width: 960px) 50vw, 33vw"
          />
          <span className="property-badge">{property.status}</span>
          <button
            className={`favorite-button${isFavorite ? " is-favorite" : ""}`}
            type="button"
            aria-label={
              isFavorite
                ? `Hapus ${property.name} dari favorit`
                : `Tambahkan ${property.name} ke favorit`
            }
            aria-pressed={isFavorite}
            onClick={() => setIsFavorite((favorite) => !favorite)}
          >
            <Icon name="heart" size={17} filled={isFavorite} />
          </button>
        </div>

        <div className="property-body">
          <p className="property-type">{property.type}</p>
          <h3 className="property-title">{property.name}</h3>
          <p className="property-location">
            <Icon name="map-pin" size={14} />
            {property.location}
          </p>
          <p className="property-price">
            {formatPrice(property.price)} <span>/ unit</span>
          </p>

          <div className="property-features" aria-label="Spesifikasi properti">
            <span className="property-feature">
              <Icon name="ruler" size={14} />
              {property.buildingArea} m² bangunan
            </span>
            <span className="property-feature">
              <Icon name="bed" size={15} />
              {property.bedrooms} KT
            </span>
            <span className="property-feature">
              <Icon name="bath" size={15} />
              {property.bathrooms} KM
            </span>
          </div>

          <div className="property-card-footer">
            <span className="property-plot">
              Luas tanah {property.landArea} m²
            </span>
            <button
              className="button button-outline property-detail-button"
              type="button"
              onClick={() => setDetailsOpen(true)}
            >
              Lihat detail
            </button>
          </div>
        </div>
      </article>

      {detailsOpen && (
        <div
          className="property-dialog-backdrop"
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) setDetailsOpen(false);
          }}
        >
          <section
            className="property-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`dialog-title-${property.id}`}
          >
            <div className="dialog-image">
              <Image
                className="dialog-photo"
                src={property.image}
                alt={property.imageAlt}
                fill
                sizes="(max-width: 720px) 100vw, 40vw"
              />
            </div>
            <div className="dialog-content">
              <p className="property-type">{property.type}</p>
              <h2
                className="property-title"
                id={`dialog-title-${property.id}`}
              >
                {property.name}
              </h2>
              <p className="property-location">
                <Icon name="map-pin" size={15} />
                {property.location}
              </p>
              <p className="property-price">{formatPrice(property.price)}</p>
              <p className="dialog-description">{property.description}</p>
              <div className="property-features">
                <span className="property-feature">
                  <Icon name="ruler" size={14} />
                  {property.landArea} m² tanah
                </span>
                <span className="property-feature">
                  <Icon name="home" size={14} />
                  {property.buildingArea} m² bangunan
                </span>
                <span className="property-feature">
                  <Icon name="bed" size={15} />
                  {property.bedrooms} kamar tidur
                </span>
                <span className="property-feature">
                  <Icon name="bath" size={15} />
                  {property.bathrooms} kamar mandi
                </span>
              </div>
              <p className="dialog-demo-note">
                Data demonstrasi, bukan penawaran atau ketersediaan properti
                aktual.
              </p>
            </div>
            <button
              className="dialog-close"
              type="button"
              aria-label="Tutup detail properti"
              onClick={() => setDetailsOpen(false)}
            >
              <Icon name="close" size={18} />
            </button>
          </section>
        </div>
      )}
    </>
  );
}
