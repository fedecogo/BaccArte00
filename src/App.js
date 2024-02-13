import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
// import BaccaStore from './components/BaccaStore'
import Cart from './components/Cart'
import Footer from './components/Footer'
import Login from './components/Login'
import NavBar from './components/NavBar'
import Register from './components/Register'
import MyProfile from './components/MyProfile'
import Home from './components/Home'
import NotFound from './components/NotFound'
import CreateCustomBottle from './components/CreateYourCustumBottle'


const App = () => (
 
  <BrowserRouter>
     <NavBar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login/>}  />
        <Route path="/register" element={<Register/>} />
        <Route path="/profile" element={<MyProfile/>}/>
        <Route path="/create-your-custom-bottle" element={<CreateCustomBottle />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    <Footer/>
  </BrowserRouter>
 
)

export default App;
