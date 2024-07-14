import React, { useState, useEffect } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

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

  // useEffect(() => {
  //   fetch("https://api.escuelajs.co/api/v1/products")
  //     .then((response) => response.json())
  //     .then((data) => {
  //console.log(data);
  //       setExpenses(data);
  //     });
  // }, []);

  const newExpenseObject = (newObject) => {
    const updatedExpenses = [newObject, ...expenses];
    setExpenses(updatedExpenses);
    //console.log(newObject);
    // fetch("https://api.escuelajs.co/api/v1/products/", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newObject),
    // });
  };
  return (
    <div>
      <h2 className="center">Let's Get Started!</h2>
      <NewExpense addExpenseObject={newExpenseObject} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
