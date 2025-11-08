import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { RiCustomerService2Fill } from "react-icons/ri";
import { ImWhatsapp } from "react-icons/im";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="py-2">
        {/* Top navigation */}
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
      <div className=" py-2">
        {/* Top navigation */}
        <nav className="flex justify-between items-center px-6">
          <Link className="text-[#eb5a25] font-bold text-xl" to="">
            <img
              src="../../public/images/ekj.png"
              alt=""
              className="h-20 w-auto object-contain"
            />
          </Link>
          <Link className="text-[#eb5a25] font-bold text-xl" to="">
            <img
              src="../../public/images/ekjahpar.png"
              alt=""
              className="h-20 w-auto object-contain"
            />
          </Link>
        </nav>
      </div>
    </div>
  );
};
