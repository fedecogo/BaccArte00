import React from 'react';
import fotoRedBerry from '../assets/createYouBottles/redBerry.png';
import fotoItalianBouquet from '../assets/createYouBottles/italianBouquet.png';
import {Row, Col, Container } from 'react-bootstrap';


const ProductComponent = () => {
    return (
        <Container>
            <Row>
                <h1>Scopri Lo Spirito Bacca Degustando i nostri prodotti</h1>
                <Col xs={6}>
                    <h2>Red Berry</h2>
                    <div className="product-details">
                        <img src={fotoRedBerry} alt="Red Berry" className="img-fluid d-block" />
                        <p></p>
                    </div>
                </Col>
                <Col xs={6}>
                    <h2>Italian Bouquet</h2>
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
