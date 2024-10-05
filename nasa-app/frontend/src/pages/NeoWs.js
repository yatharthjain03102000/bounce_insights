import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaRocket, FaSatellite, FaRuler, FaExclamationTriangle, FaSearch } from 'react-icons/fa'; // Icons for data display
import './NeoWs.css'; // CSS for styling
import Loader from '../components/Loader'; // Import the Loader component

const NeoWs = () => {
    const [neos, setNeos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState(''); // For filtering the NEOs
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNeos = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/neows');
                setNeos(response.data.near_earth_objects);
            } catch (error) {
                console.error('Error fetching NeoWs data:', error);
                setError('Unable to load Near Earth Objects data.');
            } finally {
                setLoading(false);
            }
        };

        fetchNeos();
    }, []);

    // Filter the NEOs based on search input
    const filteredNeos = Object.entries(neos).filter(([date, objects]) =>
        objects.some((neo) => neo.name.toLowerCase().includes(search.toLowerCase()))
    );

    if (loading) return <Loader />;

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div className="neo-ws-container">
            <h1>Near Earth Objects</h1>

            {/* Search Bar */}
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search NEO by name..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <FaSearch className="search-icon" />
            </div>

            {/* Display filtered NEO data */}
            <div className="neo-grid">
                {filteredNeos.length > 0 ? (
                    filteredNeos.map(([date, objects]) => (
                        <div key={date} className="neo-card">
                            <h2>{date}</h2>
                            <ul>
                                {objects.map((neo) => (
                                    <li key={neo.id} className="neo-item">
                                        <p><strong>Name:</strong> {neo.name}</p>
                                        <p><FaRocket /> <strong>Magnitude:</strong> {neo.absolute_magnitude_h}</p>
                                        <p>
                                            <FaSatellite /> <strong>Diameter:</strong> 
                                            {`${neo.estimated_diameter.kilometers.estimated_diameter_min.toFixed(2)} - 
                                            ${neo.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2)} km`}
                                        </p>
                                        <p>
                                            <FaRuler /> <strong>Velocity:</strong> 
                                            {parseFloat(neo.close_approach_data[0].relative_velocity.kilometers_per_hour).toFixed(2)} km/h
                                        </p>
                                        <p>
                                            <FaRuler /> <strong>Miss Distance:</strong> 
                                            {parseFloat(neo.close_approach_data[0].miss_distance.kilometers).toFixed(2)} km
                                        </p>
                                        <p>
                                            <FaExclamationTriangle 
                                                color={neo.is_potentially_hazardous_asteroid ? 'red' : 'green'} 
                                            /> 
                                            <strong>Hazardous:</strong> 
                                            {neo.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                ) : (
                    <div className="no-results">No Near Earth Objects found matching your search.</div>
                )}
            </div>
        </div>
    );
};

export default NeoWs;
