
import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ViperHaze = () => {
  const currentYear = new Date().getFullYear(); 

  return (
    <>
    <Row className='page1v'>
      <Col className="titoloViper" xs={12}>
          <h3 className="rotateA">2006</h3> 
          <h1>VIPER HAZE</h1>
          <h3 className="rotateB">{currentYear}</h3> 
          </Col>
        <Col className="sottoTitoloViper">
          <h2>-GRAFFITI ARTIST-</h2>
      </Col>
      </Row>
      <Row  className='page2v'>
      <Col className="divIndice"> 
          <h1>INDICE</h1>
          </Col>
        <Col className="listaIndice">
          <ol>
            <li>CHI è VIPER?</li>
            <li>ABSTRACT STRANGE</li>
            <li>COLLAB</li>
          </ol>
        
      </Col>
    </Row>
    </>
  );
};

export default ViperHaze;