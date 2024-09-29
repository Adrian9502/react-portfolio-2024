import Introduction from "../Home/Introduction";
import About from "../Home/About";
import Projects from "../Home/Projects";
import Header from "../Header.jsx";
import { useRef } from "react";
import Certification from "../Home/Certification.jsx";
import Skills from "../Home/Skills.jsx";
import Footer from "../Footer.jsx";
import Contact from "../Home/Contact.jsx";
export default function Home() {
  return (
    <main className="relative sm:px-5 md:px-14 lg:px-16 xl:px-52">
      <Header />
      <Introduction />
      {/* <About />
      <Skills />
      <Projects />
      <Certification />
      <Contact />
      <Footer /> */}
    </main>
  );
}
