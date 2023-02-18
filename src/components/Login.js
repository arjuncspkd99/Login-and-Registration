import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Do something with the email and password, such as sending them to a server to authenticate the user.
    // For the sake of example, let's assume the server returns a success message for a valid user.
    const isAuthenticated = true; // Change this to false for testing the failure case
    if (isAuthenticated) {
      alert('Successfully logged in!');
    } else {
      alert('Incorrect email or password!');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLoginSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
