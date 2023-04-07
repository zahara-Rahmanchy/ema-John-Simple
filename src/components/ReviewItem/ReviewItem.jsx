import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

const ReviewItem = ({ product, handleRemoveFromCart }) => {
  const { id, img, name, price, quantity } = product;
  return (
    <div className="review-item">
      {/* <h2>ReviewItem </h2> */}
      <img src={img}></img>

      <div className="review-details">
        <p className="product-title">{name}</p>
        <p>
          Price: <span className="orange-text"> ${price}</span>
        </p>
        <p>
          Order Quantity: <span className="orange-text"> ${quantity}</span>
        </p>
      </div>

      <button className="btn-delete" onClick={() => handleRemoveFromCart(id)}>
        <FontAwesomeIcon icon={faTrashAlt} className="delete-icon" />
      </button>
    </div>
  );
};

export default ReviewItem;
