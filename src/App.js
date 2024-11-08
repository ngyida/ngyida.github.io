import './App.css'
import React from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Navbar from "./components/navBar";
import Projects from "./components/projects";
import Work from "./components/work";
import Testimonials from './components/testimonials';


function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar/>
      <About/>
      <Testimonials/>
      <Work/>
      <Projects/>
      <Contact/>
    </main>
  );
}

export default App;
