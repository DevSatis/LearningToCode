import Expenses from "./components/Expenses";
function App() {
  const expenses = [
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

  return (
    <div className="App">
      <h1>Let's get started!</h1>
      <Expenses expenses />

    </div>
  );
}

export default App;
