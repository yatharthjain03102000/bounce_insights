// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
   return (
       <nav>
           <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/mars-photos">Mars Rover Photos</Link></li>
           </ul>
       </nav>
   );
};

export default Navbar;
