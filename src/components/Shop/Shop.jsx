import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
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
    // const newCart = [...cart, product];

    // if product doesn;t exist then add quantity, if it does then update by 1
    let newCart = [];
    const exists = cart.find((pd) => pd.id === product.id);

    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter((pro) => pro.id !== product.id);
      newCart = [...remaining, exists];
    }
    setCart(newCart);
    addToDb(product.id);
  };

  useEffect(() => {
    console.log("products array from useState", products);
    const savedCart = [];
    const storedCart = getShoppingCart();
    // console.log(storedCart);
    // step`1 get id of product from stored cart
    for (const id in storedCart) {
      console.log("id", id);
      //step 2 get product using id
      const addedProduct = products.find((product) => product.id === id);
      console.log("before adding:", addedProduct);
      // step 3: get quantity
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        // step4 added the addedProduct to savedcart
        savedCart.push(addedProduct);
      }
      console.log("after adding:", addedProduct);
    }
    // step5
    setCart(savedCart);
  }, [products]);
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
