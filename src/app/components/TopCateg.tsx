'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const TopCateg = () => {

  const [hovered, setHovered] = useState<number | null>(null);

 
  const images = ['/c1.png', '/chair1.png', '/latest1.png', '/c1.png'];

  return (
    <div className="text-center py-16">
    
      <h1 className="text-4xl font-bold mb-12">Top Categories</h1>

    
      <div className="flex justify-center flex-wrap gap-16"> 
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Circle with Image */}
            <div className="w-56 h-56 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden mb-6"> {/* Increased circle size */}
              <Image src={image} width={270} height={361}    alt={`Category ${index + 1}`}   className="w-full h-full object-cover"
              ></Image>
            </div>

            {/* Product Info */}
            <div className="text-center">
              <p className="text-xl font-bold text-dark-blue">Mini LCW Chair</p>
              <p className="text-lg text-dark-blue">$56.00</p>
            </div>

            {/* View Shop Button */}
            {hovered === index && (
              <button className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-2 rounded-md">
                View Shop
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCateg;