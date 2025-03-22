import React from "react";
import Navbar from "../components/Navbar";
import SaleOffer from "@/components/SaleOffer";
import HeroSection from "@/components/HeroSection";

const Home = () => {
  return (
    <div>
      <SaleOffer />
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Home;
