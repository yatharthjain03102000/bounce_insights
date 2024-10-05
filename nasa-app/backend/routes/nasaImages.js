// src/pages/ImageDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ImageDetails = ({ results }) => {
    const { id } = useParams();
    const image = results.find((item) => item.data[0].nasa_id === id);

    return (
        <div className="image-details-container">
            <h2>{image.data[0].title}</h2>
            <img src={image.links[0].href} alt={image.data[0].title} className="image-details" />
            <p>{image.data[0].description}</p>
            <p><strong>Photographer:</strong> {image.data[0].photographer || 'N/A'}</p>
            <p><strong>Date Created:</strong> {image.data[0].date_created}</p>
        </div>
    );
};

export default ImageDetails;
