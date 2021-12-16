import React, { useContext, useState, useRef } from 'react';
const AppContext = React.createContext();
const GenerateGuess = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const num = Math.floor(Math.random() * (max - min) + min);
  if (num === exclude) {
    return GenerateGuess(min, max, exclude);
  } else {
    return num;
  }
};
const AppProvider = ({ children }) => {
  const [enterNumber, setEnterNumber] = useState('');
  const [confirm, setConfirm] = useState(false);
  const [SelectedNumber, setSelectedNumber] = useState('');
  const [screen, setScreen] = useState(true);
  const [CurrentGuess, setCurrentGuess] = useState(
    GenerateGuess(1, 100, SelectedNumber)
  );
  const HandleConfirm = () => {
    setConfirm(true);
    setSelectedNumber(enterNumber);
    setEnterNumber('');
  };
  const HandleReset = () => {
    setConfirm(false);
    setEnterNumber('');
  };
  const ChangeScreen = () => {
    setScreen(false);
  };
  const currentMin = useRef(1);
  const currentMax = useRef(100);
  const HandleNext = (direction) => {
    if (
      (direction === 'Lower' && CurrentGuess <= SelectedNumber) ||
      (direction === 'Greater' && CurrentGuess >= SelectedNumber)
    ) {
      alert('Dont lie');
      return;
    }
    if (direction === 'Lower') {
      currentMax.current = CurrentGuess;
    } else {
      currentMin.current = CurrentGuess;
    }
    const nextNumber = GenerateGuess(
      currentMin.current,
      currentMax.current,
      CurrentGuess
    );
    setCurrentGuess(nextNumber);
  };
  return (
    <AppContext.Provider
      value={{
        enterNumber,
        setEnterNumber,
        confirm,
        HandleConfirm,
        SelectedNumber,
        HandleReset,
        screen,
        ChangeScreen,
        CurrentGuess,
        HandleNext,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
