import Breadcrumb from "@/components/Breadcrumb";
import FunFactCounter from "@/components/FunFactCounter";
import Team from "@/components/Team";
import { TestimonialSlider2 } from "@/components/TestimonialSlider";
import { WorkingProcess2 } from "@/components/WorkingProcess";
import { company } from "@/data/services";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

const page = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="About Us" pageTitle={company.motto} />
      <section className="about-section fix section-padding pb-0">
        <div className="container">
          <div className="about-wrapper style-2">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="about-content ms-0 style-about">
                  <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      <img src="/assets/img/bale.png" alt="img" />
                      About Csolve Technology
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      {company.motto}
                    </h2>
                  </div>
                  {company.about.map((paragraph, index) => (
                    <p
                      key={paragraph}
                      className={`${
                        index === 0 ? "mt-3 mt-md-0" : "mt-3"
                      } wow fadeInUp`}
                      data-wow-delay={index === 0 ? ".5s" : ".6s"}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                <div className="about-image-3">
                  <img src="/assets/img/about/05.jpg" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section fix section-padding pt-80">
        <div className="container">
          <div className="about-wrapper style-2">
            <div className="row g-4">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="about-content">
                  <span className="sub-content">
                    <img src="/assets/img/bale.png" alt="img" />
                    Our Vision
                  </span>
                  <h3 className="mt-3">Building Africa’s Multi-Sector Future</h3>
                  <p className="mt-3">{company.vision}</p>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                <div className="about-content">
                  <span className="sub-content">
                    <img src="/assets/img/bale.png" alt="img" />
                    Our Mission
                  </span>
                  <h3 className="mt-3">Solving Real Problems Through Technology</h3>
                  <p className="mt-3">{company.mission}</p>
                  <Link href="contact" className="theme-btn mt-40">
                    Partner With Csolve
                    <i className="far fa-arrow-right" />
                  </Link>
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
              Our Values
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Principles That Guide How We Build
            </h2>
          </div>
          <div className="row g-4">
            {company.values.map((value, index) => (
              <div
                key={value.title}
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={`${0.2 + index * 0.1}s`}
              >
                <div className="service-card-items h-100">
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section fix section-padding pt-0">
        <div className="container">
          <div className="about-wrapper style-2">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="about-image-3">
                  <img src="/assets/img/about/06.jpg" alt="img" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <h4 className="wow fadeInUp" data-wow-delay=".3s">
                    Who We Serve
                  </h4>
                  <p className="mt-3 wow fadeInUp" data-wow-delay=".5s">
                    We position Csolve Technology as a trusted technology partner
                    for organizations seeking reliable digital solutions and
                    long-term growth across Ethiopia and East Africa.
                  </p>
                  <ul className="about-list wow fadeInUp" data-wow-delay=".3s">
                    {company.clients.map((client) => (
                      <li key={client}>
                        <i className="fas fa-check" />
                        {client}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="service"
                    className="theme-btn mt-50 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    Explore Our Services
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Team />
      <section className="funfact-section-2 section-padding pt-0">
        <div className="container">
          <FunFactCounter style={2} />
        </div>
      </section>
      <WorkingProcess2 />
      <section className="brand-section-2 mt-0 mb-0 fix section-padding pt-0">
        <div className="container-fluid">
          <div className="brand-wrapper-2">
            <div className="radius-shape">
              <img src="/assets/img/brand/radius-left.png" alt="shape-img" />
            </div>
            <div className="radius-shape-2">
              <img src="/assets/img/brand/radius-right.png" alt="shape-img" />
            </div>
            <h5 className="wow fadeInUp" data-wow-delay=".3s">
              Trusted Partner For Digital Transformation Across East Africa
            </h5>
          </div>
        </div>
      </section>
      <TestimonialSlider2 />
    </NextLayout>
  );
};
export default page;
