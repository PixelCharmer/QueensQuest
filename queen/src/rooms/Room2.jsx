import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Room2.scss';

import background from '../assets/backgrounds/room2.png';
import journalPage from '../assets/game-elements/journal_page.png';
import vialSap from '../assets/game-elements/vial_sap.png';

import chimeCourage from '../assets/game-elements/chimes/chime_courage.png';
import chimeHope from '../assets/game-elements/chimes/chime_hope.png';
import chimeLoyalty from '../assets/game-elements/chimes/chime_loyalty.png';
import chimeSacrifice from '../assets/game-elements/chimes/chime_sacrifice.png';
import chimeTruth from '../assets/game-elements/chimes/chime_truth.png';

const CHIMES = [
    { name: 'Hope', img: chimeHope },
    { name: 'Sacrifice', img: chimeSacrifice },
    { name: 'Loyalty', img: chimeLoyalty },
    { name: 'Courage', img: chimeCourage },
    { name: 'Truth', img: chimeTruth }
];

const CORRECT_VALUES = ['Truth', 'Loyalty', 'Courage'];

export default function Room2() {
    const [selectedChimes, setSelectedChimes] = useState([]);
    const [solved, setSolved] = useState(false);
    const [showJournal, setShowJournal] = useState(false);
    const [puzzleStarted, setPuzzleStarted] = useState(false);
    const [showError, setShowError] = useState(false);
    const navigate = useNavigate(); // ✅ navigation

    const toggleChime = (name) => {
        setSelectedChimes(prev =>
            prev.includes(name)
                ? prev.filter(c => c !== name)
                : prev.length < 3
                    ? [...prev, name]
                    : prev
        );
    };

    const checkSolution = () => {
        const isCorrect =
            selectedChimes.length === 3 &&
            selectedChimes.every(value => CORRECT_VALUES.includes(value));

        if (isCorrect) {
            setSolved(true);
            setShowError(false);

            // ✅ Transition to next room after 3 seconds
            setTimeout(() => {
                navigate('/room3intro');
            }, 3000);
        } else {
            setShowError(true);
            setTimeout(() => setShowError(false), 3000);
        }
    };

    return (
        <div className="room2" style={{ backgroundImage: `url(${background})` }}>
            <h2>The Grove of Echoes</h2>
            <p>The whispers grow louder near the glowing tree. Which three did Queen Althea hold most dear?</p>

            {!puzzleStarted && (
                <div className="tree-node" onClick={() => setPuzzleStarted(true)}>
                    <p>Touch the tree to awaken its memory...</p>
                </div>
            )}

            {puzzleStarted && (
                <>
                    <div className="chime-area">
                        {CHIMES.map(({ name, img }) => (
                            <div
                                key={name}
                                className={`chime ${selectedChimes.includes(name) ? 'selected' : ''}`}
                                onClick={() => toggleChime(name)}
                            >
                                <img src={img} alt={name} />
                                <p>{name}</p>
                            </div>
                        ))}
                    </div>

                    <div className="controls">
                        <button onClick={checkSolution} disabled={selectedChimes.length !== 3}>
                            Place Chimes
                        </button>
                        <button onClick={() => setShowJournal(true)}>View Journal Page</button>
                    </div>

                    {showError && (
                        <div className="error-message">
                            The tree hums, but remains closed. Perhaps another combination...
                        </div>
                    )}
                </>
            )}

            {showJournal && (
                <div className="journal-popup" onClick={() => setShowJournal(false)}>
                    <img src={journalPage} alt="Journal Clue" />
                </div>
            )}

            {solved && (
                <div className="reward">
                    <img src={vialSap} alt="Glimmering Sap" />
                    <p>The tree shudders and opens. You receive a vial of sap.</p>
                </div>
            )}
        </div>
    );
}
