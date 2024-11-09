import About from "@/components/home/About";
import BookBike from "@/components/home/BookBike";
import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import Items from "@/components/home/Items";
import PopularDestinantions from "@/components/home/PopularDestinantions";
import PopularPackages from "@/components/home/PopularPackages";
import Testimonial from "@/components/home/Testimonial";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <PopularDestinantions />
      <About />
      <Contact />
      <Items />
      <BookBike />
      <PopularPackages />
      <Testimonial />
    </div>
  );
};

export default Home;
