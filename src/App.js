import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'
import './App.css'
import 'bootstrap'
import React from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Navbar from "./components/navBar";
import Projects from "./components/projects";
import Work from "./components/work";


function App() {
  return (
    <div className="custom-bg-color">
      <Navbar/>
      <About/>
      <Work/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
