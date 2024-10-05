// src/pages/NeoWs.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NeoWs.css'; // Import CSS for styling

const NeoWs = () => {
    const [neos, setNeos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNeos = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/neows');
                setNeos(response.data.near_earth_objects);
            } catch (error) {
                console.error('Error fetching NeoWs data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchNeos();
    }, []);

    if (loading) return <div className="loading">Loading Near Earth Objects...</div>;

    return (
        <div className="neo-ws-container">
            <h1>Near Earth Objects</h1>
            <div className="neo-grid">
                {Object.entries(neos).map(([date, objects]) => (
                    <div key={date} className="neo-card">
                        <h2>{date}</h2>
                        <ul>
                            {objects.map((neo) => (
                                <li key={neo.id} className="neo-item">
                                    {neo.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NeoWs;
