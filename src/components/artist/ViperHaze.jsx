
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
    <Row  className='page3v'>
      <Col className="divNumero"> 
          <h1>01</h1>
          <h3>CHI è VIPER?</h3>
      </Col>
    </Row>
    <Row className='page4v'>
      <Col xs={12}>
         <h3>CHI è VIPER?</h3>
         <h3>01</h3>
         <Row>
            <Col xs={12} md={6}>
              <p>Viper come artista nasce nel 2006 in un contesto Hip HoP
Urbano.
Brianza, la sua zona, è principalmente immersa nella natura, fonte
d’ispirazione per tutta la sua arte.
Essa gli ha insegnato e gli insegna tutt’oggi ad armonizzare i
colori, è la sua principale maestra, forse la più importante.
Il suo viaggio inizia dalla voglia di lasciare un segno riconoscibile
ed indelebile in una società in continua trasformazione.
La missione è quella di colorare qualsiasi superficie, dandogli una
nuova armonia molto spesso persa per via dell’urbanizzazione.
Nel tempo sviluppa la sua forma d’arte astratta, principalmente
caratterizzata dalle costruzione geometrica di linee e sfere
distribuite nello spazio.
Ogni forma è studiata nei suoi minimi particolari e il colore gioca
un ruolo molto importante in tutto ciò.
Durante il suo cammino ricco d’esperienze colorate ha fatto sì che
potesse arrivare a fare lavori su commissione per privati ed
aziende importanti.</p>
            </Col>
            <Col xs={12} md={6}>
              <img src="" alt="" />
            </Col>
         </Row>
  
          </Col>
    
      </Row>
      <Row  className='page5v'>
      <Col className="divNumero"> 
          <h1>02</h1>
          <h3>ABSTRACT STRANGE</h3>
      </Col>
    </Row>
    <Row className='page6v'>
      <Col className="titolo6" xs={12}>
        <h3>ABSTRACT STRANGE </h3>
        <h3>02</h3>
      </Col>
      <Col className="imagineAbstract">
          <img src="" alt="" />
      </Col>
      <Col md={6} >
      Esse trovano il proprio ruolo una volta posizionate in
      questo spazio, riuscendo poi a connettersi fra di loro.
      Tutto ciò è caratterizzato principalmente dall’utilizzo di
      colori vivaci che attraverso lo studio hanno trovato il
      modo di entrare in simbiosi con i colori più scuri.
      </Col>
      <Col md={6} >
      Dopo anni nel mondo artistico ha sviluppato un suo stile
      personale, l’abstract strange.
      Questo nome nasce dal suo modo unico di trasferire il
      colore sulle diverse superfici in maniera studiata ma
      allo stesso tempo trasportato dalla spontaneità.
      Il concetto nasce dall’osservazione di una superficie
      incontaminata, che viene trasformata attraverso l’utilizzo
      di forme sconnesse.</Col>

      </Row>
    <Row className='page7v'>
        <Col> foto 1</Col>
        <Col> foto 2</Col>
        <Col> foto 3</Col>
      </Row>
      <Row className='page8v'>
      <Col className="titolo6" xs={12}>
        <h3>ABSTRACT STRANGE </h3>
        <h3>02</h3>
      </Col>
      </Row>
      <Row className='page9v'>
      <Col className="titolo6" xs={12}>
        <h3>ABSTRACT STRANGE </h3>
        <h3>02</h3>
      </Col>
      </Row> 
      <Row className='page10v'>
      <Col className="titolo6" xs={12}>
        <h3>ABSTRACT STRANGE </h3>
        <h3>02</h3>
      </Col>
      </Row> 
      <Row  className='page11v'>
      <Col className="divNumero"> 
          <h1>03</h1>
          <h3>COLLAB</h3>
      </Col>
    </Row>          
    </>
  );
};

export default ViperHaze;