import React from "react";

import { FaGithub } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";

import Footer from "./Footer";

const Projects = ({ name, link, hosted, image, tech }) => {
  return (
    <div
      className="max-w-[100%] relative flex items-center justify-center h-full w-full shadow-xl shadow-gray-800 rounded-xl group hover:bg-gradient-to-b hover:scale-105 from-gray-700 to-[#14131a] ease-in-out duration-700"
    >
      <img
        className="w-full h-full rounded-xl group-hover:opacity-[0.1] object-cover transition-all duration-700 "
        src={image}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] hover:scale-105 transition-all duration-300">
        <h2 className="text-md md:text-xl md:mt-10px sm:mt-1px lg:mt-[5px] lg:text-3xl lg:mb-[20px] font-bold text-white tracking-wider text-center">
          {name}
        </h2>
        <div className="">
          <p className="text-sm pb-4 pt-22 text-white text-center line-clamp-2">
            {tech.map((techItem, index) => (
              <React.Fragment key={index}>
                {techItem}
                {index !== tech.length - 1 && ", "}
              </React.Fragment>
            ))}
          </p>
          <div className="flex flex-row items-center justify-center gap-2 text-[10px] sm:text-[14px]">
            {hosted.yes && (
              <a href={hosted.link} target="_blank" rel="noopener noreferrer" className="">
                <div className="p-1 sm:p-2 flex justify-center items-center rounded-3xl sm:rounded-lg bg-white text-gray-700 font-bold cursor-pointer hover:scale-110 ease-in duration-200 gap-1 sm:gap-2">
                  <MdOutlineWeb className="w-[30px] h-[30px]" />
                  <p className="whitespace-nowrap">Hosted here</p>
                </div>
              </a>
            )}
            <a href={link} className="">
              <div className="p-1 sm:p-2 flex justify-center items-center rounded-3xl sm:rounded-lg bg-white text-gray-700 font-bold cursor-pointer hover:scale-110 ease-in duration-200 gap-1 sm:gap-2">
                <FaGithub className="w-[30px] h-[30px]" />
                <p className="whitespace-nowrap">Source Code</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
