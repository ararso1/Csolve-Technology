import CommunityImpact from "@/components/CommunityImpact";
import FunFactCounter from "@/components/FunFactCounter";
import HeroSlider from "@/components/HeroSlider";
import HomeMediaShowcase from "@/components/HomeMediaShowcase";
import HomeTestimonials from "@/components/HomeTestimonials";
import Partners from "@/components/Partners";
import { getRecentPosts } from "@/data/blog";
import OurWorks from "@/components/OurWorks";
import { company, topServices } from "@/data/services";
import { teamMembers } from "@/data/team";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

const page = () => {
  const latestPosts = getRecentPosts(3);

  return (
    <NextLayout header={1}>
      <HeroSlider />
      {/* Service Section Start */}
      <section className="service-section fix pt-80 pb-80 section-bg">
        <div className="container">
          <h4
            className="mb-5 text-white text-center wow fadeInUp"
            data-wow-delay=".3s"
          >
            We Build More Than Systems — Preparing Your Business For Success
          </h4>
          <div className="row g-4">
            {topServices.map((service, index) => (
            <div
                key={service.slug}
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={`${0.3 + index * 0.2}s`}
            >
              <div className="service-items">
                <div className="content">
                    <p>{service.number}</p>
                  <h5>
                      <Link href={`/service-details/${service.slug}`}>
                        {service.shortTitle}
                    </Link>
                  </h5>
                    <Link
                      className="arrow-btn"
                      href={`/service-details/${service.slug}`}
                    >
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
                <div className="thumb">
                    <img src={service.image} alt={service.title} />
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* About Section Start */}
      <section className="about-section fix section-padding">
        <div className="container">
          <div className="about-wrapper">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="about-image-items">
                  <ul
                    className="experience-text wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <li>Serving Ethiopia &amp; East Africa</li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>We Build More Than Systems 6+ Years</li>
                  </ul>
                  <div className="row g-4 align-items-center">
                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".2s">
                      <div className="about-image">
                        <img src="/assets/img/about/01.jpg" alt="about-img" />
                      </div>
                    </div>
                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".4s">
                      <div className="about-image">
                        <img src="/assets/img/about/02.png" alt="about-img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      <img src="/assets/img/bale.png" alt="img" />
                      {company.motto}
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      A Trusted Technology Partner Across East Africa
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    {company.about[0]}
                  </p>
                  <ul className="about-list wow fadeInUp" data-wow-delay=".3s">
                    {company.clients.slice(0, 3).map((client) => (
                      <li key={client}>
                      <i className="fas fa-check" />
                        {client}
                    </li>
                    ))}
                  </ul>
                  <div
                    className="about-author wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <div className="about-button">
                      <Link href="about" className="theme-btn">
                        Learn More About Us
                        <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section Start */}
      <section className="service-section section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="/assets/img/bale.png" alt="img" />
              Popular Services
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              We Build More Than Systems — <br />
              Services Built For Real Impact
            </h2>
          </div>
          <div className="row">
            {topServices.map((service, index) => (
            <div
                key={service.slug}
              className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay={`${0.2 + index * 0.2}s`}
              >
                <div
                  className={`service-card-items${
                    index === 1 ? " active" : ""
                  }`}
                >
                <div className="icon">
                    <i className={service.icon} />
                </div>
                <h3>
                    <Link href={`/service-details/${service.slug}`}>
                      {service.title}
                  </Link>
                </h3>
                <div className="service-thumb">
                    <img src={service.thumb} alt={service.title} />
                  <div className="line-shape">
                      <img src="/assets/img/service/line.png" alt="shape-img" />
                    </div>
                  </div>
                  <Link
                    className="link-btn"
                    href={`/service-details/${service.slug}`}
                  >
                  Read More
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
            ))}
                </div>
          <div className="text-center mt-5 wow fadeInUp" data-wow-delay=".3s">
            <Link href="/service" className="theme-btn">
              View All Services
                  <i className="far fa-arrow-right" />
                </Link>
          </div>
        </div>
      </section>
      <OurWorks />
      <CommunityImpact />
      <HomeMediaShowcase />
      {/* Team Section Start */}
      <section className="team-section fix section-padding">
        <div className="container">
          <div className="section-title text-center">
                <span className="sub-content wow fadeInUp">
              <img src="/assets/img/bale.png" alt="img" />
              Leadership Team
                </span>
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Young, Energetic Founders Leading Csolve
                </h2>
            <p className="mt-3 wow fadeInUp" data-wow-delay=".4s">
              Meet the three founders driving Csolve Technology with vision,
              technical excellence, and a commitment to building more than
              systems.
              </p>
            </div>
          <div className="row g-4 justify-content-center">
            {teamMembers.map((member, index) => (
            <div
                key={member.slug}
                className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay={`${0.3 + index * 0.2}s`}
            >
              <div className="team-items">
                <div className="team-image">
                    <img src={member.image} alt={member.name} />
                </div>
                <div className="team-content">
                  <h4>
                      <Link href={`/team-details/${member.slug}`}>
                        {member.shortName}
                      </Link>
                  </h4>
                    <p>{member.role}</p>
                  <div className="social-profile">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                          <a href={`mailto:${member.email}`}>
                            <i className="far fa-envelope" />
                        </a>
                      </li>
                    </ul>
                      <Link
                        href={`/team-details/${member.slug}`}
                        className="plus-btn"
                      >
                      <i className="far fa-plus" />
                      </Link>
                </div>
                  </div>
                </div>
              </div>
            ))}
            </div>
          <div className="text-center mt-5 wow fadeInUp" data-wow-delay=".4s">
            <Link href="/team" className="theme-btn">
              View Leadership Team
              <i className="far fa-arrow-right" />
              </Link>
          </div>
        </div>
      </section>
      {/* Funfact Section Start */}
      <section className="funfact-section section-padding pt-0">
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
      {/* News Section Start */}
      <section className="news-section section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="/assets/img/bale.png" alt="img" />
              News &amp; Blog
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Latest Insights From Csolve Technology
            </h2>
          </div>
          <div className="row">
            {latestPosts.map((post, index) => (
              <div
                key={post.slug}
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={`${0.3 + index * 0.2}s`}
              >
                <div className="news-box-items">
                  <div className="news-content">
                    <p>
                      <span className="news-category-accent">
                        {post.categoryLabel}
                      </span>
                      {" · "}
                      {post.date}
                    </p>
                    <h4>
                      <Link href={`/news/${post.slug}`}>{post.title}</Link>
                    </h4>
                    <Link className="link-btn" href={`/news/${post.slug}`}>
                      Read More
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                  <div
                    className="news-image bg-cover"
                    style={{ backgroundImage: `url("${post.image}")` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5 wow fadeInUp" data-wow-delay=".4s">
            <Link href="/news" className="theme-btn">
              View All Insights
              <i className="far fa-arrow-right" />
            </Link>
          </div>
        </div>
      </section>
    </NextLayout>
  );
};
export default page;
