import React, { useEffect, useState } from "react";

export const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const totalSlides = 3;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-36">
      {/* 🖼️ Hero Carousel */}
      <section className="relative text-white overflow-hidden">
        <div className="relative h-[400px] sm:h-[500px] md:h-[650px] w-full overflow-hidden">
          <div
            id="carousel"
            className="flex h-full transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {/* Slide 1 */}
            <div className="relative min-w-full h-full">
              <img
                src="./images/ele-bulb.jpg"
                alt="Electrical Supplies"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4 sm:px-6">
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

            {/* Slide 2 */}
            <div className="relative min-w-full h-full">
              <img
                src="./images/ele-bulb.jpg"
                alt="Food Distribution"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4 sm:px-6">
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

            {/* Slide 3 */}
            <div className="relative min-w-full h-full">
              <img
                src="./images/ele-bulb.jpg"
                alt="Electrical Tools"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4 sm:px-6">
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
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="max-w-[1200px] mx-auto text-center">
          <h3 className="mt-8 inline-block bg-yellow-400 text-black px-3 py-1 font-semibold rounded">
            Trending Products
          </h3>

          <div className="mt-5 flex justify-center flex-wrap gap-5">
            {[1, 2, 3, 4, 5].map((n) => (
              <div
                key={n}
                className="w-20 h-20 border-2 border-dashed border-black rounded-full"
              ></div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {["150+", "150+", "150+", "150+"].map((item, index) => (
              <div
                key={index}
                className="bg-blue-100 text-black rounded-lg shadow p-4 w-[150px] sm:w-[180px]"
              >
                <h2 className="text-3xl font-bold">{item}</h2>
                <p className="text-sm font-semibold mt-1">Electrical SKUs</p>
              </div>
            ))}
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
                src="/images/distributor.png"
                alt="Distributor Portal"
                className="w-28 h-28 object-contain mb-3"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                Distributor Portal
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
