import React from "react";
import { FaHtml5, FaCss3, FaReact, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPhp } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import PropTypes from "prop-types";

function TechStackIcon({ Icon, iconText }) {
  return (
    <span className="bg-indigo-700 rounded-lg flex gap-2  items-center text-sm p-2">
      <Icon size={25} />
      {iconText}
    </span>
  );
}
TechStackIcon.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  iconText: PropTypes.string.isRequired,
};
function SkillsContainer({ Icon, text }) {
  return (
    <div
      className="bg-indigo-700 p-4 rounded-lg flex items-center justify-center gap-2 shadow-lg"
      aria-label={text}
    >
      <Icon color="white" size={30} />
      <span className="text-base font-medium">{text}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <div>
      <div className="flex flex-wrap border-4 border-transparent bg-slate-900/30 glow:border-indigo-600 glow:bg-indigo-900/10 py-4 px-6 gap-4 rounded-lg mb-10">
        <SkillsContainer Icon={FaHtml5} text={"HTML"} />
        <SkillsContainer Icon={FaCss3} text={"CSS"} />
        <SkillsContainer Icon={IoLogoJavascript} text={"JavaScript"} />
        <SkillsContainer Icon={FaReact} text={"React"} />
        <SkillsContainer Icon={RiTailwindCssFill} text={"Tailwind"} />
        <SkillsContainer Icon={FaBootstrap} text={"Bootstrap"} />
        <SkillsContainer Icon={SiPhp} text={"PHP"} />
        <SkillsContainer Icon={DiMysql} text={"MySQL"} />
      </div>
    </div>
  );
}
