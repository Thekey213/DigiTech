import React from 'react';
import Laptops from './pages/product/Laptops'; 
import ProductDetail from './pages/product/ProductDetail'; 
import Cart from './pages/cart/Cart';
import Home from './pages/home/Home';
import Checkout from './pages/cart/Checkout';
import AddProductForm from './pages/addproduct/AddProductForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; 

function App() {
 return (
    <Router basename="/DigiTech">
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/laptops" element={<Laptops />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/add" element={<AddProductForm />} />

        
      </Routes>
    </Router>
 );
}

export default App;
