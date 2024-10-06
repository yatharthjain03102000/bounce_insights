import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MarsPhotos from './pages/MarsPhotos';
import NeoWs from './pages/NeoWs';          
import NasaImageLibrary from './pages/NasaImageLibrary'; 
import Navbar from './components/Navbar';   



function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mars-photos" element={<MarsPhotos />} /> 
                <Route path="/neows" element={<NeoWs />} />                   
                <Route path="/nasa-image-library" element={<NasaImageLibrary />} />  
            </Routes>
        </Router>
    );
}

export default App;
