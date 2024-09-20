import React from "react";

export default function Titles({ title }) {
  return (
    <div className="text-4xl flex items-center justify-center p-3 gap-5 text-slate-300">
      <span className="text-nowrap">{title}</span>{" "}
      <img src="/line doodle.png" />{" "}
    </div>
  );
}
