import React from "react";
import Title from "./Title";
import { testimonials } from "../assets/assets";
import StarRating from "./StarRating";

const Testimonials = () => {
  return (
    <div className="bg-gray-300/20 mb-20">
      <Title
        title="What Our Guest Say"
        subtitle="Discover why discerning travelers choose QuickStay for their luxury accommodations around the world."
      />
      <div className="grid grid-cols-3 px-8 sm:px-10 md:px-16 lg:px-20  mt-20 gap-4  ">
        {testimonials.map((item) => (
          <div
            className="border border-gray-300/20 shadow-lg rounded-lg bg-white p-8 mb-25"
            key={item.id}
          >
            <div className="flex items-center gap-5">
              <img src={item.image} alt="" className="w-15 rounded-full" />
              <div className=" ">
                <h3 className="font-playfair text-lg">{item.name}</h3>
                <p className="text-gray-500 text-sm font-light">
                  {item.address}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <StarRating rating={item.rating} />
            </div>
            <p className="text-gray-400 mt-5 ">{item.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
