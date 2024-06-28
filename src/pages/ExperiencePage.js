import React from "react";
import Experience from "../compnents/Experience";

const ExperiencePage = () => {
  const data = [
    {
      year: 2024,
      title: "Front-End Engineer",
      company: "Nagarro Software PVT LTD",
      duration: "Present",
      details: "Working on different modules under banking industry",
    },
    {
      year: 2021,
      title: "Front-End Web Developer",
      company: "Infosys Limited",
      duration: 2024,
      details: "Working on different modules under retail industry",
    },
  ];
  return (
    <div className="md:mt-10">
      <style>
        {`
          #work::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      <div className="max-w-[1440px] overflow-y-auto md:overflow-none h-[32vh] md:h-screen p-4 flex flex-col justify-center items-center">
        <h1 className="md:text-4xl text-2xl m-3 text-slate-900 hover:text-slate-800 drop-shadow-2xl font-bold text-center underline">
          Work Experience
        </h1>
        <div className="overflow-y-auto md:overflow-none h-[100%] md:h-[80%]">
          <div className="flex flex-col flex-wrap items-start justify-center mt-3 gap-8 m-7">
            {data.map((item, idx) => (
              <Experience
                key={idx}
                title={item.title}
                year={item.year}
                company={item.company}
                duration={item.duration}
                details={item.details}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">{/* <h6></h6> */}</div>
    </div>
  );
};

export default ExperiencePage;
