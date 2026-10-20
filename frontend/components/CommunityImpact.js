import {
  communityIntro,
  communityStats,
  featuredInitiatives,
} from "@/data/community";
import Link from "next/link";

const CommunityImpact = () => {
  const cards = featuredInitiatives.slice(0, 2);

  return (
    <section className="community-impact-section fix section-padding">
      <div className="container">
        <div className="row g-4 g-xl-5 align-items-start">
          <div className="col-lg-7">
            <div className="section-title mb-0">
              <span className="sub-content wow fadeInUp">
                <img src="/assets/img/bale.png" alt="img" />
                Community Impact &amp; Volunteering
              </span>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                {communityIntro.headline}
              </h2>
            </div>
            <p className="mt-3 wow fadeInUp" data-wow-delay=".4s">
              {communityIntro.text}
            </p>
            <p className="community-key-message wow fadeInUp" data-wow-delay=".5s">
              {communityIntro.keyMessage}
            </p>

            <div className="row g-4 mt-1">
              {cards.map((item, index) => (
                <div
                  key={item.slug}
                  className="col-md-6 wow fadeInUp"
                  data-wow-delay={`${0.3 + index * 0.2}s`}
                >
                  <div className="community-card-items">
                    <div className="community-image">
                      <img src={item.image} alt={item.title} />
                      <span className="community-status">{item.status}</span>
                    </div>
                    <div className="community-content">
                      <h3>
                        <Link href={`/community-impact#${item.slug}`}>
                          {item.title}
                        </Link>
                      </h3>
                      <p>{item.summary}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-5">
            <div className="community-stats-panel wow fadeInUp" data-wow-delay=".3s">
              <div className="community-stats-panel__head">
                <span>Impact Highlights</span>
                <h4>Growing With Our Community</h4>
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

        <div className="text-center mt-5 wow fadeInUp" data-wow-delay=".4s">
          <Link href="/community-impact" className="theme-btn">
            Explore Our Community Impact
            <i className="far fa-arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommunityImpact;
