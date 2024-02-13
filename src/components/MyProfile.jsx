// components/MyProfile.js

import React from 'react';
import { useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

const MyProfile = () => {
    const userDataInSession = useSelector((state) => state.user.user);
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.assign("http://localhost:3000/home"); 
    };
    
    
    
    
console.log(userDataInSession)
    const user = userDataInSession[0];

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{user.name} {user.surname}</h5>
                            <p className="card-text">Username: {user.username}</p>
                            <p className="card-text">Email: {user.email}</p>
                            <p className="card-text">Phone Number: {user.phoneNumber}</p>
                            <p className="card-text">Type of User: {user.typeOfUser}</p>
                            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
