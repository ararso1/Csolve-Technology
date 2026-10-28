"use client";

import { galleryItems } from "@/data/gallery";
import Link from "next/link";
import { useMemo, useState } from "react";
import ReactPlayer from "react-player/lazy";

const FEATURED_VIDEO = {
  url: "https://youtu.be/PNxeGjym11E",
  poster: "/assets/img/cta/cta-video.jpg",
  title: "Inside Csolve Technology",
  subtitle:
    "A look at how we deliver digital systems, community initiatives, and lasting impact across Africa.",
};

const HomeMediaShowcase = () => {
  const [playing, setPlaying] = useState(false);

  const scrollPhotos = useMemo(() => {
    const photos = galleryItems.map((item) => ({
      id: item.id,
      title: item.title,
      image: item.image,
      categoryLabel: item.categoryLabel,
    }));
    return [...photos, ...photos];
  }, []);

  return (
    <section className="home-media-showcase fix section-padding pt-0">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="/assets/img/bale.png" alt="img" />
            Stories In Motion
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Featured Video &amp; Gallery
          </h2>
          <p className="mt-3 wow fadeInUp" data-wow-delay=".4s">
            Watch our work come to life, then browse moments from projects,
            products, and community impact.
          </p>
        </div>

        <div className="home-featured-video wow fadeInUp" data-wow-delay=".3s">
          <div className="home-featured-video__player">
            {!playing && (
              <button
                type="button"
                className="home-featured-video__poster"
                onClick={() => setPlaying(true)}
                aria-label="Play featured video"
              >
                <img src={FEATURED_VIDEO.poster} alt={FEATURED_VIDEO.title} />
                <span className="home-featured-video__play">
                  <i className="fas fa-play" />
                </span>
              </button>
            )}
            {playing && (
              <ReactPlayer
                url={FEATURED_VIDEO.url}
                playing
                controls
                width="100%"
                height="100%"
              />
            )}
          </div>
          <div className="home-featured-video__copy">
            <span>Featured Video</span>
            <h3>{FEATURED_VIDEO.title}</h3>
            <p>{FEATURED_VIDEO.subtitle}</p>
            <Link href="/gallery" className="link-btn">
              Open Full Gallery
              <i className="far fa-arrow-right" />
            </Link>
          </div>
        </div>
      </div>

      <div className="home-gallery-marquee wow fadeInUp" data-wow-delay=".4s">
        <div className="home-gallery-marquee__track">
          {scrollPhotos.map((photo, index) => (
            <article
              key={`${photo.id}-${index}`}
              className="home-gallery-marquee__item"
            >
              <img src={photo.image} alt={photo.title} />
              <span>
                <strong>{photo.title}</strong>
                <em>{photo.categoryLabel}</em>
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeMediaShowcase;
