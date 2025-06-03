import React from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../assets/backgrounds/roomintros.png';
import '../styles/Room1Intro.scss';

export default function Room1Intro() {
    const navigate = useNavigate();

    return (
        <div className="room1-intro" style={{ backgroundImage: `url(${background})` }}>
            <div className="intro-panel">
                <h2>The Temple of Whispers</h2>
                <p>
                    The journey begins in a vine wrapped stone temple built into a cliff. The air hums with energy,
                    and etched on the walls are the faces of past queens, watching silently. In the center stands a
                    circular pedestal to hold masks - each  made in the image of a powerful emotion.
                </p>
                <p>
                    Only by understanding the Queen's past and the masks she wore may you unlock the path forward.
                </p>
                <button onClick={() => navigate('/room1')}>Enter the Temple</button>
            </div>
        </div>
    );
}
