import React, { useState } from 'react';

export default function Counter() {
  // Declare a state variable "count" initialized to 0
  const [count, setCount] = useState(0);

  // Handler function to increment the count
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>
        Increase
      </button>
    </div>
  );
}
