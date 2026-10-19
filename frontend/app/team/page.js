import Breadcrumb from "@/components/Breadcrumb";
import Cta from "@/components/Cta";
import { teamMembers } from "@/data/team";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

const page = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="Our Team" pageTitle="Leadership Team" />
      <section className="about-team-section fix section-padding">
        <div className="container">
          <div className="section-title-area">
            <div className="section-title">
              <span className="sub-content wow fadeInUp">
                <img src="/assets/img/bale.png" alt="img" />
                We Build More Than Systems
              </span>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Young, Energetic Founders <br />
                Leading With Vision &amp; Purpose
              </h2>
            </div>
            <div className="text-items">
              <p className="mb-3 wow fadeInUp" data-wow-delay=".3s">
                Csolve Technology is led by three young and energetic founders
                committed to solving real problems through technology,
                innovation, and community impact across Ethiopia and East
                Africa.
              </p>
              <p className="wow fadeInUp" data-wow-delay=".5s">
                Together they combine strategic leadership, technical
                excellence, and operational strength — building more than
                systems for businesses, institutions, and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section-3 section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content">
              <img src="/assets/img/bale.png" alt="img" />
              Founders
            </span>
            <h2>Meet Our Leadership Team</h2>
          </div>
          <div className="row justify-content-center">
            {teamMembers.map((member, index) => (
            <div
                key={member.slug}
                className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay={`${0.2 + index * 0.2}s`}
            >
              <div className="team-card-items style-2">
                <div className="team-image">
                    <img src={member.image} alt={member.name} />
                  <div className="icon-list">
                    <ul>
                      <li>
                        <a href="#">
                            <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                          <a href={`mailto:${member.email}`}>
                            <i className="far fa-envelope" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h4>
                      <Link href={`/team-details/${member.slug}`}>
                        {member.name}
                      </Link>
                  </h4>
                    <p>{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Cta sectionPadding={true} />
    </NextLayout>
  );
};

export default page;
