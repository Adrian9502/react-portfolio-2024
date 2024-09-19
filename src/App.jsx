import Certification from "./Components/Certification";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { GlowMouse } from "./GlowMouse";

function App() {
  return (
    <main className="px-80">
      <GlowMouse />
      <Header />
      <Home />
    </main>
  );
}

export default App;
