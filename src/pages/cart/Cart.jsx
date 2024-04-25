import React from "react";
import "./cart.css";
import { useProductContext } from "../../context/ProductsContext";
import { Link } from 'react-router-dom';


const Cart = () => {
  const { cart, removeCartItem, updateCartItemQuantity } = useProductContext();

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity > 0) {
      updateCartItemQuantity(itemId, newQuantity);
    } else {
      removeCartItem(itemId);
    }
  };

  return (
    <div className="cart-container">
      <div style={{ textAlign: "center" }}>
        <h2>Cart</h2>
      </div>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
        
        
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <div>
                  <img src={item.image} alt={item.name} />
                  <div>
                    <p>{item.name}</p>
                    <p>Price: ${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                    <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                    <button onClick={() => removeCartItem(item.id)}>Remove</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-buttons">
           
             <Link to="/laptops">
              <button className="continue-shopping">Continue Shopping</button>
              </Link> 

              <Link to="/checkout">
              <button className="checkout">Checkout</button>
              </Link>
          
            
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
