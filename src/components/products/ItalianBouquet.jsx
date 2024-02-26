import React from 'react';
import { Col, Row, Carousel } from 'react-bootstrap';
import imageCarousel1 from '../../assets/redBerry/IMG_2123.JPG'
import imageCarousel2 from '../../assets/redBerry/IMG_2124.JPG'
import imageCarousel3 from '../../assets/redBerry/IMG_2125.JPG'
import imageCarousel4 from '../../assets/redBerry/IMG_2126.JPG'
import imageCarousel5 from '../../assets/redBerry/IMG_2127.JPG'
import imageCarousel6 from '../../assets/redBerry/IMG_2128.JPG'
import imageCarousel7 from '../../assets/redBerry/IMG_2129.JPG'
import imageCarousel8 from '../../assets/redBerry/IMG_2130.JPG'
import imageCarousel9 from '../../assets/redBerry/IMG_2131.JPG'
import imageCarousel10 from '../../assets/redBerry/IMG_2132.JPG'
import imageCarousel11 from '../../assets/redBerry/IMG_2133.JPG'


const italianBouquet = () => {
    return (
      <div className="red-berry-gin">
        <Row className='p-2'>
           <Col xs={12} className='text-center '>
           <h1>Red Berry Gin</h1>
           <h3>Rigorosamente Made in Italy. Bevilo in buona compagnia. Prodotto a Brescia, in una distilleria storica a conduzione famigliare, è il risultato di anni di studi e prove nell'accostamento delle migliori spezie prodotte sul suolo italiano
           </h3>
           </Col>
          <Col xs={12} md={6}>
          <Carousel slide={false} data-bs-theme="dark">
            <Carousel.Item interval={800}>
                 <img className="d-block w-100" src={imageCarousel1} alt="Prima foto" />
            </Carousel.Item>
            <Carousel.Item interval={800}>
             <img className="d-block w-100" src={imageCarousel2} alt="Seconda foto" />
             </Carousel.Item>
          <Carousel.Item interval={800}>
    <img className="d-block w-100" src={imageCarousel3} alt="Terza foto" />
        </Carousel.Item>
           <Carousel.Item interval={800}>
          <img className="d-block w-100" src={imageCarousel4} alt="Quarta foto" />
                 </Carousel.Item>
           <Carousel.Item interval={800}>
          <img className="d-block w-100" src={imageCarousel5} alt="Quinta foto" />
                 </Carousel.Item>
           <Carousel.Item interval={800}>
          <img className="d-block w-100" src={imageCarousel6} alt="Sesta foto" />
                 </Carousel.Item>
           <Carousel.Item interval={800}>
          <img className="d-block w-100" src={imageCarousel7} alt="Settima foto" />
                 </Carousel.Item>
           <Carousel.Item interval={800}>
          <img className="d-block w-100" src={imageCarousel8} alt="Ottava foto" />
                 </Carousel.Item>
           <Carousel.Item interval={800}>
          <img className="d-block w-100" src={imageCarousel9} alt="Nona foto" />
                 </Carousel.Item>
           <Carousel.Item interval={800}>
          <img className="d-block w-100" src={imageCarousel10} alt="Decima foto" />
                 </Carousel.Item>
           <Carousel.Item interval={800}>
          <img className="d-block w-100" src={imageCarousel11} alt="Undicesima foto" />
           </Carousel.Item>
         </Carousel>
          </Col>
          <Col xs={12} md={6}>
            <p>E’ un gin morbido e beverino, con note profumate e gradevoli. Alla bevuta risulta dolce nel cocktail ma è gradevole anche bevuto liscio o con ghiaccio. </p>   
            <p> Non è un gin di massa: è a produzione limitata e 100% italiano. Vuole essere il tuo compagno di serata: condividilo con i tuoi amici e passa con loro i migliori #Funny Moments!</p>
            <p>SCHEDA TECNICA</p>
            <ul>
              <li>Spezia: Pepe rosa</li>
              <li>Metodo: Infusione</li>
              <li>Gradazione: 38% Vol.</li>
              <li>Bottiglia: 700 ml</li>
              <li>Luogo di produzione: Brescia</li>
              <li>Ingredienti: Italiani</li>
              <li>Morbido, profumato e gradevole</li>
              <li>Perfetto in compagnia</li>
            </ul>
            <button className="btn btn-primary">Aggiungi al carrello</button>
          </Col>
        </Row>
    
      </div>
    );
  };

  export default italianBouquet;