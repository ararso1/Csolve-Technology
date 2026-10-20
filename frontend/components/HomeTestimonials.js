"use client";

import { sliderProps } from "@/utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const testimonials = [
  {
    quote:
      "Csolve Technology delivered a reliable system that improved our daily operations. Their team understood our needs quickly and built more than software — they built confidence.",
    name: "Private Sector Client",
    role: "Operations Lead",
    image: "/assets/img/testimonial/client-4.png",
  },
  {
    quote:
      "Working with Csolve gave our institution a modern digital presence and smoother service delivery. Professional, responsive, and focused on real results.",
    name: "Government Partner",
    role: "Program Coordinator",
    image: "/assets/img/testimonial/client-5.png",
  },
  {
    quote:
      "From planning to launch, Csolve supported our field teams with practical technology. The mobile solution helped us report faster and serve communities better.",
    name: "NGO Partner",
    role: "Project Manager",
    image: "/assets/img/testimonial/client-6.png",
  },
  {
    quote:
      "Their ERP and software expertise helped us connect departments and reduce manual work. We recommend Csolve as a trusted technology partner.",
    name: "Enterprise Client",
    role: "IT Manager",
    image: "/assets/img/testimonial/client-7.png",
  },
  {
    quote:
      "Csolve builds with purpose. Beyond delivery, their community mindset and young leadership make them a partner we trust for long-term growth.",
    name: "Business Founder",
    role: "SME Owner",
    image: "/assets/img/testimonial/client-8.png",
  },
  {
    quote:
      "Clear communication and strong technical delivery. Csolve turned our requirements into a system our teams actually enjoy using every day.",
    name: "Institution Partner",
    role: "Digital Lead",
    image: "/assets/img/testimonial/client-9.png",
  },
];

const HomeTestimonials = () => {
  return (
    <section className="home-testimonials-section fix section-padding">
      <div className="home-testimonials-bg" aria-hidden="true" />
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="/assets/img/bale.png" alt="img" />
            Client Testimonials
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Trusted By Organizations Across Sectors
          </h2>
          <p className="mt-3 wow fadeInUp" data-wow-delay=".4s">
            Hear how private businesses, government institutions, and NGOs
            describe working with Csolve Technology.
          </p>
        </div>

        <Swiper
          {...sliderProps.homeTestimonialSlider}
          className="swiper home-testimonial-slider"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.name + item.role}>
              <div className="home-testimonial-card">
                <div className="home-testimonial-top">
                  <div className="quote-icon">
                    <i className="fas fa-quote-left" />
                  </div>
                  <div className="star-rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                </div>
                <p>{item.quote}</p>
                <div className="author-items">
                  <div className="author-avatar">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="author-meta">
                    <h5>{item.name}</h5>
                    <span>{item.role}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="home-testimonial-dot">
            <div className="home-dot" />
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default HomeTestimonials;
