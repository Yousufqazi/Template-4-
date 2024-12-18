import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-light-purple-100 py-16">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-start gap-10">
          {/* Lamp Image */}
          <div>
          <Image src={'/logo.png'}  width={200} height={200} className="fix left-14 top-5" alt="logo" ></Image>
          </div>

          {/* Text Section */}
          <div className="max-w-lg">
            <p className="text-pink-500 font-semibold mb-4">
              Best Furniture For Your Castle...
            </p>
            <h1 className="text-4xl font-bold mb-4 leading-tight">
              New Furniture Collection <br />
              Trends in 2020
            </h1>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
            <button className="bg-pink-500 text-white px-6 py-3 font-semibold rounded-md">
              Shop Now
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative">
        <Image src={'/cover.png'}  width={350} height={350} className=" w-full max-w-md rounded-md" alt="cover" ></Image>
          <div className="absolute top-8 right-8 bg-blue-500 text-white text-sm font-bold px-4 py-2 rounded-full">
            50% off
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;