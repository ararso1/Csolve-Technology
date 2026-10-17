import Breadcrumb from "@/components/Breadcrumb";
import Cta from "@/components/Cta";
import ServicesFaq from "@/components/ServicesFaq";
import { company, services } from "@/data/services";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

const audienceCopy = {
  "Private companies and enterprises":
    "Custom systems, ERP, and digital platforms that improve operations and growth.",
  "Government offices and public institutions":
    "Secure, reliable digital services that support transparency and public delivery.",
  "NGOs and development organizations":
    "Practical tools for reporting, outreach, and program coordination in the field.",
  "Startups, SMEs, and growing businesses":
    "Scalable websites, apps, and marketing that help young brands move faster.",
};

const page = () => {
  return (
    <NextLayout>
      <Breadcrumb
        pageName="Our Services"
        pageTitle="Technology Services Built For Impact"
      />

      <section className="services-page-intro fix section-padding">
        <div className="container">
          <div className="row g-4 g-xl-5 align-items-center">
            <div className="col-lg-6">
              <div className="services-page-content">
                <div className="section-title">
                  <span className="sub-content wow fadeInUp">
                    <img src="/assets/img/bale.png" alt="img" />
                    {company.motto}
                  </span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Digital Solutions That Improve Efficiency And Accelerate
                    Growth
                  </h2>
                </div>
                <p className="wow fadeInUp" data-wow-delay=".45s">
                  Csolve Technology delivers software, AI, ERP, infrastructure,
                  cybersecurity, and digital marketing for organizations that
                  need reliable partners — not just short-term projects.
                </p>
                <ul className="services-page-highlights wow fadeInUp" data-wow-delay=".55s">
                  <li>
                    <i className="fas fa-check" />
                    Nine core service areas under one trusted team
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    Built for private, government, and NGO partners
                  </li>
                  <li>
                    <i className="fas fa-check" />
                    Practical delivery focused on lasting value
                  </li>
                </ul>
                <div className="services-page-actions wow fadeInUp" data-wow-delay=".65s">
                  <Link href="/contact" className="theme-btn">
                    Start a Project
                    <i className="far fa-arrow-right" />
                  </Link>
                  <Link href="/our-works" className="theme-btn services-btn-outline">
                    View Our Works
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".35s">
              <div className="services-page-media">
                <div className="services-page-media-main">
                  <img
                    src="/assets/img/service/software.jpg"
                    alt="Csolve Technology services"
                  />
                </div>
                <div className="services-page-media-side">
                  <div className="services-page-media-thumb">
                    <img
                      src="/assets/img/service/ai.jpg"
                      alt="AI and digital innovation"
                    />
                  </div>
                  <div className="services-page-stat">
                    <strong>09</strong>
                    <span>Core services ready to support your digital growth</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-page-grid fix section-padding pt-0" id="services">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="/assets/img/bale.png" alt="img" />
              All Services
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Explore What Csolve Can Build With You
            </h2>
            <p className="mt-3 wow fadeInUp" data-wow-delay=".4s">
              From software and ERP to AI, infrastructure, and digital growth —
              each service is designed to create measurable progress.
            </p>
          </div>

          <div className="row g-4">
            {services.map((service, index) => (
              <div
                key={service.slug}
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={`${0.15 + (index % 3) * 0.1}s`}
              >
                <article className="services-page-card">
                  <div className="services-page-card-image">
                    <img src={service.image} alt={service.title} />
                    <span className="services-page-card-number">
                      {service.number}
                    </span>
                  </div>
                  <div className="services-page-card-body">
                    <div className="services-page-card-icon">
                      <i className={service.icon} />
                    </div>
                    <h3>
                      <Link href={`/service-details/${service.slug}`}>
                        {service.title}
                      </Link>
                    </h3>
                    <p>{service.summary}</p>
                    <Link
                      href={`/service-details/${service.slug}`}
                      className="link-btn"
                    >
                      Learn More
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-page-audience fix section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="/assets/img/bale.png" alt="img" />
              Who We Serve
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Built For Organizations Seeking Reliable Digital Growth
            </h2>
          </div>
          <div className="row g-4">
            {company.clients.map((client, index) => (
              <div
                key={client}
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={`${0.2 + index * 0.1}s`}
              >
                <div className="services-audience-card">
                  <span className="services-audience-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{client}</h3>
                  <p>
                    {audienceCopy[client] ||
                      "Practical technology partnership for long-term digital progress."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesFaq />

      <Cta sectionPadding={true} />
    </NextLayout>
  );
};

export default page;
