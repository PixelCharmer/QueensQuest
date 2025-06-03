// src/rooms/Room5.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../assets/backgrounds/room5.png';
import amulet from '../assets/game-elements/artifacts/artifact_amulet.png';
import vial from '../assets/game-elements/artifacts/artifact_vial.png';
import orb from '../assets/game-elements/artifacts/artifact_orb.png';
import gemstone from '../assets/game-elements/artifacts/artifact_gemstone.png';
import '../styles/Room5.scss';

const CORRECT_ORDER = ['amulet', 'vial', 'orb', 'gemstone'];

const clues = [
    {
        id: 1, text: "The soul was offered first within temple light.",
        style: { top: '15%', left: '35%' }
    },
    {
        id: 2, text: "Only with a pure heart could the grove’s sap be drawn.",
        style: { top: '87%', left: '69%' }
    },
    {
        id: 3, text: "The stars obey those whose oath remains unbroken.",
        style: { top: '47.5%', left: '30%' }
    }
];

const Room5 = () => {
    const [puzzleVisible, setPuzzleVisible] = useState(false);
    const [placedItems, setPlacedItems] = useState([]);
    const [message, setMessage] = useState('');
    const [visibleClues, setVisibleClues] = useState(clues);
    const navigate = useNavigate();

    const handlePlace = (item) => {
        if (placedItems.length < 4) {
            setPlacedItems([...placedItems, item]);
        }
    };

    const handleSubmit = () => {
        const isCorrect = JSON.stringify(placedItems) === JSON.stringify(CORRECT_ORDER);
        if (isCorrect) {
            navigate('/gameexit');
        } else {
            setMessage("The artifacts tremble... something is wrong.");
        }
    };

    const handleReset = () => {
        setPlacedItems([]);
        setMessage('');
    };

    const handleClueDismiss = (id) => {
        setVisibleClues(prev => prev.filter(clue => clue.id !== id));
    };

    return (
        <div className="room5" style={{ backgroundImage: `url(${background})` }}>
            {!puzzleVisible && (
                <>
                    <div className="clickable-crown" onClick={() => setPuzzleVisible(true)} title="Inspect the Crown" />
                    {visibleClues.map(clue => (
                        <div
                            key={clue.id}
                            className="clue-node"
                            style={clue.style}
                            onClick={() => handleClueDismiss(clue.id)}
                        >
                            <div className="clue-text">{clue.text}</div>
                        </div>
                    ))}
                </>
            )}

            {puzzleVisible && (
                <div className="puzzle-area">
                    <div className="slots">
                        {[0, 1, 2, 3].map((i) => (
                            <div className="slot" key={i}>
                                {placedItems[i] && (
                                    <img
                                        src={
                                            placedItems[i] === 'amulet' ? amulet :
                                                placedItems[i] === 'vial' ? vial :
                                                    placedItems[i] === 'orb' ? orb :
                                                        gemstone
                                        }
                                        alt={placedItems[i]}
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="artifacts">
                        {['vial', 'orb', 'amulet', 'gemstone'].map((item) => (
                            !placedItems.includes(item) && (
                                <img
                                    key={item}
                                    src={
                                        item === 'amulet' ? amulet :
                                            item === 'vial' ? vial :
                                                item === 'orb' ? orb :
                                                    gemstone
                                    }
                                    alt={item}
                                    className="artifact"
                                    onClick={() => handlePlace(item)}
                                />
                            )
                        ))}
                    </div>

                    <div className="controls">
                        <button onClick={handleSubmit}>Submit</button>
                        <button onClick={handleReset}>Reset</button>
                        <button onClick={() => setPuzzleVisible(false)}>Close Puzzle</button>
                    </div>

                    {message && <div className="message">{message}</div>}
                </div>
            )}
        </div>
    );
};

export default Room5;
