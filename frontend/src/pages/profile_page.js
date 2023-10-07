import React from 'react';
import './profile_page.css'; // Import your CSS file

function Profile() {
    const handleShare = () => {
        alert('Share button clicked.'); // Replace this with your sharing logic
    };

    return (
        <div className="profile-container">
            <div className="profile-image"></div>
            <div className="profile-info">
                <h2>John Doe</h2>
                <p>Hours volunteered: <span className="star">⭐</span> 500</p>
                <button className="share-button" onClick={handleShare}>
                    Share
                </button>
            </div>
            <div className="skills">
                <button className="skill-button">Painting</button>
                <button className="skill-button">Woodwork</button>
                <button className="skill-button">Cleaning</button>
            </div>
        </div>
    );
}

export default Profile;
