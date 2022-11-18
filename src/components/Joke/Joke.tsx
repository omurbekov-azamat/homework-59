import React from 'react';

interface Props{
  newJoke: string | undefined;
}

const Joke: React.FC<Props> = (props) => {
  return (
    <>
      <p>{props.newJoke}</p>
    </>
  );
};

export default Joke;