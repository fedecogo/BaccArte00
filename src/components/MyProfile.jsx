import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const MyProfile = () => {
    const [userBottles, setUserBottles] = useState([]);
    const userDataInSession = useSelector((state) => state.user.user);
    const navigate = useNavigate();
    
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
                console.log(data)
                setUserBottles(data);
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

    const user = userDataInSession[0];
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <img src={user.avatar} alt="Profile" />
                            <h5 className="card-title">{user.name} {user.surname}</h5>
                            <p className="card-text">Username: {user.username}</p>
                            <p className="card-text">Email: {user.email}</p>
                            <p className="card-text">Phone Number: {user.phoneNumber}</p>
                            <p className="card-text">Type of User: {user.typeOfUser}</p>
                            <h6>Your Bottles:</h6>
                            {userBottles.map(bottle => (
                                <div className="card" style={{width: "18rem"}} key={bottle.id_bottle}>
                                    <img src={bottle.logoUser} className="card-img-top" alt="Logo User"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{bottle.sizeBottle} - {bottle.bottleContents}</h5>
                                        <p className="card-text">Artista: {bottle.artist}</p>
                                        <p className="card-text">Prezzo: €{bottle.price}</p>
                                    </div>
                                </div>
                            ))}
                            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
