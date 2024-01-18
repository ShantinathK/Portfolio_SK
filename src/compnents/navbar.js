import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineHome, AiOutlineMail, AiOutlineProject } from "react-icons/ai";
// import { GrProjects } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";

const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const location = useLocation();

  const Navigation = React.useMemo(
    () => [
      { name: "Home", path: "/", icon: <AiOutlineHome size={30} /> },
      { name: "Skills", path: "/SkillsPage", icon: <GiSkills size={30} /> },
      {
        name: "Project",
        path: "/ProjectPage",
        icon: <AiOutlineProject size={30} />,
      },
      // { name: "Education", path: "/EducationPage", icon: <BsPerson size={30} /> },
      // { name: "Experience", path: "/ExperiencePage", icon: <BsPerson size={30} /> },
      { name: "Resume", path: "/Resume", icon: <BsPerson size={30} /> },
      { name: "Contact", path: "/contact", icon: <AiOutlineMail size={30} /> },
    ],
    []
  );

  useEffect(() => {
    const pathname = location.pathname;
    const matchedOption = Navigation.find((item) => item.path === pathname);
    setSelectedOption(matchedOption ? matchedOption.name : null);
  }, [location, Navigation]);

  return (
    <div>
      {/* <style>
        {`  #back{
            background: linear-gradient(100deg, hsl(143, 21%, 39%), hsl(91, 38%, 27%), rgb(13, 109, 77), hwb(143 1% 61%));
            background-size: 800% 800%;
	          animation: gradient 15s ease infinite;
        }
        `}
      </style> */}
      {/* className=" fixed top-[90%] translate-y-[-50%] ml-5 z-20 md:hidden" */}
      {/* <div className="fixed w-full bottom-[2%] z-20 md:hidden"> */}
      <div className="fixed w-full bottom-[0%] h-20 z-20 flex justify-center items-center md:hidden" id="back">
        <div className="flex flex-row justify-center items-center">
          <div className="left-0 flex flex-row gap-1 bg-white/50 border rounded-full justify-start items-center text-2xl font-bold">
            {Navigation.map((item) => {
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`${
                    selectedOption === item.name
                      ? "bg-white/30 text-gray-800"
                      : ""
                  } rounded-full shadow-2xl drop-shadow-2xl text-gray-200 hover:text-gray-800 m-1 p-2 cursor-pointer hover:scale-[1.1] ease-in duration-100`}
                >
                  {item.icon}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      {/* Desktop View  */}
      <div className="hidden w-full md:visible md:flex md:justify-between md:items-center ">
        <div className="m-3 gap-4 flex justify-between items-center bg-white/30 rounded-full backdrop-blur-xl ring-transparent">
          {Navigation.map((item) => {
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`${
                  selectedOption === item.name
                    ? "bg-white/30 text-gray-800"
                    : ""
                } m-2 p-2 px-4 font-medium rounded-3xl text-gray-200 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-transparent`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
