import Link from "next/link";

const Cta = ({ sectionPadding = false }) => {
  return (
    <section
      className={`cta-marketing-section fix ${
        sectionPadding ? "section-padding" : ""
      }`}
    >
      <div className="container">
        <div className="cta-marketing-wrapper">
          <div className="content">
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              Ready to Build More Than <br />
              Systems With Csolve?
            </h2>
            <p className="text-white wow fadeInUp" data-wow-delay=".5s">
              Partner with us for software, AI, ERP, cybersecurity, and digital
              solutions that help private businesses, government, and NGOs grow
              with confidence.
            </p>
          </div>
          <div className="thumb wow fadeInUp" data-wow-delay=".6s">
            <img src="/assets/img/cta/cta-marketing.png" alt="img" />
            <div className="circle-shape">
              <img src="/assets/img/cta/circle-shape.png" alt="shape-img" />
            </div>
          </div>
          <Link
            href="contact"
            className="theme-btn bg-2 wow fadeInUp"
            data-wow-delay=".7s"
          >
            Get Started <i className="far fa-arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Cta;
