import React, { createContext, useState, useContext } from "react";

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // Check if the item is already in the cart
    const itemInCart = cart.find((item) => item.id === product.id);

    if (itemInCart) {
      // If item exists in cart, update its quantity
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      // If item is not in cart, add it with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeCartItem = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const updateCartItemQuantity = (productId, newQuantity) => {
    setCart(prevCart => prevCart.map(item =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    ));
  };

  return (
    <ProductContext.Provider
      value={{ products, setProducts, cart, addToCart, removeCartItem, updateCartItemQuantity }}
    >
      {children}
    </ProductContext.Provider>
  );
};
