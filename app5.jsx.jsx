import React from 'react';

export default function NameList() {
  const names = ["John", "Jane", "Alex"];

  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}
