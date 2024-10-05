import React, { useState } from 'react';
import axios from 'axios';
import './MarsPhotos.css';

const MarsPhotos = () => {
    const [rover, setRover] = useState('Curiosity');
    const [sol, setSol] = useState(1000);
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchMarsPhotos = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.get(`http://localhost:5001/api/mars-photos/${rover.toLowerCase()}/${sol}`);
            console.log(response.data); // Log the API response
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

    return (
        <div className="mars-photos-container">
            <div className="controls">
                <h1>Mars Rover Photos</h1>
                <div className="controls-inner">
                    <select onChange={(e) => setRover(e.target.value)} className="rover-select">
                        <option value="Curiosity">Curiosity</option>
                        <option value="Opportunity">Opportunity</option>
                        <option value="Spirit">Spirit</option>
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
                    <img
                        key={photo.id}
                        src={photo.img_src}
                        alt={photo.rover.name}
                        className="photo"
                    />
                ))}
            </div>
        </div>
    );
};

export default MarsPhotos;