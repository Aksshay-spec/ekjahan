import React from "react";
import { IoIosCall } from "react-icons/io";
import { RiCustomerService2Fill } from "react-icons/ri";
import { ImWhatsapp } from "react-icons/im";
import { FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      {/* TOP SOCIAL MEDIA SECTION - Not sticky, will scroll away */}
      <div className="w-full bg-white border-b border-gray-200">
        <nav className="flex justify-between items-center px-6 h-[40px]">
          <Link
            className="text-[#eb5a25] text-xs hover:scale-110 transition-transform"
            to=""
          >
            <IoIosCall />
          </Link>
          <Link
            className="text-[#eb5a25] text-xs hover:scale-110 transition-transform"
            to=""
          >
            <FaXTwitter />
          </Link>
          <Link
            className="text-[#eb5a25] text-xs hover:scale-110 transition-transform"
            to=""
          >
            <FaInstagram />
          </Link>
          <Link
            className="text-[#eb5a25] text-xs hover:scale-110 transition-transform"
            to=""
          >
            <FaFacebook />
          </Link>
          <Link
            className="text-[#eb5a25] text-xs hover:scale-110 transition-transform"
            to=""
          >
            <FaYoutube />
          </Link>
          <Link
            className="text-[#eb5a25] text-xs hover:scale-110 transition-transform"
            to=""
          >
            <ImWhatsapp />
          </Link>
          <Link
            className="text-[#eb5a25] text-xs hover:scale-110 transition-transform"
            to=""
          >
            <RiCustomerService2Fill />
          </Link>
        </nav>
      </div>

      {/* MAIN LOGO NAVIGATION - Sticky, stays at top when scrolling */}
      <nav className="sticky top-0 w-full bg-white shadow-md z-[1000]">
        <div className="flex justify-between items-center px-6 h-[40px]">
          <Link to="">
            <img
              src="./images/ekjahan.jpeg"
              alt="Ekjahan Enterprises"
              className="h-[40px] object-contain transition-all hover:scale-105"
            />
          </Link>

          <Link to="">
            <img
              src="./images/ekjahpar.png"
              alt="Partnership"
              className="h-[40px] object-contain transition-all hover:scale-105"
            />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
