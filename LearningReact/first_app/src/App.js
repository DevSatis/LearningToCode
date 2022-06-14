import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const DummyData = [
  { 
    title: "Car Servicing", 
    amount: 500, 
    date: new Date(2020, 2, 20)
   },
  { 
    title: "Car Insurance", 
    amount: 275, 
    date: new Date(2022, 12, 16) 
  },
  { 
    title: "Grocery Items",
    amount: 100, 
    date: new Date(2021, 3, 24) 
  },
  { 
    title: "Books", 
    amount: 350, 
    date: new Date(2019, 5, 14) 
  },
];


const App = () => {
  const [expenses, setExpenses] = useState(DummyData);
 
  
  const addExpenseHandler = (expense) =>{
    setExpenses( (prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  }

  return (
    <div className="App">
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses items = {expenses} />

    </div>
  );
}

export default App;
