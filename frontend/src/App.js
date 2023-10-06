

import React from 'react';
import './App.css';

function App() {
  const sendMessage = async () => {
    const response = await fetch('http://localhost:3001/sendMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: 'User clicked login' }), // Sending the message
    });
    const data = await response.text();
    console.log(data);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Rebuilding Together Aurora</h1>
        <button className="login-button" onClick={sendMessage}>
          Login
        </button>
      </header>
    </div>
  );
}

export default App;
