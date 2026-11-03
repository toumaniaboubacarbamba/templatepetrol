"use client";

import { useEffect, useState } from "react";

const slides = ["/images/hero-1.jpg", "/images/hero-2.jpg", "/images/hero-3.jpg"];

export default function HeroSlideshow() {
  const [actif, setActif] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActif((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="elementor-background-slideshow swiper-container swiper-container-fade">
      <div className="swiper-wrapper">
        {slides.map((src, i) => (
          <div
            key={src}
            className="elementor-background-slideshow__slide swiper-slide"
            style={{ position: "absolute", inset: 0, width: "100%", opacity: i === actif ? 1 : 0, transition: "opacity 1s ease" }}
          >
            <div
              className={
                "elementor-background-slideshow__slide__image elementor-ken-burns elementor-ken-burns--in" +
                (i === actif ? " elementor-ken-burns--active" : "")
              }
              style={{ backgroundImage: `url(${src})` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
