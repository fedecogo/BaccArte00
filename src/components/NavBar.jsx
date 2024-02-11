import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/bacca spirits & co. logo-01.webp';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const userDataInSession = useSelector((state) => state.user.user[0]);
  const isUserLoggedIn = !!userDataInSession;
  console.log('User in session:', userDataInSession);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand mx-5 " to="/">
        <img src={logo} alt="Logo" />
      </Link>
      
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
          {isUserLoggedIn ? (
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                AreaPersonale
              </Link>
            </li>
          ) : (
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          )}
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              Chi Siamo
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">
              Prodotti
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/custom-bottle">
              Custom Bottle
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contatti
            </Link>
          </li>
          {isUserLoggedIn?(<div className="nav-link avatar-container">
                <img src={userDataInSession.avatar} alt="Profile Avatar" className="avatar-img" />
              </div>):(<p></p>)
              }
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
