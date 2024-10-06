import React, { useState, lazy, Suspense } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';
import './NasaImageLibrary.css';

const Loader = lazy(() => import('../components/Loader'));

const NasaImageLibrary = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);

    const handleSearch = async () => {
        if (!searchTerm) {
            setError('Please enter a search term.');
            return;
        }

        setLoading(true);
        setError('');
        try {
            const response = await axios.get(`https://bounce-insights-o2sf.onrender.com/api/nasa-images/${searchTerm}`);
            if (response.data && response.data.length > 0) {
                setResults(response.data);
            } else {
                setError('No results found. Please try a different search term.');
            }
        } catch (error) {
            console.error('Error fetching NASA images:', error);
            setError('Failed to fetch results. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
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

            {loading && (
                <Suspense fallback={<div>Loading...</div>}>
                    <Loader />
                </Suspense>
            )}
            {error && <p className="error">{error}</p>}

            <div className="image-grid">
                {results.length > 0 ? (
                    results.map((item) => (
                        <div
                            key={item.data[0].nasa_id}
                            className="image-card"
                            onClick={() => handleImageClick(item)}
                        >
                            <img
                                src={item.links && item.links.length > 0 ? item.links[0].href : ''}
                                alt={item.data[0].title}
                                className="image"
                            />
                            <p className="image-title">{item.data[0].title}</p>
                        </div>
                    ))
                ) : (
                    !loading && <p className="no-results">Search for any Image</p>
                )}
            </div>

            <div className="back-button">
                <Link to="/" className="back-link">Go Back to Home</Link>
            </div>

            {selectedImage && (
                <ImageModal
                    imgSrc={selectedImage.links && selectedImage.links.length > 0 ? selectedImage.links[0].href : ''}
                    title={selectedImage.data[0].title}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
};

export default NasaImageLibrary;
