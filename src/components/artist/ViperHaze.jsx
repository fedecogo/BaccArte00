import React, { useEffect } from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import { Row, Col } from 'react-bootstrap';

const ViperHaze = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animated');
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPosition < windowHeight * 0.75) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
  <Row className='viperPage0 d-flex justify-content-center align-items-center text-center'>
        <div className='sottoTitolo animated2'>
          <h1>VIPERHAZE</h1>
        </div>
      </Row>
      <Row className='viperPage d-flex justify-content-center align-items-center text-center'>
        <Col className='d-flex justify-content-center mt-5 mb-5' xs={12} md={5}>
          <div className='divArtist'>
            <img className='fotoProfilo animated' src="http://res.cloudinary.com/dorr4si5z/image/upload/v1709309395/foa65gsoysmrrqjh7ue8.png" alt="" />
          </div>
        </Col>
        <Col className='mt-5 mb-5' xs={12} md={6}>
          <p className='paragraph animated'>
            Viper come artista nasce nel 2006 in un contesto Hip HoP Urbano.
            Brianza, la sua zona, è principalmente immersa nella natura, fonte d’ispirazione per tutta la sua arte.
            Essa gli ha insegnato e gli insegna tutt’oggi ad armonizzare i colori, è la sua principale maestra, forse la più importante.
            Il suo viaggio inizia dalla voglia di lasciare un segno riconoscibile ed indelebile in una società in continua trasformazione.
            La missione è quella di colorare qualsiasi superficie, dandogli una nuova armonia molto spesso persa per via dell’urbanizzazione.
            Nel tempo sviluppa la sua forma d’arte astratta, principalmente caratterizzata dalle costruzione geometrica di linee e sfere distribuite nello spazio.
            Ogni forma è studiata nei suoi minimi particolari e il colore gioca un ruolo molto importante in tutto ciò.
            Durante il suo cammino ricco d’esperienze colorate ha fatto sì che potesse arrivare a fare lavori su commissione per privati ed aziende importanti.
          </p>
        </Col>
      </Row>
      <Row className='viperPage0 d-flex justify-content-center align-items-center text-center'>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <InstagramEmbed url="https://www.instagram.com/viperhaze/" className='ig' />
        </div>
      </Row>
    </>
  );
};

export default ViperHaze;
