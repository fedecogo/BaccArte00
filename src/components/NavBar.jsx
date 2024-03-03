import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/actions/theme';
import { FaBars } from 'react-icons/fa';
import Offcanvas from 'react-bootstrap/Offcanvas';
import LogoDarkTheme from '../assets/LogoDarkTheme.png'
import LogoLightTheme from '../assets/LogoLightTheme.png'
import { Col, Row,Dropdown } from 'react-bootstrap';

const NavBar = () => {
  const userDataInSession = useSelector((state) => state.user.user[0]);
  const isUserLoggedIn = useSelector((state) => state.user.loggedIn);
  const isDarkTheme = useSelector(state => state.theme.isDarkTheme);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleCloseMenu = () => setIsMenuOpen(false);
  //close direttamente nel btn
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isArtistOpen, setIsArtistOpen] = useState(false);
  //reduxtheme
  const dispatch = useDispatch();


  const handleThemeChange = () => {
    dispatch(toggleTheme());
  };

  const handleOpenProducts = () => {
    setIsProductsOpen(true);
  };
  
  const handleCloseProducts = () => {
    setIsProductsOpen(false);
  };

  const handleOpenArtists = () => {
    setIsArtistOpen(true);
  };
  
  const handleCloseArtists = () => {
    setIsArtistOpen(false);
  };

  




  return (
    <div className="container-fluid" id="cc">
      <div className={isDarkTheme ? "navbarr":"navbar-darkTheme"}>
        <button className="navbar__menu-button" onClick={() => setIsMenuOpen(true)}>
          <FaBars id={isDarkTheme ? "black":"white"} />
        </button>
          <Link className="navbar__logo" to="/home">
            <img id="image" src={isDarkTheme ? LogoLightTheme : LogoDarkTheme} alt="Logo" className="logo" />
          </Link>
      </div>
      <Offcanvas className={isDarkTheme ? "offcanvas-dark" : "offcanvas-light"} show={isMenuOpen} onHide={handleCloseMenu} scroll={true} backdrop={true}>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column justify-content-between">
          <Row>
            <Col xs={12} className='DivCanvas-Light'>
              <Link className={isDarkTheme ? "menu-link-light" :"menu-link-dark" } to="/home" onClick={handleCloseMenu}>
                Home
              </Link>
            </Col>         
            <Col xs={12}>
  <Dropdown onMouseOver={handleOpenProducts} onMouseLeave={handleCloseProducts}>
    <Link className={isDarkTheme ? "menu-link-light" :"menu-link-dark" } to="/products" onClick={handleCloseMenu}>
      Prodotti
    </Link>
    <Dropdown.Menu className={isDarkTheme ?"dropdown-menu-light": "dropdown-menu-dark"} show={isProductsOpen}>

      <Dropdown.Item>
        <Link className={isDarkTheme ? "menu-link-light" :"menu-link-dark" } to="products/RedBerryGin" onClick={handleCloseMenu}>
          Red Berry
        </Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link className={isDarkTheme ? "menu-link-light" :"menu-link-dark" } to="/products/italianBouquet" onClick={handleCloseMenu}>
          Italian Bouquet
        </Link>
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
</Col>
         <Col xs={12}>
            <Link className={isDarkTheme ? "menu-link-light" :"menu-link-dark" } to="/history" onClick={handleCloseMenu}>
            La Storia
          </Link>
            </Col>
            <Col xs={12}>
            <Link className={isDarkTheme ? "menu-link-light" :"menu-link-dark" } to="/values" onClick={handleCloseMenu}>
            I valori
          </Link>
            </Col>
            <Col xs={12}>
            <Link className={isDarkTheme ? "menu-link-light" :"menu-link-dark" } to="/about" onClick={handleCloseMenu}>
            Gli event
          </Link>
            </Col>
            <Col xs={12}>
  <Dropdown onMouseOver={handleOpenArtists} onMouseLeave={handleCloseArtists}>
    <Link className={isDarkTheme ? "menu-link-light" :"menu-link-dark" } onClick={handleCloseMenu}>
      Artisti
    </Link>
    <Dropdown.Menu className={isDarkTheme ?"dropdown-menu-light": "dropdown-menu-dark"} show={isArtistOpen}>

      <Dropdown.Item>
        <Link className={isDarkTheme ? "menu-link-light" :"menu-link-dark" } to="/artist/ViperHaze" onClick={handleCloseMenu}>
          ViperHaze
        </Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link className={isDarkTheme ? "menu-link-light" :"menu-link-dark" } to="/artist/Avvassena" onClick={handleCloseMenu}>
          Avvassena
        </Link>
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
</Col>
            <Col xs={12}>
            <Link className={isDarkTheme ? "menu-link-light" :"menu-link-dark" } to="/about" onClick={handleCloseMenu}>
            Lavora Con noi
          </Link>
            </Col>
            <Col xs={12}>
          <Link className={isDarkTheme ? "menu-link-light" :"menu-link-dark" } to="/create-your-custom-bottle" onClick={handleCloseMenu}>
           Create Bacca
          </Link>
          </Col>
          {isUserLoggedIn ? (
            <><div>
              <Link className={isDarkTheme ? "menu-link-light" :"menu-link-dark" } to="/profile" onClick={handleCloseMenu}>
                Area Personale
              </Link>
              <div className="avatar-container">
                <img
                  src={userDataInSession.avatar}
                  alt="Profile Avatar"
                  className="avatar-img"
                />
              </div>
              </div>
            </>
          ) : (
            <div>
              <Link className={isDarkTheme ? "menu-link-light" :"menu-link-dark" } to="/login" onClick={handleCloseMenu}>
              Login
            </Link>
            </div>
             )}
          </Row>
    
          <button className={isDarkTheme ? "button-dark" : "button-light"} onClick={handleThemeChange}>
            {isDarkTheme ? 'Tema Chiaro' : 'Tema Scuro'}
          </button>
         
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default NavBar;
