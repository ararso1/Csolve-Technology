"use client";

import { useState } from "react";

const WorkProjectGallery = ({ title, images = [] }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  if (!images.length) return null;

  const activeImage = activeIndex !== null ? images[activeIndex] : null;

  const showPrev = () => {
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + images.length) % images.length
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % images.length
    );
  };

  return (
    <div className="work-project-gallery wow fadeInUp" data-wow-delay=".35s">
      <div className="work-project-gallery__head">
        <span className="sub-content">
          <img src="/assets/img/bale.png" alt="img" />
          Project Gallery
        </span>
        <h3>Related Visuals From {title}</h3>
      </div>

      <div className="work-project-gallery__grid">
        {images.map((image, index) => (
          <button
            key={`${image.src}-${index}`}
            type="button"
            className="work-project-gallery__item"
            onClick={() => setActiveIndex(index)}
          >
            <img src={image.src} alt={image.alt || title} />
            <span className="work-project-gallery__overlay">
              <i className="far fa-search-plus" />
              <em>View</em>
            </span>
          </button>
        ))}
      </div>

      {activeImage && (
        <div
          className="work-project-gallery__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.alt || title}
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="work-project-gallery__lightbox-inner"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="work-project-gallery__close"
              onClick={() => setActiveIndex(null)}
              aria-label="Close gallery"
            >
              <i className="fas fa-times" />
            </button>
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  className="work-project-gallery__nav work-project-gallery__nav--prev"
                  onClick={showPrev}
                  aria-label="Previous image"
                >
                  <i className="far fa-arrow-left" />
                </button>
                <button
                  type="button"
                  className="work-project-gallery__nav work-project-gallery__nav--next"
                  onClick={showNext}
                  aria-label="Next image"
                >
                  <i className="far fa-arrow-right" />
                </button>
              </>
            )}
            <img src={activeImage.src} alt={activeImage.alt || title} />
            <div className="work-project-gallery__meta">
              <span>
                {activeIndex + 1} / {images.length}
              </span>
              <h4>{activeImage.alt || title}</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkProjectGallery;
