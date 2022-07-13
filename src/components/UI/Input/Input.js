import React, { useRef, useImperativeHandle } from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef(
  ({ isValid, label, id, type, value, onChange, onBlur }, ref) => {
    const inputRef = useRef();

    // useEffect(() => {
    //   // 컴포넌트가 렌더링된 이후에 useEffect 함수가 실행되므로 inputRef에 객체가 할당되어있음.
    //   inputRef.current.focus();
    // }, []);

    const activate = () => {
      inputRef.current.focus();
    };

    useImperativeHandle(ref, () => {
      return {
        activate,
      };
    });

    return (
      <div
        className={`${classes.control} ${
          isValid === false ? classes.invalid : ""
        }`}
      >
        <label htmlFor={id}>{label}</label>
        <input
          ref={inputRef}
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    );
  }
);

export default Input;
