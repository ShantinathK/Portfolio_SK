import React from 'react'
import Navbar from '../compnents/navbar';

import Education from '../compnents/education'

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
    }
  ];
  return (
    <div>
      <style>
        {`
          #education::-webkit-scrollbar {
            display: none;
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
      <div className="max-w-[1440px] overflow-y-auto h-[87vh] md:h-screen  p-4 flex flex-col justify-center items-center">
        <div className=" overflow-y-auto h-[100%] md:h-[80%] " id="education">
          <h1 className="md:text-4xl text-2xl text-slate-900 hover:text-slate-800 drop-shadow-2xl font-bold text-center underline">
            Education
          </h1>
          <div className="flex flex-col flex-wrap items-center justify-center mt-10 gap-8 m-5">
            {data.map((item, idx) => (
              // <education key={idx} title={item.title} year={item.year} college={item.college} details={item.details} />
              <Education key={idx} title={item.title} year={item.year} college={item.college} details={item.details}/>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <h6>.</h6>
      </div>
    </div>
  )
}

export default EductionPage