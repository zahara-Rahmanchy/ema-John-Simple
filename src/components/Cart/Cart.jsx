import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  // option 3 {cart} inside the arrow function as param after detructuring
  //   const cart = props.cart; option 1
  // const {cart} = props option 2
  console.log(cart);
  //   total price
  let total = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    total = total + product.price;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  // 7%
  const tax = (total * 7) / 100;

  const grandTotal = total + totalShipping + tax;
  return (
    <div className="cart">
      <h4>Order Summary </h4>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${total} </p>
      <p>Total Shipping Charge: ${totalShipping} </p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;
