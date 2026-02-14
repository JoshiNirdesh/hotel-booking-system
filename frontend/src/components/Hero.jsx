import React from "react";
import heroImage from "../assets/heroImage.png"
const Hero = () => {
  return (
    <div
      className=" flex flex-col w-full h-screen bg-cover bg-center h-screen bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Content */}
    </div>
  );
};

export default Hero;
