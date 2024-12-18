'use clint'
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/Feautreprod";
import LatestProduct from "./components/Latesetproducts";
import ShopexOffer from "./components/Shopexoffer";
import UniqueFeatures from "./components/UniqueFeautures";
import TrendingProducts from "./components/Tranding";
import Discount from "./components/Discount";
import TopCateg from "./components/TopCateg";
import Offers from "./components/Offer";
import Footer from "./components/Footer";
import Blogs from "./components/Blog";




const Home: React.FC = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
        <Hero/>
        <FeaturedProducts/>
        <LatestProduct/>
       <ShopexOffer/>
       <UniqueFeatures/>
       <TrendingProducts/>
       <Discount/>
       <TopCateg/>
       <Offers/>
       <Blogs/>
        <Footer/>
        
        
      </main>
    </div>
  );
};

export default Home;