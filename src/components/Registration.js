import React, { useState } from 'react';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRegistrationSubmit = (event) => {
    event.preventDefault();
    // Do something with the email and password, such as sending them to a server to create a new user account.
    alert("Successfully registered");
  };

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleRegistrationSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
