import Titles from "../Titles";
import projectsData from "../Projects/projectsData";
import { FiGithub, FiLink } from "react-icons/fi";
import ProjectHeader from "../Projects/ProjectHeader";
import Footer from "../Footer";

export default function AllProjects() {
  return (
    <section className="xl:px-40 lg:px-14">
      <ProjectHeader />
      <div className="p-14 flex flex-col items-center">
        <div className="relative text-4xl lg:text-6xl text-center font-semibold tracking-wider text-custom-cyan">
          <span>
            Projects
            <img
              src="/Home/doodle9.png"
              className="absolute right-0 -top-5 w-12"
              alt="code icon"
            />
          </span>
        </div>
        <div className="text-base lg:text-lg mt-2 text-center text-slate-400">
          These projects reflect my passion for learning and commitment to web
          development.
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-10">
          {projectsData.map((project, index) => {
            const randomNumber = Math.floor(Math.random() * 6) + 1;
            return (
              <div
                key={index}
                className="text-white bg-slate-950 lg:bg-slate-950/30 shadow-lg flex flex-col p-3 hover:-translate-y-2 transition-all rounded-md"
              >
                {/* thumbnail */}
                <div className="rounded-md p-2 border border-custom-cyan transition-all mb-1">
                  <a
                    href={project.siteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="rounded-md">
                      <div
                        className={`pattern-${randomNumber} h-[182px] rounded-md p-4`}
                      >
                        <img
                          src={project.img}
                          alt={project.title}
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                    </div>
                  </a>
                </div>
                <div className="text-xs text-custom-cyan/80">
                  Project #{index + 1}
                </div>
                {/* title and links */}
                <div className="w-full flex  items-center justify-between mb-2">
                  <h3 className="w-full text-base text-center lg:text-lg my-2 font-semibold">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.siteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-custom-cyan transition-all hover:-translate-y-1"
                    >
                      <FiLink />
                    </a>
                    <a
                      href={project.siteCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-custom-cyan transition-all hover:-translate-y-1"
                    >
                      <FiGithub />
                    </a>
                  </div>
                </div>
                <div className="flex flex-col flex-1 justify-between">
                  {/* description */}
                  <p className="text-slate-200 tracking-wide leading-snug font-light text-xs text-center lg:text-sm  mb-4">
                    {project.description}
                  </p>
                  {/* tech stack */}
                  <div className="flex gap-3 flex-wrap items-center justify-center mb-4">
                    {project.techStack.map((tech, idx) => (
                      <div
                        key={idx}
                        className="flex bg-slate-800 shadow-lg transition-all hover:-translate-y-1 text-custom-cyan rounded-md p-2 items-center gap-1"
                      >
                        <tech.icon className="text-lg" />
                        <span className="text-sm">{tech.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </section>
  );
}
