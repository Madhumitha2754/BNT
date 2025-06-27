// App.js
import React, { useState } from 'react';
import InputField from './InputField';

export default function App() {
  const [form, setForm] = useState({ firstName: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto' }}>
      <h2>Reusable Input Demo</h2>

      <InputField
        label="First Name"
        name="firstName"
        placeholder="Enter your first name"
        value={form.firstName}
        onChange={handleChange}
      />

      <InputField
        label="Email Address"
        name="email"
        placeholder="Enter your email"
        value={form.email}
        onChange={handleChange}
      />

      <pre>{JSON.stringify(form, null, 2)}</pre>
    </div>
  );
}
