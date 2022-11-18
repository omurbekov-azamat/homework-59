import React, {useEffect, useState} from "react";
import {Film} from "../types";
import FilmForm from "../components/FilmForm/FilmForm";
import Films from "../components/Film/Films";

function FilmsContainer () {
  const [films, setFilms] = useState<Film[]>([]);

  const infoFromLocalStorage = localStorage.getItem('Cinema');
  const mainStorage: Film[] = infoFromLocalStorage ? JSON.parse(infoFromLocalStorage) : [];

  const getFromLocalStorage = () => {
    setFilms(prev => mainStorage.map(newMovie => {
      return{
        ...newMovie,
        name: newMovie.name,
        id: newMovie.id,
      }
    }));
  };

  useEffect(() => {
    getFromLocalStorage();
  }, []);

  const addMovie = (newMovie: Film) => {
    const info = {
      id: newMovie.id,
      name: newMovie.name,
    };
    mainStorage.push(info);
    localStorage.setItem('Cinema', JSON.stringify(mainStorage));
    setFilms(prev => [...prev, newMovie]);
  };

  const changeMovie = (event: React.ChangeEvent<HTMLInputElement>, id:number) => {
    setFilms(prev => prev.map(newMovie => {
      return newMovie.id === id ? {
        ...newMovie,
        name: event.target.value,
      } : newMovie;
    }));
  };

  const deleteMovie = (id: number) => {
    const index = mainStorage.findIndex(p => p.id === id);
    mainStorage.splice(index, 1);
    localStorage.setItem('Cinema', JSON.stringify(mainStorage));
    setFilms(prev => prev.filter(nevMovie => nevMovie.id !== id));
  };

  return (
    <div style={{width: '600px'}}>
      <FilmForm onSubmit={addMovie}/>
      <Films movies={films} changeMovie={changeMovie} deleteMovie={deleteMovie}/>
    </div>
  )
}

export default FilmsContainer;