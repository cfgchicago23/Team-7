import React, { useState } from "react";
import "./profile_page.css"; // Import your CSS file
import event_img from "./upcoming_events.jpg";
import star_img from "./star.png";
import user_prof from "./userprofile.png";
import Navbar from "../navbar";
import { user } from "./SignUp";
import { useEffect } from "react";
// import {user2} from './LoginForm';

// note user2 is log in
function Profile({ user2, setUser2 }) {
  const [selectedTag, setSelectedTag] = useState(null);
  const [user3, setUser3] = useState("");
  const [retrievedUser, setRetrievedUser] = useState(null);

  const handleShare = () => {
    alert("Share button clicked."); // Replace this with your sharing logic
  };

  // Sample event data
  const events = [
    {
      name: "Veteran's Fall Clean-Up",
      phone: "(212) 555-1234",
      email: "a@gmail.com",
      tags: ["General Volunteer", "Carpentry"],
    },
    {
      name: "Clean-Up Event",
      phone: "(212) 555-2345",
      email: "becca@gmail.com",
      tags: ["General Volunteer", "Flooring"],
    },
    {
      name: "House Remodel Event",
      phone: "(212) 555-4567",
      email: "thecat@hotmail.com",
      tags: ["General Volunteer", "Flooring", "Landscaping"],
    },
    {
      name: "Corporate Group Volunteering",
      phone: "(212) 555-4567",
      email: "thebusiness@hotmail.com",
      tags: ["Painting", "Carpentry", "General Volunteer"],
    },
  ];

  const filteredEvents = selectedTag
    ? events.filter((event) => event.tags.includes(selectedTag))
    : events;

  const skillButtons = [
    "Painting",
    "Landscaping",
    "Carpentry",
    "Flooring",
    "General Volunteer",
  ];
  const hoursVolunteered = 500;
  const pointsEarned = 5;
  // var user3 = ''

  useEffect(() => {
    console.log("User is" + user);
    console.log("User2 is" + user2);
    if (user.length > user2.length) {
      // user3 = user;
      setUser3(user);
    } else {
      setUser3(user2);
    }

    console.log(user3);
    setRetrievedUser(JSON.parse(localStorage.getItem(user3)));
  }, []);
  // console.log(user3);
  // const retrievedUser = JSON.parse(localStorage.getItem(user3));
  // console.log(retrievedUser);

  return (
    <div>
      <Navbar />
      <div className="profile-container">
        <div className="profile-image"></div>
        <div className="profile-info">
          <div className="profile-text">
            <h2>
              {" "}
              {(retrievedUser) ? <>{retrievedUser.firstName + " " + retrievedUser.lastName}</> : null}
              
            </h2>
            <p>
              Hours Volunteered: {(retrievedUser) ? <>{retrievedUser.hours}</> : null}
              <br />
              Stars Earned: <span className="star"></span> {(retrievedUser) ? <>{retrievedUser.score}</> : null}
              ⭐
            </p>
          </div>

          <button
            className="share-button"
            onClick={() => window.open("https://www.instagram.com/", "_blank")}
          >
            Share
          </button>
        </div>
        <div className="skills">
          {skillButtons.map((skill) => (
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
