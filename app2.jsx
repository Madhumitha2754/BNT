import React, { useState } from 'react';

export default function GreetingToggle() {
  const [greeting, setGreeting] = useState('Hello');

  const handleToggle = () => {
    setGreeting(prev => (prev === 'Hello' ? 'Welcome Back' : 'Hello'));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>{greeting}</h2>
      <button onClick={handleToggle}>
        Toggle Greeting
      </button>
    </div>
  );
}
