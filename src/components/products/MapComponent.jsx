import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import mapLogo from '../../assets/mapLogo.png';
import L from 'leaflet';
import { Col, Form, Button } from 'react-bootstrap';

function MapComponent() {
    const [bars, setBars] = useState([]);
   
    const [searchQuery, setSearchQuery] = useState('');
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const fetchBars = async () => {
            try {
                    const response = await fetch('http://localhost:3001/user/allBars', {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    if (response.ok) {
                        const data = await response.json();
                        setBars(data);
                    } else {
                        throw new Error('Failed to fetch bars');
                    }
                
            } catch (error) {
                console.error(error);
            }
        };

        fetchBars();
    }, []);

    const customIcon = new L.Icon({
        iconUrl: mapLogo,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
    });

    const filteredBars = bars.filter(bar =>
        bar.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bar.via.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const displayedBars = showAll ? filteredBars : filteredBars.slice(0, 10);

    return (
        <>
            <Col xs={12} md={6}>
                <MapContainer className='maps-box' center={[45.311693897633354, 11.697940649618522]} zoom={6.5}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    
                    {filteredBars.map((bar, index) => (
                        <Marker key={index} position={bar.position} icon={customIcon}>
                            <Popup>
                                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(bar.name + ' ' + bar.via)}`} target="_blank" rel="noopener noreferrer">
                                    {bar.name} - {bar.via}
                                </a>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </Col>
            <Col xs={12} md={6}>
                <>
                    <h1 className='text-center mt-5'>Elenco dei locali</h1>
                    <Form.Group controlId="searchBar">
                        <Form.Control
                            type="text"
                            placeholder="Cerca bar per nome o località"
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                        />
                    </Form.Group>
                    <ul>
                        {displayedBars.map((bar, index) => (
                            <li key={index}>{bar.name} - {bar.via}</li>
                        ))}
                    </ul>
                    {!showAll && filteredBars.length > 10 && (
                       <Button variant="outline-primary" onClick={() => setShowAll(true)}>Mostra di più</Button>
                    )}
                    {showAll && (
                       <Button variant="outline-primary" onClick={() => setShowAll(false)}>Mostra di meno</Button>
                    )}
                </>
            </Col>
        </>
    );
}

export default MapComponent;

