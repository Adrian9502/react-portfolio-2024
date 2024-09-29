import PropTypes from "prop-types";
import { skillsData, secondarySkills } from "../Skills/skillsData";

function SkillsContainer({ svg, text }) {
  return (
    <div className="flex flex-col items-center gap-2 hover:-translate-y-2 transition-all duration-300 text-slate-300 hover:text-custom-cyan">
      <div
        dangerouslySetInnerHTML={{ __html: svg }}
        className="w-11 h-11 md:w-12 md:h-12 lg:w-13 lg:h-13 shadow-sm shadow-custom-cyan/80 bg-slate-800 rounded-md p-2 transition-all duration-300 hover:scale-105"
      />
      <span className="text-xs lg:text-sm transition-all duration-300">
        {text}
      </span>
    </div>
  );
}

SkillsContainer.propTypes = {
  svg: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default function Skills() {
  return (
    <section
      id="Skills"
      className="p-2 overflow-hidden flex flex-col lg:flex-row items-center justify-around sm:p-14 mb-32 text-slate-300"
    >
      {/* Title section */}
      <div className="flex-1 flex flex-col items-center text-wrap p-5 sm:p-1 justify-center gap-5 font-semibold text-slate-300 relative">
        {/* Cyan divider */}
        <div className="h-1.5 md:h-2 rounded-lg bg-custom-cyan w-full"></div>
        {/* Title */}
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 lg:mb-10 lg:tracking-wide">
          These are the skills I&apos;ve gained in my web development journey.
        </div>
        {/* Doodles */}
        <div>
          {/* line curve */}
          <img
            src="/Home/doodle1.png"
            className="absolute opacity-40 md:right-24  right-1/4 lg:top-52 lg:left-2/4 rotate-12 bottom-7 w-20 lg:w-32 xl:top-40"
            alt="doodle1"
          />
          {/* keyboard */}
          <img
            src="/keyboard.png"
            className="absolute opacity-40 xl:left-3/4 xl:top-32 right-0 bottom-10 md:top-16 md:right-3  lg:top-24 -rotate-45 md:w-20 lg:w-32 w-24"
            alt="keyboard"
          />
          {/* laptop */}
          <img
            src="/lappy.png"
            className="absolute opacity-40 hidden sm:block md:block lg:block xl:left-1/4 left-[45%] bottom-2 md:-bottom-2 lg:top-44 lg:left-10 rotate-12 w-14 lg:w-20"
            alt="laptop"
          />
          <img
            src="/stars.png"
            className="absolute opacity-40 left-1/4 lg:top-48 lg:left-40 md:-bottom-2 xl:left-10 bottom-2 w-10 lg:w-14"
            alt="stars"
          />
        </div>
      </div>

      {/* Skills section */}
      <div className="flex-1 flex flex-col gap-8 p-2">
        {/* Primary Skills */}
        <div className="flex gap-5 flex-wrap items-center justify-center">
          {skillsData.map((skill, index) => (
            <SkillsContainer key={index} svg={skill.svg} text={skill.text} />
          ))}
        </div>

        {/* Secondary Skills */}
        <div className="text-sm sm:text-base text-center">
          I also learned the basics of these technologies through school and
          personal projects.
        </div>
        <div className="flex gap-5 flex-wrap items-center justify-center">
          {secondarySkills.map((skill, index) => (
            <SkillsContainer key={index} svg={skill.svg} text={skill.text} />
          ))}
        </div>
      </div>
    </section>
  );
}
