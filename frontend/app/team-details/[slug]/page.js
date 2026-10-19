import Breadcrumb from "@/components/Breadcrumb";
import { getTeamMemberBySlug, teamMembers } from "@/data/team";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return teamMembers.map((member) => ({ slug: member.slug }));
}

export function generateMetadata({ params }) {
  const member = getTeamMemberBySlug(params.slug);
  if (!member) return {};
  return {
    title: `${member.name} | Csolve Technology`,
    description: member.bio,
  };
}

const page = ({ params }) => {
  const member = getTeamMemberBySlug(params.slug);
  if (!member) notFound();

  const others = teamMembers.filter((item) => item.slug !== member.slug);

  return (
    <NextLayout>
      <Breadcrumb pageName="Team Details" pageTitle={member.shortName} />
      <section className="team-details section-padding fix">
        <div className="container">
          <div className="team-details-wrapper">
            <div className="team-details-image-area">
              <div className="row g-4 align-items-center">
                <div className="col-lg-5">
                  <div
                    className="details-iamge bg-cover"
                    style={{ backgroundImage: `url("${member.image}")` }}
                  />
                </div>
                <div className="col-lg-6">
                  <div className="right-content">
                    <h2>{member.name}</h2>
                    <p>{member.role}</p>
                    <div className="list">
                      <h5 className="mb-3">
                        Department: <span>{member.department}</span>
                      </h5>
                      <h5 className="mb-3">
                        Role: <span>{member.role}</span>
                      </h5>
                      <h5 className="mb-3">
                        Email:{" "}
                        <a href={`mailto:${member.email}`}>{member.email}</a>
                      </h5>
                    </div>
                    <div className="social-icon d-flex align-items-center">
                      <a href="#" className="color-4">
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a href="#" className="color-2">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href={`mailto:${member.email}`} className="color-1">
                        <i className="far fa-envelope" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="team-details-content section-padding pb-0">
              <h2>Biography</h2>
              <p className="mb-4">{member.bio}</p>
              <div className="details-information-area">
                <div className="row g-4 justify-content-between">
                  <div className="col-lg-5">
                    <div className="progress-wrap">
                      {member.skills.map((skill, index) => (
                        <div className="pro-items" key={skill.title}>
                          <div className="pro-head">
                            <h6 className="title">{skill.title}</h6>
                            <span className="point">{skill.value}%</span>
                          </div>
                          <div className="progress">
                            <div
                              className={`progress-value${
                                index === 1
                                  ? " style-two"
                                  : index === 2
                                  ? " style-three"
                                  : ""
                              }`}
                              style={{ width: `${skill.value}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="information-content-items">
                      <div className="content-box-area">
                        <div className="content mb-4">
                          <h3>Leadership Focus</h3>
                          <ul className="about-list mt-3">
                            {member.focus.map((item) => (
                              <li key={item}>
                                <i className="fas fa-check" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <Link href="/contact" className="theme-btn">
                          Connect With Our Team
                          <i className="far fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="section-title text-center mt-5">
              <span className="sub-content">
                <img src="/assets/img/bale.png" alt="img" />
                Leadership Team
              </span>
              <h2>Other Founders</h2>
            </div>
            <div className="row justify-content-center g-4">
              {others.map((item) => (
                <div key={item.slug} className="col-xl-4 col-lg-4 col-md-6">
                  <div className="team-card-items style-2">
                    <div className="team-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="team-content">
                      <h4>
                        <Link href={`/team-details/${item.slug}`}>
                          {item.shortName}
                        </Link>
                      </h4>
                      <p>{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
};

export default page;
