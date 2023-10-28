import React, { useState } from "react";

function App() {
  // Step 2: Define a state variable to store the input value
  const [inputValue, setInputValue] = useState("");

  // Step 3: Event handler to capture the input value
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Step 3: Event handler to capture the click event
  const handleClick = () => {
    alert(`Input Value: ${inputValue}`);
  };

  return (
    <div>
      {/* Step 1: Input element and button */}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a value"
      />
      <button onClick={handleClick}>Get Value</button>
    </div>
  );
}

export default App;
