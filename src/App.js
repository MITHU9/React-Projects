import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
import { ItemContext } from "./store/itemStorage";

let Dummy_Expense = [
  {
    id: 1,
    date: new Date(2024, 4, 15),
    title: "Groceries",
    amount: 123.45,
  },
  {
    id: 2,
    date: new Date(2024, 5, 10),
    title: "House Rent",
    amount: 199.99,
  },
  {
    id: 3,
    date: new Date(2024, 3, 12),
    title: "Car Payment",
    amount: 456.78,
  },
  {
    id: 4,
    date: new Date(2024, 7, 18),
    title: "Phone Bill",
    amount: 234.56,
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(Dummy_Expense);

  const addNewExpenses = (newObject) => {
    setExpenses((currExpenses) => {
      return [newObject, ...currExpenses];
    });
  };
  return (
    <ItemContext.Provider
      value={{
        item: expenses,
        addNewExpenses: addNewExpenses,
      }}
    >
      <div>
        <h2 className="center">Let's Get Started!</h2>
        <NewExpense />
        <Expenses />
      </div>
    </ItemContext.Provider>
  );
};

export default App;
