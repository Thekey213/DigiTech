import React from 'react';
import ProductRow from './ProductRow';
import './productrow.css';
import { Link } from 'react-router-dom';
import productData from '../../../productData';

const ProductHomeSection = () => {
    const products = productData.slice(0, 4);

    const arrow =">";

    return (
        <div className="container producthome pad">
            <div className="row">
                <div className="col-md-6 fade-up-animation ">
                    <h3 style={{ color: ' #6E8DCF' }}>SHOP OUR <br /> PRODUCTS</h3>
                    <p className="alibaba" style={{ fontSize: '21px', color: '#3C5B7D', fontWeight: 'bold' }}>View Our Laps</p>
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
