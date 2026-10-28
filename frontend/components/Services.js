import { services, topServices } from "@/data/services";
import Link from "next/link";

const delayClass = [".3s", ".5s", ".7s"];

const Services = () => {
  return (
    <section
      className="service-section-4 fix bg-cover section-padding"
      style={{
        backgroundImage: 'url("/assets/img/service/service-bg-min.jpg")',
      }}
      id="services"
    >
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content bg-color-3 wow fadeInUp">
            <img src="/assets/img/bale.png" alt="img" />
            Our Core Services
          </span>
          <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
            We Build More Than Systems — <br />
            Digital Solutions For Real Growth
          </h2>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div
              key={service.slug}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={delayClass[index % 3]}
            >
              <div
                className={`service-box-items${
                  index === 1 ? " active" : ""
                }`}
              >
                <div className="icon">
                  <i className={service.icon} />
                </div>
                <div className="content">
                  <h3>
                    <Link href={`/service-details/${service.slug}`}>
                      {service.title}
                    </Link>
                  </h3>
                  <p>{service.summary}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;

export const Service2 = ({
  paddingTop = 0,
  title = "Featured Services",
  items = topServices.slice(0, 3),
}) => {
  return (
    <section
      className={`service-section section-padding pt-${paddingTop}`}
      id="featured-services"
    >
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="/assets/img/bale.png" alt="img" />
            {title}
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Trusted Technology Services <br />
            For Organizations Across Africa
          </h2>
        </div>
        <div className="row">
          {items.map((service, index) => (
            <div
              key={service.slug}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay={delayClass[index % 3]}
            >
              <div className="service-popular-items">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-content">
                  <h3>
                    <Link href={`/service-details/${service.slug}`}>
                      {service.title}
                    </Link>
                  </h3>
                  <p>{service.summary}</p>
                  <Link
                    href={`/service-details/${service.slug}`}
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
  );
};
