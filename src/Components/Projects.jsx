import React from "react";
import Titles from "./Titles";
import { useEffect } from "react";
import projectsData from "./Projects/projectsData";
import "./Projects/projects.css";
import { FiGithub, FiLink } from "react-icons/fi";
import { initializeEyeMovement } from "./Projects/eye.js";
export default function Projects() {
  useEffect(() => {
    initializeEyeMovement(); // Call the function to set up the mousemove event
  }, []);
  return (
    <div className="p-14 move-area">
      <Titles title="Here’s a glimpse of my projects." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {projectsData.slice(0, 6).map((project, index) => {
          return (
            <div key={index} className="text-white rounded-md">
              {/* thumbnail */}
              <div className="hover:-translate-y-2 hover:shadow-xl rounded-md p-2 border transition-all mb-3">
                <a
                  href={project.siteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className=" rounded-md ">
                    <div className={`pattern-${index + 1} rounded-md p-4`}>
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-contain rounded-md"
                      />
                    </div>
                  </div>
                </a>
              </div>
              {/* title and links */}
              <div className="w-full flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <div className="flex items-center gap-3">
                  <a
                    href={project.siteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-custom-cyan hover:text-custom-cyan/80"
                  >
                    <FiLink />
                  </a>
                  <a
                    href={project.siteCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-custom-cyan hover:text-custom-cyan/80"
                  >
                    <FiGithub />
                  </a>
                </div>
              </div>
              {/* description */}
              <p className="text-slate-400 font-light text-sm leading-tight mb-4">
                {project.description}
              </p>
              {/* tech stack */}
              <div className="flex gap-3 flex-wrap mb-4">
                {project.techStack.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex bg-cyan-950 shadow-lg text-white font-light rounded-md p-2 items-center gap-1"
                  >
                    <tech.icon className="text-lg" />
                    <span className="text-sm">{tech.text}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-20 flex flex-col items-center gap-10 justify-center text-slate-300">
        <div className="text-center">
          <div>Hey, I have more!</div>
          <div>I&apos;ve created more than 20 projects to practice</div>
        </div>
        <button className="flex items-center text-nowrap gap-2 justify-center rounded-lg text-2xl px-10 py-2 text-custom-cyan border border-custom-cyan">
          View All
          <div className="container flex gap-1">
            <div className="eye"></div>
            <div className="eye"></div>
          </div>
        </button>
      </div>
    </div>
  );
}
