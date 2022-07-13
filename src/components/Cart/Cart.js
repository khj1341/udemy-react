import React, { useContext } from "react";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = ({ onCloseCart }) => {
  const { items, totalAmount, addItem, removeItem } = useContext(CartContext);

  const amount = `$${totalAmount.toFixed(2)}`;
  const hasItem = items.length > 0;

  const cartItemAddHandler = (item) => {
    addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {items.map((item) => {
        return (
          <CartItem
            key={item.id}
            item={item}
            onAdd={() => cartItemAddHandler(item)}
            onRemove={() => cartItemRemoveHandler(item.id)}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal onCloseCart={onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{amount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={onCloseCart}>
          Close
        </button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
