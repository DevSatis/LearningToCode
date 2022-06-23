import React, { useState } from "react";
import './UserForm.css'

const UserForm = (props) => {

    const [enteredValue, setEneteredValue] = useState("");
    const [enteredAge, setEneteredAge] = useState("");


    const getEnteredValue = event =>{
        console.log(event.target.value);
        let setNameValue = setEneteredValue(event.target.value);
    }

    const ageChangeHandler = event => {
        console.log(event.target.value);
        setEneteredAge(event.target.value);
    }
    const submitHandler = () =>{
        if(setNameValue===""){
            arelt("Enter the User Name")
        }
    }

  return (
    <form className="user-form" onSubmit={submitHandler}>
      <div className="user-details">
        <div>
          <label> Name </label>
          <input 
          type="text" placeholder="Enter the user name" 
          value={enteredValue}
          onChange={getEnteredValue}
          />
        </div>
        <div>
          <label> Age </label>
          <input 
          type="number" placeholder="Enter the user Age" 
          value={enteredAge}
          onChange={ageChangeHandler}
          />
        </div>
      </div>
      <button type="submit" className="form-btn">Add User</button>
    </form>
  );
};

export default UserForm;
