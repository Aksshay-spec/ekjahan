import React, { useEffect, useState } from "react";

export const Home = () => {
  const [index, setIndex] = useState(0);

  // HERO SECTION  SLIDER
  useEffect(() => {
    const totalSlides = 3;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // TRENDING PRODUCTS  SLIDER
  const totalTrending = 10;
  const visibleCount = 5;
  const [trendIndex, setTrendIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrendIndex((prev) => (prev + 1) % totalTrending);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // SKUs  SLIDER
  const skuItems = [
    "150+",
    "200+",
    "175+",
    "220+",
    "190+",
    "250+",
    "300+",
    "275+",
  ];
  const totalSku = skuItems.length;
  const visibleSkuCount = 4;
  const [skuIndex, setSkuIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSkuIndex((prev) => (prev + 1) % totalSku);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const trendingProducts = Array.from(
    { length: totalTrending },
    (_, i) => i + 1
  );

  return (
    <div className="pt-36 pb-15">
      <section className="relative text-white overflow-hidden">
        {/* SLIDES CONTAINER */}
        <div className="relative h-[400px] sm:h-[500px] md:h-[650px] w-full overflow-hidden">
          <div
            id="carousel"
            className="flex h-full transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {/* SLIDE 1 */}
            <div className="relative min-w-full h-full">
              <img
                src="./images/1.png"
                alt="Electrical Supplies"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Darker black gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/80 to-transparent"></div>

              {/* Text and button moved lower */}
              <div className="absolute inset-0 flex flex-col justify-end items-center text-center px-4 sm:px-6 pb-8 sm:pb-24">
                <h2 className="text-yellow-400 text-base underline underline-offset-8 sm:text-xl font-semibold mb-2">
                  Ekjahan Enterprises
                </h2>
                <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight mb-4">
                  Powering Homes
                  <br />
                  Nourishing Lives
                </h1>
                <p className="max-w-2xl text-sm sm:text-base md:text-lg mb-6">
                  Electricity powers homes. We power trust. Food fuels families.
                  We nourish lives.
                </p>
                <button className="bg-[#ff5e5e] hover:bg-[#ff7373] text-white px-5 py-2 sm:px-6 sm:py-3 rounded-full font-semibold transition">
                  Join Us Today
                </button>
              </div>
            </div>

            {/* SLIDE 2 */}
            <div className="relative min-w-full h-full">
              <img
                src="./images/2.png"
                alt="Food Distribution"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/80 to-transparent"></div>

              <div className="absolute inset-0 flex flex-col justify-end items-center text-center px-4 sm:px-6 pb-8 sm:pb-24">
                <h2 className="text-yellow-400 text-base underline underline-offset-8 sm:text-xl font-semibold mb-2">
                  Ekjahan Enterprises
                </h2>
                <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight mb-4">
                  Connecting Energy
                  <br />
                  and Essentials
                </h1>
                <p className="max-w-2xl text-sm sm:text-base md:text-lg mb-6">
                  We deliver quality products and trusted services that keep
                  homes powered and families happy.
                </p>
                <button className="bg-[#ff5e5e] hover:bg-[#ff7373] text-white px-5 py-2 sm:px-6 sm:py-3 rounded-full font-semibold transition">
                  Join Us Today
                </button>
              </div>
            </div>

            {/* SLIDE 3 */}
            <div className="relative min-w-full h-full">
              <img
                src="./images/3.png"
                alt="Electrical Tools"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/80 to-transparent"></div>

              <div className="absolute inset-0 flex flex-col justify-end items-center text-center px-4 sm:px-6 pb-8 sm:pb-24">
                <h2 className="text-yellow-400 text-base underline underline-offset-8 sm:text-xl font-semibold mb-2">
                  Ekjahan Enterprises
                </h2>
                <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-tight mb-4">
                  Your Trust
                  <br />
                  Our Guarantee
                </h1>
                <p className="max-w-2xl text-sm sm:text-base md:text-lg mb-6">
                  From power tools to provisions, we're committed to excellence
                  and reliability.
                </p>
                <button className="bg-[#ff5e5e] hover:bg-[#ff7373] text-white px-5 py-2 sm:px-6 sm:py-3 rounded-full font-semibold transition">
                  Join Us Today
                </button>
              </div>
            </div>
          </div>

          {/* GREEN NAVIGATION ARROWS — outlined, not filled, color #27cfa8 */}
          <button
            onClick={() => setIndex((prev) => (prev - 1 + 3) % 3)}
            className="absolute left-4 top-1/2 -translate-y-1/2 border-2 border-[#27cfa8] text-[#27cfa8] w-10 h-10 rounded-full flex items-center justify-center transition hover:scale-105"
          >
            <span className="text-2xl font-bold leading-none">‹</span>
          </button>

          <button
            onClick={() => setIndex((prev) => (prev + 1) % 3)}
            className="absolute right-4 top-1/2 -translate-y-1/2 border-2 border-[#27cfa8] text-[#27cfa8] w-10 h-10 rounded-full flex items-center justify-center transition hover:scale-105"
          >
            <span className="text-2xl font-bold leading-none">›</span>
          </button>

          {/* CAROUSEL DASHES */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`h-[4px] w-6 rounded-full transition-all ${
                  i === index ? "bg-gray-300" : "bg-gray-500/50"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-8 overflow-hidden">
        <div className="max-w-[1200px] mx-auto text-center">
          <h3 className="mt-8 inline-block text-black px-3 py-1 font-semibold rounded relative after:content-[''] after:block after:w-[90%] after:h-[8px] after:bg-yellow-400 after:mt-1 after:rounded-full after:mx-auto">
            Trending Products
          </h3>

          <div className="mt-6 relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${(trendIndex * 100) / visibleCount}%)`,
                width: `${(totalTrending / visibleCount) * 100}%`,
              }}
            >
              {trendingProducts.map((n) => (
                <div
                  key={n}
                  className="w-[20%] flex-shrink-0 flex justify-center"
                >
                  <div className="w-20 h-20 border-2 border-dashed border-black rounded-full"></div>
                </div>
              ))}
            </div>
          </div>

          <h3 className="mt-12 inline-block text-black px-3 py-1 font-semibold rounded relative after:content-[''] after:block after:w-[90%] after:h-[8px] after:bg-yellow-400 after:mt-1 after:rounded-full after:mx-auto">
            Every Count Tells Our Story
          </h3>

          <div className="mt-8 relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${
                  (skuIndex * 100) / visibleSkuCount
                }%)`,
                width: `${(totalSku / visibleSkuCount) * 100}%`,
              }}
            >
              {skuItems.map((item, i) => (
                <div
                  key={i}
                  className="w-[25%] flex-shrink-0 flex justify-center"
                >
                  <div className="bg-blue-100 mr-2 text-black rounded-lg shadow p-4 w-[150px] sm:w-[180px]">
                    <h2 className="text-3xl font-bold">{item}</h2>
                    <p className="text-sm font-semibold mt-1">
                      Electrical SKUs
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-xl font-bold mb-6 text-gray-900">Explore More</h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-5">
            <div className="bg-[#6ff0dc] rounded-2xl p-5 flex flex-col items-center justify-center shadow-md hover:scale-105 transition-all">
              <img
                src="./images/electr.jpg"
                alt="Electrical SAPTAAR"
                className="w-28 h-28 object-contain mb-3"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                Electrical SAPTAAR
              </h3>
            </div>

            <div className="bg-[#ff7373] rounded-2xl p-5 flex flex-col items-center justify-center shadow-md hover:scale-105 transition-all">
              <img
                src="./images/fmcg.jpg"
                alt="FMCG Essential"
                className="w-28 h-28 object-contain mb-3"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                FMCG Essential
              </h3>
            </div>

            <div className="bg-[#ff7373] rounded-2xl p-5 flex flex-col items-center justify-center shadow-md hover:scale-105 transition-all">
              <img
                src="./images/vendor.jpg"
                alt="Vendor Portal"
                className="w-28 h-28 object-contain mb-3"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                Vendor Portal
              </h3>
            </div>

            <div className="bg-[#6ff0dc] rounded-2xl p-5 flex flex-col items-center justify-center shadow-md hover:scale-105 transition-all">
              <img
                src="./images/distributor.png"
                alt="Distributor Portal"
                className="w-28 h-28 object-contain mb-3"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                Distributor Portal
              </h3>
            </div>
          </div>
        </div>
        {/* hjhjhhjlkj;lskd;sfk */}
      </section>
    </div>
  );
};
