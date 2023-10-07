import React from 'react';
import Navbar from './components/Navbar';
import Events from "./pages/Events"
import Profile from "./pages/Profile"
import Share from "./pages/Share"
import Resources from "./pages/Resources"
import './App.css';
// code that wotks with navbar
function App() {
  let component
  switch(window.location.pathname){
    case "/profile":
      component = <Profile/>
      break
    case "/upcoming_events":
      component = <Events/>
      break
    case "/share":
      component = <Share/>
      break
    case "/resources":
      component = <Resources/>
      break
  }
  return (
    <>
      <Navbar/>
      {component}
    </>
  ) 
}

export default App;