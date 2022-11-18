import React from 'react';
import MoviesContainer from "./containers/MoviesContainer";
import JokeContainer from "./containers/JokeContainer";
import FilmsContainer from "./containers/FilmContainer";

function App() {

  return (
    <div className='container d-flex'>
      <MoviesContainer/>
      <JokeContainer/>
      <FilmsContainer/>
    </div>
  );
}

export default App;
