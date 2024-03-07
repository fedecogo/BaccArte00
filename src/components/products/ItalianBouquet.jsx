import React, { useEffect } from 'react';
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
// import fotoFamigliaNelTempo from '../../assets/ib/lorenzo-vasilotta_1800x1800.jpg'
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { InstagramEmbed  } from 'react-social-media-embed';

const ItalianBouquet = () => {
  const isUserLoggedIn = useSelector((state) => state.user.loggedIn);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          Swal.fire({
            icon: 'success',
            title: 'Bottiglia aggiunta al carrello!',
            showConfirmButton: false,
            timer: 1500
          });
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
        <Col xs={12} className='BlueSpace2 text-center'>
        <h1 id='ombra1'>Italian Bouquet</h1>
        <h3 id='ombra2'>L'alternativa italiana. Perfetto equilibrio di botaniche italiane selezionate e accostate tra loro con la giusta proporzione. Un liquore unico nel suo genere, ideale per la miscelazione dei tuoi drink o da gustare liscio con qualche cubetto di ghiaccio.</h3>
        </Col>
        <Col xs={12} md={6}>
          <Carousel slide={false} data-bs-theme="dark">
            <Carousel.Item interval={800}>
              <img className="d-block w-100" src={imageCarousel1} alt="Prima foto" />
            </Carousel.Item>
            <Carousel.Item interval={800}>
              <img className="d-block w-100" src={imageCarousel2} alt="Seconda foto" />
            </Carousel.Item>
           
          </Carousel>
        </Col>
        <Col xs={12} md={6}>
          <div className="description-column bg-black text-white">
            <p>Italian Bouquet è un liquore equilibrato, frutto dell'accurato rapporto degli estratti di thè, bergamotto e sambuco, con l'aggiunta di un tocco segreto. Morbido e gradevole, è perfetto per la miscelazione o da gustare liscio con qualche cubetto di ghiaccio.</p>
            <p>L'intera filiera è 100% Made in Italy, dalla raccolta delle essenze fino all'imbottigliamento.</p>
            <p>Il taccuino di Elsa: una ricetta tramandata di generazioni che ha ripreso vita grazie a Italian Bouquet, adattata per soddisfare i palati del lavoratore e distrarlo dalle fatiche del mondo moderno.</p>
            <p class="price">Prezzo: €32.50</p>
            <Button variant="outline-primary " onClick={() => handleAddToCart( 2, 1)}>Aggiungi al carrello</Button>
  
          </div>
        </Col>

        <Col xs={12} className='BlueSpace'>
          <Row xs={12} className='mb-1'>
          <Col xs={2}></Col>
            <Col xs={1}>
              <Image src={cinCin} alt="cinCinImage" fluid />
            </Col>
            <Col xs={6} className='text-center'>
              <h1>Da Bere Rigorosamente In Buona Compagnia</h1>
            </Col>
            <Col xs={1}>
              <Image src={cinCin} alt="cinCinImage" fluid />
            </Col>
          </Row>
          <hr />
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
        <Col xs={12} md={6} className='mt-5 text-white '>
            <h1 className='text-center'>La Storia</h1>
            <Row xs={12}>
            <Col xs={3}>
      <Image
        src="https://globaluserfiles.com/media/189053_14f78aa790c97e756d6a3c7acc6888cf53afccfb.png/v1/x_0,y_0,w_219,h_155/ricetta-nonna.webp"
        alt="foto_ricetta_originale"
        fluid 
      />
    </Col>
              <Col xs={9}>
            <p>Il taccuino di Elsa: la ricetta viene tramandata di generazioni da fine ‘800, quando nonna Elsa, nella sua casa di Stresa, sul lago Maggiore, raccolse bacche e aromi del suo orto per creare un composto che potesse allietare il marito, grande lavoratore della cava della zona. 
La ricetta piacque così tanto al marito che decise di trascriverla sul suo taccuino delle ricette
Ritrovata in soffitta tra vecchi libri e foto di famiglia, questa ricetta ha ripreso vita grazie a Italian Bouquet, adattata per soddisfare i palati del lavoratore e distrarlo dalle fatiche del mondo moderno</p>
     </Col>
            </Row>
              </Col>
              <Col xs={12} md={6} className='mt-5 text-white '>
            <h1 className='text-center'>Seguici su Instagram</h1>
            <Row className='d-flex justify-content-center align-items-center text-center'>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
  <InstagramEmbed url="https://www.instagram.com/baccaspirits/" className='ig' />
</div>
</Row>
        </Col>
      </Row>
    </div>
  );
};

export default ItalianBouquet;
