import './App.css';
import AboutSeries from './components/AboutMovie';
import CreateContent from './components/CreateContent';
import React, { useState } from "react"

const seriesInfo = {

  "series":"Entourage",
  "year": "2004",
  "seasons":"Eight",
  "character":"Turtle"
}

function App() {
  return (
    <div className="App">
     <Example show="Entourage" character="Turtle"/>
    </div>
  );
}

export default App;
