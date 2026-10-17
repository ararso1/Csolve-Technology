import Breadcrumb from "@/components/Breadcrumb";
import Cta from "@/components/Cta";
import { getWorkBySlug, works } from "@/data/works";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export function generateMetadata({ params }) {
  const work = getWorkBySlug(params.slug);
  if (!work) return {};
  return {
    title: `${work.title} | Our Works | Csolve Technology`,
    description: work.summary,
  };
}

const page = ({ params }) => {
  const work = getWorkBySlug(params.slug);
  if (!work) notFound();

  const related = works.filter((item) => item.slug !== work.slug).slice(0, 3);

  return (
    <NextLayout>
      <Breadcrumb pageName="Our Works" pageTitle={work.title} />
      <section className="project-details-section fix section-padding">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="work-detail-image wow fadeInUp" data-wow-delay=".3s">
                <img src={work.image} alt={work.title} />
              </div>
              <div className="work-detail-content mt-4 wow fadeInUp" data-wow-delay=".4s">
                <span className="sub-content">
                  <img src="/assets/img/bale.png" alt="img" />
                  Project Overview
                </span>
                <h2 className="mt-3">{work.title}</h2>
                <p className="mt-3">{work.description}</p>
                <h4 className="mt-4">Key Outcomes</h4>
                <ul className="about-list mt-3">
                  {work.outcomes.map((item) => (
                    <li key={item}>
                      <i className="fas fa-check" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="work-info-card wow fadeInUp" data-wow-delay=".3s">
                <h4>Project Information</h4>
                <ul>
                  <li>
                    <strong>Client / Institution</strong>
                    <span>{work.client}</span>
                  </li>
                  <li>
                    <strong>Sector</strong>
                    <span>{work.sector}</span>
                  </li>
                  <li>
                    <strong>Year</strong>
                    <span>{work.year}</span>
                  </li>
                  <li>
                    <strong>Services</strong>
                    <span>{work.services.join(", ")}</span>
                  </li>
                </ul>
                <Link href="/contact" className="theme-btn w-100 text-center mt-4">
                  Start a Similar Project
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>

          <div className="section-title text-center mt-5 pt-4">
            <span className="sub-content">
              <img src="/assets/img/bale.png" alt="img" />
              More Works
            </span>
            <h2>Explore Related Projects</h2>
          </div>
          <div className="row g-4">
            {related.map((item) => (
              <div key={item.slug} className="col-xl-4 col-lg-6 col-md-6">
                <div className="work-card-items">
                  <div className="work-image">
                    <img src={item.image} alt={item.title} />
                    <span className="work-category">{item.sector}</span>
                  </div>
                  <div className="work-content">
                    <h3>
                      <Link href={`/our-works/${item.slug}`}>{item.title}</Link>
                    </h3>
                    <p>{item.summary}</p>
                    <Link href={`/our-works/${item.slug}`} className="link-btn">
                      View Details
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Cta sectionPadding={true} />
    </NextLayout>
  );
};

export default page;
