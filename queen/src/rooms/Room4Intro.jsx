import React from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../assets/backgrounds/room4.png';
import '../styles/Room4Intro.scss';

const Room4Intro = () => {
    const navigate = useNavigate();

    return (
        <div className="room4intro" style={{ backgroundImage: `url(${background})` }}>
            <div className="intro-text">
                <h2>The Sanctum of the Moonwatchers</h2>
                <p>
                    You climb high into a star-lit tower where constellations spin slowly across the ceiling.
                    The Moonwatchers were ancient seers, sworn to protect the Fountain's prophecy. A ring of mirrors
                    circles the room, all pointing inward.
                </p>
                <button onClick={() => navigate('/room4')}>Continue</button>
            </div>
        </div>
    );
};

export default Room4Intro;
