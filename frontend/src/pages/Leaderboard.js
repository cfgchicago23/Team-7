import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../navbar';
import './Leaderboard.css'
function Leaderboard() {
    const [players, setPlayers] = useState([]);
    //call backend to get leaderboard
    useEffect(() => {
        axios.get('http://localhost:3001/leaderboard')
            .then(response => setPlayers(response.data))
            .catch(error => console.error("Error fetching data: ", error));
    }, []);
    
    return (
        //display leaderboard
        
        <div>
            <Navbar />
            <header className="leaderboard-header">
                <h1>Leaderboard</h1>
                <ul className="leaderboard-list">
                    {players.map(player => (
                        <li key={player.id} className="player">
                            <span className="player-name">{player.name}</span>
                            <span className="player-points">{player.points} pts</span>
                        </li>
                    ))}
                </ul>
            </header>
        </div>
    );
}

export default Leaderboard;