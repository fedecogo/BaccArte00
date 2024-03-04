import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';

const Events = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [counter, setCounter] = useState(0);

  const events = [
    {
      name: "Spirit Speed Date 1° edition",
      images: [
        "https://globaluserfiles.com/media/189053_22d0d2a53310a84d9b43a723bd5cf96e9afe53dc.jpeg/v1/w_1730,h_0/20231011_193350.webp",
        "https://globaluserfiles.com/media/189053_e9e3e1cb6695bd135ab78b2e1dd06e7893a43820.jpeg/v1/w_1116,h_0/20231011_205244.webp",
        "https://globaluserfiles.com/media/189053_621ed4f9af06fff1aeacb3a783d463d29905865b.jpeg/v1/w_1116,h_0/img_6984.webp"
      ]
    },
    {
        name: "Spirit Speed Date 1° edition",
        images: [
          "https://globaluserfiles.com/media/189053_22d0d2a53310a84d9b43a723bd5cf96e9afe53dc.jpeg/v1/w_1730,h_0/20231011_193350.webp",
          "https://globaluserfiles.com/media/189053_e9e3e1cb6695bd135ab78b2e1dd06e7893a43820.jpeg/v1/w_1116,h_0/20231011_205244.webp",
          "https://globaluserfiles.com/media/189053_621ed4f9af06fff1aeacb3a783d463d29905865b.jpeg/v1/w_1116,h_0/img_6984.webp"
        ]
      },
      {
        name: "Spirit Speed Date 1° edition",
        images: [
          "https://globaluserfiles.com/media/189053_22d0d2a53310a84d9b43a723bd5cf96e9afe53dc.jpeg/v1/w_1730,h_0/20231011_193350.webp",
          "https://globaluserfiles.com/media/189053_e9e3e1cb6695bd135ab78b2e1dd06e7893a43820.jpeg/v1/w_1116,h_0/20231011_205244.webp",
          "https://globaluserfiles.com/media/189053_621ed4f9af06fff1aeacb3a783d463d29905865b.jpeg/v1/w_1116,h_0/img_6984.webp"
        ]
      },
      {
        name: "Spirit Speed Date 1° edition",
        images: [
          "https://globaluserfiles.com/media/189053_22d0d2a53310a84d9b43a723bd5cf96e9afe53dc.jpeg/v1/w_1730,h_0/20231011_193350.webp",
          "https://globaluserfiles.com/media/189053_e9e3e1cb6695bd135ab78b2e1dd06e7893a43820.jpeg/v1/w_1116,h_0/20231011_205244.webp",
          "https://globaluserfiles.com/media/189053_621ed4f9af06fff1aeacb3a783d463d29905865b.jpeg/v1/w_1116,h_0/img_6984.webp"
        ]
      },
      {
          name: "Spirit Speed Date 1° edition",
          images: [
            "https://globaluserfiles.com/media/189053_22d0d2a53310a84d9b43a723bd5cf96e9afe53dc.jpeg/v1/w_1730,h_0/20231011_193350.webp",
            "https://globaluserfiles.com/media/189053_e9e3e1cb6695bd135ab78b2e1dd06e7893a43820.jpeg/v1/w_1116,h_0/20231011_205244.webp",
            "https://globaluserfiles.com/media/189053_621ed4f9af06fff1aeacb3a783d463d29905865b.jpeg/v1/w_1116,h_0/img_6984.webp"
          ]
        },
        {
          name: "Spirit Speed Date 1° edition",
          images: [
            "https://globaluserfiles.com/media/189053_22d0d2a53310a84d9b43a723bd5cf96e9afe53dc.jpeg/v1/w_1730,h_0/20231011_193350.webp",
            "https://globaluserfiles.com/media/189053_e9e3e1cb6695bd135ab78b2e1dd06e7893a43820.jpeg/v1/w_1116,h_0/20231011_205244.webp",
            "https://globaluserfiles.com/media/189053_621ed4f9af06fff1aeacb3a783d463d29905865b.jpeg/v1/w_1116,h_0/img_6984.webp"
          ]
        },
  ];

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % 3); 
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container>
      <Row>
        <h1 className='text-center'>Eventi</h1>
        {events.map((event, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className='mb-3'>
      <div className='event-card' onClick={() => handleEventClick(event)} style={{minHeight: '100px'}}>
              <div className='event-overlay'>
                <h5>{event.name}</h5>
              </div>
              <img src={event.images[counter]} alt={event.name} className='img-fluid' />
            </div>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedEvent && selectedEvent.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedEvent && selectedEvent.images.map((image, index) => (
            <img key={index} src={image} alt={`Event ${index + 1}`} className='img-fluid mb-3' />
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Events;

