// src/pages/NeoWs.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaRocket, FaSatellite, FaRuler, FaExclamationTriangle } from 'react-icons/fa'; // Use FaRuler for distance representation
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
                                    <p><strong>Name:</strong> {neo.name}</p>
                                    <p><FaRocket /> <strong>Magnitude:</strong> {neo.absolute_magnitude_h}</p>
                                    <p><FaSatellite /> <strong>Diameter:</strong> {neo.estimated_diameter.kilometers.estimated_diameter_min.toFixed(2)} - {neo.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2)} km</p>
                                    <p><FaRuler /> <strong>Velocity:</strong> {neo.close_approach_data[0].relative_velocity.kilometers_per_hour} km/h</p>
                                    <p><FaRuler /> <strong>Miss Distance:</strong> {neo.close_approach_data[0].miss_distance.kilometers} km</p>
                                    <p><FaExclamationTriangle color={neo.is_potentially_hazardous_asteroid ? 'red' : 'green'} /> <strong>Hazardous:</strong> {neo.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}</p>
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
