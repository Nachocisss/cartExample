import React from "react";
import { useCart } from "../../context/cartContext.jsx";
import { FaShoppingCart } from "react-icons/fa";
import "./Cart.css";
import { CartButton } from "../CartButton/CartButton.tsx";
export default function Cart() {
  const { showCart, cart } = useCart();
  return (
    <>
      {showCart && (
        <div className="cartContainer">
          <CartButton />
          <FaShoppingCart />
          <ul>
            {cart.map((p) => {
              return (
                <li key={p.id}>
                  {p.title}- {p.quantity}{" "}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
