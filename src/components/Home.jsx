import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Modal, Button } from 'react-bootstrap';
import HomeGif from '../assets/Home/189053_272a42c90acb2e3ad8002d063ee6554bf09731b2.gif';
import HomeGifDark from '../assets/Home/output-onlinegiftools.gif';
import foto1 from '../assets/Home/foto1.jpg';
import foto2 from '../assets/Home/foto2.jpg';
import foto3 from '../assets/Home/foto3.jpeg';
import video from '../assets/Home/20231220_111931.mp4';
import video2 from "../assets/Home/20221120_173334.mp4";
import video3 from "../assets/Home/20221130_211358.mp4";
import Sfondo from '../assets/Home/20220618_202502.jpg';
import bacca from '../assets/Home/bacca.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isLegalAge, setIsLegalAge] = useState(false);
  const [smShow, setSmShow] = useState(true);
  const isUserLoggedIn = useSelector((state) => state.user.loggedIn);
  const name = useSelector((state) => state.user.loggedIn ? state.user.user[0].name : null);
  const isDarkTheme = useSelector(state => state.theme.isDarkTheme);

  const avoidModalIfLogged = () => {
    if (isUserLoggedIn) {
      setIsLegalAge(true);
      setSmShow(false);
      window.scrollTo(0, 0);

    }
  };

  useEffect(avoidModalIfLogged, [isUserLoggedIn]);

  const handleConfirmLegalAge = () => {
    setIsLegalAge(true);
    setSmShow(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {!isLegalAge && (
        <>
          <div className="blur-background"></div>
          <Modal
            size="md"
            show={smShow}
            onHide={() => setSmShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
            centered
            closeButton={false}
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                Confirm Age
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you 18 years old or older?
              <Button onClick={handleConfirmLegalAge} className="ms-2">
                Yes
              </Button>
              <Button
                onClick={() => (window.location.href = 'https://www.google.com')}
                className="ms-2"
              >
                No
              </Button>
            </Modal.Body>
          </Modal>
        </>
      )}
      <img src={isDarkTheme ? HomeGif : HomeGifDark} alt="" />
      <Row>
  <Col className=' TitoliDiv' xs={12} style={{ backgroundImage: `url(${Sfondo})` }}>
    {isUserLoggedIn ? (
      <h3>Bentornato {name}</h3>
    ) : (
      <h3>Benvenuto</h3>
    )}
    <h1>Nel Mondo Bacca</h1>
    <h2>Produciamo e commercializziamo bevande con amore dal 2018</h2>
  </Col>
</Row>
<Col xs={12} className={isDarkTheme ? 'bg-white pt-5' : 'bg-black pt-5' }>
  <h1 className={isDarkTheme ? 'Discover' : 'DiscoverBlack'}>DISCOVER BACCA</h1>
      <Row className="ml-2 p-5 ">
        <Col xs={12} sm={4} md={4} className="first-col">
          <Link to="/products/RedBerryGin"  className="text-decoration-none">
              <div className="Trinità" style={{ backgroundImage: `url(${foto1})` }} >
              <h3>Red Berry Gin</h3>
              </div>  
           </Link>  
        </Col>
        <Col xs={12} sm={4} md={4}>
        <Link to="/products/ItalianBouquet"  className="text-decoration-none">
          <div className="Trinità" style={{ backgroundImage: `url(${foto2})` }}>
            <h3>Italian Bouquet</h3>
          </div>
          </Link>  
        </Col>
        <Col xs={12} sm={4} md={4}>
        <Link to="/create-your-custom-bottle"  className="text-decoration-none">
          <div className="Trinità" style={{ backgroundImage: `url(${foto3})` }}>
            <h3>Create Your Custom Bacca</h3>
          </div>
          </Link>
        </Col>
      </Row>
      </Col>
      <Col xs={12} style={{ 
  backgroundImage: `url(${bacca})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}}>

  <h1 className={isDarkTheme ? 'Discover2' : 'DiscoverBlack2'}>La grandezza di un prodotto risiede nella sua capacità di raccontare una storia che emana bellezza, autenticità e significato</h1> 
</Col>
      <Row className={isDarkTheme ? 'p-5' : 'p-5 bg-black '}>
  <Col xs={12} md={4}>
    <div className="video-background">
      <div className="video-wrap">
        <video autoPlay muted loop id="video-bg" style={{ width: '100%', height: '100%' }}>
          <source src={video2} type="video/mp4" />
        </video>
      </div>
    </div>
  </Col>
  <Col xs={12} md={4}>
    <div className="video-background">
      <div className="video-wrap">
        <video autoPlay muted loop id="video-bg" style={{ width: '100%', height: '100%' }}>
          <source src={video3} type="video/mp4" />
        </video>
      </div>
    </div>
  </Col>
  <Col xs={12} md={4}>
    <div className="video-background object-fit-cover">
      <div className="video-wrap">
        <video autoPlay muted loop id="video-bg" style={{ width: '100%', height: '100%' }}>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  </Col>
</Row>

    </>
  );
}

export default Home;
