import About from "./Components/About";
import Certification from "./Components/Certification";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { GlowMouse } from "./GlowMouse";

function App() {
  return (
    <main className="px-5 relative md:px-14 lg:px-60 ">
      <GlowMouse />
      <Header />
      <Home />
      {/* <About /> */}
    </main>
  );
}

export default App;
