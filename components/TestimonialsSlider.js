"use client";

import { useEffect, useState } from "react";

const temoignages = [
  { nom: "Luciana Freya", poste: "Entrepreneur", photo: "/images/avatar-luciana.jpg" },
  { nom: "Trevor Hart", poste: "PDG Bciaga", photo: "/images/avatar-trevor.jpg" },
  { nom: "Alya Allison", poste: "Femme d'affaires", photo: "/images/avatar-alya.jpg" },
];

const texte =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export default function TestimonialsSlider({ className = "jeg-elementor-kit jkit-testimonials arrow-middle-edge style-1 quote-override" }) {
  const [index, setIndex] = useState(0);
  const [parVue, setParVue] = useState(2);

  useEffect(() => {
    const maj = () => setParVue(window.innerWidth < 768 ? 1 : 2);
    maj();
    window.addEventListener("resize", maj);
    return () => window.removeEventListener("resize", maj);
  }, []);

  const max = temoignages.length - parVue;
  const suivant = () => setIndex((i) => (i >= max ? 0 : i + 1));

  useEffect(() => {
    const timer = setInterval(suivant, 5000);
    return () => clearInterval(timer);
  });

  return (
    <div className={className}>
      <div className="testimonials-list" style={{ overflow: "hidden" }}>
        <div
          className="testimonials-track"
          style={{ display: "flex", transition: "transform .6s ease", transform: `translateX(-${index * (100 / parVue)}%)` }}
        >
          {temoignages.map((t) => (
            <div key={t.nom} className="testimonial-item" style={{ flex: `0 0 ${100 / parVue}%` }}>
              <div className="testimonial-box">
                <div className="testimonial-slider hover-from-left">
                  <div className="icon-content">
                    <i aria-hidden="true" className="jki jki-quote1-light"></i>
                  </div>
                  <div className="comment-bio">
                    <div className="profile-image">
                      <img width="300" height="300" src={t.photo} alt={t.nom} />
                    </div>
                    <ul className="rating-stars"></ul>
                    <span className="profile-info">
                      <strong className="profile-name">{t.nom}</strong>
                      <p className="profile-des">{t.poste}</p>
                    </span>
                  </div>
                  <div className="comment-content">
                    <p>{texte}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
