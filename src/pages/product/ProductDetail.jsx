import React from 'react';
import { useParams } from 'react-router-dom';

import firstImage from '../../assets/images/1.jpg'
import secondImage from '../../assets/images/2.jpg'
import thirdImage from '../../assets/images/3.jpg'
import fourthImage from '../../assets/images/4.jpg'

// Mock data source
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

const getProductById = (id) => {
 return products.find(product => product.id === parseInt(id));
};

const ProductDetail = () => {
 const { id } = useParams();
 const product = getProductById(id);

 return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <h3>Price: ${product.price}</h3>
      <button>Add to Cart</button>
    </div>
 );
};

export default ProductDetail;
