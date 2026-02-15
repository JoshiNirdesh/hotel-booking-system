import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedHotel from "../components/FeaturedHotel";
import ExclusiveOffer from "../components/ExclusiveOffer";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedHotel />
      <ExclusiveOffer/>
      <Testimonials/>
    </>
  );
};

export default Home;
