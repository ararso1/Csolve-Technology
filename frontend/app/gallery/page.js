"use client";

import Breadcrumb from "@/components/Breadcrumb";
import Cta from "@/components/Cta";
import { galleryCategories, galleryItems } from "@/data/gallery";
import NextLayout from "@/layouts/NextLayout";
import { useMemo, useState } from "react";

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeItem, setActiveItem] = useState(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <NextLayout>
      <Breadcrumb pageName="Gallery" pageTitle="Visual Stories Of Impact" />
      <section className="gallery-page-section fix section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="/assets/img/bale.png" alt="img" />
              Csolve Gallery
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Moments From Delivery, Innovation &amp; Community
            </h2>
            <p className="mt-3 wow fadeInUp" data-wow-delay=".4s">
              Browse selected visuals from software projects, digital products,
              infrastructure work, and community impact initiatives across East
              Africa.
            </p>
          </div>

          <div className="gallery-filter wow fadeInUp" data-wow-delay=".3s">
            {galleryCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={activeCategory === category.id ? "active" : ""}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredItems.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`gallery-card gallery-card--${item.size} wow fadeInUp`}
                data-wow-delay={`${0.15 + (index % 6) * 0.05}s`}
                onClick={() => setActiveItem(item)}
              >
                <img src={item.image} alt={item.title} />
                <span className="gallery-card-overlay">
                  <span className="gallery-card-tag">{item.categoryLabel}</span>
                  <span className="gallery-card-title">{item.title}</span>
                  <span className="gallery-card-hint">
                    View
                    <i className="far fa-arrow-right" />
                  </span>
                </span>
              </button>
            ))}
          </div>

          {!filteredItems.length && (
            <div className="text-center mt-5">
              <p>No gallery items in this category yet. Try another filter.</p>
            </div>
          )}
        </div>
      </section>

      {activeItem && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          onClick={() => setActiveItem(null)}
        >
          <div
            className="gallery-lightbox-inner"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="gallery-lightbox-close"
              onClick={() => setActiveItem(null)}
              aria-label="Close gallery preview"
            >
              <i className="fas fa-times" />
            </button>
            <img src={activeItem.image} alt={activeItem.title} />
            <div className="gallery-lightbox-meta">
              <span>{activeItem.categoryLabel}</span>
              <h3>{activeItem.title}</h3>
            </div>
          </div>
        </div>
      )}

      <Cta sectionPadding={true} />
    </NextLayout>
  );
};

export default GalleryPage;
