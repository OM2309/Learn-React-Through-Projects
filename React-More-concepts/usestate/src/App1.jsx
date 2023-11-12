import { useState } from 'react';

function MyComponent() {
  // Step 1: Initialize State
  const [count, setCount] = useState(0);

  // Step 3: Event Handling
  function handleIncrement() {
    // Step 4: Re-render Component
    setCount(count + 1);
  }

  // Step 2 & 5: Render Initial UI & Updated UI
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default MyComponent;
