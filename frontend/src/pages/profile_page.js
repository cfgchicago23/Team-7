import React from 'react';
import './profile_page.css'; // Import your CSS file
import event_img from "./upcoming_events.jpg"
import star_img from "./star.png"

function Profile() {
    const handleShare = () => {
        alert('Share button clicked.'); // Replace this with your sharing logic
    };

    return (
        <div>
            <div className="profile-container">
                <div className="profile-image"></div>
                <div className="profile-info">
                    <h2>John Doe</h2>
                    <div className="profile-text">
                        <p>Hours volunteered: <span className="star">⭐</span> 500</p>
                    </div>
                    <button className="share-button" onClick={handleShare}>
                        Share
                    </button>
                </div>
                <div className="skills">
                    <button className="skill-button">Painting</button>
                    <button className="skill-button">Landscaping</button>
                    <button className="skill-button">Carpentry</button>
                    <button className="skill-button">Flooring</button>
                    <button className="skill-button">General Volunteer</button>
                </div>
            </div>
            {/* Separator bar */}
            <hr className="separator" />
            {/* Additional green rectangle */}
            <div className="additional-rectangle">
                <h2>My Registered Events</h2>
                <p>   </p>
                <div className="contacts">
        
            <div className="contact-card">
                <img src={event_img}/>
                <h3>Veteran's Fall Clean-Up</h3>
                <div className="info-group">
                    <img src={star_img}/>
                    <p>(212) 555-1234</p>
                </div>
                <div className="info-group">
                    <img src={star_img} />
                    <p>a@gmail.com</p>
                </div>
                <div className="tags">
                            <button className="skill-button">Carpentry</button>
                        </div>
            </div>
            
            <div className="contact-card">
                <img src={event_img}/>
                <h3>Clean-Up Event</h3>
                <div className="info-group">
                    <img src={star_img} />
                    <p>(212) 555-2345</p>
                </div>
                <div className="info-group">
                    <img src={star_img}/>
                    <p>becca@gmail.com</p>
                </div>
                <div className="tags">
                            <button className="skill-button">Flooring</button>
                        </div>
            </div>
            
            <div className="contact-card">
                <img src={event_img}/>
                <h3>House Remodel Event</h3>
                <div className="info-group">
                    <img src={star_img} />
                    <p>(212) 555-4567</p>
                </div>
                <div className="info-group">
                    <img src={star_img} />
                    <p>thecat@hotmail.com</p>
                </div>
                <div className="tags">
                            <button className="skill-button">General Volunteer</button>
                        </div>
            </div>
            
            <div className="contact-card">
                <img src={event_img}/>
                <h3>Corporate Group Volunteering</h3>
                <div className="info-group">
                    <img src={star_img} />
                    <p>(212) 555-4567</p>
                </div>
                <div className="info-group">
                    <img src={star_img} />
                    <p>thebusiness@hotmail.com</p>
                </div>
		                <div className="tags">
                            <button className="skill-button">Painting</button>
                        </div>

            </div>
            
        </div>
            </div>
            
        </div>
    );
}

export default Profile;

