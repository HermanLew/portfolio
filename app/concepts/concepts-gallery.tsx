"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { ConceptImage } from "@/lib/concepts";

type GalleryLabels = {
  close: string;
  gallery: string;
  next: string;
  previous: string;
  openImage: string;
};

export function ConceptsGallery({
  images,
  labels,
}: {
  images: ConceptImage[];
  labels: GalleryLabels;
}) {
  const galleryImages = useMemo(
    () => images.filter((image): image is ConceptImage & { src: string } => Boolean(image.src)),
    [images],
  );
  const galleryColumns = useMemo(
    () => [
      galleryImages.map((image, index) => ({ image, index })).filter((_, index) => index % 2 === 0),
      galleryImages.map((image, index) => ({ image, index })).filter((_, index) => index % 2 === 1),
    ],
    [galleryImages],
  );
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const activeImage = activeIndex === null ? null : galleryImages[activeIndex];
  const hasMultipleImages = galleryImages.length > 1;
  const activeIsVideo = activeImage?.mediaType === "video";

  const goToPrevious = () => {
    if (!hasMultipleImages) return;
    setActiveIndex((index) => {
      if (index === null) return null;
      return (index - 1 + galleryImages.length) % galleryImages.length;
    });
  };

  const goToNext = () => {
    if (!hasMultipleImages) return;
    setActiveIndex((index) => {
      if (index === null) return null;
      return (index + 1) % galleryImages.length;
    });
  };

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") goToPrevious();
      if (event.key === "ArrowRight") goToNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, galleryImages.length]);

  useEffect(() => {
    setIsZoomed(false);
  }, [activeIndex]);

  if (galleryImages.length === 0) return null;

  const renderTile = (image: ConceptImage & { src: string }, index: number) => (
    <button
      className={`concept-gallery-tile concept-gallery-tile-${image.aspect}`}
      type="button"
      aria-label={`${labels.openImage} ${index + 1}`}
      onClick={() => setActiveIndex(index)}
      key={`${image.src}-${index}`}
    >
      {image.mediaType === "video" ? (
        <video
          src={image.src}
          aria-label={image.alt}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />
      ) : (
        <Image
          src={image.src}
          alt={image.alt}
          width={1440}
          height={1080}
          sizes="(max-width: 720px) 100vw, 46vw"
          priority={index < 2}
        />
      )}
    </button>
  );

  return (
    <>
      <section className="concepts-gallery section-shell" aria-label={labels.gallery}>
        <div className="concepts-gallery-desktop">
          {galleryColumns.map((column, columnIndex) => (
            <div className="concepts-gallery-column" key={`concept-column-${columnIndex}`}>
              {column.map(({ image, index }) => renderTile(image, index))}
            </div>
          ))}
        </div>
        <div className="concepts-gallery-mobile">
          {galleryImages.map((image, index) => renderTile(image, index))}
        </div>
      </section>
      {activeImage ? (
        <div className="concept-lightbox" role="dialog" aria-modal="true">
          <button
            className="concept-lightbox-backdrop"
            type="button"
            aria-label={labels.close}
            onClick={() => {
              setIsZoomed(false);
              setActiveIndex(null);
            }}
          />
          <div className={`concept-lightbox-content${isZoomed && !activeIsVideo ? " is-zoomed" : ""}`}>
            <button
              className="concept-lightbox-close"
              type="button"
              aria-label={labels.close}
              onClick={() => {
                setIsZoomed(false);
                setActiveIndex(null);
              }}
            >
              ×
            </button>
            {activeIsVideo ? null : (
              <button
                className="concept-lightbox-zoom"
                type="button"
                aria-pressed={isZoomed}
                onClick={() => setIsZoomed((zoomed) => !zoomed)}
              >
                {isZoomed ? "1x" : "1.25x"}
              </button>
            )}
            {hasMultipleImages ? (
              <button
                className="concept-lightbox-nav concept-lightbox-prev"
                type="button"
                aria-label={labels.previous}
                onClick={goToPrevious}
              >
                ←
              </button>
            ) : null}
            {activeIsVideo ? (
              <video
                className="concept-lightbox-image"
                src={activeImage.src}
                aria-label={activeImage.alt}
                autoPlay
                loop
                muted
                playsInline
                controls
                preload="metadata"
              />
            ) : (
              <Image
                className="concept-lightbox-image"
                src={activeImage.src}
                alt={activeImage.alt}
                width={1920}
                height={1440}
                sizes="100vw"
                priority
                onClick={() => setIsZoomed((zoomed) => !zoomed)}
              />
            )}
            <p className="concept-lightbox-caption">{activeImage.alt}</p>
            {hasMultipleImages ? (
              <button
                className="concept-lightbox-nav concept-lightbox-next"
                type="button"
                aria-label={labels.next}
                onClick={goToNext}
              >
                →
              </button>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
