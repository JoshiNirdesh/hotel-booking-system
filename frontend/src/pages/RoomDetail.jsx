import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  assets,
  facilityIcons,
  roomCommonData,
  roomsDummyData,
} from "../assets/assets";
import StarRating from "../components/StarRating";

const RoomDetail = () => {
  const { id } = useParams();
  const [room, setRoom] = useState();
  const [mainImage, setMainImage] = useState();

  useEffect(() => {
    const room = roomsDummyData.find((product) => product._id === id);
    room && setRoom(room);
    room && setMainImage(room.images[0]);
  }, [id]);

  console.log(room);
  return (
    room && (
      <div>
        <div className="pt-[120px] px-28 sm:px-30 md:px-34 lg:px-36 ">
          <div className="flex gap-5 items-center">
            <h1 className="text-4xl font-playfair">
              {room.hotel.name}
              <span className="text-sm px-2">({room.roomType})</span>
            </h1>
            <p className="bg-orange-500 text-white px-2  rounded-full text-md font-md">
              (20% OFF)
            </p>
          </div>
          <div className="flex gap-4">
            <StarRating />
            <p className="">200+ reviews</p>
          </div>

          <div className="flex gap-1 mt-2 text-gray-500 font-light">
            <img src={assets.locationIcon} alt="" />
            <p>{room.hotel.city}</p>
          </div>

          <div className="flex gap-4">
            <img src={mainImage} alt="" className="w-150 mt-8 rounded-xl" />

            <div className="grid grid-cols-2 gap-4 mt-15">
              {room.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt=""
                  className="w-60 rounded-lg cursor-pointer object-cover"
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          </div>
          <div className="flex mt-7 items-center gap-110">
            <h1 className="text-4xl font-playfair">
              Experience Luxury Like Never Before
            </h1>
            <p className="text-2xl">
              ${room.pricePerNight} <span>/night</span>
            </p>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-2">
            {room.amenities.map((item) => (
              <div className="flex item-center gap-2 px-3 py-2 bg-gray-300/40 rounded-lg">
                <img src={facilityIcons[item]} alt="" />
                <p>{item}</p>
              </div>
            ))}
          </div>
          <hr className="mt-5 mb-5 w-150 border-gray-200" />
          <div className="flex justify-between border p-8 border-gray-300/20  shadow-lg">
            <div className="flex">
              <div>
                <p>Check In</p>
                <input
                  type="text"
                  placeholder="Add date"
                  className="text-gray-600 font-light"
                />
              </div>
              <div>
                <p>Check Out</p>
                <input
                  type="text"
                  placeholder="Add date"
                  className="text-gray-600 font-light"
                />
              </div>
              <div>
                <p>Guest</p>
                <input
                  type="text"
                  placeholder="Add date"
                  className="text-gray-600 font-light"
                />
              </div>
            </div>
            <div>
              <button className="bg-blue-600 px-25 py-2 text-white">
                Check Availabity
              </button>
            </div>
          </div>

          <div className="flex  flex-col gap-4 mt-20">
            {roomCommonData.map((item) => (
              <div className="flex gap-3 ">
                <img src={item.icon} alt="" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <hr className="mt-7 border-gray-200 w-150" />

          <p className="w-m-250 mt-5 text-gray-400">
            Guests will be allocated on the ground floor according to
            availability. You get a comfortable Two bedroom apartment has a true
            city feeling. The price quoted is for two guest, at the guest slot
            please mark the number of guests to get the exact price for groups.
            The Guests will be allocated ground floor according to availability.
            You get the comfortable two bedroom apartment that has a true city
            feeling.
          </p>
          <hr className="mt-7 border-gray-200 w-150" />
        </div>
      </div>
    )
  );
};

export default RoomDetail;
