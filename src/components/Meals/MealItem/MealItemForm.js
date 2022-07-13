import React, { useRef, useState } from "react";

import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = ({ id, onAddToCart }) => {
  const amountInputRef = useRef();
  const [isValidAmount, setIsValidAmount] = useState(true);
  const input = {
    id: `amount_${id}`,
    type: "number",
    min: "1",
    max: "5",
    step: "1",
    defaultValue: "1",
  };

  const validateAmount = (amount, amountNumber) => {
    return amount.trim().length === 0 || amountNumber < 1 || amountNumber > 5;
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    const isValid = validateAmount(enteredAmount, enteredAmountNumber);

    if (isValid) {
      return setIsValidAmount(false);
    }
    onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input label="Amount" input={input} ref={amountInputRef} />
      <button>+ Add</button>
      {!isValidAmount && <p>Please enter a valid amount (1~5)</p>}
    </form>
  );
};

export default MealItemForm;
