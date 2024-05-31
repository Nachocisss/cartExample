import React, { createContext, useContext, useState } from "react";

const initialCart = [];
const initialValues = {
  cart: initialCart,
  addToCart: (product) => {},
  deleteFromCart: (product) => {},
  showCart: false,
  toggleCart: ()=>{}
};

const CartContext = createContext(initialValues);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(initialCart);
  const [showCart, setShowCart] = useState(false)

  function addToCart(product) {
    const productInCartIndex = cart.findIndex((p) => p.id === product.id);
    if (productInCartIndex === -1) {
      setCart((prev) => [...prev, { ...product, quantity: 1 }]);
    } else {
      setCart((prev) => [
        ...prev.slice(0, productInCartIndex),
        {
          ...prev[productInCartIndex],
          quantity: prev[productInCartIndex].quantity + 1,
        },
        ...prev.slice(productInCartIndex + 1),
      ]);
    }
  }

  function deleteFromCart(product) {
    setCart(cart.filter((p) => p.id !== product.id));
  }

  function toggleCart(){
    setShowCart(prev => !prev)
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, deleteFromCart,showCart,toggleCart }}>
      {children}
    </CartContext.Provider>
  );
}
export function useCart() {
  return useContext(CartContext);
}
