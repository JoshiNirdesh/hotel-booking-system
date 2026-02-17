import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <div className=" w-full h-[77px] flex items-center fixed text-white  z-10">
      <nav
        className={`flex items-center justify-between px-8 sm:px-10 md:px-16 lg:px-20 w-full bg-white text-black h-[77px]`}
      >
        <div>
          <img src={assets.logoblack} alt="" className="text-black" />
        </div>
        <ul className="hidden md:flex items-center gap-10 sm:h-9 md:h-10 ">
          <Link to="/">Home</Link>
          <Link to="/room">Hotels</Link>
          <Link>Experiences</Link>
          <Link>About</Link>
        </ul>
        <div className="hidden md:flex items-center gap-8 ">
          <img src={assets.searchIcon} alt="" />
          <img src={assets.userIcon} alt="" />
          <button className="bg-black px-7 text-sm py-2 rounded-full text-white">
            Login
          </button>
        </div>

        <div className="md:hidden cursor-pointer ">
          <img
            src={assets.menuIcon}
            alt=""
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-7"
          />
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-red-400 fixed top-0 left-0 w-full h-full ">
          <img
            src={assets.closeMenu}
            className="fixed right-0 p-4"
            alt=""
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />

          <div className="px-10 py-20">
            <ul className="flex flex-col gap-7 text-white text-base w-full items-center ">
              <li>Home</li>
              <li>Hotels</li>
              <li>Experiences</li>
              <li>About</li>
              <li>
                <button className="w-30 bg-black py-2 rounded-full text-white">
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
