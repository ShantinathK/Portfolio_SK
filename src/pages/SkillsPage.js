import React from "react";
import Navbar from "../compnents/navbar";
import Skills from "../compnents/Skills";

import html from "../Assets/html5.png";
import css from "../Assets/css.png";
import js from "../Assets/js.png";
import tailwind from "../Assets/tailwind.png";
import react from "../Assets/react.png";
import sql from "../Assets/sql.png";
import Python from "../Assets/python.png";
import git from "../Assets/git.png";
import github from "../Assets/github.png";

const SkillsPage = () => {
  const data = [
    {
      title: "Frontend",
      items: [
        { name: "HTML", source: html, level: 4 },
        { name: "CSS", source: css, level: 4 },
        { name: "JavaScript", source: js, level: 3 },
        { name: "React", source: react, level: 2 },
        { name: "Tailwind", source: tailwind, level: 4 },
      ],
    },
    {
      title: "Database",
      items: [{ name: "SQL", source: sql, level: 3 }],
    },
    {
      title: "Programming",
      items: [{ name: "Python", source: Python, level: 4 }],
    },
    {
      title: "Others",
      items: [
        { name: "Git", source: git, level: 4 },
        { name: "GitHub", source: github, level: 4 },
      ],
    },
  ];

  return (
    <div >
      <style>
        {`
          #skill::-webkit-scrollbar {
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
      <div className="max-w-[1440px] overflow-y-auto md:overflow-y-hidden h-[87vh] md:h-screen m-auto p-4 flex flex-col justify-center items-center">
        <div className="overflow-y-auto md:overflow-y-hidden h-[100%] md:h-[80%]" id="skill">
          <h1 className="md:text-4xl text-2xl text-slate-900 hover:text-slate-800 drop-shadow-2xl font-bold text-center underline">
            Skills
          </h1>
          <div className="flex flex-row flex-wrap items-center justify-center mt-10 gap-12 m-5 px-10">
            {data.map((item, idx) => (
              <Skills key={idx} title={item.title} items={item.items} />
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

export default SkillsPage;
