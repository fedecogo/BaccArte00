import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Importa anche useDispatch
import { Row, Col, Button } from 'react-bootstrap';
import { getUserCartDataAction } from '../redux/actions/cart';

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
      } else {
        console.error('Errore durante l\'aggiunta della bottiglia al carrello');
      }
    } catch (error) {
      console.error('Errore durante la richiesta di aggiunta al carrello:', error);
    }
  };
  
  return (
    
    <Row className="justify-content-center">
         <h1>{totCartPrice}</h1>
      <Col md={8}>
        <h2>Your Cart</h2>
        {groupedCart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {groupedCart.map(product => (
              <div key={product.id_bottle} style={{border: '1px solid #ddd', margin: '10px', padding: '10px'}}>
                <img src={product.logoUser} alt={product.artist} style={{width: "20px"}}/>
                <h2>{product.artist}</h2>
                <p><strong>Contenuto della bottiglia:</strong> {product.bottleContents}</p>
                <p><strong>Prezzo:</strong> {product.price}€</p>
                <p><strong>Quantità:</strong> {product.quantity}</p>
                <button onClick={() => removeFromCart(product.id_bottle)}>Rimuovi dal Carrello</button>
                <button onClick={() => addToCart(product.id_bottle, 1)}>Aggiungi un'altra Bottiglia</button> 
              </div>
            ))}
          </ul>
        )}
      </Col>
    </Row>
  );
};

export default MyCart;
