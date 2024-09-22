import About from "./Components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Certification from "./Components/Certification";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { GlowMouse } from "./GlowMouse";

function App() {
  return (
    <main className="px-5 relative md:px-14 xl:px-52 ">
      <GlowMouse />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <About />
    </main>
  );
}

export default App;
