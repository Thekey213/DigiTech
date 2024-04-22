import React from "react";
import Product from "./Product";
import { Link } from "react-router-dom";
import "./product.css";
import firstImage from '../../assets/images/1.jpg'
import secondImage from '../../assets/images/2.jpg'
import thirdImage from '../../assets/images/3.jpg'
import fourthImage from '../../assets/images/4.jpg'




export default function Laptops() {


  const products = [
    { id: 1, image: firstImage, title: 'HP', price: '200' },
    { id: 2, image: secondImage, title: 'Lenovo', price: '300' },
    { id: 3, image: thirdImage, title: 'Acer', price: '550' },
    { id: 4, image: fourthImage, title: 'Lenovo', price: '500' },
    { id: 5, image: firstImage, title: 'HP', price: '200' },
    { id: 6, image: secondImage, title: 'Lenovo', price: '300' },
    { id: 7, image: thirdImage, title: 'Acer', price: '550' },
    { id: 8, image: fourthImage, title: 'Lenovo', price: '500' },
    // Add more products as needed
];
    
  return (
    <>
    
     <div style={{marginTop:'5rem', marginBottom:'5rem',textAlign: "center"}}>
     <h2 style={{ color: "6E8DCF"}} >Shop</h2>
     </div>

     
    
      <div className="product-container">
        {products.map((product) => (
            <Link key={product.id} to={`/product/${product.id}` }  style={{ textDecoration: 'none', color: 'inherit', display: 'inline-block' }}>
               <Product key={product.id} product={product} />
            </Link>
         
        ))}
      </div>
      <div/>
    </>
  );
}
