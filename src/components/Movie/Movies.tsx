import React, {Component} from 'react';
import {Film} from "../../types";
import Movie from "./Movie";

interface Props{
  movies: Film[];
  changeMovie: (event: React.ChangeEvent<HTMLInputElement>, id: number) => void;
  deleteMovie: (id: number) => void;
}

class Movies extends Component<Props> {
  render() {
    return (
      <>
        {this.props.movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            movie={movie.name}
            onMovieChange={event => this.props.changeMovie(event, movie.id)}
            delete={() => this.props.deleteMovie(movie.id)}
          />
        ))}
        
      </>
    );
  }
}

export default Movies;