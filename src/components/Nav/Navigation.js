import React, { Component } from 'react';

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand"></a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link active" style={{ color: 'white', backgroundColor: '#acac1c' }} href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ color: 'white' }} href="#news">
                News
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ color: 'white' }} href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ color: 'white' }} href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
