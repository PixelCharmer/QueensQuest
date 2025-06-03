import React from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../assets/backgrounds/room2.png';
import '../styles/Room2Intro.scss';

export default function Room2Intro() {
    const navigate = useNavigate();

    return (
        <div className="room2-intro" style={{ backgroundImage: `url(${background})` }}>
            <div className="intro-box">
                <h1>The Grove of Echoes</h1>
                <p>
                    The moment you step beneath the tree canopy, the air shifts.
                    Moonlight dances through twisted branches. Whispers ride the breeze - half words, half memories.
                    In the center stands a radiant tree, its hollow pulsing with ancient energy.
                    Five stone chimes sway gently as if waiting.
                </p>
                <button onClick={() => navigate('/room2')}>Enter the Grove</button>
            </div>
        </div>
    );
}
