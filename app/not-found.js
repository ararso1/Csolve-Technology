import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

const NotFound = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="404" pageTitle="Page Not Found" />
      <div className="error-section fix section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="error-items text-center">
                <div className="error-image wow fadeInUp" data-wow-delay=".3s">
                  <img src="/assets/img/error.png" alt="Page not found" />
                </div>
                <h2 className="wow fadeInUp" data-wow-delay=".4s">
                  We Couldn’t Find That Page
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".45s">
                  The page you’re looking for may have moved or no longer
                  exists. Let’s get you back on track — we build more than
                  systems, and we’re here to help.
                </p>
                <div className="error-actions wow fadeInUp" data-wow-delay=".5s">
                  <Link href="/" className="theme-btn">
                    Back To Home
                    <i className="far fa-arrow-right" />
                  </Link>
                  <Link href="/contact" className="theme-btn error-btn-secondary">
                    Contact Us
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NextLayout>
  );
};

export default NotFound;
