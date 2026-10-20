"use client";

import {
  getCategoryLabel,
  getPartnerInitials,
  getPartnersByCategory,
  partnerCategories,
  partners,
} from "@/data/partners";
import { useMemo, useState } from "react";

const PartnersListing = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const groupedPartners = useMemo(
    () => getPartnersByCategory(activeCategory),
    [activeCategory]
  );

  const visibleCount = useMemo(() => {
    if (activeCategory === "all") return partners.length;
    return partners.filter((partner) => partner.category === activeCategory)
      .length;
  }, [activeCategory]);

  return (
    <section className="partners-page-section fix section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="/assets/img/bale.png" alt="img" />
            Partnership Network
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Organizations That Trust Csolve Technology
          </h2>
          <p className="mt-3 wow fadeInUp" data-wow-delay=".4s">
            Filter partners by sector — government and public institutions,
            private businesses, and NGOs across Ethiopia.
          </p>
          <div className="partners-count-badge wow fadeInUp" data-wow-delay=".5s">
            <strong>{visibleCount}</strong>
            <span>
              {activeCategory === "all"
                ? "Trusted Partners"
                : getCategoryLabel(activeCategory)}
            </span>
          </div>
        </div>

        <div className="partners-filter wow fadeInUp" data-wow-delay=".3s">
          {partnerCategories.map((category) => (
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

        {groupedPartners.map((group) => (
          <div key={group.category} className="partners-category-block">
            <div className="partners-category-header">
              <h3>{group.label}</h3>
              <span>{group.items.length} partners</span>
            </div>
            <div className="row g-3 g-md-4">
              {group.items.map((partner) => (
                <div
                  key={partner.id}
                  className="col-xl-3 col-lg-4 col-md-6"
                >
                  <div className="partner-card">
                    <div className="partner-card-top">
                      <span className="partner-initials">
                        {getPartnerInitials(partner.name)}
                      </span>
                      <span className="partner-category">
                        {getCategoryLabel(partner.category)}
                      </span>
                    </div>
                    <h4>{partner.name}</h4>
                    <p>
                      <i className="fas fa-map-marker-alt" />
                      {partner.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {!groupedPartners.length && (
          <div className="text-center mt-5">
            <p>No partners found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PartnersListing;
