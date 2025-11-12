import React, { useState } from "react";
import { FaHome, FaBriefcase, FaBars } from "react-icons/fa";
import { RiShieldCheckFill } from "react-icons/ri";
export const FooterNavigation = () => {
  const Menus = [
    { name: "Home", icon: <FaHome />, dis: "translate-x-0" },
    { name: "Warranty", icon: <RiShieldCheckFill />, dis: "translate-x-16" },
    { name: "Career", icon: <FaBriefcase />, dis: "translate-x-32" },
    { name: "Menu", icon: <FaBars />, dis: "translate-x-48" },
  ];

  const [active, setActive] = useState(0);

  return (
    <div className="fixed bottom-0 left-0 bg-white w-full px-6 rounded-t-xl  shadow-[0_-2px_10px_rgba(0,0,0,0.1)] ">
      <ul className="flex relative justify-between">
        <span
          className={`bg-[#eb5a25] duration-500 h-14 w-14 absolute -top-4 rounded-full transform ${
            active === 0
              ? " -left-3 translate-x-0"
              : active === 1
              ? " left-1 translate-x-16"
              : active === 2
              ? "translate-x-32"
              : " left-1 translate-x-48"
          }`}
        >
          <span className="w-4 h-4 bg-transparent absolute top-[52px] -left-[16px] rounded-tr-[12px] shadow-[0_-8px_0_0_white]"></span>
          <span className="w-4 h-4 bg-transparent absolute top-[52px] -right-[16px] rounded-tl-[12px] shadow-[0_-8px_0_0_white]"></span>
        </span>

        {Menus.map((menu, i) => (
          <li key={i} className="w-16 z-10">
            <button
              className="flex flex-col items-center justify-center text-center pt-6 focus:outline-none"
              onClick={() => setActive(i)}
            >
              <span
                className={`text-2xl cursor-pointer duration-500 ${
                  i === active ? "-mt-6 text-white" : "text-gray-500"
                }`}
              >
                {menu.icon}
              </span>
              <span
                className={`text-xs font-medium transition-all duration-500 ${
                  active === i
                    ? "translate-y-4 opacity-100 text-gray-700 "
                    : "opacity-100 translate-y-0 text-gray-600"
                }`}
              >
                {menu.name}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
