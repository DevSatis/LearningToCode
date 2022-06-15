import React, { useState } from "react";
import ExpenseFrom from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isShown, setIsShown] = useState(false);

  const onClickHandler = (event) => {
    setIsShown((current) => !current);
  };
  const stopEditingHandler = () => {
    setIsShown(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
        setIsShown(false);
  };

  return (
    <div className="new-expense">
      <div>
        {!isShown && <button onClick={onClickHandler}>Add New Expense</button>}
        {isShown && (
          <ExpenseFrom
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={stopEditingHandler}
          />
        )}
      </div>
    </div>
  );
};

export default NewExpense;
