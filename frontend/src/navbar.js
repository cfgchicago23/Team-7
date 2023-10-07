import './navbar.css'
import logo from './rebuilding_aurora_logo.png';

export default function Navbar(){
    return <nav className = "nav">
        <img src={logo} alt="Logo" className="logo" />
        <ul>
            <li>
                <a href = "/card">Events</a>
            </li>
            <li>
                <a href = "/profile">Profile</a>   
            </li>
            <li>
                <a href = "/share">Share</a>
            </li>
            
            <li>
                <a href = "/resources">Resources</a>
            </li>
            <li>
                <a href = "/leaderboard">Leaderboard</a>
            </li>
            <li>
                <a href = "/">Logout</a>
            </li>
        </ul>
    </nav>
}