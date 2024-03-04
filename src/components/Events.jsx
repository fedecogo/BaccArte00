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
        name: "Spirit Speed Date 2° edition Turnè",
        images: [      
          "https://globaluserfiles.com/media/189053_ff5be9b3818203917f5e2529d57be4891d02624c.jpeg/v1/w_1116,h_0/20231011_192453.webp",
          "https://globaluserfiles.com/media/189053_15153fc2487a2931033a120bbcdaf895a5a43721.jpeg/v1/w_1116,h_0/img_6730.webp",
          "https://globaluserfiles.com/media/189053_d584d16f0aa329a53f00f990c6ddf18e9722e2e0.jpeg/v1/w_1116,h_0/20231011_192554.webp"
    
        ]
      },
      {
        name: "Crowdfounding Closing Night Ballard & Fant",
        images: [
          "https://globaluserfiles.com/media/189053_c7087d04de584e95f5a0e8f3295dfbe8a660661c.jpeg/v1/w_1070,h_0/20230605_215858.webp",
          "https://globaluserfiles.com/media/189053_b046cc3cf7118829793f6f999d22f1ac08f9f8ac.jpeg/v1/w_853,h_0/20230605_204957.webp",
          "https://globaluserfiles.com/media/189053_f2abb49a5bb8e41a60700eb95db1d8a60bd8d16e.jpeg/v1/w_853,h_0/20230605_215737.webp"
        ]
      },
      {
        name: "Roma Bar Show 2023 Palazzo dei congressi",
        images: [
        "https://globaluserfiles.com/media/189053_989aa02727417070cd337a38a93645052b075de4.jpeg/v1/w_1009,h_0/img_20230529_144823_391.webp",
        "https://globaluserfiles.com/media/189053_36e6652822614f9ff147630a95c50d988937ac44.jpeg/v1/w_1009,h_0/img_20230529_144127_653.webp",
        "https://globaluserfiles.com/media/189053_14e21711c547d665e928ba899672493273dce064.webp/v1/w_1009,h_0/img_20230603_180744_193.webp",
        "https://globaluserfiles.com/media/189053_b69d0936fcc494a5861903c7cef6fde1fccbff5d.webp/v1/w_1009,h_0/img_20230603_180744_120.webp"
        ]
      },
      {
          name: "TASTE night Clayton",
          images: [
            "https://globaluserfiles.com/media/189053_a5e5dc22a0f0b76ec2fd1d0151bfec74cd4f2fea.jpeg/v1/w_1009,h_0/20221217_200547.webp",
            "https://globaluserfiles.com/media/189053_52284dd3e671e8c30992ef78906d8319ebeecabf.jpeg/v1/w_1009,h_0/20221217_185758.webp",
            "https://globaluserfiles.com/media/189053_eb7a5012657e8737f7a95b8cb1a164f3f19780aa.jpeg/v1/w_1009,h_0/20221217_225212.webp"
       
          ]
        },
        {
            name: "SHAKE'N Art preview ART MALL",
            images: [
              "https://globaluserfiles.com/media/189053_d4ece1d9033a86a11a8fdb8ce09bfa3467034b5c.jpeg/v1/w_1009,h_0/20221212_004959.webp",
              "https://globaluserfiles.com/media/189053_d56bb12cadf087d1b440aff7df4dc1764a0a8ecb.jpeg/v1/w_1009,h_0/20221211_203958.webp",
              "https://globaluserfiles.com/media/189053_98fdf6593b28b9f3a5d873f4cbb8cb8ff0a4d8df.jpeg/v1/w_1009,h_0/20221211_195826.webp",
              "https://globaluserfiles.com/media/189053_71450569c8290d39d318d6266a13032b8f60eb36.jpeg/v1/w_1009,h_0/20221211_190524.webp"
            ]
          },
          {
            name: "Gin & Tonic Festival 2022 Spazio Fase",
            images: [
              `https://globaluserfiles.com/media/189053_82bd00e70bd28d38725ce0291fcb49754f3a9ed4.jpeg/v1/w_1009,h_0/whatsapp%20image%202022-07-10%20at%2000.37.24%20(2).webp`,
              "https://globaluserfiles.com/media/189053_35770b00ec8a7bf20a5bf7ec99bf61ff4281a81b.jpeg/v1/w_1009,h_0/whatsapp%20image%202022-07-10%20at%2000.37.22%20(2).webp",
              "https://globaluserfiles.com/media/189053_89cd43a41a513b4176cdc116576925fd210ce9ff.jpeg/v1/w_1009,h_0/whatsapp%20image%202022-07-10%20at%2000.37.21%20(1).webp"
             
            ]
          },
          {
            name: "TASTE Night GERICO",
            images: [
              "https://globaluserfiles.com/media/189053_4e9d9478786069f5b1968525dd4f06ed7a0c5819.jpeg/v1/w_1009,h_0/whatsapp%20image%202022-06-17%20at%2022.48.55.webp",
              "https://globaluserfiles.com/media/189053_7a035e52bc203d51635baba82b90540334d620dd.jpeg/v1/w_1009,h_0/whatsapp%20image%202022-06-17%20at%2022.31.44.webp",
              "https://globaluserfiles.com/media/189053_13af36365a19cb85c68ca286fe39b852b52204c2.jpeg/v1/w_1009,h_0/whatsapp%20image%202022-06-17%20at%2022.48.58%20(1).webp"
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
       
<div className='event-card' onClick={() => handleEventClick(event)} style={{minHeight: '500px', backgroundImage: `url(${event.images[counter]})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
  <div className='event-overlay'>
    <h5>{event.name}</h5>
  </div>
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

