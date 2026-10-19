import Breadcrumb from "@/components/Breadcrumb";
import FunFactCounter from "@/components/FunFactCounter";
import HomeTestimonials from "@/components/HomeTestimonials";
import Partners from "@/components/Partners";
import Team from "@/components/Team";
import { company } from "@/data/services";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

const processSteps = [
  {
    step: "01",
    title: "Discover & Align",
    text: "We listen carefully to your goals, users, and constraints so every solution starts with real needs.",
  },
  {
    step: "02",
    title: "Design & Build",
    text: "Our team designs, develops, and integrates practical systems across software, AI, and infrastructure.",
  },
  {
    step: "03",
    title: "Launch & Grow",
    text: "We deploy with care, support your teams, and continue improving for lasting digital impact.",
  },
];

const valueIcons = {
  Innovation: "fas fa-lightbulb",
  Integrity: "fas fa-handshake",
  Excellence: "fas fa-award",
  Impact: "fas fa-globe",
};

const page = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="About Us" pageTitle="About Csolve Technology" />

      <section className="about-page-intro fix section-padding">
        <div className="container">
          <div className="row g-4 g-xl-5 align-items-center">
            <div className="col-lg-6">
              <div className="about-page-content">
                <div className="section-title">
                  <span className="sub-content wow fadeInUp">
                    <img src="/assets/img/bale.png" alt="img" />
                    Who We Are
                  </span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    {company.motto}
                  </h2>
                </div>
                {company.about.map((paragraph, index) => (
                  <p
                    key={paragraph}
                    className={`wow fadeInUp${index === 0 ? " mt-3" : ""}`}
                    data-wow-delay={index === 0 ? ".45s" : ".55s"}
                  >
                    {paragraph}
                  </p>
                ))}
                <div
                  className="about-page-actions wow fadeInUp"
                  data-wow-delay=".65s"
                >
                  <Link href="/contact" className="theme-btn">
                    Partner With Csolve
                    <i className="far fa-arrow-right" />
                  </Link>
                  <Link href="/service" className="theme-btn about-btn-outline">
                    Our Services
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".35s">
              <div className="about-page-media">
                <div className="about-page-media-main">
                  <img
                    src="/assets/img/about/01.jpg"
                    alt="Csolve Technology team and workspace"
                  />
                </div>
                <div className="about-page-media-stack">
                  <div className="about-page-media-thumb">
                    <img
                      src="/assets/img/about/02.png"
                      alt="Csolve digital solutions"
                    />
                  </div>
                  <div className="about-page-badge">
                    <strong>6+</strong>
                    <span>Years Building Impact Across East Africa</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-page-purpose fix section-padding pt-0">
        <div className="container">
          <div className="section-title text-center mb-4">
            <span className="sub-content wow fadeInUp">
              <img src="/assets/img/bale.png" alt="img" />
              Purpose
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Why Csolve Exists
            </h2>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
              <div className="about-purpose-card about-purpose-card--vision">
                <div className="about-purpose-top">
                  <div className="about-purpose-icon">
                    <i className="fas fa-eye" />
                  </div>
                  <span className="about-purpose-label">Our Vision</span>
                </div>
                <h3>Building Africa’s Multi-Sector Future</h3>
                <p>{company.vision}</p>
                <ul className="about-purpose-points">
                  <li>30+ businesses in 5 years</li>
                  <li>200+ businesses in 10 years</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".35s">
              <div className="about-purpose-card about-purpose-card--mission">
                <div className="about-purpose-top">
                  <div className="about-purpose-icon">
                    <i className="fas fa-bullseye" />
                  </div>
                  <span className="about-purpose-label">Our Mission</span>
                </div>
                <h3>Solving Real Problems Through Technology</h3>
                <p>{company.mission}</p>
                <ul className="about-purpose-points">
                  <li>Technology that serves people</li>
                  <li>Innovation with lasting value</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-page-values fix section-padding pt-0">
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
                <div className="about-value-card">
                  <div className="about-value-icon">
                    <i className={valueIcons[value.title] || "fas fa-check"} />
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-page-serve fix section-padding pt-0">
        <div className="container">
          <div className="row g-4 g-xl-5 align-items-center">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".25s">
              <div className="about-page-serve-media">
                <img
                  src="/assets/img/about/05.png"
                  alt="Organizations Csolve Technology serves"
                />
                <div className="about-page-serve-caption">
                  Trusted by private, public &amp; NGO partners
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-page-content">
                <div className="section-title">
                  <span className="sub-content wow fadeInUp">
                    <img src="/assets/img/bale.png" alt="img" />
                    Who We Serve
                  </span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    A Trusted Technology Partner Across East Africa
                  </h2>
                </div>
                <p className="wow fadeInUp" data-wow-delay=".45s">
                  We position Csolve Technology as a reliable partner for
                  organizations seeking practical digital solutions, secure
                  systems, and long-term growth across Ethiopia and East Africa.
                </p>
                <ul className="about-page-list wow fadeInUp" data-wow-delay=".55s">
                  {company.clients.map((client) => (
                    <li key={client}>
                      <i className="fas fa-check" />
                      {client}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/our-works"
                  className="theme-btn mt-4 wow fadeInUp"
                  data-wow-delay=".65s"
                >
                  See Our Works
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-page-process fix section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="/assets/img/bale.png" alt="img" />
              How We Work
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              A Clear Path From Idea To Impact
            </h2>
          </div>
          <div className="row g-4">
            {processSteps.map((item, index) => (
              <div
                key={item.step}
                className="col-lg-4 wow fadeInUp"
                data-wow-delay={`${0.2 + index * 0.15}s`}
              >
                <div className="about-process-card">
                  <span className="about-process-step">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Team />

      <section className="funfact-section section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="/assets/img/bale.png" alt="img" />
              Company Metrics
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Impact Numbers That Define Csolve
            </h2>
          </div>
          <FunFactCounter />
        </div>
      </section>

      <Partners paddingTop={false} />
      <HomeTestimonials />
    </NextLayout>
  );
};

export default page;
