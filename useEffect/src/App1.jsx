import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function printName(name) {
    console.log(name);
  }

  useEffect(() => {
    console.log("call effect called");
    printName("Om");
  }, [count2]);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <p>Count-1: {count}</p>
      <p>Count-2: {count2}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <button onClick={() => setCount2(count2 + 1)}>Click</button>
     
    </>
  );
}

export default App;
