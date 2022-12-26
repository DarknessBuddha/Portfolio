import React from 'react';
import './App.css';

import Header from "./components/Header";
import Home from "./sections/Home";
import About from "./sections/About";
import DegreeWork from "./sections/DegreeWork";

function App() {
  return (
    <div className="App">
        <Header />
        <Home />
        <hr className="divider"/>
        <About />
        <hr className="divider"/>
        <DegreeWork />
        <hr className="divider"/>
    </div>
  );
}

export default App;
