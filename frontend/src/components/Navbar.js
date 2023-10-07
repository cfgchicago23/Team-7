import './Navbar.css'
import logo from './rebuilding_aurora_logo.png';

export default function Navbar(){
    return <nav className = "nav">
        <img src={logo} alt="Logo" className="logo" />
        <ul>
            <li>
                <a href = "/upcoming_events">Upcoming Events</a>
            </li>
            <li>
                <a href = "/profile">Volunteer Profile</a>   
            </li>
            <li>
                <a href = "/share">Share</a>
            </li>
            <li>
                <a href = "/resources">Resources</a>
            </li>
        </ul>
    </nav>
}