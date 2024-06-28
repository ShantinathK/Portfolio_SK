import React from "react";
// import Navbar from "./navbar";
// import Footer from "./Footer";

function Skills({ title, items }) {
  return (
    <div className="">
      {/* <div className="z-20 md:fixed md:w-[100%] md:flex md:justify-around md:items-center">
        <div className="flex justify-center item-center">
          <h1 className="font-bold text-3xl first-letter:text-red-900">
            Shantinath K.
          </h1>
        </div>
        <Navbar />
      </div> */}
      <div className="border-1 min-h-[170px] min-w-[300px] p-2 items-center justify-evenly flex flex-col rounded-3xl shadow-lg shadow-gray-800 border border-slate-400 bg-white/10 backdrop-blur-2xl ring-transparent">
        <h1 className="text-[#D8D9DA] sm:text-xl font-semibold">
          {title.toUpperCase()}
        </h1>
        <div className="flex flex-row flex-wrap items-center justify-center md:gap-4 gap-2 mt-[8px] mb-[2px]">
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center m-3 gap-1 ease-in-out duration-100"
              >
                <div className="p-3 relative group/item border-hidden shadow-t-none shadow-inner drop-shadow-2xl shadow-t-none rounded-lg bg-gradient-to-t from-blue-900">
                  <img
                    // className="w-[70px] rounded-lg h-[60px] md:translate-y-2 md:group-hover/item:translate-y-0 md:transition-all md:ease-in-out md:duration-300"
                    className="w-[70px] rounded-lg h-[60px] translate-y-2 group-hover/item:translate-y-0 transition-all md:ease-in-out duration-300"
                    src={item.source}
                    alt={item.name}
                  />
                  <div
                    // className={`md:group-hover/item:translate-y-1 -translate-y-2 flex-col items-center justify-center text-bold text-[15px] text-center md:transition-all opacity-100 md:opacity-0 md:group-hover/item:opacity-100 md:duration-150`}
                    className={`group-hover/item:translate-y-1 -translate-y-2 flex-col items-center justify-center text-bold text-[15px] text-center transition-all opacity-0 group-hover/item:opacity-100 duration-150`}
                  >
                    {/* <p className="text-[#F0F0F0] pt-3 md:pt-0">{item.name}</p> */}
                    <p className="text-[#F0F0F0]">{item.name}</p>
                    {/* <div className="flex justify-center">
                  {renderStars(item.level)}
                </div> */}
                  </div>
                </div>
              </div>
            );
          })}
          {items.source}
        </div>
      </div>

      {/* <div className="absolute w-full bottom-0">
        <Footer />
      </div> */}
    </div>
  );
}

export default Skills;
