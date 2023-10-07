import React from 'react';

// share RTA to social media
function Share() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Share Rebuilding Together Aurora</h1>
        <button className="login-button">Login</button>
      </header>
      <body className='share-body'>
        <p>Screenshot this!</p>
        <div className='screenshot-box'>
        </div>
      </body>
    </div>
  );
}

export default Share;