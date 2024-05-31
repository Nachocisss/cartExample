import React from "react";
import Cart from "../Cart.tsx";
import "./Header.css";
import { FaShopify } from "react-icons/fa";

export function Header() {
  return (
    <header className="App-header">
      <span className="titleHeader">
        Super Shop <FaShopify />
      </span>
      <Cart />
    </header>
  );
}
