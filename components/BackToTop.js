"use client";

export default function BackToTop() {
  const monterEnHaut = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a className="elementor-icon" href="#" aria-label="Retour en haut" onClick={monterEnHaut}>
      <i aria-hidden="true" className="jki jki-up-arrow-light"></i>
    </a>
  );
}
