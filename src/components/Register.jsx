import React, { useState } from 'react';
import Swal from 'sweetalert2'; 
import { Form, Button } from 'react-bootstrap';

const Register = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Le password non corrispondono!"
            });
            return;
        }

        const data = {
            name,
            surname,
            username,
            email,
            password,
            phoneNumber
        };

        fetch('http://localhost:3001/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "L'email inserita è già in uso!"
                  });
                throw new Error('Registration failed');
            }
            console.log('Registration successful');
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Registrazione avvenuta con Successo",
                showConfirmButton: false,
                timer: 1500
            });
            setTimeout(() => {
                window.location.href = '/login';
            }, 1500);
        })
        .catch(error => {
            console.error(error);
        });
    };

    return (
        <div className="register-container">
          <Form
            className="register-form"
            onSubmit={handleSubmit}
          >
            <h1 className="register-title">Register</h1>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                className="register-input"
                required
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
      
            <Form.Group controlId="formSurname">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                className="register-input"
                required
                type="text"
                placeholder="Surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </Form.Group>
      
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                className="register-input"
                required
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
      
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                className="register-input"
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
                className="register-input"
                required
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
      
            <Form.Group controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                className="register-input"
                required
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
      
            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <div className="phone-input-container">
                <Form.Control
                  className="phone-input"
                  type="tel"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => {
                    const input = e.target.value.replace(/\D/g, '');
                    setPhoneNumber(input);
                  }}
                  inputMode="numeric"
                />
              </div>
            </Form.Group>
      
            <Button variant="primary" type="submit" className="register-button">
              Register
            </Button>
          </Form>
        </div>
      );
      
};

export default Register;
