"use client";

import { useEffect, useState } from "react";

// Extrait l'identifiant d'une adresse YouTube (watch?v=ID ou youtu.be/ID)
function idYoutube(url) {
  const m = url.match(/[?&]v=([^&]+)/) || url.match(/youtu\.be\/([^?&]+)/);
  return m ? m[1] : null;
}

export default function VideoLightbox({ href, className, label = "Lire la vidéo", children }) {
  const [ouvert, setOuvert] = useState(false);
  const id = idYoutube(href);

  useEffect(() => {
    if (!ouvert) return;
    const surTouche = (e) => e.key === "Escape" && setOuvert(false);
    document.addEventListener("keydown", surTouche);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", surTouche);
      document.body.style.overflow = "";
    };
  }, [ouvert]);

  return (
    <>
      <a
        href={href}
        className={className}
        aria-label={label}
        onClick={(e) => {
          if (!id) return; // adresse inconnue : le lien s'ouvre normalement
          e.preventDefault();
          setOuvert(true);
        }}
      >
        {children}
      </a>
      {ouvert && (
        <div className="video-lightbox" role="dialog" aria-modal="true" aria-label={label} onClick={() => setOuvert(false)}>
          <button type="button" className="video-lightbox-close" aria-label="Fermer la vidéo" onClick={() => setOuvert(false)}>
            ×
          </button>
          <div className="video-lightbox-frame" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
              title={label}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
