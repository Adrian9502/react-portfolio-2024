import Header from "./Components/Header";
import Home from "./Components/Home";
import { GlowMouse } from "./GlowMouse";

function App() {
  return (
    <main className="px-44">
      <GlowMouse />
      <Header />
      <Home />
    </main>
  );
}

export default App;
