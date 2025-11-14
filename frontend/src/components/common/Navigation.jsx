import React, { useEffect, useState } from "react";
import { IoIosCall } from "react-icons/io";
import { RiCustomerService2Fill } from "react-icons/ri";
import { ImWhatsapp } from "react-icons/im";
import { FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-all duration-500">
      {/* Top navigation — smoothly hides on scroll */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isScrolled
            ? "opacity-0 max-h-0 -translate-y-4"
            : "opacity-100 max-h-[80px] translate-y-0 pt-2"
        }`}
      >
        <nav className="flex justify-between items-center px-6 py-2">
          <Link
            className="text-[#eb5a25] text-xl hover:scale-110 transition-transform"
            to=""
          >
            <IoIosCall />
          </Link>
          <Link
            className="text-[#eb5a25] text-xl hover:scale-110 transition-transform"
            to=""
          >
            <FaXTwitter />
          </Link>
          <Link
            className="text-[#eb5a25] text-xl hover:scale-110 transition-transform"
            to=""
          >
            <FaInstagram />
          </Link>
          <Link
            className="text-[#eb5a25] text-xl hover:scale-110 transition-transform"
            to=""
          >
            <FaFacebook />
          </Link>
          <Link
            className="text-[#eb5a25] text-xl hover:scale-110 transition-transform"
            to=""
          >
            <FaYoutube />
          </Link>
          <Link
            className="text-[#eb5a25] text-xl hover:scale-110 transition-transform"
            to=""
          >
            <ImWhatsapp />
          </Link>
          <Link
            className="text-[#eb5a25] text-xl hover:scale-110 transition-transform"
            to=""
          >
            <RiCustomerService2Fill />
          </Link>
        </nav>
      </div>

      {/* Main logo navigation — always visible */}
      <div
        className={`transition-all duration-500 ${
          isScrolled ? "shadow-lg" : ""
        }`}
      >
        <nav className="flex justify-between items-center px-6 py-2">
          <Link to="" className="text-[#eb5a25] font-bold text-xl">
            <img
              src="./images/ekjahan.jpeg"
              alt="Logo 1"
              className="h-20 w-20 object-contain transition-all duration-300 hover:scale-105"
            />
          </Link>
          <Link to="" className="text-[#eb5a25] font-bold text-xl">
            <img
              src="./images/ekjahpar.png"
              alt="Logo 2"
              className="h-20 w-20 object-contain transition-all duration-300 hover:scale-105"
            />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
