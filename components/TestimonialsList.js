import TestimonialsSlider from "./TestimonialsSlider";

export default function TestimonialsList() {
  return (
    <>
      <section className="elementor-section elementor-top-section elementor-element elementor-element-2daba84 elementor-section-boxed elementor-section-height-default">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d7a11dd">
            <div className="elementor-widget-wrap elementor-element-populated">
              <section className="elementor-section elementor-inner-section elementor-element elementor-element-f49b861 elementor-section-content-middle elementor-section-boxed elementor-section-height-default">
                <div className="elementor-container elementor-column-gap-no">
                  <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-c230705">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-4155584 elementor-widget elementor-widget-jkit_testimonials">
                        <div className="elementor-widget-container">
                          <TestimonialsSlider />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
