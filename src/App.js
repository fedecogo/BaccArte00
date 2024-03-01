import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import BaccaStore from './components/BaccaStore'
import Footer from './components/Footer'
import Login from './components/Login'
import NavBar from './components/NavBar'
import Register from './components/Register'
import MyProfile from './components/MyProfile'
import Home from './components/Home'
import NotFound from './components/NotFound'
import CreateCustomBottle from './components/CreateYourCustumBottle'
import ProductComponent from './components/ProductComponent'
import RedBerryGin from './components/products/RedBerryGin'
import ItalianBouquet from './components/products/ItalianBouquet'
import MyCart from './components/MyCart'
import ViperHaze from './components/artist/ViperHaze'
import Avvassena from'./components/artist/Avvassena'

const App = () => (
 
  <BrowserRouter>
     <NavBar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login/>}  />
        <Route path="/register" element={<Register/>} />
        <Route path="/profile" element={<MyProfile/>}/>
        <Route path='/products' element={<ProductComponent/>} />
        <Route path="/products/RedBerryGin" element={<RedBerryGin/>} />
        <Route path="/products/ItalianBouquet" element={<ItalianBouquet/>} />
        <Route path="/artist/ViperHaze" element={<ViperHaze/>} />
        <Route path="/artist/Avvassena" element={<Avvassena/>} />
        <Route path="/create-your-custom-bottle" element={<CreateCustomBottle />} />
        <Route path='/myCart' element={<MyCart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    <Footer/>
  </BrowserRouter>
 
)

export default App;
