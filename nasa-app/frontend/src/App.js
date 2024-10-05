import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MarsPhotos from './pages/MarsPhotos';
import NeoWs from './pages/NeoWs';          // Import NeoWs page
import NasaImageLibrary from './pages/NasaImageLibrary';  // Import NASA Image Library page
import Navbar from './components/Navbar';   // Import Navbar



function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mars-photos" element={<MarsPhotos />} /> 
                <Route path="/neows" element={<NeoWs />} />                    {/* NeoWs route */}
                <Route path="/nasa-image-library" element={<NasaImageLibrary />} />  {/* NASA Image Library route */}
            </Routes>
        </Router>
    );
}

export default App;
