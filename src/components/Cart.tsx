import React from "react";
import { useCart } from "../context/cartContext.jsx";
import { FaShoppingCart } from "react-icons/fa";

export default function Cart() {
  const { cart } = useCart();

  return (
    <>
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
    </>
  );
}
