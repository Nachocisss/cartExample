import React from "react";
import { useCart } from "../context/cartContext.jsx";
import "./ProductCard.css";
import { IoMdAdd } from "react-icons/io";

export default function ProductCard({ product }) {
  const { cart, addToCart, deleteFromCart } = useCart();
  const inCart = cart.find((p) => p.id === product.id);

  return (
    <div className="productCard">
      <img
        className="productImage"
        src={product.image}
        alt={`image of product ${product.title}`}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <span>
          {product.title} - {product.price} - {product.rating.rate}
        </span>
        <span> {product.category}</span>
        <span> {product.description}</span>
        <button
          style={{ borderRadius: 99, height: 40, width: 40 }}
          onClick={() => addToCart(product)}
        >
          <IoMdAdd size={20} />
        </button>
        {inCart && (
          <button onClick={() => deleteFromCart(product)}>eliminar</button>
        )}
      </div>
    </div>
  );
}
