import React from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../assets/backgrounds/gamestart.png';
import '../styles/GameStart.scss';

export default function GameStart() {
    const navigate = useNavigate();

    return (
        <div className="game-start" style={{ backgroundImage: `url(${background})` }}>
            <div className="intro-box">
                <h1>Queen's Quest: The Fountain of Youth</h1>
                <p>
                    The Queen is dying. Her breath fades with each passing moment. As her most trusted knights,
                    you have been tasked with one final mission: seek the fabled Fountain of Youth hidden beyond perilous lands,
                    forgotten ruins, and ancient trials.
                </p>
                <p>
                    Legends whisper of a final resting place guarded by a dragon and sealed behind five sacred trials.
                    Only those who understand the Queen's life, virtues, and sacrifices may claim the fountain's gift.
                </p>
                <button onClick={() => navigate('/room1intro')}>Begin the Quest</button>
            </div>
        </div>
    );
}
