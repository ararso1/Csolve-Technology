import Breadcrumb from "@/components/Breadcrumb";
import Cta from "@/components/Cta";
import FaqAccordion from "@/components/FaqAccordion";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

const faqItems = [
  {
    id: "faq1",
    question: "What does Csolve Technology do?",
    answer:
      "Csolve Technology is an Ethiopian technology company delivering software development, websites, mobile apps, ERP, AI solutions, networking and IT infrastructure, digital marketing, social media management, and cybersecurity for organizations across Ethiopia and Africa.",
  },
  {
    id: "faq2",
    question: "Who do you work with?",
    answer:
      "We partner with private businesses, government and public institutions, NGOs, startups, and growing SMEs that need practical digital solutions and long-term technology support.",
  },
  {
    id: "faq3",
    question: "Where are your offices located?",
    answer:
      "Our head office is at Labu Mall, Addis Ababa, Ethiopia. Our branch office is at Birra Mall, Dire Dawa, Ethiopia.",
  },
  {
    id: "faq4",
    question: "Can you customize solutions for our organization?",
    answer:
      "Yes. We design and build around your real workflows — from custom software and ERP to AI, mobile apps, and infrastructure — so the solution fits how your teams actually work.",
  },
  {
    id: "faq5",
    question: "Do you support projects after launch?",
    answer:
      "We do. Csolve supports delivery beyond go-live with maintenance, improvements, training guidance, and ongoing partnership so your systems stay useful and secure.",
  },
  {
    id: "faq6",
    question: "How can we start a project with Csolve?",
    answer:
      "Contact us through the website, email info@csolvetechnology.com, or call +251 986828384. We’ll review your goals, recommend the right services, and propose clear next steps.",
  },
];

const page = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="FAQs" pageTitle="Frequently Asked Questions" />
      <section className="faq-page-section fix section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="/assets/img/bale.png" alt="img" />
              Help Center
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Answers About Working With Csolve
            </h2>
            <p className="mt-3 wow fadeInUp" data-wow-delay=".4s">
              Quick answers about our services, offices, delivery approach, and
              how to partner with Csolve Technology.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <FaqAccordion items={faqItems} />
              <div className="faq-page-cta text-center wow fadeInUp">
                <p>Still have a question?</p>
                <Link href="/contact" className="theme-btn">
                  Contact Us
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta sectionPadding={true} />
    </NextLayout>
  );
};

export default page;
