import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'react-multi-carousel';
import { Row, Col, Spinner, Button, Table, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { getUserDataAction } from '../redux/actions/user';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { getUserCartDataAction } from '../redux/actions/cart';

const MyProfile = () => {
  const [userBottles, setUserBottles] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [barName, setBarName] = useState('');
  const [barPosition, setBarPosition] = useState('');
  const [barAddress, setBarAddress] = useState('');
  const isDarkTheme = useSelector(state => state.theme.isDarkTheme);
  const userDataInSession = useSelector((state) => state.user.user);
  const userCartTot = useSelector((state) => state.cart.totCartPrice);
  const [userType, setUserType] = useState();
  const dispatch = useDispatch();
  const [allUsers, setAllUsers] = useState([]);
  const isAdmin = useSelector((state) => state.user.user[0].typeOfUser);
  const [adminBottles, setAdminBottles] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:3001/user/all', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const data = await response.json();
        setAllUsers(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching all users:', error);
      }
    };

    if (isAdmin) {
      fetchAllUsers();
    }
  }, []);

  useEffect(() => {
    const fetchAllAdminBottles = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:3001/bottles/admin/getAllBottles', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const data = await response.json();
        setAdminBottles(data);
      } catch (error) {
        console.error('Error fetching all admin bottles:', error);
      }
    };
  
    if (isAdmin) {
      fetchAllAdminBottles(); 
    }
  }, []);
  

  useEffect(() => {
    const fetchUserBottles = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:3001/user/me/allMyBottles', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const data = await response.json();
        setUserBottles(data);
        dispatch(getUserCartDataAction(data.token));
      } catch (error) {
        console.error('Error fetching user bottles:', error);
      }
    };

    fetchUserBottles();
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:3001/user/me', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const data = await response.json();
        setUserType(data.typeOfUser);
        dispatch(getUserCartDataAction(token));
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.assign("http://localhost:3000/");
  };

  const handleFileChange = (event) => {
    setImageFile(event.target.files[0]);
  };

  const handleImageUpload = async () => {
    try {
      setUploading(true);
      const token = localStorage.getItem('token');
      const formData = new FormData();
      formData.append('image', imageFile);
      const response = await fetch('http://localhost:3001/user/me/saveImage', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      });
      if (response.ok) {
        setUploadSuccess(true);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Immagina Caricata con successo",
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        console.error('Failed to upload image');
        setUploading(false);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Immagine Troppo pesante , non è stata caricata con successo!"
        });
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      setUploading(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Immagine Troppo pesante , non è stata caricata con successo!"
      });
    } finally {
      setUploading(false);
      const token = localStorage.getItem('token');
      dispatch(getUserDataAction(token));
    }
  };

  const handleDeleteBottle = async (bottleId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:3001/user/me/deleteYourBottle', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ bottleId })
      });
      if (response.ok) {
        setUserBottles(userBottles.filter(bottle => bottle.id_bottle !== bottleId));
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Bottiglia eliminata con successo",
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        console.error('Failed to delete bottle');
      }
    } catch (error) {
      console.error('Error deleting bottle:', error);
    }
  };

  const addToCart = async (bottleId, quantity) => {
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
        dispatch(getUserCartDataAction(localStorage.getItem('token')));
        Swal.fire({
          icon: 'success',
          title: 'Bottiglia aggiunta al carrello!',
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        console.error('Errore durante l\'aggiunta della bottiglia al carrello');
      }
    } catch (error) {
      console.error('Errore durante la richiesta di aggiunta al carrello:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const formData = {
      name: barName,
      position: barPosition.split(",").map(parseFloat),
      via: barAddress
    };
  
    fetch('http://localhost:3001/user/addBar', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
      Swal.fire({
        icon: 'success',
        title: 'Bar aggiunto al correttamente alla mappa!',
        showConfirmButton: false,
        timer: 1500
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  const user = userDataInSession[0];
  const userNameA = userDataInSession[0].name;
  const userNameB = userNameA.charAt(0).toUpperCase() + userNameA.slice(1).toLowerCase();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Row className={isDarkTheme ? "divHomeLight" : "divHomeDark"} xs={12} md={8}>
      <Row className="justify-content-center">
        <Col md={10}>
          {userType === 'USER' && (
            <>
              <Row>
                <Col md={4} className="d-flex justify-content-center">
                  <div className="profile-picture" style={{ position: 'relative', borderRadius: '50%', overflow: 'hidden', width: '200px', height: '200px' }}>
                    <img src={user.avatar} alt="Profile" className='fotoProfilo' />
                  </div>
                </Col>
                <Col md={8}>
                  <h2>{userNameB} {user.surname}</h2>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
            
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={4}>
                <h1>Vuoi Cambiare il tuo Logo?</h1>
              <input type="file" accept="image/*" onChange={handleFileChange} className="btn btn-outline-primary mt-3 btn-block" />
              {uploading && <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>}
              {uploadSuccess && (
                <div className="alert alert-success mt-3" role="alert">
                  Image uploaded successfully!
                </div>
              )} 
                <Button variant="outline-primary" className="mt-3 btn-block" onClick={handleImageUpload}>Carica Immagine</Button>
                </Col>
                <Col xs={12} md={4}>
                <Link to="/mycart" className="btn btn-outline-primary mt-3 mx-3 btn-block">
                <FaShoppingCart /> {userCartTot}€
              </Link>
              <Button variant="outline-danger" className="mt-3 btn-block" onClick={handleLogout}>Esci</Button>
             </Col>
              </Row>
             
              <h5 className="text-center mt-4">Your Bottles:</h5>
              <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={3000} infinite={true}>
                {userBottles.map(bottle => (
                  <div className="card mt-3" style={{ width: "18rem" }} key={bottle.id_bottle}>
                    <img src={bottle.bottigliCompleta} className="d-block w-100" alt="Logo User" />
                    <div className="card-body">
                      <h6>{bottle.sizeBottle} - {bottle.bottleContents}</h6>
                      <p><strong>Artista:</strong> {bottle.artist}</p>
                      <p><strong>Prezzo:</strong> €{bottle.price}</p>
                      <Button variant="outline-danger" onClick={() => handleDeleteBottle(bottle.id_bottle)}>Delete</Button>
                      <Button variant="outline-primary" className='ms-2'  onClick={() => addToCart(bottle.id_bottle, 1)}>Add To cart</Button>
                    </div>
                  </div>
                ))}
              </Carousel>
            </> 
          )}

          {userType === 'ADMIN' && (
            <>
              <Row>
                <Col md={4} className="d-flex justify-content-center">
                  <div className="profile-picture" style={{ position: 'relative', borderRadius: '50%', overflow: 'hidden', width: '200px', height: '200px' }}>
                    <img src={user.avatar} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                </Col>
                <Col md={8}>
                  <h2>Welcome back admin {userNameB}. Here you can check your site </h2>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={4}>
                <h1>Vuoi Cambiare il tuo Logo?</h1>
              <input type="file" accept="image/*" onChange={handleFileChange} className="btn btn-outline-primary mt-3 btn-block" />
              {uploading && <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>}
              {uploadSuccess && (
                <div className="alert alert-success mt-3" role="alert">
                  Image uploaded successfully!
                </div>
              )} 
                <Button variant="outline-primary" className="mt-3 btn-block" onClick={handleImageUpload}>Carica Immagine</Button>
                </Col>
                <Col xs={12} md={4}>
                <Link to="/mycart" className="btn btn-outline-primary mt-3 mx-3 btn-block">
                <FaShoppingCart /> {userCartTot}€
              </Link>
              <Button variant="outline-danger" className="mt-3 btn-block" onClick={handleLogout}>Esci</Button>
             </Col>
              </Row>
              <Row>
                <Col xs={12} md={8} className='mt-5' >
                  {allUsers.length > 0 ? (
                    <Table striped bordered hover className={isDarkTheme ? "table-light" : "table-dark text-light"}>
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Surname</th>
                          <th>Email</th>
                          <th>Avatar</th>
                          <th>Phone Number</th>
                          <th>Type of User</th>
                          <th>Account Deleted</th>
                        </tr>
                      </thead>
                      <tbody>
                        {allUsers.map(user => (
                          <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.surname}</td>
                            <td>{user.email}</td>
                            <td><img src={user.avatar} alt="Avatar" style={{ width: '50px', height: '50px' }} /></td>
                            <td>{user.phoneNumber}</td>
                            <td>{user.typeOfUser}</td>
                            <td>{user.accountDeleted ? "Yes" : "No"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  ) : (
                    <p>No users found.</p>
                  )}
                </Col>
                <Col className='d-flex align-items-center justify-content-center '>
                  <h1 className='text-center'>Elenco di tutti gli utenti registrati:</h1>
                </Col>
                <hr />
                <Col xs={12} md={8} >
                  <h1>Elenco di tutte le bottiglie nel database</h1>
                  {adminBottles.length > 0 ? (
                    <Table striped bordered hover className={isDarkTheme ? "table-light" : "table-dark text-light"}>
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Size</th>
                          <th>Contents</th>
                          <th>Artist</th>
                          <th>Price</th>
                          <th>Image</th>
                          <th>User</th>
                          <th>Deleted</th>
                        </tr>
                      </thead>
                      <tbody>
                        {adminBottles.map(bottle => (
                          <tr key={bottle.id_bottle}>
                            <td>{bottle.id_bottle}</td>
                            <td>{bottle.sizeBottle}</td>
                            <td>{bottle.bottleContents}</td>
                            <td>{bottle.artist}</td>
                            <td>€{bottle.price}</td>
                            <td><img src={bottle.bottigliCompleta} alt="Bottle" style={{ width: '50px', height: '50px' }} /></td>
                            <td>{bottle.user.name} {bottle.user.surname}</td>
                            <td>{bottle.csdeleted ? "Yes" : "No"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  ) : (
                    <p>No bottles found.</p>
                  )}
                </Col>
               <Col xs={12} md={4}>
    <h3>Aggiungi un nuovo bar</h3>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="barName">
        <Form.Label>Nome del Bar</Form.Label>
        <Form.Control type="text" placeholder="Inserisci il nome del bar" value={barName} onChange={(e) => setBarName(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="barPosition">
        <Form.Label>Posizione</Form.Label>
        <Form.Control type="text" placeholder="Inserisci la posizione del bar (latitudine, longitudine)" value={barPosition} onChange={(e) => setBarPosition(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="barAddress">
        <Form.Label>Indirizzo</Form.Label>
        <Form.Control type="text" placeholder="Inserisci l'indirizzo del bar" value={barAddress} onChange={(e) => setBarAddress(e.target.value)} />
      </Form.Group>
      <Button variant="outline-primary"type="submit" className='mt-3'>Aggiungi Bar</Button>
    </Form>
  </Col>
              </Row>
              <Row>
  
</Row>

              <Row>
              <h5 className="text-center mt-4">Ti sei dato all'arte anche tu? Ecco le tue Bottiglie Custums</h5>
              <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={3000} infinite={true}>
                {userBottles.map(bottle => (
                  <div className="card mt-3" style={{ width: "18rem" }} key={bottle.id_bottle}>
                    <img src={bottle.bottigliCompleta} className="d-block w-100" alt="Logo User" />
                    <div className="card-body">
                      <h6>{bottle.sizeBottle} - {bottle.bottleContents}</h6>
                      <p><strong>Artista:</strong> {bottle.artist}</p>
                      <p><strong>Prezzo:</strong> €{bottle.price}</p>
                      <Button variant="outline-danger" onClick={() => handleDeleteBottle(bottle.id_bottle)}>Delete</Button>
                      <Button variant="outline-primary"className='ms-2'  onClick={() => addToCart(bottle.id_bottle, 1)}>Add To cart</Button>
                    </div>
                  </div>
                ))}
              </Carousel>
              </Row>
            </>
          )}

          {userType === 'ARTIST' && (
            <>

            </>
          )}
        </Col>
      </Row>
    </Row>
  );
};

export default MyProfile;
