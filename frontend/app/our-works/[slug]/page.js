import Breadcrumb from "@/components/Breadcrumb";
import Cta from "@/components/Cta";
import RelatedWorksSlider from "@/components/RelatedWorksSlider";
import WorkProjectGallery from "@/components/WorkProjectGallery";
import { getWorkBySlug, getWorkGallery, works } from "@/data/works";
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

  const related = works
    .filter((item) => item.slug !== work.slug)
    .sort((a, b) => {
      const aScore = a.categories.filter((cat) =>
        work.categories.includes(cat)
      ).length;
      const bScore = b.categories.filter((cat) =>
        work.categories.includes(cat)
      ).length;
      return bScore - aScore;
    })
    .slice(0, 9);

  const galleryImages = getWorkGallery(work);

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
                {work.solutions?.length > 0 && (
                  <>
                    <h4 className="mt-4">Key Solutions Delivered</h4>
                    <ul className="about-list mt-3">
                      {work.solutions.map((item) => (
                        <li key={item}>
                          <i className="fas fa-check" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
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

          <WorkProjectGallery title={work.title} images={galleryImages} />

          <RelatedWorksSlider works={related} />
        </div>
      </section>
      <Cta sectionPadding={true} />
    </NextLayout>
  );
};

export default page;
