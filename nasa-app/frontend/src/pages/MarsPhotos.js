import React, { useState } from 'react';
import axios from 'axios';
import './MarsPhotos.css';

const MarsPhotos = () => {
    const [rover, setRover] = useState('Curiosity');
    const [sol, setSol] = useState(1000);
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchMarsPhotos = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:5001/api/mars-photos/${rover.toLowerCase()}/${sol}`);
            setPhotos(response.data);
        } catch (error) {
            console.error('Error fetching Mars photos', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mars-photos-container">
        <div className="controls">
            <h1>Mars Rover Photos</h1>
            <select onChange={(e) => setRover(e.target.value)}>
                <option value="Curiosity">Curiosity</option>
                <option value="Opportunity">Opportunity</option>
                <option value="Spirit">Spirit</option>
            </select>
            <input
                type="number"
                value={sol}
                onChange={(e) => setSol(e.target.value)}
                placeholder="Sol (Martian day)"
            />
            <button onClick={fetchMarsPhotos}>Fetch Photos</button>
            </div>
            {loading && <div>Loading...</div>}
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {photos.map((photo) => (
                    <img
                        key={photo.id}
                        src={photo.img_src}
                        alt={photo.rover.name}
                        style={{ width: '200px', margin: '10px' }}
                    />
                ))}
            </div>
        </div>
    );
};

export default MarsPhotos;
