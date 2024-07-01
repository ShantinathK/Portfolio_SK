import React from "react";
import { TypeAnimation } from "react-type-animation";
import { HiOutlineDownload } from "react-icons/hi";
import { FaInstagramSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

import Navbar from "./navbar";
import Footer from "./Footer";
// import Img from "../Assets/ProfileID.jpg";
// import Contact from "./contact";

function Home() {
  return (
    <div className="">
      {/* updated Nav */}

      <div className="w-full flex justify-evenly items-center overflow-y-hidden h-[87vh] md:h-screen">
        {/* <div className="rounded-full ">
        <img
          className="w-[400px] h-[400px] rounded-full  object-cover object-center shadow-lg"
          src={Img}
          alt="Shantinath"
        />
      </div> */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-gray-800 text-2xl sm:text-5xl md:text-[50px] font-bold">
            Hi, I'm Shantinath Kashetti
          </h1>
          <h2 className="flex md:text-3xl text-2xl pt-4 text-gray-800 font-semibold">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Frontend Developer",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Tech Enthusiast",
                2000,
              ]}
              wrapper="div"
              speed={50}
              cursor={true}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex text-slate-900 justify-center gap-[10px] pt-6 max-w-[200px] w-full hover:scale-110 hover:shadow-gray-300 duration-100 ease-in">
            <a
              href="https://github.com/ShantinathK"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare className="md:w-[50px] md:h-[50px] w-[30px] h-[30px] cursor-pointer hover:scale-[1.1] hover:text-slate-200 hover:shadow-gray-300 duration-100 ease-in" />
            </a>
            <a
              href="https://www.linkedin.com/in/shantinath-k-47a8a71b7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="md:w-[50px] md:h-[50px] w-[30px] h-[30px] cursor-pointer hover:scale-[1.1] hover:text-slate-200 hover:shadow-gray-300 duration-100 ease-in" />
            </a>
            <a
              href="https://www.instagram.com/_shantinath_13045"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagramSquare className="md:w-[50px] md:h-[50px] w-[30px] h-[30px] cursor-pointer hover:scale-[1.1] hover:text-slate-200 hover:shadow-gray-300 duration-100 ease-in" />
            </a>
          </div>
          <div className="z-1 mt-5 rounded-full md:rounded-2xl shadow-sm cursor-pointer hover:scale-[1.2] ease-in duration-100">
            <a
              href="https://drive.google.com/file/d/1OzZFrpnpDzLf-DZDD9cTzNAraeLXLGHQ/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="text"
                className="flex rounded p-2 flex-row items-center bg-[#2b2b2c]  text-[#ffd65c] gap-1"
                onClick={() => {}}
              >
                <p className=" font-poppins text-white ">Resume</p>
                <HiOutlineDownload />
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* <div className="w-full h-screen">
      <Contact />
      </div> */}

      <div className="absolute w-full bottom-0">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
