import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // set up hooks
  const [data, setData] = React.useState(null);
  const [setup, setSetup] = React.useState(null);
  const [punch, setPunch] = React.useState(null);
  
  const jokeURL = 'https://official-joke-api.appspot.com/random_joke';

  React.useEffect(() => {
    fetch(jokeURL) // fetch from url
      .then((res) => res.json()) // get json response
      .then((jokeData) => { // function to use data
        console.log(jokeData);
        setSetup(jokeData.setup); // assign setup variable
        setPunch(jokeData.punchline); // deliver punchline
      });
  }, []);
  
  React.useEffect(() => {
    fetch('/api') // fetch from local api
      .then((res) => res.json()) // get json response
      .then((data) => {
        setData(data.message); // load message
      });
  }, []);
  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      
        <p>{setup}</p>
        <p>{punch}</p>
      </header>
    </div>
  );
}

export default App;
