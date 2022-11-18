import React, {Component} from 'react';

interface Props {
  movie: string;
  id: number;
}

class Movie extends Component<Props> {
  render() {
    return (
      <div className='d-flex'>
        <input type="text" value={this.props.movie}/>
        <button>delete</button>
      </div>
    );
  }
}

export default Movie;