import React from "react";
import Titles from "./Titles";
import CodeDisplay from "./About/CodeDisplay";
export default function About() {
  return (
    <div className="flex flex-col">
      <Titles title={"Discover more about my passions and interests."} />

      <div className="flex pointer-events-none items-center justify-around mt-10">
        <div className="p-10 relative leading-10 text-center text-2xl text-slate-300">
          My name is <br />
          <div className="  text-custom-cyan text-6xl font-bold">
            John Adrian Bonto
          </div>
          <span className="text-base">
            Passionate about coding, web design and development, with a keen
            interest in cycling.
          </span>
        </div>
        <CodeDisplay />
      </div>
    </div>
  );
}
