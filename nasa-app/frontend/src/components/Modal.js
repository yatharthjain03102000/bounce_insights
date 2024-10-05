// src/components/Modal.js
import React from 'react';
import './Modal.css'; // You can create a separate CSS file for modal styling

const Modal = ({ photo, onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>✖</button>
                <img src={photo.img_src} alt={`Selected photo from ${photo.rover.name}`} className="modal-image" />
                <h2>{photo.rover.name}</h2>
                <p><strong>Camera:</strong> {photo.camera.full_name}</p>
                <p><strong>Date Taken:</strong> {photo.earth_date}</p>
                <p><strong>Landing Date:</strong> {photo.rover.landing_date}</p>
                <p><strong>Launch Date:</strong> {photo.rover.launch_date}</p>
                <p><strong>Status:</strong> {photo.rover.status}</p>
            </div>
        </div>
    );
};

export default Modal;
