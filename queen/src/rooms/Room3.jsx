import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Room3.scss';

import background from '../assets/backgrounds/room3.png';
import orb from '../assets/game-elements/dragon_orb.png';

import hiltGuard from '../assets/game-elements/knights/hilt_guard.png';
import hiltLove from '../assets/game-elements/knights/hilt_love.png';
import hiltLoyalty from '../assets/game-elements/knights/hilt_loyalty.png';

import statueValor from '../assets/game-elements/knights/statue_valor.png';
import statueLoyalty from '../assets/game-elements/knights/statue_loyalty.png';
import statuePassion from '../assets/game-elements/knights/statue_passion.png';

const hilts = [
    { id: 'love', src: hiltLove, label: 'Love Her Above Duty' },
    { id: 'guard', src: hiltGuard, label: 'Guard Her Throne' },
    { id: 'loyalty', src: hiltLoyalty, label: 'Never Question Her Will' }
];

const statues = [
    { id: 'valor', src: statueValor, clue: 'Fell at the gates in honor' },
    { id: 'loyalty', src: statueLoyalty, clue: 'Never wavered, never questioned' },
    { id: 'passion', src: statuePassion, clue: 'Exiled for betrayal of duty' }
];

const correctAnswers = {
    valor: 'guard',
    loyalty: 'loyalty',
    passion: 'love'
};

const Room3 = () => {
    const [puzzleOpen, setPuzzleOpen] = useState(false);
    const [selected, setSelected] = useState(null);
    const [assignments, setAssignments] = useState({});
    const [solved, setSolved] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleHiltClick = (id) => {
        setSelected(id);
    };

    const handleStatueClick = (statueId) => {
        if (!selected) return;
        setAssignments((prev) => ({ ...prev, [statueId]: selected }));
        setSelected(null);
    };

    const handleSubmit = () => {
        const isComplete = Object.keys(correctAnswers).every((key) => assignments[key]);
        if (!isComplete) {
            setError('All hilts must be placed before submitting.');
            return;
        }

        const isCorrect = Object.entries(correctAnswers).every(
            ([statue, hilt]) => assignments[statue] === hilt
        );

        if (isCorrect) {
            setSolved(true);
            setError('');

            // Automatically navigate to Room4Intro after delay
            setTimeout(() => {
                navigate('/room4intro');
            }, 2000);
        } else {
            setError('The oaths do not align correctly.');
        }
    };

    const handleReset = () => {
        setAssignments({});
        setSelected(null);
        setError('');
        setSolved(false);
    };

    const handleExit = () => {
        setPuzzleOpen(false);
        setSelected(null);
        setError('');
    };

    return (
        <div className="room3" style={{ backgroundImage: `url(${background})` }}>
            {!puzzleOpen && (
                <>
                    {/* Hint Nodes */}
                    <div className="hint-node hint-main">
                        <span className="hint-text">
                            One oath forged her crown. One broke her heart. One sealed her fate.
                        </span>
                    </div>

                    <div className="hint-node hint-hidden hint1">
                        <span className="hint-text">He stood alone as the enemy breached the gate.</span>
                    </div>
                    <div className="hint-node hint-hidden hint2">
                        <span className="hint-text">They say he followed orders... even when it broke him.</span>
                    </div>
                    <div className="hint-node hint-hidden hint3">
                        <span className="hint-text">Love blinded him to duty and doomed them both.</span>
                    </div>

                    {/* Puzzle Access */}
                    <div className="puzzle-gate" onClick={() => setPuzzleOpen(true)}>
                        <h2>Approach the Sarcophagus</h2>
                        <p>Click here to examine the statues and the broken hilts.</p>
                    </div>
                </>
            )}

            {puzzleOpen && (
                <>
                    <div className="controls">
                        <button onClick={handleExit}>Exit</button>
                        <button onClick={handleReset}>Reset</button>
                        <button onClick={handleSubmit}>Submit</button>
                    </div>

                    <div className="intro-plaque">
                        One oath forged her crown. One broke her heart. One sealed her fate.
                    </div>

                    <div className="statue-area">
                        {statues.map((statue) => (
                            <div
                                key={statue.id}
                                className="statue-block"
                                onClick={() => handleStatueClick(statue.id)}
                            >
                                <img src={statue.src} alt={statue.id} className="statue-img" />
                                <div className="clue-text">{statue.clue}</div>
                                {assignments[statue.id] && (
                                    <img
                                        className="hilt-assigned"
                                        src={hilts.find((h) => h.id === assignments[statue.id]).src}
                                        alt="assigned-hilt"
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    <p className="hilt-instructions">
                        🛡️ Select a hilt below, then click the knight statue you believe it belongs to.
                    </p>

                    <div className="hilt-inventory">
                        {hilts.map((hilt) => (
                            <div
                                key={hilt.id}
                                className={`hilt-container ${selected === hilt.id ? 'selected' : ''}`}
                                onClick={() => handleHiltClick(hilt.id)}
                            >
                                <img src={hilt.src} alt={hilt.label} className="hilt-item" />
                                <p className="hilt-label">{hilt.label}</p>
                            </div>
                        ))}
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    {solved && (
                        <div className="orb-reveal">
                            <img src={orb} alt="Dragon Orb" />
                            <p>The sarcophagus opens, revealing the glowing orb etched with a dragon's eye.</p>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Room3;
