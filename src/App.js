import { Helmet } from "react-helmet";
import { BrowserRouter as Router } from "react-router-dom";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SkillAll from "./components/SkillAll";
import Skills from "./components/Skills";

function App() {
  return (
    <Router>
      <Helmet>
        <title>Rohit Ludbe</title>
        <meta
          name="description"
          content="My name is Rohit Ludbe and I am a Web and Android developer from Mumbai."
        />
        <meta
          name="keywords"
          content="Rohit Ludbe ,Portfolio, Personal Website, Resume, Web Developer, Android Developer, ReactJS"
        />
      </Helmet>
      <div className="App">
        <Navbar />
        <Hero />
        <Projects />
        <SkillAll />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
