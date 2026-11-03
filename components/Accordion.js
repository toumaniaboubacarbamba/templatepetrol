"use client";

import { useState } from "react";

export default function Accordion({ className, items }) {
  const [ouvert, setOuvert] = useState(items.findIndex((i) => i.open));

  return (
    <div className={className}>
      {items.map((item, i) => {
        const estOuvert = ouvert === i;
        return (
          <div key={item.title} className={"card-wrapper" + (estOuvert ? " expand" : "")}>
            <div className="card-header">
              <a
                className="card-header-button"
                href={`#expand-${i}`}
                aria-controls={`expand-${i}`}
                aria-expanded={estOuvert}
                onClick={(e) => {
                  e.preventDefault();
                  setOuvert(estOuvert ? -1 : i);
                }}
              >
                <div className="left-icon-group">
                  <div className="normal-icon">{!estOuvert && <i aria-hidden="true" className="fas fa-chevron-down"></i>}</div>
                  <div className="active-icon">{estOuvert && <i aria-hidden="true" className="fas fa-chevron-up"></i>}</div>
                </div>
                <span className="title">{item.title}</span>
              </a>
            </div>
            <div className="card-expand" id={`expand-${i}`} style={{ display: estOuvert ? "block" : "none" }}>
              <div className="card-body">{item.body}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
