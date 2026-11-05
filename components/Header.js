import NavMenu from "./NavMenu";

export default function Header() {
  return (
    <>
      <header id="masthead" itemScope itemType="https://schema.org/WPHeader">
        {" "}
        <div className="elementor elementor-661">
          <section className="elementor-section elementor-top-section elementor-element elementor-element-41215c6 elementor-section-content-middle elementor-section-boxed elementor-section-height-default" id="header">
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-54c35c3">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-f39683c elementor-widget elementor-widget-jkit_heading">
                    <div className="elementor-widget-container">
                      <div className="jeg-elementor-kit jkit-heading align-left align-tablet- align-mobile-center jeg_module_159__6ae7265436c02">
                        <div className="heading-section-title display-inline-block">
                          <div className="heading-title">
                            Nous proposons une révolution de
                  {" "}
                            <span className="style-color">
                              <span>
                                Génie industriel
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                      {" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-a9ee861 elementor-hidden-mobile">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-25f90af elementor-shape-square e-grid-align-right elementor-grid-0 elementor-widget elementor-widget-social-icons">
                    <div className="elementor-widget-container">
                      {" "}
                      <div className="elementor-social-icons-wrapper elementor-grid">
                        <span className="elementor-grid-item">
                          <a className="elementor-icon elementor-social-icon elementor-social-icon-jki-facebook-light elementor-repeater-item-03903b1" target="_blank">
                            <span className="elementor-screen-only">
                              Facebook
                            </span>
                            <i className="jki jki-facebook-light"></i>
                            {" "}
                          </a>
                        </span>
                        <span className="elementor-grid-item">
                          <a className="elementor-icon elementor-social-icon elementor-social-icon-jki-twitter-light elementor-repeater-item-e7a79ae" target="_blank">
                            <span className="elementor-screen-only">
                              Twitter
                            </span>
                            <i className="jki jki-twitter-light"></i>
                            {" "}
                          </a>
                        </span>
                        <span className="elementor-grid-item">
                          <a className="elementor-icon elementor-social-icon elementor-social-icon-jki-instagram-1-light elementor-repeater-item-0fa537d" target="_blank">
                            <span className="elementor-screen-only">
                              Instagram
                            </span>
                            <i className="jki jki-instagram-1-light"></i>
                            {" "}
                          </a>
                        </span>
                        <span className="elementor-grid-item">
                          <a className="elementor-icon elementor-social-icon elementor-social-icon-jki-linkedin-light elementor-repeater-item-123eb88" target="_blank">
                            <span className="elementor-screen-only">
                              LinkedIn
                            </span>
                            <i className="jki jki-linkedin-light"></i>
                            {" "}
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="elementor-section elementor-top-section elementor-element elementor-element-c7e1fd5 elementor-section-content-middle elementor-section-boxed elementor-section-height-default">
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-361a66a">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-bb39069 elementor-widget elementor-widget-image">
                    <div className="elementor-widget-container">
                      {" "}
                      <img width="800" height="267" className="attachment-full size-full wp-image-261" alt="" src="/images/logo-header.png" />
                      {" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-4c598d8">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-ba0a629 elementor-widget-tablet__width-auto elementor-widget elementor-widget-jkit_nav_menu">
                    <div className="elementor-widget-container">
                      <NavMenu />
                      {" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-ac16e6b elementor-hidden-mobile elementor-hidden-tablet">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-d9f1b19 elementor-position-left elementor-vertical-align-bottom elementor-widget__width-auto elementor-view-stacked elementor-shape-square elementor-mobile-position-top elementor-widget elementor-widget-icon-box">
                    <div className="elementor-widget-container">
                      {" "}
                      <div className="elementor-icon-box-wrapper">
                        <div className="elementor-icon-box-icon">
                          <span className="elementor-icon elementor-animation-">
                            <i aria-hidden="true" className="jki jki-phone-call-line"></i>
                            {" "}
                          </span>
                        </div>
                        <div className="elementor-icon-box-content">
                          <h3 className="elementor-icon-box-title">
                            <span>
                              Plus d&apos;informations
                            </span>
                          </h3>
                          <p className="elementor-icon-box-description">
                                  (+225) 81 148 32 843
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </header>
    </>
  );
}
