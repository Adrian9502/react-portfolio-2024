import PropTypes from "prop-types";
import skillsData from "../Skills/skillsData";
function SkillsContainer({ svg, text }) {
  return (
    <div className="flex hover:-translate-y-1 transition-all text-slate-400 hover:text-custom-cyan flex-col items-center gap-1">
      <div
        dangerouslySetInnerHTML={{ __html: svg }}
        className="w-8 h-8 lg:w-11 lg:h-11"
      />{" "}
      <span className="text-xs">{text}</span>
    </div>
  );
}

SkillsContainer.propTypes = {
  svg: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default function Skills() {
  return (
    <div id="skills" className="p-14 text-slate-300">
      <div className="h-1.5 bg-custom-cyan w-full rounded-lg mb-8"></div>
      <div className="flex flex-col lg:flex-row  gap-3 lg:gap-10 ">
        <div className="text-xl sm:text-2xl lg:text-3xl relative font-medium text-start mb-6">
          These are my skills that I&apos;ve learned throughout my journey in
          web development.
          <img
            src="/Home/doodle1.png"
            className="absolute md:top-16 xl:left-2/4 right-0 -top-4 lg:top-32 lg:left-2/4 rotate-12 bottom-16 w-20"
            alt="doodle1"
          />
          <img
            src="/keyboard.png"
            className="absolute  xl:left-3/4 xl:top-24 right-0 -bottom-4 md:-bottom-12 md:right-32 lg:right-4 lg:top-20 -rotate-45 md:w-16 w-24"
            alt="keyboard"
          />
          <img
            src="/lappy.png"
            className="absolute hidden sm:block md:block lg:block xl:left-0 xl:top-24 left-[55%] bottom-2 md:left-2/4 md:top-16 lg:top-32 top-20 lg:left-10 rotate-12 w-14 lg:w-20"
            alt="laptop"
          />
          <img
            src="/stars.png"
            className="absolute xl:left-1/4 xl:top-24 left-[35%] lg:top-32 lg:left-40 md:-bottom-12 md:left-10 -bottom-10 w-10 lg:w-14"
            alt="stars"
          />
        </div>
        <div className="flex flex-wrap gap-6 p-5 ">
          {skillsData.map((skill, index) => (
            <SkillsContainer key={index} svg={skill.svg} text={skill.text} />
          ))}
        </div>
      </div>
    </div>
  );
}
