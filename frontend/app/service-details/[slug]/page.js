import Breadcrumb from "@/components/Breadcrumb";
import Cta from "@/components/Cta";
import { GrowBusiness2 } from "@/components/GrowBusiness";
import WorkingProcess from "@/components/WorkingProcess";
import { getServiceBySlug, services } from "@/data/services";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: `${service.title} | Csolve Technology`,
    description: service.summary,
  };
}

const page = ({ params }) => {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const related = services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);

  return (
    <NextLayout>
      <Breadcrumb pageName="Services" pageTitle={service.title} />
      <section className="about-section fix section-padding">
        <div className="container">
          <div className="about-wrapper">
            <div className="row g-4 align-items-center justify-content-between">
              <div className="col-lg-5">
                <div className="about-content ms-0">
                  <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      <img src="/assets/img/bale.png" alt="img" />
                      We Build More Than Systems
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      {service.title}
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    {service.description}
                  </p>
                  <ul className="about-list wow fadeInUp" data-wow-delay=".3s">
                    {service.features.map((feature) => (
                      <li key={feature}>
                        <i className="fas fa-check" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div
                    className="about-button mt-5 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <Link href="/contact" className="theme-btn">
                      Start Your Project
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-image-items-4">
                  <div className="row g-4 align-items-center">
                    <div className="col-lg-12 wow fadeInUp" data-wow-delay=".3s">
                      <div className="about-thumbs">
                        <img src={service.image} alt={service.title} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-video-section fix section-padding">
        <div className="container">
          <div className="service-video-wrapper">
            <div className="row align-items-center">
              <div className="col-lg-7 wow fadeInUp" data-wow-delay=".3s">
                <div className="service-video-image">
                  <img src={service.image} alt={service.title} />
                  <ul
                    className="experience-text wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <li>Trusted Technology Partner</li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>Africa Focused</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="content">
                  <div className="section-title mb-0">
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Why Organizations Choose This Service
                    </h2>
                  </div>
                  <p className="mt-3 wow fadeInUp" data-wow-delay=".5s">
                    {service.summary}
                  </p>
                  {service.benefits.map((benefit, index) => (
                    <div
                      className="icon-items wow fadeInUp"
                      data-wow-delay={index === 0 ? ".3s" : ".5s"}
                      key={benefit}
                    >
                      <h5>
                        <i className="fas fa-check-circle" />
                        {benefit}
                      </h5>
                      <p>
                        Built to help private companies, government institutions,
                        NGOs, and growing businesses accelerate digital
                        transformation with confidence.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="/assets/img/bale.png" alt="img" />
              Related Services
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Explore More Ways We Can Help
            </h2>
          </div>
          <div className="row">
            {related.map((item, index) => (
              <div
                key={item.slug}
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={[".3s", ".5s", ".7s"][index]}
              >
                <div className="service-popular-items">
                  <div className="service-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="service-content">
                    <h3>
                      <Link href={`/service-details/${item.slug}`}>
                        {item.title}
                      </Link>
                    </h3>
                    <p>{item.summary}</p>
                    <Link
                      href={`/service-details/${item.slug}`}
                      className="theme-btn bg-2"
                    >
                      Learn More <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WorkingProcess />
      <GrowBusiness2 bg={"footer-bg"} />
      <Cta sectionPadding={true} />
    </NextLayout>
  );
};

export default page;
