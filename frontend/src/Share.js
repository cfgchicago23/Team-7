import React from 'react';
import trophy from "./CFG-trophy.webp";
import Navbar from './navbar';
import fb from "./facebook logo.png";
import ins from "./instagram logo.png";
import logo from "./rebuilding_aurora_logo.png"

// share RTA to social media
function Share() {
  return (
    <div>
      <Navbar/>
      <body className='share-body'>
        <p style={{fontSize:"25pt"}}>Screenshot this!</p>
        <div className='screenshot-box'>
        <img src={logo} id="trophy-pic" alt="RTA logo"></img>
        <img src={trophy} id="trophy-pic" alt="trophy pic"></img>
        <p style={{fontSize:"14pt", lineHeight:0.8}}>I volunteered</p>
        <p style={{fontSize:"17pt", lineHeight:0.1}}>100</p>
        <p style={{fontSize:"14pt", lineHeight:1.2}}>hours with Rebuilding Together Aurora!</p>
        </div>
      </body>
      <div className="social-links">
      <a href="https://www.instagram.com/">
        <img src={ins} id="link-pic" alt="instagram logo"></img>
      </a>
      <a href="https://www.facebook.com/">
        <img src={fb} id="link-pic" alt="facebook logo"></img>
      </a>
      </div>
    </div>
  );
}

export default Share;