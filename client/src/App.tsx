import { useState, useEffect } from 'react';
import logo from './logo.svg';
// import './App.css';
import './App.scss';
import Typist from 'react-typist'; // https://github.com/jstejada/react-typist

function App() {
  // set up hooks
  const [data, setData] = useState(""); // stores welcome message from local api
  const [page, setPage] = useState(1);
  // const [jokeHistory, setJokeHistory] = useState([]); // this will store all jokes
  const [setup, setSetup] = useState<string | null>(""); // stores setup
  const [punch, setPunch] = useState<string | null>(""); // stores punchline
  const [joke, setJoke] = useState<any>('');
  const [index, setIndex] = useState<number>(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    fetch('/api') // fetch from local api
      .then((res) => res.json()) // get json response
      .then((data) => {
        setData(data.message); // load message
      });
  }, []);

  /* ----- Here is where we fetch a new joke ----- */
  // const jokeURL = 'https://official-joke-api.appspot.com/random_joke'; // set api url
  const jokeURL = '/jokes/random'; // local joke api

  const newJoke = () => {
    setPage(page + 1); // increment page/joke count
    setIndex(index + 2);
  };

  useEffect(() => {
    const fetchJoke = async () => {
      // setStatus('fetching'); // set status
      var response = await fetch(jokeURL); // fetch response from url
      const jokeData = await response.json(); // get json response
      console.log(jokeData); // check it
      let setup:string = jokeData.setup;
      let punch:string = jokeData.punchline;
      // setJokeHistory(jokeData); // store jokes in history
      setSetup(setup); // assign setup variable
      setPunch(punch); // deliver punchline
      // if (joke.includes(jokeData.setup) === false) {
      setJoke((joke: any) => [...joke, setup, punch]);
    };
    fetchJoke(); // call fetchJoke function
  }, [page]);

  useEffect(() => {
    console.log(setup)
  }, [subIndex, index, reverse, page])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
        <p>{!setup ? "Joke coming soon..." : setup}</p>
        <p>{!punch ? "...or will it?" : punch}</p>
        <button onClick={newJoke}>Tell Me A Joke</button>
        {joke[index]}
        <br />
        {joke[index + 1]}
        {/* <Typist sentences={[setup]} loop={false} />
        <Typist sentences={[punch]} loop={false} /> */}
      </header>
    </div>
  );
}

export default App;
