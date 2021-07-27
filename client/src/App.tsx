import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
// import { setSourceMapRange } from 'typescript';

function App() {
  // set up hooks
  // const [status, setStatus] = useState('idle');
  const [page, setPage] = useState(1);
  const [jokeHistory, setJokeHistory] = useState([]); // this will store all jokes
  const [data, setData] = useState(null); // stores welcome message from local api
  const [setup, setSetup] = useState(null); // stores setup
  const [punch, setPunch] = useState(null); // stores punchline
  
  useEffect(() => {
    fetch('/api') // fetch from local api
      .then((res) => res.json()) // get json response
      .then((data) => {
        setData(data.message); // load message
      });
  }, []);

  /* ----- Here is where we fetch a new joke ----- */
  const jokeURL = 'https://official-joke-api.appspot.com/random_joke'; // set api url
  
  const newJoke = () => {
    setPage(page + 1); // increment page/joke count
  };

  useEffect(() => {
    const fetchJoke = async () => {
      // setStatus('fetching'); // set status
      var response = await fetch(jokeURL); // fetch response from url
      const jokeData = await response.json(); // get json response
      console.log(jokeData); // check it
      setJokeHistory(jokeData); // store jokes in history
      setSetup(jokeData.setup); // assign setup variable
      setPunch(jokeData.punchline); // deliver punchline
      // setStatus('fetched'); // update status
    };
    fetchJoke(); // call fetchJoke function
  }, [page]);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
        <p>{!setup ? "Joke coming soon..." : setup}</p>
        <p>{!punch ? "...or will it?" : punch}</p>
        
        <button onClick={newJoke}>Tell Me A Joke</button>

      </header>
    </div>
  );
}

export default App;
