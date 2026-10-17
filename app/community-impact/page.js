import Breadcrumb from "@/components/Breadcrumb";
import Cta from "@/components/Cta";
import {
  communityIntro,
  communityStats,
  initiatives,
  participateOptions,
} from "@/data/community";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

const page = () => {
  return (
    <NextLayout>
      <Breadcrumb
        pageName="Community Impact"
        pageTitle="Community Impact & Volunteering"
      />

      <section className="about-section fix section-padding pb-0">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-7">
              <div className="about-content ms-0">
                <div className="section-title">
                  <span className="sub-content wow fadeInUp">
                    <img src="/assets/img/bale.png" alt="img" />
                    {communityIntro.motto}
                  </span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    More Than A Technology Company
                  </h2>
                </div>
                <p className="mt-3 wow fadeInUp" data-wow-delay=".4s">
                  {communityIntro.text}
                </p>
                <p className="community-key-message wow fadeInUp" data-wow-delay=".5s">
                  {communityIntro.keyMessage}
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="community-stat-grid">
                {communityStats.map((stat) => (
                  <div key={stat.label} className="community-stat-card">
                    <h3>{stat.value}</h3>
                    <h5>{stat.label}</h5>
                    <p>{stat.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="community-impact-section fix section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="/assets/img/bale.png" alt="img" />
              Our Initiatives
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Education, Opportunity &amp; Shared Growth
            </h2>
          </div>

          <div className="row g-5">
            {initiatives.map((item, index) => (
              <div
                key={item.slug}
                id={item.slug}
                className="col-12 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div
                  className={`community-detail-row${
                    index % 2 === 1 ? " reverse" : ""
                  }`}
                >
                  <div className="community-detail-image">
                    <img src={item.image} alt={item.title} />
                    <span className="community-status">{item.status}</span>
                  </div>
                  <div className="community-detail-content">
                    <h3>{item.title}</h3>
                    <p className="work-meta">
                      {item.location} · Status: {item.status}
                    </p>
                    <p>{item.description}</p>
                    <h5>Objectives</h5>
                    <ul className="about-list">
                      {item.objectives.map((objective) => (
                        <li key={objective}>
                          <i className="fas fa-check" />
                          {objective}
                        </li>
                      ))}
                    </ul>
                    <h5 className="mt-3">Beneficiaries</h5>
                    <ul className="about-list">
                      {item.beneficiaries.map((beneficiary) => (
                        <li key={beneficiary}>
                          <i className="fas fa-check" />
                          {beneficiary}
                        </li>
                      ))}
                    </ul>
                    <h5 className="mt-3">Documented Results</h5>
                    <p>{item.results}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-section section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="/assets/img/bale.png" alt="img" />
              Get Involved
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              How You Can Participate Or Support
            </h2>
          </div>
          <div className="row g-4">
            {participateOptions.map((option, index) => (
              <div
                key={option.title}
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={`${0.2 + index * 0.1}s`}
              >
                <div className="service-card-items h-100">
                  <h3>{option.title}</h3>
                  <p>{option.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link href="/contact" className="theme-btn">
              Partner With Our Community Work
              <i className="far fa-arrow-right" />
            </Link>
          </div>
        </div>
      </section>

      <Cta sectionPadding={true} />
    </NextLayout>
  );
};

export default page;
