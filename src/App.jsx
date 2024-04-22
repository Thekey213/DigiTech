import React from 'react';
import Laptops from './pages/product/Laptops'; // Ensure this path is correct
import ProductDetail from './pages/product/ProductDetail'; // Ensure this path is correct
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Ensure this path is correct

function App() {
 return (
    <Router basename="/DigiTech">
      <Routes>
        <Route path="/" element={<Laptops />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
 );
}

export default App;
