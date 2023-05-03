import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const DummyExpenses = [
    {
      id: 1,
      title: "Mustache Cream",
      amount: 3.89,
      date: new Date(2023, 11, 12),
    },
    {
      id: 2,
      title: "Body soap",
      amount: 6.23,
      date: new Date(2022, 10, 2),
    },
    {
      id: 3,
      title: "Booty wipes",
      amount: 5.43,
      date: new Date(2021, 8, 9),
    },
    {
      id: 4,
      title: "Soda pop",
      amount: 5.43,
      date: new Date(2021, 5, 10),
    },
  ];
  const [expenses, setExpenses] = useState(DummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

// export for use in index render file
export default App;
