import "./Expenses.css";
import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";


const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2019");
  

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear;

  });

  
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear} onChangeFilter={filterChangeHandler} 
        
      />
      <ExpensesList items={filteredExpenses} />
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
