import Titles from "../Titles";
import CodeDisplay from "../About/CodeDisplay";
export default function About() {
  return (
    <div id="about" className="flex flex-col p-14">
      <Titles title={"Discover more about my passions and interests."} />
      <div className="flex flex-col lg:flex-row pointer-events-none items-center justify-around mt-10">
        <div className="p-10 relative leading-10 text-center text-xl lg:text-2xl text-slate-300">
          My name is <br />
          <div className="text-custom-cyan text-6xl font-bold">
            John Adrian Bonto
          </div>
          <div className="text-base">
            Passionate about coding, web design and development, with a keen
            interest in cycling.
          </div>
        </div>
        <CodeDisplay />
      </div>
    </div>
  );
}
