import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../context/cartContext";

export function CartButton() {
  const { toggleCart } = useCart();
  return (
    <button className="cartIconContainer" onClick={toggleCart}>
      <FaShoppingCart size={25} fill="white" />
    </button>
  );
}
