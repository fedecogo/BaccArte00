import React, { useState } from 'react';
import Swal from 'sweetalert2'; 


const Register = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

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
                    text: "Something went wrong!"
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
            setError('Registration failed. Please try again.'); 
        });
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Name" required />
                        </div>
                        <div className="mb-3">
                            <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} className="form-control" placeholder="Surname" required />
                        </div>
                        <div className="mb-3">
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" placeholder="Username" required />
                        </div>
                        <div className="mb-3">
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email" required />
                        </div>
                        <div className="mb-3">
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" required />
                        </div>
                        <div className="mb-3">
                            <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="form-control" placeholder="Phone Number" />
                        </div>
                        {error && <div className="alert alert-danger">{error}</div>} 
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
