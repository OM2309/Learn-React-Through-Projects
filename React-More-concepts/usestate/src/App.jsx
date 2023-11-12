import { useState } from "react";
function App() {
  console.log("start 1");

  let [count, setcount] = useState(5);

  let IncNum = () => {
    console.log("start 3");
    setcount((prevCount) => {
      console.log("Clicked " + (prevCount + 1));
      return prevCount + 1;
    });
    
    setcount((prevCount) => {
      console.log("Clicked " + (prevCount + 1));
      return prevCount + 1;
    });
    console.log("start 4");
  };

  return (
    <>
      {console.log("start 2")}
      <div className="App">
        <h1>{count}</h1>
        <button onClick={IncNum}>Click</button>
      </div>
      
    </>
  );
}

export default App;
