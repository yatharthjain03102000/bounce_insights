import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MarsPhotos.css';

const MarsPhotos = () => {
    const [rover, setRover] = useState('Curiosity');
    const [sol, setSol] = useState(1000);
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Fetch Mars photos from API
    const fetchMarsPhotos = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.get(`http://localhost:5001/api/mars-photos/${rover.toLowerCase()}/${sol}`);
            if (response.data.length === 0) {
                setError('No photos available for the selected rover and sol.');
            } else {
                setPhotos(response.data);
            }
        } catch (error) {
            console.error('Error fetching Mars photos', error);
            setError('Failed to fetch photos. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // Handle background rotation on scroll
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const rotation = scrollPosition / 10; // Adjust this for rotation speed

            // Select background container and apply rotation
            const background = document.querySelector('.mars-background');
            if (background) {
                background.style.transform = `rotate(${rotation}deg)`;
            }
        };

        // Add event listener for scroll
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="mars-photos-container">
            {/* Rotating background */}
            <div className="mars-background"></div>

            <div className="controls">
                <h1>Mars Rover Photos</h1>
                <div className="controls-inner">
                    <select onChange={(e) => setRover(e.target.value)} className="rover-select">
                        <option value="Curiosity">Curiosity</option>
                    </select>
                    <input
                        type="number"
                        value={sol}
                        onChange={(e) => setSol(e.target.value)}
                        placeholder="Sol (Martian day)"
                        className="sol-input"
                    />
                    <button onClick={fetchMarsPhotos} className="fetch-button">Fetch Photos</button>
                </div>
            </div>
            {loading && <div className="loading">Loading photos...</div>}
            {error && <div className="error">{error}</div>}
            <div className="photos-grid">
                {photos.map((photo) => (
                    <div key={photo.id} className="photo-card">
                        <img
                            src={photo.img_src}
                            alt={`${photo.rover.name} - ${photo.camera.full_name}`}
                            className="photo"
                        />
                        <div className="photo-info">
                            <p><strong>Rover:</strong> {photo.rover.name}</p>
                            <p><strong>Camera:</strong> {photo.camera.full_name}</p>
                            <p><strong>Date Taken:</strong> {photo.earth_date}</p>
                            <p><strong>Landing Date:</strong> {photo.rover.landing_date}</p>
                            <p><strong>Launch Date:</strong> {photo.rover.launch_date}</p>
                            <p><strong>Status:</strong> {photo.rover.status}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MarsPhotos;
