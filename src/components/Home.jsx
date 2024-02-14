import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';

function Example() {
  const [isLegalAge, setIsLegalAge] = useState(false);
  const [smShow, setSmShow] = useState(true);
  const isUserLoggedIn = useSelector((state) => state.user.loggedIn);
 
  const avoidModalIfLogged = () => {
    if(isUserLoggedIn){
      setIsLegalAge(true);
      setSmShow(false);
    }
  };
  
  useEffect(avoidModalIfLogged, [isUserLoggedIn]);

  const handleConfirmLegalAge = () => {
    setIsLegalAge(true);
    setSmShow(false);
  };
  return (
    <>
      {!isLegalAge && (
        <>
          <div className="blur-background"></div> 
          <Modal
            size="md" 
            show={smShow}
            onHide={() => setSmShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
            centered 
            closeButton={false}
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                Confirm Age
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you 18 years old or older?
              <Button onClick={handleConfirmLegalAge} className="ms-2">
                Yes
              </Button>
              <Button onClick={() => window.location.href = 'https://www.google.com'} className="ms-2">No</Button>
            </Modal.Body>
          </Modal>
        </>
      )}
        <h1>Welcome to Bacca Spirits</h1>
        <p>Discover the finest selection of gin</p>
    </>
  );
}

export default Example;
