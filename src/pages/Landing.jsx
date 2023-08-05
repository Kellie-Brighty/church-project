import React from "react";
import Hero from "../components/Landing-components/Hero";
import AboutSection from "../components/Landing-components/AboutSection";
import OurServices from "../components/Landing-components/OurServices";
import OurTeam from "../components/Landing-components/OurTeam";
import FaqSection from "../components/Landing-components/FAQ";
import Footer from "../components/General-components/Footer";

const Landing = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <OurServices />
      <OurTeam />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Landing;
