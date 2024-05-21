import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { useProductContext } from "../../context/ProductsContext";
import './product.css';
import products from '../../../productData'; // Assuming this is the correct path to your products array
import { Link } from "react-router-dom";

const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const { addToCart, cart } = useProductContext(); // Using the context hook to access addToCart function and cart state
  const [selectedRam, setSelectedRam] = useState(product.Memory); // Default to product's Memory
  const [totalPrice, setTotalPrice] = useState(parseInt(product.price.replace(/,/g, ''), 10)); // Initialize with base price

  const handleRamChange = (event) => {
    const ramOption = event.target.value;
    setSelectedRam(ramOption);
    let ramPrice = 0; // Initialize RAM price to 0
    if (ramOption === '8' && product.Memory === '4' ) {
      ramPrice = 600; // Set price for 8GB RAM
    }  
    
    else if (ramOption === '8' && product.Memory === '8' ) {
      ramPrice = 0; // Set price for 16GB RAM
    } 

    else if (ramOption === '16' && product.Memory === '4' || product.Memory === '8') {
      ramPrice = 1200; // Set price for 16GB RAM
    } 
    // Remove commas from the price string and parse it as an integer
    const basePrice = parseInt(product.price.replace(/,/g, ''), 10);
    const totalPrice = basePrice + ramPrice; // Calculate total price
    setTotalPrice(totalPrice); // Update the total price in the state
  };

  const handleAddToCart = () => {
    const productWithRam = {...product, ram: selectedRam };
    addToCart(productWithRam); 
  };

  // Calculate the total number of items in the cart
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Function to render the appropriate <select> based on the selected RAM
  const renderRamSelect = () => {
    if (product.Memory === '4') {
      return (
        <select id="ram" name="ram" value={selectedRam} onChange={handleRamChange}>
          <option value="4">4GB</option>
          <option value="8">8GB</option>
          <option value="16">16GB</option>
        </select>
      );
    } else if (product.Memory === '8') {
      return (
        <select id="ram" name="ram" value={selectedRam} onChange={handleRamChange}>
          <option value="8">8GB</option>
          <option value="16">16GB</option>
        </select>
      );
      
    }  else if (product.Memory === '16') {
      return (
        <select id="ram" name="ram" value={selectedRam} onChange={handleRamChange}>
          <option value="16">16GB</option>
        </select>
      );
      
    }
   
    return null;
  };

  return (
    <div className="container mt-5 pt-5">
      <Link to="/cart" className="cart-icon" style={{ textDecoration: 'none' }}>
        <FontAwesomeIcon icon={faShoppingBag} />
        {cartItemCount > 0 && (
         <span className="cart-count" style={{ textDecoration: 'none', marginLeft: '0.2rem'}}>
         {cartItemCount}
        </span>
       )}
      </Link>
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.title} className="img-fluid" />
        </div>
        <div className="col-md-6 product-detail-content" >
          <h2>{product.title}</h2>
          <h3>R{totalPrice.toLocaleString()}</h3> 
          <h4>Specs</h4>
          <ul className="list-unstyled">
            <li>{product.OperatingSystem}</li>
            <li>{product.Display}</li>
            <li>{product.Memory}GB</li>
            <li>{product.Storage}</li>
            <li>{product.Processor}</li>
            <li>{product.Graphics}</li>
            <li>{product.Keyboard}</li>
            <li>{product.Audio}</li>
          </ul>
          <div className="ram-select-container">
            <label htmlFor="ram">Select RAM:</label>
            {renderRamSelect()}
            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
