import React from 'react';
import {Film} from "../../types";
import Movie from "../Movie/Movie";

interface Props{
  movies: Film[];
  changeMovie: (event: React.ChangeEvent<HTMLInputElement>, id: number) => void;
  deleteMovie: (id: number) => void;
}

const Films: React.FC<Props> = ({movies,changeMovie,deleteMovie}) => {
  return (
    <>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          movie={movie.name}
          onMovieChange={event => changeMovie(event, movie.id)}
          delete={() => deleteMovie(movie.id)}
        />
      ))}

    </>
  );
};

export default React.memo(Films);