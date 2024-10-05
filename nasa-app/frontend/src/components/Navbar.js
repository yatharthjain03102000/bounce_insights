import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
   return (
       <nav className="navbar">
           <div className="navbar-brand">NASA App</div>
           <ul className="navbar-links">
               <li><Link to="/">Astrology Picture Of The Day</Link></li>
               <li><Link to="/mars-photos">Mars Rover Photos</Link></li>
           </ul>
       </nav>
   );
};

export default Navbar;