// components/RegistrationForm.js

import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    religion: '',
    profession: '',
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Send the registration data to your API
    // You can use Axios or the built-in fetch API to make the request
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {/* Other input fields */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
