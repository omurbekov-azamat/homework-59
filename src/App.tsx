import React from 'react';
import MoviesContainer from "./containers/MoviesContainer";
import JokeContainer from "./containers/JokeContainer";

function App() {

  return (
    <div className='container d-flex'>
      <MoviesContainer/>
      <JokeContainer/>
    </div>
  );
}

export default App;
