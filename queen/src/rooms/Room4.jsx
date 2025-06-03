import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../assets/backgrounds/room4.png';
import dialBase from '../assets/game-elements/dial_base.png';
import dialTop from '../assets/game-elements/dial_top.png';
import leaflet from '../assets/game-elements/dusty_leaflet.png';
import pages from '../assets/game-elements/dusty_pages.png';
import gemstone from '../assets/game-elements/artifacts/artifact_gemstone.png';
import '../styles/Room4.scss';

const symbols = ['Serpent', 'Owl', 'Wolf', 'Lion', 'Stag'];

const Room4 = () => {
    const [rotation, setRotation] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOrder, setSelectedOrder] = useState([]);
    const [showLeaflet, setShowLeaflet] = useState(false);
    const [showPages, setShowPages] = useState(false);
    const [showGemstone, setShowGemstone] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const rotateDial = () => {
        const newIndex = (currentIndex + 1) % symbols.length;
        setCurrentIndex(newIndex);
        setRotation(rotation + 72);
    };

    const addSymbol = () => {
        const newOrder = [...selectedOrder, symbols[currentIndex]];

        if (newOrder.length === 3) {
            const correctSequence = ['Serpent', 'Owl', 'Wolf'];
            const isCorrect = newOrder.every((val, idx) => val === correctSequence[idx]);

            if (isCorrect) {
                setMessage('✨ The light focuses on a wall panel, revealing a glowing gemstone...');
                setShowGemstone(true);
                setTimeout(() => {
                    navigate('/room5intro');
                }, 3000);
            } else {
                setMessage('❌ Nothing happens… perhaps the order is wrong.');
                setTimeout(() => {
                    setSelectedOrder([]);
                    setMessage('');
                }, 2000);
            }
        }

        setSelectedOrder(newOrder);
    };

    return (
        <div className="room4" style={{ backgroundImage: `url(${background})` }}>
            {/* Node 1: Leaflet */}
            <div className="clue-node leaflet-node" onClick={() => setShowLeaflet(true)} />

            {/* Node 2: Pages */}
            <div className="clue-node pages-node" onClick={() => setShowPages(true)} />

            {/* Overlay: Leaflet */}
            {showLeaflet && (
                <div className="book-overlay" onClick={() => setShowLeaflet(false)}>
                    <img src={leaflet} alt="Dusty Leaflet" />
                </div>
            )}

            {/* Overlay: Pages */}
            {showPages && (
                <div className="book-overlay" onClick={() => setShowPages(false)}>
                    <img src={pages} alt="Dusty Pages" />
                </div>
            )}

            <div className="dial-container">
                <img src={dialBase} alt="Dial base" className="dial-base" />
                <div
                    className="dial-top"
                    onClick={rotateDial}
                    style={{ transform: `rotate(${rotation}deg)` }}
                >
                    <img src={dialTop} alt="Dial top" />
                </div>
            </div>

            <div className="dial-button">
                <button onClick={addSymbol}>Select {symbols[currentIndex]}</button>
            </div>

            <div className="sequence">
                <p>Sequence: {selectedOrder.join(' → ')}</p>
                <p>{message}</p>
            </div>

            {showGemstone && (
                <div className="gemstone-reveal">
                    <img src={gemstone} alt="Gemstone Artifact" />
                </div>
            )}
        </div>
    );
};

export default Room4;
