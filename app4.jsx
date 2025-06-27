// GrandParent.js
import React from 'react';
import Parent from './Parent';

export default function GrandParent() {
  const message = "Hello from GrandParent";

  return (
    <div style={{ border: '2px solid blue', padding: '1rem' }}>
      <h1>GrandParent Component</h1>
      <Parent message={message} />
    </div>
  );
}
