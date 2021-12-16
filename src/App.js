import React from 'react';
import Main from './Component/Main';
import GameScreen from './Component/GameScreen';
import { useGlobalContext } from './Component/Context';
import './App.css';
const App = () => {
  const { screen } = useGlobalContext();
  return <>{screen === true ? <Main /> : <GameScreen />}</>;
};
export default App;
