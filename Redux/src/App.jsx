import React from 'react';
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions/index';

function App() {
  const mystate = useSelector((state) => state.changeTheNumber); // Use the entire state
  const dispatch = useDispatch();

  return (
    <>
      <h2>Increment / Decrement Application</h2>
      <h3>Using React-Redux</h3>

      <div className="App">
        <button style={{ margin: "1em" }} onClick={() => dispatch(incNumber())}>+</button>
        <p>{mystate}</p> {/* Display the state value here */}
        <button style={{ margin: "1em" }} onClick={() => dispatch(decNumber())}>-</button>
      </div>
    </>
  );
}

export default App;
