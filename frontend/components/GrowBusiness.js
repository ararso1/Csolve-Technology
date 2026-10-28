import Counter from "./Counter";
import Link from "next/link";

const GrowBusiness = ({ paddingTop = 0 }) => {
  return (
    <section
      className={`grow-business-section fix section-padding pt-${paddingTop}`}
    >
      <div className="container">
        <div className="grow-business-wrapper-2">
          <div className="row g-4 justify-content-between">
            <div className="col-lg-5">
              <div
                className="grow-business-image wow fadeInUp"
                data-wow-delay=".3s"
              >
                <img src="/assets/img/grow/02.jpg" alt="Csolve Technology growth" />
                <div
                  className="grap-shape float-bob-x wow fadeInLeft"
                  data-wow-delay=".5s"
                >
                  <img src="/assets/img/grow/grap.png" alt="shape-img" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="grow-business-content">
                <div className="section-title">
                  <span className="sub-content wow fadeInUp">
                    <img src="/assets/img/bale.png" alt="img" />
                    We Build More Than Systems
                  </span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Digital Solutions That Improve Efficiency And Accelerate Growth
                  </h2>
                </div>
                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  Csolve Technology helps private businesses, government
                  institutions, and NGOs across Ethiopia and Africa solve
                  real problems with software, AI, infrastructure, and digital
                  marketing that create lasting value.
                </p>
                <div className="grow-counting-area">
                  <div
                    className="grow-counting-items wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <h2>
                      <span className="count">
                        <Counter end={300} />
                      </span>
                      +
                    </h2>
                    <p>Websites &amp; Apps Delivered</p>
                  </div>
                  <div
                    className="grow-counting-items wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    <h2>
                      <span className="count">
                        <Counter end={30} />
                      </span>
                      +
                    </h2>
                    <p>Corporate Systems Built</p>
                  </div>
                  <div
                    className="grow-counting-items wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <h2>
                      <span className="count">
                        <Counter end={1000} />
                      </span>
                      +
                    </h2>
                    <p>Youth Opportunities Created</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default GrowBusiness;

export const GrowBusiness2 = ({ bg }) => {
  return (
    <section className={`grow-business-section fix section-padding ${bg || ""}`}>
      <div className="container">
        <div className="grow-business-wrapper">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="grow-content">
                <div className="section-title">
                  <span className="sub-content wow fadeInUp">
                    <img src="/assets/img/bale.png" alt="img" />
                    Grow With Csolve
                  </span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Practical Technology That Strengthens Operations And Growth
                  </h2>
                </div>
                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  From custom software and ERP to AI, infrastructure, and
                  digital presence, Csolve Technology delivers solutions that
                  help organizations work smarter, serve better, and grow with
                  confidence across Ethiopia and Africa.
                </p>
                <div className="grow-percent-area">
                  <div className="row g-4">
                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".3s">
                      <div className="grow-percent-items">
                        <h2>
                          <span className="count">
                            <Counter end={300} />
                          </span>
                          +
                        </h2>
                        <h3>Websites &amp; Apps</h3>
                        <p>
                          Digital products delivered for businesses,
                          institutions, and growing organizations.
                        </p>
                        <div className="vector-shape pt-3">
                          <img src="/assets/img/vector.png" alt="img" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".5s">
                      <div className="grow-percent-items">
                        <h2>
                          <span className="count">
                            <Counter end={30} />
                          </span>
                          +
                        </h2>
                        <h3>Corporate Systems</h3>
                        <p>
                          Enterprise platforms built to improve operations,
                          visibility, and decision-making.
                        </p>
                        <div className="vector-shape pt-3">
                          <img src="/assets/img/vector.png" alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 wow fadeInUp" data-wow-delay=".6s">
                  <Link href="/contact" className="theme-btn">
                    Start Growing With Us
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
              <div className="grow-image-items">
                <div className="grow-shape float-bob-y">
                  <img src="/assets/img/grow/grow-shape.png" alt="shape-img" />
                </div>
                <div className="frame-shape">
                  <img src="/assets/img/grow/frame-shape.png" alt="shape-img" />
                </div>
                <div className="user-shape float-bob-x">
                  <img src="/assets/img/grow/user-shape.png" alt="shape-img" />
                </div>
                <div className="grow-image">
                  <img
                    src="/assets/img/grow/01.png"
                    alt="Csolve Technology business growth"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
