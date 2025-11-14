import React, { useState, useEffect } from "react";
import { FaUsers } from "react-icons/fa";

export const OurNews = () => {
  const newsItems = [
    {
      id: 1,
      title: "Top 10 Electrical Brands in Central India",
      publication: "[Publication Name]",
    },
    {
      id: 2,
      title: "Innovative Switch Designs Leading the Market",
      publication: "[Electrical Times]",
    },
    {
      id: 3,
      title: "SAPTAAR Expands Its Vendor Network Nationwide",
      publication: "[Business Insider]",
    },
    {
      id: 4,
      title: "How Smart Distribution Changed Electrical Retail",
      publication: "[Industry Journal]",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % newsItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [newsItems.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % newsItems.length);
  };

  // -----------------------------
  // 👉 Mobile Swipe Logic (added)
  // -----------------------------
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const diff = touchEndX - touchStartX;

    if (diff < -50) nextSlide(); // Swipe left → Next
    if (diff > 50) prevSlide(); // Swipe right → Prev
  };
  // -----------------------------

  return (
    <section
      className="relative py-16 text-center overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <h2 className="text-3xl font-bold text-black mb-1">Our related News</h2>
      <p className="text-lg font-semibold text-gray-700 mb-6">
        Your Trust our Guarantee
      </p>

      <div className="h-1 w-32 bg-yellow-400 mx-auto mb-10 rounded-full"></div>

      <div className="flex items-center justify-center w-full">
        {/* Left Arrow */}
        <div className="w-[20%] flex justify-end pr-4">
          <button
            onClick={prevSlide}
            className="border border-black text-black rounded-full p-2 shadow-md hover:bg-gray-100 transition"
          >
            {"<"}
          </button>
        </div>

        {/* Slider */}
        <div className="relative w-[60%] overflow-hidden flex justify-center items-center">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
              width: `${newsItems.length * 100}%`,
            }}
          >
            {newsItems.map((item) => (
              <div
                key={item.id}
                className="w-full flex justify-center items-center flex-shrink-0"
              >
                <div className="bg-[#ff6b6b] rounded-2xl shadow-lg text-white w-[90%] sm:w-[400px] md:w-[420px] h-[200px] flex flex-col items-center justify-center px-6 py-6 relative">
                  <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center mb-4">
                    <FaUsers className="text-white text-3xl" />
                  </div>

                  <h3 className="text-xs sm:text-lg font-bold leading-snug text-center px-4 break-words whitespace-normal w-full max-w-[200px] mx-auto overflow-visible">
                    {item.title}
                  </h3>

                  <p className="italic font-semibold text-white/90 mt-2">
                    — {item.publication}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <div className="w-[20%] flex justify-start pl-4">
          <button
            onClick={nextSlide}
            className="border border-black text-black rounded-full p-2 shadow-md hover:bg-gray-100 transition"
          >
            {">"}
          </button>
        </div>
      </div>
    </section>
  );
};
