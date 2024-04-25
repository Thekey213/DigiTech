import React from 'react';
import ProductRow from './ProductRow';
import './productrow.css';
import firstImage from '../../assets/images/1.jpg'
import secondImage from '../../assets/images/2.jpg'
import thirdImage from '../../assets/images/3.jpg'
import fourthImage from '../../assets/images/4.jpg'
import { Link } from 'react-router-dom';

const ProductHomeSection = () => {
    const products = [
        { image: firstImage, title: 'HP', price: 'R100' },
        { image: secondImage, title: 'Lenovo', price: 'R100' },
        { image: thirdImage, title: 'Acer', price: 'R100' },
        { image: fourthImage, title: 'Lenovo', price: 'R100' }
    ];

    const arrow =">";

    return (
        <div className="container producthome pad">
            <div className="row">
                <div className="col-md-6 ">
                    <h3 style={{ color: ' #6E8DCF' }}>SHOP OUR <br /> PRODUCTS</h3>
                    <p class="alibaba" style={{ fontSize: '21px', color: '#3C5B7D', fontWeight: 'bold' }}>View Our Laps</p>
                    <button className="product-btn">
                        <Link to='laptops'  style={{ textDecoration: 'none' }}>
                        SHOW ALL {arrow}
                        </Link>
                        
                        </button>
                </div>
                <div className="col-md-6 ">
                    <ProductRow products={products} />
                </div>
            </div>
        </div>
    );
};

export default ProductHomeSection;
