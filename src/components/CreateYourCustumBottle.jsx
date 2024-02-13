import React, { useState } from 'react';
import { Form, Button, Row, Col, Container,Image } from 'react-bootstrap';
import Swal from 'sweetalert2';
import RedBerryFoto from '../components/../assets/createYouBottles/redBerry.png';
import TransparentBottle from '../components/../assets/createYouBottles/trasparentBottle_png.png';
import ItalianBouquetFoto from '../components/../assets/createYouBottles/italianBouquet.png';

const CreateCustomBottle = () => {
  const [sizeBottle, setSizeBottle] = useState('');
  const [bottleContents, setBottleContents] = useState('');
  const [artist, setArtist] = useState('');
  const [showImage, setShowImage] = useState('');

  //Submit del form
  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Registrati per creare, salvare e acquistare La tua unica bottiglia!',
      });
      return; 
    }

    const requestBody = {
      sizeBottle,
      bottleContents,
      artist,
    };

    try {
      const response = await fetch('http://localhost:3001/user/me/createYourBottle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error('Errore durante la creazione della bottiglia personalizzata');
      }

      //Reset stato del form
      setSizeBottle('');
      setBottleContents('');
      setArtist('');
      Swal.fire({
        icon: 'success',
        title: 'Bottiglia Creata!',
        text: 'La tua bottiglia personalizzata è stata creata con successo!',
      });
    } catch (error) {
      console.error('Errore durante la creazione della bottiglia personalizzata:', error);
    }
  };


  const handleSizeChange = (event) => {
    setSizeBottle(event.target.value);
    setShowImage(event.target.value);
  };

  const handleContentsChange = (event) => {
    setBottleContents(event.target.value);
    setShowImage(event.target.value);
  };

  const handleArtistChange = (event) => {
    setArtist(event.target.value);
  };

  const getBackgroundStyle = () => {
    switch (artist) {
      case 'VIPER':
        return { backgroundColor: 'red' };
      case 'ANNA':
        return { backgroundColor: 'pink' };
      case 'JAY':
        return { backgroundColor: 'blue' };
      default:
        return {};
    }
  };

  return (
    <div className="container" style={getBackgroundStyle()}>    
      <h1>Create Your Custom Bottle</h1>
      <Row>
        <Col xs={6}>
          <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formArtist">
              <Form.Label>Artist</Form.Label>
              <Form.Control as="select" value={artist} onChange={handleArtistChange}>
                <option value="">Select Artist</option>
                <option value="VIPER">Viper</option>
                <option value="ANNA">Anna</option>
                <option value="JAY">Jay</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formSize">
              <Form.Label>Size</Form.Label>
              <Form.Control as="select" value={sizeBottle} onChange={handleSizeChange}>
                <option value="">Select Size</option>
                <option value="SETTANTA_CL">70cl</option>
                <option value="DIECI_CL">10cl</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formContents">
              <Form.Label>Bottle Contents</Form.Label>
              <Form.Control as="select" value={bottleContents} onChange={handleContentsChange}>
                <option value="">Select Contents</option>
                <option value="RED_BERRY_GIN">Red Berry Gin</option>
                <option value="ITALIAN_BOUQUET">Italian Bouquet</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
              Create Bottle
            </Button>
          </Form>
        </Col>
        <Col xs={6}>
  <h3>Bottle Preview</h3>
  <Container fluid>
  {
    (() => {
      switch (showImage) {
        case 'RED_BERRY_GIN':
          return <Image src={RedBerryFoto} fluid />;
        case 'ITALIAN_BOUQUET':
          return <Image src={ItalianBouquetFoto} fluid />;
        case 'SETTANTA_CL':
          return <Image src={TransparentBottle} fluid />;
        case 'DIECI_CL':
          return <Image src={TransparentBottle} fluid />;
        default:
          return null;
      }
    })()
  }
</Container>

</Col>

      </Row>
    </div>
  );
};

export default CreateCustomBottle;
