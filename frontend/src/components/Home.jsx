import React from "react";

export const Home = () => {
  return (
    <div className="pt-36">
      <section className="relative bg-green-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500 to-green-700 opacity-90"></div>

        <div className="relative flex flex-col items-center justify-center text-center px-6 py-16 z-10">
          <h1
            className="text-5xl md:text-7xl font-extrabold uppercase tracking-widest drop-shadow-lg"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: "3px",
            }}
          >
            Grocery Store
          </h1>

          <img
            src="/images/Vegetable-Basket-removebg-preview.png"
            alt="Grocery Basket"
            className="w-[400px] md:w-[520px] mt-8 object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-105"
          />
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="max-w-[1200px] mx-auto text-center">
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
        </div>
      </section>
      {/* ===========================++ EXPLORE MORE SECTION =================== */}
      <section className="bg-white py-10">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-xl font-bold mb-6 text-gray-900">Explore More</h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-5">
            <div className="bg-[#6ff0dc] rounded-2xl p-5 flex flex-col items-center justify-center shadow-md hover:scale-105 transition-all">
              <img
                src="../../public/images/electr.jpg"
                alt="Electrical SAPTAAR"
                className="w-28 h-28 object-contain mb-3"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                Electrical SAPTAAR
              </h3>
            </div>

            <div className="bg-[#ff7373] rounded-2xl p-5 flex flex-col items-center justify-center shadow-md hover:scale-105 transition-all">
              <img
                src="../../public/images/fmcg.jpg"
                alt="FMCG Essential"
                className="w-28 h-28 object-contain mb-3"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                FMCG Essential
              </h3>
            </div>

            <div className="bg-[#ff7373] rounded-2xl p-5 flex flex-col items-center justify-center shadow-md hover:scale-105 transition-all">
              <img
                src="../../public/images/vendor.jpg"
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
