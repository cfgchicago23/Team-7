import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUpForm() {
    //states for key user details
  const [credentials, setCredentials] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();
  //set credentials
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  //testing for password match 
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (credentials.password !== credentials.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log(credentials);
    const isSignUpSuccessful = true; //mongodb connection
    if (isSignUpSuccessful) {
      navigate('/profile');
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Sign Up to be a Volunteer</h1>
      </header>
      <div className="app-content">
        <h2>Sign Up</h2>
        <div className="login-form-container">
          <form onSubmit={handleSubmit} className="login-form">
            <label>
              First Name:
              <input
                type="text"
                name="firstName"
                value={credentials.firstName}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Last Name:
              <input
                type="text"
                name="lastName"
                value={credentials.lastName}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={credentials.email}
                onChange={handleInputChange}
                required
              />
            </label>
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
            <label>
              Confirm Password:
              <input
                type="password"
                name="confirmPassword"
                value={credentials.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </label>
            <div className="button-container">
              <button type="submit" className="signup-button">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;