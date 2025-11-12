import React, { useEffect, useState } from "react";
import { IoIosCall } from "react-icons/io";
import { RiCustomerService2Fill } from "react-icons/ri";
import { ImWhatsapp } from "react-icons/im";
import { FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 shadow-md transition-all duration-500">
      {/* TOP ICON BAR — hidden when scrolling */}
      <div
        className={`py-2 transition-all duration-500 ${
          isScrolling
            ? "opacity-0 -translate-y-full pointer-events-none"
            : "opacity-100 translate-y-0"
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

      {/* LOGO BAR — visible always, becomes transparent when scrolling */}
      <div
        className={`py-2 transition-all duration-500 ${
          isScrolling
            ? "bg-transparent backdrop-blur-sm"
            : "bg-white bg-opacity-100"
        }`}
      >
        <nav className="flex justify-between items-center px-6">
          <Link to="" className="text-[#eb5a25] font-bold text-xl">
            <img
              src="./images/ekj.png"
              alt="Ekjahan Logo"
              className="h-20 w-auto object-contain"
            />
          </Link>
          <Link to="" className="text-[#eb5a25] font-bold text-xl">
            <img
              src="./images/ekjahpar.png"
              alt="Partnership Icon"
              className="h-20 w-auto object-contain"
            />
          </Link>
        </nav>
      </div>
    </div>
  );
};
