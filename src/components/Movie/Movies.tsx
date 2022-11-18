import React, {Component} from 'react';
import {Film} from "../../types";
import Movie from "./Movie";

interface Props{
  movies: Film[];
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
          />
        ))}
        
      </>
    );
  }
}

export default Movies;