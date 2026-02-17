import React from "react";
import { assets } from "../assets/assets";

const StarRating = ({ rating = 5 }) => {

  return (
    <div className="flex items-center">
      {Array(5)
        .fill("")
        .map((_, index) => (
          <img
            key={index}
            src={
              rating > index ? assets.starIconFilled : assets.starIconOutlined
            }
            alt=""
            className="w-4 h-4"
          />
        ))}
    </div>
  );
};

export default StarRating;
