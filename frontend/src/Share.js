import React from 'react';
import trophy from "./CFG-trophy.webp";
import Navbar from './navbar';

// share RTA to social media
function Share() {
  return (
    <div className="app">
      <Navbar/> 
      <body className='share-body'>
        <p style={{fontSize:"25pt", fontFamily:"Baskerville Old Face"}}>Screenshot this!</p>
        <div className='screenshot-box'>
        <img src={trophy} id="trophy-pic" alt="trophy pic"></img>
        <p style={{fontSize:"14pt", fontFamily:"Baskerville Old Face"}}>I volunteered</p>
        {/* Add hours data through json or database */}
        <p style={{fontSize:"14pt", fontFamily:"Baskerville Old Face"}}>hours with Rebuilding Together Aurora</p>
        </div>
      </body>
    </div>
  );
}

export default Share;