import React from "react";
import Product from "./Product";
import { Link } from "react-router-dom";
import "./product.css";
import productData from '../../../productData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';





export default function Laptops() {


  const products = productData;

  
  return (
    <>
    
     <div style={{marginTop:'5rem', marginBottom:'5rem',textAlign: "center"}}>
     <h2 style={{ color: "#6E8DCF"}} > LAPTOPS</h2>

     <Link to="/cart" className="cart-icon">
          <FontAwesomeIcon icon={faShoppingBag} />
        </Link>
     </div>

     
    
      <div className="product-container">
        {products.map((product) => (
           
               <Product key={product.id} product={product} />
           
         
        ))}
      </div>
      <div/>
    </>
  );
}
