import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/bacca spirits & co. logo-01.webp';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const userDataInSession = useSelector((state) => state.user.user[0]);
  const isUserLoggedIn = useSelector((state) => state.user.loggedIn);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/home">
          <img src={logo} alt="Logo" className="logo" />
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
              <Link className="nav-link" to="/contact">
                Contatti
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/create-your-custom-bottle">
                Create Your Custom Bottle
              </Link>
            </li>
            {isUserLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">
                    Area Personale
                  </Link>
                </li>
                <li className="nav-item">
                  <div className="avatar-container">
                    <img
                      src={userDataInSession.avatar}
                      alt="Profile Avatar"
                      className="avatar-img"
                    />
                  </div>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
