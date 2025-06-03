import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Room3Intro.scss';
import background from '../assets/backgrounds/room3.png';

const Room3Intro = () => {
    const navigate = useNavigate();

    const handleContinue = () => {
        navigate('/room3');
    };

    return (
        <div className="room3-intro" style={{ backgroundImage: `url(${background})` }}>
            <div className="intro-textbox">
                <h2>The Crypt of Forgotten Oaths</h2>
                <p>
                    The moss-covered path descends into a shadowed catacomb, lit only by eternal blue flames.
                    Statues of oathsworn knights stand vigil around a stone sarcophagus at the center of the chamber.
                    The air is thick with forgotten promises, and a plaque warns:
                </p>
                <blockquote>
                    "One oath forged her crown. One broke her heart. One sealed her fate.""
                </blockquote>
                <p>
                    Each knight once served the Queen with unwavering loyalty - or so it seemed. Among the shattered
                    remnants of their blades lie the truths you must uncover. Choose wisely... for only those who
                    understand the weight of an oath may unlock what lies within.
                </p>
                <button className="continue-button" onClick={handleContinue}>
                    Enter the Crypt
                </button>
            </div>
        </div>
    );
};

export default Room3Intro;
