import React, {useState} from 'react';
import MovieForm from "./components/MovieForm";
import {Movie} from "./types";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const addMovie = (newMovie: Movie) => {
    setMovies(prev => [...prev, newMovie]);
  };

  return (
    <div className='container'>
      <MovieForm onSubmit={addMovie}/>
    </div>
  );
}

export default App;
