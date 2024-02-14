import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getUserDataAction } from '../redux/actions/user';
import { getUserCartDataAction } from '../redux/actions/cart';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await loginUser(email, password);
      localStorage.setItem('token', data.token);
      dispatch(getUserDataAction(data.token));
      dispatch(getUserCartDataAction(data.token));
      navigate('/home');
    } catch (error) {
      console.error('Errore durante il login:', error);
    }
  };

  const loginUser = async (email, password) => {
    const response = await fetch('http://localhost:3001/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Errore durante il login');
    }

    return await response.json();
  };

  return (
    <div className="login-container">
      <Form
        className="login-form"
        onSubmit={handleSubmit}
      >
        <h1 className="login-title">Login</h1>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="login-input"
            required
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
  
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="login-input"
            required
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
  
        <Button variant="primary" type="submit" className="login-button">
          Login
        </Button>
        <div className="register-link">
          <Link to="/register" className="register-button">
            Register
          </Link>
        </div>
      </Form>
    </div>
  );
  

};

export default Login;
