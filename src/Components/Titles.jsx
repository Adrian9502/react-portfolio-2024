import React from "react";
import PropTypes from "prop-types";

export default function Titles({ title }) {
  return (
    <div className="flex items-center justify-center p-3 gap-5 text-slate-300">
      <div className="h-1 rounded-lg bg-custom-cyan flex-1"></div>
      <div className="text-xl lg:text-4xl whitespace-nowrap">{title}</div>
      <div className="h-1 rounded-lg bg-custom-cyan flex-1"></div>
    </div>
  );
}

Titles.propTypes = {
  title: PropTypes.string.isRequired,
};
