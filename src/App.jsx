import React from 'react';
import Laptops from './pages/product/Laptops'; 
import ProductDetail from './pages/product/ProductDetail'; 
import Cart from './pages/cart/Cart';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; 

function App() {
 return (
    <Router basename="/DigiTech">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/laptops" element={<Laptops />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
 );
}

export default App;
