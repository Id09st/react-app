import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'
export default function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext)
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
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
              <li className="nav-item"><a className="nav-link" style={{ color: 'black', backgroundColor: '#acac1c' }} href='#home'>Home</a></li>
              <li className="nav-item"><a className="nav-link" style={{ color: theme.color }} href='#news'>News</a></li>
              <li className="nav-item"><a className="nav-link" style={{ color: theme.color }} href='#about'>About</a></li>
              <li className="nav-item"><a className="nav-link" style={{ color: theme.color }} href='#contact'>Contact</a></li>
          </ul>
        </div>
          <div style={{position: 'relative'}}>
          <a className='switch-mode' href='#' onClick={toggle}
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color,
            outline: 'none'
          }} data-testid="toggle-theme-btn"
        >
          Switch Nav to {!dark ? 'Dark' : 'Light'} mode
         </a>
         </div>
      </nav>
    </div>
  )
}
