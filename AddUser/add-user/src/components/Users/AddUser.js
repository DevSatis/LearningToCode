import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();


  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUAge = ageInputRef.current.value;
    if (
      enteredName.trim().length === 0 ||
      enteredUAge.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age(non-empty values).",
      });
      return;
    }
    if (+enteredUAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age(>0).",
      });
      return;
    }
    props.onAddUsers(enteredName, enteredUAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value='';
   
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            id="username"
            type="text"
            ref = {nameInputRef}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
