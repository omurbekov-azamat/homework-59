import React, {useEffect, useState} from "react";
import Joke from "../components/Joke/Joke";
import Button from "../components/Button/Button";

const url = 'https://api.chucknorris.io/jokes/random';

function JokeContainer () {
  const [jokes, setJokes] = useState();

  const getJoke = () => {
    const fetchData = async () => {
      const response = await fetch(url);
      if(response.ok) {
        let oneJoke = await response.json();
        setJokes(oneJoke.value);
      }
    };
    fetchData().catch(console.error);
  };

  useEffect(() => {
    getJoke()
  }, []);

  return (
    <div className='border border-dark text-center p-2' style={{width: '335px'}}>
      <Button name='Get new Joke' className='btn btn-primary m-2' onClick={getJoke}/>
      <Joke newJoke={jokes}/>
    </div>
  )
}

export default JokeContainer;