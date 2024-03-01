import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import { Row, Col } from 'react-bootstrap';

const Avvassena = () => {
  return (
    <>
      <Row className='avvassenaPage0 d-flex justify-content-center align-items-center text-center'>
         <div className='sottoTitolo'>
             <h1>AVVASSENA</h1>
         </div>
        
      </Row>
      <Row className='avvassenaPage d-flex justify-content-center align-items-center text-center'>
        <Col className='d-flex justify-content-center mt-5 mb-5' xs={12} md={5}>
          <div className='divArtist'>
            <img className='fotoProfilo' src="http://res.cloudinary.com/dorr4si5z/image/upload/v1709313070/jtbz78hkujiicqtef8rn.jpg" alt="" />
          </div>
        </Col>
        <Col className='mt-5 mb-5' xs={12} md={6}>
          <p>
            Avvassena (n. 1998) è un’artista e designer multidisciplinare con sede a Milano (Italia).
            Curiosità e propensione all’ascolto danno vita alla sua inarrestabile ed eclettica creatività, che si esprime in opere d’arte di molteplici livelli visivi e comunicativi.
            Ha conseguito la laurea triennale in Interior Design al Politecnico di Milano e la laurea magistrale in Communication Design.
            Ha esposto in diverse città europee e collabora con riviste, marchi e aziende internazionali, con l’obiettivo di portare il messaggio dell’arte a tutti. Inoltre, crea installazioni annuali su temi sociali (cancro al seno, violenza contro le donne, uso delle armi...) con la collaborazione di ricercatori e organizzazioni non-profit.
          </p>
          <h3>Statement</h3>
          <p>
            La mia pratica artistica si basa sul desiderio di andare oltre la superficie della società, per portare alla luce realtà nascoste o inascoltate. Al centro della mia ricerca vi sono le relazioni e i rapporti che tessono la nostra esistenza: la relazione con se stessi, spesso ipocrita e conflittuale; il rapporto con il micro-nucleo che ci circonda, nella sua duplice natura di nido e gabbia; il ruolo di ciascuno all’interno della grande comunità umana, dove la simbiosi che ci lega l’uno all’altro contrasta con la solitudine egocentrica dei nostri tempi; l’inevitabile legame di dipendenza e responsabilità che l’individuo e l’umanità tutta hanno verso l’ambiente che ci circonda.
            La multidisciplinarietà e la sperimentazione orientano mio processo artistico, che combina pittura, scultura, incisione e installazioni, capaci di nascondere e svelare messaggi grazie all’interazione con diversi spettri luminosi e con lo spazio circostante.
          </p>
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
