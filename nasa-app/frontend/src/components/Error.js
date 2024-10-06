import React from 'react';
import './Error.css'; 

const ErrorMessage = ({ message }) => (
    <div className="error">{message}</div>
);

export default ErrorMessage;
