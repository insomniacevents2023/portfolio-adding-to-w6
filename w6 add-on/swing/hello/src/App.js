import './App.css';
import AboutSeries from './components/Add On/AboutSeries';
import CreateContent from './components/Add On/CreateContent';
import React, { useState } from "react"

const seriesInfo = {

  "series":"Entourage",
  "year": "2004",
  "seasons":"Eight",
  "character":"Turtle"
}

function App() {
  var [displayComponent, setDisplayComponent] = useState(-1)
  var components = [<AboutSeries data={seriesInfo}></AboutSeries>,<CreateContent data={seriesInfo}></CreateContent>]

  return (
    (displayComponent !== -1 ?
    <div className="App">
      {displayComponent !== -1 ? components[displayComponent] : undefined}
      <p>Return to the Main Page: <button onClick={() => setDisplayComponent(-1)}>Return</button></p>
      </div>
    :
    <div className="App">
      <h1>What is your Favorite Series?</h1>
      <p>Explore the options below to find out!</p>
      <p>
      <button onClick={() => setDisplayComponent(0)}>What Series Is It Anyways? </button>
      </p>
      <p>
      <button onClick={() => setDisplayComponent(1)}>Additonal Content</button>
      </p>
      </div>
    )
  );
} 

export default App;
