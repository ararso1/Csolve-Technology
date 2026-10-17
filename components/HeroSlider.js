"use client";

import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const slides = [
  {
    image: "/assets/img/hero/01.jpg",
    eyebrow: "Our Motto",
    title: (
      <>
        We Build More <br />
        Than Systems
      </>
    ),
    text: "IT solutions that deliver — practical software, AI, and digital infrastructure empowering people and organizations across Africa.",
  },
  {
    image: "/assets/img/hero/02.jpg",
    eyebrow: "We Build More Than Systems",
    title: (
      <>
        Technology With <br />
        Purpose &amp; Impact
      </>
    ),
    text: "We don’t just ship code. We design tools that strengthen institutions, unlock opportunity, and move communities forward.",
  },
  {
    image: "/assets/img/hero/03.jpg",
    eyebrow: "We Build More Than Systems",
    title: (
      <>
        Solutions That <br />
        Deliver Real Results
      </>
    ),
    text: "From smart platforms to secure infrastructure — partner with Csolve to turn bold ideas into dependable digital experiences.",
  },
];

const HeroSlider = () => {
  return (
    <section className="hero-section hero-1 hero-slider-section fix">
      <Swiper {...sliderProps.heroSlider} className="swiper hero-slider">
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero-slide-bg bg-cover"
              style={{ backgroundImage: `url("${slide.image}")` }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xl-8 col-lg-10">
                    <div className="hero-content">
                      <span className="hero-eyebrow">{slide.eyebrow}</span>
                      <h1>{slide.title}</h1>
                      <p className="hero-slide-text">{slide.text}</p>
                      <div className="hero-button">
                        <Link href="/contact" className="theme-btn hover-white">
                          Get Started Now <i className="far fa-arrow-right" />
                        </Link>
                        <Link href="service" className="btn-link">
                          View Services <i className="far fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="hero-slider-controls">
        <button type="button" className="hero-array-prev" aria-label="Previous slide">
          <i className="far fa-arrow-left" />
        </button>
        <div className="hero-dot" />
        <button type="button" className="hero-array-next" aria-label="Next slide">
          <i className="far fa-arrow-right" />
        </button>
      </div>
    </section>
  );
};

export default HeroSlider;
