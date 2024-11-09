import About from "@/components/about/About";
import Hero from "@/components/about/Hero";
import Section from "@/components/about/Section";
import Testimonial from "@/components/home/Testimonial";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      <Hero />
      <About />
      <Section />
      <Testimonial />
    </div>
  );
};

export default AboutUs;
