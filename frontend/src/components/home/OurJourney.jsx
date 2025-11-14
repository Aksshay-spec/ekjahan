import React from "react";

export const OurJourney = () => {
  const journeyData = [
    { year: "2012", text: "SAPTAAR launched", left: true },
    { year: "2015", text: "FMCG division introduced", left: false },
    { year: "2018", text: "1M+ electrical units sold", left: true },
    { year: "2020", text: "2M+ FMCG packs distributed", left: false },
    { year: "2021", text: "Vendor retention hits 87%", left: true },
  ];

  return (
    <section className="relative w-full overflow-hidden py-16 text-center text-black">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="./images/back-vi.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10">
        <h2 className="text-3xl font-extrabold text-white">OUR JOURNEY</h2>
        <div className="h-1 w-24 bg-yellow-400 mx-auto my-3 rounded-full"></div>

        {/* Timeline code */}
        <div className="flex flex-col gap-8 items-center mx-auto mt-8 w-full">
          {journeyData.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center justify-center w-full mb-8 ${
                item.left ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Gradient-Box */}
              <div
                className={`relative p-6 text-base sm:text-lg font-semibold text-black rounded-2xl shadow-md ${
                  item.left
                    ? "bg-gradient-to-r from-indigo-500 to-pink-400"
                    : "bg-gradient-to-r from-yellow-200 to-pink-300"
                } w-[85%] sm:w-[600px] md:w-[700px] text-center mx-auto`}
              >
                {item.text}

                {/* Circle */}
                <div
                  className={`absolute top-1/2 -translate-y-1/2 flex items-center justify-center w-24 h-24 rounded-full text-white font-extrabold text-2xl shadow-lg ${
                    item.left
                      ? "-left-12 bg-[#ff6b6b]"
                      : "-right-12 bg-[#2ad4c4]"
                  }`}
                  //   style={{
                  //     transform: "translateY(-50%)",
                  //   }}
                >
                  {item.year}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
