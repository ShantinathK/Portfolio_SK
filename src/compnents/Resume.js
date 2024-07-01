import React from "react";
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
      {/* updated Nav */}
      {/* <div className="max-w-[1440px] overflow-y-auto md:overflow-y-hidden h-[87vh] md:h-screen p-4 flex flex-col justify-center items-center"> */}
      <div className="max-w-[1440px] md:overflow-y-hidden h-[88vh] md:h-screen  flex flex-col justify-center items-center">
        {/* <div className="overflow-y-auto md:overflow-y-hidden h-[100%] md:h-[90%]  flex flex-col md:flex-row" id="Resume"> */}
        <div
          className="md:overflow-y-hidden h-[100%] md:h-[90%] flex flex-col md:flex-row"
          id="Resume"
        >
          <ExperiencePage />
          <EductionPage />
        </div>
      </div>
    </div>
  );
};

export default Resume;
