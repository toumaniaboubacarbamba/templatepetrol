import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import OurServices from "../components/OurServices";
import Stats from "../components/Stats";
import Process from "../components/Process";
import TestimonialsIntro from "../components/TestimonialsIntro";
import TestimonialsList from "../components/TestimonialsList";
import News from "../components/News";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div id="page" className="jkit-template site">
      <Header />
      <div data-elementor-type="wp-page" className="elementor elementor-159">
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <OurServices />
        <Stats />
        <Process />
        <TestimonialsIntro />
        <TestimonialsList />
        <News />
      </div>
      <Footer />
    </div>
  );
}
