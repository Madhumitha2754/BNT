import React, { useState } from 'react';

function ControlledInput() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div style={{ padding: '1rem', fontFamily: 'Arial' }}>
      <label>
        Enter text:
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Type something..."
        />
      </label>
      <p style={{ marginTop: '1rem' }}>You typed: <em>{text}</em></p>
    </div>
  );
}

export default ControlledInput;
