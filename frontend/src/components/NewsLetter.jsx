import React from "react";

const NewsLetter = () => {
  return (
    <div>
      <div className="px-16 sm:px-18 md:px-24 lg:px-28 mt-25 mb-30">
        <div className="bg-gray-900 text-white text-center p-20 rounded-xl">
          <h1 className="text-4xl font-playfair"> Stay Inspired</h1>
          <p className="text-gray-400 font-light m-3">
            Join our newsletter and be the first to discover new destinations,
            exclusive offers, and travel inspiration.
          </p>
          <div className="mt-10 flex items-center gap-5 justify-center">
            <input type="text" placeholder="Enter your email" className="border px-4 py-1 w-60 bg-gray-300/10 rounded border-gray-500 font-light " />
            <button className="bg-black px-6 py-1 text-sm font-light">Subscribe</button>
          </div>
          <p className="text-gray-400 text-sm mt-5 font-light">
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
