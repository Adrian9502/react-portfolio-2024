import { BrowserRouter as Router } from "react-router-dom";
import { GlowMouse } from "./GlowMouse";
import Pages from "./Components/Pages";

function App() {
  return (
    <Router>
      <GlowMouse />
      {/* pages containing Home component where all other components combined
          like about, projects, certification etc.
        */}
      <Pages />
    </Router>
  );
}

export default App;
