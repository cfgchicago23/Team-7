import React from "react"
import event_img from "./upcoming_events.jpg"
import star_img from "./star.png"
import "./Card.css"
import Navbar from '../navbar';

function Card(props) {
    return (
        <div className="contacts">
            <Navbar /> 
            <div className="contact-card">
                <img src={event_img}/>
                <h3>Mr. Whiskerson</h3>
                <div className="info-group">
                    <img src={star_img}/>
                    <p>(212) 555-1234</p>
                </div>
                <div className="info-group">
                    <img src={star_img} />
                    <p>mr.whiskaz@catnap.meow</p>
                </div>
            </div>
            
            <div className="contact-card">
                <img src={event_img}/>
                <h3>Fluffykins</h3>
                <div className="info-group">
                    <img src={star_img} />
                    <p>(212) 555-2345</p>
                </div>
                <div className="info-group">
                    <img src={star_img}/>
                    <p>fluff@me.com</p>
                </div>
            </div>
            
            <div className="contact-card">
                <img src={event_img}/>
                <h3>Felix</h3>
                <div className="info-group">
                    <img src={star_img} />
                    <p>(212) 555-4567</p>
                </div>
                <div className="info-group">
                    <img src={star_img} />
                    <p>thecat@hotmail.com</p>
                </div>
            </div>
            
            <div className="contact-card">
                <img src={event_img}/>
                <h3>Felix</h3>
                <div className="info-group">
                    <img src={star_img} />
                    <p>(212) 555-4567</p>
                </div>
                <div className="info-group">
                    <img src={star_img} />
                    <p>thecat@hotmail.com</p>
                </div>
            </div>
            
        </div>
    )
}

export default Card;