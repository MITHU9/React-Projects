import React, { useRef, useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const title = useRef();
  // const titleChange = (e) => setTitle(e.target.value);
  const amountChange = (e) => setAmount(e.target.value);
  const dateChange = (e) => setDate(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();
    const newTitle = title.current.value;
    const expense = {
      title: newTitle,
      amount: parseFloat(amount),
      date: new Date(date),
    };
    // Add the new expense to the expenses state here
    //console.log("New expense added: ", expense);
    props.saveExpenseFormData(expense);
    setAmount("");
    setDate("");
    title.current.value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title:</label>
          <input type="text" ref={title} placeholder="Add Title" required />
        </div>
        <div className="new-expense__control">
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            placeholder="Add Amount"
            min="0.01"
            step="0.01"
            onChange={amountChange}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={dateChange}
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
