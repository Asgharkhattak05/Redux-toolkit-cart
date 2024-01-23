import React from "react";
import { ChevronDown, ChevronUp } from "../icons";
import { useDispatch } from "react-redux";
import { DecAmount, IncAmount, removeSinglItem } from "../features/cart/cartSlice";
import cartItems from "../cartItems";

const CartItemCard = ({ ...item }) => {
  const { amount, price, img, title, id } = item;
  const { amounts } = cartItems;

  const dispatch = useDispatch();

  const handleRemove = (payload) => {
    dispatch(removeSinglItem(payload));
    // console.log(payload)
  };
  const handleIncrease = (payload) => {
    // console.log(payload);
    dispatch(IncAmount(payload));
  };
  const handleDecrease=(payload)=>{
    dispatch(DecAmount(payload))
  };

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={() => handleRemove(id)}>
          Remove
        </button>
      </div>
      <div>
        <button onClick={() => handleIncrease(id)} className="amount-btn">
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button onClick={()=>handleDecrease(id)} className="amount-btn">
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItemCard;
