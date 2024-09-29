import React from "react";
import PropTypes from "prop-types";

export default function Titles({ title }) {
  return (
    <div className="flex flex-col items-center px-2 py-2 justify-center gap-5 font-semibold text-slate-300">
      {/* Title text */}
      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">{title}</div>

      {/* Cyan divider with responsive width */}
      <div className="h-1.5 md:h-2 rounded-lg bg-custom-cyan w-full"></div>
    </div>
  );
}

Titles.propTypes = {
  title: PropTypes.string.isRequired,
};
