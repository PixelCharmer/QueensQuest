// src/rooms/Room5Intro.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../assets/backgrounds/room5.png';
import '../styles/Room5Intro.scss';

const Room5Intro = () => {
    const navigate = useNavigate();

    return (
        <div className="room5-intro" style={{ backgroundImage: `url(${background})` }}>
            <div className="intro-text">
                <h1>The Dragon's Cathedral</h1>
                <p>
                    You emerge onto a windswept cliff. Before you lies a shattered stone cathedral built into the mountainside, its walls gilded with treasure.
                    Piles of gold shimmer. In the center sleeps a massive dragon, its breaths heavy with smoke.
                    Behind it, the Fountain of Youth glows with mist curling like silk.
                </p>
                <button onClick={() => navigate('/room5')}>Approach the Pedestal</button>
            </div>
        </div>
    );
};

export default Room5Intro;
