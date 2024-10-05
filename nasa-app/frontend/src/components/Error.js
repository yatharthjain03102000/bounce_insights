// src/components/Error.js
import React from 'react';
import './Error.css'; // You can create a separate CSS file for error styling

const ErrorMessage = ({ message }) => (
    <div className="error">{message}</div>
);

export default ErrorMessage;
