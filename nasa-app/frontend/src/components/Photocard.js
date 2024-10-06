
import React from 'react';
import './Photocard.css'; 

const PhotoCard = ({ photo, onClick }) => {
    return (
        <div className="photo-card" onClick={onClick}>
            <img
                src={photo.img_src}
                alt={`${photo.rover.name} - ${photo.camera.full_name}`}
                className="photo"
            />
            <div className="photo-info">
                <p><strong>Rover:</strong> {photo.rover.name}</p>
                <p><strong>Camera:</strong> {photo.camera.full_name}</p>
                <p><strong>Date Taken:</strong> {photo.earth_date}</p>
                <p><strong>Landing Date:</strong> {photo.rover.landing_date}</p>
                <p><strong>Launch Date:</strong> {photo.rover.launch_date}</p>
                <p><strong>Status:</strong> {photo.rover.status}</p>
            </div>
        </div>
    );
};

export default PhotoCard;
