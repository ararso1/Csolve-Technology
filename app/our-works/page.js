"use client";

import Breadcrumb from "@/components/Breadcrumb";
import Cta from "@/components/Cta";
import FunFactCounter from "@/components/FunFactCounter";
import { workCategories, works } from "@/data/works";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import { useMemo, useState } from "react";

const page = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredWorks = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return works.filter((work) => {
      const matchesCategory =
        activeCategory === "all" || work.categories.includes(activeCategory);

      const matchesSearch =
        !query ||
        work.title.toLowerCase().includes(query) ||
        work.client.toLowerCase().includes(query) ||
        work.summary.toLowerCase().includes(query) ||
        work.sector.toLowerCase().includes(query) ||
        work.services.some((service) => service.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <NextLayout>
      <Breadcrumb pageName="Our Works" pageTitle="Projects That Deliver Impact" />

      <section className="funfact-section works-metrics-section fix section-padding pb-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="/assets/img/bale.png" alt="img" />
              Company Metrics
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Impact Numbers That Define Csolve
            </h2>
            <p className="mt-3 wow fadeInUp" data-wow-delay=".4s">
              Measurable results from websites, enterprise systems, youth
              opportunity, and a culture of excellence across every delivery.
            </p>
          </div>
          <FunFactCounter />
        </div>
      </section>

      <section className="project-section works-page-section fix section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="/assets/img/bale.png" alt="img" />
              Portfolio Across Sectors
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Digital Projects Delivered By Csolve Technology
            </h2>
            <p className="mt-3 wow fadeInUp" data-wow-delay=".4s">
              Explore our work across government digitalization, education
              systems, enterprise platforms, websites, and mobile applications —
              built for real institutions and lasting impact.
            </p>
            <div className="works-count-badge wow fadeInUp" data-wow-delay=".5s">
              <strong>{filteredWorks.length}</strong>
              <span>
                {filteredWorks.length === 1 ? "Project Shown" : "Projects Shown"}
              </span>
            </div>
          </div>

          <div className="works-toolbar wow fadeInUp" data-wow-delay=".3s">
            <div className="works-search">
              <i className="far fa-search" />
              <input
                type="search"
                placeholder="Search by project, client, or service..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
              />
            </div>
            <div className="works-filter">
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
          </div>

          <div className="row g-4">
            {filteredWorks.map((work, index) => (
              <div
                key={work.slug}
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={`${0.15 + (index % 6) * 0.05}s`}
              >
                <article className="work-card-items">
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
                      {work.services.slice(0, 3).map((service) => (
                        <span key={service}>{service}</span>
                      ))}
                    </div>
                    <Link href={`/our-works/${work.slug}`} className="link-btn">
                      View Details
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {!filteredWorks.length && (
            <div className="text-center mt-5">
              <p>
                No projects match your search or filter. Try another category or
                keyword.
              </p>
            </div>
          )}
        </div>
      </section>
      <Cta sectionPadding={true} />
    </NextLayout>
  );
};

export default page;
