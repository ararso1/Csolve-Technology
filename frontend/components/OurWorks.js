import { featuredWorks } from "@/data/works";
import Link from "next/link";

const OurWorks = () => {
  return (
    <section className="our-works-section fix section-padding pt-0">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="/assets/img/bale.png" alt="img" />
            Our Works
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Projects That Prove We Deliver
          </h2>
          <p className="mt-3 wow fadeInUp" data-wow-delay=".4s">
            Over the past five years, Csolve Technology has delivered practical
            digital solutions for private businesses, government institutions,
            and NGOs — building more than systems, and creating lasting value.
          </p>
        </div>
        <div className="row g-4">
          {featuredWorks.map((work, index) => (
            <div
              key={work.slug}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={`${0.3 + index * 0.2}s`}
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
                  <Link href={`/our-works/${work.slug}`} className="link-btn">
                    View Project
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-5 wow fadeInUp" data-wow-delay=".4s">
          <Link href="/our-works" className="theme-btn">
            Explore Our Works
            <i className="far fa-arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurWorks;
