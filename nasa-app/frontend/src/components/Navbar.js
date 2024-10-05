import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import nasalogo from '../Images/nasa.svg';

const Navbar = () => {
    const location = useLocation();
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode', !isDarkMode);
    };

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand">
                <img src={nasalogo} alt="NASA Logo" className="navbar-logo" />
            </Link>
            <ul className="navbar-links">
                <li className={location.pathname === '/' ? 'active' : ''}>
                    <Link to="/">Astrology Picture Of The Day</Link>
                </li>
                <li className={location.pathname === '/mars-photos' ? 'active' : ''}>
                    <Link to="/mars-photos">Mars Rover Photos</Link>
                </li>
                <li className={location.pathname === '/neows' ? 'active' : ''}>
                    <Link to="/neows">Near Earth Object Web Service</Link>
                </li>
                <li className={location.pathname === '/nasa-image-library' ? 'active' : ''}>
                    <Link to="/nasa-image-library">NASA Image and Video Library</Link>
                </li>
            </ul>
            <div className="navbar-actions">
                <div className="dropdown">
                    <span className="dropdown-title">Components</span>
                    <ul className="dropdown-content">
                        <li className={location.pathname === '/' ? 'active' : ''}>
                            <Link to="/">Astrology Picture Of The Day</Link>
                        </li>
                        <li className={location.pathname === '/mars-photos' ? 'active' : ''}>
                            <Link to="/mars-photos">Mars Rover Photos</Link>
                        </li>
                        <li className={location.pathname === '/neows' ? 'active' : ''}>
                            <Link to="/neows">Near Earth Object Web Service</Link>
                        </li>
                        <li className={location.pathname === '/nasa-image-library' ? 'active' : ''}>
                            <Link to="/nasa-image-library">NASA Image and Video Library</Link>
                        </li>
                    </ul>
                </div>
                <button
                    onClick={toggleDarkMode}
                    className="dark-mode-toggle"
                    title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                >
                    <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;