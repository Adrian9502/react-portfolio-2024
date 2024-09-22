import About from "./Components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Certification from "./Components/Certification";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { GlowMouse } from "./GlowMouse";
import Projects from "./Components/Projects";
import { useRef } from "react";

function App() {
  // Create a reference for the About section
  const aboutRef = useRef(null);

  return (
    <main className="px-5 relative md:px-14 xl:px-52 ">
      <GlowMouse />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <About ref={aboutRef} />
      <Projects />
    </main>
  );
}

export default App;
