import React, { useEffect } from 'react';
import { Col, Row, Carousel, Image, Button } from 'react-bootstrap';
import imageCarousel1 from '../../assets/redBerry/IMG_2123.JPG';
import imageCarousel2 from '../../assets/redBerry/IMG_2124.JPG';
import imageCarousel3 from '../../assets/redBerry/IMG_2125.JPG';
import imageCarousel4 from '../../assets/redBerry/IMG_2126.JPG';
import imageCarousel5 from '../../assets/redBerry/IMG_2127.JPG';
import imageCarousel6 from '../../assets/redBerry/IMG_2128.JPG';
import imageCarousel7 from '../../assets/redBerry/IMG_2129.JPG';
import imageCarousel8 from '../../assets/redBerry/IMG_2130.JPG';
import imageCarousel9 from '../../assets/redBerry/IMG_2131.JPG';
import imageCarousel10 from '../../assets/redBerry/IMG_2132.JPG';
import imageCarousel11 from '../../assets/redBerry/IMG_2133.JPG';
import cinCin from '../../assets/cinCin.png';
import fotoFamigliaNelTempo from '../../assets/redBerry/famiglia-neltempo_1.png';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { InstagramEmbed } from 'react-social-media-embed';

const RedBerryGin = () => {
  const isUserLoggedIn = useSelector((state) => state.user.loggedIn);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const addToCart = async (bottleId, quantity) => {
    if (!isUserLoggedIn) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
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
        } else {
          console.error("Errore durante l'aggiunta della bottiglia al carrello");
        }
      } catch (error) {
        console.error('Errore durante la richiesta di aggiunta al carrello:', error);
      }
    }
  };

  return (
    <div className="red-berry-gin">
      <Row>
        <Col xs={12} className='redSpace2'>
          <h1 id='ombra1'>Red Berry Gin</h1>
          <h3 id='ombra2'>Rigorosamente Made in Italy. Bevilo in buona compagnia. Prodotto a Brescia, in una distilleria storica a conduzione famigliare, è il risultato di anni di studi e prove nell'accostamento delle migliori spezie prodotte sul suolo italiano
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
          <div className="description-column bg-black text-white">
            <p>E' un gin morbido e beverino, con note profumate e gradevoli. Alla bevuta risulta dolce nel cocktail ma è gradevole anche bevuto liscio o con ghiaccio.</p>
            <p>Non è un gin di massa: è a produzione limitata e 100% italiano. Vuole essere il tuo compagno di serata: condividilo con i tuoi amici e passa con loro i migliori #Funny Moments!</p>
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
            <p className="price">Prezzo: €32.50</p>
            <Button variant="outline-primary" onClick={() => addToCart(1, 1)}>Aggiungi al carrello</Button>
          </div>
        </Col>
        <Col xs={12} className='redSpace'>
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
              <h3>Il Gin Dei Giovani</h3>
              <p>Creato appositamente per coloro che si stanno avvicinando al mondo del gin.
                Basta con i soliti gin speziati e pesanti!
                Provaci, siamo sicuri ne sarai piacevolmente soddisfatto</p>
            </Col>
            <Col xs={12} md={4}>
              <h3>Le ladies ci adorano!
              </h3>
              <p>Il sapore morbido e la gradazione bassa fanno impazzire le signorine!
                Nato per le vostre necessità: non aver paura di farti il terzo gin tonic, con noi vai sul sicuro.
              </p>
            </Col>
            <Col xs={12} md={4}>
              <h3>Nato per la miscelazione</h3>
              <p>Il giusto tono ad ogni drink!
                RED Berry si presta alla miscelazione, rendendo ogni drink piacevole alla bevuta, ma mantenendo il suo carattere:
                Tutto un peperino!</p>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={6} className='bg-white'>
          <h1 className='text-center mt-5'>In Contuna Evoluzione!</h1>
          <Image src={fotoFamigliaNelTempo} alt="fotoFamigliaNelTempoImage" fluid />
          <h1 className='text-center'>To Be Continued...</h1>
        </Col>
        <Col xs={12} md={6}>
          <h1 className='text-center text-white mt-5'>Seguici su Instagram</h1>
          <Row className='d-flex justify-content-center align-items-center text-center'>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <InstagramEmbed url="https://www.instagram.com/baccaspirits/" className='ig' />
            </div>
          </Row>
        </Col>
        <h1 className='text-center text-white mt-5 mb-5'>To Be Continued...</h1>
      </Row>
    </div>
  );
};

export default RedBerryGin;
