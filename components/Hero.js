import Link from "next/link";
import HeroSlideshow from "./HeroSlideshow";

export default function Hero() {
  return (
    <>
      <section className="elementor-section elementor-top-section elementor-element elementor-element-838e3a2 elementor-section-boxed elementor-section-height-default">
        <HeroSlideshow />
        <div className="elementor-background-overlay"></div>
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-db46074">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-b9bf6dc elementor-widget elementor-widget-heading">
                <div className="elementor-widget-container">
                  <h4 className="elementor-heading-title elementor-size-default">
                    Nous construisons le meilleur
                  </h4>
                  {" "}
                </div>
              </div>
              <div className="elementor-element elementor-element-b51075a elementor-widget elementor-widget-heading">
                <div className="elementor-widget-container">
                  <h1 className="elementor-heading-title elementor-size-default">
                    Découvrez des ressources vitales en pétrole et en gaz naturel
                  </h1>
                  {" "}
                </div>
              </div>
              <div className="elementor-element elementor-element-469b902 elementor-widget-divider--view-line elementor-widget elementor-widget-divider">
                <div className="elementor-widget-container">
                  {" "}
                  <div className="elementor-divider">
                    <span className="elementor-divider-separator"></span>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-e32607d elementor-widget elementor-widget-text-editor">
                <div className="elementor-widget-container">
                  {" "}
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  {" "}
                </div>
              </div>
              <div className="elementor-element elementor-element-39d63ad elementor-widget__width-auto elementor-widget elementor-widget-jkit_button">
                <div className="elementor-widget-container">
                  <div className="jeg-elementor-kit jkit-button icon-position-before jeg_module_159_2_6ae7265443a8a">
                    <Link href="/" className="jkit-button-wrapper">
                      Commencer
                    </Link>
                  </div>
                  {" "}
                </div>
              </div>
              <div className="elementor-element elementor-element-bfa3f0c elementor-widget__width-auto elementor-widget elementor-widget-jkit_button">
                <div className="elementor-widget-container">
                  <div className="jeg-elementor-kit jkit-button icon-position-before jeg_module_159_3_6ae72654443ca">
                    <Link href="/" className="jkit-button-wrapper">
                      Contactez-nous
                    </Link>
                  </div>
                  {" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
