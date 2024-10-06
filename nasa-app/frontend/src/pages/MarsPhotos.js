import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MarsPhotos.css';
import Loader from '../components/Loader'; 
import ErrorMessage from '../components/Error'; 
import PhotoCard from '../components/Photocard'; 

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

    useEffect(() => {
        fetchMarsPhotos();
    }, [rover, sol]);

    return (
        <div className="mars-photos-container">
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

            {loading && <Loader />}
            {error && <ErrorMessage message={error} />}

            <div className="photos-grid">
                {photos.map((photo) => (
                    <PhotoCard key={photo.id} photo={photo} />
                ))}
            </div>
        </div>
    );
};

export default MarsPhotos;
