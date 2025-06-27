import React, { useState } from 'react';

function CheckboxMessage() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div style={{ padding: '1rem', fontFamily: 'Arial, sans-serif' }}>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
        />{' '}
        Check me
      </label>

      {isChecked && (
        <p style={{ marginTop: '1rem', color: 'green' }}>
          You checked the box!
        </p>
      )}
    </div>
  );
}

export default CheckboxMessage;
