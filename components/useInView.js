"use client";

import { useEffect, useRef, useState } from "react";

// Renvoie [ref, vu] : vu passe à true quand l'élément entre dans l'écran (une seule fois)
export default function useInView() {
  const ref = useRef(null);
  const [vu, setVu] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVu(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, vu];
}
