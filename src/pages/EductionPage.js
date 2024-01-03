import React from "react";

import Education from "../compnents/education";

const EductionPage = () => {
  const data = [
    {
      year: "2018 - 2021",
      title: "Bachelor of Computer Applications",
      college: "KLE's RLS Insitute of BCA",
      details: "Specialized with Cloud Computing",
    },
    {
      year: "2016 - 2018",
      title: "PUC",
      college: "Sukruti PU Science college",
      details: "Science - PCMB",
    },
    {
      year: "2015 - 2016",
      title: "SSLC",
      college: "Holy Cross Convent School",
      details: "State-Board",
    },
  ];
  return (
    <div className="md:mt-10">
      <style>
        {`
          @media screen and (min-width: 768px) {
          #education::-webkit-scrollbar {
          display: none;
          
          } 
        }
        `}
      </style>
      <div className="max-w-[1440px] overflow-y-auto md:overflow-none h-[55vh] md:h-screen p-4 flex flex-col justify-center items-center">
      {/* <div className="max-w-[1440px] overflow-y-auto md:overflow-none h-full md:h-[100%] p-4 flex flex-col justify-center items-center"> */}
        <h1 className="md:text-4xl m-3 text-2xl text-slate-900 hover:text-slate-800 drop-shadow-2xl font-bold text-center underline">
          Education
        </h1>
        <div
          className=" overflow-y-auto md:overflow-none h-[100%] md:h-[80%] rounded-md md:rounded-none" 
          id="education"
        >
          <div className="flex flex-col flex-wrap items-start justify-center mt-3 gap-8 m-7">
            {data.map((item, idx) => (
              <Education
                key={idx}
                title={item.title}
                year={item.year}
                college={item.college}
                details={item.details}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <h6>.</h6>
      </div>
    </div>
  );
};

export default EductionPage;
