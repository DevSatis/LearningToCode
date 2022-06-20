import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const DummyData = [
  { 
    title: "Car Servicing", 
    amount: 500, 
    date: new Date(2020, 7, 20)
   },
  { 
    title: "Car Insurance", 
    amount: 275, 
    date: new Date(2022, 2, 16) 
  },
  { 
    title: "Grocery Items",
    amount: 100, 
    date: new Date(2021, 3, 24) 
  },
  { 
    title: "Books", 
    amount: 350, 
    date: new Date(2019, 8, 25) 
  },
  { 
    title: "Books2", 
    amount: 150, 
    date: new Date(2020, 5, 14) 
  },
  { 
    title: "Books3", 
    amount: 300, 
    date: new Date(2019, 9, 14) 
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
