import './navbar.css'
import './App.css';
import logo from './rebuilding_aurora_logo.png';

export default function Navbar_Login(){
    return <nav className = "nav">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Come Volunteer!</h1>
        <ul>
            <li>
                <a href="/login" className="login-button">Login</a>
            </li>
            <li>
                <a href="/signup" className="signup-button">Sign Up</a>
            </li>

        </ul>
    </nav>
}