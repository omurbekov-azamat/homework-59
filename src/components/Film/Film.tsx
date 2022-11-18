import React from 'react';
import Button from "../Button/Button";

interface Props {
  film: string;
  id: number;
  onMovieChange: React.ChangeEventHandler<HTMLInputElement>;
  cancel: React.MouseEventHandler;
}


const Film: React.FC<Props> = (props) => {

  return (
    <div className='d-flex mt-1 border border-dark p-2'>
      <input className='form-control' type="text" value={props.film} onChange={props.onMovieChange}/>
      <Button name='Delete' className='btn btn-primary ms-2' onClick={props.cancel}/>
    </div>
  );
};

export default React.memo(Film);