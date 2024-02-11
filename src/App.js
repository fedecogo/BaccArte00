import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
// import BaccaStore from './components/BaccaStore'
import Cart from './components/Cart'
import Footer from './components/Footer'
import Login from './components/Login'
import NavBar from './components/NavBar'


const App = () => (
 
  <BrowserRouter>
     <NavBar/>
    <Container>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login/>}  />
      </Routes>
    </Container>
    <Footer/>
  </BrowserRouter>
 
)

export default App;
