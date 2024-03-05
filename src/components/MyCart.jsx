import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Button, Image, Card } from 'react-bootstrap';
import { getUserCartDataAction } from '../redux/actions/cart';
import Swal from 'sweetalert2';

const MyCart = () => {
  const dispatch = useDispatch(); 
  const userCart = useSelector(state => state.cart.bottles[0]);
  const totCartPrice = useSelector(state => state.cart.totCartPrice);

  let groupedCart = userCart.reduce((acc, bottle) => {
    let found = acc.find(item => item.id_bottle === bottle.id_bottle);
    if (found) {
      found.quantity += 1;
    } else {
      acc.push({...bottle, quantity: 1});
    }
    return acc;
  }, []);

  const removeFromCart = (productId) => {
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

  return (
    <Row className="justify-content-center ">
      <h2 className='text-center mt-5 mb-5 text-white'>Your Cart</h2> 
      <Col xs={12} md={8} className='dxSide'>
        {groupedCart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            {groupedCart.map(product => (
              <Row className='DivCart' key={product.id_bottle}>
                <Col xs={3}>
                  <Image src={product.bottigliCompleta} alt={product.artist} className="img-fluid" />
                </Col>
                <Col>
                  {product.artist !== null ? (
                    <p><strong>Bottiglia Customizzata da:</strong> {product.artist}</p>
                  ) : (
                    <p><strong>Contenuto della bottiglia:</strong> {product.bottleContents}</p>
                  )}
                  <p><strong>Prezzo:</strong> {product.price}€</p>
                  <p><strong>Quantità:</strong> {product.quantity}</p>
                  <div className='d-flex flex-column '>
                    <Button className='btnCart mb-2 ' onClick={() => addToCart(product.id_bottle, 1)} variant="outline-primary">Aggiungi un'altra Bottiglia</Button> 
                    <Button className='btnCart' onClick={() => removeFromCart(product.id_bottle)} variant="outline-danger">Rimuovi dal Carrello</Button>
                  </div>
                </Col>
              </Row>
            ))}
          </>
        )}
      </Col>
      <Col xs={12} md={4} className='sxSide'>
        <Card border="primary" className='cardCart'>
          <Card.Header>Sommario Carrello</Card.Header>
          <Card.Body>
            <Card.Title>Ecco i tuoi prodotti</Card.Title>
            {groupedCart.map(product => (
              <Row key={product.id_bottle} className='centroSommario'>
              {product.artist !== null ? (
                <p><strong>{product.quantity} {product.quantity > 1 ? 'Bottiglie' : 'Bottiglia'} di {product.bottleContents} Customizzata da:</strong> {product.artist}</p>
              ) : (
                <p><strong>{product.quantity} {product.quantity > 1 ? 'Bottiglie' : 'Bottiglia'} di:</strong> {product.bottleContents}</p>
              )}
             <p><strong>Prezzo per bottiglia:</strong> {product.price}€ <strong>Prezzo totale:</strong> {product.price * product.quantity}€</p>
     
            </Row>
            
            ))}
            <hr />
            <p><strong>Prezzo totale:</strong> {totCartPrice}</p>
            <Button variant="outline-primary">Acquista</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default MyCart;
