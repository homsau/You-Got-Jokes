import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // set up hooks
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState(null);
  const [setup, setSetup] = useState(null);
  const [punch, setPunch] = useState(null);

  const jokeURL = 'https://official-joke-api.appspot.com/random_joke';


  useEffect(() => {
    const fetchJoke = async () => {
      setStatus('fetching');
      var response = await fetch(jokeURL);
      const jokeData = await response.json();
      setSetup(jokeData.setup); // assign setup variable
      setPunch(jokeData.punchline); // deliver punchline
      setStatus('fetched');
    };
    fetchJoke();
  }, []);

  /*
  useEffect(() => {
    fetch(jokeURL) // fetch from url
      .then((res) => res.json()) // get json response
      .then((jokeData) => { // function to use data
        console.log(jokeData);
        setSetup(jokeData.setup); // assign setup variable
        setPunch(jokeData.punchline); // deliver punchline
      });
  }, []);
  */
  
  useEffect(() => {
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
        <p>{!setup ? "Joke coming soon..." : setup}</p>
        <p>{!punch ? "...or will it?" : punch}</p>
      </header>
    </div>
  );
}

export default App;
