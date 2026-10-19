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

const participateIcons = {
  Individuals: "fas fa-user-friends",
  Organizations: "fas fa-building",
  "Sponsors & Donors": "fas fa-hand-holding-heart",
};

const page = () => {
  return (
    <NextLayout>
      <Breadcrumb
        pageName="Community Impact"
        pageTitle="Community Impact & Volunteering"
      />

      <section className="community-page-intro fix section-padding">
        <div className="container">
          <div className="row g-4 g-xl-5 align-items-center">
            <div className="col-lg-6">
              <div className="community-page-content">
                <div className="section-title">
                  <span className="sub-content wow fadeInUp">
                    <img src="/assets/img/bale.png" alt="img" />
                    {communityIntro.motto}
                  </span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    More Than A Technology Company
                  </h2>
                </div>
                <p className="wow fadeInUp" data-wow-delay=".4s">
                  {communityIntro.text}
                </p>
                <div
                  className="community-highlight-box wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <span className="community-highlight-label">Our Focus</span>
                  <p>{communityIntro.keyMessage}</p>
                </div>
                <div
                  className="community-page-actions wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <Link href="/contact" className="theme-btn">
                    Support Community Work
                    <i className="far fa-arrow-right" />
                  </Link>
                  <a href="#initiatives" className="theme-btn about-btn-outline">
                    View Initiatives
                    <i className="far fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".35s">
              <div className="community-stats-panel">
                <div className="community-stats-panel__head">
                  <span>Impact Snapshot</span>
                  <h4>Education, Opportunity &amp; Shared Growth</h4>
                </div>
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
        </div>
      </section>

      <section
        id="initiatives"
        className="community-impact-section fix section-padding pt-0"
      >
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="/assets/img/bale.png" alt="img" />
              Our Initiatives
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Programs That Strengthen Communities
            </h2>
            <p className="mt-3 wow fadeInUp" data-wow-delay=".4s">
              From digital libraries and school support to student awards and
              volunteering — practical impact beyond technology delivery.
            </p>
          </div>

          <div className="row g-4 g-xl-5">
            {initiatives.map((item, index) => (
              <div
                key={item.slug}
                id={item.slug}
                className="col-12 wow fadeInUp"
                data-wow-delay=".25s"
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
                    <span className="community-detail-location">
                      <i className="fas fa-map-marker-alt" />
                      {item.location}
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>

                    <div className="community-detail-columns">
                      <div>
                        <h5>Objectives</h5>
                        <ul className="community-check-list">
                          {item.objectives.map((objective) => (
                            <li key={objective}>
                              <i className="fas fa-check" />
                              {objective}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5>Beneficiaries</h5>
                        <ul className="community-check-list">
                          {item.beneficiaries.map((beneficiary) => (
                            <li key={beneficiary}>
                              <i className="fas fa-check" />
                              {beneficiary}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="community-results-box">
                      <strong>Documented Results</strong>
                      <p>{item.results}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="community-participate-section fix section-padding pt-0">
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
                <div className="community-participate-card">
                  <div className="community-participate-icon">
                    <i
                      className={
                        participateIcons[option.title] || "fas fa-hands-helping"
                      }
                    />
                  </div>
                  <h3>{option.title}</h3>
                  <p>{option.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5 wow fadeInUp" data-wow-delay=".4s">
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
