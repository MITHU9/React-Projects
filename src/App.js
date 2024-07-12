import React from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
const App = () => {
  let expenses = [
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
      amount: 1999.99,
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
  return (
    <div>
      <h2 className="center">Let's Get Started!</h2>
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
