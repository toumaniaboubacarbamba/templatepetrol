"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

export default function NavMenu() {
  const [ouvert, setOuvert] = useState(false);
  const [sousMenu, setSousMenu] = useState(null);
  const pathname = usePathname();
  const actif = (href) => (pathname === href ? " current-menu-item current_page_item" : "");
  const ancetre = (hrefs) =>
    hrefs.some((h) => h !== "/" && (pathname === h || pathname.startsWith(h + "/"))) ? " current-menu-ancestor" : "";

  // Sur mobile/tablette : un clic sur un item parent ouvre ou ferme son sous-menu
  const basculerSousMenu = (e) => {
    if (window.innerWidth > 1024) return;
    const lien = e.target.closest("li.menu-item-has-children > a");
    if (!lien) return;
    e.preventDefault();
    const id = lien.parentElement.id;
    setSousMenu((actuel) => (actuel === id ? null : id));
  };

  return (
    <>
            <div className="jeg-elementor-kit jkit-nav-menu break-point-tablet submenu-click-title">
              <button aria-label="open-menu" className="jkit-hamburger-menu" onClick={() => setOuvert(true)}></button>
              <div className={"jkit-menu-wrapper" + (ouvert ? " active" : "")}>
                <div className="jkit-menu-container">
                  <ul id="menu-menu" className="jkit-menu jkit-menu-direction-flex jkit-submenu-position-top" onClick={basculerSousMenu}>
                    <li id="menu-item-1089" className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-1089" + actif("/")}>
                      <a href="/">
                        Accueil
                      </a>
                    </li>
                    <li id="menu-item-1088" className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-1088" + actif("/about")}>
                      <a href="/about">
                        À propos
                      </a>
                    </li>
                    <li id="menu-item-1091" className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1091" + (sousMenu === "menu-item-1091" ? " open" : "") + ancetre(["/services", "/service-details"])}>
                      <a href="/services">
                        Services
                        <i aria-hidden="true" className="jki jki-chevron-down-light"></i>
                      </a>
                      <ul className="sub-menu">
                        <li id="menu-item-1087" className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-1087" + actif("/services")}>
                          <a href="/services">
                            Services
                          </a>
                        </li>
                        <li id="menu-item-1086" className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-1086" + actif("/service-details")}>
                          <a href="/service-details">
                            Détails du service
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li id="menu-item-13" className={"menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-13" + (sousMenu === "menu-item-13" ? " open" : "") + ancetre(["/project", "/team", "/faq", "/404-page"])}>
                      <a href="#">
                        Pages
                        <i aria-hidden="true" className="jki jki-chevron-down-light"></i>
                      </a>
                      <ul className="sub-menu">
                        <li id="menu-item-1085" className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-1085" + actif("/project")}>
                          <a href="/project">
                            Projet
                          </a>
                        </li>
                        <li id="menu-item-1080" className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-1080" + actif("/team")}>
                          <a href="/team">
                            Équipe
                          </a>
                        </li>
                        <li id="menu-item-1084" className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-1084" + actif("/faq")}>
                          <a href="/faq">
                            FAQ
                          </a>
                        </li>
                        <li id="menu-item-1083" className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-1083" + actif("/404-page")}>
                          <a href="/404-page">
                            Page 404
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li id="menu-item-1090" className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1090" + (sousMenu === "menu-item-1090" ? " open" : "") + ancetre(["/blog", "/blog/rapid-thermal-research-and-innovation-in-metallurgy-by-2023"])}>
                      <a href="/blog">
                        Blog
                        <i aria-hidden="true" className="jki jki-chevron-down-light"></i>
                      </a>
                      <ul className="sub-menu">
                        <li id="menu-item-1082" className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-1082" + actif("/blog")}>
                          <a href="/blog">
                            Blog
                          </a>
                        </li>
                        <li id="menu-item-1092" className={"menu-item menu-item-type-post_type menu-item-object-post menu-item-1092" + actif("/blog/rapid-thermal-research-and-innovation-in-metallurgy-by-2023")}>
                          <a href="/blog/rapid-thermal-research-and-innovation-in-metallurgy-by-2023">
                            Article unique
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li id="menu-item-1081" className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-1081" + actif("/contact")}>
                      <a href="/contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="jkit-nav-identity-panel">
                  <div className="jkit-nav-site-title"></div>
                  <button aria-label="close-menu" className="jkit-close-menu" onClick={() => setOuvert(false)}></button>
                </div>
              </div>
              <div className={"jkit-overlay" + (ouvert ? " active" : "")} onClick={() => setOuvert(false)}></div>
            </div>
    </>
  );
}
