import React, { useEffect, useState } from "react";
import { IoIosCall } from "react-icons/io";
import { RiCustomerService2Fill } from "react-icons/ri";
import { ImWhatsapp } from "react-icons/im";
import { FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [hideTopNav, setHideTopNav] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      // Hide top nav when scrolling down past 80px
      // Show top nav when scrolling back to top (less than 80px)
      if (current > 80) {
        if (current > lastScroll) {
          setHideTopNav(true); // scrolling down
        }
      } else {
        setHideTopNav(false); // at the top
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <header className="w-full z-[1000]">
      {/* FIRST NAV — Hide on scroll down, show when back at top */}
      <div
        className={`fixed top-0 left-0 w-full
          bg-white/20 backdrop-blur-lg
          border-b border-white/30 shadow-lg
          transition-all duration-300 ease-in-out
          ${
            hideTopNav
              ? "opacity-0 -translate-y-full pointer-events-none"
              : "opacity-100 translate-y-0"
          }
        `}
        style={{
          WebkitBackdropFilter: "blur(16px)",
          backdropFilter: "blur(16px)",
          zIndex: 1000,
        }}
      >
        <nav className="flex justify-between items-center px-6 h-[65px]">
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

      {/* SECOND NAV — Always visible, moves to top when first nav hides */}
      <div
        className={`fixed left-0 w-full
          bg-white/25 backdrop-blur-xl shadow-xl
          transition-all duration-500 ease-in-out
          ${hideTopNav ? "top-0" : "top-[65px]"}
        `}
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

      {/* Spacer to prevent content from going under the fixed header */}
      <div className={hideTopNav ? "h-[40px]" : "h-[10px]"}></div>
    </header>
  );
};

export default Navigation;
