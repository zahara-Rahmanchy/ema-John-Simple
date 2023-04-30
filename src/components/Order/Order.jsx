import React, {useState} from "react";
import Cart from "../Cart/Cart";
import "./Order.css";
import {Link, useLoaderData} from "react-router-dom";

import ReviewItem from "../ReviewItem/ReviewItem";
import {deleteShoppingCart, removeFromDb} from "../../utilities/fakedb";
const Order = () => {
  const savedCart = useLoaderData();
  // to delete items from cart
  const [cart, setCart] = useState(savedCart);

  const handleRemoveFromCart = id => {
    // console.log(id);
    const remaining = cart.filter(product => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop-container">
      {/* Total order: {product.length} */}
      <div className="reviewContainer">
        {savedCart.map(pd => (
          <ReviewItem
            key={pd.id}
            product={pd}
            handleRemoveFromCart={handleRemoveFromCart}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <Link to="/checkout"> Proceed to Checkout</Link>
        </Cart>
      </div>
    </div>
  );
};

export default Order;
