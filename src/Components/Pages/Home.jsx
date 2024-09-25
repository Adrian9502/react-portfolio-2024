import Introduction from "../Home/Introduction";
import About from "../Home/About";
import Projects from "../Home/Projects";
import Header from "../Header.jsx";
import { useRef } from "react";
import Certification from "../Home/Certification.jsx";
import Skills from "../Home/Skills.jsx";
export default function Home() {
  const aboutRef = useRef(null);
  return (
    <main className="px-5 relative md:px-14 lg:px-16 xl:px-52">
      <Header />
      <Introduction />
      <About ref={aboutRef} />
      <Projects />
      <Certification />
      <Skills />
    </main>
  );
}
