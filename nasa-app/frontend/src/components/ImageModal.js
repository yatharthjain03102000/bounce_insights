import React from 'react';
import './ImageModal.css';

const ImageModal = ({ imgSrc, title, onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content">
                <img src={imgSrc} alt={title} className="modal-image" />
                <p>{title}</p>
            </div>
        </div>
    );
};

export default ImageModal;
