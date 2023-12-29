import React from "react";
import Navbar from "../compnents/navbar";

const ProjectPage = () => {
  const data = [
    {
      name: "Rozilla RealEstate",
      link: "https://github.com/vishnuarjun512/mern-RealEstate",
      tech: ["MERN Stack", "TailwindCSS", "Redux", "Firebase"],
      // image: rozilla,
      hosted: {
        yes: true,
        link: "https://rozilla-realestate.onrender.com/",
      },
    },
    {
      name: "Image Gallery",
      link: "https://github.com/vishnuarjun512/unsplash-image-gallery-ReactJS",
      tech: ["ReactJS", "TailwindCSS", "Unsplash API"],
      // image: imageGallery,
      hosted: {
        yes: false,
        link: "",
      },
    },
    {
      name: "MTVx Movies",
      link: "https://github.com/vishnuarjun512/Movie-Website/tree/dev",
      tech: ["ReactJS", "TailwindCSS", "MovieListAPI"],
      // image: mtvx,
      hosted: {
        yes: false,
        link: "",
      },
    },
    {
      name: "Plantii Ecommerce",
      link: "https://github.com/vishnuarjun512/Plant_Ecommerce",
      tech: ["ReactJS", "SASS"],
      // image: planti,
      hosted: {
        yes: false,
        link: "",
      },
    },
    {
      name: "Data Analytics",
      link: "https://github.com/vishnuarjun512/Data-Finance-React",
      tech: ["ReactJS", "Tailwind"],
      // image: DA,
      hosted: {
        yes: false,
        link: "",
      },
    },
    {
      name: "Portfolio",
      link: "https://github.com/vishnuarjun512/portfolio",
      tech: ["ReactJS", "TailwindCSS"],
      // image: portfolio,
      hosted: {
        yes: true,
        link: "https://vishnuarjun512.github.io/portfolio/",
      },
    },
    {
      name: "Simple Calculator",
      link: "https://github.com/vishnuarjun512/Calculator",
      tech: ["Javascript"],
      // image: calculator,
      hosted: {
        yes: true,
        link: "https://vishnuarjun512.github.io/Calculator/",
      },
    },
  ];

  return (
    <div>
      <div className="z-20 md:fixed md:w-[100%] md:flex md:justify-around md:items-center">
        <div className="flex justify-center item-center">
          <h1 className="font-bold text-3xl first-letter:text-red-900">
            Shantinath K.
          </h1>
        </div>
        <Navbar />
      </div>
      <div></div>
    </div>
  );
};

export default ProjectPage;
