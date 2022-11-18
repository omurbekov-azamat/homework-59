import React, {useState} from 'react';
import {Film} from "../../types";
import Button from "../Button/Button";

interface Props {
  onSubmit: (newMovie: Film) => void;
}

const FilmForm: React.FC<Props> = (props) => {
  const [films, setFilms] = useState(
    {name: ''},
  );

  const onNameFilmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilms(prev => ({
      ...prev,
      name: e.target.value,
    }));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.random() * 99999,
      ...films,
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className='d-flex border p-3 bg-success'>
        компонент функция
        <input
          id='name'
          name='movie'
          type="text"
          className='form-control me-2'
          value={films.name}
          required
          onChange={onNameFilmChange}
        />
        <Button name='Add' className='btn btn-info'/>
      </div>
    </form>
  );
};

export default React.memo(FilmForm);