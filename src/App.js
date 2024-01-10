import './App.css'
import React from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Navbar from "./components/navBar";
import Projects from "./components/projects";
import Work from "./components/work";


function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar/>
      <About/>
      <Work/>
      <Projects/>
      <Contact/>
    </main>
  );
}

export default App;
