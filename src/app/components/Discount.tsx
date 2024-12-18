import React from "react";
import Image from "next/image";

const Discount: React.FC = () => {
  return (
    
    
    <section className="flex flex-col items-center justify-center py-12 px-4 lg:flex-row lg:justify-between lg:px-16">
      
      <div className="lg:w-1/2 text-center lg:text-left">
        
        
        <h1 className="text-3xl font-bold text-center mb-6">Discount Item</h1>

       
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-black hover:text-pink-500">Wood Chair</a>
          <a href="#" className="text-black hover:text-pink-500">Plastic Chair</a>
          <a href="#" className="text-black hover:text-pink-500">Sofa Collection</a>
        </div>

        
        <h2 className="mt-8 text-2xl font-semibold text-gray-700">20% discount for all products</h2>

        
        <h2 className="mt-2 text-lg font-medium text-pink-500">Earns Sofa Compact</h2>

        <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="text-gray-500">Curabitur vel lacus nec sapien scelerisque pharetra.</p>
        <ul className="mt-6 flex flex-col items-center lg:items-start">
     
         
          <div className="text-gray-500 flex space-x-8">
            <li>✓ Material expose like Metals</li>
            <li>✓ Clear lines and geometric figures</li>
          </div>
          <div className="text-gray-500 flex space-x-8 mt-2">
            <li>✓ Simple neutral Colors</li>
            <li>✓ Material expose like Metals</li>
            <button className="bg-pink-500 text-white px-6 py-3 font-semibold rounded-md">
              Shop Now
            </button>
          </div>
        </ul>
      </div>

      
      <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
           <Image src="/sofa2.png" width={699} height={597} alt="Sofa" className="max-w-full h-auto" ></Image>

        
      </div>
    </section>
  );
};

export default Discount;