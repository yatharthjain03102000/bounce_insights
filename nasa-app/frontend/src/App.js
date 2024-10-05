import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MarsPhotos from './pages/MarsPhotos';
import Navbar from './components/Navbar';  // Import the Navbar component

function App() {
    return (
        <Router>
            {/* Add Navbar here */}
            <Navbar />

            {/* Your routes */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mars-photos" element={<MarsPhotos />} />
            </Routes>
        </Router>
    );
}

export default App;
