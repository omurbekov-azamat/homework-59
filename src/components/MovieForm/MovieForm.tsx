import React, {Component} from 'react';
import {Film} from "../../types";
import Button from "../Button/Button";

interface Props {
  onSubmit: (newMovie: Film) => void;
}

class MovieForm extends Component<Props> {
  state = {
    name: '',
  };

  onNameMovieChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(prev => ({
      ...prev,
      name: e.target.value,
    }));
  };

  onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    this.props.onSubmit({
      id: Math.random() * 99999,
      ...this.state,
    });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className='d-flex border p-3 bg-warning'>
          <input
            id='name'
            name='movie'
            type="text"
            className='form-control me-2'
            value={this.state.name}
            required
            onChange={this.onNameMovieChange}
          />
          <Button name='Add' className='btn btn-danger'/>
        </div>
      </form>
    );
  }
}

export default MovieForm;