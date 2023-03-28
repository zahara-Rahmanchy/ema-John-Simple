import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //   add to cart function
  const handleAddToCart = (product) => {
    console.log(product);
    // first copy the old cart using ...cart and then add the new product
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((pro) => (
          <Products
            key={pro.id}
            product={pro}
            handleAddToCart={handleAddToCart}
          ></Products>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
