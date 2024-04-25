
import React from "react";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { useProductContext } from "../../context/ProductsContext";


const Product = ({ product }) => {

  const { addToCart } = useProductContext(); 

  const handleAddToCart = () => {
    addToCart(product); // Add the product to the cart
  };
  
  return (

    <>


    <Link to={`/product/${product.id}` }  style={{ textDecoration: 'none', color: 'inherit' }}>

   <div className="square-container product">
      <img src={product.image} alt={product.name} />
 
    </div>
    </Link>
<div className="product-info">
<p>{product.title}</p>
<h3 style={{fontSize:'1rem'}}>${product.price}</h3>
<button onClick={handleAddToCart}>
          <FontAwesomeIcon icon={faShoppingCart} size="xs" /> +
        </button>
</div>
    
    </>
    
  );
};

export default Product;
