import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import volunteering from "./volunteering.jpg";
import LoginForm from './pages/LoginForm';  // Ensure the path is correct
function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Rebuilding Together Aurora</h1>
        <div className="button-container">
            <Link to="/login" className="login-button">Login</Link>
            <Link to="/signup" className="signup-button">Sign Up</Link>
        </div>
      </header>
      <section className="app-content">
        <div className="image-container">
            <img src={volunteering} alt="Man volunteering" />
        </div>
        <p>Together we repair homes, revitalize communities, and rebuild lives. Rebuilding Together Aurora is a safe and healthy housing organization that assists homeowners with critical home repairs, safety modifications, and energy efficiency upgrades. Our volunteers use tools like hammers and paint brushes to help qualified homeowners in need, playing a pivotal role in improving living conditions and invigorating the community.</p>
        <p>For three decades, we've offered free essential home repairs to low-income Aurora residents including senior citizens, military veterans, individuals with disabilities, and families living in unsafe conditions. Our mission is to bridge the gap between homeowners and volunteers, ensuring everyone in Aurora has a safe and healthy living environment.</p>

        <h2>UPCOMING EVENTS</h2>
        <h3>Veterans' Fall Clean-Up and Repairs</h3>
        <p><strong>Date:</strong> Saturday, November 11, 2023</p>
        <p><strong>Time:</strong> 8:00 AM - 1:00 PM</p>
        <p><strong>Location:</strong> Rebuilding Together Aurora</p>
        <p>Join Rebuilding Together Aurora and Crossroads Church for a special collaboration. Together, we'll honor the sacrifices made by our veterans and military families in the Fox Valley. Last year, our record-breaking volunteer turnout was able to assist more veterans, military families, and senior citizens than ever before. We aim to surpass those achievements in 2023.</p>
        <p>If you'd like to register your team, click <a href="#">HERE</a>. And if you know of a veteran, an active-duty military member, a Gold Star family, or a service member’s widow who needs help with fall yard clean-up or light repairs, please contact us at <a href="mailto:support@rtaurora.org">support@rtaurora.org</a>.</p>
      </section>
    </div>
  );
}


export default App;

