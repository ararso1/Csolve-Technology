import { organizationIntro } from "@/data/organization";

const OrgStructure = () => {
  return (
    <section className="org-structure-section fix section-padding pt-0">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="/assets/img/bale.png" alt="img" />
            {organizationIntro.eyebrow}
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            {organizationIntro.title}
          </h2>
          <p className="mt-3 wow fadeInUp" data-wow-delay=".4s">
            {organizationIntro.text}
          </p>
        </div>

        <div className="org-structure-image wow fadeInUp" data-wow-delay=".35s">
          <img
            src="/assets/img/csolve technology structure.png"
            alt="Csolve Technology organizational structure"
          />
        </div>
      </div>
    </section>
  );
};

export default OrgStructure;
