import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './product.css';
import productData from '../../../productData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";



// Mock data source
const products = productData;

const getProductById = (id) => {
 return products.find(product => product.id === parseInt(id));
};

const ProductDetail = () => {
 const { id } = useParams();
 const product = getProductById(id);
 const [selectedRam, setSelectedRam] = useState('8gb'); // Default to 8GB
 const [totalPrice, setTotalPrice] = useState(parseInt(product.price.replace(/,/g, ''), 10)); // Initialize with base price

 const handleRamChange = (event) => {
    const ramOption = event.target.value;
    setSelectedRam(ramOption);
    let ramPrice = 0; // Initialize RAM price to 0
    if (ramOption === '8gb') {
        ramPrice = 600; // Set price for 8GB RAM
    } else if (ramOption === '16gb') {
        ramPrice = 1200; // Set price for 16GB RAM
    }
    // Remove commas from the price string and parse it as an integer
    const basePrice = parseInt(product.price.replace(/,/g, ''), 10);
    const totalPrice = basePrice + ramPrice; // Calculate total price
    setTotalPrice(totalPrice); // Update the total price in the state
 };

 return (
    <div className="container mt-5 pt-5">
       <Link to="/cart" className="cart-icon">
          <FontAwesomeIcon icon={faShoppingBag} />
        </Link>
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.title} className="img-fluid" />
        </div>
        <div className="col-md-6 product-detail-content" >
          <h2>{product.title}</h2>
          <h3>R{totalPrice.toLocaleString()}</h3> {/* Display the updated total price with commas */}
          <h4>Specs</h4>
          <ul className="list-unstyled">
            {product.specs.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
          <div className="ram-select-container">
             <label htmlFor="ram">Select RAM:</label>
            <select id="ram" name="ram" value={selectedRam} onChange={handleRamChange}>
            <option value="8gb">8GB - R600</option>
            <option value="16gb">16GB - R1200</option>
            </select>
             <button className="">Add to Cart</button>
            </div>

        </div>
      </div>
    </div>
 );
};

export default ProductDetail;
