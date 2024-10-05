// src/components/Loader.js
import React from 'react';
import './Loader.css'; // You can create a separate CSS file for loader styling

const Loader = () => (
    <div className="loader">
        <div className="skeleton-card"></div>
        <div className="skeleton-card"></div>
        <div className="skeleton-card"></div>
    </div>
);

export default Loader;
