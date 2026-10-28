"use client";

import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const RelatedWorksSlider = ({ works = [] }) => {
  if (!works.length) return null;

  return (
    <div className="related-works-slider">
      <div className="section-title text-center mt-5 pt-4">
        <span className="sub-content">
          <img src="/assets/img/bale.png" alt="img" />
          More Works
        </span>
        <h2>Explore Related Projects</h2>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={24}
        loop={works.length > 3}
        speed={900}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          el: ".related-works-dot",
          clickable: true,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
        className="related-works-swiper"
      >
        {works.map((item) => (
          <SwiperSlide key={item.slug}>
            <div className="work-card-items">
              <div className="work-image">
                <img src={item.image} alt={item.title} />
                <span className="work-category">{item.sector}</span>
              </div>
              <div className="work-content">
                <h3>
                  <Link href={`/our-works/${item.slug}`}>{item.title}</Link>
                </h3>
                <p>{item.summary}</p>
                <Link href={`/our-works/${item.slug}`} className="link-btn">
                  View Details
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-dot text-center mt-4">
        <div className="dot related-works-dot" />
      </div>
    </div>
  );
};

export default RelatedWorksSlider;
