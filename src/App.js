import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

let INITIAL_EXPENSE = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.23,
    date: new Date(2023, 2, 23),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 923.23,
    date: new Date(2023, 1, 93),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 943.23,
    date: new Date(2023, 1, 20),
  },
  {
    id: "e4",
    title: "Groceries",
    amount: 104.2,
    date: new Date(2023, 3, 23),
  },
  {
    id: "e5",
    title: "Cable",
    amount: 50.89,
    date: new Date(2023, 3, 1),
  },
];
const App = () => {

  const [expenseArray, setExpenseArray] = useState(INITIAL_EXPENSE);

  const addExpenseHandler = expense => {
    setExpenseArray((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses list={expenseArray} />
    </div>
  );
};

export default App;
