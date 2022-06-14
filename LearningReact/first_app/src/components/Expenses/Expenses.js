import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2019");
  

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear;

  });

  let expensesContent = <p>No Expenses Found!</p>;
  if(filteredExpenses.length > 0){
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
      ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear} onChangeFilter={filterChangeHandler} 
        
      />
      {expensesContent}
      {/* {filteredExpenses.length === 0 ? (<p>No expenses Found!</p>)
      :(filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
        ))
      )} */}
    
    </Card>
  );
};

export default Expenses;
