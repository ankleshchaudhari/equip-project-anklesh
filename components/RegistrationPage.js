import React, { useState } from 'react';

const RegistrationPage = ({ onRegistrationSuccess }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API to save user data here
    // On successful registration:
    onRegistrationSuccess();
  };

  return (
    <div className="registration-page">
      <h2>Registration Page</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
        />
        <input
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
        />
        <input
          name="mobileNumber"
          placeholder="Mobile Number"
          onChange={handleChange}
        />
        <input
          name="password"
          placeholder="Password"
          type="password"
          onChange={handleChange}
        />
        <button type="submit">Register</button>
      </form>
      <div className="social-login">
        <button>Login by Google</button>
        <button>Login by Facebook</button>
        <button>Login by Apple ID</button>
      </div>
    </div>
  );
};

export default RegistrationPage;
