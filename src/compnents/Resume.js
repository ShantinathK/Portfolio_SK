import React from "react";
import Navbar from "./navbar";
import EductionPage from "../pages/EductionPage";
import ExperiencePage from "../pages/ExperiencePage";

const Resume = () => {
  return (
    <div>
      <style>
      {`
          @media screen and (min-width: 768px) {
          ::-webkit-scrollbar {
          display: none;
          }
        }
        `}
      </style>
      <div className="z-20 bg-inherit md:fixed md:w-[100%] md:flex md:justify-around md:items-center">
        <div className="flex justify-center item-center">
          <h1 className="font-bold text-2xl lg:text-3xl first-letter:text-red-900">
            Shantinath K.
          </h1>
        </div>
        <div>
          <Navbar />
        </div>
      </div>
      {/* <div className="max-w-[1440px] overflow-y-auto md:overflow-y-hidden h-[87vh] md:h-screen p-4 flex flex-col justify-center items-center"> */}
      <div className="max-w-[1440px] md:overflow-y-hidden h-[88vh] md:h-screen  flex flex-col justify-center items-center">
        {/* <div className="overflow-y-auto md:overflow-y-hidden h-[100%] md:h-[90%]  flex flex-col md:flex-row" id="Resume"> */}
        <div className="md:overflow-y-hidden h-[100%] md:h-[90%] flex flex-col md:flex-row" id="Resume">
          <ExperiencePage />
          <EductionPage />
        </div>
      </div>
    </div>
  );
};

export default Resume;
