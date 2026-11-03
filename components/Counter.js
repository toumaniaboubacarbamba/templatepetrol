"use client";

import { useEffect, useState } from "react";
import useInView from "./useInView";

export default function Counter({ value, duration = 2000 }) {
  const [ref, vu] = useInView();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!vu) return;
    const debut = performance.now();
    let frame;
    const tick = (now) => {
      const p = Math.min((now - debut) / duration, 1);
      setN(Math.round(value * p));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [vu, value, duration]);

  return (
    <span ref={ref} className="number loaded">
      {n}
    </span>
  );
}
