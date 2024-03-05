import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import mapLogo from '../../assets/mapLogo.png'
import L from 'leaflet';
import { Col } from 'react-bootstrap';

function MapComponent() {
    const [bars, setBars] = useState([]);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const fetchBars = async () => {
            try {
                const token = localStorage.getItem('token');
                if (token) {
                    setAuthenticated(true);
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
                } else {
                    setAuthenticated(false);
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

    return (
        <>
            <Col xs={12} md={6}>
                {authenticated ? (
                    <MapContainer className='maps-box' center={[45.311693897633354, 11.697940649618522]} zoom={6.5}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        
                        {bars.map((bar, index) => (
                            <Marker key={index} position={bar.position} icon={customIcon}>
                                <Popup>{bar.name} {bar.via}</Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                ) : (
                    <p>Registrati o effettua il login per vedere dove degustare.</p>
                )}
            </Col>
            <Col xs={12} md={6}>
                {authenticated && (
                    <>
                        <h1 className='text-center mt-5'>Elenco dei locali</h1>
                        <ul>
                            {bars.map((bar, index) => (
                                <li key={index}>{bar.name} - {bar.via}</li>
                            ))}
                        </ul>
                    </>
                )}
            </Col>
        </>
    );
}

export default MapComponent;

