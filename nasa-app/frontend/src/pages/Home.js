// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
import Loader from '../components/Loader';
import ErrorMessage from '../components/Error'; // Import the ErrorMessage component

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
                setError('Error fetching APOD. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchAPOD();
    }, []);

    if (loading) return <Loader />;
    if (error) return <ErrorMessage message={error} />;

    return (
        <div className="home-container">
            <div className="content-card">
                <h1 className="title">{data.title}</h1>
                <h4 className="date">{data.date}</h4>
                <img src={data.url} alt={data.title} className="apod-image" />
                <p className="explanation">{data.explanation}</p>
                <p className="copyright">© {data.copyright}</p>
            </div>
        </div>
    );
};

export default Home;