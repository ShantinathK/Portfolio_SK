import React from "react";
import Navbar from "../compnents/navbar";
import Image from "../Assets/Project/ImageGeneration.png";
import Portfolio from "../Assets/Project/Portfolio.png";
import BookLibrary from "../Assets/Project/BookLibrarby.png";
import HotStar from "../Assets/Project/HotStar clone.png";
import Projects from "../compnents/projects";

const ProjectPage = () => {
  const data = [
    {
      name: "Image Generation",
      link: "https://github.com/ShantinathK/Image-Generation-using-API",
      tech: ["React Js", "bulma CSS", "Unsplash API"],
      image: Image,
      hosted: {
        yes: true,
        link: "https://image-generation-tool.netlify.app/",
      },
    },
    {
      name: "Portfolio",
      link: "https://github.com/ShantinathK/Portfolio_SK",
      tech: ["ReactJS", "TailwindCSS", "React Router"],
      image: Portfolio,
      hosted: {
        yes: true,
        link: "https://portfolio-shantinath.netlify.app/",
      },
    },
    {
      name: "Hotstar Clone",
      link: "https://github.com/ShantinathK/HotstarDisney-clone",
      tech: ["Javascript"],
      image: HotStar,
      hosted: {
        yes: true,
        link: "https://hotstar-disney-clone.netlify.app/",
      },
    },
    {
      name: "Book Library",
      link: "https://github.com/ShantinathK/Fourth-app-Book-Library",
      tech: ["ReactJS", "Bulma CSS"],
      image: BookLibrary,
      hosted: {
        yes: false,
        link: "",
      },
    },
    
  ];

  return (
    <div>
      <style>
        {`
          #Project::-webkit-scrollbar {
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
      <div className="max-w-screen overflow-y-auto h-[87vh] md:h-screen md:pt-4 pt-4 md:p-0 flex flex-col justify-center items-center">
        <div
          className="md:mb-[0] mb-[5%] overflow-y-auto h-[100%] md:h-[100%] rounded md:mt-16 "
          id="Project"
        >
          <h1 className="md:text-4xl text-2xl text-slate-900 hover:text-slate-800 drop-shadow-6xl font-bold text-center underline">
            Projects
          </h1>
          <div className="grid md:grid-cols-2 gap-10 items-center justify-center drop-shadow-6xl my-10 gap:10 md:gap-16 m-5 px-10">
            {data.map((item, idx) => {
              return (
                <Projects
                  name={item.name}
                  link={item.link}
                  tech={item.tech}
                  image={item.image}
                  hosted={item.hosted}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
