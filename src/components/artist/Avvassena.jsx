import React, { useEffect } from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import { Row, Col } from 'react-bootstrap';

const Avvassena = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animated');
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPosition < windowHeight * 0.75) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <Row className='avvassenaPage0 d-flex justify-content-center align-items-center text-center'>
        <div className='sottoTitolo animated2'>
          <h1>AVVASSENA</h1>
        </div>
      </Row>
      <Row className='avvassenaPage d-flex justify-content-center align-items-center text-center'>
        <Col className='d-flex justify-content-center mt-5 mb-5' xs={12} md={5}>
          <div className='divArtist'>
            <img className='fotoProfilo animated' src="http://res.cloudinary.com/dorr4si5z/image/upload/v1709313070/jtbz78hkujiicqtef8rn.jpg" alt="" />
          </div>
        </Col>
        <Col className='mt-5 mb-5' xs={12} md={6}>
          <p className='paragraph animated'>
            Avvassena (n. 1998) è un’artista e designer multidisciplinare con sede a Milano (Italia).
            Curiosità e propensione all’ascolto danno vita alla sua inarrestabile ed eclettica creatività, che si esprime in opere d’arte di molteplici livelli visivi e comunicativi.
            Ha conseguito la laurea triennale in Interior Design al Politecnico di Milano e la laurea magistrale in Communication Design.
            Ha esposto in diverse città europee e collabora con riviste, marchi e aziende internazionali, con l’obiettivo di portare il messaggio dell’arte a tutti. Inoltre, crea installazioni annuali su temi sociali (cancro al seno, violenza contro le donne, uso delle armi...) con la collaborazione di ricercatori e organizzazioni non-profit.
          </p>
          <h3 className='animated'>Statement</h3>
          <p className='paragraph animated'>
            La mia pratica artistica si basa sul desiderio di andare oltre la superficie della società, per portare alla luce realtà nascoste o inascoltate. Al centro della mia ricerca vi sono le relazioni e i rapporti che tessono la nostra esistenza: la relazione con se stessi, spesso ipocrita e conflittuale; il rapporto con il micro-nucleo che ci circonda, nella sua duplice natura di nido e gabbia; il ruolo di ciascuno all’interno della grande comunità umana, dove la simbiosi che ci lega l’uno all’altro contrasta con la solitudine egocentrica dei nostri tempi; l’inevitabile legame di dipendenza e responsabilità che l’individuo e l’umanità tutta hanno verso l’ambiente che ci circonda.
            La multidisciplinarietà e la sperimentazione orientano mio processo artistico, che combina pittura, scultura, incisione e installazioni, capaci di nascondere e svelare messaggi grazie all’interazione con diversi spettri luminosi e con lo spazio circostante.
          </p>
        </Col>
      </Row>

      <Row style={{ 
  backgroundImage: "url('http://res.cloudinary.com/dorr4si5z/image/upload/v1709573434/ddwtt2khhiorqlqyjypv.png')", 
  backgroundRepeat: "no-repeat", 
  backgroundSize: "cover", 
  backgroundPosition: "center" 
}}>
  <h1 className='text-center mt-5'>Selezione Custom</h1>
  <Col xs={12} md={6}>
    <img className='animated slower' src="http://res.cloudinary.com/dorr4si5z/image/upload/v1709573857/mtjqhln2yd1t767umyfe.png" alt="" />
  </Col>
  <Col xs={12} md={6} className="d-none d-md-block">
    <img className='animated slower' src="http://res.cloudinary.com/dorr4si5z/image/upload/v1709573857/mtjqhln2yd1t767umyfe.png" alt="" />
  </Col>
</Row>

      <Row className='avvassenaPage0 d-flex justify-content-center align-items-center text-center'>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <InstagramEmbed url="https://www.instagram.com/avvassena/" className='ig' />
        </div>
      </Row>
    </>
  );
}

export default Avvassena;
