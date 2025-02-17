import React from 'react';
import { Link } from 'react-router-dom';
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
                <Link className="navbar-brand" to="/">NewsWave</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link className="nav-link" to="/">Top</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/world">World</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/politics">Politics</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/environment">Environment</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/food">Food</Link></li>
                    </ul>
                </div>
                <button onClick={toggleTheme} className={`btn btn-outline-secondary mx-1 ml-2 ${background} ${textColor}`}>
                    <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
