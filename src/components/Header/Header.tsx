import React from "react";
import "./Header.css";
import { FaShopify } from "react-icons/fa";
import { CartButton } from "../CartButton/CartButton.tsx";
import { useCart } from "../../context/cartContext.jsx";

export function Header() {
  const { showCart } = useCart();
  return (
    <header className="App-header">
      <span className="titleHeader">
        Super Shop <FaShopify />
      </span>
      {!showCart && <CartButton />}
    </header>
  );
}
