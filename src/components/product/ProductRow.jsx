import React from 'react';
import { Link } from 'react-router-dom';
const ProductRow = ({ products }) => {
    return (
        <div className="row">
            {products.map((product, index) => (
                <div className="col-md-6 mb-3" key={index}>
                    <Link to={`/product/${product.id}` }  style={{ textDecoration: 'none', color: 'inherit' }} >
                    <div className="square-container">
                        <img src={product.image} className="card-img-top" alt={product.title} />
                    </div>
                    
                    </Link>

                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductRow;
