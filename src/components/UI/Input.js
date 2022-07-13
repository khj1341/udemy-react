import React from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef(({ label, input }, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input id={input.id} ref={ref} {...input} />
    </div>
  );
});

export default Input;
