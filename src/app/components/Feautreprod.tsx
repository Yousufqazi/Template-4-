import React from "react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  img: string;
  price:string;
}

const products: Product[] = [
  { id: 1, name: "Chair 1",price:"$4200", img: "/chair1.png" },
  { id: 2, name: "Chair 2",price:"$4200", img: "/chair2.png" },
  { id: 3, name: "Chair 3",price:"$4200", img: "/chair3.png" },
];

const FeaturedProducts: React.FC = () => {
  return (
    <div>

    <div className="bg-white py-10">
      <h3 className="text-center text-2xl font-bold mb-6">Featured Products</h3>
      
      <div className="flex justify-center space-x-6">
        {products.map((product) => (
          <div key={product.id} className="p-4 border rounded shadow-md">
            <Image src={product.img}  width={270} height={361} className=" h-32 w-32 object-cover bg-no-repeat" alt="chair" ></Image>
          
            <h4 className="mt-4">{product.name}</h4>
            <h5 className="mt-4 text-pink-600">{product.price}</h5>
            <div>
              
            </div>
          </div>
          
        ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;