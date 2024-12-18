import React from "react";
import Image from "next/image";


const ShopexOffer: React.FC = () => {
  const product = [
    { id: 1, title: "24/7 Support", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/offer1.png" },
    { id: 2, title: "24/7 Support", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/offer2.png" },
    { id: 3, title: "24/7 Support", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/offer3.png" },
    { id: 4, title: "24/7 Support", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/offer4.png" },
  ];

  return (
    <div className="py-10 px-5 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-5">What Shopex Offer!</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {product.map((product) => (
          <div key={product.id} className="text-center p-4">
            <Image src={product.image} width={270}  height={361} alt="offer" className="w-16 h-16 mx-auto mb-4 "  ></Image>
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-gray-500">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopexOffer;