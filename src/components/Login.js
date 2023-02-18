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
    const isAuthenticated = true; 
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
