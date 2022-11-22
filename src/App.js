import React from "react";
import AboutMe from "./components/AboutMe/aboutMe";
import ContactMe from "./components/ContactMe/contactMe";
import Education from "./components/Education/education";
import WorkHistory from "./components/WorkHistory/workHistory";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Resume from "./components/Resume/resume";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/workHistory" element={<WorkHistory />} />
          <Route path="/contactMe" element={<ContactMe />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
    </Router>
  );
}

export default App;


