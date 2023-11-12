import React, { useState } from 'react';

function ExampleComponent() {
  // Step 1: Initialize State
  const [count, setCount] = useState(0);

  // Step 3: Event Handling
  function handleIncrement() {
    // Step 4: Re-render Component
    // Using a function to update the state based on the previous state
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  }

  // Step 2 & 5: Render Initial UI & Updated UI
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default ExampleComponent;
