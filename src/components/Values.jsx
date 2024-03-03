import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Values = () => {
  return (
   
      <Container> 
        <h1 className="text-center mt-5">I Nostri Valori</h1>
        <Row>
          <Col xs={12} md={4} className='d-flex justify-content-center align-items-center tex-center'>
            <img style={{ maxWidth: '100%', maxHeight: '400px', height: 'auto' }} src="http://res.cloudinary.com/dorr4si5z/image/upload/v1709485046/znggsw6vybmijidjw8k1.png" alt="Made in Italy" />
          </Col>
          <Col xs={12} md={8} className='d-flex justify-content-center align-items-center tex-center flex-column '>
            <h2>1) Made in Italy</h2>
            <p>Crediamo fortemente nel Made in Italy. Siamo certi che maggiore sarà la diffusione dei prodotti italiani all’estero, maggiore sarà il beneficio che tutto il paese avrà da questo fattore. Per questo la nostra filiera e gli ingredienti che utilizziamo nelle nostre produzioni sono italiani!</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8} className='d-flex justify-content-center align-items-center tex-center flex-column '>
            <h2>2) Qualità</h2>
            <p>È importante per noi far comprendere la qualità intrinseca dei nostri prodotti, in quanto utilizziamo solo preparati e spezie lavorati in Italia, da fornitori d'eccellenza. La qualità è il concetto fondamentale che applichiamo alla base dei nostri processi decisionali e delle nostre scelte produttive.</p>
          </Col>
          <Col xs={12} md={4} className='d-flex justify-content-center align-items-center tex-center'>
            <img style={{ maxWidth: '100%', maxHeight: '400px', height: 'auto' }} src="http://res.cloudinary.com/dorr4si5z/image/upload/v1709485694/rerwgqvfi4ccv3xknuku.png" alt="Qualità" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4} className='d-flex justify-content-center align-items-center tex-center'>
            <img style={{ maxWidth: '100%', maxHeight: '400px', height: 'auto' }} src="http://res.cloudinary.com/dorr4si5z/image/upload/v1709486317/ecn2hnzuu1kg24zjdrvn.png" alt="Equità" />
          </Col>
          <Col xs={12} md={8} className='d-flex justify-content-center align-items-center tex-center flex-column '>
            <h2>3) Equità</h2>
            <p>Abbiamo verificato che le aziende con cui collaboriamo credano ed agiscano in nome dei valori in cui crediamo e che si impegnino a mantenere livelli di equità sociale e di genere all’interno della loro struttura aziendale.</p>
          </Col>
        </Row>
      </Container>
  
  );
}

export default Values;
