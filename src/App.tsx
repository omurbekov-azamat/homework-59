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

  const changeMovie = (event: React.ChangeEvent<HTMLInputElement>, id:number) => {
    setMovies(prev => prev.map(newMovie => {
      return newMovie.id === id ? {
        ...newMovie,
        name: event.target.value,
      } : newMovie;
    }))
  };
  const deleteMovie = (id: number) => {
    setMovies(prev => prev.filter(nevMovie => nevMovie.id !== id));
  };


  return (
    <div className='container'>
      <MovieForm onSubmit={addMovie}/>
      <Movies
        movies={movies}
        changeMovie={changeMovie}
        deleteMovie={deleteMovie}
      />
    </div>
  );
}

export default App;
