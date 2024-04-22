
import React from "react";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Product = ({ product }) => {
  
  return (

    <>

<div style={{marginBottom:'2rem'}} className="square-container product">
      <img src={product.image} alt={product.name} />
      
    </div>

<div className="product-info">
<p>{product.title}</p>
<h3 style={{fontSize:'1rem'}}>${product.price}</h3>
<button >
  <FontAwesomeIcon icon={faShoppingCart} size="xs" /> +

</button>

</div>
    
    </>
    
  );
};

export default Product;
