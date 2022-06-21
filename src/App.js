import { BrowserRouter as Router } from "react-router-dom";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
