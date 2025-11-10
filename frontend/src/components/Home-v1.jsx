import React from "react";
import { Carousel } from "@material-tailwind/react";

export const Home = () => {
  return (
    <div className="pt-36">
      {/* <section className="relative bg-green-600 text-white overflow-hidden">
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
            src="./images/Vegetable-Basket-removebg-preview.png"
            alt="Grocery Basket"
            className="w-[400px] md:w-[520px] mt-8 object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-105"
          />
        </div>
      </section> */}

      <section className="relative text-white overflow-hidden">
        <Carousel
          autoplay={true}
          loop={true}
          transition={{ duration: 1.5 }}
          className="rounded-none"
        >
          {/* Slide 1 */}
          <div className="relative h-[550px] md:h-[650px] w-full">
            <img
              src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1500&q=80"
              alt="Electrical Supplies"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6">
              <img
                src="./images/logo.png"
                alt="Ekjahan Enterprises"
                className="w-48 mb-4"
              />
              <h2 className="text-yellow-400 text-xl font-semibold mb-2">
                Ekjahan Enterprises
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                Powering Homes
                <br />
                Nourishing Lives
              </h1>
              <p className="max-w-2xl text-base md:text-lg mb-6">
                Electricity powers homes. We power trust. Food fuels families.
                We nourish lives.
              </p>
              <button className="bg-[#ff5e5e] hover:bg-[#ff7373] text-white px-6 py-3 rounded-full font-semibold transition">
                Join Us Today
              </button>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="relative h-[550px] md:h-[650px] w-full">
            <img
              src="https://images.unsplash.com/photo-1603112575560-58b98c7a7b2d?auto=format&fit=crop&w=1500&q=80"
              alt="Food Distribution"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6">
              <h2 className="text-yellow-400 text-xl font-semibold mb-2">
                Ekjahan Enterprises
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                Connecting Energy
                <br />
                and Essentials
              </h1>
              <p className="max-w-2xl text-base md:text-lg mb-6">
                We deliver quality products and trusted services that keep homes
                powered and families happy.
              </p>
              <button className="bg-[#ff5e5e] hover:bg-[#ff7373] text-white px-6 py-3 rounded-full font-semibold transition">
                Join Us Today
              </button>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="relative h-[550px] md:h-[650px] w-full">
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee2399eea158?auto=format&fit=crop&w=1500&q=80"
              alt="Electrical Tools"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6">
              <h2 className="text-yellow-400 text-xl font-semibold mb-2">
                Ekjahan Enterprises
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                Your Trust
                <br />
                Our Guarantee
              </h1>
              <p className="max-w-2xl text-base md:text-lg mb-6">
                From power tools to provisions, we’re committed to excellence
                and reliability.
              </p>
              <button className="bg-[#ff5e5e] hover:bg-[#ff7373] text-white px-6 py-3 rounded-full font-semibold transition">
                Join Us Today
              </button>
            </div>
          </div>
        </Carousel>
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
