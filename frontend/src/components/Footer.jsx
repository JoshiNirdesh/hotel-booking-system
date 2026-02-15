import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="bg-gray-300/20 py-10">
      <div className="px-8 sm:px-10 md:px-16 lg:px-20 ">
        <div className="grid grid-cols-4 gap-10">
          <div>
            <img src={assets.logoblack} alt="" />
            <p className="mt-5 text-sm text-gray-500">
              Discover the world's most extraordinary places to stay, from
              boutique hotels to luxury villas and private islands.
            </p>
            <div className="flex gap-2 mt-5">
              <img src={assets.instagramIcon} alt="" />
              <img src={assets.twitterIcon} alt="" />
              <img src={assets.facebookIcon} alt="" />
              <img src={assets.linkendinIcon} alt="" />
            </div>
          </div>
          <div>
            <h2 className="font-playfair text-xl text-gray-500 font-light">
              COMPANY
            </h2>

            <ul className="mt-5 text-gray-500 space-y-3">
              <li>About</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Blog</li>
              <li>Patners</li>
            </ul>
          </div>

          <div>
            <h2 className="font-playfair text-xl text-gray-500 font-light">
              SUPPORT
            </h2>

            <ul className="mt-5 text-gray-500 space-y-3">
              <li>Help Center</li>
              <li>Safety Information</li>
              <li>Cancellation Options</li>
              <li>Contact Us</li>
              <li>Accessiblity</li>
            </ul>
          </div>

          <div>
            <h2 className="font-playfair text-xl text-gray-500 font-light">
              STAY UPDATED
            </h2>

            <p className="mt-5 text-gray-500 space-y-3">
              Subscribe to our newsletter for travel inspiration and special
              offers.
            </p>
            <input
              type="text"
              placeholder="Your email"
              className="bg-white px-4 py-1 border border-gray-300 w-60 mt-10 rounded"
            />
          </div>
        </div>
        <hr className="w-full mt-10 border-gray-300 mb-5" />
        <div className="flex justify-between text-sm text-gray-500">
          <p>QuickStay. All rights reserved.</p>
          <ul className="flex gap-5">
            <li>Privacy</li>
            <li>Terms</li>
            <li>Sitemap</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
