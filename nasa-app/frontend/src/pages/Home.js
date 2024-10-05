import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>{data.title}</h1>
            <img src={data.url} alt={data.title} style={{ width: '80%', height: 'auto' }} />
            <p>{data.explanation}</p>
        </div>
    );
};

export default Home;
