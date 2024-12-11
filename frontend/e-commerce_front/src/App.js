import './App.css';
import Navbar from './Components/NavBar/Navbar';
import { BrowserRouter as Router, Switch, Route, BrowserRouter, Routes } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import LoginSignup1 from './Pages/LoginSignup1';
import Footer1 from './Components/Footer1/Footer1';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women2.jpg';
import kid_banner from './Components/Assets/banner_kids.png';
import Profile from './Pages/Profile';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/women" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/login-here" element={<LoginSignup1 />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer1 />
      </BrowserRouter>
    </div>
  );
}

export default App;
