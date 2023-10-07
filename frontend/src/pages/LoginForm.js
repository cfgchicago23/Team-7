import React, { useState } from 'react';

function LoginForm() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Normally, here you'd send 'credentials' to a backend service for authentication.
    console.log(credentials);
<<<<<<< HEAD
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
=======
    const isLoginSuccessful = true; //placeholder for mongo
    if (isLoginSuccessful) {
      navigate('/profile');
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Login if you are a current volunteer</h1>
      </header>
      <div className="app-content">
        <h2>Login</h2>
        <div className="login-form-container">
          <form onSubmit={handleSubmit} className="login-form">
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleInputChange}
                required
              />
            </label>
            <div className="button-container">
              <button type="submit" className="login-button">Login</button>
            </div>
          </form>
        </div>
      </div>
>>>>>>> 226ab94d7892019747b45fcea846720b8291e0cc
    </div>
  );
}

export default LoginForm;
