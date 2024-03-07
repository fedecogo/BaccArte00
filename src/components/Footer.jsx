import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaWhatsapp, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='footerCs text-center bg-dark text-white py-5'>
      <Container>
        <Row className='mb-4'>
          <Col>
            <a href='https://www.instagram.com/baccaspirits/' target='_blank' rel='noopener noreferrer' className='text-white me-3'>
              <FaInstagram />
            </a>
            <a href='https://api.whatsapp.com/send?phone=393476858947' target='_blank' rel='noopener noreferrer' className='text-white me-3'>
              <FaWhatsapp />
            </a>
            <a href='#!' target='_blank' rel='noopener noreferrer' className='text-white me-3'>
              <FaFacebookF />
            </a>
            <a href='#!' target='_blank' rel='noopener noreferrer' className='text-white me-3'>
              <FaTwitter />
            </a>
          </Col>
        </Row>

        {/* <Row className='mb-4'>
          <Col>
            <p className='text-uppercase mb-4'>Sign up for our newsletter</p>
            <form>
              <div className='input-group mb-3'>
                <input type='email' className='form-control' placeholder='Email address' />
                <button className='btn btn-outline-light' type='submit'>Subscribe</button>
              </div>
            </form>
          </Col>
        </Row> */}

        <Row className='mb-4'>
          <Col>
            <ul className='list-unstyled'>
              <li><Link to='/' className='text-white'>Home</Link></li>
              <li><Link to='/FAQs' className='text-white'>FAQs</Link></li>
              <li><Link to='/privacy-policy' className='text-white'>Privacy Policy</Link></li>
              <li><Link to='/terms-and-conditions' className='text-white'>Terms & Conditions</Link></li>
              <li><Link to='/cookie-policy' className='text-white'>Cookie Policy</Link></li>
            </ul>
          </Col>
        </Row>
      </Container>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © Copyright. All Rights reserved by Serendipity sas di Lorenzo Vasilotta & C. - P.iva 12222480969 - sede legale Via Prato 12, 20152 Milano - iscrizione REA n.2647854
      </div>
    </footer>
  );
}
