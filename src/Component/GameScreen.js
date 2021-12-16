import React from 'react';
import { useGlobalContext } from './Context';
const GameScreen = () => {
  const { CurrentGuess, HandleNext } = useGlobalContext();
  return (
    <>
      <h1>Number Guessed by the Computer {CurrentGuess} </h1>
      <button onClick={HandleNext.bind(this, 'Lower')}>Lower</button>
      <button onClick={HandleNext.bind(this, 'Greater')}>Greater</button>
    </>
  );
};
export default GameScreen;
