import React, {Component} from 'react';
import Button from "../Button/Button";

interface Props {
  movie: string;
  id: number;
  onMovieChange: React.ChangeEventHandler<HTMLInputElement>;
  delete: React.MouseEventHandler;
}

class Movie extends Component<Props> {

  shouldComponentUpdate(nextProps: Readonly<Props>): boolean {
    return this.props.movie !== nextProps.movie || this.props.id !== nextProps.id;
  };

  render() {
    return (
      <div className='d-flex mt-1 border border-dark p-2'>
        <input className='form-control' type="text" value={this.props.movie} onChange={this.props.onMovieChange}/>
        <Button name='Delete' className='btn btn-primary ms-2' onClick={this.props.delete}/>
      </div>
    );
  }
}

export default Movie;