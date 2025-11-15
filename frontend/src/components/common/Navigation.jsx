import React, { useEffect, useState } from "react";
import { IoIosCall } from "react-icons/io";
import { RiCustomerService2Fill } from "react-icons/ri";
import { ImWhatsapp } from "react-icons/im";
import { FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

import "../css-files/Navigation.css";

const Navigation = () => {
  return (
    <header className="w-full">

      {/* FIRST NAV — Normal scroll (NOT FIXED) */}
      <div
        className="
        w-full
        bg-white/20 backdrop-blur-lg
        border-b border-white/30 shadow-lg
        "
        style={{
          WebkitBackdropFilter: "blur(16px)",
          backdropFilter: "blur(16px)",
          zIndex: 1000,
        }}
      >
        <nav className="flex justify-between items-center px-6 h-[65px]">
          <Link className="text-[#eb5a25] text-xl hover:scale-110 transition-transform" to="">
            <IoIosCall />
          </Link>
          <Link className="text-[#eb5a25] text-xl hover:scale-110 transition-transform" to="">
            <FaXTwitter />
          </Link>
          <Link className="text-[#eb5a25] text-xl hover:scale-110 transition-transform" to="">
            <FaInstagram />
          </Link>
          <Link className="text-[#eb5a25] text-xl hover:scale-110 transition-transform" to="">
            <FaFacebook />
          </Link>
          <Link className="text-[#eb5a25] text-xl hover:scale-110 transition-transform" to="">
            <FaYoutube />
          </Link>
          <Link className="text-[#eb5a25] text-xl hover:scale-110 transition-transform" to="">
            <ImWhatsapp />
          </Link>
          <Link className="text-[#eb5a25] text-xl hover:scale-110 transition-transform" to="">
            <RiCustomerService2Fill />
          </Link>
        </nav>
      </div>

      {/* SECOND NAV — ALWAYS STICKY */}
      <div
        className="
        sticky top-0 left-0 w-full
        bg-white/25 backdrop-blur-xl shadow-xl
        "
        style={{
          WebkitBackdropFilter: "blur(22px)",
          backdropFilter: "blur(22px)",
          borderBottom: "1px solid rgba(255,255,255,0.35)",
          zIndex: 1000,
        }}
      >
        <nav className="flex justify-between items-center px-6 h-[80px]">
          <Link to="">
            <img
              src="./images/ekjahan.jpeg"
              alt="Logo 1"
              className="h-16 object-contain transition-all hover:scale-105"
            />
          </Link>

          <Link to="">
            <img
              src="./images/ekjahpar.png"
              alt="Logo 2"
              className="h-16 object-contain transition-all hover:scale-105"
            />
          </Link>
        </nav>
      </div>

    </header>
  );
};

export default Navigation;
