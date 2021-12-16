import React from 'react';
import '../App.css';
import { useGlobalContext } from './Context';
const Main = () => {
  const {
    enterNumber,
    setEnterNumber,
    confirm,
    HandleConfirm,
    SelectedNumber,
    HandleReset,
    ChangeScreen,
  } = useGlobalContext();
  const HandleValue = (e) => {
    setEnterNumber(e.target.value);
  };
  return (
    <div>
      <h1>Enter the number</h1>
      <input
        type='text'
        placeholder='Enter the number'
        value={enterNumber}
        onChange={HandleValue}
      ></input>
      <button onClick={HandleConfirm}>confirm</button>
      <button onClick={HandleReset}>reset</button>
      {confirm === true ? (
        <Start num={SelectedNumber} Change={ChangeScreen} />
      ) : (
        ''
      )}
    </div>
  );
};
export default Main;
const Start = ({ num, Change }) => {
  return (
    <>
      <h1>You Entered a Number is : {num}</h1>
      <button onClick={Change}>Start Game</button>
    </>
  );
};
