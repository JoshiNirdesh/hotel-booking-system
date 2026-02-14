import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className=" w-full h-[77px] flex items-center fixed text-white ">
      <nav className="flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-16 w-full">
        <div>
          <img src={assets.logo} alt="" />
        </div>
        <ul className="hidden md:flex items-center gap-10 sm:h-9 md:h-10 ">
          <li>Home</li>
          <li>Hotels</li>
          <li>Experiences</li>
          <li>About</li>
        </ul>
        <div className="hidden md:flex items-center gap-5 ">
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
