import React, { createContext, useState, useContext, useEffect } from "react";

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
 const [products, setProducts] = useState([]);
 const [cart, setCart] = useState(() => {
    // Load cart from sessionStorage when initializing state
    const savedCart = sessionStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
 });

 useEffect(() => {
    // Save cart to sessionStorage whenever it changes
    sessionStorage.setItem('cart', JSON.stringify(cart));
 }, [cart]);

 const addToCart = (product) => {
    const itemInCart = cart.find((item) => item.id === product.id);

    if (itemInCart) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
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
