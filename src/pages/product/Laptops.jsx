import React from "react";
import Product from "./Product";
import { Link } from "react-router-dom";
import "./product.css";
import productData from '../../../productData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { useProductContext } from '../../context/ProductsContext'; // Importing the context hook

export default function Laptops() {
  const products = productData;
  const { cart } = useProductContext(); // Using the context hook to access cart state

  // Calculate the total number of items in the cart
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <div style={{ marginTop: '5rem', marginBottom: '5rem', textAlign: "center" }}>
        <h1 style={{ color: "#6E8DCF",fontSize:'3rem',marginTop:'4rem' }}>LAPTOPS</h1>
        <Link to="/cart" className="cart-icon" style={{ textDecoration: 'none' }}>
        <FontAwesomeIcon icon={faShoppingBag} />
        {cartItemCount > 0 && (
         <span className="cart-count" style={{ textDecoration: 'none', marginLeft: '0.2rem'}}>
         {cartItemCount}
        </span>
       )}
</Link>

      </div>
      <div className="product-container">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
