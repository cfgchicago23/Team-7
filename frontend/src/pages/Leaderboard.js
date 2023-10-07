import React, { useState, useEffect } from 'react';
import Navbar from '../navbar';

function Leaderboard() {
    
    const sampleData = [
        { name: 'Alice', score: 20 },
        { name: 'Bob', score: 18 },
        { name: 'Charlie', score: 15 },
        {name: 'Max', score: 5}
        // ... add more players here
    ];

    return (
        <div>
            <Navbar />
            <header className="leaderboard-header">
                <h1>Leaderboard</h1>
                <ul className="leaderboard-list">
                    {sampleData.map(player => (
                        <li key={player.id} className="player">
                            <span className="player-name">{player.name}</span>
                            <span className="player-points">{player.score} pts</span>
                        </li>
                    ))}
                </ul>
            </header>
        </div>
    );
}

export default Leaderboard;
