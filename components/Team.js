import { teamMembers } from "@/data/team";
import Link from "next/link";

const Team = () => {
  return (
    <section className="team-section fix footer-bg section-padding" id="team">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="/assets/img/bale.png" alt="img" />
            Leadership Team
          </span>
          <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
            Young &amp; Energetic Founders Of Csolve Technology
          </h2>
        </div>
        <div className="row justify-content-center">
          {teamMembers.map((member, index) => (
            <div
              key={member.slug}
              className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={`${0.2 + index * 0.2}s`}
            >
              <div className="team-card-items">
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
                      {member.shortName}
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
  );
};

export default Team;
