import React, {useState} from "react";
import {Film} from "../types";
import MovieForm from "../components/MovieForm/MovieForm";
import Movies from "../components/Movie/Movies";

function MoviesContainer () {
  const [movies, setMovies] = useState<Film[]>([]);

  const addMovie = (newMovie: Film) => {
    setMovies(prev => [...prev, newMovie]);
  };

  const changeMovie = (event: React.ChangeEvent<HTMLInputElement>, id:number) => {
    setMovies(prev => prev.map(newMovie => {
      return newMovie.id === id ? {
        ...newMovie,
        name: event.target.value,
      } : newMovie;
    }));
  };

  const deleteMovie = (id: number) => {
    setMovies(prev => prev.filter(nevMovie => nevMovie.id !== id));
  };

  return (
    <div style={{width: '600px'}}>
      <MovieForm onSubmit={addMovie}/>
      <Movies movies={movies} changeMovie={changeMovie} deleteMovie={deleteMovie}/>
    </div>
  )
}

export default MoviesContainer;