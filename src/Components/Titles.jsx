import React from "react";
import PropTypes from "prop-types";

export default function Titles({ title }) {
  return (
    <div className="flex items-center py-2 justify-center gap-5 text-slate-300">
      <div className="text-xl lg:text-4xl text-nowrap">{title}</div>
      <div className="h-2 rounded-lg bg-custom-cyan w-full"></div>
    </div>
  );
}

Titles.propTypes = {
  title: PropTypes.string.isRequired,
};
