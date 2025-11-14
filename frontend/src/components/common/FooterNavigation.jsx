import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { RiShieldCheckFill } from "react-icons/ri";
import { FaBriefcase } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const FooterNavigation = () => {
  const location = useLocation();

  // Define nav items
  const navItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Warranty", path: "/warranty", icon: <RiShieldCheckFill /> },
    { name: "Career", path: "/career", icon: <FaBriefcase /> },
    { name: "Menu", path: "/menu", icon: <FaBars /> },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-t-md flex justify-around items-center py-2 border-t border-gray-200 z-50">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.name}
            to={item.path}
            className="flex flex-col items-center justify-center relative"
          >
            {/* Floating circle for active item */}
            <div
              className={`transition-all duration-300 ease-in-out ${
                isActive
                  ? "bg-[#eb5a25] text-white p-3 rounded-full shadow-md -translate-y-3"
                  : "text-gray-500 text-xl"
              }`}
            >
              <div className="text-2xl">{item.icon}</div>
            </div>

            {/* Name */}
            <span
              className={`mt-1 mb-2 text-xs font-medium ${
                isActive ? "text-[#eb5a25]" : "text-gray-500"
              }`}
            >
              {item.name}
            </span>

            {/* Underline animation */}
            {isActive && (
              <div className="absolute bottom-0 h-[3px] w-8 bg-[#eb5a25] rounded-full mt-1"></div>
            )}
          </Link>
        );
      })}
    </div>
  );
};
export default FooterNavigation;
