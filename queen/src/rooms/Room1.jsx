import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../assets/backgrounds/room1.png';

import fear from '../assets/game-elements/masks/mask_fear.png';
import joy from '../assets/game-elements/masks/mask_joy.png';
import rage from '../assets/game-elements/masks/mask_rage.png';
import sorrow from '../assets/game-elements/masks/mask_sorrow.png';
import serenity from '../assets/game-elements/masks/mask_serenity.png';
import artifactAmulet from '../assets/game-elements/artifacts/artifact_amulet.png';

import '../styles/Room1.scss';

const MASKS = [
    { id: 'serenity', img: serenity },
    { id: 'sorrow', img: sorrow },
    { id: 'joy', img: joy },
    { id: 'fear', img: fear },
    { id: 'rage', img: rage },
];

const SCROLL_CLUES = [
    'She trembled, breath shallow, full of fright as she prepared to bring life into the world.',
    'Gleeful laughter echoed as rose petals rained upon her during her coronation.',
    'Steel clashed and fury flared in her eyes as she led them into battle.',
    'Tears welled as she lit the incense in honor of her fallen sister.',
    'In solitude, she knelt before the ancient gods, eyes closed in silent thanks.',
];

const CORRECT_ORDER = ['fear', 'joy', 'rage', 'sorrow', 'serenity'];

export default function Room1() {
    const [selectedMask, setSelectedMask] = useState(null);
    const [placedMasks, setPlacedMasks] = useState(Array(5).fill(null));
    const [showScrolls, setShowScrolls] = useState(false);
    const [showPuzzle, setShowPuzzle] = useState(false);
    const [showAmulet, setShowAmulet] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSlotClick = (index) => {
        if (selectedMask) {
            const newPlaced = [...placedMasks];
            newPlaced[index] = selectedMask;
            setPlacedMasks(newPlaced);
            setSelectedMask(null);
        }
    };

    const handleSubmit = () => {
        setErrorMessage('');

        if (placedMasks.includes(null)) {
            alert('You must place all five masks before submitting.');
            return;
        }

        if (JSON.stringify(placedMasks) === JSON.stringify(CORRECT_ORDER)) {
            setShowAmulet(true);
            setTimeout(() => navigate('/room2intro'), 2500);
        } else {
            setErrorMessage('The masks do not appear to be in the correct order.');
        }
    };

    const handleReset = () => {
        setPlacedMasks(Array(5).fill(null));
        setSelectedMask(null);
        setErrorMessage('');
    };

    return (
        <div className="room1" style={{ backgroundImage: `url(${background})` }}>
            <h2>The Temple of Whispers</h2>
            <p>The Queen wore many faces!</p>

            {!showPuzzle && (
                <div className="pedestal-closed" onClick={() => setShowPuzzle(true)}>
                    <div className="glow-circle" />
                </div>
            )}

            {showPuzzle && (
                <>
                    <p className="puzzle-instruction">Click a mask, then click the slot it belongs in.</p>

                    <div className="scroll-clue-node" onClick={() => setShowScrolls(!showScrolls)}>
                        <div className="clue-node" />
                        <p>{showScrolls ? 'Hide Scrolls' : 'Read Scrolls'}</p>
                    </div>

                    {showScrolls && (
                        <div className="scrolls">
                            <h3>Clues</h3>
                            {SCROLL_CLUES.map((text, i) => (
                                <div key={i} className="scroll">{text}</div>
                            ))}
                        </div>
                    )}

                    <div className="masks">
                        {MASKS.map((mask) => (
                            <img
                                key={mask.id}
                                src={mask.img}
                                alt={mask.id}
                                className={`mask ${selectedMask === mask.id ? 'selected' : ''}`}
                                onClick={() => setSelectedMask(mask.id)}
                            />
                        ))}
                    </div>

                    <div className="pedestal">
                        {placedMasks.map((maskId, index) => (
                            <div key={index} className="slot" onClick={() => handleSlotClick(index)}>
                                {maskId && <img src={MASKS.find(m => m.id === maskId).img} alt={maskId} />}
                            </div>
                        ))}
                    </div>

                    {errorMessage && (
                        <p className="error-message">{errorMessage}</p>
                    )}

                    <div className="puzzle-buttons">
                        <button onClick={handleSubmit}>Submit</button>
                        <button onClick={handleReset}>Reset</button>
                    </div>
                </>
            )}

            {showAmulet && (
                <div className="amulet-overlay">
                    <img src={artifactAmulet} alt="Artifact Amulet" />
                    <p>The amulet glows faintly, revealing a path forward...</p>
                </div>
            )}
        </div>
    );
}
