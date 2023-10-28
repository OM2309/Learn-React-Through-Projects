import { useReducer } from "react";
import "./App.css";

const initialstate = 0;     // first time initial state is initialize = 0 and this is equal to the state
const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialstate);   // dispatch call the action
  return (
    <>
      <button onClick={() => dispatch("Increment")}>Increament</button>
      <p>Count: {count}</p>
      <button onClick={() => dispatch("Decrement")}>Decrement</button>
    </>
  );
}

export default App;
