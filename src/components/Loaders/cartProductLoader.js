import React from "react";
import { getShoppingCart } from "../../utilities/fakedb";

const cartProductLoader = async () => {
  const loadedProducts = await fetch("products.json");
  const products = await loadedProducts.json();

  const storedCart = getShoppingCart();

  const savedCart = [];
  for (const id in storedCart) {
    console.log(id);
    // checking if the product in cart matches the product id if it does then push the add the quantity and push
    // to new array
    const addedProduct = products.find((pd) => pd.id === id);
    if (addedProduct) {
      const quantity = storedCart[id];
      addedProduct.quantity = quantity;

      savedCart.push(addedProduct);
    }
  }
  console.log("savedCart", savedCart);
  return savedCart;
};

export default cartProductLoader;
