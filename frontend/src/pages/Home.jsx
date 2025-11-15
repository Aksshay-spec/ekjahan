// src/pages/Home.jsx
import React from "react";
import Navigation from "../components/navigator/Navigation";
import FooterNavigation from "../components/navigator/FooterNavigation";
import HomeSlider from "../components/home/HomeSlider";
import TrendingProducts from "../components/home/TrendingProducts";
import SkuSection from "../components/home/SkuSection";
import AboutSection from "../components/home/AboutSection";
import AboutListings from "../components/home/AboutListings";
import FmcgSection from "../components/home/FmcgSection";
import SeventhSection from "../components/home/SeventhSection";
import PartnerWithUsSection from "../components/home/PartnerWithUsSection";
import { DistributorBenefitSection } from "../components/home/DistributorBenefitSection";
import { Testimonial } from "../components/home/Testimonial";
import { OurNews } from "../components/home/OurNews";
import { Policies } from "../components/home/Policies";
import { OurJourney } from "../components/home/OurJourney";

const Home = () => {
  return (
    <div className=" pb-15">
      <Navigation />
      <HomeSlider />
      <TrendingProducts />
      <SkuSection />
      <AboutSection />
      <AboutListings />
      <FmcgSection />
      <SeventhSection />
      <OurJourney />
      <PartnerWithUsSection />
      <DistributorBenefitSection />
      <Testimonial />
      <OurNews />
      <Policies />
      <FooterNavigation />
    </div>
  );
};

export default Home;
