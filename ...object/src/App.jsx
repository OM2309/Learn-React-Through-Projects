import React, { useState } from "react";
import "./App.css";

function App() {
  const [myObject, setMyObject] = useState({
    name: "Anurag",
    age: 19,
    degree: "BCA",
  });

  // const changeObject = () => {
  //   setMyObject({
  //     name: "Anurag sharma",
  //   });
  // };

  const changeObject = () => {
    setMyObject({ ...myObject, name: "Anurag sharma" });
  };

  return (
    <>
      <div className="App">
        <h3>
          Name: {myObject.name} & Age: {myObject.age} & Degree: {myObject.degree}
        </h3>
        <button onClick={changeObject}> Click </button>
      </div>
    </>
  );
}

export default App;
