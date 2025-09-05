import React from "react";
import Navbar from "../components/Navbar";
import SaleOffer from "@/components/SaleOffer";
import HeroSection from "@/components/HeroSection";
import FlashSales from "@/components/FlashSales";
import Category from "@/components/Category";
import BestSellingProducts from "@/components/BestSellingProducts";

const Home = () => {
  return (
    <div>
      <SaleOffer />
      <Navbar />
      <HeroSection />
      <FlashSales />
      <Category />
      <BestSellingProducts />
    </div>
  );
};

export default Home;
