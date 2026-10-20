import { partners } from "@/data/partners";
import Link from "next/link";

const Partners = ({ paddingTop = true }) => {
  const marqueePartners = [...partners, ...partners];

  return (
    <section
      className={`partners-section partners-section--compact fix section-padding${
        paddingTop ? "" : " pt-0"
      }`}
    >
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="/assets/img/bale.png" alt="img" />
            Our Amazing Partners
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Trusted Across Ethiopia
          </h2>
          <p className="mt-3 wow fadeInUp" data-wow-delay=".4s">
            Government, enterprise, NGO, healthcare, and education partners who
            trust Csolve Technology.
          </p>
        </div>

        <div className="partners-marquee wow fadeInUp" data-wow-delay=".3s">
          <div className="partners-marquee-track">
            {marqueePartners.map((partner, index) => (
              <span
                key={`${partner.id}-marquee-${index}`}
                className="partners-marquee-item"
              >
                {partner.name}
              </span>
            ))}
          </div>
        </div>

        <div className="text-center wow fadeInUp" data-wow-delay=".4s">
          <Link href="/partners" className="theme-btn partners-view-btn">
            View All Partners
            <i className="far fa-arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Partners;
