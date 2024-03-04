import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import mapLogo from '../../assets/mapLogo.png'
import L from 'leaflet';
import { Col } from 'react-bootstrap';

function MapComponent() {
    const bar = [
        { name: 'Milano', position: [45.4642, 9.1900]  , via:"Via Marco Polo"   },
        { name: 'Torino', position: [45.0703, 7.6869]  , via:"Via Marco Polo"   },
        { name: 'Varese', position: [45.8174, 8.8265]  , via:"Via Marco Polo"   },
        { name: 'Lecco', position: [45.8568, 9.3895]  , via:"Via Marco Polo"   },
        { name: 'Brescia', position: [45.5416, 10.2118] , via:"Via Marco Polo"    },
        { name: 'Monza', position: [45.5845, 9.2746]  , via:"Via Marco Polo"   },
        { name: 'Vigevano', position: [45.3198, 8.8543]  , via:"Via Marco Polo"   },
        { name: 'Loano', position: [44.1495, 8.2554]  , via:"Via Marco Polo"   },
        { name: 'Desenzano del Garda', position: [45.4731, 10.5336] , via:"Via Marco Polo"    },
        { name: 'Copparo', position: [44.8887, 11.9826] , via:"Via Marco Polo"    },
        { name: 'Ravenna', position: [44.4173, 12.2047] , via:"Via Marco Polo"    }
    ];

    const customIcon = new L.Icon({
        iconUrl: mapLogo,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
    });

    return (
        <>
        <Col xs={12} md={6}>
        <MapContainer className='maps-box' center={[45.311693897633354, 11.697940649618522]} zoom={6.5}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            
            {bar.map((bar, index) => (
                <Marker key={index} position={bar.position} icon={customIcon}>
                    <Popup>{bar.name}</Popup>
                </Marker>
            ))}
        </MapContainer>
        </Col>
        <Col xs={12} md={6}>
            <h1 className='text-center mt-5'>Elenco dei locali</h1>
            <ul>
                {bar.map((bar, index) => (
                    <li key={index}>{bar.name}  -  {bar.via}</li>
                ))}
            </ul>
        </Col>
        </>
        
    );
}

export default MapComponent;
