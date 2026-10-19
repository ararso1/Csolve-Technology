import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

const offices = [
  {
    type: "Head Office",
    accent: "primary",
    icon: "fas fa-building",
    name: "Labu Mall",
    address: "Labu Mall, Addis Ababa, Ethiopia",
    phone: "+251 986828384",
    email: "info@csolvetechnology.com",
  },
  {
    type: "Branch Office",
    accent: "secondary",
    icon: "fas fa-map-marker-alt",
    name: "Birra Mall",
    address: "Birra Mall, Dire Dawa, Ethiopia",
    phone: "+251 986828384",
    email: "diredawa@csolvetechnology.com",
  },
];

const page = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="Contact Us" pageTitle="Let’s Build Together" />

      <section className="contact-page-section fix section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="/assets/img/bale.png" alt="img" />
              Contact Csolve Technology
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              We Build More Than Systems — Let’s Start Yours
            </h2>
            <p className="mt-3 wow fadeInUp" data-wow-delay=".4s">
              Reach our team in Addis Ababa or Dire Dawa for software, AI, ERP,
              infrastructure, and digital growth partnerships.
            </p>
          </div>

          <div className="row g-4 mb-5">
            {offices.map((office, index) => (
              <div
                key={office.type}
                className="col-lg-6 wow fadeInUp"
                data-wow-delay={`${0.2 + index * 0.15}s`}
              >
                <div
                  className={`contact-office-card contact-office-card--${office.accent}`}
                >
                  <div className="contact-office-top">
                    <div className="contact-office-icon">
                      <i className={office.icon} />
                    </div>
                    <span className="contact-office-label">{office.type}</span>
                  </div>
                  <h3>{office.name}</h3>
                  <p>{office.address}</p>
                  <ul className="contact-office-meta">
                    <li>
                      <i className="fas fa-phone-alt" />
                      <a href={`tel:${office.phone.replace(/\s/g, "")}`}>
                        {office.phone}
                      </a>
                    </li>
                    <li>
                      <i className="fas fa-envelope" />
                      <a href={`mailto:${office.email}`}>{office.email}</a>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="row g-4 g-xl-5 align-items-stretch">
            <div className="col-lg-5 wow fadeInUp" data-wow-delay=".25s">
              <div className="contact-info-panel">
                <span className="contact-info-eyebrow">Get In Touch</span>
                <h3>Talk With The Csolve Team</h3>
                <p>
                  Share your goals and we’ll help you choose the right path —
                  from custom software and ERP to AI, cybersecurity, and digital
                  marketing.
                </p>
                <ul className="contact-info-list">
                  <li>
                    <span className="contact-info-icon">
                      <i className="fas fa-envelope" />
                    </span>
                    <div>
                      <strong>Email</strong>
                      <a href="mailto:info@csolvetechnology.com">
                        info@csolvetechnology.com
                      </a>
                    </div>
                  </li>
                  <li>
                    <span className="contact-info-icon contact-info-icon--secondary">
                      <i className="fas fa-phone-alt" />
                    </span>
                    <div>
                      <strong>Phone</strong>
                      <a href="tel:+251986828384">+251 986828384</a>
                    </div>
                  </li>
                  <li>
                    <span className="contact-info-icon">
                      <i className="fas fa-globe" />
                    </span>
                    <div>
                      <strong>Website</strong>
                      <a
                        href="https://csolvetechnology.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        csolvetechnology.com
                      </a>
                    </div>
                  </li>
                  <li>
                    <span className="contact-info-icon contact-info-icon--secondary">
                      <i className="fas fa-clock" />
                    </span>
                    <div>
                      <strong>Working Hours</strong>
                      <span>Mon – Fri: 8:30 AM – 5:30 PM</span>
                    </div>
                  </li>
                </ul>
                <Link href="/service" className="theme-btn mt-2">
                  Explore Services
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>

            <div className="col-lg-7 wow fadeInUp" data-wow-delay=".35s">
              <div className="contact-form-panel">
                <div className="contact-form-header">
                  <h3>Send Us a Message</h3>
                  <p>
                    Tell us about your project and a Csolve specialist will get
                    back to you.
                  </p>
                </div>
                <form
                  action="#"
                  id="contact-form"
                  method="POST"
                  className="contact-form-items"
                >
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Full Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-clt">
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-clt">
                        <input
                          type="email"
                          name="email"
                          id="email2"
                          placeholder="Email Address"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-clt">
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-clt">
                        <textarea
                          name="message"
                          id="message"
                          placeholder="How can we help you?"
                          defaultValue={""}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="theme-btn">
                        Send Message
                        <i className="far fa-arrow-right" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="contact-map-section">
        <div className="container">
          <div className="contact-map-frame wow fadeInUp" data-wow-delay=".3s">
            <iframe
              title="Csolve Technology Head Office - Labu Mall, Addis Ababa"
              src="https://maps.google.com/maps?q=Labu%20Mall%20Addis%20Ababa%20Ethiopia&t=&z=15&ie=UTF8&iwloc=&output=embed"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </NextLayout>
  );
};

export default page;
