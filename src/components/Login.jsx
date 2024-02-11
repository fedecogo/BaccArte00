import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import { getUserDataAction } from '../redux/actions/user'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
	const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    try {
        await getUser();
        const token = localStorage.getItem('token');
        console.log('Token salvato:', token);
        navigate('/home');
    } catch (error) {
        console.error('Errore durante la richiesta di login:', error);
    }
};
  async function getUser() {
    try {
        const response = await fetch('http://localhost:3001/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });
    
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        
        const data = await response.json();
        localStorage.setItem('token', data.token);
        dispatch(getUserDataAction())
        console.log('Token ottenuto:', data.token);
        navigate('/home');
    } catch (error) {
        throw new Error(error);
    }
}

  return (
    <div className="container">
      <h1>Login</h1>
      <Form
			style = {{
				maxWidth: '500px',
				margin: 'auto',
				padding: '20px',
				border: '1px solid #ccc',
				borderRadius: '20px',
			}}
			onSubmit = {handleSubmit}
		>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
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
            required
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleSubmit}>
          Login
        </Button>
        <Link to = "/register">
            <Button variant="secondary" style = {{marginLeft: '10px'}}>
                Register
            </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Login;
