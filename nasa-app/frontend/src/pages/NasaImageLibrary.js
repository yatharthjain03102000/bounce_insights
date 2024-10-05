// src/pages/NasaImageLibrary.js
import React, { useState } from 'react';
import axios from 'axios';
import './NasaImageLibrary.css';

const NasaImageLibrary = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.get(`http://localhost:5001/api/nasa-images/${searchTerm}`);
            setResults(response.data);
        } catch (error) {
            console.error('Error fetching NASA images:', error);
            setError('Failed to fetch results. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="nasa-image-library-container">
            <h3>NASA Image and Video Library</h3>
            <div className="search-bar">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for images or videos..."
                    className="search-input"
                />
                <button onClick={handleSearch} className="search-button">Search</button>
            </div>

            {loading && <p className="loading">Loading results...</p>}
            {error && <p className="error">{error}</p>}

            <div className="image-grid">
                {results.map((item) => (
                    <div key={item.data[0].nasa_id} className="image-card">
                        <img
                            src={item.links ? item.links[0].href : ''}
                            alt={item.data[0].title}
                            className="image"
                        />
                        <p className="image-title">{item.data[0].title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NasaImageLibrary;
