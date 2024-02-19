import React, { useState,useEffect } from 'react';
import { Form, Button, Row, Col, Container,Image } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import RedBerryFoto from '../components/../assets/createYouBottles/redBerry.png';
import TransparentBottle from '../components/../assets/createYouBottles/trasparentBottle_png.png';
import ItalianBouquetFoto from '../components/../assets/createYouBottles/italianBouquet.png';
import wallpaper1viper from '../assets/viper/wallpaper.webp'
import wallpaper2viper from '../assets/viper/wallpaper2.webp'
import wallpaper1anna from '../assets/anna/wallpaper1.webp'
import wallpaper2anna from '../assets/anna/wallpaper2.webp'
import mergeImages from 'merge-images';
import { useNavigate } from 'react-router-dom';

const CreateCustomBottle = () => {
  const [sizeBottle, setSizeBottle] = useState('');
  const [bottleContents, setBottleContents] = useState('');
  const [artist, setArtist] = useState('');
  const [showImage, setShowImage] = useState('');
  const [backgroundImageViper, setBackgroundImageViper] = useState(wallpaper1viper);
  const [backgroundImageAnna, setBackgroundImageAnna] = useState(wallpaper2anna);
  const userDataInSession = useSelector((state) => state.user.user[0].avatar);
  const [avatarBase64, setAvatarBase64] = useState('');
  const navigate = useNavigate();


  useEffect(() => {
      const fetchAvatar = async () => {
          try {
              const response = await fetch(userDataInSession);
              if (response.ok) {
                  const blob = await response.blob();
                  const reader = new FileReader();
                  reader.readAsDataURL(blob);
                  reader.onloadend = () => {
                      const base64data = reader.result;
                      setAvatarBase64(base64data);
                  };
              } else {
                  console.error('Errore nel caricamento dell\'avatar:', response.status);
              }
          } catch (error) {
              console.error('Errore nel caricamento dell\'avatar:', error);
          }
      };
  
      if (userDataInSession) {
          fetchAvatar();
      }
  }, [userDataInSession]);
  

  

useEffect(() => {
    if (artist === 'VIPER') {
      const timer = setTimeout(() => {
        setBackgroundImageViper(backgroundImageViper === wallpaper1viper ? wallpaper2viper : wallpaper1viper);
      }, 5000); 
      return () => clearTimeout(timer);
    }
  }
  , [artist, backgroundImageViper]);

  useEffect(() => {
    if (artist === 'ANNA') {
      const timer = setTimeout(() => {
        setBackgroundImageAnna(backgroundImageAnna === wallpaper1anna ? wallpaper2anna : wallpaper1anna);
      }, 5000); 
      return () => clearTimeout(timer); 
    }
  }
  , [artist, backgroundImageAnna]);


  const generatePreview = async () => {
    try {
      const bottleImageUrl = TransparentBottle; 
      const artistStyleUrl = artist === 'VIPER' ? backgroundImageViper :backgroundImageAnna ; 
      const base64Image = await mergeImages([
        { src: bottleImageUrl, x: 0, y: 0 }, 
        { src: artistStyleUrl, x: 300, y: 800, opacity: 0.0001}, 
      ]);
      console.log(base64Image);
      setShowImage(base64Image);
    } catch (error) {
      console.error('Errore durante la generazione dell\'anteprima della bottiglia personalizzata:', error);
    }
  };

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
      //reset form
      setSizeBottle('');
      setBottleContents('');
      setArtist('');
      Swal.fire({
        icon: 'success',
        title: 'Bottiglia Creata!',
        text: 'La tua bottiglia personalizzata è stata creata con successo! Potrai vederla nella tua area personale!'
        ,
      });
      navigate('/profile');
    } catch (error) {
      console.error('Errore durante la creazione della bottiglia personalizzata:', error);
    }
  };
  const handleArtistChange = (event) => {
    setArtist(event.target.value);
    generatePreview(); 
  };
  
const handleSizeChange = (event) => {
  setSizeBottle(event.target.value);
  setShowImage('');
  generatePreview(); 
};

const handleContentsChange = (event) => {
  setBottleContents(event.target.value);
  // setShowImage('');
  // generatePreview(); 
};



  const getBackgroundStyle = () => {
    switch (artist) {
      case 'VIPER':
        return { backgroundImage: `url(${backgroundImageViper})` };
      case 'ANNA':
        return { backgroundImage: `url(${backgroundImageAnna})` };
      case 'JAY':
        return { backgroundColor: 'blue' };
      default:
        return {};
    }
  };
  
 return (
    <div className="edit_container" style={getBackgroundStyle()}>
     <div class="glitch-wrapper">
   <div class="glitch" data-glitch="Create Your Bacca">Create Your Bacca</div>
</div>

      <Row className="m-5">
      <Col md={6} xs={12}>
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
        <Col md={6} xs={12} >
  <h3>Bottle Preview</h3>
  <Row className='BottlePreview'>
    {showImage && (
      <>
        <Image src={showImage} className='bottle-image' />
        {avatarBase64 && <img src={avatarBase64} alt="User Logo" className="logo1" />}
        {avatarBase64 && <img src={avatarBase64} alt="User Logo" className="logo" />}
      </>
    )}
  </Row>
</Col>

      </Row>
    </div>
  );
};

export default CreateCustomBottle;