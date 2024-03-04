import React from 'react';
import fotoRedBerry from '../assets/createYouBottles/redBerry.png';
import fotoItalianBouquet from '../assets/createYouBottles/italianBouquet.png';
import {Row, Col, Container } from 'react-bootstrap';
import Mapp from './products/MapComponent'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import foto1 from '../assets/redBerry/20221120_143134.jpg';
import foto2 from '../assets/redBerry/IMG-20231214-WA0023.jpg';

const ProductComponent = () => {
    const isDarkTheme = useSelector(state => state.theme.isDarkTheme);

    return (
        <Container  className={isDarkTheme ? "bg-white  text-dark " : " text-white"}>
            <Row className=' TitoliDiv'>
               <h1 className='text-center mt-5'>Scopri lo spirito Bacca </h1>
               <h2 id='h2i' className='text-center'>Degustando i nostri prodotti</h2> 
               <h4 className='text-center mt-5'>Puoi Assaggiare i nostri prodotti qui</h4>
               <Mapp />
            </Row>
            <Row className=' TitoliDiv '>
                <h1 className='text-center mb-5'>Oppure Acquistali Dal Nostro Shop e Gustati i FunnyMoments</h1>
                <Col  xs={12} sm={6} md={6} className="first-col ">
          <Link to="/products/RedBerryGin"  className="text-decoration-none">
              <div className="Trinità" style={{ backgroundImage: `url(${foto1})` }} >
              <h1>Red Berry Gin</h1>
              </div>  
           </Link>  
        </Col>
        <Col xs={12} sm={6} md={6}>
        <Link to="/products/ItalianBouquet"  className="text-decoration-none">
          <div className="Trinità" style={{ backgroundImage: `url(${foto2})` }}>
            <h1>Italian Bouquet</h1>
          </div>
          </Link>  
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
