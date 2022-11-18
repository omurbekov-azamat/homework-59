import React, {Component} from 'react';

interface Props {
  movie: string;
  id: number;
  onMovieChange: React.ChangeEventHandler<HTMLInputElement>;
  delete: React.MouseEventHandler;
}

class Movie extends Component<Props> {
  render() {
    return (
      <div className='d-flex mt-1 border border-dark p-2'>
        <input className='form-control' type="text" value={this.props.movie} onChange={this.props.onMovieChange}/>
        <button className='btn btn-primary ms-2' onClick={this.props.delete}>Delete</button>
      </div>
    );
  }
}

export default Movie;