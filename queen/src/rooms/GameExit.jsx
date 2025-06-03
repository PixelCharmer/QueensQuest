// src/rooms/GameExit.jsx
import React from 'react';
import background from '../assets/backgrounds/gameexit.png'; // make sure this image exists
import '../styles/GameExit.scss';

const GameExit = () => {
    return (
        <div className="game-exit" style={{ backgroundImage: `url(${background})` }}>
            <div className="exit-text">
                <h1>🌟 Quest Complete! 🌟</h1>
                <p>
                    The Crown of Renewal pulses with golden light as you step past the bowed dragon. The chalice fills with water from the Fountain of Youth. A hush falls over the mountains.
                </p>
                <p>
                    You return to the Queen’s side. With a single sip, color returns to her cheeks, her eyes brighten, and peace settles over the realm.
                </p>
                <h2>Thank you for playing <em>Queen’s Quest: The Fountain of Youth</em></h2>
                <p>
                    Creidts:
                    <br />
                    - Storyline: Laura Leach
                    <br />
                    - Code & Design: Kari Alcoset

                </p>
            </div>
        </div>
    );
};

export default GameExit;
