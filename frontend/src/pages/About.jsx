import React from "react";

const About = () => {
  return (
    <div className="pt-[90px] px-6 md:px-16 lg:px-24 mb-20">
      <div className="text-center max-w-3xl mx-auto mt-20">
        <h1 className="text-3xl md:text-4xl font-semibold">About Us</h1>
        <p className="text-gray-500 mt-4">
          We help travelers discover the best hotels, experiences, and
          adventures. Our mission is to make travel easy, safe, and
          unforgettable.
        </p>
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800"
          alt=""
          className="rounded-2xl shadow-lg"
        />

        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            We started with a simple goal — help travelers explore amazing
            places without stress. From hotel booking to local experiences, we
            provide everything in one platform.
          </p>
          <p className="text-gray-600">
            Whether you love adventure, culture, or relaxation, we help you
            create unforgettable travel memories.
          </p>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Why Choose Us
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="font-semibold text-lg mb-2">Best Price Guarantee</h3>
            <p className="text-gray-500 text-sm">
              We offer competitive prices and best deals for hotels and
              experiences.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="font-semibold text-lg mb-2">Trusted by Travelers</h3>
            <p className="text-gray-500 text-sm">
              Thousands of travelers trust our platform for safe and reliable
              booking.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
            <p className="text-gray-500 text-sm">
              Our support team is always ready to help you anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
