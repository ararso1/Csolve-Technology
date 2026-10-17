"use client";

import Breadcrumb from "@/components/Breadcrumb";
import Cta from "@/components/Cta";
import { workCategories, works } from "@/data/works";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import { useMemo, useState } from "react";

const page = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredWorks = useMemo(() => {
    if (activeCategory === "all") return works;
    return works.filter((work) => work.categories.includes(activeCategory));
  }, [activeCategory]);

  return (
    <NextLayout>
      <Breadcrumb pageName="Our Works" pageTitle="Projects That Deliver Impact" />
      <section className="project-section fix section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="/assets/img/bale.png" alt="img" />
              Portfolio Across Sectors
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Our Works Over The Past Five Years
            </h2>
            <p className="mt-3 wow fadeInUp" data-wow-delay=".4s">
              Explore selected projects delivered for private-sector clients,
              government institutions, and NGOs — spanning software, ERP,
              websites, mobile apps, AI, and digital transformation.
            </p>
          </div>

          <div className="works-filter wow fadeInUp" data-wow-delay=".3s">
            {workCategories.map((category) => (
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

          <div className="row g-4">
            {filteredWorks.map((work, index) => (
              <div
                key={work.slug}
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={`${0.2 + (index % 3) * 0.1}s`}
              >
                <div className="work-card-items">
                  <div className="work-image">
                    <img src={work.image} alt={work.title} />
                    <span className="work-category">{work.sector}</span>
                  </div>
                  <div className="work-content">
                    <p className="work-meta">
                      {work.client} · {work.year}
                    </p>
                    <h3>
                      <Link href={`/our-works/${work.slug}`}>{work.title}</Link>
                    </h3>
                    <p>{work.summary}</p>
                    <div className="work-tags">
                      {work.services.map((service) => (
                        <span key={service}>{service}</span>
                      ))}
                    </div>
                    <Link href={`/our-works/${work.slug}`} className="link-btn">
                      View Details
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {!filteredWorks.length && (
            <div className="text-center mt-5">
              <p>No projects found in this category yet. Please explore another filter.</p>
            </div>
          )}
        </div>
      </section>
      <Cta sectionPadding={true} />
    </NextLayout>
  );
};

export default page;
