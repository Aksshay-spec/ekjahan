import React, { useEffect, useState } from "react";

const SkuSection = () => {
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
    const interval = setInterval(
      () => setSkuIndex((prev) => (prev + 1) % totalSku),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-8 text-center">
      <h3 className="mt-12 inline-block text-black px-3 py-1 font-semibold rounded relative after:content-[''] after:block after:w-[90%] after:h-[8px] after:bg-yellow-400 after:mt-1 after:rounded-full after:mx-auto">
        Every Count Tells Our Story
      </h3>

      <div className="mt-8 relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${(skuIndex * 100) / visibleSkuCount}%)`,
            width: `${(totalSku / visibleSkuCount) * 100}%`,
          }}
        >
          {skuItems.map((item, i) => (
            <div key={i} className="w-[25%] flex-shrink-0 flex justify-center">
              <div className="bg-blue-100 mr-2 text-black rounded-lg shadow p-4 w-[150px] sm:w-[180px]">
                <h2 className="text-3xl font-bold">{item}</h2>
                <p className="text-sm font-semibold mt-1">Electrical SKUs</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkuSection;
