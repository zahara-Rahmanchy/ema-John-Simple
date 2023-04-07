import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Products.css";
const Products = (props) => {
  //   console.log(props);
  //   destructuring
  const { img, name, seller, quantity, price } = props.product;

  //   receiving the function handleAddtoCart from shop which was passed inside  Product component
  const handleAddToCart = props.handleAddToCart;
  //   console.log(img);
  return (
    <div className="product">
      <img src={img} />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p>Price: ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Ratings: {quantity} stars</p>
      </div>

      <button
        className="btn-cart"
        onClick={() => handleAddToCart(props.product)}
      >
        Add to Cart <FontAwesomeIcon icon={faCartShopping} beat />
      </button>
    </div>
  );
};

export default Products;
