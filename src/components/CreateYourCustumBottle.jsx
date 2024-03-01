import React, { useState,useEffect,useRef } from 'react';
import { Form, Button, Row, Col,Image } from 'react-bootstrap';
import Swal from 'sweetalert2';
import html2canvas from 'html2canvas';
import { useSelector } from 'react-redux';
import RedBerryFoto from '../components/../assets/createYouBottles/redBerry.png';
import TransparentBottle from '../components/../assets/createYouBottles/trasparentBottle_png.png';
import ItalianBouquetFoto from '../components/../assets/createYouBottles/italianBouquet.png';
import wallpaper1viper from '../assets/viper/wallpaper.webp'
import wallpaper2viper from '../assets/viper/wallpaper2.webp'
import wallpaper1anna from '../assets/anna/wallpaper1.webp'
import wallpaper2anna from '../assets/anna/wallpaper2.webp'
import mergeImages from 'merge-images';
import { useNavigate } from 'react-router-dom';
import etichettaCustum1 from '../assets/createYouBottles/etichetta vuota - Copy - Copy.png';
import etichettaCustum2 from '../assets/createYouBottles/etichetta vuota - Copy - Copy - Copy.png'
import etichettaCustum3 from '../assets/createYouBottles/etichetta vuota - Copy.png'
import etichettaCustum4 from '../assets/createYouBottles/etichetta vuota.png'
import { saveAs } from 'file-saver';



const CreateCustomBottle = () => {
  const [sizeBottle, setSizeBottle] = useState('');
  const [bottleContents, setBottleContents] = useState('');
  const [showLogoBody, setShowLogoBody] = useState(false);
  const [showLogoNeck, setShowLogoNeck] = useState(false);
  const [artist, setArtist] = useState('');
  const [showImage, setShowImage] = useState('');
  const [backgroundImageViper, setBackgroundImageViper] = useState(wallpaper1viper);
  const [backgroundImageAnna, setBackgroundImageAnna] = useState(wallpaper2anna);
  const userDataInSession = useSelector((state) => state.user.user[0]?.avatar || null);
  const [avatarBase64, setAvatarBase64] = useState('');
  const navigate = useNavigate();
  const [selectedEtichetta, setSelectedEtichetta] = useState('');
  const [bottigli_completa, setPreviewImage] = useState(null);
  const previewRef = useRef(null);



  const handleEtichettaChange = (e) => {
    setSelectedEtichetta(e.target.value);
  };


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
      // const bottleImageUrl = TransparentBottle; 
      // const artistStyleUrl = artist === 'VIPER' ? backgroundImageViper :backgroundImageAnna ; 
      // const base64Image = await mergeImages([
      //   { src: bottleImageUrl, x: 0, y: 0 }, 
      //   { src: artistStyleUrl, x: 300, y: 800, opacity: 0.0001}, 
      // ]);
      // console.log(base64Image);
      setShowImage(TransparentBottle);
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
  
    try {
      const canvas = await html2canvas(previewRef.current);
      const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg'));
  
      const formData = new FormData();
      formData.append('image', blob, 'bottiglia.jpg'); 
  
      const response = await fetch('http://localhost:3001/user/me/saveImageBottle', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      });
      
      if (response.ok) {
       const responseData = await response.text(); // Leggi la risposta come testo
       setPreviewImage(responseData);
      } else {
        console.error('Failed to upload image');
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Immagine non caricata su Cloudinary",
          showConfirmButton: false,
          timer: 1500
        });
      }
  
      const requestBody = {
        sizeBottle,
        bottleContents,
        artist,
        bottigli_completa,
      };
  
      const createBottleResponse = await fetch('http://localhost:3001/user/me/createYourBottle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(requestBody),
      });
  
      if (!createBottleResponse.ok) {
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
  // setShowImage('');
  generatePreview(); 
};

const handleContentsChange = (event) => {
  setBottleContents(event.target.value);
  // setShowImage('');
  // generatePreview(); 

};


 const handleShowLogoBodyChange = (e) => {
  setShowLogoBody(e.target.checked);
};

const handleShowLogoNeckChange = (e) => {
  setShowLogoNeck(e.target.checked);
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
{userDataInSession ? (
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
      <Form.Group controlId="formContents">
              <Form.Label>Etichette Default</Form.Label>
              <Form.Control as="select" value={selectedEtichetta} onChange={handleEtichettaChange}>
                <option value="">Select Contents</option>
                <option value="Universe1">Space</option>
                <option value="Universe2">Space2</option>
                <option value="Flower">Flower</option>
                <option value="Color">Color</option>
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
      {userDataInSession && (
  <>
    <Form.Group controlId="formShowLogoBody">
      <Form.Check
        type="checkbox"
        label="Vuoi aggiungere il logo sul corpo della bottiglia?"
        checked={showLogoBody}
        onChange={handleShowLogoBodyChange}
      />
    </Form.Group>
    <Form.Group controlId="formShowLogoNeck">
      <Form.Check
        type="checkbox"
        label="Vuoi aggiungere il logo sul collo della bottiglia?"
        checked={showLogoNeck}
        onChange={handleShowLogoNeckChange}
      />
    </Form.Group>
  </>
)}
      <Button variant="primary" type="submit">
        Create Bottle
      </Button>
    </Form>
  </Col>
        <Col md={6} xs={12} >
  <h3>Bottle Preview</h3>
  <Row ref={previewRef} className='BottlePreview'>
  {showImage && (
    <>
      <Image src={showImage} className='bottle-image' />
      {userDataInSession && showLogoBody && avatarBase64 && <img src={avatarBase64} alt="User Logo" className="logo1" />}
      {userDataInSession && showLogoNeck && avatarBase64 && <img src={avatarBase64} alt="User Logo" className="logo2" />}
      {selectedEtichetta === 'Universe1' && <img src={etichettaCustum1} alt="Etichetta Universe1" className="etichettaScelta" />}
      {selectedEtichetta === 'Universe2' && <img src={etichettaCustum2} alt="Etichetta Universe2" className="etichettaScelta" />}
      {selectedEtichetta === 'Flower' && <img src={etichettaCustum4} alt="Etichetta Flower" className="etichettaScelta" />}
      {selectedEtichetta === 'Color' && <img src={etichettaCustum3} alt="Etichetta Color" className="etichettaScelta" />}
    </>
  )}
</Row>

</Col>
      </Row>
      ) : (
        <div className="login-register-message">
          <p>Per utilizzare tutte le funzionalità del sito, effettua il login o registrati.</p>
          <Button variant="primary" onClick={() => navigate('/login')}>Login</Button>
          <Button variant="primary" onClick={() => navigate('/register')}>Registrati</Button>
        </div>
      )}
    </div>
  );
};

export default CreateCustomBottle;