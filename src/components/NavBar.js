import React from 'react';
import { NavLink } from 'react-router-dom';  // Import NavLink
import { useTheme } from './ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const { theme, toggleTheme } = useTheme(); // Get theme and toggle function
    // Set navbar background color based on the current theme
    const navbarClass = theme === 'light' ? 'navbar-light bg-light' : 'navbar-dark bg-dark';
    const background = theme === 'light' ? 'bg-light' : 'bg-dark';
    const textColor = theme === 'light' ? 'text-black' : 'text-white';
    
    return (
        <nav className={`navbar navbar-expand-lg fw-medium ${navbarClass} fixed-top`}>
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">NewsWave</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink 
                                className="nav-link" 
                                to="/" 
                                activeClassName="active"  // Set the active class here
                            >
                                Top
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className="nav-link" 
                                to="/sports" 
                                activeClassName="active" 
                            >
                                Sports
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className="nav-link" 
                                to="/technology" 
                                activeClassName="active" 
                            >
                                Technology
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className="nav-link" 
                                to="/business" 
                                activeClassName="active" 
                            >
                                Business
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className="nav-link" 
                                to="/science" 
                                activeClassName="active" 
                            >
                                Science
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className="nav-link" 
                                to="/entertainment" 
                                activeClassName="active" 
                            >
                                Entertainment
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className="nav-link" 
                                to="/health" 
                                activeClassName="active" 
                            >
                                Health
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className="nav-link" 
                                to="/world" 
                                activeClassName="active" 
                            >
                                World
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className="nav-link" 
                                to="/politics" 
                                activeClassName="active" 
                            >
                                Politics
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className="nav-link" 
                                to="/environment" 
                                activeClassName="active" 
                            >
                                Environment
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink 
                                className="nav-link" 
                                to="/food" 
                                activeClassName="active" 
                            >
                                Food
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <button onClick={toggleTheme} className={`btn btn-outline-secondary mx-sm-2 ${background} ${textColor}`}>
                                <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
