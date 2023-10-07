import React from "react"
import event_img from "./upcoming_events.jpg"
import star_img from "./star.png"
import kid from "./thaKid.png"
import builders from "./builders.png"
import roof from "./roof.png"
import house from "./house.jpeg"
import "./Card.css"
import Navbar from '../navbar';
import {user} from './SignUp';
import {user2} from './LoginForm';
var user3 = ''
    if (user.length > user2.length) {
        user3 = user;
    } else {
        user3 = user2;
    }
function Card(props) {
    return (
        <div className="contacts">
            <Navbar /> 
            <div className="contact-card" onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSd8xuvjdCEVRUm-bKZPTaoOFaerkG2HVD_ngcb6U64TAjv6SA/viewform?usp=sf_link", '_blank')}  >
                <img src={house}/>
                <h3>Rebuild This Home!</h3>
                <div className="info-group">
                    <img src={star_img}/>
                    <p>1214 Pumpkin Drive</p>
                </div>
                <div className="info-group">
                    <img src={star_img} />
                    <p>12pm - 3pm</p>
                </div>
            </div>
            
            <div className="contact-card" onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSd8xuvjdCEVRUm-bKZPTaoOFaerkG2HVD_ngcb6U64TAjv6SA/viewform?usp=sf_link", '_blank')}>
                <img src={kid}/>
                <h3>Help Our Community!</h3>
                <div className="info-group">
                    <img src={star_img} />
                    <p>6374 Happy Lane</p>
                </div>
                <div className="info-group">
                    <img src={star_img}/>
                    <p>6pm - 8pm</p>
                </div>
            </div>
            
            <div className="contact-card" onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSd8xuvjdCEVRUm-bKZPTaoOFaerkG2HVD_ngcb6U64TAjv6SA/viewform?usp=sf_link", '_blank')}>
                <img src={builders}/>
                <h3>Veteran's Fall CleanUp & Repair</h3>
                <div className="info-group">
                    <img src={star_img} />
                    <p>3736 Walkinson Drive</p>
                </div>
                <div className="info-group">
                    <img src={star_img} />
                    <p>2pm - 4pm</p>
                </div>
            </div>
            
            <div className="contact-card" onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSd8xuvjdCEVRUm-bKZPTaoOFaerkG2HVD_ngcb6U64TAjv6SA/viewform?usp=sf_link", '_blank')}>
                <img src={roof}/>
                <h3>House CleanUp</h3>
                <div className="info-group">
                    <img src={star_img} />
                    <p>6600 Wilkinson Lane</p>
                </div>
                <div className="info-group">
                    <img src={star_img} />
                    <p>3pm - 5pm</p>
                </div>
            </div>

            <div className="contact-card" onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSd8xuvjdCEVRUm-bKZPTaoOFaerkG2HVD_ngcb6U64TAjv6SA/viewform?usp=sf_link", '_blank')}>
                <img src={kid}/>
                <h3>Help Our Community!</h3>
                <div className="info-group">
                    <img src={star_img} />
                    <p>6374 Happy Lane</p>
                </div>
                <div className="info-group">
                    <img src={star_img}/>
                    <p>6pm - 8pm</p>
                </div>
            </div>
            
            <div className="contact-card" onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSd8xuvjdCEVRUm-bKZPTaoOFaerkG2HVD_ngcb6U64TAjv6SA/viewform?usp=sf_link", '_blank')}>
                <img src={kid}/>
                <h3>Help Our Community!</h3>
                <div className="info-group">
                    <img src={star_img} />
                    <p>6374 Happy Lane</p>
                </div>
                <div className="info-group">
                    <img src={star_img}/>
                    <p>6pm - 8pm</p>
                </div>
            </div>

            <div className="contact-card" onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSd8xuvjdCEVRUm-bKZPTaoOFaerkG2HVD_ngcb6U64TAjv6SA/viewform?usp=sf_link", '_blank')}>
                <img src={builders}/>
                <h3>Veteran's Fall CleanUp & Repair</h3>
                <div className="info-group">
                    <img src={star_img} />
                    <p>3736 Walkinson Drive</p>
                </div>
                <div className="info-group">
                    <img src={star_img} />
                    <p>2pm - 4pm</p>
                </div>
            </div>
            
            <div className="contact-card" onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSd8xuvjdCEVRUm-bKZPTaoOFaerkG2HVD_ngcb6U64TAjv6SA/viewform?usp=sf_link", '_blank')}>
                <img src={kid}/>
                <h3>Help Our Community!</h3>
                <div className="info-group">
                    <img src={star_img} />
                    <p>6374 Happy Lane</p>
                </div>
                <div className="info-group">
                    <img src={star_img}/>
                    <p>6pm - 8pm</p>
                </div>
            </div>
            
            <div className="contact-card" onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSd8xuvjdCEVRUm-bKZPTaoOFaerkG2HVD_ngcb6U64TAjv6SA/viewform?usp=sf_link", '_blank')}>
                <img src={kid}/>
                <h3>Help Our Community!</h3>
                <div className="info-group">
                    <img src={star_img} />
                    <p>6374 Happy Lane</p>
                </div>
                <div className="info-group">
                    <img src={star_img}/>
                    <p>6pm - 8pm</p>
                </div>
            </div>

            <div className="contact-card" onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSd8xuvjdCEVRUm-bKZPTaoOFaerkG2HVD_ngcb6U64TAjv6SA/viewform?usp=sf_link", '_blank')}>
                <img src={builders}/>
                <h3>Veteran's Fall CleanUp & Repair</h3>
                <div className="info-group">
                    <img src={star_img} />
                    <p>3736 Walkinson Drive</p>
                </div>
                <div className="info-group">
                    <img src={star_img} />
                    <p>2pm - 4pm</p>
                </div>
            </div>
            
            
        </div>
    )
}

export default Card;