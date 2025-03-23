import React from "react";
import Navbar from "../components/Navbar";
import SaleOffer from "@/components/SaleOffer";
import HeroSection from "@/components/HeroSection";
import FlashSales from "@/components/FlashSales";

const Home = () => {
  return (
    <div>
      <SaleOffer />
      <Navbar />
      <HeroSection />
      <FlashSales />
    </div>
  );
};

export default Home;
