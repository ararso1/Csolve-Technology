import Breadcrumb from "@/components/Breadcrumb";
import Cta from "@/components/Cta";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

const sections = [
  {
    title: "1. Introduction",
    text: "Csolve Technology (“we”, “our”, or “us”) respects your privacy. This Privacy Policy explains how we collect, use, and protect information when you visit csolvetechnology.com or contact us about our services.",
  },
  {
    title: "2. Information We Collect",
    text: "We may collect information you provide directly, such as your name, email address, phone number, organization details, and message content when you use our contact forms or communicate with our team. We may also collect basic technical data such as browser type, device information, and pages visited to improve website performance.",
  },
  {
    title: "3. How We Use Information",
    text: "We use collected information to respond to inquiries, provide requested services, improve our website and communication, maintain security, and share relevant updates about Csolve Technology when appropriate. We do not sell your personal information.",
  },
  {
    title: "4. Sharing of Information",
    text: "We may share information with trusted service providers who help us operate our website or deliver services, and when required by law. Any sharing is limited to what is necessary for those purposes.",
  },
  {
    title: "5. Data Security",
    text: "We take reasonable technical and organizational measures to protect personal information against unauthorized access, loss, misuse, or alteration. No method of transmission over the internet is fully secure, so we encourage careful sharing of sensitive details.",
  },
  {
    title: "6. Cookies and Analytics",
    text: "Our website may use cookies or similar technologies to support site functionality and understand visitor usage. You can control cookies through your browser settings.",
  },
  {
    title: "7. Your Choices",
    text: "You may request access to, correction of, or deletion of personal information you have shared with us, subject to applicable law and legitimate business or legal requirements.",
  },
  {
    title: "8. Contact Us",
    text: "For privacy questions or requests, contact Csolve Technology at info@csolvetechnology.com, call +251 986828384, or visit our offices at Labu Mall, Addis Ababa (Head Office) and Birra Mall, Dire Dawa (Branch Office).",
  },
  {
    title: "9. Updates",
    text: "We may update this Privacy Policy from time to time. The latest version will always be available on this page, with the effective date shown below.",
  },
];

const page = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="Privacy Policy" pageTitle="Privacy Policy" />
      <section className="privacy-page-section fix section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="privacy-card wow fadeInUp" data-wow-delay=".3s">
                <p className="privacy-intro">
                  Effective date: October 18, 2026. This policy describes how
                  Csolve Technology handles information in connection with our
                  website and business communications.
                </p>
                {sections.map((section) => (
                  <div key={section.title} className="privacy-block">
                    <h3>{section.title}</h3>
                    <p>{section.text}</p>
                  </div>
                ))}
                <div className="privacy-actions">
                  <Link href="/contact" className="theme-btn">
                    Contact Us
                    <i className="far fa-arrow-right" />
                  </Link>
                  <Link href="/faq" className="theme-btn privacy-btn-outline">
                    View FAQs
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
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
