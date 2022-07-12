import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = ({ onAddUser }) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+age < 0) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age(> 0)",
      });
      return;
    }
    onAddUser(username, age);
    setUsername("");
    setAge("");
  };

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const ageHandler = (e) => {
    setAge(e.target.value);
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
          <input
            id="username"
            type="text"
            value={username}
            onChange={usernameHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" value={age} onChange={ageHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
