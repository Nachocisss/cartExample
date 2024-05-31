import React from "react";
import { useCart } from "../context/cartContext.jsx";
import "./ProductCard.css";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { FaStar } from "react-icons/fa";

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
      <div className="cardContent">
        <span className="title">{product.title}</span>
        <span className="rating">
          {product.rating.rate} <FaStar color="gold" />
        </span>
        <div className="descriptionContent">
          <span className="description"> {product.description}</span>
        </div>
        <span className="price">{product.price}$</span>
        <div className="cardBottom">
          <button className="button" onClick={() => addToCart(product)}>
            <IoMdAdd size={17} />
          </button>
          {inCart && (
            <>
              <span>In cart: {inCart.quantity}</span>
              <button
                className="button"
                onClick={() => deleteFromCart(product)}
              >
                <MdDelete size={17} />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
