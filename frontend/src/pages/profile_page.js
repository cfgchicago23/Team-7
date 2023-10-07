import React, { useState } from 'react';
import './profile_page.css'; // Import your CSS file
import event_img from "./upcoming_events.jpg"
import star_img from "./star.png"

function Profile() {
    const [selectedTag, setSelectedTag] = useState(null);

    const handleShare = () => {
        alert('Share button clicked.'); // Replace this with your sharing logic
    };

    // Sample event data
    const events = [
        {
            name: "Veteran's Fall Clean-Up",
            phone: "(212) 555-1234",
            email: "a@gmail.com",
            tags: ["General Volunteer", "Carpentry"]
        },
        {
            name: "Clean-Up Event",
            phone: "(212) 555-2345",
            email: "becca@gmail.com",
            tags: ["General Volunteer", "Flooring"]
        },
        {
            name: "House Remodel Event",
            phone: "(212) 555-4567",
            email: "thecat@hotmail.com",
            tags: ["General Volunteer", "Flooring"]
        },
        {
            name: "Corporate Group Volunteering",
            phone: "(212) 555-4567",
            email: "thebusiness@hotmail.com",
            tags: ["Painting", "Carpentry", "General Volunteer"]
        },
    ];

    const filteredEvents = selectedTag
        ? events.filter(event => event.tags.includes(selectedTag))
        : events;

    const skillButtons = ["Painting", "Landscaping", "Carpentry", "Flooring", "General Volunteer"];

    return (
        <div>
            <div className="profile-container">
            <div className="profile-image"></div>
                <div className="profile-info">
                    <h2>John Smith</h2>
                    <div className="profile-text">
                        <p>Hours volunteered: <span className="star">⭐</span> 500</p>
                    </div>
                    <button className="share-button" onClick={handleShare}>
                        Share
                    </button>
                </div>
                <div className="skills">
                    {skillButtons.map(skill => (
                        <button
                            key={skill}
                            className="skill-button"
                            onClick={() => setSelectedTag(skill)}
                        >
                            {skill}
                        </button>
                    ))}
                </div>
            </div>
            <hr className="separator" />
            <div className="additional-rectangle">
                <h2>My Registered Events</h2>
                <p> </p>
                <div className="contacts">
                    {filteredEvents.map((event, index) => (
                        <div className="contact-card" key={index}>
                            <img src={event_img} alt="Event" />
                            <h3>{event.name}</h3>
                            <div className="info-group">
                                <img src={star_img} alt="Star" />
                                <p>{event.phone}</p>
                            </div>
                            <div className="info-group">
                                <img src={star_img} alt="Star" />
                                <p>{event.email}</p>
                            </div>
                            <div className="tags">
                                {event.tags.map((tag, tagIndex) => (
                                    <button className="skill-button" key={tagIndex}>
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Profile;
