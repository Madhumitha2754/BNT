import React, { useState } from 'react';

export default function CounterWithReset() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prev => (prev >= 10 ? 0 : prev + 1));
  };

  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', marginTop: '2rem' }}>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>
        {count >= 10 ? 'Reset' : 'Increment'}
      </button>
    </div>
  );
}
