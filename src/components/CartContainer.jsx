import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItemCard from "./CartItemCard";
import Price from "./Price";
import { openModal } from "../features/modal/ModalSlice";

const CartContainer = () => {
  const { amount, total ,cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);

//   console.log(cartItems);
  const dispatch = useDispatch();

  const handleClearCart = () => {
     
    dispatch(openModal());
  };

  

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart">is Currently Empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
      </header>
      <div>
        {cartItems?.map((item) => {
          return <CartItemCard key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>$ {total.toFixed(2)}</span>
          </h4>
        </div>
        <button onClick={handleClearCart} className="btn clear-btn">
          Clear Cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
