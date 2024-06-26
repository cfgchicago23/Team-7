import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
import {user} from './SignUp';
var user2 = '';
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
    const isLoginSuccessful = false; //placeholder for mongo
    const retrievedUser = JSON.parse(localStorage.getItem(credentials.username));
    user2 = credentials.username;
    if (retrievedUser.password === credentials.password) {
        console.log("Logged in");
        navigate('/profile');
    } else {
        console.log("Failed Login");
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
    </div>
  );
}
export {user2};
export default LoginForm;
