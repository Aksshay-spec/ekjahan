import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { RiCustomerService2Fill } from "react-icons/ri";
import { ImWhatsapp } from "react-icons/im";
import { FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-white shadow-md">
      {/* Top navigation — disappears on scroll */}
      <div
        className={`transition-all duration-500 overflow-hidden ${
          isScrolled
            ? "opacity-0 h-0 pointer-events-none"
            : "opacity-100 h-auto py-2"
        }`}
      >
        <nav className="flex justify-between items-center px-6">
          <Link className="text-[#eb5a25] font-bold text-xl" to="">
            <IoIosCall />
          </Link>
          <Link className="text-[#eb5a25] font-bold text-xl" to="">
            <FaXTwitter />
          </Link>
          <Link className="text-[#eb5a25] font-bold text-xl" to="">
            <FaInstagram />
          </Link>
          <Link className="text-[#eb5a25] font-bold text-xl" to="">
            <FaFacebook />
          </Link>
          <Link className="text-[#eb5a25] font-bold text-xl" to="">
            <FaYoutube />
          </Link>
          <Link className="text-[#eb5a25] font-bold text-xl" to="">
            <ImWhatsapp />
          </Link>
          <Link className="text-[#eb5a25] font-bold text-xl" to="">
            <RiCustomerService2Fill />
          </Link>
        </nav>
      </div>

      {/* Main logo navigation — always visible & sticks to top */}
      <div
        className={`py-3 transition-all duration-500 ${
          isScrolled ? "shadow-lg" : ""
        }`}
      >
        <nav className="flex justify-between items-center px-6">
          <Link to="" className="text-[#eb5a25] font-bold text-xl">
            <img
              src="./images/ekjahan.jpeg"
              alt="Logo 1"
              className="h-20 w-20 object-contain transition-all duration-300"
            />
          </Link>
          <Link to="" className="text-[#eb5a25] font-bold text-xl">
            <img
              src="./images/ekjahpar.png"
              alt="Logo 2"
              className="h-20 w-20 object-contain transition-all duration-300"
            />
          </Link>
        </nav>
      </div>
    </header>
  );
};
export default Navigation;