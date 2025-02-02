import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Titles from "../Titles.jsx";
import projectsData from "../Projects/projectsData.jsx";
import { FiGithub, FiLink } from "react-icons/fi";
import { initializeEyeMovement } from "../Projects/eye.js";
import { motion, useInView } from "framer-motion";

export default function Projects() {
  // Create a ref for the motion.div
  const ref = useRef(null);
  // Detect if in view with a threshold of 0.2 (20%)
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate("/all-projects");
  };

  useEffect(() => {
    initializeEyeMovement();
  }, []);

  return (
    <motion.section
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.4,
        delay: 0.5, // Delay each animation by 0.5 seconds
      }}
      ref={ref}
      id="Projects"
      className="p-3 sm:p-14 move-area"
    >
      <Titles title="Here’s a glimpse of my projects." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10">
        {projectsData.slice(0, 4).map((project, index) => {
          const randomNumber = Math.floor(Math.random() * 6) + 1;
          return (
            <motion.div
              ref={ref}
              key={index}
              className="text-white rounded-md"
              initial={{ opacity: 0, y: 20 }} // Initial state for animation
              animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate when in view
              transition={{
                duration: 0.4,
                delay: index * 0.5, // Delay each animation by 0.5 seconds
              }}
            >
              {/* thumbnail */}
              <div className="hover:-translate-y-2 hover:shadow-xl rounded-md p-2 border transition-all mb-3">
                <a
                  href={project.siteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="rounded-md">
                    <div className={`pattern-${randomNumber} rounded-md p-4`}>
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
                    className="text-custom-cyan hover:text-custom-cyan/60"
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
                    className="flex bg-slate-900 shadow-lg text-custom-cyan rounded-md p-2 items-center gap-1"
                  >
                    <tech.icon className="text-xl" />
                    <span className="text-sm">{tech.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="flex flex-col items-center gap-10 justify-center text-slate-300">
        <div className="text-center text-sm">
          <div>Hey, I have more!</div>
          <div>I&apos;ve created more than 20 projects to practice</div>
        </div>

        <button
          onClick={handleViewAll}
          className="flex items-center text-nowrap gap-2 justify-center rounded-lg sm:text-lg lg:text-2xl sm:px-5 px-3 lg:px-10 py-2 text-custom-cyan border border-custom-cyan"
        >
          View All
          <div className="container flex gap-1">
            <div className="eye"></div>
            <div className="eye"></div>
          </div>
        </button>
      </div>
    </motion.section>
  );
}
