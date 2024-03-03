import React from 'react';
import fotoRedBerry from '../assets/createYouBottles/redBerry.png';
import fotoItalianBouquet from '../assets/createYouBottles/italianBouquet.png';
import {Row, Col, Container } from 'react-bootstrap';


const ProductComponent = () => {
    return (
        <Container>
            <Row><h1 className='text-center mt-5'>Scopri Lo Spirito Bacca Degustando i nostri prodotti</h1>
                <h1 className='text-center '>Puoi Assaggiare i nostri prodotti qui</h1>
                {/* Aggiungerò qua una mappa dell'italia con i bar in cui vendono i red Berry  */}
            </Row>
            <Row>
                <h1 className='text-center mt-5'>Oppure Acquistali Dal Nostro Shop e Gustati i FunnyMoments</h1>
                <Col xs={6} className='mt-5'>
                    <h2 className='text-center'>Red Berry</h2>
                    <div className="product-details">
                        <img src={fotoRedBerry} alt="Red Berry" className="img-fluid d-block" />
                        <p></p>
                    </div>
                </Col>
                <Col xs={6} className='mt-5'>
                    <h2 className='text-center'>Italian Bouquet</h2>
                    <div className="product-details">
                        <img src={fotoItalianBouquet} alt="Italian Bouquet" className="img-fluid d-block" />
                        <p></p>
                    </div>
                </Col>
            </Row>
            <Row>
               <Col>
                 <h1>Selezione Custum Consigliata Da Bacca:</h1>
               </Col> 
            </Row>
        </Container>
    );
};

export default ProductComponent;
