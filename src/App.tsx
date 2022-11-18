import React, {useState} from 'react';
import MovieForm from "./components/MovieForm/MovieForm";
import {Film} from "./types";
import Movies from "./components/Movie/Movies";

function App() {
  const [movies, setMovies] = useState<Film[]>([]);

  const addMovie = (newMovie: Film) => {
    setMovies(prev => [...prev, newMovie]);
  };
  console.log(movies)

  return (
    <div className='container'>
      <MovieForm onSubmit={addMovie}/>
      <Movies movies={movies}/>
    </div>
  );
}

export default App;
