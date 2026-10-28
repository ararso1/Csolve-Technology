import FaqAccordion from "@/components/FaqAccordion";

const faqItems = [
  {
    id: "faq1",
    question: "What organizations does Csolve Technology serve?",
    answer:
      "We work with private businesses, government institutions, NGOs, startups, and growing SMEs across Ethiopia and Africa.",
  },
  {
    id: "faq2",
    question: "Can you deliver end-to-end digital solutions?",
    answer:
      "Yes. From discovery and design to development, infrastructure, cybersecurity, and digital growth, we support the full delivery journey.",
  },
  {
    id: "faq3",
    question: "Do you customize systems to our workflows?",
    answer:
      "Absolutely. We build around your real operations — software, ERP, AI, and mobile solutions are tailored to how your teams work.",
  },
  {
    id: "faq4",
    question: "How do we get started with Csolve?",
    answer:
      "Share your goals through our contact page. We’ll align on scope, recommend the right services, and propose a clear next step.",
  },
];

const ServicesFaq = () => {
  return (
    <section className="services-page-faq fix section-padding pt-0">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="/assets/img/bale.png" alt="img" />
            FAQ
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Questions Teams Often Ask
          </h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <FaqAccordion items={faqItems} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesFaq;
