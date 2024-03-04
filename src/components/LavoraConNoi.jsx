import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

const LavoraConNoi = () => {
  return (
    <>
      <Row className="mt-5">
        <Col xs={12}>
          <h2>BACCA Spirits & Co. è in continua crescita e alla ricerca di partner affidabili con cui costruire rapporti lavorativi duraturi e fruttiferi</h2>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col xs={12} sm={6}>
          <h3>Vuoi i nostri prodotti nel tuo locale?</h3>
          <p>Scopri come ottenerli ad un prezzo concorrenziale, accedendo ai nostri programmi di rewarding.</p>
          
        </Col>
        <Col xs={12} sm={6}>
          <h3>BACCA Spirits & co. ricerca collaboratori nel settore delle vendite!</h3>
          <p>Ti diamo accesso a risorse di formazione, gestione gadget e a scalette di vendita tra le più alte del settore: contattaci per un colloquio conoscitivo.</p>
          
        </Col>
      </Row>
      <Row className="mt-5">
        <Col xs={12}>
          <h3>Interessato alla nostra linea?</h3>
          <p>Abbiamo la volontà di legarci a rivenditori a cui affidare in esclusiva una zona territoriale.</p>
          <p>Incontriamoci per un assaggio nei nostri prodotti.</p>
          
        </Col>
      </Row>
      <Row className="mt-5">
        <Col xs={12}>
          <h3>Per te abbiamo pensato a una formula vantaggiosa</h3>
          <p>Che non ti vincoli a noi ma che ti porti guadagni in base al volume di vendita del contratto siglato in seguito alla tua segnalazione!</p>
          
        </Col>
      </Row>
    </>
  );
}

export default LavoraConNoi;
