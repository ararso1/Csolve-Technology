import Breadcrumb from "@/components/Breadcrumb";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import GrowBusiness from "@/components/GrowBusiness";
import Services, { Service2 } from "@/components/Services";
import { company } from "@/data/services";
import NextLayout from "@/layouts/NextLayout";

const page = () => {
  return (
    <NextLayout>
      <Breadcrumb
        pageName="Our Services"
        pageTitle="Core Technology Services"
      />
      <GrowBusiness paddingTop={9} />
      <Services />
      <Service2 paddingTop={9} title="Featured Solutions" />
      <section className="about-section fix section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="/assets/img/bale.png" alt="img" />
              Who We Serve
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Built For Organizations Seeking Reliable Digital Growth
            </h2>
          </div>
          <div className="row g-4 justify-content-center">
            {company.clients.map((client, index) => (
              <div
                key={client}
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={`${0.2 + index * 0.1}s`}
              >
                <div className="service-box-items text-center h-100">
                  <div className="content">
                    <h3>{client}</h3>
                    <p>
                      Practical technology partner for teams accelerating
                      efficiency, innovation, and long-term growth.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Cta />
      <Faq />
    </NextLayout>
  );
};
export default page;
