import React, { useState } from 'react';

export default function ItemList() {
  // Initial list of items
  const [items, setItems] = useState([
    { id: 1, text: 'Apple' },
    { id: 2, text: 'Banana' },
    { id: 3, text: 'Cherry' },
  ]);

  // Deletes the item with the given id
  const handleDelete = (id) => {
    setItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  return (
    <div style={{ maxWidth: 320, margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h2>Fruit List</h2>
      <ul style={{ padding: 0, listStyle: 'none' }}>
        {items.map(({ id, text }) => (
          <li key={id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <span>{text}</span>
            <button onClick={() => handleDelete(id)}>Delete</button>
          </li>
        ))}
      </ul>
      {items.length === 0 && <p>No items left.</p>}
    </div>
  );
}
