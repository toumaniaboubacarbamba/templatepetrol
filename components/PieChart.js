"use client";

import { useEffect, useState } from "react";
import useInView from "./useInView";

const R = 88;
const C = 2 * Math.PI * R;

export default function PieChart({ className, value, title, description, duration = 1500 }) {
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

  const cercle = { position: "absolute", top: 0, left: 0, width: "100%", height: "100%" };

  return (
    <div className={className}>
      <div className="pie-chart-wrapper" ref={ref}>
        <span className="pie-chart-content loaded">{n}%</span>
        <svg className="main-canvas loaded" viewBox="0 0 187 187" style={{ ...cercle, zIndex: 2, transform: "rotate(-90deg)" }}>
          <circle cx="93.5" cy="93.5" r={R} fill="none" stroke="#FF6F2B" strokeWidth="4" strokeDasharray={`${(C * n) / 100} ${C}`} />
        </svg>
        <svg className="background-canvas" viewBox="0 0 187 187" style={{ ...cercle, zIndex: 1 }}>
          <circle cx="93.5" cy="93.5" r={R} fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="4" />
        </svg>
      </div>
      <h2 className="pie-chart-title">{title}</h2>
      <div className="pie-chart-description">
        <p>{description}</p>
      </div>
    </div>
  );
}
