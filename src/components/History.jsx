import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const History = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "http://res.cloudinary.com/dorr4si5z/image/upload/v1709482670/viofa9p1ogbrvppfmt7t.jpg",
    "http://res.cloudinary.com/dorr4si5z/image/upload/v1709482346/sr8v67rpcb8l0r2dyold.jpg",
    "http://res.cloudinary.com/dorr4si5z/image/upload/v1709482389/op57pggqttbahwaatsi1.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Container>
        <Row xs={12} className='HistoryCol1'>
        </Row>  
        <Row>
          <h1 className='text-center'>La Nostra Storia</h1>
          <Row xs={12}> 
            <Col xs={12}  md={6} className='d-flex justify-content-center align-items-center tex-center'>
              BACCA Spirits nasce da un'idea di Lorenzo, che nel 2018 ha iniziato a pensare ad un marchio che producesse e commercializzasse liquori italiani di qualità nel mondo. città universitaria ANDARE! L'idea ha preso forma grazie al coinvolgimento di Oliver, un vecchio amico specializzato nelle vendite. Successivamente, con l'arrivo di Valentina, la struttura dell'azienda si stabilizza ed è pronta per la ricapitalizzazione.
            </Col>
            <Col xs={12} md={6} className='d-flex justify-content-center align-items-center '>
              <img  style={{ maxWidth: '100%', maxHeight: '400px', height: 'auto' }} src="http://res.cloudinary.com/dorr4si5z/image/upload/v1709481744/q4gmoysiojx3ihaq3jgl.png" alt="ImmagineAlbori" />
            </Col>
            <hr className='mt-2'/>
          </Row>
          <Row xs={12}> 
            <Col xs={12} md={6} className='d-flex justify-content-center align-items-center '>
              <img
                src={images[currentImageIndex]}
                alt={`Immagine ${currentImageIndex}`}
                style={{ maxWidth: '100%', maxHeight: '400px', height: 'auto' }}
              />
            </Col>
            <Col xs={12}  md={6} className='d-flex justify-content-center align-items-center tex-center'>
              Con perseveranza e investimenti, il trio è riuscito ad entrare nel mercato con il primo prodotto: RED Berry gin, venduto in circa 40 negozi della Lombardia nel suo primo anno di vita, ricevendo commenti positivi e elogi da parte dei responsabili del locale e dei clienti. Successivamente verrà affiancato da altri prodotti, tutti made in Italy e caratterizzati dalla ricerca di materie prime di qualità.
            </Col>
            <hr className='mt-2'/>
          </Row>
          <Row xs={12}> 
            <Col xs={12}  md={6} className='d-flex justify-content-center align-items-center tex-center'>
              BACCA Spirits è una realtà in continua crescita nel settore dell'HORECA in Italia e in Europa, che vanta fornitori italiani certificati, collaboratori in vari paesi e partnership con rivenditori locali.
            </Col>
            <Col xs={12} md={6} className='d-flex justify-content-center align-items-center tex-center'>
              <img  style={{ maxWidth: '100%', maxHeight: '400px', height: 'auto' }} src="http://res.cloudinary.com/dorr4si5z/image/upload/v1709483246/gclvjbfun2nz2aon4cgg.jpg" alt="ImmagineAlbori" />
            </Col>
            <hr className='mt-2'/>
          </Row>
        </Row>
      </Container>
    </>
  );
}

export default History;
