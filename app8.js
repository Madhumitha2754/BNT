// InputField.js
import React from 'react';

function InputField({ label, name, placeholder, onChange, value = '' }) {
  return (
    <div className="input-field">
      {label && (
        <label htmlFor={name} style={{ display: 'block', marginBottom: '0.25rem' }}>
          {label}
        </label>
      )}
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        style={{
          padding: '0.5rem',
          border: '1px solid #ccc',
          borderRadius: '4px',
          width: '100%',
        }}
      />
    </div>
  );
}

export default InputField;
