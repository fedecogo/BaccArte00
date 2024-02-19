import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'react-multi-carousel';
import { Row, Col, Spinner , Button} from 'react-bootstrap';
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
  const isDarkTheme = useSelector(state => state.theme.isDarkTheme);
  const userDataInSession = useSelector((state) => state.user.user);
  const userCartTot = useSelector((state) => state.cart.totCartPrice);
  const dispatch = useDispatch();

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


  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.assign("http://localhost:3000/home");
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
      }
    } catch (error) {
      console.error('Error uploading image:', error);
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

  const user = userDataInSession[0];

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
    //utente normale
    <Row className={isDarkTheme ? "divHomeLight" : "divHomeDark"} xs={12} md={8}>
            <Row className="justify-content-center">
                <Col md={10}>
                    <Row>
                        <Col md={4} className="d-flex justify-content-center">
                            <div className="profile-picture" style={{position: 'relative', borderRadius: '50%', overflow: 'hidden', width: '200px', height: '200px'}}>
                                <img src={user.avatar} alt="Profile" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                            </div>
                        </Col>
                        <Col md={8}>
                            <h2>{user.name} {user.surname}</h2>
                            <p><strong>Username:</strong> {user.username}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
                            <p><strong>Type of User:</strong> {user.typeOfUser}</p>
                        </Col>
                    </Row>
                    <button className="btn btn-primary mt-3 btn-block" onClick={handleImageUpload}>Upload Image</button>
                    <input type="file" accept="image/*" onChange={handleFileChange} className="btn mt-3 btn-block" />
                    {uploading && <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>}
                    {uploadSuccess && (
                        <div className="alert alert-success mt-3" role="alert">
                            Image uploaded successfully!
                        </div>
                    )}
                   <Link to="/mycart" className="btn btn-primary mt-3 btn-block">
                   <FaShoppingCart /> {userCartTot}
                    </Link>
                    <button className="btn btn-danger mt-3 btn-block" onClick={handleLogout}>Logout</button>
                    <h5 className="text-center mt-4">Your Bottles:</h5>
                    <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={3000} infinite={true}>
            {userBottles.map(bottle => (
              <div className="card mt-3" style={{ width: "18rem" }} key={bottle.id_bottle}>
                <img src={bottle.logoUser} className="d-block w-100" alt="Logo User" />
                <div className="card-body">
                  <h6>{bottle.sizeBottle} - {bottle.bottleContents}</h6>
                  <p><strong>Artista:</strong> {bottle.artist}</p>
                  <p><strong>Prezzo:</strong> €{bottle.price}</p>
                  <Button variant="danger" onClick={() => handleDeleteBottle(bottle.id_bottle)}>Delete</Button>
                </div>
              </div>
            ))}
          </Carousel>
                    
                </Col>
            </Row>
        </Row>
    );
    //utente admin
    
    
    
};

export default MyProfile;
