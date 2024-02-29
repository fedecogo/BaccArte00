import React from 'react';
import { Col, Row, Carousel, Image, Button } from 'react-bootstrap';
import imageCarousel1 from '../../assets/ib/lorenzo-vasilotta_1800x1800.jpg'
import imageCarousel2 from '../../assets/ib/lorenzo-vasilotta_1800x1800.jpg'
import imageCarousel3 from '../../assets/ib/lorenzo-vasilotta_1800x1800.jpg'
import imageCarousel4 from '../../assets/ib/lorenzo-vasilotta_1800x1800.jpg'
import imageCarousel5 from '../../assets/ib/lorenzo-vasilotta_1800x1800.jpg'
import imageCarousel6 from '../../assets/ib/lorenzo-vasilotta_1800x1800.jpg'
import imageCarousel7 from '../../assets/ib/lorenzo-vasilotta_1800x1800.jpg'
import imageCarousel8 from '../../assets/ib/lorenzo-vasilotta_1800x1800.jpg'
import imageCarousel9 from '../../assets/ib/lorenzo-vasilotta_1800x1800.jpg'
import imageCarousel10 from '../../assets/ib/lorenzo-vasilotta_1800x1800.jpg'
import imageCarousel11 from '../../assets/ib/lorenzo-vasilotta_1800x1800.jpg'
import cinCin from '../../assets/cinCin.png';
import fotoFamigliaNelTempo from '../../assets/ib/lorenzo-vasilotta_1800x1800.jpg'
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

const ItalianBouquet = () => {
  const isUserLoggedIn = useSelector((state) => state.user.loggedIn);

  const handleAddToCart = async (bottleId, quantity) => {
    if (!isUserLoggedIn) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Devi effettuare l'accesso per aggiungere al carrello!"
      });
    } else {
      try {
        const response = await fetch('http://localhost:3001/user/me/cart/addBottle', {
          method: 'POST',
          headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            bottleId,
            quantity,
          }),
        });
        if (response.ok) {
          // dispatch(getUserCartDataAction(localStorage.getItem('token')));
        } else {
          console.error('Errore durante l\'aggiunta della bottiglia al carrello');
        }
      } catch (error) {
        console.error('Errore durante la richiesta di aggiunta al carrello:', error);
      }
    
    }
  };

  return (
    <div className="italian-bouquet">
      <Row>
        <Col xs={12} className='BlueSpace'>
          <h1>Italian Bouquet</h1>
          <h3>L'alternativa italiana. Perfetto equilibrio di botaniche italiane selezionate e accostate tra loro con la giusta proporzione. Un liquore unico nel suo genere, ideale per la miscelazione dei tuoi drink o da gustare liscio con qualche cubetto di ghiaccio.</h3>
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
          <div className="description-column">
            <p>Italian Bouquet è un liquore equilibrato, frutto dell'accurato rapporto degli estratti di thè, bergamotto e sambuco, con l'aggiunta di un tocco segreto. Morbido e gradevole, è perfetto per la miscelazione o da gustare liscio con qualche cubetto di ghiaccio.</p>
            <p>L'intera filiera è 100% Made in Italy, dalla raccolta delle essenze fino all'imbottigliamento.</p>
            <p>Il taccuino di Elsa: una ricetta tramandata di generazioni che ha ripreso vita grazie a Italian Bouquet, adattata per soddisfare i palati del lavoratore e distrarlo dalle fatiche del mondo moderno.</p>
            <p class="price">Prezzo: €32.50</p>
            <Button className="btn-primary" onClick={() => handleAddToCart( 53, 1)}>Aggiungi al carrello</Button>
  
          </div>
        </Col>

        <Col xs={12} className='BlueSpace'>
          <Row xs={12}>
            <Col xs={3}>
              <Image src={cinCin} alt="cinCinImage" fluid />
            </Col>
            <Col xs={6} className='text-center'>
              <h1>Da Bere Rigorosamente In Buona Compagnia</h1>
            </Col>
            <Col xs={3}>
              <Image src={cinCin} alt="cinCinImage" fluid />
            </Col>
          </Row>
          <Row xs={12}>
            <Col xs={12} md={4}>
              <h3>Il Liquore Dell'Armonia</h3>
              <p>L'equilibrio perfetto delle botaniche italiane selezionate rende questo liquore un compagno ideale per ogni occasione.</p>
            </Col>
            <Col xs={12} md={4}>
              <h3>Tradizione e Innovazione</h3>
              <p>Una ricetta tramandata di generazioni, adattata per soddisfare i palati moderni. Un mix unico di tradizione e innovazione.</p>
            </Col>
            <Col xs={12} md={4}>
              <h3>Perfetto per la Miscelazione</h3>
              <p>Italian Bouquet si presta alla miscelazione, rendendo ogni drink un'esperienza unica. Crea i tuoi cocktail speciali e sorprendi i tuoi amici!</p>
            </Col>
          </Row>
        </Col>
        <Col xs={12}>
          <h1 className='text-center'>In Continua Evoluzione!</h1>
          <Image src={fotoFamigliaNelTempo} alt="fotoFamigliaNelTempoImage" fluid />
          <h1 className='text-center'>To Be Continued...</h1>
        </Col>
      </Row>
    </div>
  );
};

export default ItalianBouquet;
