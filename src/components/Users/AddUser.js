import React, { useRef, useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const usernameByRef = nameInputRef.current.value; // 원래는 DOM을 직접 건드리지는 않지만, 읽어오는 건 상관없음.
    const ageByRef = ageInputRef.current.value;
    if (usernameByRef.trim().length === 0 || ageByRef.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+ageByRef < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(usernameByRef, ageByRef);
    nameInputRef.current.value = ""; // 원래는 DOM 조작을 직접하면 안되지만, 사용자의 입력값을 초기화하는 경우는 해도됨 (useRef 사용시 필요)
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input ref={nameInputRef} id="username" type="text" />
          <label htmlFor="age">Age (Years)</label>
          <input ref={ageInputRef} id="age" type="number" />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
