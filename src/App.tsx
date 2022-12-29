import React from 'react';
import './App.css';

import Header from "./components/Header";
import Home from "./sections/Home";
import About from "./sections/About";
import DegreeWork from "./sections/DegreeWork";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";
import Divider from "./components/Divider";

function App() {
  return (
    <div className="App">
        <Header />
        <Home />
        <Divider />
        <About />
        <Divider />
        <DegreeWork />
        <Divider />
        <Projects />
        <Divider />
        <TechStack />
        <Divider />
    </div>
  );
}

export default App;
