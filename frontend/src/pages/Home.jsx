// src/pages/Home.jsx
import React from "react";
import Navigation from "../components/common/Navigation";
import FooterNavigation from "../components/common/FooterNavigation";
import HomeSlider from "../components/home/HomeSlider";
import TrendingProducts from "../components/home/TrendingProducts";
import SkuSection from "../components/home/SkuSection";
import AboutSection from "../components/home/AboutSection";
import AboutListings from "../components/home/AboutListings";

const Home = () => {
  return (
    <div className="pt-36 pb-15">
      <Navigation />
      <HomeSlider />
      <TrendingProducts />
      <SkuSection />
      <AboutSection />
      <AboutListings />
      <FooterNavigation />
    </div>
  );
};

export default Home;
