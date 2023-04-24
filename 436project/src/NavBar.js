import React from 'react';
import {Link, NavLink} from "react-router-dom"
import './NavBar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink exact to="/Library">
            Library
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/Profile">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/Stat">
            Stats
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar