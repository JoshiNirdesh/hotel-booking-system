import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedHotel from "../components/FeaturedHotel";
import ExclusiveOffer from "../components/ExclusiveOffer";
import Testimonials from "../components/Testimonials";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedHotel />
      <ExclusiveOffer/>
      <Testimonials/>
      <NewsLetter/>
      <Footer/>
    </>
  );
};

export default Home;
