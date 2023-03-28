import React from "react";

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
      <div className="product-info">
        <img src={img} />
        <h6 className="product-name">{name}</h6>
        <p>Price: ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Ratings: {quantity} stars</p>
      </div>

      <button
        className="btn-cart"
        onClick={() => handleAddToCart(props.product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Products;
