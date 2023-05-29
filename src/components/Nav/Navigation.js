import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext';

export default function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext);

  return (
      <nav className="navbar navbar-expand-lg navbar-light mb-5" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link" style={{ color: 'black', backgroundColor: '#acac1c' }}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/news" className="nav-link" style={{ color: theme.color }}>News</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" style={{ color: theme.color }}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" style={{ color: theme.color }}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="ml-auto">
          <button
            className="switch-mode btn"
            onClick={toggle}
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.color,
              outline: 'none'
            }}
            data-testid="toggle-theme-btn"
          >
            Switch Nav to {!dark ? 'Dark' : 'Light'} mode
          </button>
        </div>
      </div>
    </nav>
  );
}
