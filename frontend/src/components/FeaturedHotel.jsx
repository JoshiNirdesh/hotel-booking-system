import React from "react";
import { roomsDummyData } from "../assets/assets";
import HotelCard from "./HotelCard";
import Title from "./Title";
import { useNavigate } from "react-router-dom";

const FeaturedHotel = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-300/20  ">
      <div className="flex flex-col items-center justify-center ">
        <Title
          title={"Featured Hotels"}
          subtitle={
            "Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences"
          }
        />

        <div className="grid grid-cols-4 px-8 sm:px-10 md:px-16 lg:px-20 ">
          {roomsDummyData.slice(0, 5).map((room, index) => (
            <HotelCard room={room} key={index} />
          ))}
        </div>
        <button
          className="border px-8 text-sm mb-20 py-2 bg-white text-gray-500 cursor-pointer"
          onClick={() => {
            navigate("/room");
            scrollTo(0, 0);
          }}
        >
          View All Hotels
        </button>
      </div>
    </div>
  );
};

export default FeaturedHotel;
