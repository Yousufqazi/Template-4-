import React from 'react';
import Image from 'next/image';

const Offers = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className="w-full h-[400px] bg-cover bg-center bg-slate-400"
        style={{ backgroundImage: "url('/bg.png')" }}
      >
        {/* Content on top of the background */}
        <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <div className="text-center text-white px-6">
            {/* Heading */}
            <h2 className="text-4xl font-bold mb-6">Get Latest Update By Subscribe Our Newsletter</h2>

            {/* Shop Now Button */}
            <button className="bg-pink-500 text-white px-8 py-3 rounded-md hover:bg-pink-600">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* White Space for two lines */}
      <div className="my-12"></div>

      {/* Brand Image */}
      <div className="flex justify-center">
        
        
        <Image src="/brand.png" width={1920} height={462} alt="Brand" className="w-full max-w-[800px] h-auto" ></Image>
      </div>
    </div>
  );
};

export default Offers;