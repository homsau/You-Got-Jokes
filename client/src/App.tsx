import React, { Component, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = React.useState(null);
  const jokeURL = 'https://official-joke-api.appspot.com/random_joke';

  React.useEffect(() => {
    fetch(jokeURL)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
      <p>{!data ? "Joke coming soon..." : data}</p>
    </div>
  );
}

export default App;
