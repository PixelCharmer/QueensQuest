import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Room Components
import GameStart from './rooms/GameStart';
import GameExit from './rooms/GameExit';
import Room1Intro from './rooms/Room1Intro';
import Room1 from './rooms/Room1';
import Room2Intro from './rooms/Room2Intro';
import Room2 from './rooms/Room2';
import Room3Intro from './rooms/Room3Intro';
import Room3 from './rooms/Room3';
import Room4Intro from './rooms/Room4Intro';
import Room4 from './rooms/Room4';
import Room5Intro from './rooms/Room5Intro';
import Room5 from './rooms/Room5';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<GameStart />} />

            {/* Room 1 */}
            <Route path="/room1intro" element={<Room1Intro />} />
            <Route path="/room1" element={<Room1 />} />
            {/* Room 2 */}  
            <Route path="/room2intro" element={<Room2Intro />} />
            <Route path="/room2" element={<Room2 />} /> 
            {/* Room 3 */}
            <Route path="/room3intro" element={<Room3Intro />} />
            <Route path="/room3" element={<Room3 />} />
            {/* Room 4 */}
            <Route path="/room4intro" element={<Room4Intro />} />
            <Route path="/room4" element={<Room4 />} />        
            {/* Room 5 */}
            <Route path="/room5intro" element={<Room5Intro />} />
            <Route path="/room5" element={<Room5 />} />
            {/* Game Exit */}
            <Route path="/gameexit" element={<GameExit />} />


        </Routes>
    );
}
