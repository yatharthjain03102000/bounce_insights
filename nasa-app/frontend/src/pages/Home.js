import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';

const Home = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchAPOD = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/apod');
                setData(response.data);
            } catch (err) {
                setError('Error fetching APOD');
            } finally {
                setLoading(false);
            }
        };

        fetchAPOD();
    }, []);

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="home-container">
    <h1 className="title">{data.title}</h1>
            <img src={data.url} alt={data.title} className="apod-image" />
            <p>{data.explanation}</p>
        </div>
    );
};

export default Home;