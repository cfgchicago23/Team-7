import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(credentials);
    const isLoginSuccessful = true; //placeholder for mongo
    if (isLoginSuccessful) {
      navigate('/dashboard');
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
              {/* If you have a sign up button or other buttons, add them here */}
            </div>
          </form>
        </div>
      </div>
      {/* If you have a footer or other components, you can add them below */}
    </div>
  );
}

export default LoginForm;
