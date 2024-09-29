import Titles from "../Titles";
import CodeDisplay from "../About/CodeDisplay";
export default function About() {
  return (
    <div id="About" className="flex relative flex-col sm:p-14">
      <Titles title={"Discover more about my passions and interests."} />
      <div className="flex flex-col 2xl:flex-row pointer-events-none items-center justify-around mt-10">
        <div className="p-10 relative text-center text-base sm:text-base md:text-lg lg:text-xl text-slate-300">
          My name is <br />
          <div className="text-custom-cyan text-3xl sm:text-4xl lg:text-6xl font-bold">
            John Adrian Bonto
          </div>
          <div className="text-sm lg:text-base">
            Passionate about coding, web design and development, with a keen
            interest in cycling.
          </div>
        </div>
        <CodeDisplay />
      </div>
    </div>
  );
}
