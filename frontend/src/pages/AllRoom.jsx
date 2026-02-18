import { assets, roomsDummyData } from "../assets/assets";
import StarRating from "../components/StarRating";
import { useNavigate } from "react-router-dom";
const AllRoom = () => {
  const navigate = useNavigate();

  return (
    <div className="px-8 sm:px-10 md:px-16 lg:px-20">
      <div className="flex flex-col text-left">
        <h1 className="text-4xl font-playfair mt-30">Hotel Rooms</h1>
        <p className="mt-3 max-w-2xl text-gray-400 text-sm">
          Take advantage of our limited-time offers and special packages to
          enhance your stay and create unforgettable memories.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          {roomsDummyData.map((room, index) => (
            <div key={index}>
              <div className="mt-7 flex flex-col md:flex-row gap-7">
                <img
                  src={room.images[0]}
                  alt=""
                  className="md:h-80 w-120 rounded-lg cursor-pointer"
                  onClick={() => {
                    navigate(`/room/${room._id}`);
                    scrollTo(0, 0);
                  }}
                />

                <div className="flex flex-col justify-center">
                  <p className="font-light text-gray-500">{room.hotel.city}</p>

                  <h2
                    className="font-playfair text-2xl font-light cursor-pointer"
                    onClick={() => {
                      navigate(`/room/${room._id}`);
                      scrollTo(0, 0);
                    }}
                  >
                    {room.hotel.name}
                  </h2>

                  <div className="flex items-center gap-2 mt-2">
                    <StarRating rating={4} />
                    <span className="text-sm text-gray-500">200+ reviews</span>
                  </div>

                  <div className="flex text-sm gap-2 mt-4 mb-4">
                    <img src={assets.locationIcon} alt="" className="md:w-4" />
                    <p className="text-gray-500 font-light md:text-xs">
                      {room.hotel.address}
                    </p>
                  </div>

                  <div className="flex md:flex-col gap-3">
                    <div className="flex gap-2 bg-gray-300/40 p-2 md:p-1 text-xs md:text-md rounded-lg font-light items-center">
                      <img src={assets.freeWifiIcon} alt="" className="w-5" />
                      <p>free wifi</p>
                    </div>

                    <div className="flex gap-2 bg-gray-300/40 p-2 md:p-1  text-xs md:text-sm rounded-lg font-light items-center">
                      <img src={assets.freeBreakfastIcon} alt="" />
                      <p>free breakfast</p>
                    </div>

                    <div className="flex gap-2 bg-gray-300/40 p-2 md:p-1  text-xs md:text-sm rounded-lg font-light items-center">
                      <img src={assets.roomServiceIcon} alt="" />
                      <p>room service</p>
                    </div>
                  </div>

                  <h1 className="text-xl mt-5 mb-5">
                    ${room.pricePerNight}/night
                  </h1>
                </div>
              </div>

              <hr className="mt-10 mb-10 border-gray-200 " />
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <div className="w-80 border border-gray-300  p-5 rounded-lg   top-24 h-120 mb-20">
            <div className="flex justify-between mb-4">
              <h2 className="text-lg">Filters</h2>
              <p className="text-lg text-blue-500 cursor-pointer">Clear</p>
            </div>

            <div>
              <h3 className=" mb-2">Popular Filter</h3>

              <div className="flex items-center gap-2 text-gray-400 font-light">
                <input type="checkbox" />
                <label>Single Bed</label>
              </div>
              <div className="flex items-center gap-2 text-gray-400 font-light">
                <input type="checkbox" />
                <label>Family Suite</label>
              </div>
              <div className="flex items-center gap-2 text-gray-400 font-light">
                <input type="checkbox" />
                <label>Double Bed</label>
              </div>
              <div className="flex items-center gap-2 text-gray-400 font-light">
                <input type="checkbox" />
                <label>Luxury Room</label>
              </div>
            </div>
            <div>
              <h3 className=" mb-2 mt-4">Price</h3>

              <div className="flex items-center gap-2 text-gray-400 font-light">
                <input type="checkbox" />
                <label>$500 - $1000</label>
              </div>
              <div className="flex items-center gap-2 text-gray-400 font-light">
                <input type="checkbox" />
                <label>$1000 - $1500</label>
              </div>
              <div className="flex items-center gap-2 text-gray-400 font-light">
                <input type="checkbox" />
                <label>$1500 - $2000</label>
              </div>
            </div>
            <div>
              <h3 className=" mb-2 mt-4">Sort By</h3>

              <div className="flex items-center gap-2 text-gray-400 font-light">
                <input type="checkbox" />
                <label>Price Low to High</label>
              </div>
              <div className="flex items-center gap-2 text-gray-400 font-light">
                <input type="checkbox" />
                <label>Price High to Low</label>
              </div>
              <div className="flex items-center gap-2 text-gray-400 font-light">
                <input type="checkbox" />
                <label>Newest First</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRoom;
